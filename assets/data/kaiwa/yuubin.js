/* 郵便 — kantor pos, paket, kurir, kiriman ulang */
addCards("郵便", [
  {
    jp: "これを{送:おく}りたいんですが", romaji: "kore wo okuritain desu ga",
    id: "Saya ingin mengirim ini",
    type: "丁寧語", role: "話",
    note: "Di loket kantor pos ({郵便局:ゆうびんきょく}). Paket dalam negeri juga bisa dikirim lewat konbini."
  },
  {
    jp: "インドネシアまで、{航空便:こうくうびん}でいくらですか", romaji: "indoneshia made, koukuubin de ikura desu ka",
    id: "Ke Indonesia lewat pos udara berapa biayanya?",
    type: "丁寧語", role: "話",
    note: "Pilihan: EMS (ekspres, paling cepat), {航空便:こうくうびん} (udara), {船便:ふなびん} (laut — murah tapi bisa 1–3 bulan). Bandingkan juga jasa kargo khusus Indonesia."
  },
  {
    jp: "{中身:なかみ}は{何:なん}ですか", romaji: "nakami wa nan desu ka",
    id: "Isinya apa?",
    type: "丁寧語", role: "聞",
    reply: "{服:ふく}とお{菓子:かし}です",
    note: "Untuk kiriman luar negeri harus diisi daftar isi & nilai barang. Baterai lithium, cairan, dan barang tertentu dibatasi."
  },
  {
    jp: "{割:わ}れ{物:もの}は{入:はい}っていますか", romaji: "waremono wa haitte imasu ka",
    id: "Ada barang pecah belah di dalamnya?",
    type: "丁寧語", role: "聞",
    reply: "いいえ、{入:はい}っていません",
    note: "Kalau ada, petugas menempel stiker {割:わ}れ{物:もの}{注意:ちゅうい} (fragile)."
  },
  {
    jp: "{110円:ひゃくじゅうえん}{切手:きって}を{5枚:ごまい}ください", romaji: "hyakujuu en kitte wo gomai kudasai",
    id: "Tolong perangko 110 yen sebanyak 5 lembar",
    type: "丁寧語", role: "話",
    note: "Sejak Oktober 2024: surat biasa (≤25 g) 110円, kartu pos 85円. {枚:まい} = satuan benda tipis/datar."
  },
  {
    jp: "{書留:かきとめ}でお{願:ねが}いします", romaji: "kakitome de onegai shimasu",
    id: "Tolong dikirim sebagai pos tercatat",
    type: "丁寧語", role: "話",
    note: "Untuk dokumen penting (paspor, kontrak). Ada nomor pelacakan dan tanda terima."
  },
  {
    jp: "{届:とど}け{先:さき}のご{住所:じゅうしょ}をこちらにご{記入:きにゅう}ください", romaji: "todokesaki no gojuusho wo kochira ni gokinyuu kudasai",
    id: "Silakan tulis alamat penerima di sini",
    type: "尊敬語", role: "聞",
    note: "{届:とど}け{先:さき} / お{届:とど}け{先:さき} = penerima, ご{依頼主:いらいぬし} = pengirim. Kode pos 〒 ditulis di kotak paling atas."
  },
  {
    jp: "{宅配便:たくはいびん}を{出:だ}したいんですが", romaji: "takuhaibin wo dashitain desu ga",
    id: "Saya ingin mengirim paket kurir",
    type: "丁寧語", role: "話",
    note: "Konbini menerima paket ヤマト{運輸:うんゆ} ({宅急便:たっきゅうびん}) dan ゆうパック. Kasir akan memberi formulir {伝票:でんぴょう}."
  },
  {
    jp: "{元払:もとばら}いでお{願:ねが}いします", romaji: "motobarai de onegai shimasu",
    id: "Ongkos kirim dibayar pengirim (saya)",
    type: "丁寧語", role: "話",
    note: "Lawannya {着払:ちゃくばら}い = ongkos kirim dibayar penerima."
  },
  {
    jp: "お{届:とど}け{物:もの}です", romaji: "otodokemono desu",
    id: "Ada kiriman paket untuk Anda",
    type: "丁寧語", role: "聞",
    reply: "はい、{今:いま}{行:い}きます",
    note: "Suara kurir di interkom atau di depan pintu. Variasi: 「{宅配便:たくはいびん}です」, 「ゆうびんです」."
  },
  {
    jp: "こちらにサインかハンコをお{願:ねが}いします", romaji: "kochira ni sain ka hanko wo onegai shimasu",
    id: "Mohon tanda tangan atau cap di sini",
    type: "丁寧語", role: "聞",
    note: "Kini banyak paket tanpa tanda tangan. Tulis nama keluarga dalam katakana atau tanda tanganmu biasa."
  },
  {
    jp: "{着払:ちゃくばら}いですので、{1200円:せんにひゃくえん}お{願:ねが}いします", romaji: "chakubarai desu node, sen nihyaku en onegai shimasu",
    id: "Ongkos kirim dibayar penerima, jadi 1.200 yen",
    type: "丁寧語", role: "聞",
    note: "{代引:だいび}き = bayar harga barang + ongkir saat menerima (COD). Siapkan uang tunai pas."
  },
  {
    jp: "{不在票:ふざいひょう}が{入:はい}っていたので、{再配達:さいはいたつ}をお{願:ねが}いしたいんですが", romaji: "fuzaihyou ga haitte ita node, saihaitatsu wo onegai shitain desu ga",
    id: "Ada kertas pemberitahuan tidak di rumah, saya ingin minta diantar ulang",
    type: "謙譲語", role: "話",
    note: "Lebih mudah lewat QR code/LINE/aplikasi di kertas {不在票:ふざいひょう}. Siapkan {伝票番号:でんぴょうばんごう} (nomor resi)."
  },
  {
    jp: "{明日:あした}の{夜:よる}{7時:しちじ}{以降:いこう}に{届:とど}けていただけますか", romaji: "ashita no yoru shichiji ikou ni todokete itadakemasu ka",
    id: "Bisakah diantar besok malam setelah jam 7?",
    type: "謙譲語", role: "話",
    note: "{以降:いこう} = setelah (termasuk jam itu). 7{時:じ} dibaca しちじ (lebih jelas di telepon daripada ななじ)."
  },
  {
    jp: "{玄関:げんかん}の{前:まえ}に{置:お}いてください", romaji: "genkan no mae ni oite kudasai",
    id: "Tolong taruh di depan pintu",
    type: "丁寧語", role: "話",
    note: "{置:お}き{配:はい} = paket ditaruh di depan pintu tanpa bertemu. Bisa diatur di aplikasi kurir."
  },
  {
    jp: "{郵便局:ゆうびんきょく}の{窓口:まどぐち}は{何時:なんじ}までですか", romaji: "yuubinkyoku no madoguchi wa nanji made desu ka",
    id: "Loket kantor pos buka sampai jam berapa?",
    type: "丁寧語", role: "話",
    note: "Kebanyakan kantor pos kecil tutup sore hari dan libur Sabtu–Minggu. Kantor pos besar ({本局:ほんきょく}) punya loket lebih lama."
  },
  {
    jp: "{引:ひ}っ{越:こ}したので、{転居届:てんきょとどけ}を{出:だ}したいです", romaji: "hikkoshita node, tenkyo todoke wo dashitai desu",
    id: "Saya sudah pindah, ingin melapor alamat baru (ke pos)",
    type: "丁寧語", role: "話",
    note: "Surat ke alamat lama akan diteruskan gratis selama 1 tahun. Bisa juga online (e-{転居:てんきょ})."
  }
]);
