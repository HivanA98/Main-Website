/* 職場 — tempat kerja magang (pabrik, lapangan, toko) */
addCards("職場", [
  /* ---------- salam & ritme harian ---------- */
  {
    jp: "{今日:きょう}もよろしくお{願:ねが}いします", romaji: "kyou mo yoroshiku onegai shimasu",
    id: "Mohon kerja samanya hari ini juga",
    type: "丁寧語", role: "話",
    note: "Diucapkan ke {班長:はんちょう}/senpai saat mulai shift, setelah 「おはようございます」."
  },
  {
    jp: "お{疲:つか}れ{様:さま}です", romaji: "otsukaresama desu",
    id: "Terima kasih atas kerja kerasnya (salam antar rekan)",
    type: "定型", role: "話",
    note: "Salam serbaguna di tempat kerja: berpapasan di lorong, masuk ruang istirahat, telepon internal. Aman ke atasan."
  },
  {
    jp: "お{先:さき}に{失礼:しつれい}します", romaji: "osaki ni shitsurei shimasu",
    id: "Permisi, saya pulang duluan",
    type: "定型", role: "話",
    reply: "お{疲:つか}れ{様:さま}でした",
    note: "Wajib saat pulang lebih dulu dari rekan lain. Jangan pulang diam-diam."
  },
  {
    jp: "お{疲:つか}れ{様:さま}でした", romaji: "otsukaresama deshita",
    id: "Terima kasih atas kerja kerasnya hari ini",
    type: "定型", role: "話",
    note: "Jawaban untuk rekan yang pamit pulang, atau di akhir shift bersama."
  },
  {
    jp: "お{疲:つか}れ。{今日:きょう}はもう{上:あ}がっていいよ", romaji: "otsukare. kyou wa mou agatte ii yo",
    id: "Kerja bagus. Hari ini sudah boleh pulang",
    type: "普通", role: "聞",
    reply: "ありがとうございます。お{先:さき}に{失礼:しつれい}します",
    note: "{上:あ}がる = selesai kerja/pulang (bahasa tempat kerja). Atasan ke bawahan memakai bentuk santai — itu normal, bukan kasar."
  },
  {
    jp: "{先:さき}に{休憩:きゅうけい}いただきます", romaji: "saki ni kyuukei itadakimasu",
    id: "Saya izin istirahat duluan",
    type: "謙譲語", role: "話",
    note: "Saat istirahat bergiliran. Di lapangan sering lebih singkat: 「{休憩:きゅうけい}{入:はい}ります」."
  },
  {
    jp: "{休憩:きゅうけい}から{戻:もど}りました", romaji: "kyuukei kara modorimashita",
    id: "Saya sudah kembali dari istirahat",
    type: "丁寧語", role: "話",
    note: "Lapor ke {班長:はんちょう} atau rekan yang menggantikan posmu."
  },
  {
    jp: "ご{安全:あんぜん}に!", romaji: "goanzen ni!",
    id: "Selamat bekerja dengan aman! (salam pabrik/proyek)",
    type: "定型", role: "話",
    note: "Salam khas pabrik, konstruksi, dan industri berat — dipakai sebagai salam pagi atau di akhir {朝礼:ちょうれい}. Tidak semua tempat memakainya; ikuti rekanmu."
  },
  {
    jp: "{指差:ゆびさ}し{確認:かくにん}、ヨシ!", romaji: "yubisashi kakunin, yoshi!",
    id: "Tunjuk & periksa — aman! (ritual keselamatan)",
    type: "定型", role: "話",
    note: "Menunjuk objek (tombol, meteran, jalur) sambil mengucapkan keras untuk mencegah kesalahan. Jangan malu melakukannya — ini budaya keselamatan yang sangat dihargai."
  },

  /* ---------- menjawab instruksi ---------- */
  {
    jp: "はい、{分:わ}かりました", romaji: "hai, wakarimashita",
    id: "Baik, saya mengerti",
    type: "丁寧語", role: "話",
    note: "Jawaban paling umum ke {班長:はんちょう}/senpai di lapangan. Di kantor/ke atasan tinggi lebih formal: 「{承知:しょうち}しました」."
  },
  {
    jp: "{承知:しょうち}しました", romaji: "shouchi shimashita",
    id: "Baik, saya mengerti (formal)",
    type: "謙譲語", role: "話",
    note: "Ke atasan tinggi, klien, atau di kantor. Versi paling hormat: 「{承知:しょうち}いたしました」."
  },
  {
    jp: "すみません、もう{一度:いちど}{教:おし}えていただけますか", romaji: "sumimasen, mou ichido oshiete itadakemasu ka",
    id: "Maaf, bisakah Anda mengajari saya sekali lagi?",
    type: "謙譲語", role: "話",
    note: "Lebih baik bertanya ulang daripada salah kerja. Kesalahan karena tidak bertanya jauh lebih dimarahi daripada bertanya dua kali."
  },
  {
    jp: "メモを{取:と}ってもいいですか", romaji: "memo wo totte mo ii desu ka",
    id: "Bolehkah saya mencatat?",
    type: "丁寧語", role: "話",
    note: "Selalu bawa buku memo kecil. Mencatat menunjukkan keseriusan dan mengurangi pertanyaan berulang."
  },
  {
    jp: "これで{合:あ}っていますか", romaji: "kore de atte imasu ka",
    id: "Apakah ini sudah benar?",
    type: "丁寧語", role: "話",
    note: "Cek hasil kerja sebelum lanjut ke tahap berikutnya — terutama di minggu-minggu awal."
  },
  {
    jp: "{確認:かくにん}をお{願:ねが}いします", romaji: "kakunin wo onegai shimasu",
    id: "Tolong diperiksa",
    type: "丁寧語", role: "話",
    note: "Saat menyerahkan hasil kerja ke {班長:はんちょう} atau bagian QC."
  },
  {
    jp: "これはどこに{置:お}けばいいですか", romaji: "kore wa doko ni okeba ii desu ka",
    id: "Ini sebaiknya ditaruh di mana?",
    type: "丁寧語", role: "話",
    note: "Pola 「〜ばいいですか」 = 'sebaiknya ~?' sangat berguna: どうすればいいですか (harus bagaimana?), {誰:だれ}に{聞:き}けばいいですか (tanya siapa?)."
  },

  /* ---------- lapor (報告・連絡・相談) ---------- */
  {
    jp: "すみません、{今:いま}よろしいでしょうか", romaji: "sumimasen, ima yoroshii deshou ka",
    id: "Permisi, apakah sekarang ada waktu?",
    type: "丁寧語", role: "話",
    note: "Pembuka sebelum bertanya/lapor ke atasan yang sedang sibuk. Tunggu jawaban 「いいよ」 / 「どうした?」 dulu."
  },
  {
    jp: "{終:お}わりました。{次:つぎ}は{何:なに}をすればいいですか", romaji: "owarimashita. tsugi wa nani wo sureba ii desu ka",
    id: "Sudah selesai. Selanjutnya saya harus mengerjakan apa?",
    type: "丁寧語", role: "話",
    note: "Jangan diam menunggu setelah tugas selesai. Lapor selesai + minta tugas = inti {報告:ほうこく} (houkoku)."
  },
  {
    jp: "{手:て}が{空:あ}いたので、{何:なに}かやることはありますか", romaji: "te ga aita node, nanika yaru koto wa arimasu ka",
    id: "Saya sedang tidak ada kerjaan, ada yang bisa saya kerjakan?",
    type: "丁寧語", role: "話",
    note: "{手:て}が{空:あ}く = tangan kosong/sedang senggang. Inisiatif seperti ini sangat dihargai."
  },
  {
    jp: "{何:なに}かお{手伝:てつだ}いすることはありますか", romaji: "nanika otetsudai suru koto wa arimasu ka",
    id: "Ada yang bisa saya bantu?",
    type: "謙譲語", role: "話",
    note: "Menawarkan bantuan ke rekan yang terlihat sibuk. お〜する = kenjougo."
  },
  {
    jp: "すみません、ちょっとご{報告:ほうこく}があるんですが", romaji: "sumimasen, chotto gohoukoku ga arun desu ga",
    id: "Permisi, ada yang ingin saya laporkan",
    type: "謙譲語", role: "話",
    note: "ほうれんそう = {報告:ほうこく} (lapor), {連絡:れんらく} (kabari), {相談:そうだん} (konsultasi) — budaya kerja Jepang yang paling ditekankan ke peserta magang."
  },
  {
    jp: "{班長:はんちょう}、ちょっとご{相談:そうだん}したいことがあるんですが", romaji: "hanchou, chotto gosoudan shitai koto ga arun desu ga",
    id: "Pak/Bu Ketua Regu, ada hal yang ingin saya konsultasikan",
    type: "謙譲語", role: "話",
    note: "Untuk masalah kerja maupun pribadi (kesehatan, asrama). Ganti {班長:はんちょう} dengan jabatan/nama atasanmu."
  },
  {
    jp: "ミスをしてしまいました。{申:もう}し{訳:わけ}ありません", romaji: "misu wo shite shimaimashita. moushiwake arimasen",
    id: "Saya melakukan kesalahan. Mohon maaf",
    type: "謙譲語", role: "話",
    note: "Lapor kesalahan SECEPATNYA, jangan disembunyikan. Di Jepang, menutupi kesalahan dianggap jauh lebih buruk daripada kesalahan itu sendiri."
  },
  {
    jp: "{以後:いご}、{気:き}をつけます", romaji: "igo, ki wo tsukemasu",
    id: "Ke depannya saya akan lebih berhati-hati",
    type: "丁寧語", role: "話",
    note: "Setelah ditegur: minta maaf dulu, lalu kalimat ini. Jangan langsung membela diri/menjelaskan alasan."
  },
  {
    jp: "{二度:にど}と{同:おな}じミスをしないようにします", romaji: "nido to onaji misu wo shinai you ni shimasu",
    id: "Saya akan berusaha tidak mengulangi kesalahan yang sama",
    type: "丁寧語", role: "話",
    note: "Kalimat janji perbaikan setelah kesalahan serius. Bisa ditambah langkah konkret: 「{次:つぎ}からは{必:かなら}ず{確認:かくにん}します」."
  },
  {
    jp: "{教:おし}えていただき、ありがとうございました", romaji: "oshiete itadaki, arigatou gozaimashita",
    id: "Terima kasih sudah mengajari saya",
    type: "謙譲語", role: "話",
    note: "Ke senpai yang meluangkan waktu mengajarimu. Bentuk 〜ていただき = lebih hormat dari 〜てくれて."
  },
  {
    jp: "{怪我:けが}をしてしまいました", romaji: "kega wo shite shimaimashita",
    id: "Saya terluka",
    type: "丁寧語", role: "話",
    note: "Lapor sekecil apa pun lukanya. Kecelakaan kerja ditanggung {労災:ろうさい} (asuransi kecelakaan kerja) — hak peserta magang juga."
  },
  {
    jp: "トイレに{行:い}ってきてもいいですか", romaji: "toire ni itte kite mo ii desu ka",
    id: "Bolehkah saya ke toilet?",
    type: "丁寧語", role: "話",
    note: "Di lini produksi, beri tahu {班長:はんちょう} sebelum meninggalkan pos supaya ada yang menggantikan."
  },

  /* ---------- izin, sakit, terlambat ---------- */
  {
    jp: "{体調:たいちょう}が{悪:わる}いので、{今日:きょう}はお{休:やす}みさせていただけますか", romaji: "taichou ga warui node, kyou wa oyasumi sasete itadakemasu ka",
    id: "Kondisi badan saya kurang baik, bolehkah hari ini saya izin tidak masuk?",
    type: "謙譲語", role: "話",
    note: "Hubungi SEBELUM jam masuk, lewat telepon (kecuali perusahaan mengizinkan LINE). Sebutkan gejala singkat."
  },
  {
    jp: "{熱:ねつ}があるので、{病院:びょういん}に{行:い}ってから{出勤:しゅっきん}します", romaji: "netsu ga aru node, byouin ni itte kara shukkin shimasu",
    id: "Saya demam, jadi akan ke rumah sakit dulu baru masuk kerja",
    type: "丁寧語", role: "話",
    note: "{出勤:しゅっきん} = berangkat/masuk kerja. {退勤:たいきん} = pulang kerja. {欠勤:けっきん} = absen."
  },
  {
    jp: "{電車:でんしゃ}が{遅:おく}れていて、{10分:じゅっぷん}ほど{遅:おく}れそうです", romaji: "densha ga okurete ite, juppun hodo okuresou desu",
    id: "Keretanya terlambat, sepertinya saya akan telat sekitar 10 menit",
    type: "丁寧語", role: "話",
    note: "Kabari sebelum jam masuk. Ambil {遅延証明書:ちえんしょうめいしょ} (surat keterangan keterlambatan) di stasiun sebagai bukti."
  },
  {
    jp: "{明日:あした}、お{休:やす}みをいただいてもよろしいでしょうか", romaji: "ashita, oyasumi wo itadaite mo yoroshii deshou ka",
    id: "Bolehkah saya mengambil libur besok?",
    type: "謙譲語", role: "話",
    note: "Ajukan sejauh mungkin sebelumnya. {有給休暇:ゆうきゅうきゅうか} (cuti berbayar) adalah hak pekerja setelah 6 bulan bekerja — termasuk peserta magang."
  },
  {
    jp: "{有給:ゆうきゅう}を{取:と}りたいのですが", romaji: "yuukyuu wo toritai no desu ga",
    id: "Saya ingin mengambil cuti berbayar",
    type: "丁寧語", role: "話",
    note: "「〜たいのですが」 = cara halus menyampaikan keinginan; kalimat sengaja menggantung menunggu respons."
  },
  {
    jp: "お{祈:いの}りの{場所:ばしょ}をお{借:か}りしてもよろしいでしょうか", romaji: "oinori no basho wo okari shite mo yoroshii deshou ka",
    id: "Bolehkah saya meminjam tempat untuk berdoa (salat)?",
    type: "謙譲語", role: "話",
    note: "Banyak perusahaan mengizinkan ruang kecil saat istirahat. Jelaskan singkat: 「{休憩時間:きゅうけいじかん}に{5分:ごふん}ほどです」 supaya atasan tenang."
  },
  {
    jp: "ラマダン{中:ちゅう}なので、{昼:ひる}ご{飯:はん}は{食:た}べません", romaji: "ramadan chuu na node, hirugohan wa tabemasen",
    id: "Karena sedang Ramadan, saya tidak makan siang",
    type: "丁寧語", role: "話",
    note: "Sampaikan ke atasan sebelum Ramadan mulai supaya tidak dikira sakit. Tambahkan: 「{体調:たいちょう}が{悪:わる}くなったら、すぐ{言:い}います」."
  },
  {
    jp: "{給料明細:きゅうりょうめいさい}について{質問:しつもん}があるんですが", romaji: "kyuuryou meisai ni tsuite shitsumon ga arun desu ga",
    id: "Saya ada pertanyaan tentang slip gaji",
    type: "丁寧語", role: "話",
    note: "Kamu berhak tahu rincian potongan: {寮費:りょうひ} (asrama), {税金:ぜいきん}, {社会保険:しゃかいほけん}, {雇用保険:こようほけん}. Bertanya dengan sopan itu wajar."
  },

  /* ---------- yang kamu DENGAR dari senpai/atasan ---------- */
  {
    jp: "{危:あぶ}ない!{下:さ}がって!", romaji: "abunai! sagatte!",
    id: "Bahaya! Mundur!",
    type: "普通", role: "聞",
    note: "Langsung berhenti dan mundur, tanya belakangan. Kata keselamatan lain: {止:と}めて (hentikan), {触:さわ}らないで (jangan sentuh), {離:はな}れて (menjauh)."
  },
  {
    jp: "{機械:きかい}を{止:と}めて!", romaji: "kikai wo tomete!",
    id: "Matikan mesinnya!",
    type: "普通", role: "聞",
    note: "Pelajari letak tombol darurat ({非常停止:ひじょうていし}ボタン) di hari pertama."
  },
  {
    jp: "これ、やっといて", romaji: "kore, yattoite",
    id: "Tolong kerjakan ini ya",
    type: "普通", role: "聞",
    reply: "はい、{分:わ}かりました",
    note: "やっといて = やっておいて (bahasa lisan). Bentuk 〜といて sangat sering: {片付:かたづ}けといて (rapikan), {置:お}いといて (taruh saja)."
  },
  {
    jp: "{終:お}わったら{言:い}って", romaji: "owattara itte",
    id: "Kalau sudah selesai, bilang ya",
    type: "普通", role: "聞",
    reply: "はい",
    note: "Jangan lupa benar-benar lapor setelah selesai: 「{終:お}わりました」."
  },
  {
    jp: "{使:つか}ったら{元:もと}の{場所:ばしょ}に{戻:もど}して", romaji: "tsukattara moto no basho ni modoshite",
    id: "Setelah dipakai, kembalikan ke tempat semula",
    type: "普通", role: "聞",
    reply: "はい、すみません",
    note: "Budaya 5S: {整理:せいり}・{整頓:せいとん}・{清掃:せいそう}・{清潔:せいけつ}・しつけ. Alat yang tidak di tempatnya bisa menghentikan lini produksi."
  },
  {
    jp: "ちゃんと{確認:かくにん}した?", romaji: "chanto kakunin shita?",
    id: "Sudah kamu periksa dengan benar?",
    type: "普通", role: "聞",
    reply: "すみません、もう{一度:いちど}{確認:かくにん}します",
    note: "Kalau ragu, jangan jawab 「はい」. Lebih baik periksa ulang."
  },
  {
    jp: "{何回:なんかい}も{言:い}ってるでしょ", romaji: "nankai mo itteru desho",
    id: "Kan sudah berkali-kali saya bilang",
    type: "普通", role: "聞",
    reply: "すみません。{次:つぎ}から{気:き}をつけます",
    note: "Teguran. Respons terbaik: minta maaf singkat dan janji memperbaiki, jangan membantah di saat itu. Kalau ada salah paham, jelaskan nanti saat suasana tenang."
  },
  {
    jp: "{急:いそ}いで!", romaji: "isoide!",
    id: "Cepat!",
    type: "普通", role: "聞",
    reply: "はい!",
    note: "Variasi: {早:はや}く, {早:はや}くして. Tetap jaga keselamatan — terburu-buru bukan alasan melanggar prosedur."
  },
  {
    jp: "{今日:きょう}、{残業:ざんぎょう}できる?", romaji: "kyou, zangyou dekiru?",
    id: "Hari ini bisa lembur?",
    type: "普通", role: "聞",
    reply: "はい、できます／すみません、{今日:きょう}はちょっと…",
    note: "{残業:ざんぎょう} = lembur, wajib dibayar dengan tarif tambahan. Menolak dengan 「ちょっと…」 + alasan singkat itu sopan."
  },
  {
    jp: "あかん!", romaji: "akan!",
    id: "Tidak boleh! / Gawat! (dialek Kansai)",
    type: "普通", role: "聞",
    note: "Banyak tempat magang memakai dialek. Kansai: あかん (=だめ), ほんま (={本当:ほんとう}), なんぼ (=いくら), しんどい (=capek), めっちゃ (=sangat). Kyushu/Chugoku: 〜けん (=〜から)."
  },

  /* ---------- jebakan di tempat kerja ---------- */
  {
    jp: "{分:わ}からないのに「はい」と{言:い}わない", romaji: "wakaranai noni \"hai\" to iwanai",
    id: "Jangan bilang 'hai' kalau sebenarnya tidak paham",
    type: "注意", role: "話",
    note: "Mengangguk padahal tidak paham = sumber kecelakaan kerja dan kesalahan produksi. Atasan Jepang menganggap 「はい」 = 'saya paham dan akan melakukannya'. Katakan 「すみません、もう{一度:いちど}お{願:ねが}いします」."
  },
  {
    jp: "「{了解:りょうかい}です」→「{分:わ}かりました」", romaji: "\"ryoukai desu\" → \"wakarimashita\"",
    id: "'Ryoukai desu' ke atasan terdengar kurang sopan",
    type: "注意", role: "話",
    note: "{了解:りょうかい} terkesan posisi setara. Ke atasan/senpai: 「はい、{分:わ}かりました」 atau 「{承知:しょうち}しました」."
  },
  {
    jp: "「ご{苦労様:くろうさま}です」→「お{疲:つか}れ{様:さま}です」", romaji: "\"gokurousama desu\" → \"otsukaresama desu\"",
    id: "'Gokurou-sama' hanya untuk atasan ke bawahan",
    type: "注意", role: "話",
    note: "ご{苦労様:くろうさま} diucapkan oleh atasan ke bawahan. Kalau kamu ucapkan ke atasan, terdengar tidak sopan. Pakai お{疲:つか}れ{様:さま}です."
  },
  {
    jp: "{時間厳守:じかんげんしゅ}", romaji: "jikan genshu",
    id: "Tepat waktu itu mutlak",
    type: "注意", role: "話",
    note: "Datang 5–10 menit sebelum jam masuk dan sudah siap (seragam, APD). Terlambat 1 menit pun harus dikabarkan sebelumnya."
  }
]);
