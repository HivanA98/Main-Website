/* ============================================================
   生活会話 — script.js
   Data dimuat dari data/*.js (global KAIWA_DATA & KAIWA_CATS) —
   tanpa fetch, sehingga jalan di file:// maupun GitHub Pages.
   ============================================================ */

"use strict";

/* Tanggal berangkat untuk hitung mundur di header. Ubah sesuai jadwalmu. */
const DEPARTURE = new Date(2027, 3, 1); // 1 April 2027 (bulan dihitung dari 0)

/* ---------- util: furigana {漢字:よみ} -> <ruby> ---------- */
const FURI = /\{([^:{}]+):([^{}]+)\}/g;
function esc(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function renderFurigana(str) {
  // pisahkan token {kanji:yomi} dari teks biasa, escape tiap bagian
  let out = "", last = 0, mm;
  FURI.lastIndex = 0;
  while ((mm = FURI.exec(str)) !== null) {
    out += esc(str.slice(last, mm.index));
    // <rp> = fallback tanda kurung untuk peramban tanpa dukungan ruby.
    // Peramban yang mendukung ruby menyembunyikannya sendiri (UA stylesheet),
    // jadi JANGAN tambahkan aturan `rp { display: none }` di CSS.
    out += `<ruby>${esc(mm[1])}<rp>（</rp><rt>${esc(mm[2])}</rt><rp>）</rp></ruby>`;
    last = FURI.lastIndex;
  }
  out += esc(str.slice(last));
  return out;
}
const surfaceOf = (s) => s.replace(FURI, "$1");   // teks kanji tanpa furigana
const readingOf = (s) => s.replace(FURI, "$2");   // teks kana
const toHira = (s) => s.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));

/* ---------- penyimpanan (key berbeda dari 敬語会話 agar tidak bentrok
   bila keduanya di-host di domain yang sama, mis. GitHub Pages) ---------- */
const LS = { learned: "kaiwa.learned.v1", theme: "kaiwa.theme", prefs: "kaiwa.prefs.v1" };
function lsGet(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch { return fallback; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch {}
}

/* ---------- state ---------- */
const learned = new Set(lsGet(LS.learned, []));
const prefs = Object.assign({ furigana: true, romaji: true, slow: false, hide: false }, lsGet(LS.prefs, {}));
const keyOf = (c) => c.jp;          // id stabil per kartu (validator menjamin jp unik)

let deck = [];
let index = 0;
let activeCat = "すべて";
let activeRole = "all";
let query = "";
let shuffled = false;
let listenMode = false;

/* ---------- elemen ---------- */
const $ = (sel) => document.querySelector(sel);
const els = {
  card: $("#card"), badge: $("#badge"), role: $("#role"),
  jp: $("#jp"), romaji: $("#romaji"), listenPrompt: $("#listen-prompt"),
  meaning: $("#meaning"), reading: $("#reading"),
  reply: $("#reply"), replyText: $("#reply-text"), note: $("#note"),
  counter: $("#counter"), fill: $("#fill"),
  filters: $("#filters"), roles: $("#roles"), search: $("#search"),
  speakBtn: $("#btn-speak"), shuffleBtn: $("#btn-shuffle"), hideBtn: $("#btn-hide"),
};

/* ---------- kategori ---------- */
const CAT_LABEL = Object.fromEntries([["すべて", "Semua"], ...(window.KAIWA_CATS || []), ["注意", "Jebakan"]]);
const ROLE_LABEL = { "聞": "聞く · Dengar", "話": "話す · Ucap" };

function buildFilters() {
  const count = (cat) =>
    cat === "すべて" ? KAIWA_DATA.length
      : cat === "注意" ? KAIWA_DATA.filter((c) => c.type === "注意").length
      : KAIWA_DATA.filter((c) => c.cat === cat).length;

  ["すべて", ...KAIWA_CATS.map((c) => c[0]), "注意"].forEach((cat) => {
    const b = document.createElement("button");
    b.className = "chip" + (cat === "注意" ? " chip-chuui" : "");
    b.dataset.cat = cat;
    b.title = `${CAT_LABEL[cat]} — ${count(cat)} kartu`;
    b.innerHTML = `<span class="chip-jp">${esc(cat)}<sup>${count(cat)}</sup></span><span class="chip-id">${esc(CAT_LABEL[cat])}</span>`;
    b.setAttribute("aria-pressed", String(cat === activeCat));
    b.addEventListener("click", () => setFilter(cat));
    els.filters.appendChild(b);
  });
}
function setFilter(cat) {
  activeCat = cat;
  [...els.filters.children].forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.cat === cat));
    // di HP chip berada di baris geser — pastikan chip aktif terlihat
    if (b.dataset.cat === cat && els.filters.scrollWidth > els.filters.clientWidth) {
      els.filters.scrollTo({ left: b.offsetLeft - els.filters.clientWidth / 2 + b.offsetWidth / 2, behavior: "smooth" });
    }
  });
  rebuildDeck();
}
function setRole(role) {
  activeRole = role;
  [...els.roles.children].forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.role === role)));
  rebuildDeck();
}

/* ---------- indeks pencarian (dibuat sekali saat init) ---------- */
function buildIndex() {
  KAIWA_DATA.forEach((c) => {
    c._yomi = c.yomi || readingOf(c.jp);
    c._search = [
      surfaceOf(c.jp), toHira(c._yomi), c.romaji, c.romaji.replace(/\s+/g, ""),
      c.id, c.reply ? surfaceOf(c.reply) + " " + toHira(readingOf(c.reply)) : "",
      CAT_LABEL[c.cat] || "",
    ].join(" ").toLowerCase();
  });
}

/* ---------- membangun deck sesuai filter (+ acak jika aktif) ---------- */
function matches(c) {
  if (activeCat === "注意") { if (c.type !== "注意") return false; }
  else if (activeCat !== "すべて" && c.cat !== activeCat) return false;
  if (activeRole !== "all" && c.role !== activeRole) return false;
  if (prefs.hide && learned.has(keyOf(c))) return false;
  if (query && !c._search.includes(query)) return false;
  return true;
}
function rebuildDeck() {
  deck = KAIWA_DATA.filter(matches);
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
function renderProgress() {
  const total = KAIWA_DATA.length;
  const done = KAIWA_DATA.filter((c) => learned.has(keyOf(c))).length;
  const pos = deck.length ? `<b>${index + 1}</b> / ${deck.length}` : `0 / 0`;
  els.counter.innerHTML = `${pos} &nbsp;·&nbsp; 覚えた <b>${done}</b>/${total}`;
  els.fill.style.width = `${Math.round((done / total) * 100)}%`;
}

function render() {
  els.card.classList.remove("is-flipped");
  stopSpeaking();

  if (deck.length === 0) {
    els.card.classList.add("is-empty");
    els.card.classList.remove("learned");
    const allDone = prefs.hide && KAIWA_DATA.some((c) => learned.has(keyOf(c)));
    els.jp.innerHTML = `<span class="empty">${allDone
      ? "Semua kartu di filter ini sudah dikuasai (済).<br>Matikan 「未習のみ」 untuk mengulang."
      : "Tidak ada kartu yang cocok dengan filter/pencarian ini."}</span>`;
    els.romaji.textContent = "";
    els.badge.textContent = "";
    els.badge.hidden = true;
    els.role.hidden = true;
    renderProgress();
    return;
  }
  els.card.classList.remove("is-empty");
  const c = deck[index];

  els.badge.hidden = false;
  els.badge.textContent = c.type;
  els.badge.setAttribute("data-type", c.type);
  const catSpan = document.createElement("span");
  catSpan.className = "cat";
  catSpan.lang = "id";   // label Indonesia di dalam badge lang="ja"
  catSpan.textContent = CAT_LABEL[c.cat] || c.cat;
  els.badge.appendChild(catSpan);

  els.role.hidden = false;
  els.role.textContent = ROLE_LABEL[c.role] || c.role;
  els.role.setAttribute("data-role", c.role);
  els.role.title = c.role === "聞"
    ? "Kalimat yang akan kamu DENGAR (dari staf, petugas, atasan, pengumuman)"
    : "Kalimat yang kamu UCAPKAN";

  els.jp.innerHTML = renderFurigana(c.jp);
  els.romaji.textContent = c.romaji;
  els.meaning.textContent = c.id;
  els.reading.textContent = c._yomi;
  els.reply.hidden = !c.reply;
  els.replyText.innerHTML = c.reply ? renderFurigana(c.reply) : "";
  els.note.innerHTML = renderFurigana(c.note);

  els.card.classList.toggle("learned", learned.has(keyOf(c)));
  renderProgress();

  if (listenMode) speak();
}

/* ---------- aksi ---------- */
function flip()  { if (deck.length) els.card.classList.toggle("is-flipped"); }
function next()  { if (deck.length) { index = (index + 1) % deck.length; render(); } }
function prev()  { if (deck.length) { index = (index - 1 + deck.length) % deck.length; render(); } }

function toggleLearned() {
  if (!deck.length) return;
  const k = keyOf(deck[index]);
  learned.has(k) ? learned.delete(k) : learned.add(k);
  lsSet(LS.learned, [...learned]);

  if (prefs.hide && learned.has(k)) {
    // kartu baru dikuasai & mode 未習のみ: keluarkan dari deck, tetap di posisi yang sama
    deck.splice(index, 1);
    if (index >= deck.length) index = 0;
    render();
  } else {
    els.card.classList.toggle("learned", learned.has(k));
    renderProgress();
  }
}
function toggleShuffle() {
  shuffled = !shuffled;
  els.shuffleBtn.classList.toggle("is-on", shuffled);
  els.shuffleBtn.setAttribute("aria-pressed", String(shuffled));
  rebuildDeck();
}
function toggleHide() {
  prefs.hide = !prefs.hide;
  savePrefs();
  syncHideBtn();
  rebuildDeck();
}
function syncHideBtn() {
  els.hideBtn.classList.toggle("is-on", prefs.hide);
  els.hideBtn.setAttribute("aria-pressed", String(prefs.hide));
}
function savePrefs() { lsSet(LS.prefs, prefs); }

/* ---------- suara (Web Speech API, ja-JP) ---------- */
const synth = ("speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined")
  ? window.speechSynthesis : null;
let jaVoice = null;

const NO_JA_VOICE = "Suara bahasa Jepang tidak ditemukan di browser ini. Buka di Chrome/Edge, " +
  "atau pasang suara Jepang (Windows: Settings → Time & language → Speech; Android: Text-to-speech → Google → bahasa Jepang).";

function pickVoice() {
  if (!synth) return;
  const ja = synth.getVoices().filter((v) => /^ja([-_]|$)/i.test(v.lang));
  // utamakan suara neural/online (Edge "Natural", Chrome "Google") bila ada
  jaVoice = ja.find((v) => /natural|online|google/i.test(v.name)) || ja[0] || null;
  els.speakBtn.title = (synth.getVoices().length && !jaVoice) ? NO_JA_VOICE : "Putar suara (A)";
}

/* pesan singkat di bawah layar */
let toastTimer;
function toast(msg) {
  let el = $("#toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast"; el.className = "toast"; el.setAttribute("role", "status");
    document.body.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 6000);
}
function speechText(c) {
  // ucapkan teks kanji (intonasi lebih alami daripada kana), buang simbol penanda
  return surfaceOf(c.jp).replace(/[〜~→=＝+]/g, "、").replace(/[「」『』]/g, "");
}
function speak() {
  if (!synth || !deck.length) return;
  // daftar suara sudah termuat tapi tak ada suara Jepang: beri tahu, tetap coba (Android kadang tidak mendaftarkannya)
  if (!jaVoice && synth.getVoices().length) toast(NO_JA_VOICE);
  synth.cancel();
  const u = new SpeechSynthesisUtterance(speechText(deck[index]));
  u.lang = "ja-JP";
  if (jaVoice) u.voice = jaVoice;
  u.rate = prefs.slow ? 0.65 : 0.95;
  u.onstart = () => els.speakBtn.classList.add("is-speaking");
  u.onend = u.onerror = () => els.speakBtn.classList.remove("is-speaking");
  synth.speak(u);
}
function stopSpeaking() {
  if (synth && (synth.speaking || synth.pending)) synth.cancel();
  els.speakBtn.classList.remove("is-speaking");
}

/* ---------- pemasangan event ---------- */
function wire() {
  els.card.addEventListener("click", flip);
  $("#btn-flip").addEventListener("click", (e) => { e.stopPropagation(); flip(); });
  $("#btn-prev").addEventListener("click", prev);
  $("#btn-next").addEventListener("click", next);
  $("#btn-learn").addEventListener("click", toggleLearned);
  els.shuffleBtn.addEventListener("click", toggleShuffle);
  els.hideBtn.addEventListener("click", toggleHide);
  els.speakBtn.addEventListener("click", speak);
  els.listenPrompt.addEventListener("click", (e) => { e.stopPropagation(); speak(); });

  [...els.roles.children].forEach((b) => b.addEventListener("click", () => setRole(b.dataset.role)));

  // klik mouse pada tombol jangan memindahkan fokus, supaya Spasi tetap membalik kartu
  document.querySelectorAll(".btn, .chip, .segmented button, .theme-dot, .listen-prompt")
    .forEach((b) => b.addEventListener("mousedown", (e) => e.preventDefault()));

  // pencarian (debounce ringan)
  let t;
  els.search.addEventListener("input", () => {
    clearTimeout(t);
    t = setTimeout(() => {
      query = toHira(els.search.value.trim().toLowerCase());
      rebuildDeck();
    }, 120);
  });

  // toggle tampilan
  const bindToggle = (id, key, apply) => {
    const box = $(id);
    box.checked = key ? prefs[key] : box.checked;
    apply(box.checked);
    box.addEventListener("change", (e) => {
      if (key) { prefs[key] = e.target.checked; savePrefs(); }
      apply(e.target.checked);
      if (!e.target.matches(":focus-visible")) e.target.blur();
    });
  };
  bindToggle("#tg-furigana", "furigana", (on) => document.body.classList.toggle("hide-furigana", !on));
  bindToggle("#tg-romaji", "romaji", (on) => document.body.classList.toggle("hide-romaji", !on));
  bindToggle("#tg-slow", "slow", () => {});
  bindToggle("#tg-listen", null, (on) => {
    listenMode = on;
    document.body.classList.toggle("listen-mode", on);
    els.card.classList.remove("is-flipped");
    if (on) speak(); else stopSpeaking();
  });

  // tema
  document.querySelectorAll(".theme-dot").forEach((dot) => {
    dot.addEventListener("click", () => setTheme(dot.dataset.theme));
  });

  // pintasan papan ketik
  document.addEventListener("keydown", (e) => {
    const target = e.target;
    if (target === els.search) {
      if (e.key === "Escape") { els.search.value = ""; query = ""; els.search.blur(); rebuildDeck(); }
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    // Spasi/Enter pada tombol/checkbox yang difokuskan keyboard: biarkan perilaku bawaan
    const onControl = target instanceof Element && target !== els.card &&
      target.matches("button, input, select, textarea, a");
    switch (e.key) {
      case " ": case "Enter":
        if (onControl) return;
        e.preventDefault(); flip(); break;
      case "ArrowRight": next(); break;
      case "ArrowLeft": prev(); break;
      case "s": case "S": toggleShuffle(); break;
      case "l": case "L": toggleLearned(); break;
      case "a": case "A": speak(); break;
      case "h": case "H": toggleHide(); break;
      case "/": e.preventDefault(); els.search.focus(); break;
    }
  });

  if (synth) {
    pickVoice();
    synth.addEventListener?.("voiceschanged", pickVoice);
  } else {
    els.speakBtn.disabled = true;
    els.speakBtn.innerHTML = `音声<span class="k">Tidak didukung browser</span>`;
    $("#tg-listen").disabled = true;
  }
}

/* ---------- tema (dengan penyimpanan) ---------- */
function setTheme(name) {
  document.body.classList.remove("theme-washi", "theme-ai", "theme-matcha");
  document.body.classList.add("theme-" + name);
  document.querySelectorAll(".theme-dot").forEach((d) =>
    d.setAttribute("aria-pressed", String(d.dataset.theme === name)));
  lsSet(LS.theme, name);
}
function restoreTheme() {
  const t = lsGet(LS.theme, "washi");
  setTheme(["washi", "ai", "matcha"].includes(t) ? t : "washi");
}

/* ---------- hitung mundur keberangkatan ---------- */
function renderCountdown() {
  const el = $("#countdown");
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const days = Math.round((DEPARTURE - today) / 86400000);
  if (days <= 0) return;  // sudah berangkat: sembunyikan
  const bulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
  el.innerHTML = `出発まで あと <b>${days}</b> 日 · ${DEPARTURE.getDate()} ${bulan[DEPARTURE.getMonth()]} ${DEPARTURE.getFullYear()}`;
  el.hidden = false;
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
  if (typeof KAIWA_DATA === "undefined" || !Array.isArray(KAIWA_DATA) || !KAIWA_DATA.length) {
    els.jp.innerHTML = `<span class="empty">Data gagal dimuat. Pastikan folder data/ ada.</span>`;
    return;
  }
  buildIndex();
  buildFilters();
  wire();
  syncHideBtn();
  restoreTheme();
  renderCountdown();
  spawnSakura();
  rebuildDeck();
}

document.addEventListener("DOMContentLoaded", init);
