/* ============================================================
   敬語会話 — データ (Keigo Kaiwa Data)
   ------------------------------------------------------------
   Furigana ditulis dengan notasi eksplisit:  {漢字:よみ}
   Contoh: "お{疲:つか}れ{様:さま}です"
   -> renderFurigana() mengubahnya menjadi <ruby>...<rt>...</rt></ruby>

   Field:
     jp     : Bahasa Jepang + notasi furigana
     yomi   : Bacaan lengkap (hiragana) untuk mode uji-diri
     romaji : Hepburn
     id     : Arti (Bahasa Indonesia)
     type   : "尊敬語" | "謙譲語" | "丁寧語" | "定型" | "注意"
     cat    : "動詞" | "挨拶" | "依頼" | "メール" | "謝罪" | "返答" | "電話" | "報告"
     note   : Catatan pemakaian / jebakan umum

   CATATAN VERIFIKASI: pasangan verba keigo & frasa bisnis di
   bawah adalah bentuk baku (standar) yang benar-benar dipakai
   di lingkungan kerja Jepang. Kesalahan pada data.csv lama
   (おんじかん→おじかん, sangyou→sagyou, dst.) telah dikoreksi.
   ============================================================ */

const KEIGO_DATA = [
  /* ---------- 動詞：尊敬語 × 謙譲語（inti keigo）---------- */
  {
    jp: "なさる", yomi: "なさる", romaji: "nasaru",
    id: "melakukan (sonkeigo dari する)",
    type: "尊敬語", cat: "動詞",
    note: "Untuk perbuatan lawan bicara/atasan. Bentuk ~ます: なさいます. Contoh: 「どうなさいますか」= Bagaimana Anda ingin melakukannya?"
  },
  {
    jp: "いたす", yomi: "いたす", romaji: "itasu",
    id: "melakukan (kenjougo dari する)",
    type: "謙譲語", cat: "動詞",
    note: "Untuk perbuatan diri sendiri (ditulis 致す). Sangat sering: 「よろしくお{願:ねが}いいたします」."
  },
  {
    jp: "いらっしゃる", yomi: "いらっしゃる", romaji: "irassharu",
    id: "pergi / datang / ada (sonkeigo)",
    type: "尊敬語", cat: "動詞",
    note: "Satu kata menggantikan 行く・来る・いる. Contoh: 「{部長:ぶちょう}はいらっしゃいますか」= Apakah Bapak Kepala ada?"
  },
  {
    jp: "{参:まい}る", yomi: "まいる", romaji: "mairu",
    id: "pergi / datang (kenjougo)",
    type: "謙譲語", cat: "動詞",
    note: "Merendahkan gerak diri sendiri. Contoh: 「すぐに{参:まい}ります」= Saya segera datang."
  },
  {
    jp: "{伺:うかが}う", yomi: "うかがう", romaji: "ukagau",
    id: "berkunjung / bertanya / mendengar (kenjougo)",
    type: "謙譲語", cat: "動詞",
    note: "Serbaguna: mengunjungi (行く), bertanya (聞く). Contoh: 「{明日:あす}{伺:うかが}います」／「{一:ひと}つ{伺:うかが}ってもよろしいですか」"
  },
  {
    jp: "おっしゃる", yomi: "おっしゃる", romaji: "ossharu",
    id: "berkata (sonkeigo dari 言う)",
    type: "尊敬語", cat: "動詞",
    note: "Bentuk ~ます: おっしゃいます. Contoh: 「{部長:ぶちょう}がおっしゃった{通:とお}りです」= Persis seperti kata Bapak Kepala."
  },
  {
    jp: "{申:もう}し{上:あ}げる", yomi: "もうしあげる", romaji: "moushiageru",
    id: "mengatakan (kenjougo dari 言う)",
    type: "謙譲語", cat: "動詞",
    note: "申す = merendah biasa; 申し上げる = lebih hormat ke lawan. Perkenalan: 「{田中:たなか}と{申:もう}します」."
  },
  {
    jp: "ご{覧:らん}になる", yomi: "ごらんになる", romaji: "goran ni naru",
    id: "melihat (sonkeigo dari 見る)",
    type: "尊敬語", cat: "動詞",
    note: "Contoh: 「{資料:しりょう}をご{覧:らん}になりましたか」= Sudahkah Anda melihat dokumennya?"
  },
  {
    jp: "{拝見:はいけん}する", yomi: "はいけんする", romaji: "haiken suru",
    id: "melihat (kenjougo dari 見る)",
    type: "謙譲語", cat: "動詞",
    note: "Untuk melihat sesuatu dari/milik atasan. Contoh: 「メール、{拝見:はいけん}しました」."
  },
  {
    jp: "{召:め}し{上:あ}がる", yomi: "めしあがる", romaji: "meshiagaru",
    id: "makan / minum (sonkeigo)",
    type: "尊敬語", cat: "動詞",
    note: "Contoh: 「どうぞ{召:め}し{上:あ}がってください」= Silakan dinikmati."
  },
  {
    jp: "いただく", yomi: "いただく", romaji: "itadaku",
    id: "makan / minum / menerima (kenjougo)",
    type: "謙譲語", cat: "動詞",
    note: "Sebelum makan: 「いただきます」. Menerima: 「{資料:しりょう}をいただけますか」. Ditulis 頂く."
  },
  {
    jp: "ご{存:ぞん}じだ", yomi: "ごぞんじだ", romaji: "gozonji da",
    id: "tahu / mengetahui (sonkeigo)",
    type: "尊敬語", cat: "動詞",
    note: "Contoh: 「その{件:けん}はご{存:ぞん}じですか」= Apakah Anda tahu soal itu?"
  },
  {
    jp: "{存:ぞん}じ{上:あ}げる", yomi: "ぞんじあげる", romaji: "zonjiageru",
    id: "tahu (tentang orang) — kenjougo",
    type: "謙譲語", cat: "動詞",
    note: "存じ上げる untuk orang; untuk hal/benda pakai 「{存:ぞん}じております」. Contoh: 「お{名前:なまえ}は{存:ぞん}じ{上:あ}げております」."
  },
  {
    jp: "お{目:め}にかかる", yomi: "おめにかかる", romaji: "ome ni kakaru",
    id: "bertemu (kenjougo dari 会う)",
    type: "謙譲語", cat: "動詞",
    note: "Contoh: 「お{目:め}にかかれて{光栄:こうえい}です」= Suatu kehormatan bisa bertemu Anda."
  },
  {
    jp: "{頂戴:ちょうだい}する", yomi: "ちょうだいする", romaji: "choudai suru",
    id: "menerima (kenjougo dari もらう, formal)",
    type: "謙譲語", cat: "動詞",
    note: "Contoh: 「お{名刺:めいし}を{頂戴:ちょうだい}できますか」= Bolehkah saya menerima kartu nama Anda?"
  },
  {
    jp: "{差:さ}し{上:あ}げる", yomi: "さしあげる", romaji: "sashiageru",
    id: "memberi (kenjougo dari あげる)",
    type: "謙譲語", cat: "動詞",
    note: "Hati-hati: bisa terkesan menggurui ke atasan. Sering lebih aman memakai 「お{送:おく}りします」daripada 「お{送:おく}り{差:さ}し{上:あ}げます」."
  },
  {
    jp: "{下:くだ}さる", yomi: "くださる", romaji: "kudasaru",
    id: "memberi (kepada saya) — sonkeigo dari くれる",
    type: "尊敬語", cat: "動詞",
    note: "Contoh: 「{先生:せんせい}が{教:おし}えてくださった」= Sensei mengajari saya. Permintaan: 「〜てください」."
  },
  {
    jp: "{承知:しょうち}する", yomi: "しょうちする", romaji: "shouchi suru",
    id: "mengerti / menyanggupi (kenjougo)",
    type: "謙譲語", cat: "返答",
    note: "Balasan ke atasan/klien: 「{承知:しょうち}いたしました」. Lebih formal & aman daripada 「わかりました」."
  },
  {
    jp: "かしこまる", yomi: "かしこまる", romaji: "kashikomaru",
    id: "menyanggupi dengan sangat hormat",
    type: "謙譲語", cat: "返答",
    note: "「かしこまりました」umum di layanan pelanggan; setara/lebih hormat dari 承知いたしました."
  },

  /* ---------- 挨拶（salam kantor）---------- */
  {
    jp: "お{疲:つか}れ{様:さま}です", yomi: "おつかれさまです", romaji: "otsukaresama desu",
    id: "Terima kasih atas kerja kerasnya (salam antar rekan)",
    type: "定型", cat: "挨拶",
    note: "Salam serbaguna di kantor (bertemu, berpapasan, pulang). Aman ke atasan. Jangan dipakai ke klien luar."
  },
  {
    jp: "お{先:さき}に{失礼:しつれい}します", yomi: "おさきにしつれいします", romaji: "osaki ni shitsurei shimasu",
    id: "Permisi, saya pulang lebih dulu",
    type: "定型", cat: "挨拶",
    note: "Diucapkan saat pulang mendahului rekan. Rekan menjawab: 「お{疲:つか}れ{様:さま}でした」."
  },
  {
    jp: "おはようございます", yomi: "おはようございます", romaji: "ohayou gozaimasu",
    id: "Selamat pagi (sopan)",
    type: "丁寧語", cat: "挨拶",
    note: "Di sebagian industri dipakai sebagai salam pertemuan pertama, kapan pun jam-nya."
  },
  {
    jp: "{行:い}ってまいります", yomi: "いってまいります", romaji: "itte mairimasu",
    id: "Saya pergi dulu (keluar kantor, hormat)",
    type: "謙譲語", cat: "挨拶",
    note: "Saat keluar kantor untuk urusan. Rekan menjawab: 「{行:い}ってらっしゃいませ」."
  },
  {
    jp: "{恐:おそ}れ{入:い}ります", yomi: "おそれいります", romaji: "osoreirimasu",
    id: "Maaf merepotkan / terima kasih (sangat sopan)",
    type: "定型", cat: "挨拶",
    note: "Untuk meminta tolong atau berterima kasih dengan sungkan. Lebih halus dari すみません."
  },
  {
    jp: "{失礼:しつれい}いたします", yomi: "しつれいいたします", romaji: "shitsurei itashimasu",
    id: "Permisi (masuk/keluar ruangan, menutup telepon)",
    type: "謙譲語", cat: "挨拶",
    note: "Untuk masuk ruang atasan, atau menutup telepon sebelum meletakkan gagang."
  },

  /* ---------- 依頼・クッション言葉（permintaan halus）---------- */
  {
    jp: "{恐:おそ}れ{入:い}りますが", yomi: "おそれいりますが", romaji: "osoreirimasu ga",
    id: "Mohon maaf, tetapi... (kata bantalan sebelum meminta)",
    type: "定型", cat: "依頼",
    note: "Kushion kotoba: melunakkan permintaan. Contoh: 「{恐:おそ}れ{入:い}りますが、お{名前:なまえ}を{伺:うかが}えますか」."
  },
  {
    jp: "お{手数:てすう}をおかけしますが", yomi: "おてすうをおかけしますが", romaji: "otesuu wo okake shimasu ga",
    id: "Maaf merepotkan Anda, tetapi...",
    type: "定型", cat: "依頼",
    note: "Kushion kotoba sebelum minta tolong yang menyita waktu/tenaga lawan."
  },
  {
    jp: "{差:さ}し{支:つか}えなければ", yomi: "さしつかえなければ", romaji: "sashitsukae nakereba",
    id: "Jika tidak keberatan / bila memungkinkan",
    type: "定型", cat: "依頼",
    note: "Contoh: 「{差:さ}し{支:つか}えなければ、ご{連絡先:れんらくさき}を{伺:うかが}えますか」."
  },
  {
    jp: "{少:すこ}しお{時間:じかん}よろしいでしょうか", yomi: "すこしおじかんよろしいでしょうか", romaji: "sukoshi ojikan yoroshii deshou ka",
    id: "Apakah Anda punya waktu sebentar?",
    type: "丁寧語", cat: "依頼",
    note: "Pembuka sopan sebelum mengganggu seseorang. (Koreksi data lama: おじかん, bukan おんじかん.)"
  },
  {
    jp: "ご{相談:そうだん}させていただけますか", yomi: "ごそうだんさせていただけますか", romaji: "gosoudan sasete itadakemasu ka",
    id: "Bolehkah saya berkonsultasi dengan Anda?",
    type: "謙譲語", cat: "依頼",
    note: "「させていただく」= minta izin melakukan sesuatu. Utuh: 「この{件:けん}についてご{相談:そうだん}させていただけますか」."
  },
  {
    jp: "ご{確認:かくにん}いただけますでしょうか", yomi: "ごかくにんいただけますでしょうか", romaji: "gokakunin itadakemasu deshou ka",
    id: "Bisakah Anda memeriksanya? (permintaan sangat sopan)",
    type: "謙譲語", cat: "依頼",
    note: "Pola 「〜ていただけますでしょうか」= permintaan paling aman ke atasan/klien. Sebagian purist memilih 「〜ていただけますか」."
  },
  {
    jp: "{少々:しょうしょう}お{待:ま}ちください", yomi: "しょうしょうおまちください", romaji: "shoushou omachi kudasai",
    id: "Mohon tunggu sebentar",
    type: "尊敬語", cat: "電話",
    note: "Lebih halus: 「{少々:しょうしょう}お{待:ま}ちいただけますでしょうか」. Di telepon sering ditambah -ませ: お{待:ま}ちくださいませ."
  },
  {
    jp: "お{手:て}すきの{際:さい}に", yomi: "おてすきのさいに", romaji: "otesuki no sai ni",
    id: "Saat Anda ada waktu luang",
    type: "定型", cat: "依頼",
    note: "Halus, tanpa mendesak. Contoh: 「お{手:て}すきの{際:さい}にご{確認:かくにん}ください」."
  },

  /* ---------- メール定型（frasa email）---------- */
  {
    jp: "いつもお{世話:せわ}になっております", yomi: "いつもおせわになっております", romaji: "itsumo osewa ni natte orimasu",
    id: "Terima kasih atas kerja samanya selama ini",
    type: "謙譲語", cat: "メール",
    note: "Pembuka wajib telepon/email ke klien atau mitra. Salah satu frasa paling sering di dunia kerja."
  },
  {
    jp: "よろしくお{願:ねが}いいたします", yomi: "よろしくおねがいいたします", romaji: "yoroshiku onegai itashimasu",
    id: "Mohon kerja samanya / bantuannya",
    type: "謙譲語", cat: "メール",
    note: "Penutup email/percakapan paling umum. Versi lebih formal ada di kartu berikutnya."
  },
  {
    jp: "{何卒:なにとぞ}よろしくお{願:ねが}い{申:もう}し{上:あ}げます", yomi: "なにとぞよろしくおねがいもうしあげます", romaji: "nanitozo yoroshiku onegai moushiagemasu",
    id: "Dengan hormat mohon kerja samanya (penutup resmi)",
    type: "謙譲語", cat: "メール",
    note: "Penutup surat/email resmi ke klien. Lebih berbobot dari よろしくお願いいたします."
  },
  {
    jp: "お{忙:いそが}しいところ{恐縮:きょうしゅく}ですが", yomi: "おいそがしいところきょうしゅくですが", romaji: "oisogashii tokoro kyoushuku desu ga",
    id: "Maaf mengganggu di tengah kesibukan Anda, tetapi...",
    type: "定型", cat: "メール",
    note: "Kushion kotoba pembuka email permintaan. 恐縮 = perasaan sungkan."
  },
  {
    jp: "ご{確認:かくにん}のほどよろしくお{願:ねが}いいたします", yomi: "ごかくにんのほどよろしくおねがいいたします", romaji: "gokakunin no hodo yoroshiku onegai itashimasu",
    id: "Mohon untuk dicek/dikonfirmasi",
    type: "謙譲語", cat: "メール",
    note: "Penutup email saat minta lawan memeriksa sesuatu. 「〜のほど」melembutkan permintaan."
  },
  {
    jp: "ご{査収:さしゅう}ください", yomi: "ごさしゅうください", romaji: "gosashuu kudasai",
    id: "Mohon diperiksa lalu diterima (untuk lampiran)",
    type: "尊敬語", cat: "メール",
    note: "Email berlampiran: 「{資料:しりょう}を{添付:てんぷ}いたします。ご{査収:さしゅう}ください」."
  },
  {
    jp: "ご{連絡:れんらく}いただけますと{幸:さいわ}いです", yomi: "ごれんらくいただけますとさいわいです", romaji: "gorenraku itadakemasu to saiwai desu",
    id: "Saya akan berterima kasih bila Anda menghubungi saya",
    type: "謙譲語", cat: "メール",
    note: "Permintaan halus (bukan perintah). 「幸いです」= akan merasa beruntung/berterima kasih."
  },
  {
    jp: "{取:と}り{急:いそ}ぎご{連絡:れんらく}まで", yomi: "とりいそぎごれんらくまで", romaji: "toriisogi gorenraku made",
    id: "Sekadar mengabari dengan segera (penutup email singkat)",
    type: "定型", cat: "メール",
    note: "Untuk email pemberitahuan cepat. Hindari ke atasan yang sangat formal karena terkesan terburu-buru."
  },

  /* ---------- 謝罪（permintaan maaf）---------- */
  {
    jp: "{申:もう}し{訳:わけ}ございません", yomi: "もうしわけございません", romaji: "moushiwake gozaimasen",
    id: "Saya mohon maaf (sangat sopan)",
    type: "謙譲語", cat: "謝罪",
    note: "Lebih formal dari すみません. Untuk kesalahan yang sudah terjadi: 「{申:もう}し{訳:わけ}ございませんでした」."
  },
  {
    jp: "{大変:たいへん}{失礼:しつれい}いたしました", yomi: "たいへんしつれいいたしました", romaji: "taihen shitsurei itashimashita",
    id: "Saya sungguh minta maaf atas kelancangan saya",
    type: "謙譲語", cat: "謝罪",
    note: "Setelah melakukan sesuatu yang kurang sopan (mis. salah sebut nama, memotong bicara)."
  },
  {
    jp: "ご{迷惑:めいわく}をおかけしました", yomi: "ごめいわくをおかけしました", romaji: "gomeiwaku wo okake shimashita",
    id: "Maaf telah merepotkan/menyusahkan Anda",
    type: "謙譲語", cat: "謝罪",
    note: "Sering digabung: 「ご{迷惑:めいわく}をおかけし、{申:もう}し{訳:わけ}ございません」."
  },

  /* ---------- 返答（respons/konfirmasi）---------- */
  {
    jp: "{承知:しょうち}いたしました", yomi: "しょうちいたしました", romaji: "shouchi itashimashita",
    id: "Baik, saya mengerti (ke atasan/klien)",
    type: "謙譲語", cat: "返答",
    note: "Standar bisnis. Jangan pakai 「{了解:りょうかい}しました」ke atasan (terkesan kasual/setara)."
  },
  {
    jp: "かしこまりました", yomi: "かしこまりました", romaji: "kashikomarimashita",
    id: "Baik, saya laksanakan (sangat hormat)",
    type: "謙譲語", cat: "返答",
    note: "Umum di layanan pelanggan. Setara/lebih hormat dari 承知いたしました."
  },

  /* ---------- 電話（telepon）---------- */
  {
    jp: "お{電話:でんわ}が{遠:とお}いようです", yomi: "おでんわがとおいようです", romaji: "odenwa ga tooi you desu",
    id: "Sepertinya suara telepon kurang jelas",
    type: "丁寧語", cat: "電話",
    note: "Cara sopan mengatakan 'suara putus-putus/kecil' tanpa menyalahkan lawan."
  },
  {
    jp: "お{名前:なまえ}を{伺:うかが}ってもよろしいでしょうか", yomi: "おなまえをうかがってもよろしいでしょうか", romaji: "onamae wo ukagatte mo yoroshii deshou ka",
    id: "Bolehkah saya menanyakan nama Anda?",
    type: "謙譲語", cat: "電話",
    note: "Alternatif yang lebih aman daripada 「お{名前:なまえ}を{頂戴:ちょうだい}できますか」(sebagian menganggap nama bukan 'benda' untuk 頂戴)."
  },

  /* ---------- 報告（laporan/kalimat panjang, dari data lama, dikoreksi）---------- */
  {
    jp: "{現在:げんざい}、こちらの{作業:さぎょう}はおよそ70％ほど{進:すす}んでおります",
    yomi: "げんざい、こちらのさぎょうはおよそななじゅっパーセントほどすすんでおります",
    romaji: "genzai, kochira no sagyou wa oyoso 70% hodo susunde orimasu",
    id: "Saat ini, pekerjaan ini sudah berjalan sekitar 70 persen",
    type: "謙譲語", cat: "報告",
    note: "「{進:すす}んでおります」= bentuk merendah dari 進んでいます. (Koreksi data lama: sagyou, bukan sangyou; oyoso, bukan oyosou.)"
  },
  {
    jp: "{誤解:ごかい}がないよう、もう{少:すこ}し{詳:くわ}しくご{説明:せつめい}いただけますでしょうか",
    yomi: "ごかいがないよう、もうすこしくわしくごせつめいいただけますでしょうか",
    romaji: "gokai ga nai you, mou sukoshi kuwashiku gosetsumei itadakemasu deshou ka",
    id: "Agar tidak salah paham, bisakah Anda menjelaskan sedikit lebih rinci?",
    type: "謙譲語", cat: "報告",
    note: "Cara sopan minta penjelasan ulang tanpa terkesan menyalahkan lawan."
  },
  {
    jp: "{何:なに}かお{手伝:てつだ}いできることがありましたら、お{知:し}らせください",
    yomi: "なにかおてつだいできることがありましたら、おしらせください",
    romaji: "nanika otetsudai dekiru koto ga arimashitara, oshirase kudasai",
    id: "Jika ada yang bisa saya bantu, mohon beri tahu saya",
    type: "尊敬語", cat: "報告",
    note: "Menawarkan bantuan dengan sopan di akhir percakapan/email."
  },
  {
    jp: "{少:すこ}しお{時間:じかん}よろしいでしょうか。この{件:けん}についてご{相談:そうだん}させていただけますか",
    yomi: "すこしおじかんよろしいでしょうか。このけんについてごそうだんさせていただけますか",
    romaji: "sukoshi ojikan yoroshii deshou ka. kono ken ni tsuite gosoudan sasete itadakemasu ka",
    id: "Apakah ada waktu sebentar? Saya ingin berkonsultasi mengenai hal ini",
    type: "謙譲語", cat: "報告",
    note: "Rangkaian pembuka+isi yang lengkap saat mendekati atasan untuk berdiskusi."
  },

  /* ---------- 注意（kesalahan umum: salah → benar）---------- */
  {
    jp: "「{了解:りょうかい}しました」→ {目上:めうえ}には「{承知:しょうち}いたしました」",
    yomi: "しょうちいたしました", romaji: "shouchi itashimashita",
    id: "'Ryoukai shimashita' terkesan kasual — ke atasan pakai 'Shouchi itashimashita'",
    type: "注意", cat: "返答",
    note: "了解 mengesankan posisi setara. Ke atasan/klien selalu 承知いたしました atau かしこまりました."
  },
  {
    jp: "「ご{苦労:くろう}{様:さま}です」→ {目上:めうえ}には「お{疲:つか}れ{様:さま}です」",
    yomi: "おつかれさまです", romaji: "otsukaresama desu",
    id: "'Gokurou-sama' adalah arah atasan→bawahan — ke atasan pakai 'Otsukaresama'",
    type: "注意", cat: "挨拶",
    note: "ご苦労様 diucapkan atasan ke bawahan. Membalik arahnya dianggap tidak sopan."
  },
  {
    jp: "「おっしゃられる」→ {正:ただ}しくは「おっしゃる」",
    yomi: "おっしゃる", romaji: "ossharu",
    id: "'Ossharareru' adalah keigo ganda (salah) — cukup 'Ossharu'",
    type: "注意", cat: "動詞",
    note: "二重敬語 (keigo ganda): おっしゃる sudah sonkeigo, tak perlu +られる. Sama: 「ご{覧:らん}になられる」→「ご{覧:らん}になる」."
  },
  {
    jp: "「{参考:さんこう}になります」→ {目上:めうえ}には「{勉強:べんきょう}になります」",
    yomi: "べんきょうになります", romaji: "benkyou ni narimasu",
    id: "'Sankou ni narimasu' bisa terkesan menilai — ke atasan pakai 'Benkyou ni narimasu'",
    type: "注意", cat: "返答",
    note: "参考になる seolah menilai berguna/tidaknya info atasan. 勉強になります lebih rendah hati."
  }
];

/* Ekspor untuk lingkungan module (opsional); di browser tetap sebagai global. */
if (typeof module !== "undefined" && module.exports) {
  module.exports = { KEIGO_DATA };
}
