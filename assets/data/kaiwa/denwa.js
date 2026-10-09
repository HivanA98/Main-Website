/* 電話 — menelepon toko/klinik, reservasi, pesan suara */
addCards("電話", [
  {
    jp: "お{電話:でんわ}ありがとうございます。〇〇でございます", romaji: "odenwa arigatou gozaimasu. 〇〇 de gozaimasu",
    id: "Terima kasih telah menelepon. Di sini 〇〇",
    type: "丁寧語", role: "聞",
    reply: "すみません、{予約:よやく}をお{願:ねが}いしたいんですが",
    note: "Cara toko/klinik mengangkat telepon. Setelah ini langsung sampaikan keperluanmu."
  },
  {
    jp: "もしもし、〇〇と{申:もう}しますが", romaji: "moshimoshi, 〇〇 to moushimasu ga",
    id: "Halo, saya 〇〇",
    type: "謙譲語", role: "話",
    note: "Sebutkan nama di awal. Kalimat menggantung 〜が mengundang lawan bicara untuk mendengarkan keperluanmu."
  },
  {
    jp: "{予約:よやく}をお{願:ねが}いしたいんですが", romaji: "yoyaku wo onegai shitain desu ga",
    id: "Saya ingin membuat reservasi",
    type: "謙譲語", role: "話",
    note: "Untuk restoran, klinik, salon. Siapkan: tanggal, jam, jumlah orang, nama, nomor telepon."
  },
  {
    jp: "ご{希望:きぼう}の{日時:にちじ}はございますか", romaji: "gokibou no nichiji wa gozaimasu ka",
    id: "Ada tanggal dan jam yang diinginkan?",
    type: "丁寧語", role: "聞",
    reply: "{土曜日:どようび}の{午後:ごご}{2時:にじ}は{空:あ}いていますか",
    note: "{日時:にちじ} = tanggal & jam."
  },
  {
    jp: "{土曜日:どようび}の{午後:ごご}{2時:にじ}は{空:あ}いていますか", romaji: "doyoubi no gogo niji wa aite imasu ka",
    id: "Apakah Sabtu jam 2 siang ada yang kosong?",
    type: "丁寧語", role: "話",
    note: "{午前:ごぜん} = pagi (AM), {午後:ごご} = siang/sore (PM). Siapkan pilihan kedua."
  },
  {
    jp: "その{時間:じかん}はあいにく{埋:う}まっておりまして…", romaji: "sono jikan wa ainiku umatte orimashite...",
    id: "Sayangnya jam itu sudah penuh…",
    type: "謙譲語", role: "聞",
    reply: "では、{何時:なんじ}なら{空:あ}いていますか",
    note: "あいにく = sayangnya. Kalimat sengaja menggantung (…) — artinya TIDAK BISA. Tanyakan jam lain."
  },
  {
    jp: "お{名前:なまえ}とお{電話番号:でんわばんごう}をお{願:ねが}いします", romaji: "onamae to odenwa bangou wo onegai shimasu",
    id: "Mohon nama dan nomor telepon Anda",
    type: "丁寧語", role: "聞",
    reply: "〇〇です。{番号:ばんごう}は…",
    note: "Eja nama pelan-pelan. Nomor dibaca per digit; 0 = ゼロ, tanda strip dibaca の: 「ゼロキューゼロの…」."
  },
  {
    jp: "〇〇{様:さま}、{4名様:よんめいさま}で{承:うけたまわ}りました", romaji: "〇〇 sama, yonmeisama de uketamawarimashita",
    id: "Baik Bapak/Ibu 〇〇, reservasi untuk 4 orang sudah kami terima",
    type: "謙譲語", role: "聞",
    note: "{承:うけたまわ}る = kenjougo dari {受:う}ける/{聞:き}く (menerima pesanan). Reservasi selesai saat kamu mendengar kata ini."
  },
  {
    jp: "{予約:よやく}の{時間:じかん}を{変更:へんこう}していただけますか", romaji: "yoyaku no jikan wo henkou shite itadakemasu ka",
    id: "Bisakah jam reservasinya diubah?",
    type: "謙譲語", role: "話",
    note: "Sebutkan namamu dan jadwal semula dulu: 「{明日:あした}{3時:さんじ}に{予約:よやく}している〇〇ですが…」."
  },
  {
    jp: "{予約:よやく}をキャンセルしたいんですが", romaji: "yoyaku wo kyanseru shitain desu ga",
    id: "Saya ingin membatalkan reservasi",
    type: "丁寧語", role: "話",
    note: "Batalkan sedini mungkin. Tidak datang tanpa kabar ({無断:むだん}キャンセル) sangat tidak sopan dan bisa dikenai biaya."
  },
  {
    jp: "すみません、{少:すこ}し{遅:おく}れそうです", romaji: "sumimasen, sukoshi okuresou desu",
    id: "Maaf, sepertinya saya akan sedikit terlambat",
    type: "丁寧語", role: "話",
    note: "Kabari sebelum jam reservasi, sebutkan perkiraan: 「{10分:じゅっぷん}ぐらい{遅:おく}れます」."
  },
  {
    jp: "{田中:たなか}さんはいらっしゃいますか", romaji: "tanaka san wa irasshaimasu ka",
    id: "Apakah Bapak/Ibu Tanaka ada?",
    type: "尊敬語", role: "話",
    note: "いらっしゃる = sonkeigo dari いる. Ganti nama sesuai orang yang dicari."
  },
  {
    jp: "ただいま{席:せき}を{外:はず}しております", romaji: "tadaima seki wo hazushite orimasu",
    id: "Saat ini sedang tidak di tempat",
    type: "謙譲語", role: "聞",
    reply: "では、また{後:のち}ほどお{電話:でんわ}いたします",
    note: "Bisa tanyakan: 「お{戻:もど}りは{何時:なんじ}ごろですか」 (kira-kira kembali jam berapa?)."
  },
  {
    jp: "では、また{後:のち}ほどお{電話:でんわ}いたします", romaji: "dewa, mata nochihodo odenwa itashimasu",
    id: "Kalau begitu, nanti saya telepon lagi",
    type: "謙譲語", role: "話",
    note: "Tutup dengan 「{失礼:しつれい}いたします」, tunggu lawan menutup telepon lebih dulu."
  },
  {
    jp: "{折:お}り{返:かえ}しお{電話:でんわ}いただけますか", romaji: "orikaeshi odenwa itadakemasu ka",
    id: "Bisakah Anda menelepon saya kembali?",
    type: "謙譲語", role: "話",
    note: "Sebutkan nomormu dengan jelas dan jam yang memungkinkan."
  },
  {
    jp: "〇〇{様:さま}のお{電話:でんわ}でよろしいでしょうか", romaji: "〇〇 sama no odenwa de yoroshii deshou ka",
    id: "Apakah benar ini telepon Bapak/Ibu 〇〇?",
    type: "丁寧語", role: "聞",
    reply: "はい、そうです",
    note: "Konfirmasi dari klinik/toko yang meneleponmu."
  },
  {
    jp: "{電波:でんぱ}が{悪:わる}いみたいで、よく{聞:き}こえません", romaji: "denpa ga warui mitai de, yoku kikoemasen",
    id: "Sepertinya sinyalnya buruk, saya tidak bisa mendengar dengan jelas",
    type: "丁寧語", role: "話",
    note: "Cara sopan tanpa menyalahkan lawan. Lalu: 「もう{一度:いちど}お{願:ねが}いできますか」."
  },
  {
    jp: "{電話:でんわ}だと{聞:き}き{取:と}りにくいので、メールでもよろしいですか", romaji: "denwa da to kikitorinikui node, meeru demo yoroshii desu ka",
    id: "Lewat telepon sulit saya tangkap, apakah lewat email juga boleh?",
    type: "丁寧語", role: "話",
    note: "Sangat membantu untuk urusan penting (alamat, jadwal). Banyak toko juga menerima reservasi online/LINE."
  },
  {
    jp: "おかけになった{電話番号:でんわばんごう}は、{現在:げんざい}{使:つか}われておりません", romaji: "okake ni natta denwa bangou wa, genzai tsukawarete orimasen",
    id: "Nomor yang Anda hubungi saat ini tidak digunakan",
    type: "尊敬語", role: "聞",
    note: "Pesan otomatis operator. Cek ulang nomornya."
  },
  {
    jp: "ただいま{電話:でんわ}に{出:で}ることができません", romaji: "tadaima denwa ni deru koto ga dekimasen",
    id: "Saat ini tidak dapat menerima telepon",
    type: "丁寧語", role: "聞",
    note: "Lanjutannya: 「ピーという{発信音:はっしんおん}の{後:あと}に、お{名前:なまえ}とご{用件:ようけん}をお{話:はな}しください」 — tinggalkan pesan setelah bunyi 'pi'."
  }
]);
