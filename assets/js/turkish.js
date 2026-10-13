/* ============================================================
   Latihan Bahasa Turki — app.js

   Data dimuat dari webdata.js (global TURKI_DATA), bukan lewat fetch(),
   sehingga aplikasi jalan baik di GitHub Pages maupun saat index.html dibuka
   langsung dari berkas (file://).

   Penjadwalan memakai lima kotak Leitner, sama seperti quiz.py. Progres
   disimpan di localStorage peramban dan tidak dikirim ke mana pun.
   ============================================================ */

"use strict";

/* ---------------------------------------------------- penyimpanan ---- */

const LS = { prog: "turki.progress.v1", prefs: "turki.prefs.v1", theme: "turki.theme" };

function lsGet(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function lsSet(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch { /* mode privat */ }
}

/* Jeda ulangan per kotak, dalam hari. Sama dengan INTERVALS di
   turkdrill/leitner.py; ubah keduanya bila ingin jadwal lain. */
const BOX_DAYS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 };
const MAX_BOX = 5;

const progress = lsGet(LS.prog, { cards: {} });
if (!progress.cards) progress.cards = {};

const prefs = Object.assign(
  { arah: false, contoh: false, due: false, hide: false },
  lsGet(LS.prefs, {})
);

function todayISO() {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
function addDays(iso, n) {
  const d = new Date(iso + "T00:00:00");
  d.setDate(d.getDate() + n);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
}
function stateOf(id) { return progress.cards[id] || null; }
function boxOf(id) { const s = stateOf(id); return s ? s.box : 0; }
function isDue(id) {
  const s = stateOf(id);
  if (!s) return true;                 // kartu baru selalu dianggap jatuh tempo
  return s.due <= todayISO();
}
function grade(id, ok) {
  const s = stateOf(id) || { box: 1, due: todayISO(), seen: 0, right: 0 };
  s.seen += 1;
  if (ok) { s.right += 1; s.box = Math.min(s.box + 1, MAX_BOX); }
  else { s.box = 1; }
  s.due = addDays(todayISO(), BOX_DAYS[s.box]);
  progress.cards[id] = s;
  lsSet(LS.prog, progress);
}

/* ---------------------------------------------------------- utilitas ---- */

const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

function tr(text, size) {
  return `<div class="tr ${size || "tr-lg"}" lang="tr">${esc(text)}</div>`;
}
function note(text, cls) {
  return text ? `<div class="note ${cls || ""}">${esc(text)}</div>` : "";
}

/* ----------------------------------------------------- pembuat kartu ---- */

const D = typeof TURKI_DATA !== "undefined" ? TURKI_DATA : null;

const MODES = {
  pelafalan: {
    label: "Alfabet dan pelafalan",
    toggles: [],
    items: () => D.pelafalan,
    search: (x) => x.kind === "huruf"
      ? [x.upper, x.lower, x.sound, x.example, x.exampleGloss, x.trap].join(" ")
      : [x.prompt, x.promptTr].concat(x.options).join(" "),
    kind: (x) => (x.kind === "soal" ? "mcq" : "flip"),
    front(x) {
      if (x.kind === "soal") {
        return `<div class="prompt">${esc(x.prompt)}</div>
          ${x.promptTr ? tr(x.promptTr, "tr-lg") : ""}`;
      }
      return `<div class="letter" lang="tr">${esc(x.upper)}&nbsp;&nbsp;${esc(x.lower)}</div>
        <div class="detail" style="margin-top:14px">${esc(x.letterKind)}</div>`;
    },
    back(x) {
      if (x.kind === "soal") {
        return `<div class="meaning">${esc(x.options[x.answer])}</div>
          ${note(x.explain)}`;
      }
      return `<div class="meaning">${esc(x.sound)}</div>
        <hr class="sep" />
        <div class="example">${tr(x.example, "tr-md")}
          <div class="gloss">${esc(x.exampleGloss)}</div></div>
        ${note(x.trap, "trap")}`;
    },
  },

  kosakata: {
    label: "Kosakata",
    toggles: ["arah", "contoh"],
    items: () => D.kosakata,
    search: (x) => [x.tr, x.gloss, x.pos, x.plural, x.soften, x.exTr, x.exGloss, x.note]
      .concat(x.alt).join(" "),
    kind: () => "flip",
    front(x) {
      if (prefs.arah) {
        return `<div class="id-xl">${esc(x.gloss)}</div>
          <div class="detail" style="margin-top:8px">${esc(x.pos)}</div>`;
      }
      return tr(x.tr, "tr-xl") +
        (prefs.contoh ? `<div class="example" style="margin-top:16px">${tr(x.exTr, "tr-md")}</div>` : "");
    },
    back(x) {
      return `<div class="meaning">${esc(x.gloss)}</div>
        <div class="detail">${esc(x.detail)}</div>
        ${prefs.arah ? tr(x.tr, "tr-lg") : ""}
        <hr class="sep" />
        <div class="example">${tr(x.exTr, "tr-md")}
          <div class="gloss">${esc(x.exGloss)}</div></div>
        ${note(x.note)}`;
    },
  },

  tatabahasa: {
    label: "Tata bahasa",
    toggles: [],
    items: () => D.tatabahasa,
    search: (x) => [x.prompt, x.promptTr, x.catLabel, x.explain].concat(x.options).join(" "),
    kind: () => "mcq",
    front(x) {
      return `<div class="prompt">${esc(x.prompt)}</div>
        ${x.promptTr ? tr(x.promptTr, "tr-lg") : ""}`;
    },
    back(x) {
      return `<div class="detail">${esc(x.catLabel)}</div>
        <div class="meaning">${x.optionsLang === "tr"
          ? `<span class="tr tr-md" lang="tr">${esc(x.options[x.answer])}</span>`
          : esc(x.options[x.answer])}</div>
        ${note(x.explain)}`;
    },
  },

  akhiran: {
    label: "Harmoni vokal dan akhiran",
    toggles: [],
    items: () => D.akhiran,
    search: (x) => x.kind === "aturan"
      ? [x.title, x.rule, x.note].join(" ")
      : [x.base, x.baseGloss, x.form, x.famTitle, x.meaning].concat(x.options).join(" "),
    kind: (x) => (x.kind === "soal" ? "mcq" : "flip"),
    front(x) {
      if (x.kind === "aturan") {
        return `<div class="prompt">Apa bunyi aturan ini?</div>
          <div class="id-xl" style="margin-top:10px">${esc(x.title)}</div>`;
      }
      return `<div class="prompt">Mana bentuk yang benar?</div>
        ${tr(x.base, "tr-xl")}
        <div class="detail" style="margin-top:8px">${esc(x.base)} = ${esc(x.baseGloss)}
          &nbsp;·&nbsp; + ${esc(x.famTitle)}</div>`;
    },
    back(x) {
      if (x.kind === "aturan") {
        return `<div class="detail">${esc(x.title)}</div>
          <div style="font-size:.95rem">${esc(x.rule)}</div>
          <hr class="sep" />
          ${x.examples.map((e) => `<div class="ex">${esc(e.tr)}</div>
            <p class="ex-gloss">${esc(e.gloss)}</p>`).join("")}
          ${note(x.note)}`;
      }
      return `${tr(x.form, "tr-lg")}
        <div class="detail">${esc(x.base)} + ${esc(x.famTitle)} &rarr; ${esc(x.meaning)}</div>
        ${note(x.explain)}
        ${x.siblings.length ? `<div class="sibs">Sekeluarga: ${
          x.siblings.map((s) => `<b>${esc(s)}</b>`).join(" · ")
        }</div>` : ""}
        ${note(x.note)}`;
    },
  },

  frasa: {
    label: "Frasa dan percakapan",
    toggles: [],
    items: () => D.frasa,
    search: (x) => x.kind === "percakapan"
      ? [x.title].concat(x.lines.map((l) => l.tr + " " + l.gloss)).join(" ")
      : [x.tr, x.gloss, x.literal, x.prompt, x.promptTr, x.catLabel].concat(x.options || []).join(" "),
    kind: (x) => (x.kind === "percakapan" ? "flip" : "mcq"),
    front(x) {
      if (x.kind === "percakapan") {
        return `<div class="detail">${esc(x.title)}</div>
          <div class="dialog">${x.lines.map((l) =>
            `<div class="line"><span class="who">${esc(l.who)}</span>
              <span class="said" lang="tr">${esc(l.tr)}</span></div>`).join("")}</div>
          <div class="literal">Bacalah dengan suara, lalu periksa artinya</div>`;
      }
      if (x.kind === "soal") {
        return `<div class="prompt">${esc(x.prompt)}</div>
          ${x.promptTr ? tr(x.promptTr, "tr-lg") : ""}`;
      }
      return `<div class="prompt">Apa arti frasa ini?</div>${tr(x.tr, "tr-lg")}`;
    },
    back(x) {
      if (x.kind === "percakapan") {
        return `<div class="dialog">${x.lines.map((l) =>
            `<div class="line"><span class="who">${esc(l.who)}</span>
              <span>${esc(l.gloss)}</span></div>`).join("")}</div>
          ${note(x.note)}`;
      }
      if (x.kind === "soal") {
        return `<div class="meaning">${esc(x.options[x.answer])}</div>${note(x.explain)}`;
      }
      return `<div class="meaning">${esc(x.gloss)}</div>
        <div class="literal">Kata demi kata: ${esc(x.literal)}</div>
        ${note(x.note)}`;
    },
  },

  serapan: {
    label: "Kata serapan dan jebakan",
    toggles: [],
    items: () => D.serapan,
    search: (x) => x.kind === "soal"
      ? [x.prompt, x.promptTr].concat(x.options).join(" ")
      : [x.tr, x.trGloss, x.idWord, x.idGloss, x.origin, x.note, x.catLabel].join(" "),
    kind: (x) => (x.kind === "soal" ? "mcq" : "flip"),
    front(x) {
      if (x.kind === "soal") {
        return `<div class="prompt">${esc(x.prompt)}</div>
          ${x.promptTr ? tr(x.promptTr, "tr-lg") : ""}`;
      }
      return tr(x.tr, "tr-xl") +
        `<div class="literal">Apa arti kata TURKI ini? (hati-hati, belum tentu sama
          dengan kata Indonesia yang mirip)</div>`;
    },
    back(x) {
      if (x.kind === "soal") {
        return `<div class="meaning">${esc(x.options[x.answer])}</div>${note(x.explain)}`;
      }
      return `<div class="meaning">${esc(x.trGloss)}</div>
        <dl class="kv">
          <dt>Turki</dt><dd><strong>${esc(x.tr)}</strong> = ${esc(x.trGloss)}</dd>
          <dt>Indonesia</dt><dd>‘${esc(x.idWord)}’ = ${esc(x.idGloss)}</dd>
          <dt>Asal serapan</dt><dd>${esc(x.origin)}</dd>
          <dt>Golongan</dt><dd>${esc(x.catLabel)}</dd>
        </dl>
        ${note(x.note, x.cat === "jebakan" ? "trap" : "")}`;
    },
  },
};

/* ------------------------------------------------------------ keadaan ---- */

let mode = "pelafalan";
let deck = [];
let index = 0;
let activeCat = "*";
let activeStage = 0;
let query = "";
let shuffled = false;
let answered = false;

const els = {
  tabs: $("#tabs"), chips: $("#chips"), stages: $("#stages"), search: $("#search"),
  card: $("#card"), badge: $("#badge"), box: $("#box"), front: $("#front"),
  back: $("#back"), choices: $("#choices"), hint: $("#hint"),
  counter: $("#counter"), fill: $("#fill"), grade: $("#grade"),
  stats: $("#stats"), panel: $("#panel"),
};

/* ------------------------------------------------------------ susunan ---- */

function allItems() { return MODES[mode].items(); }

function buildDeck() {
  const cfg = MODES[mode];
  const q = query.trim().toLowerCase();
  deck = allItems().filter((x) => {
    if (activeCat !== "*" && x.cat !== activeCat) return false;
    if (activeStage && x.stage > activeStage) return false;
    if (prefs.due && !isDue(x.id)) return false;
    if (prefs.hide && boxOf(x.id) >= MAX_BOX) return false;
    if (q && !cfg.search(x).toLowerCase().includes(q)) return false;
    return true;
  });
  if (shuffled) {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
  if (index >= deck.length) index = 0;
}

function renderChips() {
  const seen = new Map();
  for (const x of allItems()) {
    if (activeStage && x.stage > activeStage) continue;
    const prev = seen.get(x.cat) || { label: x.catLabel, n: 0 };
    prev.n += 1;
    seen.set(x.cat, prev);
  }
  const total = allItems().filter((x) => !activeStage || x.stage <= activeStage).length;
  let html = `<button data-cat="*" aria-pressed="${activeCat === "*"}">Semua<span class="n">${total}</span></button>`;
  for (const [cat, info] of seen) {
    html += `<button data-cat="${esc(cat)}" aria-pressed="${activeCat === cat}">${esc(info.label)}<span class="n">${info.n}</span></button>`;
  }
  els.chips.innerHTML = html;
}

function renderToggles() {
  const aktif = MODES[mode].toggles;
  $("#wrap-arah").hidden = !aktif.includes("arah");
  $("#wrap-contoh").hidden = !aktif.includes("contoh");
}

/* ------------------------------------------------------------ tampilan ---- */

function render() {
  const cfg = MODES[mode];
  els.card.classList.remove("is-flipped");
  answered = false;

  if (!deck.length) {
    els.front.innerHTML = `<p class="empty">Tidak ada kartu yang cocok dengan saringan ini.<br />
      Coba hapus pencarian, pilih "Semua tahap", atau matikan "Jatuh tempo saja".</p>`;
    els.back.innerHTML = "";
    els.choices.hidden = true;
    els.grade.hidden = true;
    els.badge.textContent = "";
    els.box.textContent = "";
    els.counter.textContent = "0 / 0";
    els.fill.style.width = "0%";
    els.hint.textContent = "";
    return;
  }

  const x = deck[index];
  const kind = cfg.kind(x);

  els.badge.textContent = `${x.catLabel || ""} · tahap ${x.stage}`;
  const b = boxOf(x.id);
  els.box.textContent = b ? `kotak ${b}${isDue(x.id) ? " · jatuh tempo" : ""}` : "belum dilatih";

  els.front.innerHTML = cfg.front(x);
  els.back.innerHTML = cfg.back(x);

  if (kind === "mcq") {
    els.choices.hidden = false;
    els.choices.innerHTML = x.options.map((o, i) => {
      const lang = x.optionsLang || (mode === "akhiran" ? "tr" : "id");
      const isi = lang === "tr"
        ? `<span class="opt-tr" lang="tr">${esc(o)}</span>`
        : esc(o);
      return `<button type="button" data-i="${i}"><span class="num">${i + 1}.</span>${isi}</button>`;
    }).join("");
    els.grade.hidden = true;
    els.hint.textContent = `Pilih satu jawaban (tekan 1–${x.options.length})`;
  } else {
    els.choices.hidden = true;
    els.choices.innerHTML = "";
    els.grade.hidden = false;
    els.hint.textContent = "Klik atau tekan Spasi untuk melihat jawaban";
  }

  els.counter.textContent = `${index + 1} / ${deck.length}`;
  els.fill.style.width = `${((index + 1) / deck.length) * 100}%`;
  renderPanel(x);
  fitCard();
}

/* Kedua sisi kartu diposisikan absolut, sehingga tingginya harus dihitung.
   Tanpa ini, kartu pilihan ganda yang panjang akan terpotong. */
function fitCard() {
  els.card.style.height = "auto";
  let h = 0;
  for (const face of els.card.querySelectorAll(".face")) {
    h = Math.max(h, face.scrollHeight);
  }
  // Sisa 4px supaya bilah gulir tidak muncul karena pembulatan.
  els.card.style.height = Math.max(300, h + 4) + "px";
}

function flip() {
  if (!deck.length) return;
  if (MODES[mode].kind(deck[index]) === "mcq" && !answered) return;
  els.card.classList.toggle("is-flipped");
}

function answer(i) {
  if (answered || !deck.length) return;
  const x = deck[index];
  if (MODES[mode].kind(x) !== "mcq") return;
  if (i >= x.options.length) return;
  answered = true;
  const benar = i === x.answer;
  grade(x.id, benar);
  for (const btn of els.choices.querySelectorAll("button")) {
    const bi = Number(btn.dataset.i);
    btn.disabled = true;
    if (bi === x.answer) btn.classList.add("is-right");
    else if (bi === i) btn.classList.add("is-wrong");
  }
  els.hint.textContent = benar ? "Benar. Spasi untuk penjelasan." : "Belum tepat. Spasi untuk penjelasan.";
  els.box.textContent = `kotak ${boxOf(x.id)}`;
  renderStats();
}

function gradeFlip(ok) {
  if (!deck.length) return;
  if (MODES[mode].kind(deck[index]) === "mcq") return;
  grade(deck[index].id, ok);
  renderStats();
  next();
}

function next() { if (deck.length) { index = (index + 1) % deck.length; render(); } }
function prev() { if (deck.length) { index = (index - 1 + deck.length) % deck.length; render(); } }

/* -------------------------------------------------------------- panel ---- */

function renderPanel(x) {
  let html = "";
  if (mode === "tatabahasa") {
    const t = D.topik.find((t) => t.id === x.cat);
    if (t) {
      html = `<details open><summary>${esc(t.title)}</summary><div class="body">
        <p>${esc(t.explanation)}</p>
        ${t.examples.map((e) => `<div class="ex" lang="tr">${esc(e.tr)}</div>
          <p class="ex-gloss">${esc(e.gloss)}</p>`).join("")}
        <p><strong>Pengecualian dan catatan:</strong></p>
        ${t.caveats.map((c) => `<div class="caveat">${esc(c)}</div>`).join("")}
      </div></details>`;
    }
  } else if (mode === "akhiran") {
    html = `<details><summary>Sembilan aturan bunyi</summary><div class="body">
      ${D.aturan.map((p) => `<p><strong>${esc(p.title)}</strong><br />${esc(p.rule)}</p>
        ${p.examples.map((e) => `<div class="ex" lang="tr">${esc(e.tr)}</div>
          <p class="ex-gloss">${esc(e.gloss)}</p>`).join("")}
        ${p.note ? `<div class="caveat">${esc(p.note)}</div>` : ""}`).join("")}
    </div></details>`;
  } else if (mode === "pelafalan") {
    html = `<details><summary>Dua belas catatan pelafalan</summary><div class="body">
      ${D.catatan.pelafalan.map((c) => `<p><strong>${esc(c.title)}.</strong> ${esc(c.text)}</p>`).join("")}
    </div></details>`;
  } else if (mode === "serapan") {
    html = `<details><summary>Yang perlu diingat tentang modul ini</summary><div class="body">
      ${D.catatan.serapan.penting.map((c) => `<p>${esc(c)}</p>`).join("")}
      ${D.catatan.serapan.pemakaian.map((u) => `<p><strong>${esc(u.title)}.</strong> ${esc(u.text)}</p>`).join("")}
    </div></details>`;
  }
  els.panel.innerHTML = html;
}

function renderStats() {
  const ids = allItems().map((x) => x.id);
  const kotak = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  let baru = 0, jatuhTempo = 0, dilihat = 0, benar = 0;
  for (const id of ids) {
    const s = stateOf(id);
    if (!s) { baru += 1; continue; }
    kotak[s.box] += 1;
    dilihat += s.seen || 0;
    benar += s.right || 0;
    if (isDue(id)) jatuhTempo += 1;
  }
  const maxN = Math.max(1, ...Object.values(kotak));
  const baris = [1, 2, 3, 4, 5].map((b) =>
    `<tr><td>Kotak ${b}</td><td><span class="bar" style="width:${(kotak[b] / maxN) * 160}px"></span>
      &nbsp;${kotak[b]}</td></tr>`).join("");
  const pct = dilihat ? Math.round((benar / dilihat) * 100) : 0;
  els.stats.innerHTML = `<h3>Kemajuan pada modul ${esc(MODES[mode].label)}</h3>
    <table>
      <tr><td>Total kartu</td><td>${ids.length}</td></tr>
      <tr><td>Belum dilatih</td><td>${baru}</td></tr>
      <tr><td>Jatuh tempo</td><td>${jatuhTempo}</td></tr>
      ${baris}
    </table>
    <p>${dilihat ? `Jawaban tercatat: ${dilihat}, benar ${benar} (${pct}%).` : "Belum ada jawaban tercatat."}
    Jeda ulangan per kotak: 0, 1, 3, 7, dan 16 hari.</p>`;
}

/* ------------------------------------------------------------- kendali ---- */

function setMode(m) {
  mode = m;
  activeCat = "*";
  index = 0;
  answered = false;
  for (const b of els.tabs.querySelectorAll("button")) {
    b.setAttribute("aria-pressed", String(b.dataset.mode === m));
  }
  renderToggles();
  renderChips();
  buildDeck();
  render();
  renderStats();
}

function refresh() {
  renderChips();
  buildDeck();
  render();
}

/* Nama tema yang dikenal. Dipakai juga untuk membuang kelas tema lama secara
   tepat sasaran. */
const THEMES = ["kagit", "gece", "cay"];
const THEME_BAWAAN = "kagit";

function setTheme(name) {
  // Nilai dari localStorage bisa saja rusak atau berasal dari versi lama.
  // Tanpa penyaringan ini, body pernah berakhir dengan kelas
  // "theme-[object Object]": tidak ada tema yang sah, tidak ada tombol tema
  // yang tampak aktif, dan nilai rusaknya ditulis balik sehingga menetap.
  if (!THEMES.includes(name)) name = THEME_BAWAAN;

  // classList, bukan className: menimpa className akan menghapus kelas lain
  // yang mungkin ada pada <body>.
  for (const t of THEMES) document.body.classList.remove("theme-" + t);
  document.body.classList.add("theme-" + name);
  for (const b of document.querySelectorAll(".theme-dot")) {
    b.setAttribute("aria-pressed", String(b.dataset.theme === name));
  }
  lsSet(LS.theme, name);
}

function bindToggle(id, key) {
  const el = $(id);
  el.checked = prefs[key];
  el.addEventListener("change", () => {
    prefs[key] = el.checked;
    lsSet(LS.prefs, prefs);
    index = 0;
    refresh();
  });
}

function init() {
  if (!D) {
    document.body.innerHTML = '<p class="empty">webdata.js gagal dimuat. ' +
      'Jalankan <code>python tools/build_web.py</code> lalu muat ulang halaman.</p>';
    return;
  }

  setTheme(lsGet(LS.theme, THEME_BAWAAN));

  els.tabs.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) setMode(b.dataset.mode);
  });
  els.chips.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    activeCat = b.dataset.cat;
    index = 0;
    refresh();
  });
  els.stages.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    activeStage = Number(b.dataset.stage);
    for (const s of els.stages.querySelectorAll("button")) {
      s.setAttribute("aria-pressed", String(Number(s.dataset.stage) === activeStage));
    }
    activeCat = "*";
    index = 0;
    refresh();
  });
  els.search.addEventListener("input", () => {
    query = els.search.value;
    index = 0;
    buildDeck();
    render();
  });
  els.choices.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (b) answer(Number(b.dataset.i));
  });
  els.card.addEventListener("click", (e) => {
    if (!e.target.closest(".choices")) flip();
  });

  $("#btn-flip").addEventListener("click", (e) => { e.stopPropagation(); flip(); });
  $("#btn-next").addEventListener("click", next);
  $("#btn-prev").addEventListener("click", prev);
  $("#btn-right").addEventListener("click", () => gradeFlip(true));
  $("#btn-wrong").addEventListener("click", () => gradeFlip(false));
  $("#btn-shuffle").addEventListener("click", (e) => {
    shuffled = !shuffled;
    e.currentTarget.setAttribute("aria-pressed", String(shuffled));
    index = 0;
    buildDeck();
    render();
  });
  $("#btn-stats").addEventListener("click", (e) => {
    const buka = els.stats.hidden;
    els.stats.hidden = !buka;
    e.currentTarget.setAttribute("aria-expanded", String(buka));
    if (buka) renderStats();
  });
  $("#btn-reset").addEventListener("click", () => {
    if (!confirm("Hapus seluruh progres di peramban ini? Tindakan ini tidak bisa dibatalkan.")) return;
    progress.cards = {};
    lsSet(LS.prog, progress);
    refresh();
    renderStats();
  });

  for (const b of document.querySelectorAll(".theme-dot")) {
    b.addEventListener("click", () => setTheme(b.dataset.theme));
  }

  bindToggle("#tg-arah", "arah");
  bindToggle("#tg-contoh", "contoh");
  bindToggle("#tg-due", "due");
  bindToggle("#tg-hide", "hide");

  document.addEventListener("keydown", (e) => {
    if (e.target === els.search) {
      if (e.key === "Escape") { els.search.value = ""; query = ""; index = 0; refresh(); els.search.blur(); }
      return;
    }
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    switch (e.key) {
      case " ": case "Enter": e.preventDefault(); flip(); break;
      case "ArrowRight": e.preventDefault(); next(); break;
      case "ArrowLeft": e.preventDefault(); prev(); break;
      case "h": case "H": gradeFlip(true); break;
      case "b": case "B": gradeFlip(false); break;
      case "s": case "S": $("#btn-shuffle").click(); break;
      case "/": e.preventDefault(); els.search.focus(); break;
      default:
        if (/^[1-9]$/.test(e.key)) answer(Number(e.key) - 1);
    }
  });

  window.addEventListener("resize", fitCard);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitCard);

  setMode("pelafalan");

  // Jumlah kartu pada tab diambil dari data, bukan ditulis tangan.
  for (const b of els.tabs.querySelectorAll("button")) {
    const n = MODES[b.dataset.mode].items().length;
    b.querySelector("span").textContent = String(n);
  }
}

document.addEventListener("DOMContentLoaded", init);
