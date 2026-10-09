/* 携帯 — kontrak HP, SIM, kuota, internet */
addCards("携帯", [
  {
    jp: "スマホの{契約:けいやく}をしたいんですが", romaji: "sumaho no keiyaku wo shitain desu ga",
    id: "Saya ingin membuat kontrak HP",
    type: "丁寧語", role: "話",
    note: "Bawa {在留:ざいりゅう}カード, kartu bank/kartu kredit untuk pembayaran bulanan. Proses di toko bisa 1–2 jam."
  },
  {
    jp: "{一番:いちばん}{安:やす}いプランはどれですか", romaji: "ichiban yasui puran wa dore desu ka",
    id: "Paket yang paling murah yang mana?",
    type: "丁寧語", role: "話",
    note: "{格安:かくやす}SIM (provider murah) bisa jauh lebih hemat daripada operator besar. Hati-hati dengan tambahan opsi berbayar yang ditawarkan di toko."
  },
  {
    jp: "SIMだけの{契約:けいやく}はできますか", romaji: "SIM dake no keiyaku wa dekimasu ka",
    id: "Bisa kontrak kartu SIM saja (tanpa beli HP)?",
    type: "丁寧語", role: "話",
    note: "Kalau HP dari Indonesia sudah unlocked & mendukung frekuensi Jepang, cukup beli SIM/eSIM."
  },
  {
    jp: "{余計:よけい}なオプションは{要:い}りません", romaji: "yokei na opushon wa irimasen",
    id: "Saya tidak perlu opsi tambahan",
    type: "丁寧語", role: "話",
    note: "Toko sering menambahkan langganan video/asuransi 'gratis bulan pertama' yang lalu berbayar. Tegas tapi sopan: 「オプションは{全部:ぜんぶ}{外:はず}してください」."
  },
  {
    jp: "データ{容量:ようりょう}はどのくらいですか", romaji: "deeta youryou wa dono kurai desu ka",
    id: "Kuota datanya berapa banyak?",
    type: "丁寧語", role: "話",
    note: "Sehari-hari orang menyebut kuota dengan ギガ: 「ギガが{足:た}りない」 = kuota tidak cukup. Asrama yang punya Wi-Fi bisa menghemat paket."
  },
  {
    jp: "{月々:つきづき}のお{支払:しはら}いは、クレジットカードか{口座振替:こうざふりかえ}になります", romaji: "tsukizuki no oshiharai wa, kurejitto kaado ka kouza furikae ni narimasu",
    id: "Pembayaran bulanan dengan kartu kredit atau debit otomatis rekening",
    type: "丁寧語", role: "聞",
    note: "{口座振替:こうざふりかえ} = auto-debit dari rekening bank. Pastikan saldo cukup di tanggal penarikan."
  },
  {
    jp: "{在留期間:ざいりゅうきかん}によっては、{分割払:ぶんかつばら}いができない{場合:ばあい}がございます", romaji: "zairyuu kikan ni yotte wa, bunkatsubarai ga dekinai baai ga gozaimasu",
    id: "Tergantung masa izin tinggal, pembayaran cicilan mungkin tidak bisa",
    type: "丁寧語", role: "聞",
    note: "Cicilan HP biasanya 24–48 bulan; jika izin tinggalmu lebih pendek, mungkin harus bayar lunas."
  },
  {
    jp: "{解約:かいやく}したいんですが、{違約金:いやくきん}はかかりますか", romaji: "kaiyaku shitain desu ga, iyakukin wa kakarimasu ka",
    id: "Saya ingin berhenti berlangganan, apakah ada denda?",
    type: "丁寧語", role: "話",
    note: "Putus kontrak sebelum pulang. Tagihan yang tidak dibayar bisa tercatat dan menyulitkan saat kembali ke Jepang."
  },
  {
    jp: "{画面:がめん}が{割:わ}れてしまったんですが、{修理:しゅうり}できますか", romaji: "gamen ga warete shimattan desu ga, shuuri dekimasu ka",
    id: "Layarnya pecah, apakah bisa diperbaiki?",
    type: "丁寧語", role: "話",
    note: "Tanyakan juga: 「どのくらいかかりますか」 (berapa lama/berapa biaya?) dan 「データは{消:き}えますか」 (apakah data hilang?)."
  },
  {
    jp: "Wi-Fiのパスワードを{教:おし}えていただけますか", romaji: "Wi-Fi no pasuwaado wo oshiete itadakemasu ka",
    id: "Bisakah Anda memberi tahu password Wi-Fi?",
    type: "謙譲語", role: "話",
    note: "Orang Jepang menyebut Wi-Fi 'waifai'. Banyak kafe/konbini punya Wi-Fi gratis dengan registrasi email."
  },
  {
    jp: "{留守番電話:るすばんでんわ}サービスに{接続:せつぞく}します", romaji: "rusuban denwa saabisu ni setsuzoku shimasu",
    id: "Akan disambungkan ke kotak suara",
    type: "丁寧語", role: "聞",
    note: "Saat teleponmu tidak diangkat. Tinggalkan pesan setelah bunyi 'pi': nama, keperluan, nomor teleponmu."
  },
  {
    jp: "{知:し}らない{番号:ばんごう}からのSMSのリンクは{開:ひら}かない", romaji: "shiranai bangou kara no SMS no rinku wa hirakanai",
    id: "Jangan buka link SMS dari nomor tak dikenal",
    type: "注意", role: "聞",
    note: "SMS palsu atas nama kurir ('paket tidak bisa diantar'), bank, atau operator sangat sering. Kurir resmi tidak meminta data kartu lewat SMS."
  }
]);
