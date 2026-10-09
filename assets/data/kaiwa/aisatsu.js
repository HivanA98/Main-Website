/* 挨拶 — salam, perkenalan, basa-basi musiman */
addCards("挨拶", [
  {
    jp: "はじめまして。〇〇と{申:もう}します", romaji: "hajimemashite. 〇〇 to moushimasu",
    id: "Perkenalkan, nama saya 〇〇",
    type: "謙譲語", role: "話",
    note: "「{申:もう}します」 lebih sopan daripada 「〇〇です」. Dipakai di hari pertama kerja, di kantor kota, dengan pengelola asrama."
  },
  {
    jp: "インドネシアから{参:まい}りました", romaji: "indoneshia kara mairimashita",
    id: "Saya datang dari Indonesia (hormat)",
    type: "謙譲語", role: "話",
    note: "Untuk perkenalan resmi ({朝礼:ちょうれい}, depan seluruh karyawan). Situasi santai cukup 「インドネシアから{来:き}ました」."
  },
  {
    jp: "{実習生:じっしゅうせい}として、{今日:きょう}からお{世話:せわ}になります", romaji: "jisshuusei toshite, kyou kara osewa ni narimasu",
    id: "Mulai hari ini saya bekerja di sini sebagai peserta magang, mohon bimbingannya",
    type: "謙譲語", role: "話",
    note: "「お{世話:せわ}になります」 = salam saat mulai bergantung pada seseorang/tempat. Catatan: mulai 2027 program {技能実習:ぎのうじっしゅう} diganti {育成就労:いくせいしゅうろう} — tanyakan ke LPK/perusahaan istilah mana untuk posisimu."
  },
  {
    jp: "{分:わ}からないことが{多:おお}いですが、{一生懸命:いっしょうけんめい}{頑張:がんば}ります", romaji: "wakaranai koto ga ooi desu ga, isshoukenmei ganbarimasu",
    id: "Masih banyak yang belum saya pahami, tapi saya akan berusaha sekuat tenaga",
    type: "丁寧語", role: "話",
    note: "Kalimat penutup klasik perkenalan di tempat kerja. Sangat disukai atasan Jepang."
  },
  {
    jp: "どうぞよろしくお{願:ねが}いいたします", romaji: "douzo yoroshiku onegai itashimasu",
    id: "Mohon bimbingan dan kerja samanya",
    type: "謙譲語", role: "話",
    note: "Penutup perkenalan yang paling hormat. Ucapkan sambil membungkuk ±30°."
  },
  {
    jp: "{趣味:しゅみ}はサッカーと{料理:りょうり}です", romaji: "shumi wa sakkaa to ryouri desu",
    id: "Hobi saya sepak bola dan memasak",
    type: "丁寧語", role: "話",
    note: "Hobi sering ditanyakan di perkenalan. Siapkan 1–2 hobi — bisa jadi bahan obrolan dengan rekan kerja."
  },
  {
    jp: "〇〇と{呼:よ}んでください", romaji: "〇〇 to yonde kudasai",
    id: "Silakan panggil saya 〇〇",
    type: "丁寧語", role: "話",
    note: "Nama Indonesia sering panjang/sulit diucapkan. Beri nama panggilan pendek supaya rekan kerja mudah memanggilmu."
  },
  {
    jp: "お{名前:なまえ}は{何:なん}とお{呼:よ}びすればいいですか", romaji: "onamae wa nan to oyobi sureba ii desu ka",
    id: "Saya sebaiknya memanggil Anda dengan nama apa?",
    type: "謙譲語", role: "話",
    note: "お〜する = kenjougo. Berguna saat bertemu senpai/atasan baru. Umumnya: nama keluarga + さん, atau jabatan ({班長:はんちょう}, {部長:ぶちょう})."
  },
  {
    jp: "おはようございます", romaji: "ohayou gozaimasu",
    id: "Selamat pagi (sopan)",
    type: "丁寧語", role: "話",
    note: "Di banyak pabrik/toko, ini salam pertama saat masuk shift — bahkan untuk shift malam ({夜勤:やきん}). Ucapkan jelas dan keras, bukan bergumam."
  },
  {
    jp: "{行:い}ってきます", romaji: "itte kimasu",
    id: "Saya berangkat dulu",
    type: "定型", role: "話",
    reply: "{行:い}ってらっしゃい",
    note: "Saat keluar dari asrama/rumah/kantor. Yang tinggal menjawab 「{行:い}ってらっしゃい」. Versi hormat di kantor: 「{行:い}ってまいります」."
  },
  {
    jp: "ただいま{戻:もど}りました", romaji: "tadaima modorimashita",
    id: "Saya sudah kembali",
    type: "丁寧語", role: "話",
    reply: "おかえりなさい／お{疲:つか}れ{様:さま}です",
    note: "Saat kembali ke kantor/tempat kerja setelah keluar. Di asrama/rumah cukup 「ただいま」."
  },
  {
    jp: "お{久:ひさ}しぶりです。お{元気:げんき}でしたか", romaji: "ohisashiburi desu. ogenki deshita ka",
    id: "Lama tidak bertemu. Apa kabar?",
    type: "丁寧語", role: "話",
    reply: "はい、おかげさまで",
    note: "「おかげさまで」 = 'berkat Anda (saya baik)' — jawaban standar yang sopan."
  },
  {
    jp: "{最近:さいきん}、{寒:さむ}くなりましたね", romaji: "saikin, samuku narimashita ne",
    id: "Akhir-akhir ini jadi dingin ya",
    type: "丁寧語", role: "話",
    note: "Obrolan cuaca = pembuka standar dengan tetangga, rekan, pengelola asrama. Variasi: 「{毎日:まいにち}{暑:あつ}いですね」「よく{降:ふ}りますね」."
  },
  {
    jp: "いいお{天気:てんき}ですね", romaji: "ii otenki desu ne",
    id: "Cuacanya bagus ya",
    type: "丁寧語", role: "話",
    reply: "そうですね",
    note: "Basa-basi saat berpapasan. Jawaban paling aman: 「そうですね」."
  },
  {
    jp: "よいお{年:とし}を", romaji: "yoi otoshi wo",
    id: "Selamat tahun baru (diucapkan sebelum tahun baru)",
    type: "定型", role: "話",
    note: "Diucapkan akhir Desember, saat terakhir bertemu sebelum libur tahun baru. Versi lengkap: 「よいお{年:とし}をお{迎:むか}えください」."
  },
  {
    jp: "あけましておめでとうございます。{今年:ことし}もよろしくお{願:ねが}いします", romaji: "akemashite omedetou gozaimasu. kotoshi mo yoroshiku onegai shimasu",
    id: "Selamat tahun baru. Mohon kerja samanya tahun ini juga",
    type: "定型", role: "話",
    note: "Diucapkan saat pertama bertemu di tahun baru (sampai ±pertengahan Januari). Hari kerja pertama di bulan Januari, ucapkan ke semua orang."
  },
  {
    jp: "お{大事:だいじ}にしてください", romaji: "odaiji ni shite kudasai",
    id: "Semoga lekas sembuh",
    type: "定型", role: "話",
    note: "Ke rekan yang sakit atau terluka. Versi pendek: 「お{大事:だいじ}に」."
  },
  {
    jp: "お{邪魔:じゃま}します", romaji: "ojama shimasu",
    id: "Permisi (saat masuk rumah orang)",
    type: "定型", role: "話",
    note: "Saat masuk rumah/kamar orang lain. Saat pamit: 「お{邪魔:じゃま}しました」. Ingat lepas sepatu di {玄関:げんかん}."
  },
  {
    jp: "お{気:き}をつけてお{帰:かえ}りください", romaji: "oki wo tsukete okaeri kudasai",
    id: "Hati-hati di jalan pulang",
    type: "尊敬語", role: "話",
    note: "Ke tamu atau atasan yang pulang. Ke teman cukup 「{気:き}をつけてね」."
  },
  {
    jp: "{今後:こんご}ともよろしくお{願:ねが}いします", romaji: "kongo tomo yoroshiku onegai shimasu",
    id: "Mohon kerja samanya ke depannya juga",
    type: "丁寧語", role: "話",
    note: "Penutup percakapan dengan orang yang akan sering kamu temui: pengelola asrama, petugas kumiai, tetangga."
  },
  {
    jp: "お{世話:せわ}になりました", romaji: "osewa ni narimashita",
    id: "Terima kasih atas semua bantuannya (saat berpisah)",
    type: "定型", role: "話",
    note: "Saat selesai magang, pindah, atau pulang ke Indonesia. Ke atasan: 「{大変:たいへん}お{世話:せわ}になりました」."
  }
]);
