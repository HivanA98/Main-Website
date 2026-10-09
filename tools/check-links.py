"""Static check of every internal link and asset reference on the site.

    python tools/check-links.py

Walks each .html file, collects href/src/srcset values plus url(...) from
the CSS files, and resolves every site-local one against the files on disk.
Also asserts the invariants this site depends on:

  * no leftover /Ivan-Armadi-Portfolio/ paths
  * every asset reference is absolute (starts with "/")
  * CNAME holds exactly the custom domain
  * the shared nav is identical on every page

Exit code 0 = clean, 1 = problems found. No dependencies.
"""
import io
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
ROOT = os.path.abspath(ROOT)
DOMAIN = "ivan-armadi-hasugian.my.id"

PAGES = ["index.html", "404.html", "portfolio/index.html",
         "publication/index.html",
         "publication/literature-review-on-the-therapeutic-potential-of-bacteriophages-against-resistant-staphylococcus-aureus/index.html",
         "publication/in-silico-characterization-of-lysis-and-host-recognition-modules-in-staphylococcus-aureus-bacteriophage-genomes/index.html",
         "kaiwa/index.html",
         "kaiwa-keigo/index.html"]

errors = []
warnings = []
checked = 0


def rel(p):
    return os.path.relpath(p, ROOT).replace("\\", "/")


def read(path):
    with io.open(os.path.join(ROOT, path), encoding="utf-8", newline="") as fh:
        return fh.read()


def resolve(ref, from_file):
    """Map a site-local reference to a path on disk, or None if external."""
    if re.match(r"^(https?:)?//|^(mailto|tel|data|javascript):", ref):
        return None
    ref = ref.split("#")[0].split("?")[0]
    if not ref:
        return None
    if ref.startswith("/"):
        target = os.path.join(ROOT, ref.lstrip("/"))
    else:
        target = os.path.join(ROOT, os.path.dirname(from_file), ref)
    target = os.path.normpath(target)
    # directory URL -> its index.html
    if ref.endswith("/") or os.path.isdir(target):
        target = os.path.join(target, "index.html")
    return target


# ---------------------------------------------------------------- 1. pages
ATTR = re.compile(r'(?:href|src)\s*=\s*"([^"]*)"')
SRCSET = re.compile(r'srcset\s*=\s*"([^"]*)"')

for page in PAGES:
    full = os.path.join(ROOT, page)
    if not os.path.isfile(full):
        errors.append("missing page: %s" % page)
        continue
    html = read(page)

    refs = ATTR.findall(html)
    for s in SRCSET.findall(html):
        refs += [c.strip().split()[0] for c in s.split(",") if c.strip()]

    for ref in refs:
        target = resolve(ref, page)
        if target is None:
            continue
        checked += 1
        if not os.path.exists(target):
            errors.append("%s -> %s  (404: %s)" % (page, ref, rel(target)))
        # asset references must be absolute
        if re.match(r"^(assets|tools)/", ref):
            errors.append("%s -> %s  (relative asset path, must start with /)"
                          % (page, ref))

# ---------------------------------------------------------------- 2. css url()
CSS = ["assets/css/site.css", "assets/css/portfolio.css",
       "assets/css/publication.css", "assets/css/icons.css",
       "assets/css/kaiwa.css", "assets/css/keigo.css"]

for css in CSS:
    full = os.path.join(ROOT, css)
    if not os.path.isfile(full):
        errors.append("missing stylesheet: %s" % css)
        continue
    for ref in re.findall(r'url\(\s*["\']?([^"\')]+)["\']?\s*\)', read(css)):
        target = resolve(ref, css)
        if target is None:
            continue
        checked += 1
        if not os.path.exists(target):
            errors.append("%s -> %s  (404: %s)" % (css, ref, rel(target)))
        if not ref.startswith("/"):
            warnings.append("%s -> %s  (relative url(), prefer /assets/...)"
                            % (css, ref))

# ---------------------------------------------------- 3. no legacy base path
for dirpath, dirnames, filenames in os.walk(ROOT):
    dirnames[:] = [d for d in dirnames if d != ".git"]
    for name in filenames:
        if not name.endswith((".html", ".css", ".js", ".xml", ".txt",
                              ".yml", ".py", ".md")):
            continue
        path = os.path.join(dirpath, name)
        if os.path.abspath(path) == os.path.abspath(__file__):
            continue            # this file names the old path on purpose
        try:
            with io.open(path, encoding="utf-8", newline="") as fh:
                body = fh.read()
        except (UnicodeDecodeError, OSError):
            continue
        for m in re.finditer(r"/Ivan-Armadi-Portfolio/", body):
            line = body.count("\n", 0, m.start()) + 1
            errors.append("%s:%d  leftover /Ivan-Armadi-Portfolio/ path"
                          % (rel(path), line))

# ---------------------------------------------------------------- 4. CNAME
cname_path = os.path.join(ROOT, "CNAME")
if not os.path.isfile(cname_path):
    errors.append("CNAME is missing")
else:
    with io.open(cname_path, "rb") as fh:
        raw = fh.read()
    if raw.decode("utf-8").strip() != DOMAIN:
        errors.append("CNAME content is %r, expected %r"
                      % (raw.decode("utf-8"), DOMAIN))
    else:
        print("CNAME ok: %s (%d bytes, no trailing newline: %s)"
              % (DOMAIN, len(raw), not raw.endswith(b"\n")))

# ------------------------------------------------- 5. shared nav consistency
NAV = re.compile(r'<nav class="site-nav".*?</nav>', re.S)
LINK = re.compile(r'<li><a href="([^"]+)"[^>]*>([^<]+)</a></li>')

navs = {}
for page in PAGES:
    if not os.path.isfile(os.path.join(ROOT, page)):
        continue
    m = NAV.search(read(page))
    if not m:
        errors.append("%s: shared nav (.site-nav) not found" % page)
        continue
    navs[page] = LINK.findall(m.group(0))

if navs:
    reference = navs[PAGES[0]]
    for page, links in navs.items():
        if links != reference:
            errors.append("%s: shared nav differs from %s\n    %s\n    %s"
                          % (page, PAGES[0], links, reference))

# active marker: exactly one per page, pointing at that page
EXPECTED_ACTIVE = {
    "index.html": "/",
    "portfolio/index.html": "/portfolio/",
    "publication/index.html": "/publication/",
    # detail pages keep the section entry lit
    "publication/literature-review-on-the-therapeutic-potential-of-bacteriophages-against-resistant-staphylococcus-aureus/index.html": "/publication/",
    "publication/in-silico-characterization-of-lysis-and-host-recognition-modules-in-staphylococcus-aureus-bacteriophage-genomes/index.html": "/publication/",
    "kaiwa/index.html": "/kaiwa/",
    "kaiwa-keigo/index.html": "/kaiwa-keigo/",
    "404.html": None,          # 404 matches no nav entry
}
for page, want in EXPECTED_ACTIVE.items():
    if not os.path.isfile(os.path.join(ROOT, page)):
        continue
    m = NAV.search(read(page))
    if not m:
        continue
    active = re.findall(r'<a href="([^"]+)" aria-current="page"', m.group(0))
    if want is None:
        if active:
            errors.append("%s: should have no active nav item, has %s"
                          % (page, active))
    elif active != [want]:
        errors.append("%s: active nav item is %s, expected ['%s']"
                      % (page, active, want))

# -------------------------------------------------------- 6. ruby fallback
for js in ("assets/js/kaiwa.js", "assets/js/keigo.js"):
    src = read(js)
    if "<rp>" not in src:
        errors.append("%s: furigana renderer has no <rp> fallback" % js)
for css in ("assets/css/kaiwa.css", "assets/css/keigo.css",
            "assets/css/site.css"):
    if re.search(r"\brp\s*\{[^}]*display:\s*none", read(css)):
        errors.append("%s: `rp { display: none }` defeats the ruby fallback"
                      % css)

# ---------------------------------------------------------------- report
print("checked %d internal references across %d pages and %d stylesheets"
      % (checked, len(PAGES), len(CSS)))

if warnings:
    print("\n%d warning(s):" % len(warnings))
    for w in warnings:
        print("  ! " + w)

if errors:
    print("\n%d error(s):" % len(errors))
    for e in errors:
        print("  x " + e)
    sys.exit(1)

print("\nAll checks passed.")
