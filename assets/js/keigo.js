/* ============================================================
   敬語会話 — script.js
   Data dimuat dari data.js (global KEIGO_DATA) — tanpa fetch,
   sehingga jalan baik di file:// maupun GitHub Pages.
   ============================================================ */

"use strict";

/* ---------- util: furigana {漢字:よみ} -> <ruby> ---------- */
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function renderFurigana(str) {
  // pisahkan token {kanji:yomi} dari teks biasa, escape tiap bagian
  let out = "", last = 0;
  const re = /\{([^:{}]+):([^{}]+)\}/g;
  let mm;
  while ((mm = re.exec(str)) !== null) {
    out += esc(str.slice(last, mm.index));
    // <rp> = fallback tanda kurung untuk peramban tanpa dukungan ruby.
    // Peramban yang mendukung ruby menyembunyikannya sendiri (UA stylesheet),
    // jadi JANGAN tambahkan aturan `rp { display: none }` di CSS.
    out += `<ruby>${esc(mm[1])}<rp>（</rp><rt>${esc(mm[2])}</rt><rp>）</rp></ruby>`;
    last = re.lastIndex;
  }
  out += esc(str.slice(last));
  return out;
}

/* ---------- state ---------- */
const LS_KEY = "keigo.learned.v1";
let deck = KEIGO_DATA.slice();   // kartu yang sedang ditampilkan (setelah filter/acak)
let index = 0;
let activeFilter = "すべて";
const learned = loadLearned();

function loadLearned() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch { return new Set(); }
}
function saveLearned() {
  try { localStorage.setItem(LS_KEY, JSON.stringify([...learned])); } catch {}
}
/* id stabil per kartu (pakai jp mentah) */
const keyOf = (c) => c.jp;

/* ---------- elemen ---------- */
const $ = (sel) => document.querySelector(sel);
const els = {
  card: $("#card"),
  badge: $("#badge"),
  jp: $("#jp"),
  romaji: $("#romaji"),
  meaning: $("#meaning"),
  reading: $("#reading"),
  note: $("#note"),
  counter: $("#counter"),
  fill: $("#fill"),
  filters: $("#filters"),
};

/* ---------- filter (kategori) ---------- */
const CATS = ["すべて", "動詞", "挨拶", "依頼", "メール", "返答", "電話", "謝罪", "報告", "注意"];
const CAT_LABEL = {
  "すべて": "Semua", "動詞": "Verba", "挨拶": "Salam", "依頼": "Permintaan",
  "メール": "Email", "返答": "Respons", "電話": "Telepon", "謝罪": "Maaf",
  "報告": "Laporan", "注意": "Jebakan"
};

function buildFilters() {
  CATS.forEach((cat) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = cat === "すべて" ? "すべて" : `${cat}`;
    b.title = CAT_LABEL[cat];
    b.setAttribute("aria-pressed", String(cat === activeFilter));
    b.addEventListener("click", () => setFilter(cat));
    els.filters.appendChild(b);
  });
}
function setFilter(cat) {
  activeFilter = cat;
  [...els.filters.children].forEach((b) =>
    b.setAttribute("aria-pressed", String(b.textContent === cat)));
  rebuildDeck();
}

/* ---------- membangun deck sesuai filter (+ acak jika aktif) ---------- */
let shuffled = false;
function rebuildDeck() {
  const base = (activeFilter === "すべて")
    ? KEIGO_DATA.slice()
    : KEIGO_DATA.filter((c) => c.cat === activeFilter || c.type === activeFilter);
  deck = base;
  if (shuffled) shuffleInPlace(deck);
  index = 0;
  render();
}
function shuffleInPlace(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/* ---------- render kartu aktif ---------- */
function render() {
  if (deck.length === 0) {
    els.jp.innerHTML = `<span class="empty">Tidak ada kartu untuk filter ini.</span>`;
    els.romaji.textContent = "";
    els.badge.textContent = "";
    els.counter.innerHTML = "";
    els.fill.style.width = "0%";
    return;
  }
  const c = deck[index];

  els.badge.textContent = c.type;
  els.badge.setAttribute("data-type", c.type);
  const catSpan = document.createElement("span");
  catSpan.className = "cat";
  catSpan.lang = "id";   // label Indonesia di dalam badge lang="ja"
  catSpan.textContent = CAT_LABEL[c.cat] || c.cat;
  els.badge.appendChild(catSpan);

  els.jp.innerHTML = renderFurigana(c.jp);
  els.romaji.textContent = c.romaji;
  els.meaning.textContent = c.id;
  els.reading.textContent = c.yomi;
  els.note.innerHTML = renderFurigana(c.note);

  els.card.classList.toggle("learned", learned.has(keyOf(c)));
  els.card.classList.remove("is-flipped");

  // progres = kartu dikuasai / total keseluruhan
  const total = KEIGO_DATA.length;
  els.counter.innerHTML =
    `<b>${index + 1}</b> / ${deck.length} &nbsp;·&nbsp; 覚えた <b>${learned.size}</b>/${total}`;
  els.fill.style.width = `${Math.round((learned.size / total) * 100)}%`;
}

/* ---------- aksi ---------- */
function flip()  { if (deck.length) els.card.classList.toggle("is-flipped"); }
function next()  { if (deck.length) { index = (index + 1) % deck.length; render(); } }
function prev()  { if (deck.length) { index = (index - 1 + deck.length) % deck.length; render(); } }
function toggleLearned() {
  if (!deck.length) return;
  const k = keyOf(deck[index]);
  learned.has(k) ? learned.delete(k) : learned.add(k);
  saveLearned();
  render();
}
function toggleShuffle(btn) {
  shuffled = !shuffled;
  btn.classList.toggle("is-on", shuffled);
  btn.setAttribute("aria-pressed", String(shuffled));
  rebuildDeck();
}

/* ---------- pemasangan event ---------- */
function wire() {
  els.card.addEventListener("click", flip);
  $("#btn-flip").addEventListener("click", (e) => { e.stopPropagation(); flip(); });
  $("#btn-prev").addEventListener("click", prev);
  $("#btn-next").addEventListener("click", next);
  $("#btn-learn").addEventListener("click", toggleLearned);

  const shuffleBtn = $("#btn-shuffle");
  shuffleBtn.addEventListener("click", () => toggleShuffle(shuffleBtn));

  $("#tg-furigana").addEventListener("change", (e) =>
    document.body.classList.toggle("hide-furigana", !e.target.checked));
  $("#tg-romaji").addEventListener("change", (e) =>
    document.body.classList.toggle("hide-romaji", !e.target.checked));

  // tema
  document.querySelectorAll(".theme-dot").forEach((dot) => {
    dot.addEventListener("click", () => setTheme(dot.dataset.theme));
  });

  // pintasan papan ketik
  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, select, textarea")) return;
    switch (e.key) {
      case " ": case "Enter": e.preventDefault(); flip(); break;
      case "ArrowRight": next(); break;
      case "ArrowLeft": prev(); break;
      case "s": case "S": toggleShuffle(shuffleBtn); break;
      case "l": case "L": toggleLearned(); break;
    }
  });
}

/* ---------- tema (dengan penyimpanan) ---------- */
function setTheme(name) {
  document.body.classList.remove("theme-washi", "theme-ai", "theme-matcha");
  document.body.classList.add("theme-" + name);
  document.querySelectorAll(".theme-dot").forEach((d) =>
    d.setAttribute("aria-pressed", String(d.dataset.theme === name)));
  try { localStorage.setItem("keigo.theme", name); } catch {}
}
function restoreTheme() {
  let t = "washi";
  try { t = localStorage.getItem("keigo.theme") || "washi"; } catch {}
  setTheme(t);
}

/* ---------- sakura ambient (hormati reduced-motion) ---------- */
function spawnSakura() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const N = 10;
  for (let i = 0; i < N; i++) {
    const p = document.createElement("div");
    p.className = "sakura";
    const size = 6 + Math.random() * 8;
    p.style.left = Math.random() * 100 + "vw";
    p.style.width = p.style.height = size + "px";
    p.style.animationDuration = 9 + Math.random() * 9 + "s";
    p.style.animationDelay = -Math.random() * 12 + "s";
    p.style.opacity = 0.15 + Math.random() * 0.2;
    document.body.appendChild(p);
  }
}

/* ---------- init ---------- */
function init() {
  if (typeof KEIGO_DATA === "undefined" || !Array.isArray(KEIGO_DATA)) {
    els.jp.innerHTML = `<span class="empty">Data gagal dimuat. Pastikan data.js ada.</span>`;
    return;
  }
  buildFilters();
  wire();
  restoreTheme();
  spawnSakura();
  rebuildDeck();
}

document.addEventListener("DOMContentLoaded", init);
