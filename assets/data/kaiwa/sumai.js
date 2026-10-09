/* 住まい — asrama, apartemen, tetangga, sampah, listrik/gas/air */
addCards("住まい", [
  /* ---------- tetangga ---------- */
  {
    jp: "{隣:となり}に{引:ひ}っ{越:こ}してきた〇〇です。よろしくお{願:ねが}いします", romaji: "tonari ni hikkoshite kita 〇〇 desu. yoroshiku onegai shimasu",
    id: "Saya 〇〇 yang baru pindah ke sebelah. Mohon kerja samanya",
    type: "丁寧語", role: "話",
    note: "{引:ひ}っ{越:こ}しの{挨拶:あいさつ} — tradisi menyapa tetangga saat pindah. Di asrama perusahaan mungkin tidak perlu; tanyakan pembimbingmu."
  },
  {
    jp: "つまらないものですが、どうぞ", romaji: "tsumaranai mono desu ga, douzo",
    id: "Ini sekadar hadiah kecil, silakan",
    type: "定型", role: "話",
    note: "Ungkapan merendah saat memberi hadiah (biasanya handuk atau kue kecil ±500–1.000円). Versi modern yang lebih positif: 「{気持:きも}ちばかりですが」."
  },
  {
    jp: "いつもお{世話:せわ}になっています", romaji: "itsumo osewa ni natte imasu",
    id: "Terima kasih atas bantuannya selama ini",
    type: "丁寧語", role: "話",
    note: "Ke pengelola asrama, {大家:おおや}さん (pemilik), atau tetangga yang sering membantu."
  },
  {
    jp: "{夜分:やぶん}{遅:おそ}くにすみません", romaji: "yabun osoku ni sumimasen",
    id: "Maaf mengganggu malam-malam",
    type: "定型", role: "話",
    note: "Saat harus mengetuk pintu atau menelepon seseorang di malam hari."
  },
  {
    jp: "{夜:よる}は{音:おと}が{響:ひび}くので、{気:き}をつけていただけますか", romaji: "yoru wa oto ga hibiku node, ki wo tsukete itadakemasu ka",
    id: "Malam hari suara mudah terdengar, bisa tolong lebih hati-hati?",
    type: "謙譲語", role: "聞",
    reply: "{申:もう}し{訳:わけ}ありません。{気:き}をつけます",
    note: "Keluhan suara = masalah tetangga nomor 1. Setelah ±22:00 kecilkan suara telepon video, musik, mesin cuci, dan langkah kaki."
  },
  {
    jp: "{騒音:そうおん}の{苦情:くじょう}が{来:き}ています", romaji: "souon no kujou ga kite imasu",
    id: "Ada keluhan soal kebisingan",
    type: "丁寧語", role: "聞",
    reply: "{申:もう}し{訳:わけ}ありません。{以後:いご}{気:き}をつけます",
    note: "Biasanya disampaikan lewat pengelola atau perusahaan, bukan langsung oleh tetangga. Tanggapi serius."
  },
  {
    jp: "{回覧板:かいらんばん}です", romaji: "kairanban desu",
    id: "Ini papan edaran lingkungan",
    type: "丁寧語", role: "聞",
    note: "Baca, beri tanda/paraf, lalu antar ke rumah berikutnya di daftar. Umum di perumahan, jarang di asrama."
  },

  /* ---------- sampah ---------- */
  {
    jp: "ゴミの{日:ひ}はいつですか", romaji: "gomi no hi wa itsu desu ka",
    id: "Hari buang sampah kapan?",
    type: "丁寧語", role: "話",
    note: "Jenis umum: {燃:も}えるゴミ (bisa dibakar), {燃:も}えないゴミ, {資源:しげん}ゴミ (botol, kaleng, PET), {粗大:そだい}ゴミ (barang besar, berbayar). Aturan tiap kota BERBEDA."
  },
  {
    jp: "これは{何:なに}ゴミですか", romaji: "kore wa nani gomi desu ka",
    id: "Ini termasuk sampah jenis apa?",
    type: "丁寧語", role: "話",
    note: "Tanyakan ke senpai atau cek aplikasi/kalender sampah kota. Botol PET: buang tutup & label, bilas, lalu remas."
  },
  {
    jp: "ゴミの{分別:ぶんべつ}ができていませんでした", romaji: "gomi no bunbetsu ga dekite imasen deshita",
    id: "Sampahnya tidak dipilah dengan benar",
    type: "丁寧語", role: "聞",
    reply: "すみません、{知:し}りませんでした。{次:つぎ}から{気:き}をつけます",
    note: "Kantong yang salah pilah ditempeli stiker peringatan dan tidak diangkut. Ambil kembali, pilah ulang."
  },
  {
    jp: "ゴミは{当日:とうじつ}の{朝:あさ}に{出:だ}す", romaji: "gomi wa toujitsu no asa ni dasu",
    id: "Sampah dibuang di pagi hari pengambilan",
    type: "注意", role: "話",
    note: "Biasanya sebelum jam 8:00 pada hari yang ditentukan. Membuang malam sebelumnya (kecuali daerahmu mengizinkan) bisa dibongkar gagak/kucing dan memicu komplain."
  },
  {
    jp: "{粗大:そだい}ゴミを{出:だ}したいんですが、どうすればいいですか", romaji: "sodai gomi wo dashitain desu ga, dou sureba ii desu ka",
    id: "Saya ingin membuang barang besar, bagaimana caranya?",
    type: "丁寧語", role: "話",
    note: "Daftar ke pusat {粗大:そだい}ゴミ kota (telepon/online), beli stiker biaya di konbini, tempel di barang, taruh di tempat & tanggal yang ditentukan."
  },

  /* ---------- kerusakan & utilitas ---------- */
  {
    jp: "{水:みず}が{出:で}ないんですが", romaji: "mizu ga denain desu ga",
    id: "Airnya tidak keluar",
    type: "丁寧語", role: "話",
    note: "Hubungi {管理会社:かんりがいしゃ} (perusahaan pengelola) atau perusahaanmu. Nomor darurat biasanya tertempel di dekat pintu/kotak listrik."
  },
  {
    jp: "お{湯:ゆ}が{出:で}なくなりました", romaji: "oyu ga denaku narimashita",
    id: "Air panasnya tidak keluar lagi",
    type: "丁寧語", role: "話",
    note: "Cek dulu panel {給湯器:きゅうとうき} (pemanas air) di dinding — mungkin hanya mati/error."
  },
  {
    jp: "エアコンが{壊:こわ}れたみたいなんですが、{見:み}ていただけますか", romaji: "eakon ga kowareta mitai nan desu ga, mite itadakemasu ka",
    id: "AC-nya sepertinya rusak, bisa tolong diperiksa?",
    type: "謙譲語", role: "話",
    note: "Musim panas Jepang sangat berbahaya tanpa AC (heatstroke). Segera lapor."
  },
  {
    jp: "{鍵:かぎ}をなくしてしまいました", romaji: "kagi wo nakushite shimaimashita",
    id: "Saya kehilangan kunci",
    type: "丁寧語", role: "話",
    note: "Hubungi pengelola. Biaya ganti kunci/silinder biasanya ditanggung penghuni (bisa mahal)."
  },
  {
    jp: "{電気:でんき}の{使用開始:しようかいし}の{手続:てつづ}きをしたいんですが", romaji: "denki no shiyou kaishi no tetsuzuki wo shitain desu ga",
    id: "Saya ingin mendaftar mulai pemakaian listrik",
    type: "丁寧語", role: "話",
    note: "Listrik & air biasanya bisa didaftarkan online/telepon. Di asrama perusahaan, umumnya sudah diurus."
  },
  {
    jp: "ガスの{開栓:かいせん}には{立:た}ち{会:あ}いが{必要:ひつよう}です", romaji: "gasu no kaisen ni wa tachiai ga hitsuyou desu",
    id: "Untuk membuka aliran gas, Anda harus hadir di tempat",
    type: "丁寧語", role: "聞",
    note: "Petugas gas datang memeriksa keamanan — kamu harus di rumah pada jam yang dijanjikan."
  },
  {
    jp: "{消防設備:しょうぼうせつび}の{点検:てんけん}で、お{部屋:へや}に{入:はい}らせていただきます", romaji: "shoubou setsubi no tenken de, oheya ni hairasete itadakimasu",
    id: "Untuk pemeriksaan alat pemadam kebakaran, kami akan masuk ke kamar",
    type: "謙譲語", role: "聞",
    note: "Pemberitahuan inspeksi rutin gedung. Tanggal & jam tertulis di kertas pengumuman di pintu masuk."
  },

  /* ---------- asrama ---------- */
  {
    jp: "{洗濯機:せんたくき}、{使:つか}ってもいいですか", romaji: "sentakuki, tsukatte mo ii desu ka",
    id: "Bolehkah saya memakai mesin cuci?",
    type: "丁寧語", role: "話",
    note: "Di asrama, perhatikan jadwal pemakaian mesin cuci & kamar mandi bersama. Jangan mencuci larut malam."
  },
  {
    jp: "{掃除当番:そうじとうばん}はいつですか", romaji: "souji touban wa itsu desu ka",
    id: "Giliran piket bersih-bersih saya kapan?",
    type: "丁寧語", role: "話",
    note: "Dapur, kamar mandi, dan area bersama biasanya dibersihkan bergiliran. Lalai piket = cepat jadi masalah."
  },
  {
    jp: "{共用:きょうよう}の{冷蔵庫:れいぞうこ}には{名前:なまえ}を{書:か}いてください", romaji: "kyouyou no reizouko ni wa namae wo kaite kudasai",
    id: "Tulis nama di barang yang disimpan di kulkas bersama",
    type: "丁寧語", role: "聞",
    note: "Makanan tanpa nama bisa dibuang saat bersih-bersih. Jangan memakai makanan orang lain tanpa izin."
  },
  {
    jp: "{今度:こんど}の{日曜日:にちようび}、{友達:ともだち}を{呼:よ}んでもいいですか", romaji: "kondo no nichiyoubi, tomodachi wo yonde mo ii desu ka",
    id: "Bolehkah saya mengundang teman hari Minggu ini?",
    type: "丁寧語", role: "話",
    note: "Banyak asrama melarang tamu menginap dan membatasi jam tamu. Selalu minta izin dulu."
  },
  {
    jp: "{退去:たいきょ}の{手続:てつづ}きをしたいんですが", romaji: "taikyo no tetsuzuki wo shitain desu ga",
    id: "Saya ingin mengurus keluar dari tempat tinggal",
    type: "丁寧語", role: "話",
    note: "Apartemen biasa: beri tahu ±1 bulan sebelumnya ({解約予告:かいやくよこく}). Bersihkan kamar — kerusakan bisa dipotong dari deposit."
  },
  {
    jp: "{土足厳禁:どそくげんきん}", romaji: "dosoku genkin",
    id: "Dilarang masuk memakai sepatu",
    type: "注意", role: "聞",
    note: "Lepas sepatu di {玄関:げんかん}, juga di beberapa klinik, ruang istirahat, dan kuil. Rapikan sepatu dengan ujung menghadap pintu."
  }
]);
