/* ============================================================
   生活会話 — validator data
   Jalankan:  node tools/validate-data.js

   Memeriksa setiap kartu di assets/data/kaiwa/*.js:
   - field wajib & nilai type / role / kategori yang sah
   - sintaks furigana {漢字:よみ} dan kanji yang lupa diberi furigana
   - romaji cocok dengan bacaan kana (toleran spasi, tanda baca,
     partikel は/へ/を = wa/e/wo, dan apostrof n')
   - kartu ganda (jp sama persis)
   - urutan <script> data di kaiwa/index.html sama dengan berkas di assets/data/kaiwa/
   ============================================================ */

"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const TYPES = ["尊敬語", "謙譲語", "丁寧語", "定型", "普通", "注意"];
const ROLES = ["話", "聞"];

/* ---------- muat data persis seperti browser (urutan dari index.html) ---------- */
const html = fs.readFileSync(path.join(ROOT, "kaiwa", "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="\/(assets\/data\/kaiwa\/[^"]+)"><\/script>/g)].map((m) => m[1]);
const onDisk = fs.readdirSync(path.join(ROOT, "assets", "data", "kaiwa")).filter((f) => f.endsWith(".js")).map((f) => "assets/data/kaiwa/" + f);

const problems = [];
const warn = (where, msg) => problems.push(`${where}: ${msg}`);

onDisk.filter((f) => !scripts.includes(f)).forEach((f) => warn(f, "tidak dimuat di index.html"));
scripts.filter((f) => !onDisk.includes(f)).forEach((f) => warn(f, "dirujuk index.html tapi berkasnya tidak ada"));

const ctx = vm.createContext({});
const fileOf = [], posOf = [];
scripts.filter((f) => onDisk.includes(f)).forEach((f) => {
  const before = ctx.KAIWA_DATA ? ctx.KAIWA_DATA.length : 0;
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
  for (let i = before; i < ctx.KAIWA_DATA.length; i++) { fileOf[i] = f; posOf[i] = i - before + 1; }
});
const DATA = ctx.KAIWA_DATA;
const CATS = ctx.KAIWA_CATS.map((c) => c[0]);

/* ---------- kana -> romaji (Hepburn, gaya data ini) ---------- */
const K2H = (s) => s.replace(/[ァ-ヶ]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0x60));
const BASE = {
  あ:"a",い:"i",う:"u",え:"e",お:"o",か:"ka",き:"ki",く:"ku",け:"ke",こ:"ko",
  さ:"sa",し:"shi",す:"su",せ:"se",そ:"so",た:"ta",ち:"chi",つ:"tsu",て:"te",と:"to",
  な:"na",に:"ni",ぬ:"nu",ね:"ne",の:"no",は:"ha",ひ:"hi",ふ:"fu",へ:"he",ほ:"ho",
  ま:"ma",み:"mi",む:"mu",め:"me",も:"mo",や:"ya",ゆ:"yu",よ:"yo",
  ら:"ra",り:"ri",る:"ru",れ:"re",ろ:"ro",わ:"wa",を:"wo",ん:"n",
  が:"ga",ぎ:"gi",ぐ:"gu",げ:"ge",ご:"go",ざ:"za",じ:"ji",ず:"zu",ぜ:"ze",ぞ:"zo",
  だ:"da",ぢ:"ji",づ:"zu",で:"de",ど:"do",ば:"ba",び:"bi",ぶ:"bu",べ:"be",ぼ:"bo",
  ぱ:"pa",ぴ:"pi",ぷ:"pu",ぺ:"pe",ぽ:"po",ゔ:"vu",
  ぁ:"a",ぃ:"i",ぅ:"u",ぇ:"e",ぉ:"o",ゃ:"ya",ゅ:"yu",ょ:"yo",ゎ:"wa"
};
const DIGRAPH = {
  きゃ:"kya",きゅ:"kyu",きょ:"kyo",しゃ:"sha",しゅ:"shu",しょ:"sho",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",
  にゃ:"nya",にゅ:"nyu",にょ:"nyo",ひゃ:"hya",ひゅ:"hyu",ひょ:"hyo",みゃ:"mya",みゅ:"myu",みょ:"myo",
  りゃ:"rya",りゅ:"ryu",りょ:"ryo",ぎゃ:"gya",ぎゅ:"gyu",ぎょ:"gyo",じゃ:"ja",じゅ:"ju",じょ:"jo",
  ぢゃ:"ja",ぢゅ:"ju",ぢょ:"jo",びゃ:"bya",びゅ:"byu",びょ:"byo",ぴゃ:"pya",ぴゅ:"pyu",ぴょ:"pyo",
  てぃ:"ti",でぃ:"di",でゅ:"dyu",とぅ:"tu",どぅ:"du",ふぁ:"fa",ふぃ:"fi",ふぇ:"fe",ふぉ:"fo",
  うぃ:"wi",うぇ:"we",うぉ:"wo",しぇ:"she",じぇ:"je",ちぇ:"che",ゔぁ:"va",ゔぃ:"vi",ゔぇ:"ve",ゔぉ:"vo"
};
function toRomaji(kana) {
  const s = K2H(kana);
  let out = "", sokuon = false;
  for (let i = 0; i < s.length; i++) {
    const two = s.slice(i, i + 2);
    let r;
    if (DIGRAPH[two]) { r = DIGRAPH[two]; i++; }
    else if (s[i] === "っ") { sokuon = true; continue; }
    else if (s[i] === "ー") { const v = out.match(/[aiueo](?=[^aiueo]*$)/); r = v ? v[0] : ""; }
    else r = BASE[s[i]] ?? s[i];
    if (sokuon) { out += r[0] || ""; sokuon = false; }
    out += r;
  }
  return out;
}
const norm = (s) => s.toLowerCase()
  .replace(/[^a-z0-9]/g, "")
  .replace(/tch/g, "cch")
  .replace(/wo/g, "o").replace(/ha/g, "wa").replace(/he/g, "e");

/* ---------- util furigana ---------- */
const FURI = /\{([^:{}]+):([^{}]+)\}/g;
const readingOf = (s) => s.replace(FURI, "$2");
const KANJI = /[\p{Script=Han}]/u;            // 〇 dikecualikan di bawah
const hasLooseKanji = (s) => KANJI.test(s.replace(FURI, "").replace(/〇/g, ""));
const badSyntax = (s) => /[{}]/.test(s.replace(FURI, ""));
const KANA_ONLY = /^[぀-ゟ゠-ヿー]+$/;

/* ---------- periksa tiap kartu ---------- */
const seen = new Map();
DATA.forEach((c, i) => {
  const where = `${fileOf[i]} kartu ke-${posOf[i]} 「${(c.jp || "").replace(FURI, "$1").slice(0, 24)}」`;

  ["jp", "romaji", "id", "type", "role", "note", "cat"].forEach((k) => {
    if (!c[k] || typeof c[k] !== "string") warn(where, `field '${k}' kosong`);
  });
  if (!TYPES.includes(c.type)) warn(where, `type tidak dikenal: ${c.type}`);
  if (!ROLES.includes(c.role)) warn(where, `role tidak dikenal: ${c.role}`);
  if (!CATS.includes(c.cat)) warn(where, `kategori tidak ada di KAIWA_CATS: ${c.cat}`);

  ["jp", "reply", "note"].forEach((k) => {
    if (c[k] && badSyntax(c[k])) warn(where, `kurung furigana rusak di '${k}'`);
    if (c[k]) for (const m of c[k].matchAll(FURI)) {
      if (!KANA_ONLY.test(m[2])) warn(where, `bacaan furigana bukan kana di '${k}': {${m[1]}:${m[2]}}`);
      if (/[぀-ヿ]/.test(m[1])) warn(where, `kana ikut masuk ke dalam kurung di '${k}': {${m[1]}:${m[2]}} — taruh kana di luar kurung`);
    }
  });
  if (c.jp && hasLooseKanji(c.jp)) warn(where, "ada kanji tanpa furigana di jp");
  if (c.reply && hasLooseKanji(c.reply)) warn(where, "ada kanji tanpa furigana di reply");
  if (c.note && hasLooseKanji(c.note)) {
    // 円 setelah angka harga (±500円) dibiarkan tanpa furigana
    const loose = [...new Set(c.note.replace(FURI, "").match(/[\p{Script=Han}]+/gu))].filter((k) => !/^[〇円]+$/.test(k));
    if (loose.length) warn(where, `kanji tanpa furigana di note: ${loose.join(" ")}`);
  }

  const yomi = c.yomi || readingOf(c.jp || "");
  if (KANJI.test(yomi.replace(/〇/g, ""))) warn(where, "bacaan (yomi) masih mengandung kanji");
  if (c.romaji && norm(toRomaji(yomi)) !== norm(c.romaji)) {
    warn(where, `romaji tidak cocok\n      kana   : ${yomi}\n      auto   : ${toRomaji(yomi)}\n      romaji : ${c.romaji}`);
  }

  if (c.jp) {
    if (seen.has(c.jp)) warn(where, `duplikat dari #${seen.get(c.jp) + 1}`);
    else seen.set(c.jp, i);
  }
});

/* ---------- ringkasan ---------- */
const byCat = {};
DATA.forEach((c) => { byCat[c.cat] = (byCat[c.cat] || 0) + 1; });
console.log(`Total kartu: ${DATA.length}`);
console.log(CATS.map((k) => `  ${k.padEnd(5, "　")} ${String(byCat[k] || 0).padStart(3)}`).join("\n"));
const byRole = { 話: 0, 聞: 0 };
DATA.forEach((c) => { byRole[c.role] = (byRole[c.role] || 0) + 1; });
console.log(`  話 (ucap) ${byRole["話"]} · 聞 (dengar) ${byRole["聞"]}`);

if (problems.length) {
  console.log(`\n${problems.length} masalah:\n` + problems.map((p) => "  - " + p).join("\n"));
  process.exit(1);
}
console.log("\nOK — tidak ada masalah.");
