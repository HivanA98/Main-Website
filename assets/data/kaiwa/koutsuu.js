/* 交通 — tanya jalan, bus, taksi, sepeda */
addCards("交通", [
  /* ---------- tanya jalan ---------- */
  {
    jp: "すみません、〇〇へはどう{行:い}けばいいですか", romaji: "sumimasen, 〇〇 e wa dou ikeba ii desu ka",
    id: "Permisi, bagaimana cara pergi ke 〇〇?",
    type: "丁寧語", role: "話",
    note: "Tunjukkan peta di HP sambil bertanya. Orang Jepang sering mengantar sampai dekat tujuan."
  },
  {
    jp: "ここから{歩:ある}いて{行:い}けますか", romaji: "koko kara aruite ikemasu ka",
    id: "Bisa jalan kaki dari sini?",
    type: "丁寧語", role: "話",
    note: "Lanjutkan: 「{歩:ある}いて{何分:なんぷん}ぐらいですか」 (kira-kira berapa menit jalan kaki?)."
  },
  {
    jp: "すみません、{道:みち}に{迷:まよ}ってしまいました", romaji: "sumimasen, michi ni mayotte shimaimashita",
    id: "Maaf, saya tersesat",
    type: "丁寧語", role: "話",
    note: "Kalau HP mati, pergi ke {交番:こうばん} (pos polisi kecil) — polisi di sana biasa menunjukkan jalan."
  },
  {
    jp: "この{地図:ちず}だと、{今:いま}どこですか", romaji: "kono chizu da to, ima doko desu ka",
    id: "Di peta ini, kita sekarang di mana?",
    type: "丁寧語", role: "話",
    note: "Peta di papan jalan Jepang sering tidak menghadap utara — arahnya mengikuti posisi kamu berdiri."
  },
  {
    jp: "この{近:ちか}くにコンビニはありますか", romaji: "kono chikaku ni konbini wa arimasu ka",
    id: "Ada konbini di dekat sini?",
    type: "丁寧語", role: "話",
    note: "Ganti コンビニ: {駅:えき}, ATM, {郵便局:ゆうびんきょく}, {薬局:やっきょく}, トイレ."
  },
  {
    jp: "この{道:みち}をまっすぐ{行:い}って、{二:ふた}つ{目:め}の{信号:しんごう}を{右:みぎ}に{曲:ま}がってください", romaji: "kono michi wo massugu itte, futatsu me no shingou wo migi ni magatte kudasai",
    id: "Jalan lurus di jalan ini, lalu belok kanan di lampu lalu lintas kedua",
    type: "丁寧語", role: "聞",
    reply: "ありがとうございます。{助:たす}かりました",
    note: "Kosakata: まっすぐ (lurus), {信号:しんごう} (lampu merah), {角:かど} (sudut/tikungan), {突:つ}き{当:あ}たり (ujung jalan buntu), {向:む}かい (seberang), {手前:てまえ} (sebelum), {先:さき} (setelah/lewat)."
  },
  {
    jp: "{突:つ}き{当:あ}たりを{左:ひだり}です", romaji: "tsukiatari wo hidari desu",
    id: "Di ujung jalan, belok kiri",
    type: "丁寧語", role: "聞",
    note: "{突:つ}き{当:あ}たり = titik di mana jalan berakhir (pertigaan T)."
  },
  {
    jp: "{交差点:こうさてん}を{渡:わた}って、すぐ{左:ひだり}にあります", romaji: "kousaten wo watatte, sugu hidari ni arimasu",
    id: "Seberangi perempatan, langsung ada di sebelah kiri",
    type: "丁寧語", role: "聞",
    note: "{交差点:こうさてん} = perempatan, {横断歩道:おうだんほどう} = zebra cross, {歩道橋:ほどうきょう} = jembatan penyeberangan."
  },

  /* ---------- bus ---------- */
  {
    jp: "このバスは〇〇に{行:い}きますか", romaji: "kono basu wa 〇〇 ni ikimasu ka",
    id: "Apakah bus ini pergi ke 〇〇?",
    type: "丁寧語", role: "話",
    note: "Tanyakan ke sopir sebelum naik. Nomor & tujuan bus tertulis di atas kaca depan."
  },
  {
    jp: "{整理券:せいりけん}をお{取:と}りください", romaji: "seiriken wo otori kudasai",
    id: "Silakan ambil tiket nomor (saat naik)",
    type: "尊敬語", role: "聞",
    note: "Bus bertarif jarak (umum di daerah): naik dari pintu tengah/belakang, ambil {整理券:せいりけん} atau tap kartu IC. Saat turun, lihat tarif di layar depan sesuai nomor tiketmu."
  },
  {
    jp: "{両替:りょうがえ}できますか", romaji: "ryougae dekimasu ka",
    id: "Bisa tukar uang (jadi recehan)?",
    type: "丁寧語", role: "話",
    note: "Mesin di samping sopir bisa menukar uang 1000円 ke koin. Lakukan saat bus berhenti di halte, bukan saat berjalan."
  },
  {
    jp: "お{降:お}りの{方:かた}は、ボタンを{押:お}してお{知:し}らせください", romaji: "oori no kata wa, botan wo oshite oshirase kudasai",
    id: "Yang akan turun, mohon tekan tombol untuk memberi tahu",
    type: "尊敬語", role: "聞",
    note: "Tekan tombol {降車:こうしゃ}ボタン sebelum halte tujuan. Kalau tidak ada yang menekan, bus tidak berhenti."
  },
  {
    jp: "{次:つぎ}、{止:と}まります", romaji: "tsugi, tomarimasu",
    id: "Akan berhenti di halte berikutnya",
    type: "丁寧語", role: "聞",
    note: "Suara otomatis setelah seseorang menekan tombol turun — tidak perlu menekannya lagi."
  },
  {
    jp: "バスが{完全:かんぜん}に{止:と}まってから{席:せき}をお{立:た}ちください", romaji: "basu ga kanzen ni tomatte kara seki wo otachi kudasai",
    id: "Mohon berdiri dari kursi setelah bus benar-benar berhenti",
    type: "尊敬語", role: "聞",
    note: "Sopir menunggu kamu sampai di pintu — tidak perlu terburu-buru berdiri saat bus masih berjalan."
  },
  {
    jp: "〇〇で{降:お}りたいので、{近:ちか}くなったら{教:おし}えていただけますか", romaji: "〇〇 de oritai node, chikaku nattara oshiete itadakemasu ka",
    id: "Saya mau turun di 〇〇, bisa tolong beri tahu kalau sudah dekat?",
    type: "謙譲語", role: "話",
    note: "Ke sopir bus atau penumpang di sebelahmu saat rute masih asing."
  },

  /* ---------- taksi ---------- */
  {
    jp: "どちらまでですか", romaji: "dochira made desu ka",
    id: "Mau ke mana?",
    type: "丁寧語", role: "聞",
    reply: "〇〇までお{願:ねが}いします",
    note: "Pertanyaan sopir taksi. Tunjukkan alamat di HP atau kartu nama tempat tujuan."
  },
  {
    jp: "〇〇までお{願:ねが}いします", romaji: "〇〇 made onegai shimasu",
    id: "Tolong ke 〇〇",
    type: "丁寧語", role: "話",
    note: "Pintu taksi Jepang buka-tutup otomatis — jangan dibuka/dibanting sendiri."
  },
  {
    jp: "この{辺:へん}で{大丈夫:だいじょうぶ}です", romaji: "kono hen de daijoubu desu",
    id: "Di sekitar sini saja",
    type: "丁寧語", role: "話",
    note: "Cara halus minta berhenti. Lebih langsung: 「ここで{止:と}めてください」."
  },
  {
    jp: "{領収書:りょうしゅうしょ}をください", romaji: "ryoushuusho wo kudasai",
    id: "Minta kuitansi",
    type: "丁寧語", role: "話",
    note: "{領収書:りょうしゅうしょ} = kuitansi resmi (untuk klaim ke perusahaan); レシート = struk biasa."
  },

  /* ---------- sepeda ---------- */
  {
    jp: "{防犯登録:ぼうはんとうろく}はされますか", romaji: "bouhan touroku wa saremasu ka",
    id: "Mau sekalian mendaftarkan registrasi anti-pencurian?",
    type: "尊敬語", role: "聞",
    reply: "はい、お{願:ねが}いします",
    note: "Saat membeli sepeda. Registrasi ini WAJIB menurut hukum (±600円). Bawa {在留:ざいりゅう}カード saat membeli."
  },
  {
    jp: "すみません、この{自転車:じてんしゃ}はあなたのですか", romaji: "sumimasen, kono jitensha wa anata no desu ka",
    id: "Permisi, apakah sepeda ini milik Anda?",
    type: "丁寧語", role: "聞",
    reply: "はい、{私:わたし}のです。{防犯登録:ぼうはんとうろく}もしてあります",
    note: "Pemeriksaan polisi ({職務質問:しょくむしつもん}) sering terjadi pada orang asing bersepeda. Tetap tenang; tunjukkan {在留:ざいりゅう}カード & stiker registrasi."
  },
  {
    jp: "{駐輪場:ちゅうりんじょう}はどこですか", romaji: "chuurinjou wa doko desu ka",
    id: "Tempat parkir sepeda di mana?",
    type: "丁寧語", role: "話",
    note: "Parkir sembarangan di depan stasiun → sepeda diangkut ({撤去:てっきょ}) dan harus ditebus ±2.000–5.000円."
  },
  {
    jp: "{自転車:じてんしゃ}でスマホ・{傘:かさ}さし・{二人乗:ふたりの}りはダメ", romaji: "jitensha de sumaho, kasasashi, futarinori wa dame",
    id: "Bersepeda sambil main HP, memegang payung, atau berboncengan itu dilarang",
    type: "注意", role: "話",
    note: "Sejak April 2026 pelanggaran sepeda bisa langsung kena denda tilang ({青切符:あおきっぷ}); main HP sambil bersepeda dendanya sekitar 12.000円. Juga: jalan di sisi KIRI, lampu menyala malam hari, helm sangat dianjurkan."
  }
]);
