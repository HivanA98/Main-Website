/* 役所 — kantor kota (市役所/区役所), imigrasi, pajak, pensiun */
addCards("役所", [
  {
    jp: "{転入届:てんにゅうとどけ}を{出:だ}したいんですが", romaji: "tennyuu todoke wo dashitain desu ga",
    id: "Saya ingin melapor pindah masuk (domisili)",
    type: "丁寧語", role: "話",
    note: "WAJIB dalam 14 hari setelah mulai tinggal di alamat baru. Bawa {在留:ざいりゅう}カード dan paspor. Biasanya didampingi perusahaan/kumiai saat pertama datang."
  },
  {
    jp: "{転入:てんにゅう}の{手続:てつづ}きは、どの{窓口:まどぐち}ですか", romaji: "tennyuu no tetsuzuki wa, dono madoguchi desu ka",
    id: "Pengurusan pindah masuk di loket yang mana?",
    type: "丁寧語", role: "話",
    note: "{窓口:まどぐち} = loket. Ada juga petugas informasi ({案内:あんない}) di dekat pintu masuk."
  },
  {
    jp: "{番号札:ばんごうふだ}をお{取:と}りになって、お{待:ま}ちください", romaji: "bangoufuda wo otori ni natte, omachi kudasai",
    id: "Silakan ambil nomor antrean dan tunggu",
    type: "尊敬語", role: "聞",
    note: "お〜になる = pola sonkeigo. Perhatikan layar nomor; nomor bisa dipanggil tidak berurutan karena jenis layanan berbeda."
  },
  {
    jp: "{3番:さんばん}の{窓口:まどぐち}へお{越:こ}しください", romaji: "sanban no madoguchi e okoshi kudasai",
    id: "Silakan menuju loket nomor 3",
    type: "尊敬語", role: "聞",
    note: "お{越:こ}しください = 'silakan datang/pergi' (sonkeigo dari {来:く}る/{行:い}く). Sering terdengar dari pengeras suara."
  },
  {
    jp: "{本人確認書類:ほんにんかくにんしょるい}をお{願:ねが}いします", romaji: "honnin kakunin shorui wo onegai shimasu",
    id: "Mohon tunjukkan dokumen identitas Anda",
    type: "丁寧語", role: "聞",
    reply: "はい、{在留:ざいりゅう}カードとパスポートです",
    note: "{在留:ざいりゅう}カード adalah identitas utamamu di Jepang. Simpan baik-baik."
  },
  {
    jp: "こちらの{用紙:ようし}にご{記入:きにゅう}をお{願:ねが}いします", romaji: "kochira no youshi ni gokinyuu wo onegai shimasu",
    id: "Mohon isi formulir ini",
    type: "尊敬語", role: "聞",
    reply: "{書:か}き{方:かた}を{教:おし}えていただけますか",
    note: "Lihat {記入例:きにゅうれい} (contoh pengisian) yang biasanya ditempel di meja tulis."
  },
  {
    jp: "{書:か}き{方:かた}を{教:おし}えていただけますか", romaji: "kakikata wo oshiete itadakemasu ka",
    id: "Bisakah Anda mengajari cara mengisinya?",
    type: "謙譲語", role: "話",
    note: "Petugas kantor kota biasanya sangat sabar. Tunjuk bagian yang tidak kamu pahami: 「ここは{何:なに}を{書:か}けばいいですか」."
  },
  {
    jp: "{住所:じゅうしょ}・{氏名:しめい}・{生年月日:せいねんがっぴ}をご{記入:きにゅう}ください", romaji: "juusho, shimei, seinengappi wo gokinyuu kudasai",
    id: "Silakan isi alamat, nama lengkap, dan tanggal lahir",
    type: "尊敬語", role: "聞",
    note: "Kosakata formulir: {氏名:しめい} (nama lengkap), フリガナ (cara baca dalam katakana), {性別:せいべつ}, {国籍:こくせき}, {電話番号:でんわばんごう}, {署名:しょめい} (tanda tangan)."
  },
  {
    jp: "ここに{署名:しょめい}をお{願:ねが}いします", romaji: "koko ni shomei wo onegai shimasu",
    id: "Mohon tanda tangan di sini",
    type: "丁寧語", role: "聞",
    note: "Kadang diminta {印鑑:いんかん} (stempel nama). Untuk orang asing, tanda tangan umumnya diterima sebagai pengganti."
  },
  {
    jp: "{令和:れいわ}{9年:きゅうねん}は2027{年:ねん}", romaji: "reiwa kyuunen wa 2027 nen",
    id: "Tahun Reiwa 9 = tahun 2027",
    type: "注意", role: "聞",
    note: "Formulir resmi sering memakai tahun Jepang ({和暦:われき}). Rumus: tahun Masehi − 2018 = tahun Reiwa. Kelahiran 1989–2018 = {平成:へいせい} (tahun Masehi − 1988)."
  },
  {
    jp: "{在留:ざいりゅう}カードの{住所:じゅうしょ}を{変更:へんこう}したいんですが", romaji: "zairyuu kaado no juusho wo henkou shitain desu ga",
    id: "Saya ingin mengubah alamat di kartu izin tinggal",
    type: "丁寧語", role: "話",
    note: "Dilakukan di kantor kota bersamaan dengan {転入届:てんにゅうとどけ}; alamat baru dicetak di balik kartu."
  },
  {
    jp: "{住民票:じゅうみんひょう}を{一通:いっつう}お{願:ねが}いします", romaji: "juuminhyou wo ittsuu onegai shimasu",
    id: "Tolong satu lembar surat keterangan domisili",
    type: "丁寧語", role: "話",
    note: "{通:つう} = satuan dokumen. {住民票:じゅうみんひょう} bisa juga dicetak di mesin konbini dengan マイナンバーカード (biasanya lebih murah)."
  },
  {
    jp: "マイナンバーカードを{作:つく}りたいんですが", romaji: "mainanbaa kaado wo tsukuritain desu ga",
    id: "Saya ingin membuat kartu My Number",
    type: "丁寧語", role: "話",
    note: "Nomor My Number otomatis diberikan setelah {転入届:てんにゅうとどけ}; kartunya perlu diajukan terpisah (gratis, jadi ±1 bulan). Berguna sebagai kartu asuransi & cetak dokumen di konbini."
  },
  {
    jp: "{国民健康保険:こくみんけんこうほけん}の{手続:てつづ}きはお{済:す}みですか", romaji: "kokumin kenkou hoken no tetsuzuki wa osumi desu ka",
    id: "Sudah mengurus asuransi kesehatan nasional?",
    type: "尊敬語", role: "聞",
    reply: "{会社:かいしゃ}の{健康保険:けんこうほけん}に{入:はい}っています",
    note: "Peserta magang yang sudah bekerja umumnya ikut asuransi perusahaan ({社会保険:しゃかいほけん}), bukan {国保:こくほ}. Pastikan ke perusahaan/kumiai agar tidak dobel."
  },
  {
    jp: "{少々:しょうしょう}お{時間:じかん}がかかりますが、よろしいですか", romaji: "shoushou ojikan ga kakarimasu ga, yoroshii desu ka",
    id: "Ini akan memakan sedikit waktu, tidak apa-apa?",
    type: "丁寧語", role: "聞",
    reply: "はい、{待:ま}ちます",
    note: "Di awal April (musim pindahan) antrean kantor kota bisa sangat panjang — datang pagi."
  },
  {
    jp: "{手数料:てすうりょう}は{300円:さんびゃくえん}です", romaji: "tesuuryou wa sanbyaku en desu",
    id: "Biaya administrasinya 300 yen",
    type: "丁寧語", role: "聞",
    note: "Angka hanya contoh — besaran biaya berbeda tiap kota. Banyak loket hanya menerima tunai."
  },
  {
    jp: "{後日:ごじつ}、{郵送:ゆうそう}でお{送:おく}りします", romaji: "gojitsu, yuusou de ookuri shimasu",
    id: "Kami akan mengirimkannya lewat pos di kemudian hari",
    type: "謙譲語", role: "聞",
    note: "Pastikan nama tercantum di kotak pos kamar/asrama, supaya surat tidak dikembalikan."
  },
  {
    jp: "{通訳:つうやく}サービスはありますか", romaji: "tsuuyaku saabisu wa arimasu ka",
    id: "Apakah ada layanan penerjemah?",
    type: "丁寧語", role: "話",
    note: "Banyak kota punya tablet penerjemah atau layanan telepon multibahasa; beberapa menyediakan bahasa Indonesia."
  },
  {
    jp: "ゴミの{出:だ}し{方:かた}のパンフレットはありますか", romaji: "gomi no dashikata no panfuretto wa arimasu ka",
    id: "Ada brosur cara membuang sampah?",
    type: "丁寧語", role: "話",
    note: "Aturan sampah berbeda tiap kota. Ambil kalender sampah (ゴミカレンダー) — sering tersedia dalam beberapa bahasa atau lewat aplikasi kota."
  },
  {
    jp: "{税金:ぜいきん}の{通知:つうち}が{届:とど}いたんですが、これは{何:なん}ですか", romaji: "zeikin no tsuuchi ga todoitan desu ga, kore wa nan desu ka",
    id: "Saya menerima surat pajak, ini apa ya?",
    type: "丁寧語", role: "話",
    note: "{住民税:じゅうみんぜい} (pajak penduduk) dihitung dari penghasilan tahun sebelumnya, jadi mulai ditagih di tahun ke-2. Biasanya dipotong dari gaji ({特別徴収:とくべつちょうしゅう})."
  },
  {
    jp: "{在留期間:ざいりゅうきかん}の{更新:こうしん}をしたいんですが", romaji: "zairyuu kikan no koushin wo shitain desu ga",
    id: "Saya ingin memperpanjang masa izin tinggal",
    type: "丁寧語", role: "話",
    note: "Di kantor imigrasi ({入管:にゅうかん}). Bisa diajukan mulai sekitar 3 bulan sebelum habis. Untuk peserta magang biasanya diurus bersama perusahaan/kumiai."
  },
  {
    jp: "{帰国:きこく}するので、{転出届:てんしゅつとどけ}を{出:だ}したいんですが", romaji: "kikoku suru node, tenshutsu todoke wo dashitain desu ga",
    id: "Saya akan pulang ke negara asal, ingin melapor pindah keluar",
    type: "丁寧語", role: "話",
    note: "Lakukan sebelum pulang permanen. Sekaligus urus pajak, asuransi, dan tutup rekening/HP."
  },
  {
    jp: "{年金:ねんきん}の{脱退一時金:だったいいちじきん}について{聞:き}きたいんですが", romaji: "nenkin no dattai ichijikin ni tsuite kikitain desu ga",
    id: "Saya ingin bertanya tentang pengembalian iuran pensiun",
    type: "丁寧語", role: "話",
    note: "Setelah pulang, sebagian iuran {年金:ねんきん} bisa diklaim kembali ({脱退一時金:だったいいちじきん}) — ajukan dalam 2 tahun setelah meninggalkan Jepang. Uang yang lumayan, jangan sampai lupa!"
  }
]);
