/* コンビニ — minimarket (yang paling sering kamu kunjungi) */
addCards("コンビニ", [
  {
    jp: "いらっしゃいませ", romaji: "irasshaimase",
    id: "Selamat datang",
    type: "定型", role: "聞",
    note: "Tidak perlu dijawab — pelanggan Jepang biasanya diam saja. Senyum atau mengangguk kecil sudah cukup."
  },
  {
    jp: "お{弁当:べんとう}、{温:あたた}めますか", romaji: "obentou, atatamemasu ka",
    id: "Bentonya mau dihangatkan?",
    type: "丁寧語", role: "聞",
    reply: "はい、お{願:ねが}いします／いえ、{大丈夫:だいじょうぶ}です",
    note: "Sering disingkat jadi 「{温:あたた}めますか?」 saja dan diucapkan cepat. Versi lebih sopan: 「お{温:あたた}めしますか」."
  },
  {
    jp: "お{箸:はし}はおつけしますか", romaji: "ohashi wa otsuke shimasu ka",
    id: "Mau pakai sumpit?",
    type: "謙譲語", role: "聞",
    reply: "はい、お{願:ねが}いします",
    note: "Variasi: 「スプーンはおつけしますか」, 「フォークは…」. Mulai 2022 banyak toko hanya memberi alat makan kalau kamu minta."
  },
  {
    jp: "お{箸:はし}を{二膳:にぜん}お{願:ねが}いします", romaji: "ohashi wo nizen onegai shimasu",
    id: "Tolong sumpitnya dua pasang",
    type: "丁寧語", role: "話",
    note: "{膳:ぜん} = satuan sepasang sumpit. 「{二:ふた}つお{願:ねが}いします」 juga dimengerti."
  },
  {
    jp: "{袋:ふくろ}はご{利用:りよう}ですか", romaji: "fukuro wa goriyou desu ka",
    id: "Pakai kantong plastik?",
    type: "尊敬語", role: "聞",
    reply: "はい、お{願:ねが}いします／いえ、{大丈夫:だいじょうぶ}です",
    note: "Sejak Juli 2020 kantong plastik berbayar (±3–5円). Variasi: 「レジ{袋:ぶくろ}はご{利用:りよう}ですか」, 「{袋:ふくろ}いりますか」."
  },
  {
    jp: "{袋:ふくろ}は{大丈夫:だいじょうぶ}です。{持:も}っているので", romaji: "fukuro wa daijoubu desu. motte iru node",
    id: "Tidak perlu kantong, saya bawa sendiri",
    type: "丁寧語", role: "話",
    note: "Tunjukkan tas belanjamu (エコバッグ). Bisa juga hanya 「{大丈夫:だいじょうぶ}です」 + lambaian tangan kecil."
  },
  {
    jp: "{袋:ふくろ}、お{分:わ}けしますか", romaji: "fukuro, owake shimasu ka",
    id: "Kantongnya mau dipisah?",
    type: "謙譲語", role: "聞",
    reply: "{一緒:いっしょ}で{大丈夫:だいじょうぶ}です",
    note: "Biasanya untuk memisahkan makanan panas dan minuman dingin, atau makanan dan barang non-makanan."
  },
  {
    jp: "シールでよろしいですか", romaji: "shiiru de yoroshii desu ka",
    id: "Cukup ditempel stiker saja?",
    type: "丁寧語", role: "聞",
    reply: "はい、{大丈夫:だいじょうぶ}です",
    note: "Untuk barang yang tidak dimasukkan kantong (minuman, satu barang kecil) — kasir menempel stiker tanda sudah dibayar."
  },
  {
    jp: "ポイントカードはお{持:も}ちですか", romaji: "pointo kaado wa omochi desu ka",
    id: "Punya kartu poin?",
    type: "尊敬語", role: "聞",
    reply: "いえ、{持:も}っていません",
    note: "Kartu poin populer: Ponta, dポイント, Vポイント, {楽天:らくてん}ポイント. Bisa dipasang di aplikasi HP."
  },
  {
    jp: "お{支払:しはら}いはいかがなさいますか", romaji: "oshiharai wa ikaga nasaimasu ka",
    id: "Mau bayar dengan apa?",
    type: "尊敬語", role: "聞",
    reply: "{現金:げんきん}でお{願:ねが}いします",
    note: "Pilihan: {現金:げんきん} (tunai), カード, {交通系:こうつうけい}IC (Suica dll), QRコード (PayPay dll). Sering kamu pilih sendiri di layar."
  },
  {
    jp: "PayPayでお{願:ねが}いします", romaji: "PayPay de onegai shimasu",
    id: "Saya bayar pakai PayPay",
    type: "丁寧語", role: "話",
    note: "Sebutkan metode bayar sebelum kasir bertanya agar cepat. Untuk QR, kasir akan memindai kode di HP-mu."
  },
  {
    jp: "{交通系:こうつうけい}ICで{払:はら}えますか", romaji: "koutsuukei IC de haraemasu ka",
    id: "Bisa bayar pakai kartu IC transportasi?",
    type: "丁寧語", role: "話",
    note: "Suica, PASMO, ICOCA, dll bisa dipakai belanja di hampir semua konbini. Tempelkan kartu ke pembaca saat layar menyala."
  },
  {
    jp: "チャージお{願:ねが}いします", romaji: "chaaji onegai shimasu",
    id: "Tolong isi saldo (kartu IC)",
    type: "丁寧語", role: "話",
    note: "Sebutkan jumlah: 「{3000円:さんぜんえん}チャージお{願:ねが}いします」. Isi saldo di kasir umumnya hanya dengan uang tunai."
  },
  {
    jp: "{現金:げんきん}のお{客様:きゃくさま}は、あちらの{機械:きかい}でお{支払:しはら}いください", romaji: "genkin no okyakusama wa, achira no kikai de oshiharai kudasai",
    id: "Pelanggan yang bayar tunai, silakan bayar di mesin sebelah sana",
    type: "尊敬語", role: "聞",
    note: "Kasir semi-otomatis (セミセルフレジ): kasir memindai barang, kamu sendiri yang memasukkan uang ke mesin."
  },
  {
    jp: "{画面:がめん}のタッチをお{願:ねが}いします", romaji: "gamen no tacchi wo onegai shimasu",
    id: "Silakan sentuh layarnya",
    type: "丁寧語", role: "聞",
    note: "Untuk memilih metode pembayaran atau konfirmasi umur di layar pelanggan."
  },
  {
    jp: "{年齢確認:ねんれいかくにん}のため、{画面:がめん}のタッチをお{願:ねが}いします", romaji: "nenrei kakunin no tame, gamen no tacchi wo onegai shimasu",
    id: "Untuk konfirmasi umur, silakan sentuh layarnya",
    type: "丁寧語", role: "聞",
    note: "Saat membeli alkohol atau rokok: tekan 「はい」 yang menyatakan kamu berusia 20 tahun ke atas."
  },
  {
    jp: "{年齢:ねんれい}が{確認:かくにん}できるものはお{持:も}ちですか", romaji: "nenrei ga kakunin dekiru mono wa omochi desu ka",
    id: "Ada kartu identitas untuk memastikan umur?",
    type: "尊敬語", role: "聞",
    reply: "はい、{在留:ざいりゅう}カードです",
    note: "Kalau wajahmu terlihat muda, kasir bisa meminta identitas. {在留:ざいりゅう}カード berlaku sebagai identitas resmi."
  },
  {
    jp: "{560円:ごひゃくろくじゅうえん}になります", romaji: "gohyaku rokujuu en ni narimasu",
    id: "Totalnya jadi 560 yen",
    type: "丁寧語", role: "聞",
    note: "「〜になります」 = 'bahasa kasir' yang sangat umum. Variasi: 「{合計:ごうけい}〜{円:えん}です」. Angka ditampilkan juga di layar."
  },
  {
    jp: "{1000円:せんえん}お{預:あず}かりします", romaji: "sen en oazukari shimasu",
    id: "Saya terima 1.000 yen (uang Anda)",
    type: "謙譲語", role: "聞",
    note: "Kasir mengulang jumlah uang yang kamu berikan sebelum memberi kembalian. Tidak perlu dijawab."
  },
  {
    jp: "{440円:よんひゃくよんじゅうえん}のお{返:かえ}しです", romaji: "yonhyaku yonjuu en no okaeshi desu",
    id: "Ini kembaliannya 440 yen",
    type: "丁寧語", role: "聞",
    note: "Kadang: 「{先:さき}に{大:おお}きい{方:ほう}…」 = uang kertas dulu, lalu koin dan struk. 「お{釣:つ}り」 juga berarti kembalian."
  },
  {
    jp: "レシートはご{利用:りよう}ですか", romaji: "reshiito wa goriyou desu ka",
    id: "Perlu struk?",
    type: "尊敬語", role: "聞",
    reply: "いえ、{大丈夫:だいじょうぶ}です",
    note: "Variasi: 「レシートはいかがですか」. Simpan struk kalau mungkin perlu retur atau penggantian biaya."
  },
  {
    jp: "{有料:ゆうりょう}になりますが、よろしいですか", romaji: "yuuryou ni narimasu ga, yoroshii desu ka",
    id: "Ini berbayar, tidak apa-apa?",
    type: "丁寧語", role: "聞",
    reply: "はい／じゃあ、いいです",
    note: "Untuk kantong plastik, sendok tertentu, dll. 「じゃあ、いいです」 di sini = 'kalau begitu tidak usah'."
  },
  {
    jp: "お{次:つぎ}でお{待:ま}ちのお{客様:きゃくさま}、こちらのレジへどうぞ", romaji: "otsugi de omachi no okyakusama, kochira no reji e douzo",
    id: "Pelanggan berikutnya, silakan ke kasir ini",
    type: "尊敬語", role: "聞",
    note: "Di Jepang antre satu baris lalu menyebar ke kasir yang kosong. Tunggu dipanggil."
  },
  {
    jp: "ありがとうございました。またお{越:こ}しくださいませ", romaji: "arigatou gozaimashita. mata okoshi kudasaimase",
    id: "Terima kasih, silakan datang kembali",
    type: "尊敬語", role: "聞",
    note: "お{越:こ}しください = sonkeigo dari {来:き}てください. Tidak wajib dijawab, tapi 「どうも」 atau anggukan terasa ramah."
  },
  {
    jp: "これ、{温:あたた}めてください", romaji: "kore, atatamete kudasai",
    id: "Tolong hangatkan ini",
    type: "丁寧語", role: "話",
    note: "Kalau kasir lupa menawarkan. Untuk produk beku/onigiri tertentu tidak bisa dihangatkan."
  },
  {
    jp: "すみません、トイレをお{借:か}りしてもいいですか", romaji: "sumimasen, toire wo okari shite mo ii desu ka",
    id: "Permisi, bolehkah saya meminjam toilet?",
    type: "謙譲語", role: "話",
    note: "Etikanya: minta izin dulu, lalu beli sesuatu walau kecil. Sebagian toko di kota besar menutup toilet untuk umum."
  },
  {
    jp: "すみません、{傘:かさ}は{置:お}いてありますか", romaji: "sumimasen, kasa wa oite arimasu ka",
    id: "Permisi, apakah di sini menjual payung?",
    type: "丁寧語", role: "話",
    note: "「〜は{置:お}いてありますか」 = 'apakah toko ini menyediakan ~?'. Lebih natural daripada 「{売:う}っていますか」."
  },
  {
    jp: "{一万円札:いちまんえんさつ}でも{大丈夫:だいじょうぶ}ですか", romaji: "ichiman'en satsu demo daijoubu desu ka",
    id: "Boleh bayar pakai uang 10.000 yen?",
    type: "丁寧語", role: "話",
    note: "Sopan ditanyakan untuk belanja kecil, terutama pagi hari saat kasir kekurangan uang kembalian."
  },
  {
    jp: "この{払込票:はらいこみひょう}で{支払:しはら}いたいんですが", romaji: "kono haraikomihyou de shiharaitain desu ga",
    id: "Saya mau membayar tagihan ini",
    type: "丁寧語", role: "話",
    note: "Tagihan listrik, gas, air, pajak, pembelian online bisa dibayar di kasir konbini. Umumnya hanya tunai."
  },
  {
    jp: "コピー{機:き}の{使:つか}い{方:かた}を{教:おし}えていただけますか", romaji: "kopiiki no tsukaikata wo oshiete itadakemasu ka",
    id: "Bisakah Anda mengajari cara memakai mesin fotokopi?",
    type: "謙譲語", role: "話",
    note: "Mesin multifungsi konbini bisa fotokopi, print dari HP, bahkan mencetak {住民票:じゅうみんひょう} dengan マイナンバーカード."
  }
]);
