/* ============================================================
   Latihan Bahasa Thailand — app.js

   Data dimuat dari webdata.js (global THAI_DATA), bukan lewat fetch(),
   sehingga aplikasi jalan di GitHub Pages maupun saat index.html dibuka
   langsung dari berkas (file://).

   Seluruh kunci jawaban soal nada dan kelas konsonan sudah dihitung di
   tools/build_web.py memakai thaidrill/tone.py. Berkas ini hanya menampilkan
   dan menilai, tidak menghitung ulang aturan nada.

   Penjadwalan memakai lima kotak Leitner, sama seperti quiz.py. Progres
   disimpan di localStorage peramban dan tidak dikirim ke mana pun.
   ============================================================ */

"use strict";

/* ---------------------------------------------------- penyimpanan ---- */

const LS = { prog: "thai.progress.v1", prefs: "thai.prefs.v1", theme: "thai.theme" };

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
   thaidrill/leitner.py; ubah keduanya bila ingin jadwal lain. */
const BOX_DAYS = { 1: 0, 2: 1, 3: 3, 4: 7, 5: 16 };
const MAX_BOX = 5;

const progress = lsGet(LS.prog, { cards: {} });
if (!progress.cards) progress.cards = {};

/* arah: true berarti Indonesia -> Thai, yaitu arah PRODUKSI. Sengaja
   dinyalakan secara bawaan: untuk bisa berbicara, memanggil kata Thainya
   sendiri jauh lebih berharga daripada sekadar mengenalinya. Matikan bila
   Anda ingin latihan pengenalan. */
const prefs = Object.assign(
  { phon: true, arah: true, due: false, hide: false, kelas: false,
    suara: true, lambat: false },
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

function th(text, size) {
  return `<div class="th ${size || "th-lg"}" lang="th">${esc(text)}</div>`;
}
function phonLine(text) {
  return text ? `<div class="phon">${esc(text)}</div>` : "";
}
function rows(list) {
  if (!list || !list.length) return "";
  return `<dl class="kv">${list.map(
    ([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`
  ).join("")}</dl>`;
}
function exampleBlock(x) {
  if (!x.exTh) return "";
  return `<hr class="sep" /><div class="example">${th(x.exTh, "th-md")}
    ${phonLine(x.exPhon)}<div class="gloss">${esc(x.exGloss)}</div></div>`;
}
function noteBlock(text) {
  return text ? `<div class="note">${esc(text)}</div>` : "";
}


/* ------------------------------------------------------------- suara ---- */

/* Pelafalan memakai Web Speech API peramban. Ketersediaan suara Thai berbeda
   di setiap perangkat: Android dan iOS umumnya punya, Windows memerlukan
   paket bahasa Thai yang dipasang lewat Settings → Time & language. Bila
   tidak ada, aplikasi tetap jalan dan tombol suaranya dimatikan. */

let voiceThai = null;
let voicesLoaded = false;
let userInteracted = false;

function pickVoice() {
  try {
    const list = window.speechSynthesis.getVoices() || [];
    voiceThai = list.find((v) => /^th([-_]|$)/i.test(v.lang)) || null;
    voicesLoaded = true;
  } catch { voiceThai = null; voicesLoaded = true; }
}

function speechReady() {
  return typeof window.speechSynthesis !== "undefined" && voiceThai !== null;
}

function speak(text) {
  if (!text || !speechReady()) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.voice = voiceThai;
    u.lang = voiceThai.lang || "th-TH";
    u.rate = prefs.lambat ? 0.55 : 0.85;
    window.speechSynthesis.speak(u);
  } catch { /* suara tidak tersedia */ }
}

function audioOf(x) {
  return x.audio || x.th || x.promptTh || "";
}

/* Tombol suara pada kartu. Teksnya tidak pernah memuat tulisan Thainya,
   supaya kartu mendengarkan tidak membocorkan jawaban. */
function speakButton(x) {
  if (!audioOf(x)) return "";
  if (!speechReady()) {
    /* Tanpa suara Thai, tombolnya disembunyikan saja supaya tidak mengganggu.
       Hanya kartu mendengarkan yang tetap memperlihatkan keterangannya, sebab
       di sanalah ketiadaan suara benar-benar mengubah cara mengerjakannya. */
    if (!x.audioOnly) return "";
    return `<button type="button" class="btn-speak is-off" disabled
      title="Perangkat ini belum punya suara Thai">Suara tidak tersedia</button>`;
  }
  return `<button type="button" class="btn-speak" data-speak="1">&#9654; Dengarkan<span class="k">A</span></button>`;
}

/* ----------------------------------------------------- pembuat kartu ---- */

const D = typeof THAI_DATA !== "undefined" ? THAI_DATA : null;

/* Kartu konsonan punya soal pilihan ganda bawaan ("apa kelasnya"), yang
   dipakai hanya bila sakelar "Uji kelas" dinyalakan. Kuncinya dihitung di
   tools/build_web.py dari tabel di thaidrill/thai.py. */
function kelasMode(x) {
  return prefs.kelas && x.cat === "konsonan" && x.quiz;
}

const MODES = {
  aksara: {
    label: "Aksara",
    toggles: ["kelas"],
    items: () => D.aksara,
    search: (x) => [x.th, x.title, x.meaning, x.catLabel, x.prompt, x.exTh,
                    x.exPhon, x.exGloss, x.note].concat(x.options || []).join(" "),
    kind: (x) => (kelasMode(x) ? "mcq" : x.kind),
    optionsLang: (x) => (kelasMode(x) ? "id" : x.optionsLang),
    options: (x) => (kelasMode(x) ? x.quiz.options : x.options),
    answer: (x) => (kelasMode(x) ? x.quiz.answer : x.answer),
    front(x) {
      if (kelasMode(x)) {
        return `<div class="prompt">${esc(x.quiz.prompt)}</div>${th(x.th, "th-xl")}`;
      }
      if (x.kind === "mcq") {
        return `<div class="prompt">${esc(x.prompt)}</div>
          ${x.promptTh ? th(x.promptTh, "th-lg") : ""}`;
      }
      const suara = `<div class="speak-row">${speakButton(x)}</div>`;
      const hint = x.cat === "konsonan"
        ? "Apa nama huruf ini, kelasnya, dan bunyinya?"
        : x.cat === "vokal"
          ? "Apa bunyinya, panjang atau pendek?"
          : x.cat === "tanda"
            ? "Apa nama tanda ini dan apa gunanya?"
            : "Berapa nilainya?";
      return th(x.th, "th-xl") + suara +
        `<div class="prompt-label">${esc(hint)}</div>`;
    },
    back(x) {
      if (x.kind === "mcq" && !kelasMode(x)) return mcqBack(x);
      return `<div class="meaning">${esc(x.title)}</div>
        ${rows(x.rows)}${exampleBlock(x)}${noteBlock(x.note)}`;
    },
  },

  nada: {
    label: "Nada",
    toggles: [],
    items: () => D.nada,
    search: (x) => [x.th, x.title, x.meaning, x.catLabel, x.prompt, x.promptTh,
                    x.reveal, x.note].concat(x.options || []).join(" "),
    kind: (x) => x.kind,
    front(x) {
      if (x.kind === "mcq") {
        return `<div class="prompt">${esc(x.prompt)}</div>
          ${x.promptTh ? th(x.promptTh, "th-xl") : ""}
          ${x.audio ? `<div class="speak-row">${speakButton(x)}</div>` : ""}
          ${x.promptLabel ? `<div class="prompt-label">${esc(x.promptLabel)}</div>` : ""}`;
      }
      return th(x.th, "th-lg") +
        `<div class="speak-row">${speakButton(x)}</div>
        <div class="prompt-label">${esc(x.hint || "")}</div>`;
    },
    back(x) {
      if (x.kind === "mcq") return mcqBack(x);
      return `<div class="meaning">${esc(x.meaning)}</div>
        ${rows(x.rows)}${noteBlock(x.note)}`;
    },
  },

  kosakata: {
    label: "Kosakata",
    toggles: ["phon", "arah"],
    items: () => D.kosakata,
    search: (x) => [x.th, x.phon, x.rom, x.gloss, x.detail, x.catLabel, x.exTh,
                    x.exGloss, x.note].concat(x.alt || []).join(" "),
    kind: () => "flip",
    front(x) {
      if (prefs.arah) {
        return `<div class="id-xl">${esc(x.gloss)}</div>
          <div class="rom">${esc(x.detail)}</div>`;
      }
      return th(x.th, "th-xl") + (prefs.phon ? phonLine(x.phon) : "") +
        `<div class="speak-row">${speakButton(x)}</div>`;
    },
    back(x) {
      return `<div class="meaning">${esc(x.gloss)}</div>
        ${prefs.arah ? th(x.th, "th-lg") : ""}
        ${phonLine(x.phon)}
        <div class="detail">${esc(x.detail)}${x.cls ? " · klasifikator: " + esc(x.cls) : ""}</div>
        ${exampleBlock(x)}${noteBlock(x.note)}`;
    },
  },


  dengar: {
    label: "Telinga",
    toggles: ["lambat"],
    items: () => D.dengar,
    search: (x) => [x.prompt, x.promptLabel, x.reveal, x.explain, x.catLabel]
      .concat(x.options || []).join(" "),
    kind: () => "mcq",
    front(x) {
      /* Tanpa suara Thai, kartu mendengarkan tidak bisa dikerjakan. Daripada
         membiarkannya menebak-nebak, kartu itu berubah menjadi latihan
         mengucapkan: kata sasarannya ditampilkan apa adanya. */
      const bisu = x.audioOnly && !speechReady();
      return `<div class="prompt">${esc(x.prompt)}</div>
        ${x.promptTh ? th(x.promptTh, "th-lg") : ""}
        ${bisu ? th(x.audio, "th-xl") : ""}
        <div class="speak-row">${speakButton(x)}</div>
        ${bisu ? `<div class="prompt-label">Tanpa suara Thai, kartu ini menjadi
          latihan mengucapkan: bacalah kata di atas, lalu pilih kata itu.</div>` : ""}
        ${x.promptLabel ? `<div class="prompt-label">${esc(x.promptLabel)}</div>` : ""}`;
    },
    back: (x) => mcqBack(x),
  },

  serumpun: {
    label: "Serumpun",
    toggles: ["phon", "arah"],
    items: () => D.serumpun,
    search: (x) => [x.th, x.phon, x.rom, x.gloss, x.idWord, x.catLabel, x.note].join(" "),
    kind: () => "flip",
    front(x) {
      if (prefs.arah) {
        return `<div class="id-xl">${esc(x.gloss)}</div>
          <div class="prompt-label">Kata Thai apa, dan kata Indonesia apa yang seasal?</div>`;
      }
      return th(x.th, "th-xl") + (prefs.phon ? phonLine(x.phon) : "") +
        `<div class="speak-row">${speakButton(x)}</div>`;
    },
    back(x) {
      return `<div class="meaning">${esc(x.gloss)}</div>
        ${prefs.arah ? th(x.th, "th-lg") : ""}
        ${phonLine(x.phon)}
        <dl class="kv">
          <dt>Seasal dengan</dt><dd><strong>${esc(x.idWord)}</strong></dd>
          <dt>Hubungan</dt><dd>${esc(x.relation)}</dd>
          <dt>RTGS</dt><dd>${esc(x.rom)}</dd>
        </dl>
        ${noteBlock(x.note)}`;
    },
  },

  bacaan: {
    label: "Bacaan",
    toggles: ["phon", "lambat"],
    items: () => D.bacaan,
    search: (x) => [x.title, x.prompt, x.catLabel, x.note]
      .concat((x.lines || []).map((l) => `${l.th} ${l.phon} ${l.gloss}`))
      .concat(x.options || []).join(" "),
    kind: (x) => x.kind,
    front(x) {
      if (x.kind === "mcq") {
        return `<div class="prompt">${esc(x.prompt)}</div>
          ${x.promptTh ? th(x.promptTh, "th-lg") : ""}
          ${x.promptLabel ? `<div class="prompt-label">dari percakapan "${esc(x.promptLabel)}"</div>` : ""}`;
      }
      return `<div class="prompt">${esc(x.title)}</div>
        <div class="dialog">${x.lines.map((l) =>
          `<div class="dialog-line"><span class="who">${esc(l.speaker)}</span>
            <span class="th th-md" lang="th">${esc(l.th)}</span></div>`).join("")}</div>
        <div class="speak-row">${speakButton(x)}</div>
        <div class="prompt-label">Bacalah dengan suara, lalu buka terjemahannya</div>`;
    },
    back(x) {
      if (x.kind === "mcq") return mcqBack(x);
      return `<div class="meaning">${esc(x.title)}</div>
        <div class="dialog">${x.lines.map((l) =>
          `<div class="dialog-line"><span class="who">${esc(l.speaker)}</span>
            <span><span class="th th-md" lang="th">${esc(l.th)}</span>
            ${prefs.phon ? `<span class="phon"> ${esc(l.phon)}</span>` : ""}
            <span class="gloss detail">${esc(l.gloss)}</span></span></div>`).join("")}</div>
        ${noteBlock(x.note)}`;
    },
  },

  tatabahasa: {
    label: "Tata bahasa",
    toggles: [],
    items: () => D.tatabahasa,
    search: (x) => [x.prompt, x.promptTh, x.catLabel, x.explain]
      .concat(x.options || []).join(" "),
    kind: () => "mcq",
    front(x) {
      return `<div class="prompt">${esc(x.prompt)}</div>
        ${x.promptTh ? th(x.promptTh, "th-lg") : ""}`;
    },
    back: (x) => mcqBack(x),
  },

  frasa: {
    label: "Frasa",
    toggles: ["phon", "arah"],
    items: () => D.frasa,
    search: (x) => [x.th, x.phon, x.rom, x.gloss, x.lit, x.catLabel, x.note].join(" "),
    kind: () => "flip",
    front(x) {
      if (prefs.arah) {
        return `<div class="id-xl">${esc(x.gloss)}</div>
          <div class="prompt-label">Bagaimana mengatakan ini dalam bahasa Thailand?</div>`;
      }
      return th(x.th, "th-lg") + (prefs.phon ? phonLine(x.phon) : "") +
        `<div class="speak-row">${speakButton(x)}</div>`;
    },
    back(x) {
      return `<div class="meaning">${esc(x.gloss)}</div>
        ${prefs.arah ? th(x.th, "th-lg") : ""}
        ${phonLine(x.phon)}
        <div class="rom">RTGS: ${esc(x.rom)}</div>
        ${x.lit ? `<div class="detail">harfiah: ${esc(x.lit)}</div>` : ""}
        ${noteBlock(x.note)}`;
    },
  },
};

function mcqBack(x) {
  const cfg = MODES[mode];
  const opts = (cfg.options ? cfg.options(x) : x.options) || [];
  const ans = cfg.answer ? cfg.answer(x) : x.answer;
  const lang = cfg.optionsLang ? cfg.optionsLang(x) : x.optionsLang;
  const jawaban = lang === "th"
    ? `<span class="th th-md" lang="th">${esc(opts[ans])}</span>`
    : esc(opts[ans]);
  return `<div class="detail">${esc(x.catLabel)}</div>
    <div class="meaning">${jawaban}</div>
    ${x.reveal ? `<div class="detail">${esc(x.reveal)}</div>` : ""}
    ${x.explain ? noteBlock(x.explain) : ""}`;
}

/* ------------------------------------------------------------ keadaan ---- */

let mode = "aksara";
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
  $("#wrap-phon").hidden = !aktif.includes("phon");
  $("#wrap-arah").hidden = !aktif.includes("arah");
  $("#wrap-kelas").hidden = !aktif.includes("kelas");
  $("#wrap-lambat").hidden = !aktif.includes("lambat");
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
    const opts = (cfg.options ? cfg.options(x) : x.options) || [];
    const lang = cfg.optionsLang ? cfg.optionsLang(x) : x.optionsLang;
    els.choices.hidden = false;
    els.choices.innerHTML = opts.map((o, i) => {
      const isi = lang === "th"
        ? `<span class="opt-th" lang="th">${esc(o)}</span>`
        : esc(o);
      return `<button type="button" data-i="${i}"><span class="num">${i + 1}.</span>${isi}</button>`;
    }).join("");
    els.grade.hidden = true;
    els.hint.textContent = "Pilih satu jawaban (tekan 1–5)";
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
  const cfg = MODES[mode];
  const x = deck[index];
  if (cfg.kind(x) !== "mcq") return;
  const ans = cfg.answer ? cfg.answer(x) : x.answer;
  const opts = (cfg.options ? cfg.options(x) : x.options) || [];
  if (i >= opts.length) return;
  answered = true;
  const benar = i === ans;
  grade(x.id, benar);
  for (const btn of els.choices.querySelectorAll("button")) {
    const bi = Number(btn.dataset.i);
    btn.disabled = true;
    if (bi === ans) btn.classList.add("is-right");
    else if (bi === i) btn.classList.add("is-wrong");
  }
  els.hint.textContent = benar ? "Benar. Spasi untuk penjelasan." : "Belum tepat. Spasi untuk penjelasan.";
  els.box.textContent = `kotak ${boxOf(x.id)}`;
  renderStats();
}

function gradeFlip(ok) {
  if (!deck.length) return;
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
        ${t.examples.map((e) => `<div class="th th-sm" lang="th">${esc(e.th)}</div>
          <p style="margin-top:-4px">${esc(e.phon)} — ${esc(e.gloss)}</p>`).join("")}
        <p><strong>Pengecualian dan catatan:</strong></p>
        ${t.caveats.map((c) => `<div class="caveat">${esc(c)}</div>`).join("")}
      </div></details>`;
    }
  } else if (mode === "aksara") {
    html = `<details><summary>Tiga kelas konsonan</summary><div class="body">
      <p>Kelas konsonan tidak mengubah bunyi hurufnya. Ia menentukan nada kata
      yang ditulis dengan huruf itu, bersama jenis suku kata dan tanda nada.</p>
      <table><tr><th>Kelas</th><th>Jumlah</th><th>Huruf</th></tr>
      ${D.info.aksara.classes.map((c) => `<tr><td>${esc(c.name)}</td>
        <td>${c.count}</td><td class="th">${esc(c.letters)}</td></tr>`).join("")}
      </table></div></details>`;
  } else if (mode === "nada") {
    const i = D.info.nada;
    html = `<details><summary>Tabel aturan nada</summary><div class="body">
      <p><strong>Tanpa tanda nada</strong></p>
      <table><tr><th>Kelas</th><th>Suku kata</th><th>Vokal</th><th>Nada</th><th>Contoh</th></tr>
      ${i.noMark.map((r) => `<tr><td>${esc(r.cls)}</td><td>${esc(r.kind)}</td>
        <td>${esc(r.length)}</td><td><strong>${esc(r.tone)}</strong></td>
        <td><span class="th">${esc(r.ex)}</span> ${esc(r.phon)}</td></tr>`).join("")}
      </table>
      <p><strong>Dengan tanda nada</strong></p>
      <table><tr><th>Tanda</th><th>Kelas</th><th>Nada</th><th>Contoh</th></tr>
      ${i.mark.map((r) => `<tr><td><span class="th">${esc(r.mark)}</span> ${esc(r.markRom)}</td>
        <td>${esc(r.cls)}</td><td><strong>${esc(r.tone)}</strong></td>
        <td><span class="th">${esc(r.ex)}</span> ${esc(r.phon)}</td></tr>`).join("")}
      </table>
      ${i.notes.map((n) => `<div class="caveat">${esc(n)}</div>`).join("")}
    </div></details>`;
  } else if (mode === "dengar") {
    html = `<details open><summary>Cara memakai latihan telinga</summary><div class="body">
      <p>Tekan <strong>Dengarkan</strong>, lalu pilih kata yang Anda dengar.
      Jangan melihat pilihan jawaban sebelum mendengarkan sekali.</p>
      <p>Tiga hal ini tidak ada dalam bahasa Indonesia, sehingga telinga Anda
      memang belum terlatih membedakannya: <strong>nada</strong>,
      <strong>panjang vokal</strong>, dan <strong>hembusan</strong>. Latihan
      pendek yang sering jauh lebih berguna daripada latihan panjang sesekali.</p>
      ${speechReady() ? "" : `<div class="caveat">Perangkat ini belum punya
      suara Thai, jadi tombol suaranya mati. Di Windows: Settings → Time &amp;
      language → Language &amp; region → tambahkan Thai beserta paket
      suaranya. Di Android dan iOS, suara Thai biasanya sudah tersedia.</div>`}
    </div></details>`;
  } else if (mode === "serumpun") {
    html = `<details><summary>Tentang kata serumpun</summary><div class="body">
      ${D.info.serumpun.map((n) => `<p><strong>${esc(n.title)}.</strong>
        ${esc(n.text)}</p>`).join("")}
    </div></details>`;
  } else if (mode === "bacaan") {
    html = `<details><summary>Cara memakai bacaan</summary><div class="body">
      <p>Baca satu kali tanpa melihat artinya. Dengarkan bila ada suara. Baca
      ulang dengan suara keras. Baru balik kartunya dan cocokkan.</p>
      <p>Seluruh kata pada percakapan ini sudah ada di modul kosakata dan
      frasa, jadi Anda tidak memerlukan kamus.</p>
    </div></details>`;
  } else if (mode === "kosakata" || mode === "frasa") {
    html = `<details><summary>Cara membaca lajur lafal</summary><div class="body">
      <p>Vokal panjang ditulis ganda (aa, ii, uu, ee, aae, oo, aaw, uue, ooe),
      vokal pendek ditulis tunggal. Suku kata dalam satu kata dipisah tanda
      hubung, kata dipisah spasi.</p>
      <p>Nada ditulis sebagai tanda di atas vokal pertama setiap suku kata:</p>
      <table><tr><th>Tanda</th><th>Nada</th><th>Contoh</th></tr>
        <tr><td>tanpa tanda</td><td>sedang</td><td>maa (มา, datang)</td></tr>
        <tr><td>a&#768;</td><td>rendah</td><td>p&agrave;a (ป่า, hutan)</td></tr>
        <tr><td>a&#770;</td><td>turun</td><td>p&acirc;a (ป้า, bibi)</td></tr>
        <tr><td>a&#769;</td><td>tinggi</td><td>m&aacute;a (ม้า, kuda)</td></tr>
        <tr><td>a&#780;</td><td>naik</td><td>m&#462;a (หมา, anjing)</td></tr>
      </table>
      <p>Lajur RTGS adalah alih huruf resmi yang dipakai papan nama jalan di
      Thailand. RTGS tidak menuliskan nada dan tidak membedakan panjang vokal,
      jadi ia berguna untuk membaca papan nama, bukan untuk melafalkan.</p>
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

function setTheme(name) {
  // Swap only the theme class. Assigning body.className wholesale
  // would wipe has-sitebar and has-app, which position the shared
  // nav bar, dropping the page content underneath it.
  document.body.classList.remove("theme-siam", "theme-baitoei", "theme-ratri");
  document.body.classList.add("theme-" + name);
  for (const b of document.querySelectorAll(".theme-dot")) {
    b.setAttribute("aria-pressed", String(b.dataset.theme === name));
  }
  lsSet(LS.theme, name);
}

function bindToggle(id, key) {
  const el = $(id);
  if (!el) return;
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

  setTheme(lsGet(LS.theme, "siam"));

  /* Daftar suara peramban sering baru siap beberapa saat sesudah halaman
     dimuat, jadi kartu digambar ulang begitu suaranya ditemukan. */
  if (typeof window.speechSynthesis !== "undefined") {
    pickVoice();
    window.speechSynthesis.onvoiceschanged = () => { pickVoice(); render(); };
  } else {
    voicesLoaded = true;
  }
  document.addEventListener("click", () => { userInteracted = true; }, { once: true });

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
    if (e.target.closest("[data-speak]")) {
      e.stopPropagation();
      if (deck.length) speak(audioOf(deck[index]));
      return;
    }
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

  bindToggle("#tg-phon", "phon");
  bindToggle("#tg-arah", "arah");
  bindToggle("#tg-due", "due");
  bindToggle("#tg-hide", "hide");
  bindToggle("#tg-kelas", "kelas");
  bindToggle("#tg-lambat", "lambat");

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
      case "a": case "A":
        if (deck.length) speak(audioOf(deck[index]));
        break;
      case "l": case "L": $("#tg-phon").click(); break;
      case "/": e.preventDefault(); els.search.focus(); break;
      default:
        if (/^[1-9]$/.test(e.key)) answer(Number(e.key) - 1);
    }
  });

  window.addEventListener("resize", fitCard);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(fitCard);

  setMode("aksara");

  // Jumlah kartu pada tab diambil dari data, bukan ditulis tangan.
  for (const b of els.tabs.querySelectorAll("button")) {
    const n = MODES[b.dataset.mode].items().length;
    b.querySelector("span").textContent = String(n);
  }
}

document.addEventListener("DOMContentLoaded", init);
