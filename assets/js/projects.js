/* ============================================================
   projects.js — sumber data kartu proyek portofolio
   ------------------------------------------------------------
   MENAMBAH PROYEK BARU: tambahkan satu objek ke array PROJECTS
   di bawah. Tidak perlu menyentuh index.html sama sekali.

   Skema per proyek:
     category  : nilai filter; harus ada di PROJECT_FILTERS
     type      : { label, color } — tag kecil di kepala kartu
     badges    : [] atau [{ href, img, alt }] — lencana status CI
     title     : judul proyek (teks biasa, bukan HTML)
     desc      : satu kalimat ringkas
     tags      : daftar teknologi
     features  : daftar poin
     link      : { href, icon, label } — tombol bawah; null = tanpa tombol

   Berkas ini dimuat SEBELUM portfolio.js. Kartu dirender
   sinkron saat parsing, sehingga sudah ada di DOM ketika
   portfolio.js memasang filter dan animasi pada DOMContentLoaded.
   ============================================================ */

/* Urutan chip filter. Chip hanya muncul bila ada proyek memakainya
   (kecuali "all"). Kategori baru: daftarkan di sini. */
var PROJECT_FILTERS = [
  { value: "all",        label: "All" },
  { value: "automation", label: "Test Automation" },
  { value: "other",      label: "Other" }
];

var TYPE_AUTOMATION = { label: "Test Automation", color: "#7a1b7e" };
var TYPE_DATA       = { label: "Data Science",    color: "#0077b6" };
var TYPE_BIOINFO    = { label: "Bioinformatics",  color: "#0077b6" };

var GH = "https://github.com/HivanA98";

var PROJECTS = [
  {
    category: "automation",
    type: TYPE_AUTOMATION,
    badges: [
      { href: GH + "/Cypress-CodeJS/actions/workflows/saucedemo.yml",
        img:  GH + "/Cypress-CodeJS/actions/workflows/saucedemo.yml/badge.svg",
        alt:  "Saucedemo Cypress workflow status" },
      { href: GH + "/Cypress-CodeJS/actions/workflows/karate.yml",
        img:  GH + "/Cypress-CodeJS/actions/workflows/karate.yml/badge.svg",
        alt:  "Karate API workflow status" }
    ],
    title: "Cypress & Karate Automation",
    desc: "12 projects with 170+ tests on 10 applications, built with Cypress and Karate.",
    tags: ["Cypress", "JavaScript", "Cucumber", "Karate", "GitHub Actions"],
    features: [
      "Page Object Model, BDD (Cucumber/Gherkin), cy.intercept network stubbing, and Faker data-driven tests",
      "Karate API tests covering CRUD and JSON schema validation",
      "One reusable GitHub Actions workflow, one badge per project"
    ],
    link: { href: GH + "/Cypress-CodeJS", icon: "fab fa-github", label: "View on GitHub" }
  },

  {
    category: "automation",
    type: TYPE_AUTOMATION,
    badges: [
      { href: GH + "/Playwright_Python/actions/workflows/tests.yml",
        img:  GH + "/Playwright_Python/actions/workflows/tests.yml/badge.svg",
        alt:  "Playwright tests workflow status" }
    ],
    title: "Playwright + pytest (Saucedemo)",
    desc: "52 tests for Saucedemo written in Python with Playwright and pytest.",
    tags: ["Playwright", "Python", "pytest", "GitHub Actions"],
    features: [
      "26 UI, 12 E2E, 7 known-bug strict xfail, and 7 HTTP-level API tests",
      "Page Object Model with reusable components",
      "CI on Chromium, Firefox, and WebKit on push, PR, and daily schedule"
    ],
    link: { href: GH + "/Playwright_Python", icon: "fab fa-github", label: "View on GitHub" }
  },

  {
    category: "automation",
    type: TYPE_AUTOMATION,
    badges: [
      { href: GH + "/Robot-Framework/actions/workflows/robot-tests.yml",
        img:  GH + "/Robot-Framework/actions/workflows/robot-tests.yml/badge.svg",
        alt:  "Robot Framework tests workflow status" }
    ],
    title: "Robot Framework",
    desc: "54 tests on 4 web apps with Robot Framework and SeleniumLibrary.",
    tags: ["Robot Framework", "SeleniumLibrary", "Python", "Pabot", "GitHub Actions"],
    features: [
      "Page Object Model and BDD suites",
      "Pabot parallel run (~6.5 min to ~2 min)",
      "Robocop lint; CI on demo apps only (production sites never submit forms)"
    ],
    link: { href: GH + "/Robot-Framework", icon: "fab fa-github", label: "View on GitHub" }
  },

  {
    category: "automation",
    type: TYPE_AUTOMATION,
    badges: [
      { href: GH + "/Katalon-Studio/actions/workflows/katalon-ci.yml",
        img:  GH + "/Katalon-Studio/actions/workflows/katalon-ci.yml/badge.svg",
        alt:  "Katalon CI workflow status" }
    ],
    title: "Katalon Studio",
    desc: "Web, API (ReqRes), and Android test automation in Katalon Studio.",
    tags: ["Katalon Studio", "Groovy", "Appium", "GitHub Actions"],
    features: [
      "Shared Page Object core",
      "CSV data-driven tests",
      "Android emulator job in CI"
    ],
    link: { href: GH + "/Katalon-Studio", icon: "fab fa-github", label: "View on GitHub" }
  },

  {
    category: "other",
    type: TYPE_DATA,
    badges: [
      { href: GH + "/DataScience-BinarAcademy/actions/workflows/gold.yml",
        img:  GH + "/DataScience-BinarAcademy/actions/workflows/gold.yml/badge.svg",
        alt:  "Gold CI workflow status" }
    ],
    title: "Data Science: Indonesian Sentiment API",
    desc: "Rebuilt Binar Academy bootcamp project that serves an Indonesian sentiment model through a Flask + Swagger API.",
    tags: ["Python", "scikit-learn", "Flask", "pytest"],
    features: [
      "Removed data leakage from the original training",
      "Macro-F1 0.797 to 0.857",
      "pytest in GitHub Actions"
    ],
    link: { href: GH + "/DataScience-BinarAcademy", icon: "fab fa-github", label: "View on GitHub" }
  },

  {
    category: "other",
    type: TYPE_BIOINFO,
    badges: [],
    title: "Bioinformatics: Bacteriophage Genome Pipeline",
    desc: "Built Python-based batch pipelines for automated extraction, validation, classification, and processing of genomic datasets, designed to scale across 1,000+ genome files.",
    tags: ["Python", "Biopython", "pandas", "Docker", "Linux", "Git"],
    features: [
      "Automated genomic data extraction and classification",
      "Designed to scale across 1,000+ genome files"
    ],
    link: { href: "https://doi.org/10.5281/zenodo.21988477",
            icon: "fas fa-external-link-alt", label: "View on Zenodo" }
  }

  /* ----------------------------------------------------------
     TEMPLATE PROYEK BARU — salin, lepas komentar, isi:

  ,{
    category: "automation",
    type: TYPE_AUTOMATION,
    badges: [
      { href: GH + "/Nama-Repo/actions/workflows/ci.yml",
        img:  GH + "/Nama-Repo/actions/workflows/ci.yml/badge.svg",
        alt:  "Nama-Repo CI workflow status" }
    ],
    title: "Judul Proyek",
    desc: "Satu kalimat ringkas tentang proyek ini.",
    tags: ["Tool", "Bahasa", "GitHub Actions"],
    features: [
      "Poin pertama",
      "Poin kedua"
    ],
    link: { href: GH + "/Nama-Repo", icon: "fab fa-github", label: "View on GitHub" }
  }

     ---------------------------------------------------------- */
];

/* ============================================================
   Renderer
   ============================================================ */
(function () {
  "use strict";

  var grid = document.querySelector(".projects-grid");
  var filterBox = document.querySelector(".filter-container");
  if (!grid) return;

  function el(tag, className, text) {
    var n = document.createElement(tag);
    if (className) n.className = className;
    if (text != null) n.textContent = text;   // textContent = escaping aman
    return n;
  }

  function extLink(href) {
    var a = el("a");
    a.href = href;
    a.target = "_blank";
    a.rel = "noopener";
    return a;
  }

  /* ---- chip filter: hanya kategori yang benar-benar terpakai ---- */
  function renderFilters() {
    if (!filterBox) return;
    var used = {};
    PROJECTS.forEach(function (p) { used[p.category] = true; });

    filterBox.textContent = "";
    PROJECT_FILTERS.forEach(function (f) {
      if (f.value !== "all" && !used[f.value]) return;
      var b = el("button", "filter-btn" + (f.value === "all" ? " active" : ""), f.label);
      b.setAttribute("data-filter", f.value);
      filterBox.appendChild(b);
    });
  }

  /* ---- satu kartu proyek ---- */
  function renderCard(p) {
    var card = el("div", "project-card");
    card.setAttribute("data-category", p.category);

    var head = el("div", "project-img-wrapper project-badges");
    var tag = el("span", "project-type-tag", p.type.label);
    tag.style.backgroundColor = p.type.color;
    head.appendChild(tag);

    (p.badges || []).forEach(function (b) {
      var a = extLink(b.href);
      var img = el("img");
      img.src = b.img;
      img.height = 20;
      img.decoding = "async";
      img.alt = b.alt;
      a.appendChild(img);
      head.appendChild(a);
    });
    card.appendChild(head);

    var body = el("div", "project-content");
    body.appendChild(el("h3", "project-title", p.title));
    body.appendChild(el("p", "project-desc", p.desc));

    var tags = el("div", "tags-container project-tags");
    (p.tags || []).forEach(function (t) {
      tags.appendChild(el("span", "skill-tag", t));
    });
    body.appendChild(tags);

    var feats = el("ul", "project-features");
    (p.features || []).forEach(function (f) {
      feats.appendChild(el("li", null, f));
    });
    body.appendChild(feats);

    if (p.link) {
      var a = extLink(p.link.href);
      a.className = "btn-view-cert project-link";
      var i = el("i", p.link.icon);
      i.setAttribute("aria-hidden", "true");
      a.appendChild(i);
      a.appendChild(document.createTextNode(" " + p.link.label));
      body.appendChild(a);
    }

    card.appendChild(body);
    return card;
  }

  renderFilters();

  var frag = document.createDocumentFragment();
  PROJECTS.forEach(function (p) { frag.appendChild(renderCard(p)); });
  grid.textContent = "";
  grid.appendChild(frag);
})();
