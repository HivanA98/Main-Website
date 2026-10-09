/* 病院 — klinik, rumah sakit, dokter gigi, apotek, drugstore */
addCards("病院", [
  /* ---------- pendaftaran ---------- */
  {
    jp: "{初診:しょしん}なんですが", romaji: "shoshin nan desu ga",
    id: "Ini kunjungan pertama saya",
    type: "丁寧語", role: "話",
    note: "Ucapkan di resepsionis ({受付:うけつけ}). Kamu akan diminta mengisi {問診票:もんしんひょう} (formulir keluhan)."
  },
  {
    jp: "{近:ちか}くに{内科:ないか}はありますか", romaji: "chikaku ni naika wa arimasu ka",
    id: "Ada klinik penyakit dalam di dekat sini?",
    type: "丁寧語", role: "話",
    note: "Pilih spesialis yang tepat: {内科:ないか} (demam, flu, perut), {外科:げか} (luka), {整形外科:せいけいげか} (tulang, otot, pinggang), {皮膚科:ひふか} (kulit), {耳鼻科:じびか} (THT), {眼科:がんか} (mata), {歯科:しか} (gigi)."
  },
  {
    jp: "{保険証:ほけんしょう}はお{持:も}ちですか", romaji: "hokenshou wa omochi desu ka",
    id: "Apakah Anda membawa kartu asuransi?",
    type: "尊敬語", role: "聞",
    reply: "はい、マイナ{保険証:ほけんしょう}です",
    note: "Sejak Desember 2024 kartu asuransi kertas baru tidak diterbitkan lagi — pakai マイナンバーカード sebagai kartu asuransi (マイナ{保険証:ほけんしょう}) atau {資格確認書:しかくかくにんしょ}."
  },
  {
    jp: "{保険証:ほけんしょう}がないと、{全額自己負担:ぜんがくじこふたん}になります", romaji: "hokenshou ga nai to, zengaku jiko futan ni narimasu",
    id: "Tanpa kartu asuransi, biaya ditanggung penuh sendiri",
    type: "丁寧語", role: "聞",
    note: "Dengan asuransi kamu hanya bayar 30%. Kalau lupa bawa, tanyakan apakah bisa diklaim belakangan."
  },
  {
    jp: "こちらの{問診票:もんしんひょう}にご{記入:きにゅう}ください", romaji: "kochira no monshinhyou ni gokinyuu kudasai",
    id: "Silakan isi formulir keluhan ini",
    type: "尊敬語", role: "聞",
    reply: "すみません、{分:わ}からないところがあるんですが…",
    note: "Kosakata formulir: {症状:しょうじょう} (gejala), いつから (sejak kapan), {既往歴:きおうれき} (riwayat penyakit), {服用中:ふくようちゅう}の{薬:くすり} (obat yang sedang diminum)."
  },
  {
    jp: "お{名前:なまえ}をお{呼:よ}びするまで、お{待:ま}ちください", romaji: "onamae wo oyobi suru made, omachi kudasai",
    id: "Silakan tunggu sampai nama Anda dipanggil",
    type: "尊敬語", role: "聞",
    note: "Beberapa klinik memanggil dengan nomor. Perhatikan cara mereka mengucapkan namamu dalam katakana."
  },
  {
    jp: "〇〇さん、{診察室:しんさつしつ}{1番:いちばん}にお{入:はい}りください", romaji: "〇〇 san, shinsatsushitsu ichiban ni ohairi kudasai",
    id: "Saudara 〇〇, silakan masuk ke ruang periksa 1",
    type: "尊敬語", role: "聞",
    note: "Ketuk pintu, ucapkan 「{失礼:しつれい}します」 saat masuk."
  },

  /* ---------- menjelaskan keluhan ---------- */
  {
    jp: "どうされましたか", romaji: "dou saremashita ka",
    id: "Ada keluhan apa?",
    type: "尊敬語", role: "聞",
    reply: "{昨日:きのう}の{夜:よる}から{熱:ねつ}があります",
    note: "Pertanyaan pertama dokter. Siapkan: gejala, sejak kapan, sudah minum obat apa."
  },
  {
    jp: "{昨日:きのう}の{夜:よる}から{熱:ねつ}があります", romaji: "kinou no yoru kara netsu ga arimasu",
    id: "Saya demam sejak kemarin malam",
    type: "丁寧語", role: "話",
    note: "Sebutkan suhu kalau tahu: 「{38度:さんじゅうはちど}あります」."
  },
  {
    jp: "{喉:のど}が{痛:いた}くて、{咳:せき}が{出:で}ます", romaji: "nodo ga itakute, seki ga demasu",
    id: "Tenggorokan saya sakit dan batuk",
    type: "丁寧語", role: "話",
    note: "Gejala lain: {鼻水:はなみず}が{出:で}ます (pilek), {鼻:はな}が{詰:つ}まっています (hidung tersumbat), {寒気:さむけ}がします (meriang)."
  },
  {
    jp: "{吐:は}き{気:け}がします", romaji: "hakike ga shimasu",
    id: "Saya merasa mual",
    type: "丁寧語", role: "話",
    note: "Kalau sudah muntah: 「{吐:は}いてしまいました」."
  },
  {
    jp: "お{腹:なか}を{壊:こわ}しました", romaji: "onaka wo kowashimashita",
    id: "Perut saya bermasalah (diare)",
    type: "丁寧語", role: "話",
    note: "Ungkapan halus untuk diare. Lebih langsung: 「{下痢:げり}をしています」."
  },
  {
    jp: "めまいがします", romaji: "memai ga shimasu",
    id: "Saya pusing (kepala berputar)",
    type: "丁寧語", role: "話",
    note: "Di musim panas, pusing + mual saat kerja bisa tanda {熱中症:ねっちゅうしょう} (heatstroke) — segera istirahat di tempat sejuk dan minum."
  },
  {
    jp: "{体:からだ}がだるいです", romaji: "karada ga darui desu",
    id: "Badan saya terasa lemas",
    type: "丁寧語", role: "話",
    note: "だるい = lesu, berat, tidak bertenaga. Sering dipakai saat flu atau kelelahan."
  },
  {
    jp: "{頭:あたま}がズキズキ{痛:いた}みます", romaji: "atama ga zukizuki itamimasu",
    id: "Kepala saya sakit berdenyut-denyut",
    type: "丁寧語", role: "話",
    note: "Onomatope sakit: ズキズキ (berdenyut), ガンガン (berdentam), チクチク (menusuk kecil), ヒリヒリ (perih/panas), キリキリ (melilit, perut). Dokter Jepang sangat terbantu dengan kata-kata ini."
  },
  {
    jp: "{腰:こし}を{痛:いた}めてしまいました", romaji: "koshi wo itamete shimaimashita",
    id: "Pinggang saya cedera",
    type: "丁寧語", role: "話",
    note: "Sering terjadi pada pekerjaan angkat beban. Kalau terjadi saat kerja, lapor ke perusahaan — bisa ditanggung {労災:ろうさい}."
  },
  {
    jp: "アレルギーはありますか", romaji: "arerugii wa arimasu ka",
    id: "Apakah Anda punya alergi?",
    type: "丁寧語", role: "聞",
    reply: "いいえ、ありません",
    note: "Termasuk alergi obat ({薬:くすり}のアレルギー). Kalau ada: 「〇〇アレルギーがあります」."
  },
  {
    jp: "{今:いま}、{飲:の}んでいる{薬:くすり}はありますか", romaji: "ima, nonde iru kusuri wa arimasu ka",
    id: "Apakah sedang minum obat lain?",
    type: "丁寧語", role: "聞",
    reply: "いいえ、ありません",
    note: "Bawa obat dari Indonesia (atau fotonya) kalau sedang rutin minum obat."
  },
  {
    jp: "{息:いき}を{大:おお}きく{吸:す}って、{止:と}めてください", romaji: "iki wo ookiku sutte, tomete kudasai",
    id: "Tarik napas dalam-dalam, lalu tahan",
    type: "丁寧語", role: "聞",
    note: "Saat diperiksa stetoskop atau rontgen. Lalu: 「はい、{楽:らく}にしてください」 (silakan rileks)."
  },
  {
    jp: "{様子:ようす}を{見:み}ましょう", romaji: "yousu wo mimashou",
    id: "Kita lihat perkembangannya dulu",
    type: "丁寧語", role: "聞",
    note: "Kalimat favorit dokter Jepang: belum perlu tindakan khusus. Kalau memburuk, kembali lagi."
  },
  {
    jp: "{悪:わる}くなったら、また{来:き}てください", romaji: "waruku nattara, mata kite kudasai",
    id: "Kalau memburuk, silakan datang lagi",
    type: "丁寧語", role: "聞",
    note: "Tanyakan batasnya: 「どうなったら{来:く}ればいいですか」 (kondisi seperti apa harus datang lagi?)."
  },
  {
    jp: "{今日:きょう}はお{風呂:ふろ}は{控:ひか}えてください", romaji: "kyou wa ofuro wa hikaete kudasai",
    id: "Hari ini jangan berendam dulu",
    type: "丁寧語", role: "聞",
    note: "{控:ひか}える = menahan diri/menghindari. Juga: お{酒:さけ}は{控:ひか}えて, {激:はげ}しい{運動:うんどう}は{控:ひか}えて."
  },
  {
    jp: "{診断書:しんだんしょ}を{書:か}いていただけますか", romaji: "shindansho wo kaite itadakemasu ka",
    id: "Bisakah Anda membuatkan surat keterangan dokter?",
    type: "謙譲語", role: "話",
    note: "Untuk perusahaan bila sakit beberapa hari. Biasanya berbayar (±2.000–5.000円) dan tidak ditanggung asuransi."
  },
  {
    jp: "{歯:は}が{痛:いた}くて、{予約:よやく}したいんですが", romaji: "ha ga itakute, yoyaku shitain desu ga",
    id: "Gigi saya sakit, saya ingin membuat janji",
    type: "丁寧語", role: "話",
    note: "Hampir semua dokter gigi di Jepang memakai sistem janji temu. Telepon dulu sebelum datang."
  },
  {
    jp: "インフルエンザの{検査:けんさ}をしていただけますか", romaji: "infuruenza no kensa wo shite itadakemasu ka",
    id: "Bisakah saya dites influenza?",
    type: "謙譲語", role: "話",
    note: "Banyak perusahaan meminta hasil tes bila demam tinggi di musim dingin. Influenza biasanya harus istirahat beberapa hari."
  },
  {
    jp: "{会計:かいけい}でお{呼:よ}びしますので、お{待:ま}ちください", romaji: "kaikei de oyobi shimasu node, omachi kudasai",
    id: "Nanti akan dipanggil di kasir, silakan tunggu",
    type: "謙譲語", role: "聞",
    note: "Setelah diperiksa, tunggu lagi di ruang tunggu untuk membayar."
  },
  {
    jp: "お{大事:だいじ}にどうぞ", romaji: "odaiji ni douzo",
    id: "Semoga lekas sembuh",
    type: "定型", role: "聞",
    reply: "ありがとうございます",
    note: "Ucapan staf klinik/apotek saat kamu pulang. Jawab dengan terima kasih."
  },

  /* ---------- apotek & drugstore ---------- */
  {
    jp: "{処方箋:しょほうせん}をお{出:だ}しします。{薬局:やっきょく}でお{薬:くすり}を{受:う}け{取:と}ってください", romaji: "shohousen wo odashi shimasu. yakkyoku de okusuri wo uketotte kudasai",
    id: "Saya berikan resep. Silakan ambil obatnya di apotek",
    type: "謙譲語", role: "聞",
    note: "Umumnya obat diambil di apotek terpisah dekat klinik ({院外処方:いんがいしょほう}). Resep berlaku 4 hari termasuk hari diterbitkan."
  },
  {
    jp: "お{薬手帳:くすりてちょう}はお{持:も}ちですか", romaji: "okusuri techou wa omochi desu ka",
    id: "Apakah Anda membawa buku catatan obat?",
    type: "尊敬語", role: "聞",
    reply: "{持:も}っていません。{作:つく}っていただけますか",
    note: "お{薬手帳:くすりてちょう} = buku riwayat obat (gratis, ada versi aplikasi). Membawanya membantu apoteker mengecek interaksi obat."
  },
  {
    jp: "ジェネリック{医薬品:いやくひん}でもよろしいですか", romaji: "jenerikku iyakuhin demo yoroshii desu ka",
    id: "Obat generik tidak apa-apa?",
    type: "丁寧語", role: "聞",
    reply: "はい、{大丈夫:だいじょうぶ}です",
    note: "Obat generik: kandungan sama, harga lebih murah."
  },
  {
    jp: "{1日:いちにち}{3回:さんかい}、{食後:しょくご}に{飲:の}んでください", romaji: "ichinichi sankai, shokugo ni nonde kudasai",
    id: "Minum 3 kali sehari, setelah makan",
    type: "丁寧語", role: "聞",
    note: "{食前:しょくぜん} = sebelum makan, {食後:しょくご} = setelah makan, {寝:ね}る{前:まえ} = sebelum tidur, {頓服:とんぷく} = diminum saat perlu saja."
  },
  {
    jp: "この{薬:くすり}は{眠:ねむ}くなりますか", romaji: "kono kusuri wa nemuku narimasu ka",
    id: "Apakah obat ini membuat mengantuk?",
    type: "丁寧語", role: "話",
    note: "Penting kalau kamu bekerja dengan mesin, forklift, atau mengemudi."
  },
  {
    jp: "{風邪薬:かぜぐすり}を{探:さが}しているんですが、どれがいいですか", romaji: "kazegusuri wo sagashite irun desu ga, dore ga ii desu ka",
    id: "Saya mencari obat flu, mana yang bagus?",
    type: "丁寧語", role: "話",
    note: "Tanyakan ke {薬剤師:やくざいし} (apoteker) atau {登録販売者:とうろくはんばいしゃ} di drugstore. Sebutkan gejalamu."
  },
  {
    jp: "{痛:いた}み{止:ど}めはありますか", romaji: "itamidome wa arimasu ka",
    id: "Ada obat pereda nyeri?",
    type: "丁寧語", role: "話",
    note: "Beberapa obat kuat hanya bisa dibeli saat apoteker ada di tempat ({第1類医薬品:だいいちるいいやくひん}). Ikuti dosis di kotak ({用法:ようほう}・{用量:ようりょう})."
  },
  {
    jp: "「{食間:しょっかん}」は{食事中:しょくじちゅう}ではない", romaji: "\"shokkan\" wa shokujichuu de wa nai",
    id: "'Shokkan' BUKAN berarti saat makan",
    type: "注意", role: "聞",
    note: "{食間:しょっかん} = di antara dua waktu makan, sekitar 2 jam setelah makan (perut kosong). Banyak orang salah meminumnya sambil makan."
  }
]);
