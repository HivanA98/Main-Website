"""SEO audit for every indexable page on the site.

    python tools/check-seo.py

Checks the things Google Search Console will look at, per page:
  title, meta description, canonical, lang, robots, viewport,
  Open Graph + Twitter cards, favicon, exactly one <h1>, heading order,
  image alt text, JSON-LD validity, and sitemap/robots.txt coverage.

Exit code 0 = clean, 1 = at least one error. Warnings do not fail.
No dependencies.
"""
import io
import json
import os
import re
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(os.path.abspath(__file__)), ".."))
SITE = "https://ivan-armadi-hasugian.my.id"

TITLE_MAX = 65          # beyond this Google usually truncates in results
DESC_MIN, DESC_MAX = 70, 165

errors, warnings = [], []


def read(path):
    with io.open(os.path.join(ROOT, path), encoding="utf-8", newline="") as fh:
        return fh.read()


def indexable_pages():
    """Every .html that is a real page, newest-style paths first."""
    out = []
    for dirpath, dirnames, filenames in os.walk(ROOT):
        dirnames[:] = [d for d in dirnames if d not in (".git", "__pycache__")]
        for name in filenames:
            if not name.endswith(".html"):
                continue
            rel = os.path.relpath(os.path.join(dirpath, name), ROOT)
            rel = rel.replace("\\", "/")
            if rel.startswith("google") or rel == "404.html":
                continue          # verification file / error page
            if rel in ("kaiwa/index.html", "kaiwa-keigo/index.html"):
                continue          # redirect stubs for the moved paths
            out.append(rel)
    return sorted(out)


def url_for(rel):
    if rel == "index.html":
        return SITE + "/"
    return SITE + "/" + rel[:-len("index.html")]


def attr(html, pattern):
    m = re.search(pattern, html, re.I | re.S)
    return m.group(1).strip() if m else None


def meta(html, name):
    return attr(html, r'<meta\s+name="%s"\s+content="([^"]*)"' % name)


def prop(html, p):
    return attr(html, r'<meta\s+property="%s"\s+content="([^"]*)"' % p)


def err(page, msg):
    errors.append("%s: %s" % (page, msg))


def warn(page, msg):
    warnings.append("%s: %s" % (page, msg))


pages = indexable_pages()
titles, descs, canons = {}, {}, {}

for rel in pages:
    html = read(rel)
    want_url = url_for(rel)

    # ---- lang ----
    lang = attr(html, r'<html[^>]*\blang="([^"]*)"')
    if not lang:
        err(rel, "<html> has no lang attribute")

    # ---- viewport / charset ----
    if not re.search(r'<meta\s+charset=', html, re.I):
        err(rel, "no <meta charset>")
    if not meta(html, "viewport"):
        err(rel, "no viewport meta")

    # ---- title ----
    t = attr(html, r"<title>(.*?)</title>")
    if not t:
        err(rel, "no <title>")
    else:
        titles.setdefault(t, []).append(rel)
        if len(t) > TITLE_MAX:
            warn(rel, "title is %d chars (Google truncates past ~%d)" % (len(t), TITLE_MAX))

    # ---- description ----
    d = meta(html, "description")
    if not d:
        err(rel, "no meta description")
    else:
        descs.setdefault(d, []).append(rel)
        if not (DESC_MIN <= len(d) <= DESC_MAX):
            warn(rel, "description is %d chars (aim %d-%d)" % (len(d), DESC_MIN, DESC_MAX))

    # ---- canonical ----
    c = attr(html, r'<link\s+rel="canonical"\s+href="([^"]*)"')
    if not c:
        err(rel, "no canonical link")
    else:
        canons.setdefault(c, []).append(rel)
        if c != want_url:
            err(rel, "canonical is %s, expected %s" % (c, want_url))

    # ---- robots ----
    r = meta(html, "robots") or ""
    if "noindex" in r:
        err(rel, "page is noindex but listed as indexable")

    # ---- social cards ----
    for p in ("og:type", "og:title", "og:description", "og:url", "og:image",
              "og:site_name", "og:locale"):
        if not prop(html, p):
            err(rel, "missing %s" % p)
    if prop(html, "og:url") and prop(html, "og:url") != want_url:
        err(rel, "og:url is %s, expected %s" % (prop(html, "og:url"), want_url))
    for n in ("twitter:card", "twitter:title", "twitter:description", "twitter:image"):
        if not meta(html, n):
            err(rel, "missing %s" % n)

    # ---- favicon ----
    if not re.search(r'<link\s+rel="icon"', html, re.I):
        err(rel, "no favicon link")

    # ---- author ----
    if not meta(html, "author"):
        warn(rel, "no meta author (helps tie pages to one identity)")

    # ---- headings ----
    h1 = re.findall(r"<h1\b[^>]*>(.*?)</h1>", html, re.S | re.I)
    if len(h1) == 0:
        err(rel, "no <h1>")
    elif len(h1) > 1:
        err(rel, "%d <h1> elements, expected exactly 1" % len(h1))

    levels = [int(m) for m in re.findall(r"<h([1-6])\b", html, re.I)]
    for a, b in zip(levels, levels[1:]):
        if b > a + 1:
            warn(rel, "heading jumps from h%d to h%d" % (a, b))
            break

    # ---- images ----
    for img in re.findall(r"<img\b[^>]*>", html, re.I):
        if not re.search(r'\balt="', img):
            err(rel, "an <img> has no alt attribute")
            break

    # ---- JSON-LD ----
    blocks = re.findall(r'<script type="application/ld\+json">(.*?)</script>',
                        html, re.S)
    if not blocks:
        err(rel, "no JSON-LD structured data")
    for b in blocks:
        try:
            json.loads(b)
        except Exception as e:
            err(rel, "invalid JSON-LD: %s" % e)

# ---- duplicates across pages ----
for t, where in titles.items():
    if len(where) > 1:
        err(where[0], "title duplicated on: %s" % ", ".join(where))
for d, where in descs.items():
    if len(where) > 1:
        err(where[0], "description duplicated on: %s" % ", ".join(where))
for c, where in canons.items():
    if len(where) > 1:
        err(where[0], "canonical duplicated on: %s" % ", ".join(where))

# ---- sitemap coverage ----
sm = read("sitemap.xml")
listed = set(re.findall(r"<loc>([^<]+)</loc>", sm))
expected = {url_for(p) for p in pages}
for missing in sorted(expected - listed):
    errors.append("sitemap.xml: missing %s" % missing)
for extra in sorted(listed - expected):
    errors.append("sitemap.xml: lists %s which is not a page" % extra)

# ---- robots.txt ----
rb = read("robots.txt")
if "Sitemap:" not in rb:
    errors.append("robots.txt: no Sitemap line")
elif SITE + "/sitemap.xml" not in rb:
    errors.append("robots.txt: Sitemap line does not point at %s/sitemap.xml" % SITE)
if re.search(r"^Disallow:\s*/\s*$", rb, re.M):
    errors.append("robots.txt: Disallow: / blocks the whole site")

# ---- 404 must be noindex ----
if os.path.isfile(os.path.join(ROOT, "404.html")):
    if "noindex" not in (meta(read("404.html"), "robots") or ""):
        errors.append("404.html: should be noindex")

# ---- schema.org date values ----
# Search Console reported "Invalid datetime value for dateModified" because
# a bare date was used where Google's Profile page spec types the field as
# DateTime. Date-only is fine for datePublished on an article, but
# dateCreated/dateModified on a ProfilePage must carry a time and offset.
ISO_DATE = re.compile(r"^\d{4}(-\d{2}(-\d{2})?)?$")
ISO_DATETIME = re.compile(
    r"^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$")


def walk_nodes(node):
    """Yield every dict in a JSON-LD tree."""
    if isinstance(node, dict):
        yield node
        for v in node.values():
            for n in walk_nodes(v):
                yield n
    elif isinstance(node, list):
        for v in node:
            for n in walk_nodes(v):
                yield n


for rel in pages:
    for blk in re.findall(r'<script type="application/ld\+json">(.*?)</script>',
                          read(rel), re.S):
        try:
            data = json.loads(blk)
        except Exception:
            continue                      # already reported above
        for node in walk_nodes(data):
            ntype = node.get("@type")
            for field in ("dateCreated", "dateModified", "datePublished"):
                val = node.get(field)
                if not isinstance(val, str):
                    continue
                if ISO_DATETIME.match(val):
                    continue
                if not ISO_DATE.match(val):
                    err(rel, "%s on %s is not ISO 8601: %r" % (field, ntype, val))
                elif ntype == "ProfilePage" and field != "datePublished":
                    err(rel, "%s on ProfilePage is date-only (%r); Google types "
                             "it as DateTime, so give it a time and offset"
                        % (field, val))

    # a ProfilePage without dateModified loses the field in the rich result
    for blk in re.findall(r'<script type="application/ld\+json">(.*?)</script>',
                          read(rel), re.S):
        try:
            data = json.loads(blk)
        except Exception:
            continue
        for node in walk_nodes(data):
            if node.get("@type") == "ProfilePage" and "dateModified" not in node:
                warn(rel, "ProfilePage has no dateModified")

# ---- orphan check: content links, not nav boilerplate ----
# A link repeated in the nav bar on every page carries little weight. What
# matters is whether a page is reachable from another page's BODY. Without
# this, adding a section and wiring only the nav looks fine while the new
# pages sit effectively orphaned from the pages that could rank them.
BAR_RE = re.compile(r'<div class="site-bar">.*?</div>\s*</div>', re.S)
FOOTER_RE = re.compile(r'<footer class="site-foot">.*?</footer>', re.S)

inbound = {rel: set() for rel in pages}
for src in pages:
    body = read(src).split("<body", 1)[-1]
    body = FOOTER_RE.sub("", BAR_RE.sub("", body))
    for dst in pages:
        if dst == src:
            continue
        href = "/" if dst == "index.html" else "/" + dst[:-len("index.html")]
        if 'href="%s"' % href in body:
            inbound[dst].add(src)

for rel in pages:
    if rel == "index.html":
        continue              # the home page needs no inbound content link
    if not inbound[rel]:
        warn(rel, "no inbound link from another page's content "
                  "(reachable only through the nav bar)")

# ---- report ----
print("audited %d indexable pages\n" % len(pages))
for p in pages:
    print("  %-72s %s" % (p, url_for(p)))
print()

if warnings:
    print("%d warning(s):" % len(warnings))
    for w in warnings:
        print("  ! " + w)
    print()

if errors:
    print("%d error(s):" % len(errors))
    for e in errors:
        print("  x " + e)
    sys.exit(1)

print("SEO checks passed.")
