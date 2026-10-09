/* 飲食店 — restoran, kedai ramen, gyudon, izakaya, fast food */
addCards("飲食店", [
  /* ---------- masuk & duduk ---------- */
  {
    jp: "いらっしゃいませ。{何名様:なんめいさま}ですか", romaji: "irasshaimase. nanmeisama desu ka",
    id: "Selamat datang. Untuk berapa orang?",
    type: "尊敬語", role: "聞",
    reply: "{一人:ひとり}です／{二人:ふたり}です",
    note: "Boleh sambil menunjukkan jumlah dengan jari. Variasi: 「{何名様:なんめいさま}でしょうか」, 「お{一人様:ひとりさま}ですか」."
  },
  {
    jp: "カウンター{席:せき}でもよろしいですか", romaji: "kauntaa seki demo yoroshii desu ka",
    id: "Kursi konter tidak apa-apa?",
    type: "丁寧語", role: "聞",
    reply: "はい、{大丈夫:だいじょうぶ}です",
    note: "Pengunjung sendirian biasanya diarahkan ke konter. テーブル{席:せき} = meja biasa, {座敷:ざしき} = duduk di tatami (lepas sepatu)."
  },
  {
    jp: "こちらのお{席:せき}へどうぞ", romaji: "kochira no oseki e douzo",
    id: "Silakan ke meja ini",
    type: "丁寧語", role: "聞",
    note: "Tunggu diantar staf, jangan langsung duduk sendiri (kecuali ada tulisan 「お{好:す}きな{席:せき}へどうぞ」)."
  },
  {
    jp: "ただいま{満席:まんせき}でございます。お{名前:なまえ}を{書:か}いてお{待:ま}ちください", romaji: "tadaima manseki de gozaimasu. onamae wo kaite omachi kudasai",
    id: "Saat ini penuh. Silakan tulis nama dan tunggu",
    type: "丁寧語", role: "聞",
    note: "Daftar tunggu ada di dekat pintu. Tulis nama dalam katakana dan jumlah orang. Nama akan dipanggil: 「〇〇{様:さま}、お{待:ま}たせいたしました」."
  },
  {
    jp: "{予約:よやく}していないんですが、{入:はい}れますか", romaji: "yoyaku shite inain desu ga, hairemasu ka",
    id: "Saya tidak reservasi, apakah bisa masuk?",
    type: "丁寧語", role: "話",
    note: "Bisa ditambah jumlah orang: 「{二人:ふたり}なんですが…」."
  },

  /* ---------- memesan ---------- */
  {
    jp: "ご{注文:ちゅうもん}がお{決:き}まりになりましたら、お{呼:よ}びください", romaji: "gochuumon ga okimari ni narimashitara, oyobi kudasai",
    id: "Kalau sudah memutuskan pesanan, silakan panggil kami",
    type: "尊敬語", role: "聞",
    note: "Tekan tombol panggil ({呼:よ}び{出:だ}しボタン) di meja, atau angkat tangan dan bilang 「すみません!」 — itu sopan, bukan kasar."
  },
  {
    jp: "ご{注文:ちゅうもん}はお{決:き}まりですか", romaji: "gochuumon wa okimari desu ka",
    id: "Sudah siap memesan?",
    type: "尊敬語", role: "聞",
    reply: "はい／すみません、もう{少:すこ}し{待:ま}ってください",
    note: "Kalau belum siap, minta waktu dengan jawaban di atas."
  },
  {
    jp: "すみません、{注文:ちゅうもん}お{願:ねが}いします", romaji: "sumimasen, chuumon onegai shimasu",
    id: "Permisi, saya mau pesan",
    type: "丁寧語", role: "話",
    note: "Angkat tangan sedikit saat mengucapkannya. Di restoran dengan tablet/QR, pesan lewat layar."
  },
  {
    jp: "これを{一:ひと}つお{願:ねが}いします", romaji: "kore wo hitotsu onegai shimasu",
    id: "Tolong yang ini satu",
    type: "丁寧語", role: "話",
    note: "Sambil menunjuk menu. Hitungan umum: ひとつ, ふたつ, みっつ, よっつ. Bisa juga 「〇〇を{二:ふた}つと、〇〇を{一:ひと}つ」."
  },
  {
    jp: "おすすめは{何:なん}ですか", romaji: "osusume wa nan desu ka",
    id: "Apa menu rekomendasinya?",
    type: "丁寧語", role: "話",
    note: "Variasi: 「{人気:にんき}のメニューはどれですか」 (menu paling populer yang mana?)."
  },
  {
    jp: "{宗教上:しゅうきょうじょう}の{理由:りゆう}で、{豚肉:ぶたにく}が{食:た}べられません", romaji: "shuukyoujou no riyuu de, butaniku ga taberaremasen",
    id: "Karena alasan agama, saya tidak bisa makan daging babi",
    type: "丁寧語", role: "話",
    note: "Kalimat yang jelas dan langsung dimengerti staf. Lanjutkan: 「{豚肉:ぶたにく}を{使:つか}っていないメニューはありますか」."
  },
  {
    jp: "これには{豚肉:ぶたにく}が{入:はい}っていますか", romaji: "kore ni wa butaniku ga haitte imasu ka",
    id: "Apakah ini mengandung daging babi?",
    type: "丁寧語", role: "話",
    note: "Hati-hati: kaldu ramen sering dari tulang babi ({豚骨:とんこつ}), gyoza berisi babi, banyak masakan memakai みりん/{酒:さけ}. Tanyakan juga 「スープは{何:なん}の{出汁:だし}ですか」."
  },
  {
    jp: "{卵:たまご}アレルギーがあるんですが、{大丈夫:だいじょうぶ}ですか", romaji: "tamago arerugii ga arun desu ga, daijoubu desu ka",
    id: "Saya alergi telur, apakah (menu ini) aman?",
    type: "丁寧語", role: "話",
    note: "Ganti {卵:たまご} sesuai alergimu: {小麦:こむぎ} (gandum), {乳:にゅう} (susu), えび, かに, そば, {落花生:らっかせい} (kacang tanah). Menu sering mencantumkan ikon alergen."
  },
  {
    jp: "ネギ{抜:ぬ}きでお{願:ねが}いします", romaji: "negi nuki de onegai shimasu",
    id: "Tanpa daun bawang, tolong",
    type: "丁寧語", role: "話",
    note: "〜{抜:ぬ}き = tanpa ~. Contoh: わさび{抜:ぬ}き (di sushi disebut サビ{抜:ぬ}き), {氷:こおり}{抜:ぬ}き (tanpa es)."
  },
  {
    jp: "{大盛:おおも}りにできますか", romaji: "oomori ni dekimasu ka",
    id: "Bisa jadi porsi besar?",
    type: "丁寧語", role: "話",
    note: "Ukuran porsi di kedai gyudon/ramen: {並盛:なみもり} (biasa), {大盛:おおも}り (besar), {特盛:とくもり} (ekstra besar). Kadang {大盛:おおも}り gratis!"
  },
  {
    jp: "ご{飯:はん}のおかわりはできますか", romaji: "gohan no okawari wa dekimasu ka",
    id: "Bisa tambah nasi?",
    type: "丁寧語", role: "話",
    note: "Banyak {定食屋:ていしょくや} (rumah makan set menu) menyediakan tambah nasi gratis: tulisan 「ご{飯:はん}おかわり{自由:じゆう}」."
  },
  {
    jp: "お{飲:の}み{物:もの}はいかがなさいますか", romaji: "onomimono wa ikaga nasaimasu ka",
    id: "Minumnya mau apa?",
    type: "尊敬語", role: "聞",
    reply: "お{水:みず}で{大丈夫:だいじょうぶ}です",
    note: "Air putih dan teh biasanya gratis. Kalau ingin minuman berbayar: 「ウーロン{茶:ちゃ}をお{願:ねが}いします」."
  },
  {
    jp: "ご{注文:ちゅうもん}を{確認:かくにん}させていただきます", romaji: "gochuumon wo kakunin sasete itadakimasu",
    id: "Saya konfirmasi ulang pesanannya",
    type: "謙譲語", role: "聞",
    reply: "はい",
    note: "Dengarkan dengan teliti. Kalau salah, koreksi: 「あ、〇〇は{一:ひと}つです」."
  },
  {
    jp: "{以上:いじょう}でよろしいですか", romaji: "ijou de yoroshii desu ka",
    id: "Sudah itu saja?",
    type: "丁寧語", role: "聞",
    reply: "はい／あと、〇〇もお{願:ねが}いします",
    note: "Pertanyaan penutup setelah memesan — juga di kasir dan restoran cepat saji."
  },
  {
    jp: "{麺:めん}の{硬:かた}さはいかがなさいますか", romaji: "men no katasa wa ikaga nasaimasu ka",
    id: "Tingkat kekerasan mienya mau bagaimana?",
    type: "尊敬語", role: "聞",
    reply: "{普通:ふつう}でお{願:ねが}いします",
    note: "Di kedai ramen: {硬:かた}め (keras), {普通:ふつう} (biasa), やわらかめ (lembut). Bisa juga ditanya {味:あじ}の{濃:こ}さ (kekentalan rasa) dan {油:あぶら}の{量:りょう} (jumlah minyak)."
  },
  {
    jp: "{食券:しょっけん}をお{求:もと}めください", romaji: "shokken wo omotome kudasai",
    id: "Silakan beli tiket makan (di mesin) terlebih dulu",
    type: "尊敬語", role: "聞",
    note: "Di kedai ramen, gyudon, soba: beli {食券:しょっけん} di mesin dekat pintu, lalu serahkan ke staf. Mesin baru menerima kartu IC/QR; yang lama hanya tunai."
  },
  {
    jp: "{食券:しょっけん}の{買:か}い{方:かた}を{教:おし}えてください", romaji: "shokken no kaikata wo oshiete kudasai",
    id: "Tolong ajari cara membeli tiket makannya",
    type: "丁寧語", role: "話",
    note: "Tidak apa-apa bertanya — staf sudah biasa membantu turis dan orang asing."
  },
  {
    jp: "{店内:てんない}でお{召:め}し{上:あ}がりですか、お{持:も}ち{帰:かえ}りですか", romaji: "tennai de omeshiagari desu ka, omochikaeri desu ka",
    id: "Makan di sini atau dibawa pulang?",
    type: "尊敬語", role: "聞",
    reply: "{店内:てんない}で／{持:も}ち{帰:かえ}りで",
    note: "Pajak makan di tempat 10%, bawa pulang 8% — harga bisa sedikit berbeda. お{召:め}し{上:あ}がり = sonkeigo dari {食:た}べる."
  },
  {
    jp: "{持:も}ち{帰:かえ}りでお{願:ねが}いします", romaji: "mochikaeri de onegai shimasu",
    id: "Dibawa pulang, tolong",
    type: "丁寧語", role: "話",
    note: "Di restoran cepat saji juga bisa bilang 「テイクアウトで」."
  },

  /* ---------- saat makan ---------- */
  {
    jp: "お{待:ま}たせいたしました。〇〇でございます", romaji: "omatase itashimashita. 〇〇 de gozaimasu",
    id: "Maaf menunggu. Ini 〇〇-nya",
    type: "謙譲語", role: "聞",
    reply: "ありがとうございます",
    note: "Staf menyebut nama menu saat menaruhnya. Kalau bukan pesananmu, katakan 「あ、それは{頼:たの}んでいません」."
  },
  {
    jp: "お{熱:あつ}いのでお{気:き}をつけください", romaji: "oatsui no de oki wo tsuke kudasai",
    id: "Panas, mohon hati-hati",
    type: "尊敬語", role: "聞",
    note: "Untuk hot plate, nabe, ramen. お〜ください = pola permintaan sonkeigo."
  },
  {
    jp: "ご{注文:ちゅうもん}の{品:しな}はお{揃:そろ}いでしょうか", romaji: "gochuumon no shina wa osoroi deshou ka",
    id: "Apakah pesanan Anda sudah lengkap semua?",
    type: "丁寧語", role: "聞",
    reply: "はい／まだ〇〇が{来:き}ていません",
    note: "{揃:そろ}う = lengkap/terkumpul. Biasanya ditanyakan setelah makanan terakhir diantar."
  },
  {
    jp: "すみません、まだ〇〇が{来:き}ていないんですが", romaji: "sumimasen, mada 〇〇 ga kite inain desu ga",
    id: "Permisi, 〇〇 saya belum datang",
    type: "丁寧語", role: "話",
    note: "Kalimat menggantung 〜んですが terdengar lembut, tidak seperti komplain."
  },
  {
    jp: "{注文:ちゅうもん}したものと{違:ちが}うみたいなんですが", romaji: "chuumon shita mono to chigau mitai nan desu ga",
    id: "Sepertinya ini berbeda dengan yang saya pesan",
    type: "丁寧語", role: "話",
    note: "「みたい」 melunakkan — tidak langsung menuduh staf salah."
  },
  {
    jp: "お{水:みず}をいただけますか", romaji: "omizu wo itadakemasu ka",
    id: "Boleh minta air putih?",
    type: "謙譲語", role: "話",
    note: "Di banyak restoran murah, air & teh self-service (セルフサービス) — cari dispenser dan gelas di dekat pintu atau konter."
  },
  {
    jp: "{取:と}り{皿:ざら}をいただけますか", romaji: "torizara wo itadakemasu ka",
    id: "Boleh minta piring kecil (untuk berbagi)?",
    type: "謙譲語", role: "話",
    note: "Di izakaya dan restoran keluarga, makanan sering dipesan untuk dibagi bersama."
  },
  {
    jp: "お{下:さ}げしてもよろしいですか", romaji: "osage shite mo yoroshii desu ka",
    id: "Boleh saya angkat piringnya?",
    type: "謙譲語", role: "聞",
    reply: "はい、お{願:ねが}いします／あ、まだ{食:た}べています",
    note: "Untuk piring yang sudah kosong. Kalau kamu yang minta: 「これ、{下:さ}げていただけますか」."
  },
  {
    jp: "ラストオーダーのお{時間:じかん}ですが、ご{注文:ちゅうもん}はよろしいですか", romaji: "rasuto oodaa no ojikan desu ga, gochuumon wa yoroshii desu ka",
    id: "Sudah waktunya pesanan terakhir, ada yang mau dipesan lagi?",
    type: "丁寧語", role: "聞",
    reply: "{大丈夫:だいじょうぶ}です",
    note: "Tanda restoran akan tutup ±30 menit lagi. 「よろしいですか」 di sini = 'sudah cukup?'."
  },
  {
    jp: "お{通:とお}しです", romaji: "otooshi desu",
    id: "Ini appetizer pembuka (otooshi)",
    type: "丁寧語", role: "聞",
    note: "Di izakaya, お{通:とお}し disajikan otomatis dan DITAGIH (±300–500円/orang) sebagai biaya duduk. Ini normal, bukan penipuan."
  },

  /* ---------- membayar & pulang ---------- */
  {
    jp: "お{会計:かいけい}お{願:ねが}いします", romaji: "okaikei onegai shimasu",
    id: "Saya mau bayar / minta tagihannya",
    type: "丁寧語", role: "話",
    note: "Di banyak restoran, bayar di kasir dekat pintu dengan membawa {伝票:でんぴょう} (kertas tagihan) dari meja. Tidak ada tip."
  },
  {
    jp: "お{会計:かいけい}はご{一緒:いっしょ}でよろしいですか", romaji: "okaikei wa goissho de yoroshii desu ka",
    id: "Bayarnya digabung?",
    type: "丁寧語", role: "聞",
    reply: "{別々:べつべつ}でお{願:ねが}いします／{一緒:いっしょ}で",
    note: "{割:わ}り{勘:かん} (warikan) = patungan rata. Saat jam sibuk, sebagian restoran tidak menerima pembayaran terpisah."
  },
  {
    jp: "{別々:べつべつ}でお{願:ねが}いします", romaji: "betsubetsu de onegai shimasu",
    id: "Bayarnya masing-masing, tolong",
    type: "丁寧語", role: "話",
    note: "Ucapkan di awal saat di kasir supaya staf bisa memisahkan."
  },
  {
    jp: "カードは{使:つか}えますか", romaji: "kaado wa tsukaemasu ka",
    id: "Bisa bayar pakai kartu?",
    type: "丁寧語", role: "話",
    note: "Restoran kecil/kedai tua sering hanya tunai: tulisan 「{現金:げんきん}のみ」 atau 「キャッシュオンリー」."
  },
  {
    jp: "ごちそうさまでした", romaji: "gochisousama deshita",
    id: "Terima kasih atas makanannya",
    type: "定型", role: "話",
    note: "Ucapkan ke staf/koki saat bayar atau keluar — sangat dihargai, terutama di kedai kecil. Juga ke orang yang mentraktirmu."
  },
  {
    jp: "{箸:はし}を{立:た}てない・{箸:はし}から{箸:はし}へ{渡:わた}さない", romaji: "hashi wo tatenai, hashi kara hashi e watasanai",
    id: "Jangan tancapkan sumpit di nasi & jangan oper makanan sumpit ke sumpit",
    type: "注意", role: "話",
    note: "Keduanya berkaitan dengan upacara pemakaman — tabu besar di meja makan. Letakkan sumpit di {箸置:はしお}き atau di atas piring."
  },
  {
    jp: "チップは{要:い}らない", romaji: "chippu wa iranai",
    id: "Tidak perlu memberi tip",
    type: "注意", role: "話",
    note: "Di Jepang tidak ada budaya tip. Uang yang ditinggal di meja bisa membuat staf mengejarmu untuk mengembalikannya. Cukup ucapkan 「ごちそうさまでした」."
  }
]);
