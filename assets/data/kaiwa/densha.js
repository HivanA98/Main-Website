/* 電車 — kereta, stasiun, pengumuman, kartu IC */
addCards("電車", [
  /* ---------- bertanya ---------- */
  {
    jp: "すみません、〇〇{駅:えき}に{行:い}きたいんですが", romaji: "sumimasen, 〇〇 eki ni ikitain desu ga",
    id: "Permisi, saya ingin pergi ke Stasiun 〇〇",
    type: "丁寧語", role: "話",
    note: "Kalimat menggantung 〜んですが = minta bantuan secara halus. Petugas ({駅員:えきいん}) akan menjelaskan rute & peron."
  },
  {
    jp: "{新宿:しんじゅく}{行:ゆ}きは{何番線:なんばんせん}ですか", romaji: "shinjuku yuki wa nanbansen desu ka",
    id: "Kereta tujuan Shinjuku di jalur nomor berapa?",
    type: "丁寧語", role: "話",
    note: "〜{行:ゆ}き (yuki/iki) = tujuan akhir kereta. {番線:ばんせん} = nomor peron/jalur."
  },
  {
    jp: "この{電車:でんしゃ}は〇〇に{止:と}まりますか", romaji: "kono densha wa 〇〇 ni tomarimasu ka",
    id: "Apakah kereta ini berhenti di 〇〇?",
    type: "丁寧語", role: "話",
    note: "PENTING: {快速:かいそく}・{急行:きゅうこう}・{特急:とっきゅう} melewati stasiun kecil. {各駅停車:かくえきていしゃ} ({各停:かくてい}/{普通:ふつう}) berhenti di semua stasiun."
  },
  {
    jp: "どこで{乗:の}り{換:か}えればいいですか", romaji: "doko de norikaereba ii desu ka",
    id: "Saya harus transit di mana?",
    type: "丁寧語", role: "話",
    note: "{乗:の}り{換:か}え = transit/ganti kereta. Aplikasi seperti Google Maps/{乗換案内:のりかえあんない} sangat membantu, tapi bertanya juga tidak apa-apa."
  },
  {
    jp: "{東口:ひがしぐち}はどちらですか", romaji: "higashiguchi wa dochira desu ka",
    id: "Pintu keluar timur ke arah mana?",
    type: "丁寧語", role: "話",
    note: "Stasiun besar punya banyak pintu: {東口:ひがしぐち}, {西口:にしぐち}, {南口:みなみぐち}, {北口:きたぐち}, {中央口:ちゅうおうぐち}. Salah pintu bisa membuatmu tersesat jauh."
  },
  {
    jp: "{終電:しゅうでん}は{何時:なんじ}ですか", romaji: "shuuden wa nanji desu ka",
    id: "Kereta terakhir jam berapa?",
    type: "丁寧語", role: "話",
    note: "Kereta terakhir umumnya sekitar jam 24:00–00:30. Ketinggalan {終電:しゅうでん} = taksi mahal atau menunggu sampai pagi."
  },
  {
    jp: "コインロッカーはありますか", romaji: "koin rokkaa wa arimasu ka",
    id: "Ada loker koin?",
    type: "丁寧語", role: "話",
    note: "Banyak loker kini bisa dibayar dengan kartu IC."
  },
  {
    jp: "{定期券:ていきけん}を{作:つく}りたいんですが", romaji: "teikiken wo tsukuritain desu ga",
    id: "Saya ingin membuat tiket langganan",
    type: "丁寧語", role: "話",
    note: "{通勤定期:つうきんていき} = tiket langganan rute rumah–kantor. Biasanya diganti perusahaan lewat {通勤手当:つうきんてあて} (tunjangan transportasi)."
  },
  {
    jp: "{新幹線:しんかんせん}の{指定席:していせき}を{一枚:いちまい}お{願:ねが}いします", romaji: "shinkansen no shiteiseki wo ichimai onegai shimasu",
    id: "Tolong satu tiket Shinkansen kursi reservasi",
    type: "丁寧語", role: "話",
    note: "{指定席:していせき} = kursi bernomor, {自由席:じゆうせき} = kursi bebas (lebih murah, bisa tidak dapat tempat duduk)."
  },
  {
    jp: "{窓側:まどがわ}と{通路側:つうろがわ}、どちらがよろしいですか", romaji: "madogawa to tsuurogawa, dochira ga yoroshii desu ka",
    id: "Mau dekat jendela atau dekat lorong?",
    type: "丁寧語", role: "聞",
    reply: "{窓側:まどがわ}でお{願:ねが}いします",
    note: "Di Shinkansen Tokaido, kursi E (sisi kanan arah Osaka) bisa melihat Gunung Fuji."
  },

  /* ---------- di dalam kereta ---------- */
  {
    jp: "すみません、{降:お}ります!", romaji: "sumimasen, orimasu!",
    id: "Permisi, saya mau turun!",
    type: "丁寧語", role: "話",
    note: "Saat kereta penuh dan kamu terjebak di tengah. Ucapkan cukup keras sambil bergerak ke pintu."
  },
  {
    jp: "この{席:せき}、{空:あ}いていますか", romaji: "kono seki, aite imasu ka",
    id: "Kursi ini kosong?",
    type: "丁寧語", role: "話",
    note: "Kalau ada tas di kursi. Jawaban: 「どうぞ」 (silakan) atau 「すみません、{人:ひと}が{来:き}ます」."
  },
  {
    jp: "どうぞ、お{座:すわ}りください", romaji: "douzo, osuwari kudasai",
    id: "Silakan duduk",
    type: "尊敬語", role: "話",
    note: "Menawarkan kursi ke lansia, ibu hamil (tanda マタニティマーク), atau orang dengan cedera. Kalau ditolak 「{大丈夫:だいじょうぶ}です」, jangan dipaksa."
  },
  {
    jp: "まもなく、{1番線:いちばんせん}に{電車:でんしゃ}が{参:まい}ります", romaji: "mamonaku, ichibansen ni densha ga mairimasu",
    id: "Sebentar lagi kereta tiba di jalur 1",
    type: "謙譲語", role: "聞",
    note: "Pengumuman stasiun memakai {参:まい}ります (kenjougo) karena kereta adalah 'milik' perusahaan yang merendah ke penumpang."
  },
  {
    jp: "{黄色:きいろ}い{線:せん}の{内側:うちがわ}までお{下:さ}がりください", romaji: "kiiroi sen no uchigawa made osagari kudasai",
    id: "Mohon mundur ke belakang garis kuning",
    type: "尊敬語", role: "聞",
    note: "Kadang 「{白線:はくせん}の{内側:うちがわ}」 (garis putih) atau 「ホームドアから{離:はな}れて」. {内側:うちがわ} = sisi yang jauh dari rel."
  },
  {
    jp: "ドアが{閉:し}まります。ご{注意:ちゅうい}ください", romaji: "doa ga shimarimasu. gochuui kudasai",
    id: "Pintu akan menutup. Harap berhati-hati",
    type: "丁寧語", role: "聞",
    note: "Jangan memaksa masuk saat bunyi ini terdengar — tunggu kereta berikutnya (biasanya hanya beberapa menit)."
  },
  {
    jp: "{駆:か}け{込:こ}み{乗車:じょうしゃ}はおやめください", romaji: "kakekomi jousha wa oyame kudasai",
    id: "Mohon jangan berlari masuk ke kereta",
    type: "尊敬語", role: "聞",
    note: "お〜ください dengan やめる = larangan sopan. Berlari masuk kereta berbahaya dan bisa menunda semua kereta."
  },
  {
    jp: "{次:つぎ}は〇〇です。お{出口:でぐち}は{左側:ひだりがわ}です", romaji: "tsugi wa 〇〇 desu. odeguchi wa hidarigawa desu",
    id: "Berikutnya stasiun 〇〇. Pintu keluar di sebelah kiri",
    type: "丁寧語", role: "聞",
    note: "Lalu sering: 「〇〇{線:せん}はお{乗:の}り{換:か}えです」 = di sini bisa transit ke jalur 〇〇."
  },
  {
    jp: "{車内:しゃない}での{通話:つうわ}はご{遠慮:えんりょ}ください", romaji: "shanai de no tsuuwa wa goenryo kudasai",
    id: "Mohon tidak menelepon di dalam kereta",
    type: "尊敬語", role: "聞",
    note: "Pasang mode senyap (マナーモード). Kalau ada telepon penting: 「{今:いま}、{電車:でんしゃ}なので{後:あと}でかけ{直:なお}します」 dengan suara pelan."
  },
  {
    jp: "お{忘:わす}れ{物:もの}のないよう、ご{注意:ちゅうい}ください", romaji: "owasuremono no nai you, gochuui kudasai",
    id: "Harap perhatikan agar tidak ada barang yang tertinggal",
    type: "丁寧語", role: "聞",
    note: "Pengumuman di stasiun akhir dan Shinkansen. Cek rak atas dan kursimu."
  },
  {
    jp: "この{車両:しゃりょう}は{女性専用車:じょせいせんようしゃ}です", romaji: "kono sharyou wa josei senyousha desu",
    id: "Gerbong ini khusus wanita",
    type: "丁寧語", role: "聞",
    note: "Pada jam sibuk pagi (dan di beberapa jalur sepanjang hari). Pria sebaiknya pindah gerbong — lihat tanda merah muda di peron & pintu."
  },

  /* ---------- gangguan & keterlambatan ---------- */
  {
    jp: "ただいま、{人身事故:じんしんじこ}の{影響:えいきょう}で{運転:うんてん}を{見合:みあ}わせております", romaji: "tadaima, jinshin jiko no eikyou de unten wo miawasete orimasu",
    id: "Saat ini, karena kecelakaan yang melibatkan orang, operasi kereta dihentikan sementara",
    type: "謙譲語", role: "聞",
    note: "{見合:みあ}わせ = dihentikan sementara. Biasanya 1 jam lebih. Cari rute alternatif dan kabari kantor."
  },
  {
    jp: "{電車:でんしゃ}が{遅:おく}れまして、ご{迷惑:めいわく}をおかけしております", romaji: "densha ga okuremashite, gomeiwaku wo okake shite orimasu",
    id: "Mohon maaf atas ketidaknyamanan karena kereta terlambat",
    type: "謙譲語", role: "聞",
    note: "Permintaan maaf standar perusahaan kereta. Keterlambatan bahkan 1–2 menit pun diumumkan."
  },
  {
    jp: "{平常通:へいじょうどお}り{運転:うんてん}しております", romaji: "heijoudoori unten shite orimasu",
    id: "Beroperasi normal",
    type: "謙譲語", role: "聞",
    note: "Lawan dari {遅延:ちえん} (terlambat) dan {運休:うんきゅう} (tidak beroperasi). Sering muncul di layar informasi stasiun."
  },
  {
    jp: "{振替輸送:ふりかえゆそう}を{行:おこな}っております", romaji: "furikae yusou wo okonatte orimasu",
    id: "Tersedia angkutan pengganti (boleh naik jalur lain dengan tiket yang sama)",
    type: "謙譲語", role: "聞",
    note: "Saat gangguan, kamu boleh naik jalur/perusahaan lain tanpa bayar lagi. Catatan: biasanya hanya untuk tiket kertas & {定期券:ていきけん}, tidak untuk saldo IC biasa."
  },
  {
    jp: "{遅延証明書:ちえんしょうめいしょ}をください", romaji: "chien shoumeisho wo kudasai",
    id: "Minta surat keterangan keterlambatan",
    type: "丁寧語", role: "話",
    note: "Serahkan ke kantor bila terlambat karena kereta. Sekarang juga bisa diunduh dari situs perusahaan kereta."
  },

  /* ---------- tiket & kartu IC ---------- */
  {
    jp: "{残額:ざんがく}が{不足:ふそく}しています", romaji: "zangaku ga fusoku shite imasu",
    id: "Saldo tidak cukup",
    type: "丁寧語", role: "聞",
    note: "Gerbang tiket berbunyi & menutup. Mundur, lalu isi saldo di mesin {精算機:せいさんき} (seisanki) dekat gerbang."
  },
  {
    jp: "{乗:の}り{越:こ}し{精算:せいさん}をしたいんですが", romaji: "norikoshi seisan wo shitain desu ga",
    id: "Saya ingin membayar kekurangan tarif",
    type: "丁寧語", role: "話",
    note: "Saat kamu turun lebih jauh dari tiket yang dibeli. Bisa di mesin {精算機:せいさんき} atau ke petugas di loket."
  },
  {
    jp: "{切符:きっぷ}をなくしてしまいました", romaji: "kippu wo nakushite shimaimashita",
    id: "Saya kehilangan tiket",
    type: "丁寧語", role: "話",
    note: "Lapor ke {駅員:えきいん}. Biasanya harus membayar ulang dari stasiun awal."
  },
  {
    jp: "{電車:でんしゃ}に{忘:わす}れ{物:もの}をしてしまったんですが", romaji: "densha ni wasuremono wo shite shimattan desu ga",
    id: "Saya ketinggalan barang di kereta",
    type: "丁寧語", role: "話",
    note: "Sebutkan: jalur, arah, jam, nomor gerbong ({何号車:なんごうしゃ}), ciri barang. Barang hilang di Jepang sangat sering kembali."
  },

  /* ---------- manner ---------- */
  {
    jp: "{混:こ}んでいる{電車:でんしゃ}ではリュックを{前:まえ}に", romaji: "konde iru densha de wa ryukku wo mae ni",
    id: "Di kereta penuh, ransel dipakai di depan",
    type: "注意", role: "話",
    note: "Atau taruh di rak atas. Ransel di punggung menyenggol orang lain dan dianggap kurang peka."
  },
  {
    jp: "エスカレーターは{立:た}ち{止:ど}まって{乗:の}る", romaji: "esukareetaa wa tachidomatte noru",
    id: "Di eskalator, berdiri diam",
    type: "注意", role: "話",
    note: "Kebiasaan lama: Tokyo berdiri di kiri, Osaka di kanan. Tapi kini dianjurkan berdiri diam di kedua sisi — bahkan diatur peraturan daerah di Saitama dan Nagoya."
  }
]);
