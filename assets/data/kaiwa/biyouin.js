/* 美容院 — salon & barbershop (理容室/床屋) */
addCards("美容院", [
  {
    jp: "カットをお{願:ねが}いしたいんですが", romaji: "katto wo onegai shitain desu ga",
    id: "Saya ingin potong rambut",
    type: "謙譲語", role: "話",
    note: "Barbershop murah (±1.000–2.000円) cepat & tanpa keramas. Salon ({美容院:びよういん}) lebih mahal dan biasanya perlu reservasi."
  },
  {
    jp: "ご{予約:よやく}はされていますか", romaji: "goyoyaku wa sarete imasu ka",
    id: "Apakah sudah reservasi?",
    type: "尊敬語", role: "聞",
    reply: "いいえ、していません／はい、{3時:さんじ}に{予約:よやく}した〇〇です",
    note: "される = sonkeigo dari する (bentuk 〜れる)."
  },
  {
    jp: "ご{指名:しめい}はございますか", romaji: "goshimei wa gozaimasu ka",
    id: "Ada penata rambut pilihan?",
    type: "丁寧語", role: "聞",
    reply: "いいえ、{特:とく}にありません",
    note: "{指名:しめい} = memilih stylist tertentu (kadang ada biaya tambahan)."
  },
  {
    jp: "{今日:きょう}はどうなさいますか", romaji: "kyou wa dou nasaimasu ka",
    id: "Hari ini mau model seperti apa?",
    type: "尊敬語", role: "聞",
    reply: "この{写真:しゃしん}みたいにしてください",
    note: "Pertanyaan pembuka penata rambut."
  },
  {
    jp: "この{写真:しゃしん}みたいにしてください", romaji: "kono shashin mitai ni shite kudasai",
    id: "Tolong buat seperti di foto ini",
    type: "丁寧語", role: "話",
    note: "Cara paling aman menghindari salah paham. Simpan foto model rambut favoritmu di HP."
  },
  {
    jp: "{全体的:ぜんたいてき}に{3:さん}センチぐらい{切:き}ってください", romaji: "zentaiteki ni san senchi gurai kitte kudasai",
    id: "Tolong potong sekitar 3 cm di semua bagian",
    type: "丁寧語", role: "話",
    note: "{全体的:ぜんたいてき}に = secara keseluruhan. Tunjukkan panjangnya dengan jari juga."
  },
  {
    jp: "{横:よこ}と{後:うし}ろは{短:みじか}めにしてください", romaji: "yoko to ushiro wa mijikame ni shite kudasai",
    id: "Samping dan belakang tolong dibuat agak pendek",
    type: "丁寧語", role: "話",
    note: "〜め = 'agak ~': {短:みじか}め (agak pendek), {長:なが}め (agak panjang). {上:うえ} = bagian atas, {襟足:えりあし} = rambut di tengkuk."
  },
  {
    jp: "{刈:か}り{上:あ}げはバリカンの{6:ろく}ミリでお{願:ねが}いします", romaji: "kariage wa barikan no roku miri de onegai shimasu",
    id: "Bagian bawah dicukur pakai clipper 6 mm, tolong",
    type: "丁寧語", role: "話",
    note: "{刈:か}り{上:あ}げ = undercut/tipis bawah. バリカン = clipper, ukuran disebut dalam ミリ."
  },
  {
    jp: "{前髪:まえがみ}は{眉:まゆ}くらいの{長:なが}さでお{願:ねが}いします", romaji: "maegami wa mayu kurai no nagasa de onegai shimasu",
    id: "Poninya sepanjang alis, tolong",
    type: "丁寧語", role: "話",
    note: "Patokan panjang lain: {目:め}にかからない{長:なが}さ (tidak menutupi mata), {耳:みみ}が{出:で}るくらい (telinga terlihat)."
  },
  {
    jp: "{髪:かみ}をすいてください", romaji: "kami wo suite kudasai",
    id: "Tolong ditipiskan (volumenya dikurangi)",
    type: "丁寧語", role: "話",
    note: "すく = menipiskan volume rambut tanpa mengurangi panjang. Cocok untuk rambut tebal di musim panas."
  },
  {
    jp: "シャンプーはされますか", romaji: "shanpuu wa saremasu ka",
    id: "Mau sekalian keramas?",
    type: "尊敬語", role: "聞",
    reply: "はい、お{願:ねが}いします／カットだけで{大丈夫:だいじょうぶ}です",
    note: "Di barbershop murah, keramas sering tidak tersedia — rambut dibersihkan dengan penyedot."
  },
  {
    jp: "お{湯:ゆ}の{温度:おんど}は{大丈夫:だいじょうぶ}ですか", romaji: "oyu no ondo wa daijoubu desu ka",
    id: "Suhu airnya tidak apa-apa?",
    type: "丁寧語", role: "聞",
    reply: "ちょうどいいです／{少:すこ}し{熱:あつ}いです",
    note: "Ditanyakan saat keramas."
  },
  {
    jp: "かゆいところはございませんか", romaji: "kayui tokoro wa gozaimasen ka",
    id: "Ada bagian yang gatal?",
    type: "丁寧語", role: "聞",
    reply: "{大丈夫:だいじょうぶ}です",
    note: "Pertanyaan 'legendaris' di salon Jepang. Jawaban standar hampir semua orang: 「{大丈夫:だいじょうぶ}です」."
  },
  {
    jp: "こんな{感:かん}じでいかがでしょうか", romaji: "konna kanji de ikaga deshou ka",
    id: "Bagaimana dengan hasil seperti ini?",
    type: "丁寧語", role: "聞",
    reply: "ちょうどいいです。ありがとうございます",
    note: "Penata rambut menunjukkan bagian belakang dengan cermin. Kalau mau diubah: 「もう{少:すこ}し{短:みじか}くしてください」."
  },
  {
    jp: "ワックスなどおつけしますか", romaji: "wakkusu nado otsuke shimasu ka",
    id: "Mau dipakaikan wax atau semacamnya?",
    type: "謙譲語", role: "聞",
    reply: "いえ、{大丈夫:だいじょうぶ}です",
    note: "Kalau setelah potong mau langsung kerja/acara, boleh minta 「お{願:ねが}いします」."
  },
  {
    jp: "{髭:ひげ}も{剃:そ}っていただけますか", romaji: "hige mo sotte itadakemasu ka",
    id: "Bisakah sekalian dicukur jenggotnya?",
    type: "謙譲語", role: "話",
    note: "Bercukur hanya bisa di barbershop ({理容室:りようしつ}/{床屋:とこや}); salon ({美容院:びよういん}) secara aturan tidak melayani cukur wajah."
  }
]);
