/* 緊急 — darurat, polisi, ambulans, gempa, barang hilang */
addCards("緊急", [
  {
    jp: "{助:たす}けて!", romaji: "tasukete!",
    id: "Tolong!",
    type: "普通", role: "話",
    note: "Dalam bahaya, teriak keras — jangan khawatir soal sopan santun. Nomor darurat: 110 = polisi, 119 = ambulans & pemadam kebakaran."
  },
  {
    jp: "{火事:かじ}ですか、{救急:きゅうきゅう}ですか", romaji: "kaji desu ka, kyuukyuu desu ka",
    id: "Kebakaran atau darurat medis?",
    type: "丁寧語", role: "聞",
    reply: "{救急:きゅうきゅう}です",
    note: "Pertanyaan PERTAMA operator 119. Jawab satu kata: 「{救急:きゅうきゅう}です」 atau 「{火事:かじ}です」."
  },
  {
    jp: "{救急車:きゅうきゅうしゃ}をお{願:ねが}いします", romaji: "kyuukyuusha wo onegai shimasu",
    id: "Tolong kirim ambulans",
    type: "丁寧語", role: "話",
    note: "Ambulans di Jepang gratis. Setelah itu operator menanyakan alamat, kondisi pasien, dan nomormu."
  },
  {
    jp: "{住所:じゅうしょ}を{教:おし}えてください", romaji: "juusho wo oshiete kudasai",
    id: "Tolong beri tahu alamatnya",
    type: "丁寧語", role: "聞",
    reply: "〇〇{市:し}〇〇{町:ちょう}…です",
    note: "HAFALKAN alamat asrama & tempat kerja dalam bahasa Jepang, simpan di HP. Kalau tidak tahu, sebutkan bangunan/papan nama terdekat."
  },
  {
    jp: "{友達:ともだち}が{倒:たお}れて、{意識:いしき}がありません", romaji: "tomodachi ga taorete, ishiki ga arimasen",
    id: "Teman saya pingsan dan tidak sadarkan diri",
    type: "丁寧語", role: "話",
    note: "Kondisi lain: {息:いき}をしていません (tidak bernapas), {血:ち}が{止:と}まりません (darah tidak berhenti), {動:うご}けません (tidak bisa bergerak)."
  },
  {
    jp: "{血:ち}が{止:と}まりません", romaji: "chi ga tomarimasen",
    id: "Darahnya tidak berhenti",
    type: "丁寧語", role: "話",
    note: "Tekan luka dengan kain bersih sambil menunggu bantuan."
  },
  {
    jp: "{具合:ぐあい}が{悪:わる}いです。{助:たす}けてください", romaji: "guai ga warui desu. tasukete kudasai",
    id: "Saya merasa tidak enak badan. Tolong bantu saya",
    type: "丁寧語", role: "話",
    note: "Ke orang di sekitar atau petugas stasiun/toko saat tiba-tiba sakit di luar."
  },
  {
    jp: "{大丈夫:だいじょうぶ}ですか", romaji: "daijoubu desu ka",
    id: "Anda tidak apa-apa?",
    type: "丁寧語", role: "聞",
    reply: "はい、{大丈夫:だいじょうぶ}です／いいえ、{救急車:きゅうきゅうしゃ}を{呼:よ}んでください",
    note: "Kalau benar-benar butuh bantuan, jangan menjawab 「{大丈夫:だいじょうぶ}です」 karena sungkan."
  },
  {
    jp: "{救急車:きゅうきゅうしゃ}を{呼:よ}ぶか{迷:まよ}ったら#7119", romaji: "kyuukyuusha wo yobu ka mayottara #7119",
    id: "Ragu perlu ambulans atau tidak? Telepon #7119",
    type: "注意", role: "話",
    note: "Layanan konsultasi medis darurat 24 jam (tersedia di banyak prefektur): perawat/dokter membantu menilai apakah perlu ambulans, ke RS sekarang, atau bisa menunggu. Cek apakah daerahmu tersedia."
  },
  {
    jp: "{日本語:にほんご}があまり{話:はな}せません。{通訳:つうやく}をお{願:ねが}いできますか", romaji: "nihongo ga amari hanasemasen. tsuuyaku wo onegai dekimasu ka",
    id: "Saya kurang bisa berbahasa Jepang. Bisakah dibantu penerjemah?",
    type: "謙譲語", role: "話",
    note: "Banyak pusat 110/119 punya layanan penerjemah tiga arah (bahasa Inggris dan beberapa bahasa lain)."
  },
  {
    jp: "{火事:かじ}です!", romaji: "kaji desu!",
    id: "Kebakaran!",
    type: "丁寧語", role: "話",
    note: "Teriakkan untuk memperingatkan orang sekitar, lalu menjauh dan telepon 119."
  },
  {
    jp: "{警察:けいさつ}を{呼:よ}んでください", romaji: "keisatsu wo yonde kudasai",
    id: "Tolong panggil polisi",
    type: "丁寧語", role: "話",
    note: "Atau telepon sendiri ke 110. Untuk hal tidak mendesak (konsultasi), ada nomor #9110."
  },
  {
    jp: "{痴漢:ちかん}です!", romaji: "chikan desu!",
    id: "Ada pelecehan (pelaku cabul)!",
    type: "丁寧語", role: "話",
    note: "Di kereta/keramaian, teriakkan untuk meminta bantuan. Laporkan ke petugas stasiun atau polisi — ini tindak pidana serius di Jepang."
  },
  {
    jp: "{交番:こうばん}はどこですか", romaji: "kouban wa doko desu ka",
    id: "Pos polisi di mana?",
    type: "丁寧語", role: "話",
    note: "{交番:こうばん} = pos polisi kecil di dekat stasiun/persimpangan. Tempat lapor barang hilang, tanya jalan, dan minta bantuan."
  },
  {
    jp: "{財布:さいふ}を{落:お}としてしまいました", romaji: "saifu wo otoshite shimaimashita",
    id: "Dompet saya jatuh/hilang",
    type: "丁寧語", role: "話",
    note: "Ke {交番:こうばん}, isi {遺失届:いしつとどけ} (laporan kehilangan). Di Jepang dompet hilang sangat sering kembali utuh."
  },
  {
    jp: "どこで{落:お}としたか、{心当:こころあ}たりはありますか", romaji: "doko de otoshita ka, kokoroatari wa arimasu ka",
    id: "Ada perkiraan hilangnya di mana?",
    type: "丁寧語", role: "聞",
    reply: "たぶん、{駅:えき}の{近:ちか}くだと{思:おも}います",
    note: "{心当:こころあ}たり = dugaan/perkiraan. Polisi juga akan menanyakan isi dompet dan ciri-cirinya."
  },
  {
    jp: "{自転車:じてんしゃ}を{盗:ぬす}まれました", romaji: "jitensha wo nusumaremashita",
    id: "Sepeda saya dicuri",
    type: "丁寧語", role: "話",
    note: "Bawa nomor {防犯登録:ぼうはんとうろく} sepeda ke {交番:こうばん}. Cek dulu apakah bukan diangkut karena parkir liar ({撤去:てっきょ})."
  },
  {
    jp: "{在留:ざいりゅう}カードを{見:み}せていただけますか", romaji: "zairyuu kaado wo misete itadakemasu ka",
    id: "Boleh saya melihat kartu izin tinggal Anda?",
    type: "謙譲語", role: "聞",
    reply: "はい、どうぞ",
    note: "WAJIB membawa {在留:ざいりゅう}カード ASLI setiap saat (bukan fotokopi/foto). Tidak membawa bisa didenda."
  },
  {
    jp: "{落:お}ち{着:つ}いてください", romaji: "ochitsuite kudasai",
    id: "Tolong tenang",
    type: "丁寧語", role: "聞",
    note: "Ucapan petugas/operator dalam keadaan darurat. Tarik napas, jawab pertanyaan satu per satu."
  },
  {
    jp: "{緊急地震速報:きんきゅうじしんそくほう}です。{強:つよ}い{揺:ゆ}れに{警戒:けいかい}してください", romaji: "kinkyuu jishin sokuhou desu. tsuyoi yure ni keikai shite kudasai",
    id: "Peringatan dini gempa. Waspadai guncangan kuat",
    type: "丁寧語", role: "聞",
    note: "Alarm HP berbunyi keras beberapa detik sebelum gempa. Lindungi kepala, berlindung di bawah meja, jauhi jendela & rak. Jangan berlari keluar saat masih berguncang."
  },
  {
    jp: "{津波警報:つなみけいほう}が{出:で}ました。{高:たか}いところへ{避難:ひなん}してください", romaji: "tsunami keihou ga demashita. takai tokoro e hinan shite kudasai",
    id: "Peringatan tsunami dikeluarkan. Segera mengungsi ke tempat tinggi",
    type: "丁寧語", role: "聞",
    note: "Jangan menunggu melihat air laut — langsung naik ke bukit atau gedung tinggi ({津波避難:つなみひなん}ビル)."
  },
  {
    jp: "{避難所:ひなんじょ}はどこですか", romaji: "hinanjo wa doko desu ka",
    id: "Tempat pengungsian di mana?",
    type: "丁寧語", role: "話",
    note: "Cek {避難所:ひなんじょ} terdekat dari asrama sejak minggu pertama. Aplikasi 'Safety tips' (resmi, multibahasa) memberi peringatan gempa & tsunami."
  },
  {
    jp: "{揺:ゆ}れが{収:おさ}まるまで、{動:うご}かないでください", romaji: "yure ga osamaru made, ugokanaide kudasai",
    id: "Jangan bergerak sampai guncangan berhenti",
    type: "丁寧語", role: "聞",
    note: "Instruksi dari pengeras suara atau petugas. Setelah berhenti, matikan api kompor & buka pintu sebagai jalan keluar."
  }
]);
