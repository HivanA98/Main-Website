/* 買い物 — supermarket, toko baju, 100均, elektronik */
addCards("買い物", [
  {
    jp: "すみません、{醤油:しょうゆ}はどこにありますか", romaji: "sumimasen, shouyu wa doko ni arimasu ka",
    id: "Permisi, kecap asin ada di mana?",
    type: "丁寧語", role: "話",
    note: "Pola paling berguna di supermarket — ganti {醤油:しょうゆ} dengan barang apa pun. Tunjukkan foto di HP kalau tidak tahu namanya."
  },
  {
    jp: "ご{案内:あんない}します", romaji: "goannai shimasu",
    id: "Mari saya antar",
    type: "謙譲語", role: "聞",
    reply: "ありがとうございます",
    note: "Staf Jepang sering langsung mengantarmu ke rak barangnya. Ikuti saja."
  },
  {
    jp: "こちらでございます", romaji: "kochira de gozaimasu",
    id: "Ini dia (tempatnya di sini)",
    type: "丁寧語", role: "聞",
    note: "でございます = versi sangat sopan dari です. Biasa dipakai staf toko dan hotel."
  },
  {
    jp: "{何:なに}かお{探:さが}しですか", romaji: "nanika osagashi desu ka",
    id: "Sedang mencari sesuatu?",
    type: "尊敬語", role: "聞",
    reply: "いえ、{見:み}ているだけです",
    note: "お〜です = bentuk sonkeigo singkat (お{探:さが}しですか = {探:さが}していますか)."
  },
  {
    jp: "{見:み}ているだけです", romaji: "mite iru dake desu",
    id: "Saya cuma lihat-lihat",
    type: "丁寧語", role: "話",
    note: "Tambah 「ありがとうございます」 di depannya agar ramah. Staf akan membiarkanmu berkeliling."
  },
  {
    jp: "これはいくらですか", romaji: "kore wa ikura desu ka",
    id: "Ini berapa harganya?",
    type: "丁寧語", role: "話",
    note: "Label harga: {税込:ぜいこみ} = sudah termasuk pajak, {税抜:ぜいぬき} = belum. Pajak 8% untuk makanan, 10% untuk barang lain."
  },
  {
    jp: "これ、{税込:ぜいこみ}ですか", romaji: "kore, zeikomi desu ka",
    id: "Ini sudah termasuk pajak?",
    type: "丁寧語", role: "話",
    note: "Harga besar di label kadang harga sebelum pajak; harga termasuk pajak ditulis kecil di sebelahnya."
  },
  {
    jp: "これ、{半額:はんがく}ですか", romaji: "kore, hangaku desu ka",
    id: "Ini diskon setengah harga?",
    type: "丁寧語", role: "話",
    note: "Stiker {半額:はんがく} (50%) atau {3割引:さんわりびき} (diskon 30%) muncul sore–malam untuk lauk dan bento di supermarket. {割引:わりびき} = diskon; 〇{割:わり} = 〇0%."
  },
  {
    jp: "これも{100円:ひゃくえん}ですか", romaji: "kore mo hyaku en desu ka",
    id: "Ini juga 100 yen?",
    type: "丁寧語", role: "話",
    note: "Di toko 100{均:きん} (ダイソー, セリア, dll) harga sebenarnya 110円 termasuk pajak, dan ada barang 300円/500円 dengan label berbeda."
  },
  {
    jp: "{申:もう}し{訳:わけ}ございません、ただいま{品切:しなぎ}れでございます", romaji: "moushiwake gozaimasen, tadaima shinagire de gozaimasu",
    id: "Mohon maaf, saat ini stoknya habis",
    type: "丁寧語", role: "聞",
    reply: "そうですか。いつ{入:はい}りますか",
    note: "Variasi: 「{在庫:ざいこ}を{切:き}らしております」. {入荷:にゅうか} = barang masuk/datang."
  },
  {
    jp: "これの{別:べつ}のサイズはありますか", romaji: "kore no betsu no saizu wa arimasu ka",
    id: "Ada ukuran lain untuk barang ini?",
    type: "丁寧語", role: "話",
    note: "Variasi: 「{別:べつ}の{色:いろ}はありますか」 (warna lain), 「もう{少:すこ}し{大:おお}きいサイズはありますか」."
  },
  {
    jp: "{試着:しちゃく}してもいいですか", romaji: "shichaku shite mo ii desu ka",
    id: "Bolehkah saya mencobanya (baju)?",
    type: "丁寧語", role: "話",
    note: "Lepas sepatu sebelum masuk kamar pas. Untuk atasan, kadang diberi フェイスカバー (penutup wajah) agar baju tidak kena keringat/makeup."
  },
  {
    jp: "ご{試着:しちゃく}なさいますか", romaji: "goshichaku nasaimasu ka",
    id: "Mau dicoba?",
    type: "尊敬語", role: "聞",
    reply: "はい、お{願:ねが}いします",
    note: "なさる = sonkeigo dari する. Staf kemudian akan mengantarmu ke {試着室:しちゃくしつ}."
  },
  {
    jp: "サイズはいかがでしたか", romaji: "saizu wa ikaga deshita ka",
    id: "Bagaimana ukurannya?",
    type: "丁寧語", role: "聞",
    reply: "ちょうどいいです／{少:すこ}し{大:おお}きいです",
    note: "いかが = versi sopan dari どう. Kosakata: きつい (sempit), ゆるい (longgar), {丈:たけ}が{長:なが}い (terlalu panjang)."
  },
  {
    jp: "{少:すこ}し{考:かんが}えます", romaji: "sukoshi kangaemasu",
    id: "Saya pikir-pikir dulu",
    type: "丁寧語", role: "話",
    note: "Cara halus untuk tidak jadi membeli. Staf Jepang tidak akan memaksa."
  },
  {
    jp: "これにします", romaji: "kore ni shimasu",
    id: "Saya ambil yang ini",
    type: "丁寧語", role: "話",
    note: "Saat memutuskan pilihan setelah membandingkan. Terdengar lebih natural daripada 「これをください」 di toko baju/elektronik."
  },
  {
    jp: "ご{自宅用:じたくよう}ですか", romaji: "gojitakuyou desu ka",
    id: "Untuk dipakai sendiri?",
    type: "丁寧語", role: "聞",
    reply: "はい、{自宅用:じたくよう}です／プレゼント{用:よう}です",
    note: "Kalau kamu jawab hadiah, toko akan menawarkan bungkus kado (ラッピング) — sering gratis di department store."
  },
  {
    jp: "プレゼント{用:よう}に{包:つつ}んでいただけますか", romaji: "purezento you ni tsutsunde itadakemasu ka",
    id: "Bisakah dibungkus untuk hadiah?",
    type: "謙譲語", role: "話",
    note: "Bisa ditambah: 「{値札:ねふだ}を{取:と}っていただけますか」 (tolong copot label harganya)."
  },
  {
    jp: "これ、{昨日:きのう}{買:か}ったんですが、{交換:こうかん}していただけますか", romaji: "kore, kinou kattan desu ga, koukan shite itadakemasu ka",
    id: "Ini saya beli kemarin, bisakah ditukar?",
    type: "謙譲語", role: "話",
    note: "Bawa struk. {交換:こうかん} = tukar, {返品:へんぴん} = kembalikan (refund). Makanan & pakaian dalam biasanya tidak bisa dikembalikan."
  },
  {
    jp: "{取:と}り{寄:よ}せになります", romaji: "toriyose ni narimasu",
    id: "Harus kami pesankan dulu (stok dari tempat lain)",
    type: "丁寧語", role: "聞",
    reply: "どのくらいかかりますか",
    note: "Barang tidak ada di toko, tapi bisa didatangkan dari gudang/cabang lain. Tanyakan lamanya."
  },
  {
    jp: "{取:と}り{置:お}きしていただけますか", romaji: "torioki shite itadakemasu ka",
    id: "Bisakah barangnya disimpankan (di-hold) dulu?",
    type: "謙譲語", role: "話",
    note: "Misalnya kamu perlu ambil uang dulu. Sebutkan kapan kembali: 「{夕方:ゆうがた}までに{来:き}ます」."
  },
  {
    jp: "{保証:ほしょう}は{何年:なんねん}ですか", romaji: "hoshou wa nannen desu ka",
    id: "Garansinya berapa tahun?",
    type: "丁寧語", role: "話",
    note: "Toko elektronik besar menawarkan {延長保証:えんちょうほしょう} (garansi tambahan). Simpan {保証書:ほしょうしょ} (kartu garansi)."
  },
  {
    jp: "{一括:いっかつ}でよろしいですか", romaji: "ikkatsu de yoroshii desu ka",
    id: "Bayar sekaligus (tidak dicicil)?",
    type: "丁寧語", role: "聞",
    reply: "はい、{一括:いっかつ}で",
    note: "Saat bayar kartu kredit. {分割:ぶんかつ} = cicilan."
  },
  {
    jp: "{暗証番号:あんしょうばんごう}の{入力:にゅうりょく}をお{願:ねが}いします", romaji: "anshou bangou no nyuuryoku wo onegai shimasu",
    id: "Silakan masukkan PIN",
    type: "丁寧語", role: "聞",
    note: "Tutupi tanganmu saat mengetik PIN. Staf tidak akan pernah menanyakan PIN secara lisan."
  },
  {
    jp: "カードをお{預:あず}かりします", romaji: "kaado wo oazukari shimasu",
    id: "Saya terima kartunya sebentar",
    type: "謙譲語", role: "聞",
    note: "{預:あず}かる = menerima untuk sementara. Setelah selesai: 「カードをお{返:かえ}しします」."
  },
  {
    jp: "セルフレジの{使:つか}い{方:かた}が{分:わ}からないんですが", romaji: "serufureji no tsukaikata ga wakaranain desu ga",
    id: "Saya tidak tahu cara memakai kasir mandiri",
    type: "丁寧語", role: "話",
    note: "Atau tekan tombol {呼:よ}び{出:だ}し di layar — staf akan datang. Kalimat 〜んですが menggantung = meminta bantuan secara halus."
  },
  {
    jp: "これ、{賞味期限:しょうみきげん}はいつまでですか", romaji: "kore, shoumi kigen wa itsu made desu ka",
    id: "Ini tanggal kedaluwarsanya sampai kapan?",
    type: "丁寧語", role: "話",
    note: "{賞味期限:しょうみきげん} = paling enak sebelum (masih aman sedikit lewat). {消費期限:しょうひきげん} = batas aman dimakan (jangan lewat!), biasanya di bento & roti."
  },
  {
    jp: "{原材料:げんざいりょう}に{豚:ぶた}は{使:つか}われていますか", romaji: "genzairyou ni buta wa tsukawarete imasu ka",
    id: "Apakah bahannya mengandung babi?",
    type: "丁寧語", role: "話",
    note: "Bagi yang menjaga makanan halal, cek label {原材料名:げんざいりょうめい}: {豚:ぶた}, ポーク, ラード, ゼラチン, {豚脂:とんし}, ポークエキス. Juga {酒:さけ}・みりん untuk alkohol."
  },
  {
    jp: "ハラールの{商品:しょうひん}はありますか", romaji: "haraaru no shouhin wa arimasu ka",
    id: "Ada produk halal?",
    type: "丁寧語", role: "話",
    note: "Supermarket besar dan toko impor ({業務:ぎょうむ}スーパー, toko halal) di kota besar mulai menyediakan. Komunitas Indonesia biasanya tahu toko halal terdekat."
  },
  {
    jp: "「{賞味期限:しょうみきげん}」と「{消費期限:しょうひきげん}」は{違:ちが}う", romaji: "\"shoumi kigen\" to \"shouhi kigen\" wa chigau",
    id: "'Shoumi kigen' dan 'shouhi kigen' itu berbeda",
    type: "注意", role: "話",
    note: "{消費期限:しょうひきげん} (makanan cepat basi: bento, sandwich, daging) = jangan dimakan setelah lewat. {賞味期限:しょうみきげん} (snack, mi instan, kaleng) = rasa mungkin menurun, tapi umumnya masih aman."
  }
]);
