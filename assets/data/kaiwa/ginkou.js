/* 銀行 — bank, ATM, kirim uang ke Indonesia */
addCards("銀行", [
  {
    jp: "{本日:ほんじつ}はどのようなご{用件:ようけん}でしょうか", romaji: "honjitsu wa dono you na goyouken deshou ka",
    id: "Ada keperluan apa hari ini?",
    type: "丁寧語", role: "聞",
    reply: "{口座:こうざ}を{開:ひら}きたいんですが",
    note: "Petugas di pintu masuk bank menanyakan keperluanmu lalu memberi nomor antrean."
  },
  {
    jp: "{口座:こうざ}を{開:ひら}きたいんですが", romaji: "kouza wo hirakitain desu ga",
    id: "Saya ingin membuka rekening",
    type: "丁寧語", role: "話",
    note: "Peserta magang biasanya dibantu perusahaan/kumiai; ゆうちょ{銀行:ぎんこう} (bank pos) paling umum. Bawa {在留:ざいりゅう}カード, nomor telepon Jepang, dan kadang kartu karyawan."
  },
  {
    jp: "{印鑑:いんかん}はお{持:も}ちですか", romaji: "inkan wa omochi desu ka",
    id: "Apakah Anda membawa stempel nama?",
    type: "尊敬語", role: "聞",
    reply: "いいえ。サインでもいいですか",
    note: "Banyak bank kini menerima tanda tangan untuk orang asing. Kalau perlu, stempel nama bisa dibuat di toko ハンコ (±1.000–3.000円)."
  },
  {
    jp: "ATMの{使:つか}い{方:かた}を{教:おし}えていただけますか", romaji: "ATM no tsukaikata wo oshiete itadakemasu ka",
    id: "Bisakah Anda mengajari cara memakai ATM?",
    type: "謙譲語", role: "話",
    note: "Menu ATM: お{引:ひ}き{出:だ}し (tarik tunai), お{預:あず}け{入:い}れ (setor), お{振込:ふりこみ} (transfer), {残高照会:ざんだかしょうかい} (cek saldo), {通帳記入:つうちょうきにゅう} (cetak buku). Banyak ATM punya tombol English."
  },
  {
    jp: "{通帳:つうちょう}に{記帳:きちょう}したいんですが", romaji: "tsuuchou ni kichou shitain desu ga",
    id: "Saya ingin mencetak (update) buku tabungan",
    type: "丁寧語", role: "話",
    note: "Masukkan buku tabungan ke ATM — transaksi tercetak otomatis. Cek gaji masuk dan potongan di sini."
  },
  {
    jp: "{手数料:てすうりょう}がかかりますが、よろしいですか", romaji: "tesuuryou ga kakarimasu ga, yoroshii desu ka",
    id: "Akan dikenakan biaya, tidak apa-apa?",
    type: "丁寧語", role: "聞",
    reply: "はい／じゃあ、やめておきます",
    note: "ATM di luar jam kerja, akhir pekan, atau ATM konbini sering kena biaya (±110–330円). Tarik tunai di jam gratis untuk menghemat."
  },
  {
    jp: "{海外送金:かいがいそうきん}をしたいんですが", romaji: "kaigai soukin wo shitain desu ga",
    id: "Saya ingin mengirim uang ke luar negeri",
    type: "丁寧語", role: "話",
    note: "Bank biasa mahal & ribet. Banyak pekerja Indonesia memakai layanan remitansi resmi berizin yang lebih murah — tanyakan ke senpai. Hindari 'jasa titip' tanpa izin (ilegal)."
  },
  {
    jp: "キャッシュカードをなくしてしまいました", romaji: "kyasshu kaado wo nakushite shimaimashita",
    id: "Saya kehilangan kartu ATM",
    type: "丁寧語", role: "話",
    note: "Segera telepon bank untuk memblokir: 「{利用:りよう}を{止:と}めてください」. Nomor darurat bank ada di situs/aplikasinya — simpan dari sekarang."
  },
  {
    jp: "{暗証番号:あんしょうばんごう}を{忘:わす}れてしまいました", romaji: "anshou bangou wo wasurete shimaimashita",
    id: "Saya lupa PIN",
    type: "丁寧語", role: "話",
    note: "Salah PIN beberapa kali → kartu terkunci. Datang ke cabang dengan {在留:ざいりゅう}カード dan buku tabungan."
  },
  {
    jp: "{口座:こうざ}を{解約:かいやく}したいんですが", romaji: "kouza wo kaiyaku shitain desu ga",
    id: "Saya ingin menutup rekening",
    type: "丁寧語", role: "話",
    note: "Lakukan sebelum pulang permanen (sisakan rekening hanya jika masih ada gaji/pengembalian pajak yang akan masuk — tanyakan ke perusahaan)."
  },
  {
    jp: "{口座:こうざ}を{人:ひと}に{売:う}る・{貸:か}すのは{犯罪:はんざい}", romaji: "kouza wo hito ni uru, kasu no wa hanzai",
    id: "Menjual atau meminjamkan rekening ke orang lain adalah kejahatan",
    type: "注意", role: "話",
    note: "Banyak orang asing ditangkap karena 'menjual rekening/kartu SIM sebelum pulang'. Rekening itu dipakai untuk penipuan, dan kamu ikut dipidana. Jangan pernah, berapa pun tawarannya."
  },
  {
    jp: "{電話:でんわ}で「ATMへ{行:い}って」は{詐欺:さぎ}", romaji: "denwa de \"ATM e itte\" wa sagi",
    id: "Telepon yang menyuruhmu 'pergi ke ATM' itu penipuan",
    type: "注意", role: "聞",
    note: "Penipu menyamar sebagai polisi, bank, kantor kota, atau imigrasi, lalu meminta transfer, nomor kartu, atau PIN. Petugas resmi TIDAK PERNAH meminta itu. Tutup telepon, tanyakan ke perusahaan/kumiai."
  }
]);
