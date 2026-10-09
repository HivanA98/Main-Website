/* ============================================================
   生活会話 — inisialisasi data
   ------------------------------------------------------------
   Dimuat PALING AWAL. Tiap berkas kategori di folder data/
   memanggil addCards("<kategori>", [ ...kartu ]).

   Skema kartu:
     jp     : Bahasa Jepang + furigana {漢字:よみ}  (wajib)
     romaji : Hepburn, gaya "ou/ii", partikel を = wo  (wajib)
     id     : Arti Bahasa Indonesia  (wajib)
     type   : 尊敬語 | 謙譲語 | 丁寧語 | 定型 | 普通 | 注意
     role   : 話 = kamu yang mengucapkan
              聞 = kamu yang mendengar (staf, petugas, atasan, pengumuman)
     reply  : (opsional) contoh jawaban / respons, boleh pakai furigana
     note   : Catatan pemakaian, boleh pakai furigana
     yomi   : (opsional) bacaan kana — otomatis dari jp bila kosong

   Placeholder nama/tempat ditulis 〇〇 — ganti dengan milikmu.
   Cek data:  node tools/validate-data.js
   ============================================================ */

var KAIWA_DATA = [];

/* Urutan & label chip filter. Kategori baru: tambahkan di sini
   + buat berkas data/<nama>.js + daftarkan di index.html. */
var KAIWA_CATS = [
  ["基本",   "Dasar"],
  ["挨拶",   "Salam"],
  ["職場",   "Kerja"],
  ["コンビニ", "Konbini"],
  ["買い物",  "Belanja"],
  ["飲食店",  "Restoran"],
  ["電車",   "Kereta"],
  ["交通",   "Jalan & Bus"],
  ["病院",   "Klinik"],
  ["役所",   "Kantor Kota"],
  ["銀行",   "Bank"],
  ["郵便",   "Pos & Paket"],
  ["携帯",   "HP & Internet"],
  ["住まい",  "Tempat Tinggal"],
  ["美容院",  "Potong Rambut"],
  ["電話",   "Telepon"],
  ["緊急",   "Darurat"],
  ["交流",   "Pergaulan"]
];

function addCards(cat, cards) {
  cards.forEach(function (c) {
    c.cat = cat;
    KAIWA_DATA.push(c);
  });
}
