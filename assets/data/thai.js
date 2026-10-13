/* Berkas ini DIBUAT OTOMATIS oleh tools/build_web.py.
   Jangan disunting langsung; sunting data/*.json lalu jalankan ulang:
       python tools/build_web.py
   Teks Thai ditulis sebagai escape \uXXXX supaya tidak bergantung
   pada charset yang dikirim peladen. */
"use strict";
const THAI_DATA = {
 "aksara": [
  {
   "id": "kon-\u0e01",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e01",
   "audio": "\u0e01 \u0e44\u0e01\u0e48",
   "title": "\u0e01 \u0e44\u0e01\u0e48 \u2014 ko kai",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e01 \u0e44\u0e01\u0e48 (ko kai) \u2014 'ayam'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "k"
    ],
    [
     "Bunyi akhir",
     "k"
    ]
   ],
   "note": "Kelas tengah. Bunyi k tanpa hembusan udara, seperti k pada 'kaki'. Huruf pertama dalam urutan abjad Thai, dan yang pertama dihafal.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e01 (ko kai)?",
    "options": [
     "rendah",
     "tinggi",
     "tengah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e02",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e02",
   "audio": "\u0e02 \u0e44\u0e02\u0e48",
   "title": "\u0e02 \u0e44\u0e02\u0e48 \u2014 kho khai",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e02 \u0e44\u0e02\u0e48 (kho khai) \u2014 'telur'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "kh"
    ],
    [
     "Bunyi akhir",
     "k"
    ]
   ],
   "note": "Kelas tinggi. Bunyi kh dengan hembusan, seperti kh pada 'khusus'. Bandingkan dengan \u0e04 yang bunyinya sama tetapi kelasnya rendah, sehingga nadanya berbeda.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e02 (kho khai)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e04",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e04",
   "audio": "\u0e04 \u0e04\u0e27\u0e32\u0e22",
   "title": "\u0e04 \u0e04\u0e27\u0e32\u0e22 \u2014 kho khwai",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e04 \u0e04\u0e27\u0e32\u0e22 (kho khwai) \u2014 'kerbau'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "kh"
    ],
    [
     "Bunyi akhir",
     "k"
    ]
   ],
   "note": "Kelas rendah. Bunyinya sama dengan \u0e02. Yang membedakan keduanya bukan bunyi, melainkan nada yang dihasilkan: \u0e02\u0e32 = kh\u01cea (naik), \u0e04\u0e32 = khaa (sedang).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e04 (kho khwai)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e07",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e07",
   "audio": "\u0e07 \u0e07\u0e39",
   "title": "\u0e07 \u0e07\u0e39 \u2014 ngo ngu",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e07 \u0e07\u0e39 (ngo ngu) \u2014 'ular'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "ng"
    ],
    [
     "Bunyi akhir",
     "ng"
    ]
   ],
   "note": "Kelas rendah. Bunyi ng, dan dalam bahasa Thailand bunyi ng bisa berada di AWAL kata. Penutur bahasa Indonesia terbantu di sini: 'ngeri', 'ngilu' sudah memakai bunyi itu di awal.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e07 (ngo ngu)?",
    "options": [
     "tengah",
     "rendah",
     "tinggi"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e08",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e08",
   "audio": "\u0e08 \u0e08\u0e32\u0e19",
   "title": "\u0e08 \u0e08\u0e32\u0e19 \u2014 cho chan",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e08 \u0e08\u0e32\u0e19 (cho chan) \u2014 'piring'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "ch"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tengah. Bunyinya mirip c pada 'cari', tanpa hembusan. Alih huruf RTGS menulisnya 'ch', padahal ia tidak berhembus seperti \u0e0a.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e08 (cho chan)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e14",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e14",
   "audio": "\u0e14 \u0e40\u0e14\u0e47\u0e01",
   "title": "\u0e14 \u0e40\u0e14\u0e47\u0e01 \u2014 do dek",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e14 \u0e40\u0e14\u0e47\u0e01 (do dek) \u2014 'anak'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "d"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tengah. Bunyi d seperti pada 'dua'. Sebagai konsonan akhir bunyinya menjadi -t yang tertahan (tidak dilepas).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e14 (do dek)?",
    "options": [
     "tengah",
     "rendah",
     "tinggi"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e15",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e15",
   "audio": "\u0e15 \u0e40\u0e15\u0e48\u0e32",
   "title": "\u0e15 \u0e40\u0e15\u0e48\u0e32 \u2014 to tao",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e15 \u0e40\u0e15\u0e48\u0e32 (to tao) \u2014 'kura-kura'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "t"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tengah. Bunyi t TANPA hembusan; bandingkan \u0e16 dan \u0e17 yang berhembus. Perbedaan hembusan ini membedakan arti kata, jadi perlu dibiasakan sejak awal.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e15 (to tao)?",
    "options": [
     "tengah",
     "tinggi",
     "rendah"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e19",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e19",
   "audio": "\u0e19 \u0e2b\u0e19\u0e39",
   "title": "\u0e19 \u0e2b\u0e19\u0e39 \u2014 no nu",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e19 \u0e2b\u0e19\u0e39 (no nu) \u2014 'tikus'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "n"
    ],
    [
     "Bunyi akhir",
     "n"
    ]
   ],
   "note": "Kelas rendah. Bunyi n. Salah satu dari sembilan konsonan nyaring yang bisa dipimpin oleh \u0e2b (\u0e2b\u0e19) agar kelasnya berubah menjadi tinggi.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e19 (no nu)?",
    "options": [
     "tengah",
     "rendah",
     "tinggi"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e1a",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e1a",
   "audio": "\u0e1a \u0e43\u0e1a\u0e44\u0e21\u0e49",
   "title": "\u0e1a \u0e43\u0e1a\u0e44\u0e21\u0e49 \u2014 bo baimai",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e1a \u0e43\u0e1a\u0e44\u0e21\u0e49 (bo baimai) \u2014 'daun'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "b"
    ],
    [
     "Bunyi akhir",
     "p"
    ]
   ],
   "note": "Kelas tengah. Bunyi b. Sebagai konsonan akhir bunyinya -p tertahan: \u0e02\u0e2d\u0e1a = kh\u00e0wp.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e1a (bo baimai)?",
    "options": [
     "tinggi",
     "tengah",
     "rendah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e1b",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e1b",
   "audio": "\u0e1b \u0e1b\u0e25\u0e32",
   "title": "\u0e1b \u0e1b\u0e25\u0e32 \u2014 po pla",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e1b \u0e1b\u0e25\u0e32 (po pla) \u2014 'ikan'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "p"
    ],
    [
     "Bunyi akhir",
     "p"
    ]
   ],
   "note": "Kelas tengah. Bunyi p tanpa hembusan. Jangan dikacaukan dengan \u0e1c dan \u0e1e yang berhembus, atau dengan \u0e1a (b).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e1b (po pla)?",
    "options": [
     "rendah",
     "tinggi",
     "tengah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e21",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e21",
   "audio": "\u0e21 \u0e21\u0e49\u0e32",
   "title": "\u0e21 \u0e21\u0e49\u0e32 \u2014 mo ma",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e21 \u0e21\u0e49\u0e32 (mo ma) \u2014 'kuda'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "m"
    ],
    [
     "Bunyi akhir",
     "m"
    ]
   ],
   "note": "Kelas rendah. Bunyi m.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e21 (mo ma)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e2d",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 1,
   "th": "\u0e2d",
   "audio": "\u0e2d \u0e2d\u0e48\u0e32\u0e07",
   "title": "\u0e2d \u0e2d\u0e48\u0e32\u0e07 \u2014 o ang",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e2d \u0e2d\u0e48\u0e32\u0e07 (o ang) \u2014 'baskom'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "-"
    ],
    [
     "Bunyi akhir",
     "tidak dipakai sebagai akhir"
    ]
   ],
   "note": "Kelas tengah, tetapi tidak punya bunyi konsonan sendiri. Dua tugasnya: menjadi tumpuan vokal yang perlu konsonan awal (\u0e2d\u0e32\u0e2b\u0e32\u0e23), dan menjadi bagian vokal \u25cc\u0e2d, \u0e40\u25cc\u0e2d, \u0e40\u25cc\u0e37\u0e2d.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e2d (o ang)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e0a",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e0a",
   "audio": "\u0e0a \u0e0a\u0e49\u0e32\u0e07",
   "title": "\u0e0a \u0e0a\u0e49\u0e32\u0e07 \u2014 cho chang",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e0a \u0e0a\u0e49\u0e32\u0e07 (cho chang) \u2014 'gajah'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "ch"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas rendah. Bunyi ch berhembus, seperti ch pada 'cheese'. Bandingkan \u0e08 yang tidak berhembus.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e0a (cho chang)?",
    "options": [
     "tengah",
     "tinggi",
     "rendah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e0b",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e0b",
   "audio": "\u0e0b \u0e42\u0e0b\u0e48",
   "title": "\u0e0b \u0e42\u0e0b\u0e48 \u2014 so so",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e0b \u0e42\u0e0b\u0e48 (so so) \u2014 'rantai'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "s"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas rendah. Bunyi s. Perhatikan: tiga huruf s lain (\u0e28 \u0e29 \u0e2a) berkelas tinggi, hanya \u0e0b yang berkelas rendah.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e0b (so so)?",
    "options": [
     "tengah",
     "tinggi",
     "rendah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e17",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e17",
   "audio": "\u0e17 \u0e17\u0e2b\u0e32\u0e23",
   "title": "\u0e17 \u0e17\u0e2b\u0e32\u0e23 \u2014 tho thahan",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e17 \u0e17\u0e2b\u0e32\u0e23 (tho thahan) \u2014 'tentara'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "th"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas rendah. Bunyi th berhembus. Bersama \u0e18 \u0e11 \u0e12 membentuk kelompok empat huruf 'th' kelas rendah.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e17 (tho thahan)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e1e",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e1e",
   "audio": "\u0e1e \u0e1e\u0e32\u0e19",
   "title": "\u0e1e \u0e1e\u0e32\u0e19 \u2014 pho phan",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e1e \u0e1e\u0e32\u0e19 (pho phan) \u2014 'baki bertangkai'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "ph"
    ],
    [
     "Bunyi akhir",
     "p"
    ]
   ],
   "note": "Kelas rendah. Bunyi ph berhembus (BUKAN f). \u0e1e, \u0e1c, dan \u0e20 semuanya ph.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e1e (pho phan)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e1f",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e1f",
   "audio": "\u0e1f \u0e1f\u0e31\u0e19",
   "title": "\u0e1f \u0e1f\u0e31\u0e19 \u2014 fo fan",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e1f \u0e1f\u0e31\u0e19 (fo fan) \u2014 'gigi'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "f"
    ],
    [
     "Bunyi akhir",
     "p"
    ]
   ],
   "note": "Kelas rendah. Bunyi f. Inilah huruf f yang sebenarnya, bukan \u0e1e.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e1f (fo fan)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e22",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e22",
   "audio": "\u0e22 \u0e22\u0e31\u0e01\u0e29\u0e4c",
   "title": "\u0e22 \u0e22\u0e31\u0e01\u0e29\u0e4c \u2014 yo yak",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e22 \u0e22\u0e31\u0e01\u0e29\u0e4c (yo yak) \u2014 'raksasa'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "y"
    ],
    [
     "Bunyi akhir",
     "y"
    ]
   ],
   "note": "Kelas rendah. Bunyi y. Sebagai konsonan akhir ia menjadi bagian vokal: \u25cc\u0e32\u0e22 = -aai.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e22 (yo yak)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e23",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e23",
   "audio": "\u0e23 \u0e40\u0e23\u0e37\u0e2d",
   "title": "\u0e23 \u0e40\u0e23\u0e37\u0e2d \u2014 ro ruea",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e23 \u0e40\u0e23\u0e37\u0e2d (ro ruea) \u2014 'perahu'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "r"
    ],
    [
     "Bunyi akhir",
     "n"
    ]
   ],
   "note": "Kelas rendah. Bunyi r bergetar. Dalam percakapan sehari-hari sering dilafalkan seperti l, dan pada gugus seperti \u0e1b\u0e23, \u0e01\u0e23 bahkan sering hilang sama sekali. Ejaannya tetap ditulis.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e23 (ro ruea)?",
    "options": [
     "tengah",
     "tinggi",
     "rendah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e25",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e25",
   "audio": "\u0e25 \u0e25\u0e34\u0e07",
   "title": "\u0e25 \u0e25\u0e34\u0e07 \u2014 lo ling",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e25 \u0e25\u0e34\u0e07 (lo ling) \u2014 'kera'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "l"
    ],
    [
     "Bunyi akhir",
     "n"
    ]
   ],
   "note": "Kelas rendah. Bunyi l. Sebagai konsonan akhir bunyinya menjadi -n: \u0e1c\u0e25 = ph\u01d2n.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e25 (lo ling)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e27",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e27",
   "audio": "\u0e27 \u0e41\u0e2b\u0e27\u0e19",
   "title": "\u0e27 \u0e41\u0e2b\u0e27\u0e19 \u2014 wo waen",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e27 \u0e41\u0e2b\u0e27\u0e19 (wo waen) \u2014 'cincin'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "w"
    ],
    [
     "Bunyi akhir",
     "w"
    ]
   ],
   "note": "Kelas rendah. Bunyi w. Ia juga bisa menjadi bagian vokal (\u25cc\u0e31\u0e27, \u25cc\u0e27\u25cc), sehingga \u0e27 di tengah kata perlu dibaca hati-hati.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e27 (wo waen)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e2a",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 2,
   "th": "\u0e2a",
   "audio": "\u0e2a \u0e40\u0e2a\u0e37\u0e2d",
   "title": "\u0e2a \u0e40\u0e2a\u0e37\u0e2d \u2014 so suea",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e2a \u0e40\u0e2a\u0e37\u0e2d (so suea) \u2014 'harimau'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "s"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tinggi. Bunyi s, huruf s yang paling sering dipakai.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e2a (so suea)?",
    "options": [
     "tinggi",
     "tengah",
     "rendah"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e2b",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 3,
   "th": "\u0e2b",
   "audio": "\u0e2b \u0e2b\u0e35\u0e1a",
   "title": "\u0e2b \u0e2b\u0e35\u0e1a \u2014 ho hip",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e2b \u0e2b\u0e35\u0e1a (ho hip) \u2014 'peti'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "h"
    ],
    [
     "Bunyi akhir",
     "tidak dipakai sebagai akhir"
    ]
   ],
   "note": "Kelas tinggi. Bunyi h. Tugas keduanya lebih penting: bila ditulis di depan konsonan nyaring kelas rendah (\u0e07 \u0e0d \u0e13 \u0e19 \u0e21 \u0e22 \u0e23 \u0e25 \u0e27), \u0e2b TIDAK dibunyikan, dan kelas konsonan di belakangnya berubah menjadi tinggi. \u0e2b\u0e21\u0e32 dibaca m\u01cea, bukan h\u01cemaa.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e2b (ho hip)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e1c",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 3,
   "th": "\u0e1c",
   "audio": "\u0e1c \u0e1c\u0e36\u0e49\u0e07",
   "title": "\u0e1c \u0e1c\u0e36\u0e49\u0e07 \u2014 pho phueng",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e1c \u0e1c\u0e36\u0e49\u0e07 (pho phueng) \u2014 'lebah'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "ph"
    ],
    [
     "Bunyi akhir",
     "tidak dipakai sebagai akhir"
    ]
   ],
   "note": "Kelas tinggi. Bunyi ph berhembus. Pasangan kelas tinggi dari \u0e1e.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e1c (pho phueng)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e1d",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 3,
   "th": "\u0e1d",
   "audio": "\u0e1d \u0e1d\u0e32",
   "title": "\u0e1d \u0e1d\u0e32 \u2014 fo fa",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e1d \u0e1d\u0e32 (fo fa) \u2014 'tutup'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "f"
    ],
    [
     "Bunyi akhir",
     "tidak dipakai sebagai akhir"
    ]
   ],
   "note": "Kelas tinggi. Bunyi f. Pasangan kelas tinggi dari \u0e1f.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e1d (fo fa)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e16",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 3,
   "th": "\u0e16",
   "audio": "\u0e16 \u0e16\u0e38\u0e07",
   "title": "\u0e16 \u0e16\u0e38\u0e07 \u2014 tho thung",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e16 \u0e16\u0e38\u0e07 (tho thung) \u2014 'kantong'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "th"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tinggi. Bunyi th berhembus. Pasangan kelas tinggi dari \u0e17.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e16 (tho thung)?",
    "options": [
     "tengah",
     "tinggi",
     "rendah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e09",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 3,
   "th": "\u0e09",
   "audio": "\u0e09 \u0e09\u0e34\u0e48\u0e07",
   "title": "\u0e09 \u0e09\u0e34\u0e48\u0e07 \u2014 cho ching",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e09 \u0e09\u0e34\u0e48\u0e07 (cho ching) \u2014 'kerincing logam'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "ch"
    ],
    [
     "Bunyi akhir",
     "tidak dipakai sebagai akhir"
    ]
   ],
   "note": "Kelas tinggi. Bunyi ch berhembus. Pasangan kelas tinggi dari \u0e0a. Tidak pernah menjadi konsonan akhir.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e09 (cho ching)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e20",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 3,
   "th": "\u0e20",
   "audio": "\u0e20 \u0e2a\u0e33\u0e40\u0e20\u0e32",
   "title": "\u0e20 \u0e2a\u0e33\u0e40\u0e20\u0e32 \u2014 pho sam-phao",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e20 \u0e2a\u0e33\u0e40\u0e20\u0e32 (pho sam-phao) \u2014 'perahu jung'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "ph"
    ],
    [
     "Bunyi akhir",
     "p"
    ]
   ],
   "note": "Kelas rendah. Bunyi ph. Banyak muncul pada kata serapan Pali-Sanskerta seperti \u0e20\u0e32\u0e29\u0e32 (bahasa).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e20 (pho sam-phao)?",
    "options": [
     "tengah",
     "tinggi",
     "rendah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e18",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 3,
   "th": "\u0e18",
   "audio": "\u0e18 \u0e18\u0e07",
   "title": "\u0e18 \u0e18\u0e07 \u2014 tho thong",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e18 \u0e18\u0e07 (tho thong) \u2014 'bendera'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "th"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas rendah. Bunyi th. Juga lazim pada kata serapan Pali-Sanskerta.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e18 (tho thong)?",
    "options": [
     "rendah",
     "tinggi",
     "tengah"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e2e",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 3,
   "th": "\u0e2e",
   "audio": "\u0e2e \u0e19\u0e01\u0e2e\u0e39\u0e01",
   "title": "\u0e2e \u0e19\u0e01\u0e2e\u0e39\u0e01 \u2014 ho nok-huk",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e2e \u0e19\u0e01\u0e2e\u0e39\u0e01 (ho nok-huk) \u2014 'burung hantu'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "h"
    ],
    [
     "Bunyi akhir",
     "tidak dipakai sebagai akhir"
    ]
   ],
   "note": "Kelas rendah. Bunyi h. Pasangan kelas rendah dari \u0e2b, tetapi jauh lebih jarang dan tidak punya fungsi pemimpin.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e2e (ho nok-huk)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e0d",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 4,
   "th": "\u0e0d",
   "audio": "\u0e0d \u0e2b\u0e0d\u0e34\u0e07",
   "title": "\u0e0d \u0e2b\u0e0d\u0e34\u0e07 \u2014 yo ying",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e0d \u0e2b\u0e0d\u0e34\u0e07 (yo ying) \u2014 'perempuan'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "y"
    ],
    [
     "Bunyi akhir",
     "n"
    ]
   ],
   "note": "Kelas rendah. Bunyi awal y, bunyi akhir -n. Muncul pada kata sehari-hari \u0e1c\u0e39\u0e49\u0e2b\u0e0d\u0e34\u0e07 (perempuan) dan \u0e43\u0e2b\u0e0d\u0e48 (besar).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e0d (yo ying)?",
    "options": [
     "tengah",
     "rendah",
     "tinggi"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e13",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 4,
   "th": "\u0e13",
   "audio": "\u0e13 \u0e40\u0e13\u0e23",
   "title": "\u0e13 \u0e40\u0e13\u0e23 \u2014 no nen",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e13 \u0e40\u0e13\u0e23 (no nen) \u2014 'biksu muda'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "n"
    ],
    [
     "Bunyi akhir",
     "n"
    ]
   ],
   "note": "Kelas rendah. Bunyi n, dipakai pada kata serapan Pali-Sanskerta seperti \u0e04\u0e38\u0e13 (Anda).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e13 (no nen)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e28",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 4,
   "th": "\u0e28",
   "audio": "\u0e28 \u0e28\u0e32\u0e25\u0e32",
   "title": "\u0e28 \u0e28\u0e32\u0e25\u0e32 \u2014 so sala",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e28 \u0e28\u0e32\u0e25\u0e32 (so sala) \u2014 'balai'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "s"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tinggi. Bunyi s pada kata serapan Sanskerta, misalnya \u0e28\u0e32\u0e25\u0e32 (balai).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e28 (so sala)?",
    "options": [
     "tengah",
     "rendah",
     "tinggi"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e29",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 4,
   "th": "\u0e29",
   "audio": "\u0e29 \u0e24\u0e29\u0e35",
   "title": "\u0e29 \u0e24\u0e29\u0e35 \u2014 so rue-si",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e29 \u0e24\u0e29\u0e35 (so rue-si) \u2014 'pertapa'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "s"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tinggi. Bunyi s pada kata serapan Sanskerta, misalnya \u0e20\u0e32\u0e29\u0e32 (bahasa).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e29 (so rue-si)?",
    "options": [
     "tengah",
     "rendah",
     "tinggi"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e2c",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 4,
   "th": "\u0e2c",
   "audio": "\u0e2c \u0e08\u0e38\u0e2c\u0e32",
   "title": "\u0e2c \u0e08\u0e38\u0e2c\u0e32 \u2014 lo chu-la",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e2c \u0e08\u0e38\u0e2c\u0e32 (lo chu-la) \u2014 'layang-layang chula'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "l"
    ],
    [
     "Bunyi akhir",
     "n"
    ]
   ],
   "note": "Kelas rendah. Bunyi l pada kata serapan, misalnya \u0e08\u0e38\u0e2c\u0e32. Jarang.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e2c (lo chu-la)?",
    "options": [
     "tinggi",
     "tengah",
     "rendah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e06",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 4,
   "th": "\u0e06",
   "audio": "\u0e06 \u0e23\u0e30\u0e06\u0e31\u0e07",
   "title": "\u0e06 \u0e23\u0e30\u0e06\u0e31\u0e07 \u2014 kho ra-khang",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e06 \u0e23\u0e30\u0e06\u0e31\u0e07 (kho ra-khang) \u2014 'lonceng besar'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "kh"
    ],
    [
     "Bunyi akhir",
     "k"
    ]
   ],
   "note": "Kelas rendah. Bunyi kh. Sangat jarang; yang paling dikenal \u0e23\u0e30\u0e06\u0e31\u0e07 (lonceng besar).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e06 (kho ra-khang)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e0e",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 5,
   "th": "\u0e0e",
   "audio": "\u0e0e \u0e0a\u0e0e\u0e32",
   "title": "\u0e0e \u0e0a\u0e0e\u0e32 \u2014 do cha-da",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e0e \u0e0a\u0e0e\u0e32 (do cha-da) \u2014 'mahkota penari'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "d"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tengah. Bunyi d, sama dengan \u0e14, tetapi khusus pada kata serapan Pali-Sanskerta dan istilah kerajaan.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e0e (do cha-da)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e0f",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 5,
   "th": "\u0e0f",
   "audio": "\u0e0f \u0e1b\u0e0f\u0e31\u0e01",
   "title": "\u0e0f \u0e1b\u0e0f\u0e31\u0e01 \u2014 to pa-tak",
   "meaning": "kelas tengah (9 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e0f \u0e1b\u0e0f\u0e31\u0e01 (to pa-tak) \u2014 'tombak penggiring'"
    ],
    [
     "Kelas",
     "tengah"
    ],
    [
     "Bunyi awal",
     "t"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tengah. Bunyi t, sama dengan \u0e15, pada kata serapan. Bentuknya mirip \u0e0e, hanya ujungnya berbeda.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e0f (to pa-tak)?",
    "options": [
     "tengah",
     "tinggi",
     "rendah"
    ],
    "answer": 0
   }
  },
  {
   "id": "kon-\u0e10",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 5,
   "th": "\u0e10",
   "audio": "\u0e10 \u0e10\u0e32\u0e19",
   "title": "\u0e10 \u0e10\u0e32\u0e19 \u2014 tho than",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e10 \u0e10\u0e32\u0e19 (tho than) \u2014 'alas, dasar'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "th"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas tinggi. Bunyi th pada kata serapan, misalnya \u0e10\u0e32\u0e19 (alas).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e10 (tho than)?",
    "options": [
     "rendah",
     "tengah",
     "tinggi"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e11",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 5,
   "th": "\u0e11",
   "audio": "\u0e11 \u0e21\u0e13\u0e42\u0e11",
   "title": "\u0e11 \u0e21\u0e13\u0e42\u0e11 \u2014 tho montho",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e11 \u0e21\u0e13\u0e42\u0e11 (tho montho) \u2014 'Montho (nama tokoh)'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "th"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas rendah. Bunyi th pada kata serapan. Sangat jarang.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e11 (tho montho)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e12",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 5,
   "th": "\u0e12",
   "audio": "\u0e12 \u0e1c\u0e39\u0e49\u0e40\u0e12\u0e48\u0e32",
   "title": "\u0e12 \u0e1c\u0e39\u0e49\u0e40\u0e12\u0e48\u0e32 \u2014 tho phu-thao",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e12 \u0e1c\u0e39\u0e49\u0e40\u0e12\u0e48\u0e32 (tho phu-thao) \u2014 'orang tua'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "th"
    ],
    [
     "Bunyi akhir",
     "t"
    ]
   ],
   "note": "Kelas rendah. Bunyi th pada kata serapan, misalnya \u0e27\u0e31\u0e12\u0e19\u0e18\u0e23\u0e23\u0e21 (kebudayaan).",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e12 (tho phu-thao)?",
    "options": [
     "tinggi",
     "rendah",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e0c",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 5,
   "th": "\u0e0c",
   "audio": "\u0e0c \u0e40\u0e0c\u0e2d",
   "title": "\u0e0c \u0e40\u0e0c\u0e2d \u2014 cho choe",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e0c \u0e40\u0e0c\u0e2d (cho choe) \u2014 'pohon'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "ch"
    ],
    [
     "Bunyi akhir",
     "tidak dipakai sebagai akhir"
    ]
   ],
   "note": "Kelas rendah. Bunyi ch. Paling jarang di antara semua huruf yang masih dipakai.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e0c (cho choe)?",
    "options": [
     "tinggi",
     "tengah",
     "rendah"
    ],
    "answer": 2
   }
  },
  {
   "id": "kon-\u0e03",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 6,
   "th": "\u0e03",
   "audio": "\u0e03 \u0e02\u0e27\u0e14",
   "title": "\u0e03 \u0e02\u0e27\u0e14 \u2014 kho khuat",
   "meaning": "kelas tinggi (11 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e03 \u0e02\u0e27\u0e14 (kho khuat) \u2014 'botol'"
    ],
    [
     "Kelas",
     "tinggi"
    ],
    [
     "Bunyi awal",
     "kh"
    ],
    [
     "Bunyi akhir",
     "k"
    ]
   ],
   "note": "Kelas tinggi, bunyi kh. SUDAH TIDAK DIPAKAI sejak awal abad ke-20; semua pemakaiannya digantikan \u0e02. Dicantumkan karena masih ikut dihitung sebagai bagian 44 huruf.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e03 (kho khuat)?",
    "options": [
     "rendah",
     "tinggi",
     "tengah"
    ],
    "answer": 1
   }
  },
  {
   "id": "kon-\u0e05",
   "kind": "flip",
   "cat": "konsonan",
   "catLabel": "Konsonan",
   "stage": 6,
   "th": "\u0e05",
   "audio": "\u0e05 \u0e04\u0e19",
   "title": "\u0e05 \u0e04\u0e19 \u2014 kho khon",
   "meaning": "kelas rendah (24 huruf)",
   "rows": [
    [
     "Nama",
     "\u0e05 \u0e04\u0e19 (kho khon) \u2014 'orang'"
    ],
    [
     "Kelas",
     "rendah"
    ],
    [
     "Bunyi awal",
     "kh"
    ],
    [
     "Bunyi akhir",
     "k"
    ]
   ],
   "note": "Kelas rendah, bunyi kh. SUDAH TIDAK DIPAKAI; digantikan \u0e04. Anda tidak akan menemukannya pada teks masa kini.",
   "quiz": {
    "prompt": "Apa kelas konsonan \u0e05 (kho khon)?",
    "options": [
     "tinggi",
     "tengah",
     "rendah"
    ],
    "answer": 2
   }
  },
  {
   "id": "vok-a_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 1,
   "th": "\u25cc\u0e30",
   "audio": "\u0e08\u0e30",
   "title": "a (pendek)",
   "meaning": "bunyi a",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "a"
    ],
    [
     "Pasangan",
     "\u25cc\u0e32"
    ]
   ],
   "exTh": "\u0e08\u0e30",
   "exPhon": "j\u00e0",
   "exGloss": "akan",
   "note": "Vokal a pendek. Ditulis sesudah konsonan. Karena pendek dan tanpa konsonan akhir, suku katanya MATI, sehingga nadanya bukan nada sedang."
  },
  {
   "id": "vok-a_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 1,
   "th": "\u25cc\u0e32",
   "audio": "\u0e21\u0e32",
   "title": "aa (panjang)",
   "meaning": "bunyi aa",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "a"
    ],
    [
     "Pasangan",
     "\u25cc\u0e30"
    ]
   ],
   "exTh": "\u0e21\u0e32",
   "exPhon": "maa",
   "exGloss": "datang",
   "note": "Vokal a panjang. RTGS menulis \u25cc\u0e30 dan \u25cc\u0e32 sama-sama 'a', padahal panjangnya berbeda dan perbedaan itu mengubah arti."
  },
  {
   "id": "vok-i_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 1,
   "th": "\u25cc\u0e34",
   "audio": "\u0e01\u0e34\u0e19",
   "title": "i (pendek)",
   "meaning": "bunyi i",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "i"
    ],
    [
     "Pasangan",
     "\u25cc\u0e35"
    ]
   ],
   "exTh": "\u0e01\u0e34\u0e19",
   "exPhon": "kin",
   "exGloss": "makan",
   "note": "Vokal i pendek, ditulis di ATAS konsonan. Tanda nada, bila ada, ditulis di atas tanda vokal ini."
  },
  {
   "id": "vok-i_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 1,
   "th": "\u25cc\u0e35",
   "audio": "\u0e14\u0e35",
   "title": "ii (panjang)",
   "meaning": "bunyi ii",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "i"
    ],
    [
     "Pasangan",
     "\u25cc\u0e34"
    ]
   ],
   "exTh": "\u0e14\u0e35",
   "exPhon": "dii",
   "exGloss": "baik",
   "note": "Vokal i panjang."
  },
  {
   "id": "vok-u_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 1,
   "th": "\u25cc\u0e38",
   "audio": "\u0e04\u0e38\u0e13",
   "title": "u (pendek)",
   "meaning": "bunyi u",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "u"
    ],
    [
     "Pasangan",
     "\u25cc\u0e39"
    ]
   ],
   "exTh": "\u0e04\u0e38\u0e13",
   "exPhon": "khun",
   "exGloss": "Anda",
   "note": "Vokal u pendek, ditulis di BAWAH konsonan."
  },
  {
   "id": "vok-u_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 1,
   "th": "\u25cc\u0e39",
   "audio": "\u0e14\u0e39",
   "title": "uu (panjang)",
   "meaning": "bunyi uu",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "u"
    ],
    [
     "Pasangan",
     "\u25cc\u0e38"
    ]
   ],
   "exTh": "\u0e14\u0e39",
   "exPhon": "duu",
   "exGloss": "melihat, menonton",
   "note": "Vokal u panjang, ditulis di bawah konsonan."
  },
  {
   "id": "vok-o_s_f",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 1,
   "th": "\u25cc\u25cc",
   "audio": "\u0e04\u0e19",
   "title": "o (pendek)",
   "meaning": "bunyi o",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "o"
    ],
    [
     "Pasangan",
     "-"
    ]
   ],
   "exTh": "\u0e04\u0e19",
   "exPhon": "khon",
   "exGloss": "orang",
   "note": "Vokal o pendek yang TIDAK DITULIS. Bila dua konsonan berdempet tanpa tanda vokal, biasanya ada bunyi o pendek di antaranya: \u0e04\u0e19 = khon, \u0e19\u0e01 = n\u00f3k, \u0e25\u0e21 = lom. Inilah pola yang paling sering membingungkan pembaca baru."
  },
  {
   "id": "vok-e_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u0e40\u25cc\u0e30",
   "audio": "\u0e40\u0e25\u0e47\u0e01",
   "title": "e (pendek)",
   "meaning": "bunyi e",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "e"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc"
    ]
   ],
   "exTh": "\u0e40\u0e25\u0e47\u0e01",
   "exPhon": "l\u00e9k",
   "exGloss": "kecil",
   "note": "Vokal e pendek. Bila ada konsonan akhir, \u25cc\u0e30 diganti tanda \u25cc\u0e47 : \u0e40\u0e25\u0e47\u0e01. Perhatikan \u0e40 ditulis SEBELUM konsonan meskipun dibaca sesudahnya."
  },
  {
   "id": "vok-e_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u0e40\u25cc",
   "audio": "\u0e40\u0e25\u0e48\u0e19",
   "title": "ee (panjang)",
   "meaning": "bunyi ee",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "e"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc\u0e30"
    ]
   ],
   "exTh": "\u0e40\u0e25\u0e48\u0e19",
   "exPhon": "l\u00ean",
   "exGloss": "bermain",
   "note": "Vokal e panjang. Tanda vokal \u0e40 selalu ditulis di depan konsonan awal; kalau ada tanda nada, tanda nada tetap di atas konsonan awalnya."
  },
  {
   "id": "vok-ae_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u0e41\u25cc\u0e30",
   "audio": "\u0e41\u0e02\u0e47\u0e07",
   "title": "ae (pendek)",
   "meaning": "bunyi ae",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "ae"
    ],
    [
     "Pasangan",
     "\u0e41\u25cc"
    ]
   ],
   "exTh": "\u0e41\u0e02\u0e47\u0e07",
   "exPhon": "kh\u01ceeng",
   "exGloss": "keras, kaku",
   "note": "Vokal ae pendek, bunyinya seperti e pada 'enak' tetapi lebih terbuka. Dengan konsonan akhir dipakai tanda \u25cc\u0e47 : \u0e41\u0e02\u0e47\u0e07."
  },
  {
   "id": "vok-ae_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u0e41\u25cc",
   "audio": "\u0e41\u0e21\u0e48",
   "title": "aae (panjang)",
   "meaning": "bunyi aae",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "ae"
    ],
    [
     "Pasangan",
     "\u0e41\u25cc\u0e30"
    ]
   ],
   "exTh": "\u0e41\u0e21\u0e48",
   "exPhon": "m\u00e2e",
   "exGloss": "ibu",
   "note": "Vokal ae panjang. Bentuk tandanya seperti \u0e40 yang digandakan."
  },
  {
   "id": "vok-o_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u0e42\u25cc\u0e30",
   "audio": "\u0e42\u0e15\u0e4a\u0e30",
   "title": "o (pendek)",
   "meaning": "bunyi o",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "o"
    ],
    [
     "Pasangan",
     "\u0e42\u25cc"
    ]
   ],
   "exTh": "\u0e42\u0e15\u0e4a\u0e30",
   "exPhon": "t\u00f3",
   "exGloss": "meja",
   "note": "Vokal o pendek yang DITULIS. Berbeda dari o pendek yang tidak ditulis (\u0e04\u0e19), yang ini memakai \u0e42 dan \u0e30."
  },
  {
   "id": "vok-o_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u0e42\u25cc",
   "audio": "\u0e42\u0e15",
   "title": "oo (panjang)",
   "meaning": "bunyi oo",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "o"
    ],
    [
     "Pasangan",
     "\u0e42\u25cc\u0e30"
    ]
   ],
   "exTh": "\u0e42\u0e15",
   "exPhon": "too",
   "exGloss": "besar (tumbuh besar)",
   "note": "Vokal o panjang."
  },
  {
   "id": "vok-aw_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 3,
   "th": "\u0e40\u25cc\u0e32\u0e30",
   "audio": "\u0e40\u0e01\u0e32\u0e30",
   "title": "aw (pendek)",
   "meaning": "bunyi aw",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "o"
    ],
    [
     "Pasangan",
     "\u25cc\u0e2d"
    ]
   ],
   "exTh": "\u0e40\u0e01\u0e32\u0e30",
   "exPhon": "k\u00e0w",
   "exGloss": "pulau",
   "note": "Vokal aw pendek, bunyinya seperti o pada 'botol'. Tandanya terpisah tiga bagian: \u0e40 di depan, \u0e32 dan \u0e30 di belakang."
  },
  {
   "id": "vok-aw_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 3,
   "th": "\u25cc\u0e2d",
   "audio": "\u0e02\u0e2d",
   "title": "aaw (panjang)",
   "meaning": "bunyi aaw",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "o"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc\u0e32\u0e30"
    ]
   ],
   "exTh": "\u0e02\u0e2d",
   "exPhon": "kh\u01ceaw",
   "exGloss": "meminta",
   "note": "Vokal aw panjang, ditulis dengan huruf \u0e2d yang di sini berfungsi sebagai vokal, bukan konsonan."
  },
  {
   "id": "vok-ue_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 3,
   "th": "\u25cc\u0e36",
   "audio": "\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "title": "ue (pendek)",
   "meaning": "bunyi ue",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "ue"
    ],
    [
     "Pasangan",
     "\u25cc\u0e37\u0e2d"
    ]
   ],
   "exTh": "\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "exPhon": "n\u00f9eng",
   "exGloss": "satu",
   "note": "Vokal ue pendek. Tidak ada padanannya dalam bahasa Indonesia: bentuk mulut seperti mengucapkan i, tetapi bibir tidak ditarik ke samping. Mirip bunyi e pada 'keras', tetapi lidah diangkat lebih tinggi ke belakang."
  },
  {
   "id": "vok-ue_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 3,
   "th": "\u25cc\u0e37\u0e2d",
   "audio": "\u0e21\u0e37\u0e2d",
   "title": "uue (panjang)",
   "meaning": "bunyi uue",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "ue"
    ],
    [
     "Pasangan",
     "\u25cc\u0e36"
    ]
   ],
   "exTh": "\u0e21\u0e37\u0e2d",
   "exPhon": "muue",
   "exGloss": "tangan",
   "note": "Vokal ue panjang. Huruf \u0e2d di belakangnya bagian dari vokal, bukan konsonan."
  },
  {
   "id": "vok-oe_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 4,
   "th": "\u0e40\u25cc\u0e2d\u0e30",
   "audio": "\u0e40\u0e22\u0e2d\u0e30",
   "title": "oe (pendek)",
   "meaning": "bunyi oe",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "oe"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc\u0e2d"
    ]
   ],
   "exTh": "\u0e40\u0e22\u0e2d\u0e30",
   "exPhon": "y\u00f3e",
   "exGloss": "banyak (percakapan)",
   "note": "Vokal oe pendek, mirip e pada 'empat' tetapi lebih dalam. Jarang dipakai."
  },
  {
   "id": "vok-oe_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 4,
   "th": "\u0e40\u25cc\u0e2d",
   "audio": "\u0e40\u0e18\u0e2d",
   "title": "ooe (panjang)",
   "meaning": "bunyi ooe",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "oe"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc\u0e2d\u0e30"
    ]
   ],
   "exTh": "\u0e40\u0e18\u0e2d",
   "exPhon": "thoe",
   "exGloss": "kamu, dia (perempuan)",
   "note": "Vokal oe panjang. Bila ada konsonan akhir, \u0e2d berubah menjadi tanda \u25cc\u0e34 : \u0e40\u0e14\u0e34\u0e19 = doen (berjalan)."
  },
  {
   "id": "vok-ia_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 4,
   "th": "\u0e40\u25cc\u0e35\u0e22",
   "audio": "\u0e40\u0e23\u0e35\u0e22\u0e19",
   "title": "ia (panjang)",
   "meaning": "bunyi ia",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "ia"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc\u0e35\u0e22\u0e30"
    ]
   ],
   "exTh": "\u0e40\u0e23\u0e35\u0e22\u0e19",
   "exPhon": "rian",
   "exGloss": "belajar",
   "note": "Vokal rangkap ia. Tandanya tiga bagian: \u0e40 di depan, \u25cc\u0e35 di atas, \u0e22 di belakang."
  },
  {
   "id": "vok-ia_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 6,
   "th": "\u0e40\u25cc\u0e35\u0e22\u0e30",
   "audio": "\u0e40\u0e1b\u0e35\u0e4a\u0e22\u0e30",
   "title": "ia (pendek)",
   "meaning": "bunyi ia",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "ia"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc\u0e35\u0e22"
    ]
   ],
   "exTh": "\u0e40\u0e1b\u0e35\u0e4a\u0e22\u0e30",
   "exPhon": "p\u00eda",
   "exGloss": "pia (pada \u0e02\u0e19\u0e21\u0e40\u0e1b\u0e35\u0e4a\u0e22\u0e30, kue pia)",
   "note": "Bentuk pendek dari \u0e40\u25cc\u0e35\u0e22. Sangat jarang; hampir hanya pada kata serapan dan nama makanan."
  },
  {
   "id": "vok-uea_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 4,
   "th": "\u0e40\u25cc\u0e37\u0e2d",
   "audio": "\u0e40\u0e2a\u0e37\u0e2d",
   "title": "uea (panjang)",
   "meaning": "bunyi uea",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "uea"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc\u0e37\u0e2d\u0e30"
    ]
   ],
   "exTh": "\u0e40\u0e2a\u0e37\u0e2d",
   "exPhon": "s\u01d4ea",
   "exGloss": "harimau",
   "note": "Vokal rangkap uea. Bandingkan dengan \u0e40\u0e2a\u0e37\u0e49\u0e2d (s\u00fbea, baju) yang hanya berbeda tanda nada."
  },
  {
   "id": "vok-uea_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 6,
   "th": "\u0e40\u25cc\u0e37\u0e2d\u0e30",
   "audio": "",
   "title": "uea (pendek)",
   "meaning": "bunyi uea",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "uea"
    ],
    [
     "Pasangan",
     "\u0e40\u25cc\u0e37\u0e2d"
    ]
   ],
   "exTh": "",
   "exPhon": "",
   "exGloss": "",
   "note": "Bentuk pendek dari \u0e40\u25cc\u0e37\u0e2d. Hampir tidak ada kata yang memakainya; dicantumkan supaya tabel vokalnya lengkap. Tidak ada contoh kata yang dipakai di sini karena belum ada yang diyakini."
  },
  {
   "id": "vok-ua_l",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 4,
   "th": "\u25cc\u0e31\u0e27",
   "audio": "\u0e15\u0e31\u0e27",
   "title": "ua (panjang)",
   "meaning": "bunyi ua",
   "rows": [
    [
     "Panjang",
     "panjang"
    ],
    [
     "RTGS",
     "ua"
    ],
    [
     "Pasangan",
     "\u25cc\u0e31\u0e27\u0e30"
    ]
   ],
   "exTh": "\u0e15\u0e31\u0e27",
   "exPhon": "tua",
   "exGloss": "tubuh; klasifikator untuk hewan",
   "note": "Vokal rangkap ua. Bila ada konsonan akhir, \u25cc\u0e31 hilang dan hanya \u0e27 yang tersisa: \u0e2a\u0e27\u0e19 = s\u01d4an (taman)."
  },
  {
   "id": "vok-ua_s",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 6,
   "th": "\u25cc\u0e31\u0e27\u0e30",
   "audio": "",
   "title": "ua (pendek)",
   "meaning": "bunyi ua",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "ua"
    ],
    [
     "Pasangan",
     "\u25cc\u0e31\u0e27"
    ]
   ],
   "exTh": "",
   "exPhon": "",
   "exGloss": "",
   "note": "Bentuk pendek dari \u25cc\u0e31\u0e27. Nyaris hanya dipakai pada kata tiruan bunyi. Tidak ada contoh kata yang dipakai di sini."
  },
  {
   "id": "vok-a_s_f",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u25cc\u0e31\u25cc",
   "audio": "\u0e09\u0e31\u0e19",
   "title": "a (pendek)",
   "meaning": "bunyi a",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "a"
    ],
    [
     "Pasangan",
     "\u25cc\u0e32\u25cc"
    ]
   ],
   "exTh": "\u0e09\u0e31\u0e19",
   "exPhon": "ch\u01cen",
   "exGloss": "saya (dipakai perempuan)",
   "note": "Vokal a pendek DENGAN konsonan akhir. Tanda \u25cc\u0e31 (mai han akat) menggantikan \u25cc\u0e30, karena \u25cc\u0e30 tidak bisa dipakai bila ada konsonan akhir."
  },
  {
   "id": "vok-am",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 3,
   "th": "\u25cc\u0e33",
   "audio": "\u0e19\u0e49\u0e33",
   "title": "am (pendek)",
   "meaning": "bunyi am",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "am"
    ],
    [
     "Pasangan",
     "-"
    ]
   ],
   "exTh": "\u0e19\u0e49\u0e33",
   "exPhon": "n\u00e1am",
   "exGloss": "air",
   "note": "Vokal a pendek yang sudah mengandung bunyi akhir -m. Karena berakhiran nyaring, suku katanya HIDUP meskipun vokalnya pendek."
  },
  {
   "id": "vok-ai_sai",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u0e44\u25cc",
   "audio": "\u0e44\u0e1b",
   "title": "ai (pendek)",
   "meaning": "bunyi ai",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "ai"
    ],
    [
     "Pasangan",
     "-"
    ]
   ],
   "exTh": "\u0e44\u0e1b",
   "exPhon": "pai",
   "exGloss": "pergi",
   "note": "Bunyi ai. Mengandung bunyi akhir -y, jadi suku katanya hidup. Ini bentuk yang lazim, dipakai pada hampir semua kata."
  },
  {
   "id": "vok-ai_mai",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 3,
   "th": "\u0e43\u25cc",
   "audio": "\u0e43\u0e08",
   "title": "ai (pendek)",
   "meaning": "bunyi ai",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "ai"
    ],
    [
     "Pasangan",
     "-"
    ]
   ],
   "exTh": "\u0e43\u0e08",
   "exPhon": "jai",
   "exGloss": "hati",
   "note": "Bunyinya PERSIS sama dengan \u0e44\u25cc. Bedanya hanya ejaan, dan \u0e43\u25cc dipakai pada sekitar dua puluh kata saja (\u0e43\u0e08 \u0e43\u0e0a\u0e48 \u0e43\u0e04\u0e23 \u0e43\u0e14 \u0e43\u0e19 \u0e43\u0e2b\u0e21\u0e48 \u0e43\u0e2b\u0e0d\u0e48 \u0e43\u0e2b\u0e49 \u0e43\u0e2a \u0e43\u0e2a\u0e48 ...). Daftar itu memang harus dihafal."
  },
  {
   "id": "vok-ao",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 2,
   "th": "\u0e40\u25cc\u0e32",
   "audio": "\u0e40\u0e02\u0e32",
   "title": "ao (pendek)",
   "meaning": "bunyi ao",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "ao"
    ],
    [
     "Pasangan",
     "-"
    ]
   ],
   "exTh": "\u0e40\u0e02\u0e32",
   "exPhon": "kh\u01ceo",
   "exGloss": "dia",
   "note": "Bunyi ao. Mengandung bunyi akhir -w, jadi suku katanya hidup. Jangan dikacaukan dengan \u0e40\u25cc\u0e32\u0e30 (aw pendek) yang ada \u0e30 di ujungnya."
  },
  {
   "id": "vok-a_s_dalam",
   "kind": "flip",
   "cat": "vokal",
   "catLabel": "Vokal",
   "stage": 5,
   "th": "\u25cc",
   "audio": "\u0e02\u0e19\u0e21",
   "title": "a (pendek)",
   "meaning": "bunyi a",
   "rows": [
    [
     "Panjang",
     "pendek"
    ],
    [
     "RTGS",
     "a"
    ],
    [
     "Pasangan",
     "-"
    ]
   ],
   "exTh": "\u0e02\u0e19\u0e21",
   "exPhon": "kh\u00e0-n\u01d2m",
   "exGloss": "kue, penganan",
   "note": "Satu konsonan berdiri sendiri sebagai suku kata, dengan vokal a pendek yang tidak ditulis. Inilah pola aksara nam (\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e19\u0e33): \u0e02\u0e19\u0e21 = kh\u00e0-n\u01d2m, \u0e15\u0e25\u0e32\u0e14 = t\u00e0-l\u00e0at, \u0e2a\u0e1a\u0e32\u0e22 = s\u00e0-baai. Lihat Modul 2 untuk pengaruhnya pada nada."
  },
  {
   "id": "m01",
   "kind": "flip",
   "cat": "tanda",
   "catLabel": "Tanda",
   "stage": 1,
   "th": "\u0e48",
   "audio": "\u0e44\u0e21\u0e48",
   "title": "\u0e44\u0e21\u0e49\u0e40\u0e2d\u0e01 \u2014 mai ek",
   "meaning": "mai ek",
   "rows": [
    [
     "Nama Thai",
     "\u0e44\u0e21\u0e49\u0e40\u0e2d\u0e01"
    ],
    [
     "Nama Latin",
     "mai ek"
    ]
   ],
   "exTh": "\u0e44\u0e21\u0e48",
   "exPhon": "m\u00e2i",
   "exGloss": "tidak",
   "note": "Tanda nada pertama. Pada konsonan kelas tengah dan tinggi menghasilkan nada rendah; pada kelas rendah menghasilkan nada turun. Jadi tanda nada TIDAK langsung berarti satu nada tertentu."
  },
  {
   "id": "m02",
   "kind": "flip",
   "cat": "tanda",
   "catLabel": "Tanda",
   "stage": 1,
   "th": "\u0e49",
   "audio": "\u0e19\u0e49\u0e33",
   "title": "\u0e44\u0e21\u0e49\u0e42\u0e17 \u2014 mai tho",
   "meaning": "mai tho",
   "rows": [
    [
     "Nama Thai",
     "\u0e44\u0e21\u0e49\u0e42\u0e17"
    ],
    [
     "Nama Latin",
     "mai tho"
    ]
   ],
   "exTh": "\u0e19\u0e49\u0e33",
   "exPhon": "n\u00e1am",
   "exGloss": "air",
   "note": "Tanda nada kedua. Kelas tengah dan tinggi menjadi nada turun; kelas rendah menjadi nada tinggi."
  },
  {
   "id": "m03",
   "kind": "flip",
   "cat": "tanda",
   "catLabel": "Tanda",
   "stage": 3,
   "th": "\u0e4a",
   "audio": "\u0e42\u0e15\u0e4a\u0e30",
   "title": "\u0e44\u0e21\u0e49\u0e15\u0e23\u0e35 \u2014 mai tri",
   "meaning": "mai tri",
   "rows": [
    [
     "Nama Thai",
     "\u0e44\u0e21\u0e49\u0e15\u0e23\u0e35"
    ],
    [
     "Nama Latin",
     "mai tri"
    ]
   ],
   "exTh": "\u0e42\u0e15\u0e4a\u0e30",
   "exPhon": "t\u00f3",
   "exGloss": "meja",
   "note": "Tanda nada ketiga, menghasilkan nada tinggi. Pada ejaan baku, tanda ini praktis hanya dipakai bersama konsonan kelas tengah, dan banyak muncul pada kata serapan."
  },
  {
   "id": "m04",
   "kind": "flip",
   "cat": "tanda",
   "catLabel": "Tanda",
   "stage": 3,
   "th": "\u0e4b",
   "audio": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27",
   "title": "\u0e44\u0e21\u0e49\u0e08\u0e31\u0e15\u0e27\u0e32 \u2014 mai chattawa",
   "meaning": "mai chattawa",
   "rows": [
    [
     "Nama Thai",
     "\u0e44\u0e21\u0e49\u0e08\u0e31\u0e15\u0e27\u0e32"
    ],
    [
     "Nama Latin",
     "mai chattawa"
    ]
   ],
   "exTh": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27",
   "exPhon": "d\u01d0ao",
   "exGloss": "sebentar",
   "note": "Tanda nada keempat, menghasilkan nada naik. Seperti mai tri, tanda ini praktis hanya dipakai bersama konsonan kelas tengah."
  },
  {
   "id": "m05",
   "kind": "flip",
   "cat": "tanda",
   "catLabel": "Tanda",
   "stage": 2,
   "th": "\u0e47",
   "audio": "\u0e40\u0e25\u0e47\u0e01",
   "title": "\u0e44\u0e21\u0e49\u0e44\u0e15\u0e48\u0e04\u0e39\u0e49 \u2014 maitaikhu",
   "meaning": "maitaikhu",
   "rows": [
    [
     "Nama Thai",
     "\u0e44\u0e21\u0e49\u0e44\u0e15\u0e48\u0e04\u0e39\u0e49"
    ],
    [
     "Nama Latin",
     "maitaikhu"
    ]
   ],
   "exTh": "\u0e40\u0e25\u0e47\u0e01",
   "exPhon": "l\u00e9k",
   "exGloss": "kecil",
   "note": "Bukan tanda nada. Tugasnya memendekkan vokal \u0e40\u25cc atau \u0e41\u25cc yang punya konsonan akhir: \u0e40\u0e25\u0e01 menjadi \u0e40\u0e25\u0e47\u0e01. Letaknya di atas konsonan awal."
  },
  {
   "id": "m06",
   "kind": "flip",
   "cat": "tanda",
   "catLabel": "Tanda",
   "stage": 4,
   "th": "\u0e4c",
   "audio": "\u0e22\u0e31\u0e01\u0e29\u0e4c",
   "title": "\u0e17\u0e31\u0e13\u0e11\u0e06\u0e32\u0e15 \u2014 thanthakhat",
   "meaning": "thanthakhat",
   "rows": [
    [
     "Nama Thai",
     "\u0e17\u0e31\u0e13\u0e11\u0e06\u0e32\u0e15"
    ],
    [
     "Nama Latin",
     "thanthakhat"
    ]
   ],
   "exTh": "\u0e22\u0e31\u0e01\u0e29\u0e4c",
   "exPhon": "y\u00e1k",
   "exGloss": "raksasa (yaksa)",
   "note": "Penanda huruf mati: huruf di bawahnya TIDAK dibunyikan. Banyak dipakai pada kata serapan agar ejaan aslinya tetap terlihat, misalnya \u0e22\u0e31\u0e01\u0e29\u0e4c dan \u0e28\u0e34\u0e25\u0e1b\u0e4c. Pada contoh ini \u0e29 tidak dibunyikan, jadi yang terbaca hanya \u0e22\u0e31\u0e01."
  },
  {
   "id": "m07",
   "kind": "flip",
   "cat": "tanda",
   "catLabel": "Tanda",
   "stage": 4,
   "th": "\u0e46",
   "audio": "\u0e40\u0e14\u0e47\u0e01\u0e46",
   "title": "\u0e44\u0e21\u0e49\u0e22\u0e21\u0e01 \u2014 mai yamok",
   "meaning": "mai yamok",
   "rows": [
    [
     "Nama Thai",
     "\u0e44\u0e21\u0e49\u0e22\u0e21\u0e01"
    ],
    [
     "Nama Latin",
     "mai yamok"
    ]
   ],
   "exTh": "\u0e40\u0e14\u0e47\u0e01\u0e46",
   "exPhon": "d\u00e8k-d\u00e8k",
   "exGloss": "anak-anak",
   "note": "Penanda pengulangan kata, sepadan dengan tanda hubung pada 'anak-anak'. Ditulis sesudah kata, dan kata itu dibaca dua kali. Catatan: pengulangan ini tidak ikut diperiksa oleh pemeriksa nada otomatis proyek ini."
  },
  {
   "id": "num-0",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e50",
   "audio": "\u0e28\u0e39\u0e19\u0e22\u0e4c",
   "title": "0",
   "meaning": "0",
   "rows": [
    [
     "Angka",
     "0"
    ],
    [
     "Kata",
     "\u0e28\u0e39\u0e19\u0e22\u0e4c (s\u01d4un)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-1",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e51",
   "audio": "\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "title": "1",
   "meaning": "1",
   "rows": [
    [
     "Angka",
     "1"
    ],
    [
     "Kata",
     "\u0e2b\u0e19\u0e36\u0e48\u0e07 (n\u00f9eng)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-2",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e52",
   "audio": "\u0e2a\u0e2d\u0e07",
   "title": "2",
   "meaning": "2",
   "rows": [
    [
     "Angka",
     "2"
    ],
    [
     "Kata",
     "\u0e2a\u0e2d\u0e07 (s\u01ceawng)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-3",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e53",
   "audio": "\u0e2a\u0e32\u0e21",
   "title": "3",
   "meaning": "3",
   "rows": [
    [
     "Angka",
     "3"
    ],
    [
     "Kata",
     "\u0e2a\u0e32\u0e21 (s\u01ceam)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-4",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e54",
   "audio": "\u0e2a\u0e35\u0e48",
   "title": "4",
   "meaning": "4",
   "rows": [
    [
     "Angka",
     "4"
    ],
    [
     "Kata",
     "\u0e2a\u0e35\u0e48 (s\u00eci)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-5",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e55",
   "audio": "\u0e2b\u0e49\u0e32",
   "title": "5",
   "meaning": "5",
   "rows": [
    [
     "Angka",
     "5"
    ],
    [
     "Kata",
     "\u0e2b\u0e49\u0e32 (h\u00e2a)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-6",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e56",
   "audio": "\u0e2b\u0e01",
   "title": "6",
   "meaning": "6",
   "rows": [
    [
     "Angka",
     "6"
    ],
    [
     "Kata",
     "\u0e2b\u0e01 (h\u00f2k)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-7",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e57",
   "audio": "\u0e40\u0e08\u0e47\u0e14",
   "title": "7",
   "meaning": "7",
   "rows": [
    [
     "Angka",
     "7"
    ],
    [
     "Kata",
     "\u0e40\u0e08\u0e47\u0e14 (j\u00e8t)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-8",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e58",
   "audio": "\u0e41\u0e1b\u0e14",
   "title": "8",
   "meaning": "8",
   "rows": [
    [
     "Angka",
     "8"
    ],
    [
     "Kata",
     "\u0e41\u0e1b\u0e14 (p\u00e0et)"
    ]
   ],
   "note": ""
  },
  {
   "id": "num-9",
   "kind": "flip",
   "cat": "angka",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e59",
   "audio": "\u0e40\u0e01\u0e49\u0e32",
   "title": "9",
   "meaning": "9",
   "rows": [
    [
     "Angka",
     "9"
    ],
    [
     "Kata",
     "\u0e40\u0e01\u0e49\u0e32 (k\u00e2o)"
    ]
   ],
   "note": ""
  },
  {
   "id": "a-q01",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 1,
   "prompt": "Apa guna kelas konsonan (tengah, tinggi, rendah)?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Menentukan nada suku kata bersama jenis suku kata dan tanda nada",
    "Menentukan urutan huruf dalam kamus",
    "Menentukan panjang vokal",
    "Menentukan apakah huruf itu boleh menjadi konsonan akhir"
   ],
   "answer": 0,
   "explain": "Kelas konsonan tidak mengubah bunyi konsonannya sama sekali. \u0e02 dan \u0e04 sama-sama berbunyi kh; yang berbeda adalah nada yang dihasilkan kata itu."
  },
  {
   "id": "a-q02",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 1,
   "prompt": "Berapa jumlah konsonan kelas tengah?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "9 huruf",
    "11 huruf",
    "24 huruf",
    "44 huruf"
   ],
   "answer": 0,
   "explain": "Kelas tengah 9 huruf (\u0e01 \u0e08 \u0e0e \u0e0f \u0e14 \u0e15 \u0e1a \u0e1b \u0e2d), kelas tinggi 11, kelas rendah 24. Jumlahnya 44."
  },
  {
   "id": "a-q03",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 1,
   "prompt": "Mengapa \u0e02 dan \u0e04 perlu dihafal terpisah padahal bunyinya sama?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Kelasnya berbeda, sehingga kata yang ditulis dengannya bernada berbeda",
    "\u0e04 hanya dipakai pada kata serapan",
    "\u0e02 tidak bisa menjadi konsonan akhir",
    "\u0e04 selalu dibaca dengan hembusan lebih kuat"
   ],
   "answer": 0,
   "explain": "\u0e02\u0e32 = kh\u01cea (nada naik, kelas tinggi), \u0e04\u0e32 = khaa (nada sedang, kelas rendah). Bunyi konsonannya sama."
  },
  {
   "id": "a-q04",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 2,
   "prompt": "Pada tulisan \u0e40\u0e25\u0e47\u0e01, tanda \u25cc\u0e47 berfungsi apa?",
   "promptTh": "\u0e40\u0e25\u0e47\u0e01",
   "optionsLang": "id",
   "options": [
    "Memendekkan vokal e",
    "Menaikkan nada menjadi nada tinggi",
    "Menandai bahwa \u0e25 tidak dibunyikan",
    "Menandai konsonan akhir"
   ],
   "answer": 0,
   "explain": "\u25cc\u0e47 (maitaikhu) bukan tanda nada. Nada tinggi pada l\u00e9k datang dari \u0e25 kelas rendah + suku kata mati bervokal pendek."
  },
  {
   "id": "a-q05",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 2,
   "prompt": "Vokal \u0e40 ditulis di depan konsonan. Bagaimana cara membacanya?",
   "promptTh": "\u0e40\u0e18\u0e2d",
   "optionsLang": "id",
   "options": [
    "Konsonan dibaca lebih dahulu, baru vokalnya: \u0e40\u0e18\u0e2d = thoe",
    "Dibaca sesuai urutan tulisan: \u0e40\u0e18\u0e2d = oethe",
    "\u0e40 tidak dibunyikan",
    "\u0e40 menandai nada naik"
   ],
   "answer": 0,
   "explain": "Empat vokal ditulis sebelum konsonan awalnya: \u0e40 \u0e41 \u0e42 \u0e44 \u0e43. Urutan tulisan tidak sama dengan urutan bunyi."
  },
  {
   "id": "a-q06",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 3,
   "prompt": "Apa guna \u0e2b pada kata \u0e2b\u0e21\u0e32 (m\u01cea, anjing)?",
   "promptTh": "\u0e2b\u0e21\u0e32",
   "optionsLang": "id",
   "options": [
    "Tidak dibunyikan; mengubah kelas \u0e21 menjadi kelas tinggi",
    "Dibunyikan h, sehingga kata itu dibaca h\u01cemaa",
    "Menandai vokal panjang",
    "Menandai bahwa kata itu kata benda"
   ],
   "answer": 0,
   "explain": "\u0e2b nam dipakai di depan sembilan konsonan nyaring kelas rendah (\u0e07 \u0e0d \u0e13 \u0e19 \u0e21 \u0e22 \u0e23 \u0e25 \u0e27). Tanpa \u0e2b, \u0e21\u0e32 hanya bisa bernada sedang, turun, atau tinggi; dengan \u0e2b, kata itu bisa bernada naik dan rendah."
  },
  {
   "id": "a-q07",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 3,
   "prompt": "Pada kata \u0e04\u0e19 (khon, orang), vokalnya yang mana?",
   "promptTh": "\u0e04\u0e19",
   "optionsLang": "id",
   "options": [
    "Vokal o pendek yang tidak ditulis",
    "Tidak ada vokal; dua konsonan dibaca berdempet",
    "Vokal a pendek yang tidak ditulis",
    "Vokal ue pendek yang tidak ditulis"
   ],
   "answer": 0,
   "explain": "Dua konsonan berdempet dalam satu suku kata umumnya dibaca dengan o pendek: \u0e04\u0e19 khon, \u0e19\u0e01 n\u00f3k, \u0e25\u0e21 lom, \u0e1d\u0e19 f\u01d2n."
  },
  {
   "id": "a-q08",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 3,
   "prompt": "Apa bedanya \u0e44\u25cc dan \u0e43\u25cc ?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Bunyinya sama; \u0e43\u25cc hanya dipakai pada sekitar dua puluh kata tertentu",
    "\u0e43\u25cc dibaca lebih panjang",
    "\u0e44\u25cc bernada naik, \u0e43\u25cc bernada sedang",
    "\u0e43\u25cc dipakai hanya di akhir kata"
   ],
   "answer": 0,
   "explain": "Keduanya berbunyi ai. Daftar kata ber-\u0e43 memang harus dihafal: \u0e43\u0e08 \u0e43\u0e0a\u0e48 \u0e43\u0e04\u0e23 \u0e43\u0e14 \u0e43\u0e19 \u0e43\u0e1a \u0e43\u0e2b\u0e21\u0e48 \u0e43\u0e2b\u0e0d\u0e48 \u0e43\u0e2b\u0e49 \u0e43\u0e2a \u0e43\u0e2a\u0e48 dan beberapa lagi."
  },
  {
   "id": "a-q09",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 4,
   "prompt": "Pada \u0e22\u0e31\u0e01\u0e29\u0e4c (y\u00e1k), apa arti tanda \u25cc\u0e4c di atas \u0e29 ?",
   "promptTh": "\u0e22\u0e31\u0e01\u0e29\u0e4c",
   "optionsLang": "id",
   "options": [
    "\u0e29 tidak dibunyikan",
    "\u0e29 dibunyikan sebagai -s",
    "Suku katanya bernada tinggi",
    "Vokalnya dipanjangkan"
   ],
   "answer": 0,
   "explain": "\u0e17\u0e31\u0e13\u0e11\u0e06\u0e32\u0e15 (thanthakhat) mematikan huruf di bawahnya. Ejaan aslinya tetap terlihat, tetapi bunyinya hilang: \u0e22\u0e31\u0e01\u0e29\u0e4c dibaca y\u00e1k."
  },
  {
   "id": "a-q10",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 4,
   "prompt": "Huruf mana yang TIDAK pernah menjadi konsonan akhir?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e2b",
    "\u0e01",
    "\u0e19",
    "\u0e1a"
   ],
   "answer": 0,
   "explain": "\u0e2b, \u0e2e, \u0e2d, \u0e1c, \u0e1d, dan \u0e09 tidak dipakai sebagai konsonan akhir. Konsonan akhir hanya berbunyi k, t, p, ng, n, m, y, atau w."
  },
  {
   "id": "a-q11",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 5,
   "prompt": "Bagaimana \u0e02\u0e19\u0e21 dibaca, dan mengapa?",
   "promptTh": "\u0e02\u0e19\u0e21",
   "optionsLang": "id",
   "options": [
    "kh\u00e0-n\u01d2m \u2014 \u0e02 menjadi suku kata sendiri dan memimpin \u0e19\u0e21, sehingga \u0e19\u0e21 ikut kelas tinggi",
    "khon-m \u2014 \u0e19 dan \u0e21 dibaca sebagai satu suku kata",
    "kh\u00e0-nom \u2014 \u0e19\u0e21 tetap kelas rendah sehingga bernada sedang",
    "kha-n\u01d2m \u2014 suku kata pertama bernada sedang"
   ],
   "answer": 0,
   "explain": "Pola aksara nam: konsonan kelas tinggi atau tengah yang berdiri sendiri sebagai suku kata pertama menularkan kelasnya ke suku kata berikutnya yang berawalan konsonan nyaring kelas rendah."
  },
  {
   "id": "a-q12",
   "kind": "mcq",
   "cat": "soal-aksara",
   "catLabel": "Soal aksara",
   "stage": 6,
   "prompt": "Dua huruf \u0e03 dan \u0e05 sekarang berstatus apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Sudah tidak dipakai; digantikan \u0e02 dan \u0e04",
    "Dipakai khusus pada nama kerajaan",
    "Dipakai sebagai konsonan akhir saja",
    "Dipakai hanya pada kata serapan Sanskerta"
   ],
   "answer": 0,
   "explain": "Keduanya berhenti dipakai sejak awal abad ke-20, tetapi masih dihitung dalam 44 huruf dan masih muncul di tabel abjad."
  }
 ],
 "nada": [
  {
   "id": "t1",
   "kind": "flip",
   "cat": "nada",
   "catLabel": "Lima nada",
   "stage": 1,
   "th": "\u0e21\u0e32",
   "audio": "\u0e21\u0e32",
   "title": "nada sedang",
   "meaning": "nada sedang \u2014 \u0e40\u0e2a\u0e35\u0e22\u0e07\u0e2a\u0e32\u0e21\u0e31\u0e0d (siang saman)",
   "rows": [
    [
     "Bunyinya",
     "Datar di tengah wilayah suara Anda. Tidak naik, tidak turun."
    ],
    [
     "Lafal contoh",
     "maa"
    ],
    [
     "Arti contoh",
     "datang"
    ]
   ],
   "note": "Inilah nada yang paling dekat dengan cara penutur bahasa Indonesia mengucapkan kata biasa. Jadikan nada ini titik acuan untuk empat nada lainnya.",
   "hint": "Nada apa ini, dan bagaimana bunyinya?"
  },
  {
   "id": "t2",
   "kind": "flip",
   "cat": "nada",
   "catLabel": "Lima nada",
   "stage": 1,
   "th": "\u0e1b\u0e48\u0e32",
   "audio": "\u0e1b\u0e48\u0e32",
   "title": "nada rendah",
   "meaning": "nada rendah \u2014 \u0e40\u0e2a\u0e35\u0e22\u0e07\u0e40\u0e2d\u0e01 (siang ek)",
   "rows": [
    [
     "Bunyinya",
     "Datar tetapi jelas lebih rendah daripada nada sedang, dan sedikit menurun di ujung."
    ],
    [
     "Lafal contoh",
     "p\u00e0a"
    ],
    [
     "Arti contoh",
     "hutan"
    ]
   ],
   "note": "Bayangkan mengucapkan sesuatu dengan suara berat, seperti saat lelah. Jangan menambahkan tekanan; nada rendah tetap datar.",
   "hint": "Nada apa ini, dan bagaimana bunyinya?"
  },
  {
   "id": "t3",
   "kind": "flip",
   "cat": "nada",
   "catLabel": "Lima nada",
   "stage": 1,
   "th": "\u0e1b\u0e49\u0e32",
   "audio": "\u0e1b\u0e49\u0e32",
   "title": "nada turun",
   "meaning": "nada turun \u2014 \u0e40\u0e2a\u0e35\u0e22\u0e07\u0e42\u0e17 (siang tho)",
   "rows": [
    [
     "Bunyinya",
     "Mulai tinggi lalu jatuh."
    ],
    [
     "Lafal contoh",
     "p\u00e2a"
    ],
    [
     "Arti contoh",
     "bibi (saudara tua ayah/ibu)"
    ]
   ],
   "note": "Mirip nada orang Indonesia memanggil dari jauh, 'Woooy!', atau nada menegur. Nada ini paling mudah dikenali telinga pemula.",
   "hint": "Nada apa ini, dan bagaimana bunyinya?"
  },
  {
   "id": "t4",
   "kind": "flip",
   "cat": "nada",
   "catLabel": "Lima nada",
   "stage": 1,
   "th": "\u0e21\u0e49\u0e32",
   "audio": "\u0e21\u0e49\u0e32",
   "title": "nada tinggi",
   "meaning": "nada tinggi \u2014 \u0e40\u0e2a\u0e35\u0e22\u0e07\u0e15\u0e23\u0e35 (siang tri)",
   "rows": [
    [
     "Bunyinya",
     "Tinggi dan sedikit naik di ujung, diucapkan agak tegang."
    ],
    [
     "Lafal contoh",
     "m\u00e1a"
    ],
    [
     "Arti contoh",
     "kuda"
    ]
   ],
   "note": "Terasa seperti berbicara sambil menahan napas di tenggorokan. Nada ini sering tertukar dengan nada turun oleh pembelajar baru, padahal arahnya berlawanan.",
   "hint": "Nada apa ini, dan bagaimana bunyinya?"
  },
  {
   "id": "t5",
   "kind": "flip",
   "cat": "nada",
   "catLabel": "Lima nada",
   "stage": 1,
   "th": "\u0e2b\u0e21\u0e32",
   "audio": "\u0e2b\u0e21\u0e32",
   "title": "nada naik",
   "meaning": "nada naik \u2014 \u0e40\u0e2a\u0e35\u0e22\u0e07\u0e08\u0e31\u0e15\u0e27\u0e32 (siang chattawa)",
   "rows": [
    [
     "Bunyinya",
     "Mulai rendah lalu naik."
    ],
    [
     "Lafal contoh",
     "m\u01cea"
    ],
    [
     "Arti contoh",
     "anjing"
    ]
   ],
   "note": "Persis nada orang Indonesia bertanya satu kata: 'Hah?' atau 'Ya?'. Karena mirip nada bertanya, pemula sering memakainya tanpa sadar pada kata yang seharusnya bernada lain.",
   "hint": "Nada apa ini, dan bagaimana bunyinya?"
  },
  {
   "id": "n01",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas tengah, suku kata hidup, vokal panjang, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "naik",
    "turun",
    "rendah",
    "sedang"
   ],
   "answer": 3,
   "explain": "Contoh: \u0e01\u0e32 = kaa (burung gagak)."
  },
  {
   "id": "n02",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas tengah, suku kata mati, vokal pendek, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "rendah",
    "sedang",
    "tinggi",
    "turun"
   ],
   "answer": 0,
   "explain": "Contoh: \u0e08\u0e30 = j\u00e0 (akan)."
  },
  {
   "id": "n03",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas tengah, suku kata mati, vokal panjang, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "rendah",
    "naik",
    "sedang"
   ],
   "answer": 1,
   "explain": "Contoh: \u0e08\u0e32\u0e01 = j\u00e0ak (dari)."
  },
  {
   "id": "n04",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas tinggi, suku kata hidup, vokal panjang, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "rendah",
    "naik",
    "turun",
    "tinggi"
   ],
   "answer": 1,
   "explain": "Contoh: \u0e02\u0e32 = kh\u01cea (kaki)."
  },
  {
   "id": "n05",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas tinggi, suku kata mati, vokal pendek, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "naik",
    "tinggi",
    "rendah",
    "sedang"
   ],
   "answer": 2,
   "explain": "Contoh: \u0e2b\u0e01 = h\u00f2k (enam)."
  },
  {
   "id": "n06",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas tinggi, suku kata mati, vokal panjang, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "sedang",
    "rendah",
    "turun",
    "naik"
   ],
   "answer": 1,
   "explain": "Contoh: \u0e16\u0e39\u0e01 = th\u00f9uk (murah; benar)."
  },
  {
   "id": "n07",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas rendah, suku kata hidup, vokal panjang, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "sedang",
    "naik",
    "rendah",
    "tinggi"
   ],
   "answer": 0,
   "explain": "Contoh: \u0e21\u0e32 = maa (datang)."
  },
  {
   "id": "n08",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas rendah, suku kata mati, vokal pendek, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "sedang",
    "naik",
    "tinggi",
    "rendah"
   ],
   "answer": 2,
   "explain": "Contoh: \u0e19\u0e01 = n\u00f3k (burung)."
  },
  {
   "id": "n09",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 1,
   "prompt": "Konsonan kelas rendah, suku kata mati, vokal panjang, tanpa tanda nada. Nadanya apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "sedang",
    "tinggi",
    "rendah",
    "turun"
   ],
   "answer": 3,
   "explain": "Contoh: \u0e21\u0e32\u0e01 = m\u00e2ak (banyak, sangat)."
  },
  {
   "id": "k01",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 2,
   "prompt": "Konsonan kelas tengah dengan tanda nada \u0e48 (mai ek) menghasilkan nada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "naik",
    "sedang",
    "turun",
    "rendah"
   ],
   "answer": 3,
   "explain": "Contoh: \u0e1b\u0e48\u0e32 = p\u00e0a (hutan)."
  },
  {
   "id": "k02",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 2,
   "prompt": "Konsonan kelas tinggi dengan tanda nada \u0e48 (mai ek) menghasilkan nada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "rendah",
    "turun",
    "sedang"
   ],
   "answer": 1,
   "explain": "Contoh: \u0e02\u0e48\u0e32\u0e27 = kh\u00e0ao (berita)."
  },
  {
   "id": "k03",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 2,
   "prompt": "Konsonan kelas rendah dengan tanda nada \u0e48 (mai ek) menghasilkan nada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "naik",
    "turun",
    "sedang",
    "rendah"
   ],
   "answer": 1,
   "explain": "Contoh: \u0e44\u0e21\u0e48 = m\u00e2i (tidak)."
  },
  {
   "id": "k04",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 2,
   "prompt": "Konsonan kelas tengah dengan tanda nada \u0e49 (mai tho) menghasilkan nada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "turun",
    "sedang",
    "rendah",
    "naik"
   ],
   "answer": 0,
   "explain": "Contoh: \u0e1b\u0e49\u0e32 = p\u00e2a (bibi)."
  },
  {
   "id": "k05",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 2,
   "prompt": "Konsonan kelas tinggi dengan tanda nada \u0e49 (mai tho) menghasilkan nada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "turun",
    "naik",
    "sedang",
    "rendah"
   ],
   "answer": 0,
   "explain": "Contoh: \u0e02\u0e49\u0e32\u0e27 = kh\u00e2ao (beras, nasi)."
  },
  {
   "id": "k06",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 2,
   "prompt": "Konsonan kelas rendah dengan tanda nada \u0e49 (mai tho) menghasilkan nada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "turun",
    "tinggi",
    "sedang",
    "naik"
   ],
   "answer": 1,
   "explain": "Contoh: \u0e21\u0e49\u0e32 = m\u00e1a (kuda)."
  },
  {
   "id": "k07",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 2,
   "prompt": "Konsonan kelas tengah dengan tanda nada \u0e4a (mai tri) menghasilkan nada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "turun",
    "tinggi",
    "naik",
    "rendah"
   ],
   "answer": 1,
   "explain": "Contoh: \u0e42\u0e15\u0e4a\u0e30 = t\u00f3 (meja)."
  },
  {
   "id": "k08",
   "kind": "mcq",
   "cat": "aturan",
   "catLabel": "Aturan nada",
   "stage": 2,
   "prompt": "Konsonan kelas tengah dengan tanda nada \u0e4b (mai chattawa) menghasilkan nada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "rendah",
    "naik",
    "turun"
   ],
   "answer": 2,
   "explain": "Contoh: \u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27 = d\u01d0ao (sebentar)."
  },
  {
   "id": "s01",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e01\u0e32",
   "audio": "\u0e01\u0e32",
   "promptLabel": "arti: burung gagak",
   "optionsLang": "id",
   "options": [
    "sedang",
    "rendah",
    "naik",
    "tinggi"
   ],
   "answer": 0,
   "explain": "\u0e01 kelas tengah + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e01\u0e32 = kaa (burung gagak)"
  },
  {
   "id": "s02",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e14\u0e35",
   "audio": "\u0e14\u0e35",
   "promptLabel": "arti: baik",
   "optionsLang": "id",
   "options": [
    "sedang",
    "naik",
    "rendah",
    "turun"
   ],
   "answer": 0,
   "explain": "\u0e14 kelas tengah + vokal \u25cc\u0e35 panjang + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e14\u0e35 = dii (baik)"
  },
  {
   "id": "s03",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e08\u0e30",
   "audio": "\u0e08\u0e30",
   "promptLabel": "arti: akan",
   "optionsLang": "id",
   "options": [
    "sedang",
    "naik",
    "tinggi",
    "rendah"
   ],
   "answer": 3,
   "explain": "\u0e08 kelas tengah + vokal \u25cc\u0e30 pendek + tanpa konsonan akhir sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah.",
   "reveal": "\u0e08\u0e30 = j\u00e0 (akan)"
  },
  {
   "id": "s04",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e08\u0e32\u0e01",
   "audio": "\u0e08\u0e32\u0e01",
   "promptLabel": "arti: dari",
   "optionsLang": "id",
   "options": [
    "rendah",
    "tinggi",
    "naik",
    "turun"
   ],
   "answer": 0,
   "explain": "\u0e08 kelas tengah + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah.",
   "reveal": "\u0e08\u0e32\u0e01 = j\u00e0ak (dari)"
  },
  {
   "id": "s05",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e1b\u0e34\u0e14",
   "audio": "\u0e1b\u0e34\u0e14",
   "promptLabel": "arti: menutup",
   "optionsLang": "id",
   "options": [
    "rendah",
    "turun",
    "tinggi",
    "sedang"
   ],
   "answer": 0,
   "explain": "\u0e1b kelas tengah + vokal \u25cc\u0e34\u25cc pendek + berakhiran \u0e14 (bunyi -t) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah.",
   "reveal": "\u0e1b\u0e34\u0e14 = p\u00ect (menutup)"
  },
  {
   "id": "s06",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e40\u0e1b\u0e47\u0e19",
   "audio": "\u0e40\u0e1b\u0e47\u0e19",
   "promptLabel": "arti: adalah, menjadi",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "turun",
    "sedang",
    "naik"
   ],
   "answer": 2,
   "explain": "\u0e1b kelas tengah + vokal \u0e40\u25cc\u0e47\u25cc pendek + berakhiran \u0e19 (bunyi -n) sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e40\u0e1b\u0e47\u0e19 = pen (adalah, menjadi)"
  },
  {
   "id": "s07",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e21\u0e32",
   "audio": "\u0e21\u0e32",
   "promptLabel": "arti: datang",
   "optionsLang": "id",
   "options": [
    "sedang",
    "naik",
    "tinggi",
    "turun"
   ],
   "answer": 0,
   "explain": "\u0e21 kelas rendah + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e21\u0e32 = maa (datang)"
  },
  {
   "id": "s08",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e04\u0e19",
   "audio": "\u0e04\u0e19",
   "promptLabel": "arti: orang",
   "optionsLang": "id",
   "options": [
    "turun",
    "sedang",
    "tinggi",
    "rendah"
   ],
   "answer": 1,
   "explain": "\u0e04 kelas rendah + vokal \u25cc\u25cc pendek + berakhiran \u0e19 (bunyi -n) sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e04\u0e19 = khon (orang)"
  },
  {
   "id": "s09",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e02\u0e32",
   "audio": "\u0e02\u0e32",
   "promptLabel": "arti: kaki",
   "optionsLang": "id",
   "options": [
    "turun",
    "rendah",
    "naik",
    "sedang"
   ],
   "answer": 2,
   "explain": "\u0e02 kelas tinggi + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada naik.",
   "reveal": "\u0e02\u0e32 = kh\u01cea (kaki)"
  },
  {
   "id": "s10",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 1,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e19\u0e01",
   "audio": "\u0e19\u0e01",
   "promptLabel": "arti: burung",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "sedang",
    "rendah",
    "turun"
   ],
   "answer": 0,
   "explain": "\u0e19 kelas rendah + vokal \u25cc\u25cc pendek + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada tinggi.",
   "reveal": "\u0e19\u0e01 = n\u00f3k (burung)"
  },
  {
   "id": "s11",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e1b\u0e48\u0e32",
   "audio": "\u0e1b\u0e48\u0e32",
   "promptLabel": "arti: hutan",
   "optionsLang": "id",
   "options": [
    "naik",
    "rendah",
    "turun",
    "sedang"
   ],
   "answer": 1,
   "explain": "\u0e1b kelas tengah + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai ek \u2192 nada rendah.",
   "reveal": "\u0e1b\u0e48\u0e32 = p\u00e0a (hutan)"
  },
  {
   "id": "s12",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e1b\u0e49\u0e32",
   "audio": "\u0e1b\u0e49\u0e32",
   "promptLabel": "arti: bibi (saudara tua ayah/ibu)",
   "optionsLang": "id",
   "options": [
    "naik",
    "turun",
    "sedang",
    "tinggi"
   ],
   "answer": 1,
   "explain": "\u0e1b kelas tengah + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai tho \u2192 nada turun.",
   "reveal": "\u0e1b\u0e49\u0e32 = p\u00e2a (bibi (saudara tua ayah/ibu))"
  },
  {
   "id": "s13",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e44\u0e21\u0e48",
   "audio": "\u0e44\u0e21\u0e48",
   "promptLabel": "arti: tidak",
   "optionsLang": "id",
   "options": [
    "sedang",
    "naik",
    "turun",
    "rendah"
   ],
   "answer": 2,
   "explain": "\u0e21 kelas rendah + vokal \u0e44\u25cc pendek + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai ek \u2192 nada turun.",
   "reveal": "\u0e44\u0e21\u0e48 = m\u00e2i (tidak)"
  },
  {
   "id": "s14",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e21\u0e49\u0e32",
   "audio": "\u0e21\u0e49\u0e32",
   "promptLabel": "arti: kuda",
   "optionsLang": "id",
   "options": [
    "turun",
    "rendah",
    "tinggi",
    "naik"
   ],
   "answer": 2,
   "explain": "\u0e21 kelas rendah + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai tho \u2192 nada tinggi.",
   "reveal": "\u0e21\u0e49\u0e32 = m\u00e1a (kuda)"
  },
  {
   "id": "s15",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e02\u0e48\u0e32\u0e27",
   "audio": "\u0e02\u0e48\u0e32\u0e27",
   "promptLabel": "arti: berita",
   "optionsLang": "id",
   "options": [
    "sedang",
    "tinggi",
    "naik",
    "rendah"
   ],
   "answer": 3,
   "explain": "\u0e02 kelas tinggi + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e27 (bunyi -w) sehingga suku kata hidup + bertanda mai ek \u2192 nada rendah.",
   "reveal": "\u0e02\u0e48\u0e32\u0e27 = kh\u00e0ao (berita)"
  },
  {
   "id": "s16",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e02\u0e49\u0e32\u0e27",
   "audio": "\u0e02\u0e49\u0e32\u0e27",
   "promptLabel": "arti: beras, nasi",
   "optionsLang": "id",
   "options": [
    "turun",
    "sedang",
    "naik",
    "rendah"
   ],
   "answer": 0,
   "explain": "\u0e02 kelas tinggi + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e27 (bunyi -w) sehingga suku kata hidup + bertanda mai tho \u2192 nada turun.",
   "reveal": "\u0e02\u0e49\u0e32\u0e27 = kh\u00e2ao (beras, nasi)"
  },
  {
   "id": "s17",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e21\u0e32\u0e01",
   "audio": "\u0e21\u0e32\u0e01",
   "promptLabel": "arti: banyak, sangat",
   "optionsLang": "id",
   "options": [
    "turun",
    "tinggi",
    "rendah",
    "naik"
   ],
   "answer": 0,
   "explain": "\u0e21 kelas rendah + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada turun.",
   "reveal": "\u0e21\u0e32\u0e01 = m\u00e2ak (banyak, sangat)"
  },
  {
   "id": "s18",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e23\u0e31\u0e01",
   "audio": "\u0e23\u0e31\u0e01",
   "promptLabel": "arti: cinta, mencintai",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "naik",
    "rendah",
    "turun"
   ],
   "answer": 0,
   "explain": "\u0e23 kelas rendah + vokal \u25cc\u0e31\u25cc pendek + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada tinggi.",
   "reveal": "\u0e23\u0e31\u0e01 = r\u00e1k (cinta, mencintai)"
  },
  {
   "id": "s19",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e25\u0e39\u0e01",
   "audio": "\u0e25\u0e39\u0e01",
   "promptLabel": "arti: anak (keturunan)",
   "optionsLang": "id",
   "options": [
    "turun",
    "naik",
    "rendah",
    "sedang"
   ],
   "answer": 0,
   "explain": "\u0e25 kelas rendah + vokal \u25cc\u0e39\u25cc panjang + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada turun.",
   "reveal": "\u0e25\u0e39\u0e01 = l\u00fbuk (anak (keturunan))"
  },
  {
   "id": "s20",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2a\u0e34\u0e1a",
   "audio": "\u0e2a\u0e34\u0e1a",
   "promptLabel": "arti: sepuluh",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "naik",
    "rendah",
    "sedang"
   ],
   "answer": 2,
   "explain": "\u0e2a kelas tinggi + vokal \u25cc\u0e34\u25cc pendek + berakhiran \u0e1a (bunyi -p) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah.",
   "reveal": "\u0e2a\u0e34\u0e1a = s\u00ecp (sepuluh)"
  },
  {
   "id": "s21",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2a\u0e32\u0e21",
   "audio": "\u0e2a\u0e32\u0e21",
   "promptLabel": "arti: tiga",
   "optionsLang": "id",
   "options": [
    "naik",
    "sedang",
    "turun",
    "tinggi"
   ],
   "answer": 0,
   "explain": "\u0e2a kelas tinggi + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e21 (bunyi -m) sehingga suku kata hidup + tanpa tanda nada \u2192 nada naik.",
   "reveal": "\u0e2a\u0e32\u0e21 = s\u01ceam (tiga)"
  },
  {
   "id": "s22",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2b\u0e49\u0e32",
   "audio": "\u0e2b\u0e49\u0e32",
   "promptLabel": "arti: lima",
   "optionsLang": "id",
   "options": [
    "naik",
    "tinggi",
    "sedang",
    "turun"
   ],
   "answer": 3,
   "explain": "\u0e2b kelas tinggi + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai tho \u2192 nada turun.",
   "reveal": "\u0e2b\u0e49\u0e32 = h\u00e2a (lima)"
  },
  {
   "id": "s23",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2b\u0e01",
   "audio": "\u0e2b\u0e01",
   "promptLabel": "arti: enam",
   "optionsLang": "id",
   "options": [
    "sedang",
    "tinggi",
    "rendah",
    "naik"
   ],
   "answer": 2,
   "explain": "\u0e2b kelas tinggi + vokal \u25cc\u25cc pendek + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah.",
   "reveal": "\u0e2b\u0e01 = h\u00f2k (enam)"
  },
  {
   "id": "s24",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 2,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e1c\u0e21",
   "audio": "\u0e1c\u0e21",
   "promptLabel": "arti: saya (dipakai lelaki); rambut",
   "optionsLang": "id",
   "options": [
    "turun",
    "sedang",
    "naik",
    "tinggi"
   ],
   "answer": 2,
   "explain": "\u0e1c kelas tinggi + vokal \u25cc\u25cc pendek + berakhiran \u0e21 (bunyi -m) sehingga suku kata hidup + tanpa tanda nada \u2192 nada naik.",
   "reveal": "\u0e1c\u0e21 = ph\u01d2m (saya (dipakai lelaki); rambut)"
  },
  {
   "id": "s25",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e16\u0e39\u0e01",
   "audio": "\u0e16\u0e39\u0e01",
   "promptLabel": "arti: murah; benar",
   "optionsLang": "id",
   "options": [
    "sedang",
    "rendah",
    "tinggi",
    "turun"
   ],
   "answer": 1,
   "explain": "\u0e16 kelas tinggi + vokal \u25cc\u0e39\u25cc panjang + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah.",
   "reveal": "\u0e16\u0e39\u0e01 = th\u00f9uk (murah; benar)"
  },
  {
   "id": "s26",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e1d\u0e19",
   "audio": "\u0e1d\u0e19",
   "promptLabel": "arti: hujan",
   "optionsLang": "id",
   "options": [
    "naik",
    "tinggi",
    "turun",
    "sedang"
   ],
   "answer": 0,
   "explain": "\u0e1d kelas tinggi + vokal \u25cc\u25cc pendek + berakhiran \u0e19 (bunyi -n) sehingga suku kata hidup + tanpa tanda nada \u2192 nada naik.",
   "reveal": "\u0e1d\u0e19 = f\u01d2n (hujan)"
  },
  {
   "id": "s27",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e19\u0e49\u0e33",
   "audio": "\u0e19\u0e49\u0e33",
   "promptLabel": "arti: air",
   "optionsLang": "id",
   "options": [
    "turun",
    "tinggi",
    "sedang",
    "rendah"
   ],
   "answer": 1,
   "explain": "\u0e19 kelas rendah + vokal \u25cc\u0e33 pendek + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai tho \u2192 nada tinggi.",
   "reveal": "\u0e19\u0e49\u0e33 = n\u00e1am (air)"
  },
  {
   "id": "s28",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e17\u0e35\u0e48",
   "audio": "\u0e17\u0e35\u0e48",
   "promptLabel": "arti: di; yang; tempat",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "naik",
    "rendah",
    "turun"
   ],
   "answer": 3,
   "explain": "\u0e17 kelas rendah + vokal \u25cc\u0e35 panjang + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai ek \u2192 nada turun.",
   "reveal": "\u0e17\u0e35\u0e48 = th\u00eei (di; yang; tempat)"
  },
  {
   "id": "s29",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e22\u0e32\u0e01",
   "audio": "\u0e22\u0e32\u0e01",
   "promptLabel": "arti: sulit",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "rendah",
    "naik",
    "turun"
   ],
   "answer": 3,
   "explain": "\u0e22 kelas rendah + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada turun.",
   "reveal": "\u0e22\u0e32\u0e01 = y\u00e2ak (sulit)"
  },
  {
   "id": "s30",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e40\u0e25\u0e47\u0e01",
   "audio": "\u0e40\u0e25\u0e47\u0e01",
   "promptLabel": "arti: kecil",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "naik",
    "rendah",
    "sedang"
   ],
   "answer": 0,
   "explain": "\u0e25 kelas rendah + vokal \u0e40\u25cc\u0e47\u25cc pendek + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada tinggi.",
   "reveal": "\u0e40\u0e25\u0e47\u0e01 = l\u00e9k (kecil)"
  },
  {
   "id": "s31",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e0a\u0e32",
   "audio": "\u0e0a\u0e32",
   "promptLabel": "arti: teh",
   "optionsLang": "id",
   "options": [
    "sedang",
    "tinggi",
    "rendah",
    "turun"
   ],
   "answer": 0,
   "explain": "\u0e0a kelas rendah + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e0a\u0e32 = chaa (teh)"
  },
  {
   "id": "s32",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e07\u0e32\u0e19",
   "audio": "\u0e07\u0e32\u0e19",
   "promptLabel": "arti: pekerjaan, acara",
   "optionsLang": "id",
   "options": [
    "naik",
    "sedang",
    "turun",
    "rendah"
   ],
   "answer": 1,
   "explain": "\u0e07 kelas rendah + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e19 (bunyi -n) sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e07\u0e32\u0e19 = ngaan (pekerjaan, acara)"
  },
  {
   "id": "s33",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e27\u0e31\u0e19",
   "audio": "\u0e27\u0e31\u0e19",
   "promptLabel": "arti: hari",
   "optionsLang": "id",
   "options": [
    "sedang",
    "naik",
    "tinggi",
    "rendah"
   ],
   "answer": 0,
   "explain": "\u0e27 kelas rendah + vokal \u25cc\u0e31\u25cc pendek + berakhiran \u0e19 (bunyi -n) sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e27\u0e31\u0e19 = wan (hari)"
  },
  {
   "id": "s34",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e42\u0e15\u0e4a\u0e30",
   "audio": "\u0e42\u0e15\u0e4a\u0e30",
   "promptLabel": "arti: meja",
   "optionsLang": "id",
   "options": [
    "rendah",
    "naik",
    "sedang",
    "tinggi"
   ],
   "answer": 3,
   "explain": "\u0e15 kelas tengah + vokal \u0e42\u25cc\u0e30 pendek + tanpa konsonan akhir sehingga suku kata mati + bertanda mai tri \u2192 nada tinggi.",
   "reveal": "\u0e42\u0e15\u0e4a\u0e30 = t\u00f3 (meja)"
  },
  {
   "id": "s35",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 3,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27",
   "audio": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27",
   "promptLabel": "arti: sebentar",
   "optionsLang": "id",
   "options": [
    "turun",
    "rendah",
    "naik",
    "sedang"
   ],
   "answer": 2,
   "explain": "\u0e14 kelas tengah + vokal \u0e40\u25cc\u0e35\u0e22\u25cc panjang + berakhiran \u0e27 (bunyi -w) sehingga suku kata hidup + bertanda mai chattawa \u2192 nada naik.",
   "reveal": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27 = d\u01d0ao (sebentar)"
  },
  {
   "id": "s36",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2b\u0e21\u0e32",
   "audio": "\u0e2b\u0e21\u0e32",
   "promptLabel": "arti: anjing",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "sedang",
    "naik",
    "turun"
   ],
   "answer": 2,
   "explain": "\u0e2b nam di depan \u0e21 (\u0e2b tidak dibunyikan) sehingga kelasnya menjadi tinggi + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada naik.",
   "reveal": "\u0e2b\u0e21\u0e32 = m\u01cea (anjing)"
  },
  {
   "id": "s37",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "audio": "\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "promptLabel": "arti: satu",
   "optionsLang": "id",
   "options": [
    "naik",
    "sedang",
    "rendah",
    "tinggi"
   ],
   "answer": 2,
   "explain": "\u0e2b nam di depan \u0e19 (\u0e2b tidak dibunyikan) sehingga kelasnya menjadi tinggi + vokal \u25cc\u0e36\u25cc pendek + berakhiran \u0e07 (bunyi -ng) sehingga suku kata hidup + bertanda mai ek \u2192 nada rendah.",
   "reveal": "\u0e2b\u0e19\u0e36\u0e48\u0e07 = n\u00f9eng (satu)"
  },
  {
   "id": "s38",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e43\u0e2b\u0e49",
   "audio": "\u0e43\u0e2b\u0e49",
   "promptLabel": "arti: memberi; supaya",
   "optionsLang": "id",
   "options": [
    "rendah",
    "turun",
    "sedang",
    "tinggi"
   ],
   "answer": 1,
   "explain": "\u0e2b kelas tinggi + vokal \u0e43\u25cc pendek + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai tho \u2192 nada turun.",
   "reveal": "\u0e43\u0e2b\u0e49 = h\u00e2i (memberi; supaya)"
  },
  {
   "id": "s39",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e43\u0e2b\u0e0d\u0e48",
   "audio": "\u0e43\u0e2b\u0e0d\u0e48",
   "promptLabel": "arti: besar",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "rendah",
    "turun",
    "naik"
   ],
   "answer": 1,
   "explain": "\u0e2b nam di depan \u0e0d (\u0e2b tidak dibunyikan) sehingga kelasnya menjadi tinggi + vokal \u0e43\u25cc pendek + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai ek \u2192 nada rendah.",
   "reveal": "\u0e43\u0e2b\u0e0d\u0e48 = y\u00e0i (besar)"
  },
  {
   "id": "s40",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e44\u0e2b\u0e21",
   "audio": "\u0e44\u0e2b\u0e21",
   "promptLabel": "arti: partikel penanda pertanyaan",
   "optionsLang": "id",
   "options": [
    "turun",
    "sedang",
    "naik",
    "tinggi"
   ],
   "answer": 2,
   "explain": "\u0e2b nam di depan \u0e21 (\u0e2b tidak dibunyikan) sehingga kelasnya menjadi tinggi + vokal \u0e44\u25cc pendek + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada naik. Menurut aturan ejaan, kata ini bernada naik. Dalam percakapan sehari-hari partikel ini hampir selalu diucapkan bernada tinggi (m\u00e1i), dan sering ditulis \u0e21\u0e31\u0e49\u0e22. Aturan ejaan dan kebiasaan lisan berbeda di sini.",
   "reveal": "\u0e44\u0e2b\u0e21 = m\u01cei (partikel penanda pertanyaan)"
  },
  {
   "id": "s41",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2d\u0e22\u0e39\u0e48",
   "audio": "\u0e2d\u0e22\u0e39\u0e48",
   "promptLabel": "arti: berada, tinggal di",
   "optionsLang": "id",
   "options": [
    "rendah",
    "tinggi",
    "sedang",
    "turun"
   ],
   "answer": 0,
   "explain": "\u0e2d\u0e22 berkelas tengah (hanya pada empat kata) + vokal \u25cc\u0e39 panjang + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai ek \u2192 nada rendah. \u0e2d\u0e22 termasuk empat kata saja (\u0e2d\u0e22\u0e48\u0e32 \u0e2d\u0e22\u0e39\u0e48 \u0e2d\u0e22\u0e48\u0e32\u0e07 \u0e2d\u0e22\u0e32\u0e01). \u0e2d tidak dibunyikan dan hanya menjadikan kata itu berkelas tengah.",
   "reveal": "\u0e2d\u0e22\u0e39\u0e48 = y\u00f9u (berada, tinggal di)"
  },
  {
   "id": "s42",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e1b\u0e25\u0e32",
   "audio": "\u0e1b\u0e25\u0e32",
   "promptLabel": "arti: ikan",
   "optionsLang": "id",
   "options": [
    "tinggi",
    "naik",
    "rendah",
    "sedang"
   ],
   "answer": 3,
   "explain": "gugus \u0e1b\u0e25, kelasnya mengikuti \u0e1b yaitu kelas tengah + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang.",
   "reveal": "\u0e1b\u0e25\u0e32 = plaa (ikan)"
  },
  {
   "id": "s43",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e01\u0e25\u0e31\u0e1a",
   "audio": "\u0e01\u0e25\u0e31\u0e1a",
   "promptLabel": "arti: kembali, pulang",
   "optionsLang": "id",
   "options": [
    "rendah",
    "naik",
    "tinggi",
    "sedang"
   ],
   "answer": 0,
   "explain": "gugus \u0e01\u0e25, kelasnya mengikuti \u0e01 yaitu kelas tengah + vokal \u25cc\u0e31\u25cc pendek + berakhiran \u0e1a (bunyi -p) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah.",
   "reveal": "\u0e01\u0e25\u0e31\u0e1a = kl\u00e0p (kembali, pulang)"
  },
  {
   "id": "s44",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 4,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e04\u0e23\u0e31\u0e1a",
   "promptLabel": "arti: partikel sopan (dipakai lelaki)",
   "optionsLang": "id",
   "options": [
    "rendah",
    "tinggi",
    "naik",
    "turun"
   ],
   "answer": 1,
   "explain": "gugus \u0e04\u0e23, kelasnya mengikuti \u0e04 yaitu kelas rendah + vokal \u25cc\u0e31\u25cc pendek + berakhiran \u0e1a (bunyi -p) sehingga suku kata mati + tanpa tanda nada \u2192 nada tinggi.",
   "reveal": "\u0e04\u0e23\u0e31\u0e1a = khr\u00e1p (partikel sopan (dipakai lelaki))"
  },
  {
   "id": "s45",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 5,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e02\u0e19\u0e21",
   "audio": "\u0e02\u0e19\u0e21",
   "promptLabel": "arti: kue, penganan",
   "optionsLang": "id",
   "options": [
    "rendah - turun",
    "rendah - naik",
    "tinggi - tinggi",
    "naik - naik"
   ],
   "answer": 1,
   "explain": "\u0e02 kelas tinggi + vokal \u25cc pendek + tanpa konsonan akhir sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah. \u0e19 kelas tinggi + vokal \u25cc\u25cc pendek + berakhiran \u0e21 (bunyi -m) sehingga suku kata hidup + tanpa tanda nada \u2192 nada naik. Aksara nam: \u0e02 berdiri sendiri sebagai suku kata (kh\u00e0), lalu menularkan kelas tingginya ke \u0e19\u0e21 sehingga bernada naik, bukan sedang.",
   "reveal": "\u0e02\u0e19\u0e21 = kh\u00e0-n\u01d2m (kue, penganan)"
  },
  {
   "id": "s46",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 5,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e15\u0e25\u0e32\u0e14",
   "audio": "\u0e15\u0e25\u0e32\u0e14",
   "promptLabel": "arti: pasar",
   "optionsLang": "id",
   "options": [
    "turun - sedang",
    "rendah - rendah",
    "rendah - naik",
    "tinggi - rendah"
   ],
   "answer": 1,
   "explain": "\u0e15 kelas tengah + vokal \u25cc pendek + tanpa konsonan akhir sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah. \u0e25 kelas tengah + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e14 (bunyi -t) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah. Aksara nam dengan pemimpin kelas tengah: \u0e25\u0e32\u0e14 ikut kelas tengah, dan karena suku katanya mati, nadanya rendah.",
   "reveal": "\u0e15\u0e25\u0e32\u0e14 = t\u00e0-l\u00e0at (pasar)"
  },
  {
   "id": "s47",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 5,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2a\u0e19\u0e38\u0e01",
   "audio": "\u0e2a\u0e19\u0e38\u0e01",
   "promptLabel": "arti: menyenangkan, seru",
   "optionsLang": "id",
   "options": [
    "sedang - naik",
    "naik - tinggi",
    "rendah - turun",
    "rendah - rendah"
   ],
   "answer": 3,
   "explain": "\u0e2a kelas tinggi + vokal \u25cc pendek + tanpa konsonan akhir sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah. \u0e19 kelas tinggi + vokal \u25cc\u0e38\u25cc pendek + berakhiran \u0e01 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah.",
   "reveal": "\u0e2a\u0e19\u0e38\u0e01 = s\u00e0-n\u00f9k (menyenangkan, seru)"
  },
  {
   "id": "s48",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 5,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2a\u0e1a\u0e32\u0e22",
   "audio": "\u0e2a\u0e1a\u0e32\u0e22",
   "promptLabel": "arti: nyaman, sehat",
   "optionsLang": "id",
   "options": [
    "sedang - sedang",
    "rendah - sedang",
    "naik - turun",
    "rendah - naik"
   ],
   "answer": 1,
   "explain": "\u0e2a kelas tinggi + vokal \u25cc pendek + tanpa konsonan akhir sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah. \u0e1a kelas tengah + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e22 (bunyi -y) sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang. Di sini \u0e1a sudah berkelas tengah sendiri, jadi tidak ada penularan kelas. Aturan aksara nam hanya mengubah nada konsonan nyaring kelas rendah (\u0e07 \u0e0d \u0e13 \u0e19 \u0e21 \u0e22 \u0e23 \u0e25 \u0e27).",
   "reveal": "\u0e2a\u0e1a\u0e32\u0e22 = s\u00e0-baai (nyaman, sehat)"
  },
  {
   "id": "s49",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 6,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22",
   "audio": "\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22",
   "promptLabel": "arti: lelah",
   "optionsLang": "id",
   "options": [
    "naik",
    "tinggi",
    "rendah",
    "sedang"
   ],
   "answer": 2,
   "explain": "\u0e2b nam di depan \u0e19 (\u0e2b tidak dibunyikan) sehingga kelasnya menjadi tinggi + vokal \u0e40\u25cc\u0e37\u0e2d\u25cc panjang + berakhiran \u0e22 (bunyi -y) sehingga suku kata hidup + bertanda mai ek \u2192 nada rendah. Tiga hal sekaligus dalam satu suku kata: \u0e2b nam, vokal rangkap \u0e40\u25cc\u0e37\u0e2d, dan konsonan akhir \u0e22.",
   "reveal": "\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22 = n\u00f9eai (lelah)"
  },
  {
   "id": "s50",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 6,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e40\u0e1b\u0e23\u0e35\u0e49\u0e22\u0e27",
   "audio": "\u0e40\u0e1b\u0e23\u0e35\u0e49\u0e22\u0e27",
   "promptLabel": "arti: asam",
   "optionsLang": "id",
   "options": [
    "turun",
    "naik",
    "tinggi",
    "sedang"
   ],
   "answer": 0,
   "explain": "gugus \u0e1b\u0e23, kelasnya mengikuti \u0e1b yaitu kelas tengah + vokal \u0e40\u25cc\u0e35\u0e22\u25cc panjang + berakhiran \u0e27 (bunyi -w) sehingga suku kata hidup + bertanda mai tho \u2192 nada turun. Gugus \u0e1b\u0e23 berkelas tengah mengikuti \u0e1b, lalu mai tho menjadikannya nada turun.",
   "reveal": "\u0e40\u0e1b\u0e23\u0e35\u0e49\u0e22\u0e27 = pr\u00eeao (asam)"
  },
  {
   "id": "s51",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 6,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32",
   "audio": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32",
   "promptLabel": "arti: tas",
   "optionsLang": "id",
   "options": [
    "tinggi - turun",
    "turun - tinggi",
    "sedang - rendah",
    "rendah - naik"
   ],
   "answer": 3,
   "explain": "gugus \u0e01\u0e23, kelasnya mengikuti \u0e01 yaitu kelas tengah + vokal \u25cc\u0e30 pendek + tanpa konsonan akhir sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah. \u0e1b kelas tengah + vokal \u0e40\u25cc\u0e32 pendek + tanpa konsonan akhir sehingga suku kata hidup + bertanda mai chattawa \u2192 nada naik. Suku kata pertama \u0e01\u0e23\u0e30 bervokal a pendek yang ditulis, suku kata kedua memakai mai chattawa pada konsonan kelas tengah.",
   "reveal": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32 = kr\u00e0-p\u01ceo (tas)"
  },
  {
   "id": "s52",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 6,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25",
   "audio": "\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25",
   "promptLabel": "arti: perawat",
   "optionsLang": "id",
   "options": [
    "tinggi - sedang - sedang",
    "sedang - tinggi - sedang",
    "sedang - sedang - naik",
    "tinggi - turun - tinggi"
   ],
   "answer": 0,
   "explain": "\u0e1e kelas rendah + vokal \u25cc pendek + tanpa konsonan akhir sehingga suku kata mati + tanpa tanda nada \u2192 nada tinggi. \u0e22 kelas rendah + vokal \u25cc\u0e32 panjang + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang. \u0e1a kelas tengah + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e25 (bunyi -n) sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang. \u0e1e berdiri sendiri sebagai suku kata, tetapi karena ia berkelas RENDAH, kelasnya tidak menular ke \u0e22\u0e32. Bandingkan \u0e02\u0e19\u0e21 yang pemimpinnya berkelas tinggi.",
   "reveal": "\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 = ph\u00e1-yaa-baan (perawat)"
  },
  {
   "id": "s53",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 6,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a",
   "audio": "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a",
   "promptLabel": "arti: untuk",
   "optionsLang": "id",
   "options": [
    "naik - naik",
    "turun - sedang",
    "naik - rendah",
    "tinggi - naik"
   ],
   "answer": 2,
   "explain": "\u0e2a kelas tinggi + vokal \u25cc\u0e33 pendek + tanpa konsonan akhir sehingga suku kata hidup + tanpa tanda nada \u2192 nada naik. \u0e2b nam di depan \u0e23 (\u0e2b tidak dibunyikan) sehingga kelasnya menjadi tinggi + vokal \u25cc\u0e31\u25cc pendek + berakhiran \u0e1a (bunyi -p) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah. \u0e2b nam berada di suku kata kedua, sehingga \u0e2b\u0e23\u0e31\u0e1a bernada rendah, bukan tinggi.",
   "reveal": "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a = s\u01cem-r\u00e0p (untuk)"
  },
  {
   "id": "s54",
   "kind": "mcq",
   "cat": "suku",
   "catLabel": "Nada kata",
   "stage": 6,
   "prompt": "Apa nada kata ini?",
   "promptTh": "\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e38\u0e02",
   "audio": "\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e38\u0e02",
   "promptLabel": "arti: kebahagiaan",
   "optionsLang": "id",
   "options": [
    "rendah - tinggi",
    "sedang - rendah",
    "sedang - tinggi",
    "rendah - sedang"
   ],
   "answer": 1,
   "explain": "gugus \u0e04\u0e27, kelasnya mengikuti \u0e04 yaitu kelas rendah + vokal \u25cc\u0e32\u25cc panjang + berakhiran \u0e21 (bunyi -m) sehingga suku kata hidup + tanpa tanda nada \u2192 nada sedang. \u0e2a kelas tinggi + vokal \u25cc\u0e38\u25cc pendek + berakhiran \u0e02 (bunyi -k) sehingga suku kata mati + tanpa tanda nada \u2192 nada rendah. \u0e04\u0e27 adalah gugus sejati yang kelasnya mengikuti \u0e04, yaitu kelas rendah. \u0e2a\u0e38\u0e02 adalah suku kata mati berkonsonan awal kelas tinggi, sehingga bernada rendah.",
   "reveal": "\u0e04\u0e27\u0e32\u0e21\u0e2a\u0e38\u0e02 = khwaam-s\u00f9k (kebahagiaan)"
  },
  {
   "id": "mp01",
   "kind": "flip",
   "cat": "pasangan",
   "catLabel": "Pasangan nada",
   "stage": 1,
   "th": "\u0e21\u0e32 / \u0e21\u0e49\u0e32 / \u0e2b\u0e21\u0e32",
   "audio": "\u0e21\u0e32 \u0e21\u0e49\u0e32 \u0e2b\u0e21\u0e32",
   "title": "\u0e21\u0e32 / \u0e21\u0e49\u0e32 / \u0e2b\u0e21\u0e32",
   "meaning": "Kata-kata ini hanya berbeda nada",
   "rows": [
    [
     "\u0e21\u0e32",
     "maa \u2014 datang"
    ],
    [
     "\u0e21\u0e49\u0e32",
     "m\u00e1a \u2014 kuda"
    ],
    [
     "\u0e2b\u0e21\u0e32",
     "m\u01cea \u2014 anjing"
    ]
   ],
   "note": "Tiga kata sehari-hari yang hanya berbeda nada. Perhatikan bahwa 'anjing' memerlukan \u0e2b nam untuk mencapai nada naik, sebab \u0e21 sendirian tidak bisa.",
   "hint": "Baca semuanya dengan nada yang berbeda, lalu cocokkan artinya"
  },
  {
   "id": "mp02",
   "kind": "flip",
   "cat": "pasangan",
   "catLabel": "Pasangan nada",
   "stage": 2,
   "th": "\u0e02\u0e32\u0e27 / \u0e02\u0e48\u0e32\u0e27 / \u0e02\u0e49\u0e32\u0e27",
   "audio": "\u0e02\u0e32\u0e27 \u0e02\u0e48\u0e32\u0e27 \u0e02\u0e49\u0e32\u0e27",
   "title": "\u0e02\u0e32\u0e27 / \u0e02\u0e48\u0e32\u0e27 / \u0e02\u0e49\u0e32\u0e27",
   "meaning": "Kata-kata ini hanya berbeda nada",
   "rows": [
    [
     "\u0e02\u0e32\u0e27",
     "kh\u01ceao \u2014 putih"
    ],
    [
     "\u0e02\u0e48\u0e32\u0e27",
     "kh\u00e0ao \u2014 berita"
    ],
    [
     "\u0e02\u0e49\u0e32\u0e27",
     "kh\u00e2ao \u2014 beras, nasi"
    ]
   ],
   "note": "Satu konsonan kelas tinggi (\u0e02) dengan tiga nada: tanpa tanda, mai ek, dan mai tho.",
   "hint": "Baca semuanya dengan nada yang berbeda, lalu cocokkan artinya"
  },
  {
   "id": "mp03",
   "kind": "flip",
   "cat": "pasangan",
   "catLabel": "Pasangan nada",
   "stage": 2,
   "th": "\u0e04\u0e32 / \u0e04\u0e48\u0e32 / \u0e04\u0e49\u0e32",
   "audio": "\u0e04\u0e32 \u0e04\u0e48\u0e32 \u0e04\u0e49\u0e32",
   "title": "\u0e04\u0e32 / \u0e04\u0e48\u0e32 / \u0e04\u0e49\u0e32",
   "meaning": "Kata-kata ini hanya berbeda nada",
   "rows": [
    [
     "\u0e04\u0e32",
     "khaa \u2014 tersangkut, terhenti"
    ],
    [
     "\u0e04\u0e48\u0e32",
     "kh\u00e2a \u2014 nilai, biaya"
    ],
    [
     "\u0e04\u0e49\u0e32",
     "kh\u00e1a \u2014 berdagang"
    ]
   ],
   "note": "Bandingkan dengan mp02: tanda nadanya sama tetapi hasilnya berbeda, karena \u0e04 berkelas rendah sedangkan \u0e02 berkelas tinggi.",
   "hint": "Baca semuanya dengan nada yang berbeda, lalu cocokkan artinya"
  },
  {
   "id": "mp04",
   "kind": "flip",
   "cat": "pasangan",
   "catLabel": "Pasangan nada",
   "stage": 3,
   "th": "\u0e40\u0e2a\u0e37\u0e2d / \u0e40\u0e2a\u0e37\u0e48\u0e2d / \u0e40\u0e2a\u0e37\u0e49\u0e2d",
   "audio": "\u0e40\u0e2a\u0e37\u0e2d \u0e40\u0e2a\u0e37\u0e48\u0e2d \u0e40\u0e2a\u0e37\u0e49\u0e2d",
   "title": "\u0e40\u0e2a\u0e37\u0e2d / \u0e40\u0e2a\u0e37\u0e48\u0e2d / \u0e40\u0e2a\u0e37\u0e49\u0e2d",
   "meaning": "Kata-kata ini hanya berbeda nada",
   "rows": [
    [
     "\u0e40\u0e2a\u0e37\u0e2d",
     "s\u01d4ea \u2014 harimau"
    ],
    [
     "\u0e40\u0e2a\u0e37\u0e48\u0e2d",
     "s\u00f9ea \u2014 tikar"
    ],
    [
     "\u0e40\u0e2a\u0e37\u0e49\u0e2d",
     "s\u00fbea \u2014 baju"
    ]
   ],
   "note": "Tiga kata yang tulisannya hanya berbeda tanda nada. Pembelajar sering mengucapkan 'baju' dengan nada naik, yang berarti 'harimau'.",
   "hint": "Baca semuanya dengan nada yang berbeda, lalu cocokkan artinya"
  },
  {
   "id": "mp05",
   "kind": "flip",
   "cat": "pasangan",
   "catLabel": "Pasangan nada",
   "stage": 4,
   "th": "\u0e1b\u0e32 / \u0e1b\u0e48\u0e32 / \u0e1b\u0e49\u0e32 / \u0e1b\u0e4a\u0e32 / \u0e1b\u0e4b\u0e32",
   "audio": "\u0e1b\u0e32 \u0e1b\u0e48\u0e32 \u0e1b\u0e49\u0e32 \u0e1b\u0e4a\u0e32 \u0e1b\u0e4b\u0e32",
   "title": "\u0e1b\u0e32 / \u0e1b\u0e48\u0e32 / \u0e1b\u0e49\u0e32 / \u0e1b\u0e4a\u0e32 / \u0e1b\u0e4b\u0e32",
   "meaning": "Kata-kata ini hanya berbeda nada",
   "rows": [
    [
     "\u0e1b\u0e32",
     "paa \u2014 melempar"
    ],
    [
     "\u0e1b\u0e48\u0e32",
     "p\u00e0a \u2014 hutan"
    ],
    [
     "\u0e1b\u0e49\u0e32",
     "p\u00e2a \u2014 bibi (saudara tua ayah/ibu)"
    ],
    [
     "\u0e1b\u0e4a\u0e32",
     "p\u00e1a \u2014 papa (tidak baku, dari bahasa Tionghoa)"
    ],
    [
     "\u0e1b\u0e4b\u0e32",
     "p\u01cea \u2014 papa, bos (akrab, tidak baku)"
    ]
   ],
   "note": "Kelas tengah adalah satu-satunya kelas yang bisa memakai keempat tanda nada, sehingga lima nada bisa ditulis dengan satu huruf yang sama. Dua kata terakhir adalah ragam percakapan, bukan ragam baku.",
   "hint": "Baca semuanya dengan nada yang berbeda, lalu cocokkan artinya"
  },
  {
   "id": "mp06",
   "kind": "flip",
   "cat": "pasangan",
   "catLabel": "Pasangan nada",
   "stage": 4,
   "th": "\u0e44\u0e01\u0e25 / \u0e43\u0e01\u0e25\u0e49",
   "audio": "\u0e44\u0e01\u0e25 \u0e43\u0e01\u0e25\u0e49",
   "title": "\u0e44\u0e01\u0e25 / \u0e43\u0e01\u0e25\u0e49",
   "meaning": "Kata-kata ini hanya berbeda nada",
   "rows": [
    [
     "\u0e44\u0e01\u0e25",
     "klai \u2014 jauh"
    ],
    [
     "\u0e43\u0e01\u0e25\u0e49",
     "kl\u00e2i \u2014 dekat"
    ]
   ],
   "note": "Dua kata berlawanan arti yang bunyinya hanya berbeda nada, dan ejaannya berbeda pada pilihan \u0e44/\u0e43. Inilah pasangan yang paling sering dikeluhkan pembelajar.",
   "hint": "Baca semuanya dengan nada yang berbeda, lalu cocokkan artinya"
  },
  {
   "id": "n-q01",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 1,
   "prompt": "Empat hal menentukan nada sebuah suku kata Thai. Yang mana BUKAN salah satunya?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Panjang kata secara keseluruhan",
    "Kelas konsonan awal",
    "Jenis suku kata: hidup atau mati",
    "Tanda nada, bila ada"
   ],
   "answer": 0,
   "explain": "Penentunya: kelas konsonan awal, jenis suku kata, panjang vokal, dan tanda nada. Jumlah suku kata tidak berpengaruh."
  },
  {
   "id": "n-q02",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 1,
   "prompt": "Kapan sebuah suku kata disebut MATI (\u0e04\u0e33\u0e15\u0e32\u0e22)?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Bervokal pendek tanpa konsonan akhir, atau berakhir pada bunyi k, t, p",
    "Bervokal panjang tanpa konsonan akhir",
    "Berakhir pada bunyi ng, n, m, y, w",
    "Memakai tanda nada mai ek"
   ],
   "answer": 0,
   "explain": "Suku kata hidup berakhir pada bunyi nyaring (ng, n, m, y, w) atau pada vokal panjang. Sisanya mati."
  },
  {
   "id": "n-q03",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 2,
   "prompt": "Kata \u0e44\u0e21\u0e48 memakai mai ek dan berawalan \u0e21 (kelas rendah). Apa nadanya?",
   "promptTh": "\u0e44\u0e21\u0e48",
   "optionsLang": "id",
   "options": [
    "Nada turun",
    "Nada rendah",
    "Nada tinggi",
    "Nada naik"
   ],
   "answer": 0,
   "explain": "Mai ek pada kelas rendah menghasilkan nada TURUN, bukan rendah. Nama tanda nada tidak menyebut nada hasilnya."
  },
  {
   "id": "n-q04",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 2,
   "prompt": "Kata \u0e21\u0e49\u0e32 memakai mai tho dan berawalan \u0e21 (kelas rendah). Apa nadanya?",
   "promptTh": "\u0e21\u0e49\u0e32",
   "optionsLang": "id",
   "options": [
    "Nada tinggi",
    "Nada turun",
    "Nada rendah",
    "Nada naik"
   ],
   "answer": 0,
   "explain": "Mai tho pada kelas rendah menghasilkan nada TINGGI. Bandingkan \u0e02\u0e49\u0e32\u0e27 (kelas tinggi + mai tho) yang bernada turun."
  },
  {
   "id": "n-q05",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 2,
   "prompt": "\u0e19\u0e01 dan \u0e21\u0e32\u0e01 sama-sama berawalan konsonan kelas rendah dan sama-sama suku kata mati, tetapi nadanya berbeda. Mengapa?",
   "promptTh": "\u0e19\u0e01 / \u0e21\u0e32\u0e01",
   "optionsLang": "id",
   "options": [
    "Vokal \u0e19\u0e01 pendek sehingga bernada tinggi; vokal \u0e21\u0e32\u0e01 panjang sehingga bernada turun",
    "Konsonan akhirnya berbeda",
    "\u0e21\u0e32\u0e01 memakai tanda nada yang tidak terlihat",
    "\u0e19\u0e01 kata benda sedangkan \u0e21\u0e32\u0e01 kata keterangan"
   ],
   "answer": 0,
   "explain": "Inilah satu-satunya keadaan ketika panjang vokal menentukan nada: suku kata mati dengan konsonan awal kelas rendah."
  },
  {
   "id": "n-q06",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 3,
   "prompt": "Suku kata hidup yang berkonsonan awal kelas tinggi dan TANPA tanda nada bernada apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Nada naik",
    "Nada sedang",
    "Nada rendah",
    "Nada turun"
   ],
   "answer": 0,
   "explain": "Contohnya \u0e02\u0e32 (kh\u01cea, kaki), \u0e2a\u0e32\u0e21 (s\u01ceam, tiga), \u0e1d\u0e19 (f\u01d2n, hujan). Kelas tinggi adalah satu-satunya kelas yang bernada naik tanpa tanda apa pun."
  },
  {
   "id": "n-q07",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 3,
   "prompt": "Mengapa mai tri dan mai chattawa hampir hanya dipakai pada konsonan kelas tengah?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Karena nada tinggi dan naik pada kelas rendah dan tinggi sudah bisa dicapai dengan pasangan huruf atau dengan \u0e2b nam",
    "Karena kedua tanda itu baru ditambahkan belakangan dan belum sempat dipakai luas",
    "Karena kelas tengah lebih sering dipakai daripada kelas lainnya",
    "Karena kedua tanda itu hanya boleh dipakai pada kata serapan"
   ],
   "answer": 0,
   "explain": "Setiap bunyi konsonan Thai punya pasangan huruf berkelas berbeda, dan \u0e2b nam melengkapi sisanya. Dengan begitu lima nada bisa dituliskan tanpa memerlukan dua tanda tambahan itu di luar kelas tengah."
  },
  {
   "id": "n-q08",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 4,
   "prompt": "Pada \u0e2b\u0e21\u0e32 (m\u01cea, anjing), mengapa diperlukan \u0e2b di depan \u0e21?",
   "promptTh": "\u0e2b\u0e21\u0e32",
   "optionsLang": "id",
   "options": [
    "Karena \u0e21 berkelas rendah dan tidak bisa menghasilkan nada naik",
    "Karena \u0e21 tidak bisa menjadi konsonan awal",
    "Karena vokal \u25cc\u0e32 perlu dua konsonan di depannya",
    "Karena kata itu serapan dari bahasa Pali"
   ],
   "answer": 0,
   "explain": "Kelas rendah tanpa tanda nada hanya menghasilkan nada sedang (hidup), tinggi (mati pendek), atau turun (mati panjang). Untuk nada naik dan rendah diperlukan \u0e2b nam."
  },
  {
   "id": "n-q09",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 4,
   "prompt": "Pada \u0e02\u0e19\u0e21 (kh\u00e0-n\u01d2m), mengapa suku kata kedua bernada naik padahal \u0e19 berkelas rendah?",
   "promptTh": "\u0e02\u0e19\u0e21",
   "optionsLang": "id",
   "options": [
    "Karena \u0e02 memimpinnya sebagai aksara nam, sehingga \u0e19\u0e21 ikut kelas tinggi",
    "Karena ada tanda nada yang tidak ditulis",
    "Karena suku kata kedua bervokal panjang",
    "Karena \u0e21 sebagai konsonan akhir menaikkan nada"
   ],
   "answer": 0,
   "explain": "Aksara nam (\u0e2d\u0e31\u0e01\u0e29\u0e23\u0e19\u0e33): konsonan kelas tinggi atau tengah yang berdiri sendiri sebagai suku kata menularkan kelasnya ke konsonan nyaring kelas rendah sesudahnya. Pola yang sama: \u0e15\u0e25\u0e32\u0e14, \u0e2a\u0e19\u0e38\u0e01, \u0e02\u0e19\u0e32\u0e14."
  },
  {
   "id": "n-q10",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 5,
   "prompt": "Kata mana yang bernada RENDAH?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e08\u0e32\u0e01",
    "\u0e08\u0e32\u0e19",
    "\u0e0a\u0e32",
    "\u0e0a\u0e49\u0e32\u0e07"
   ],
   "answer": 0,
   "explain": "\u0e08\u0e32\u0e01: \u0e08 kelas tengah + suku kata mati (berakhiran -k) tanpa tanda nada \u2192 nada rendah. \u0e08\u0e32\u0e19 hidup \u2192 sedang; \u0e0a\u0e32 kelas rendah hidup \u2192 sedang; \u0e0a\u0e49\u0e32\u0e07 kelas rendah + mai tho \u2192 tinggi."
  },
  {
   "id": "n-q11",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 5,
   "prompt": "Kata mana yang bernada TURUN?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e25\u0e39\u0e01",
    "\u0e25\u0e07",
    "\u0e23\u0e31\u0e01",
    "\u0e25\u0e32\u0e27"
   ],
   "answer": 0,
   "explain": "\u0e25\u0e39\u0e01: \u0e25 kelas rendah + suku kata mati bervokal panjang \u2192 nada turun. \u0e25\u0e07 hidup \u2192 sedang; \u0e23\u0e31\u0e01 mati pendek \u2192 tinggi; \u0e25\u0e32\u0e27 hidup \u2192 sedang."
  },
  {
   "id": "n-q12",
   "kind": "mcq",
   "cat": "soal-nada",
   "catLabel": "Soal nada",
   "stage": 6,
   "prompt": "Dalam percakapan sehari-hari, partikel pertanyaan \u0e44\u0e2b\u0e21 sering diucapkan bernada tinggi (m\u00e1i) dan ditulis \u0e21\u0e31\u0e49\u0e22. Apa artinya bagi pembelajar?",
   "promptTh": "\u0e44\u0e2b\u0e21 / \u0e21\u0e31\u0e49\u0e22",
   "optionsLang": "id",
   "options": [
    "Aturan ejaan dan kebiasaan lisan bisa berbeda, sehingga keduanya perlu diketahui",
    "Aturan nada yang dipelajari di modul ini salah",
    "\u0e21\u0e31\u0e49\u0e22 adalah satu-satunya ejaan yang benar",
    "Partikel itu sebenarnya tidak bernada"
   ],
   "answer": 0,
   "explain": "Aturan ejaan memberi nada naik; percakapan memakai nada tinggi. Keduanya hidup bersama: ejaan baku \u0e44\u0e2b\u0e21 tetap dipakai dalam tulisan resmi, \u0e21\u0e31\u0e49\u0e22 dipakai pada tulisan tidak resmi dan percakapan."
  }
 ],
 "dengar": [
  {
   "id": "d-p01-0",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 2,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e1b\u0e31\u0e01",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e1b\u0e31\u0e01",
    "\u0e1b\u0e32\u0e01"
   ],
   "answer": 0,
   "reveal": "\u0e1b\u0e31\u0e01 = p\u00e0k (menancapkan, menyulam)",
   "explain": "Keduanya bernada rendah. Yang berbeda hanya lama vokalnya: \u25cc\u0e31 pendek, \u25cc\u0e32 panjang. Telinga penutur bahasa Indonesia tidak terlatih membedakan ini karena panjang vokal tidak membedakan arti dalam bahasa Indonesia.  \u0e1b\u0e31\u0e01 = p\u00e0k (menancapkan, menyulam) \u00b7 \u0e1b\u0e32\u0e01 = p\u00e0ak (mulut)"
  },
  {
   "id": "d-p01-1",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 2,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e1b\u0e32\u0e01",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e1b\u0e31\u0e01",
    "\u0e1b\u0e32\u0e01"
   ],
   "answer": 1,
   "reveal": "\u0e1b\u0e32\u0e01 = p\u00e0ak (mulut)",
   "explain": "Keduanya bernada rendah. Yang berbeda hanya lama vokalnya: \u25cc\u0e31 pendek, \u25cc\u0e32 panjang. Telinga penutur bahasa Indonesia tidak terlatih membedakan ini karena panjang vokal tidak membedakan arti dalam bahasa Indonesia.  \u0e1b\u0e31\u0e01 = p\u00e0k (menancapkan, menyulam) \u00b7 \u0e1b\u0e32\u0e01 = p\u00e0ak (mulut)"
  },
  {
   "id": "d-p02-0",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 2,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e04\u0e31\u0e19",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e04\u0e31\u0e19",
    "\u0e04\u0e32\u0e19"
   ],
   "answer": 0,
   "reveal": "\u0e04\u0e31\u0e19 = khan (gatal; klasifikator kendaraan)",
   "explain": "Keduanya bernada sedang dan berawalan \u0e04. Panjang vokal saja yang membedakan artinya.  \u0e04\u0e31\u0e19 = khan (gatal; klasifikator kendaraan) \u00b7 \u0e04\u0e32\u0e19 = khaan (balok penyangga)"
  },
  {
   "id": "d-p02-1",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 2,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e04\u0e32\u0e19",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e04\u0e31\u0e19",
    "\u0e04\u0e32\u0e19"
   ],
   "answer": 1,
   "reveal": "\u0e04\u0e32\u0e19 = khaan (balok penyangga)",
   "explain": "Keduanya bernada sedang dan berawalan \u0e04. Panjang vokal saja yang membedakan artinya.  \u0e04\u0e31\u0e19 = khan (gatal; klasifikator kendaraan) \u00b7 \u0e04\u0e32\u0e19 = khaan (balok penyangga)"
  },
  {
   "id": "d-p03-0",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 3,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e17\u0e31\u0e19",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e17\u0e31\u0e19",
    "\u0e17\u0e32\u0e19"
   ],
   "answer": 0,
   "reveal": "\u0e17\u0e31\u0e19 = than (sempat, keburu)",
   "explain": "\u0e17\u0e32\u0e19 yang panjang adalah bentuk halus dari \u0e01\u0e34\u0e19. Kalau vokalnya terlalu pendek, yang terdengar justru \u0e17\u0e31\u0e19 ('keburu').  \u0e17\u0e31\u0e19 = than (sempat, keburu) \u00b7 \u0e17\u0e32\u0e19 = thaan (makan (ragam halus))"
  },
  {
   "id": "d-p03-1",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 3,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e17\u0e32\u0e19",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e17\u0e31\u0e19",
    "\u0e17\u0e32\u0e19"
   ],
   "answer": 1,
   "reveal": "\u0e17\u0e32\u0e19 = thaan (makan (ragam halus))",
   "explain": "\u0e17\u0e32\u0e19 yang panjang adalah bentuk halus dari \u0e01\u0e34\u0e19. Kalau vokalnya terlalu pendek, yang terdengar justru \u0e17\u0e31\u0e19 ('keburu').  \u0e17\u0e31\u0e19 = than (sempat, keburu) \u00b7 \u0e17\u0e32\u0e19 = thaan (makan (ragam halus))"
  },
  {
   "id": "d-p04-0",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 3,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e40\u0e02\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e40\u0e02\u0e32",
    "\u0e02\u0e32\u0e27"
   ],
   "answer": 0,
   "reveal": "\u0e40\u0e02\u0e32 = kh\u01ceo (dia)",
   "explain": "Dua kata yang sangat sering dipakai dan sama-sama bernada naik. \u0e40\u25cc\u0e32 pendek, \u25cc\u0e32\u0e27 panjang. Inilah pasangan yang paling sering membuat pemula salah paham.  \u0e40\u0e02\u0e32 = kh\u01ceo (dia) \u00b7 \u0e02\u0e32\u0e27 = kh\u01ceao (putih)"
  },
  {
   "id": "d-p04-1",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 3,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e02\u0e32\u0e27",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e40\u0e02\u0e32",
    "\u0e02\u0e32\u0e27"
   ],
   "answer": 1,
   "reveal": "\u0e02\u0e32\u0e27 = kh\u01ceao (putih)",
   "explain": "Dua kata yang sangat sering dipakai dan sama-sama bernada naik. \u0e40\u25cc\u0e32 pendek, \u25cc\u0e32\u0e27 panjang. Inilah pasangan yang paling sering membuat pemula salah paham.  \u0e40\u0e02\u0e32 = kh\u01ceo (dia) \u00b7 \u0e02\u0e32\u0e27 = kh\u01ceao (putih)"
  },
  {
   "id": "d-p05-0",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 4,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e44\u0e15",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e44\u0e15",
    "\u0e15\u0e32\u0e22"
   ],
   "answer": 0,
   "reveal": "\u0e44\u0e15 = tai (ginjal)",
   "explain": "Keduanya bernada sedang dan berakhir bunyi -i. Bedanya hanya vokal a yang pendek atau panjang.  \u0e44\u0e15 = tai (ginjal) \u00b7 \u0e15\u0e32\u0e22 = taai (mati)"
  },
  {
   "id": "d-p05-1",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 4,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e15\u0e32\u0e22",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e44\u0e15",
    "\u0e15\u0e32\u0e22"
   ],
   "answer": 1,
   "reveal": "\u0e15\u0e32\u0e22 = taai (mati)",
   "explain": "Keduanya bernada sedang dan berakhir bunyi -i. Bedanya hanya vokal a yang pendek atau panjang.  \u0e44\u0e15 = tai (ginjal) \u00b7 \u0e15\u0e32\u0e22 = taai (mati)"
  },
  {
   "id": "d-p06-0",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 5,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e1e\u0e31\u0e19",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e1e\u0e31\u0e19",
    "\u0e1e\u0e32\u0e19"
   ],
   "answer": 0,
   "reveal": "\u0e1e\u0e31\u0e19 = phan (seribu; melilit)",
   "explain": "\u0e1e\u0e31\u0e19 ('seribu') dipakai hampir setiap hari saat menyebut harga, jadi vokal pendeknya perlu benar-benar pendek.  \u0e1e\u0e31\u0e19 = phan (seribu; melilit) \u00b7 \u0e1e\u0e32\u0e19 = phaan (baki bertangkai)"
  },
  {
   "id": "d-p06-1",
   "kind": "mcq",
   "cat": "telinga-panjang",
   "catLabel": "Panjang vokal",
   "stage": 5,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya panjang vokal",
   "audio": "\u0e1e\u0e32\u0e19",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e1e\u0e31\u0e19",
    "\u0e1e\u0e32\u0e19"
   ],
   "answer": 1,
   "reveal": "\u0e1e\u0e32\u0e19 = phaan (baki bertangkai)",
   "explain": "\u0e1e\u0e31\u0e19 ('seribu') dipakai hampir setiap hari saat menyebut harga, jadi vokal pendeknya perlu benar-benar pendek.  \u0e1e\u0e31\u0e19 = phan (seribu; melilit) \u00b7 \u0e1e\u0e32\u0e19 = phaan (baki bertangkai)"
  },
  {
   "id": "d-h01-0",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 2,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e01\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e01\u0e32",
    "\u0e04\u0e32"
   ],
   "answer": 0,
   "reveal": "\u0e01\u0e32 = kaa (burung gagak)",
   "explain": "Keduanya bernada sedang. \u0e01 tidak berhembus, \u0e04 berhembus. Uji sendiri dengan menaruh telapak tangan di depan mulut: pada \u0e04 harus terasa embusan udara, pada \u0e01 tidak.  \u0e01\u0e32 = kaa (burung gagak) \u00b7 \u0e04\u0e32 = khaa (tersangkut)"
  },
  {
   "id": "d-h01-1",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 2,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e04\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e01\u0e32",
    "\u0e04\u0e32"
   ],
   "answer": 1,
   "reveal": "\u0e04\u0e32 = khaa (tersangkut)",
   "explain": "Keduanya bernada sedang. \u0e01 tidak berhembus, \u0e04 berhembus. Uji sendiri dengan menaruh telapak tangan di depan mulut: pada \u0e04 harus terasa embusan udara, pada \u0e01 tidak.  \u0e01\u0e32 = kaa (burung gagak) \u00b7 \u0e04\u0e32 = khaa (tersangkut)"
  },
  {
   "id": "d-h02-0",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 2,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e15\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e15\u0e32",
    "\u0e17\u0e32"
   ],
   "answer": 0,
   "reveal": "\u0e15\u0e32 = taa (mata; kakek dari pihak ibu)",
   "explain": "\u0e15 tanpa hembusan, \u0e17 dengan hembusan. Bunyi t bahasa Indonesia sudah mirip \u0e15, jadi yang perlu dilatih adalah menambah hembusan pada \u0e17.  \u0e15\u0e32 = taa (mata; kakek dari pihak ibu) \u00b7 \u0e17\u0e32 = thaa (mengoleskan)"
  },
  {
   "id": "d-h02-1",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 2,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e17\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e15\u0e32",
    "\u0e17\u0e32"
   ],
   "answer": 1,
   "reveal": "\u0e17\u0e32 = thaa (mengoleskan)",
   "explain": "\u0e15 tanpa hembusan, \u0e17 dengan hembusan. Bunyi t bahasa Indonesia sudah mirip \u0e15, jadi yang perlu dilatih adalah menambah hembusan pada \u0e17.  \u0e15\u0e32 = taa (mata; kakek dari pihak ibu) \u00b7 \u0e17\u0e32 = thaa (mengoleskan)"
  },
  {
   "id": "d-h03-0",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 3,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e1b\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e1b\u0e32",
    "\u0e1e\u0e32"
   ],
   "answer": 0,
   "reveal": "\u0e1b\u0e32 = paa (melempar)",
   "explain": "\u0e1b tanpa hembusan, \u0e1e dengan hembusan. Keduanya bernada sedang.  \u0e1b\u0e32 = paa (melempar) \u00b7 \u0e1e\u0e32 = phaa (membawa (orang))"
  },
  {
   "id": "d-h03-1",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 3,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e1e\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e1b\u0e32",
    "\u0e1e\u0e32"
   ],
   "answer": 1,
   "reveal": "\u0e1e\u0e32 = phaa (membawa (orang))",
   "explain": "\u0e1b tanpa hembusan, \u0e1e dengan hembusan. Keduanya bernada sedang.  \u0e1b\u0e32 = paa (melempar) \u00b7 \u0e1e\u0e32 = phaa (membawa (orang))"
  },
  {
   "id": "d-h04-0",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 3,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e44\u0e01\u0e48",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e44\u0e01\u0e48",
    "\u0e44\u0e02\u0e48"
   ],
   "answer": 0,
   "reveal": "\u0e44\u0e01\u0e48 = k\u00e0i (ayam)",
   "explain": "Pasangan paling berguna di warung: keduanya bernada rendah, dan hanya hembusan yang membedakan 'ayam' dari 'telur'. \u0e02\u0e49\u0e32\u0e27\u0e44\u0e01\u0e48 ('nasi ayam') dan \u0e02\u0e49\u0e32\u0e27\u0e44\u0e02\u0e48 ('nasi telur') adalah dua pesanan yang berbeda.  \u0e44\u0e01\u0e48 = k\u00e0i (ayam) \u00b7 \u0e44\u0e02\u0e48 = kh\u00e0i (telur)"
  },
  {
   "id": "d-h04-1",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 3,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e44\u0e02\u0e48",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e44\u0e01\u0e48",
    "\u0e44\u0e02\u0e48"
   ],
   "answer": 1,
   "reveal": "\u0e44\u0e02\u0e48 = kh\u00e0i (telur)",
   "explain": "Pasangan paling berguna di warung: keduanya bernada rendah, dan hanya hembusan yang membedakan 'ayam' dari 'telur'. \u0e02\u0e49\u0e32\u0e27\u0e44\u0e01\u0e48 ('nasi ayam') dan \u0e02\u0e49\u0e32\u0e27\u0e44\u0e02\u0e48 ('nasi telur') adalah dua pesanan yang berbeda.  \u0e44\u0e01\u0e48 = k\u00e0i (ayam) \u00b7 \u0e44\u0e02\u0e48 = kh\u00e0i (telur)"
  },
  {
   "id": "d-h05-0",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 4,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e1b\u0e48\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e1b\u0e48\u0e32",
    "\u0e1c\u0e48\u0e32"
   ],
   "answer": 0,
   "reveal": "\u0e1b\u0e48\u0e32 = p\u00e0a (hutan)",
   "explain": "Keduanya bernada rendah. \u0e1b kelas tengah dan \u0e1c kelas tinggi sama-sama menghasilkan nada rendah dengan mai ek, sehingga yang tersisa sebagai pembeda hanyalah hembusan.  \u0e1b\u0e48\u0e32 = p\u00e0a (hutan) \u00b7 \u0e1c\u0e48\u0e32 = ph\u00e0a (membelah, mengoperasi)"
  },
  {
   "id": "d-h05-1",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 4,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e1c\u0e48\u0e32",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e1b\u0e48\u0e32",
    "\u0e1c\u0e48\u0e32"
   ],
   "answer": 1,
   "reveal": "\u0e1c\u0e48\u0e32 = ph\u00e0a (membelah, mengoperasi)",
   "explain": "Keduanya bernada rendah. \u0e1b kelas tengah dan \u0e1c kelas tinggi sama-sama menghasilkan nada rendah dengan mai ek, sehingga yang tersisa sebagai pembeda hanyalah hembusan.  \u0e1b\u0e48\u0e32 = p\u00e0a (hutan) \u00b7 \u0e1c\u0e48\u0e32 = ph\u00e0a (membelah, mengoperasi)"
  },
  {
   "id": "d-h06-0",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 5,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e40\u0e1b\u0e47\u0e19",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e40\u0e1b\u0e47\u0e19",
    "\u0e40\u0e1e\u0e47\u0e0d"
   ],
   "answer": 0,
   "reveal": "\u0e40\u0e1b\u0e47\u0e19 = pen (adalah, menjadi)",
   "explain": "\u0e40\u0e1b\u0e47\u0e19 adalah salah satu kata paling sering dipakai, jadi hembusannya harus benar-benar tidak ada.  \u0e40\u0e1b\u0e47\u0e19 = pen (adalah, menjadi) \u00b7 \u0e40\u0e1e\u0e47\u0e0d = phen (purnama (lazim pada nama orang))"
  },
  {
   "id": "d-h06-1",
   "kind": "mcq",
   "cat": "telinga-hembusan",
   "catLabel": "Hembusan",
   "stage": 5,
   "prompt": "Dengarkan, lalu pilih kata yang Anda dengar.",
   "promptTh": "",
   "promptLabel": "bedanya hanya hembusan konsonan awal",
   "audio": "\u0e40\u0e1e\u0e47\u0e0d",
   "audioOnly": true,
   "optionsLang": "th",
   "options": [
    "\u0e40\u0e1b\u0e47\u0e19",
    "\u0e40\u0e1e\u0e47\u0e0d"
   ],
   "answer": 1,
   "reveal": "\u0e40\u0e1e\u0e47\u0e0d = phen (purnama (lazim pada nama orang))",
   "explain": "\u0e40\u0e1b\u0e47\u0e19 adalah salah satu kata paling sering dipakai, jadi hembusannya harus benar-benar tidak ada.  \u0e40\u0e1b\u0e47\u0e19 = pen (adalah, menjadi) \u00b7 \u0e40\u0e1e\u0e47\u0e0d = phen (purnama (lazim pada nama orang))"
  },
  {
   "id": "d-q01",
   "kind": "mcq",
   "cat": "soal-telinga",
   "catLabel": "Soal telinga",
   "stage": 2,
   "prompt": "Mengapa latihan mendengarkan pasangan kata diperlukan, padahal aturan nada sudah dihafal?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Aturan nada melatih mata untuk membaca; telinga perlu dilatih terpisah",
    "Aturan nada hanya berlaku untuk kata serapan",
    "Karena aturan nada sering salah",
    "Karena nada tidak penting dalam percakapan"
   ],
   "answer": 0,
   "explain": "Aturan nada menjawab pertanyaan 'kata tertulis ini nadanya apa'. Ia tidak menjawab 'bunyi yang barusan saya dengar itu nada apa'. Keduanya keterampilan berbeda dan dilatih terpisah."
  },
  {
   "id": "d-q02",
   "kind": "mcq",
   "cat": "soal-telinga",
   "catLabel": "Soal telinga",
   "stage": 2,
   "prompt": "Apa yang paling sering merusak nada kata terakhir pada kalimat tanya penutur bahasa Indonesia?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Kebiasaan menaikkan nada suara di akhir pertanyaan",
    "Berbicara terlalu pelan",
    "Memakai partikel \u0e04\u0e23\u0e31\u0e1a atau \u0e04\u0e48\u0e30",
    "Mengucapkan vokal terlalu panjang"
   ],
   "answer": 0,
   "explain": "Dalam bahasa Indonesia, naik-turun suara menandai jenis kalimat. Dalam bahasa Thailand, naik-turun suara adalah bagian dari kata itu sendiri. Pertanyaan ditandai partikel seperti \u0e44\u0e2b\u0e21, bukan oleh nada akhir."
  },
  {
   "id": "d-q03",
   "kind": "mcq",
   "cat": "soal-telinga",
   "catLabel": "Soal telinga",
   "stage": 3,
   "prompt": "Cara paling sederhana memeriksa sendiri apakah konsonan Anda berhembus?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Taruh telapak tangan di depan mulut dan rasakan embusan udaranya",
    "Rekam suara lalu lihat gelombangnya",
    "Ucapkan sambil menahan napas",
    "Bandingkan dengan huruf Latinnya"
   ],
   "answer": 0,
   "explain": "Pada \u0e02, \u0e16, \u0e1c, \u0e17, \u0e04, \u0e1e terasa embusan udara di telapak tangan; pada \u0e01, \u0e15, \u0e1b tidak. Ini pemeriksaan yang bisa dilakukan tanpa alat apa pun."
  },
  {
   "id": "d-q04",
   "kind": "mcq",
   "cat": "soal-telinga",
   "catLabel": "Soal telinga",
   "stage": 4,
   "prompt": "Panjang vokal pada bahasa Thailand berperan sebagai apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Pembeda arti kata, sama seperti nada",
    "Hanya hiasan gaya bicara",
    "Penanda kesopanan",
    "Penanda jenis kalimat"
   ],
   "answer": 0,
   "explain": "\u0e40\u0e02\u0e32 ('dia') dan \u0e02\u0e32\u0e27 ('putih') hanya berbeda panjang vokalnya. Bahasa Indonesia tidak memakai panjang vokal untuk membedakan arti, sehingga perbedaan ini harus dilatih dengan sengaja."
  }
 ],
 "kosakata": [
  {
   "id": "v001",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35",
   "audio": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35",
   "phon": "s\u00e0-w\u00e0t-dii",
   "rom": "sawatdi",
   "freq": 1,
   "gloss": "salam (hai, selamat pagi, selamat siang)",
   "alt": [
    "hai",
    "selamat pagi",
    "halo"
   ],
   "detail": "sapaan \u00b7 RTGS: sawatdi",
   "cls": "",
   "exTh": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "s\u00e0-w\u00e0t-dii khr\u00e1p",
   "exGloss": "Salam. (diucapkan lelaki)",
   "note": "Satu kata ini dipakai untuk pagi, siang, maupun malam, dan juga untuk berpamitan. Hampir selalu disusul partikel sopan \u0e04\u0e23\u0e31\u0e1a atau \u0e04\u0e48\u0e30."
  },
  {
   "id": "v002",
   "kind": "flip",
   "cat": "partikel",
   "catLabel": "Partikel",
   "stage": 1,
   "th": "\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e04\u0e23\u0e31\u0e1a",
   "phon": "khr\u00e1p",
   "rom": "khrap",
   "freq": 1,
   "gloss": "partikel sopan yang dipakai lelaki",
   "alt": [
    "ya (sopan, lelaki)"
   ],
   "detail": "partikel \u00b7 RTGS: khrap",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u00e0awp-khun khr\u00e1p",
   "exGloss": "Terima kasih. (diucapkan lelaki)",
   "note": "Ditempelkan di akhir kalimat untuk menandai kesopanan. Penutur lelaki memakai \u0e04\u0e23\u0e31\u0e1a pada kalimat apa pun, baik pernyataan maupun pertanyaan. Dalam percakapan cepat sering terdengar seperti 'kh\u00e1p'."
  },
  {
   "id": "v003",
   "kind": "flip",
   "cat": "partikel",
   "catLabel": "Partikel",
   "stage": 1,
   "th": "\u0e04\u0e48\u0e30",
   "audio": "\u0e04\u0e48\u0e30",
   "phon": "kh\u00e2",
   "rom": "kha",
   "freq": 1,
   "gloss": "partikel sopan yang dipakai perempuan, pada pernyataan",
   "alt": [
    "ya (sopan, perempuan)"
   ],
   "detail": "partikel \u00b7 RTGS: kha",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e48\u0e30",
   "exPhon": "kh\u00e0awp-khun kh\u00e2",
   "exGloss": "Terima kasih. (diucapkan perempuan)",
   "note": "Penutur perempuan memakai DUA bentuk: \u0e04\u0e48\u0e30 (nada turun) untuk pernyataan, dan \u0e04\u0e30 (nada tinggi) untuk pertanyaan. Perbedaan itu hanya nada, tetapi diperhatikan penutur asli."
  },
  {
   "id": "v004",
   "kind": "flip",
   "cat": "partikel",
   "catLabel": "Partikel",
   "stage": 1,
   "th": "\u0e04\u0e30",
   "audio": "\u0e04\u0e30",
   "phon": "kh\u00e1",
   "rom": "kha",
   "freq": 2,
   "gloss": "partikel sopan yang dipakai perempuan, pada pertanyaan",
   "alt": [],
   "detail": "partikel \u00b7 RTGS: kha",
   "cls": "",
   "exTh": "\u0e44\u0e1b\u0e44\u0e2b\u0e19\u0e04\u0e30",
   "exPhon": "pai n\u01cei kh\u00e1",
   "exGloss": "Mau ke mana? (ditanyakan perempuan)",
   "note": "Pasangan pertanyaan dari \u0e04\u0e48\u0e30. Memakai \u0e04\u0e48\u0e30 pada pertanyaan tidak membuat kalimatnya salah dipahami, tetapi terdengar kurang wajar."
  },
  {
   "id": "v005",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13",
   "audio": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13",
   "phon": "kh\u00e0awp-khun",
   "rom": "khopkhun",
   "freq": 1,
   "gloss": "terima kasih",
   "alt": [
    "terimakasih"
   ],
   "detail": "ungkapan \u00b7 RTGS: khopkhun",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u00e0awp-khun m\u00e2ak khr\u00e1p",
   "exGloss": "Terima kasih banyak.",
   "note": "Harfiahnya 'tepi' + 'Anda', tetapi dipakai sebagai satu ungkapan utuh. Untuk teman sebaya atau orang yang lebih muda, bentuk singkat \u0e02\u0e2d\u0e1a\u0e43\u0e08 (kh\u00e0awp-jai) juga dipakai."
  },
  {
   "id": "v006",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e02\u0e2d\u0e42\u0e17\u0e29",
   "audio": "\u0e02\u0e2d\u0e42\u0e17\u0e29",
   "phon": "kh\u01ceaw-th\u00f4ot",
   "rom": "khothot",
   "freq": 1,
   "gloss": "maaf; permisi",
   "alt": [
    "minta maaf",
    "permisi"
   ],
   "detail": "ungkapan \u00b7 RTGS: khothot",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e42\u0e17\u0e29\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u01ceaw-th\u00f4ot khr\u00e1p",
   "exGloss": "Maaf. / Permisi.",
   "note": "Dipakai untuk meminta maaf dan juga untuk menyapa orang yang tidak dikenal sebelum bertanya, seperti 'permisi' dalam bahasa Indonesia."
  },
  {
   "id": "v007",
   "kind": "flip",
   "cat": "partikel",
   "catLabel": "Partikel",
   "stage": 1,
   "th": "\u0e43\u0e0a\u0e48",
   "audio": "\u0e43\u0e0a\u0e48",
   "phon": "ch\u00e2i",
   "rom": "chai",
   "freq": 1,
   "gloss": "ya, benar",
   "alt": [
    "benar",
    "iya"
   ],
   "detail": "keterangan \u00b7 RTGS: chai",
   "cls": "",
   "exTh": "\u0e43\u0e0a\u0e48\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "ch\u00e2i khr\u00e1p",
   "exGloss": "Ya, benar.",
   "note": "Hanya untuk membenarkan pernyataan ('Benar begitu'). Untuk menjawab 'ya' pada pertanyaan kata kerja, orang Thai mengulang kata kerjanya: '\u0e44\u0e1b\u0e44\u0e2b\u0e21' dijawab '\u0e44\u0e1b', bukan '\u0e43\u0e0a\u0e48'."
  },
  {
   "id": "v008",
   "kind": "flip",
   "cat": "partikel",
   "catLabel": "Partikel",
   "stage": 1,
   "th": "\u0e44\u0e21\u0e48",
   "audio": "\u0e44\u0e21\u0e48",
   "phon": "m\u00e2i",
   "rom": "mai",
   "freq": 1,
   "gloss": "tidak",
   "alt": [
    "bukan",
    "tak"
   ],
   "detail": "keterangan \u00b7 RTGS: mai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e44\u0e1b",
   "exPhon": "ph\u01d2m m\u00e2i pai",
   "exGloss": "Saya tidak pergi.",
   "note": "Diletakkan SEBELUM kata kerja atau kata sifat yang dinegasikan. Untuk menyangkal kata benda dipakai \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 (m\u00e2i ch\u00e2i, 'bukan')."
  },
  {
   "id": "v009",
   "kind": "flip",
   "cat": "ganti",
   "catLabel": "Kata ganti",
   "stage": 1,
   "th": "\u0e1c\u0e21",
   "audio": "\u0e1c\u0e21",
   "phon": "ph\u01d2m",
   "rom": "phom",
   "freq": 1,
   "gloss": "saya (dipakai lelaki)",
   "alt": [
    "aku (lelaki)",
    "rambut"
   ],
   "detail": "ganti \u00b7 RTGS: phom",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e23\u0e39",
   "exPhon": "ph\u01d2m pen khruu",
   "exGloss": "Saya seorang guru.",
   "note": "Kata yang sama juga berarti 'rambut (kepala)'. Kata ganti orang pertama dalam bahasa Thailand bergantung pada jenis kelamin dan tingkat keakraban, bukan satu kata untuk semua."
  },
  {
   "id": "v010",
   "kind": "flip",
   "cat": "ganti",
   "catLabel": "Kata ganti",
   "stage": 1,
   "th": "\u0e09\u0e31\u0e19",
   "audio": "\u0e09\u0e31\u0e19",
   "phon": "ch\u01cen",
   "rom": "chan",
   "freq": 1,
   "gloss": "saya (dipakai perempuan)",
   "alt": [
    "aku (perempuan)"
   ],
   "detail": "ganti \u00b7 RTGS: chan",
   "cls": "",
   "exTh": "\u0e09\u0e31\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e23\u0e39",
   "exPhon": "ch\u01cen pen khruu",
   "exGloss": "Saya seorang guru.",
   "note": "Menurut aturan ejaan kata ini bernada naik; dalam percakapan sehari-hari hampir selalu diucapkan bernada tinggi (ch\u00e1n). Dipakai perempuan pada ragam agak resmi; di antara teman lebih lazim memakai nama sendiri atau \u0e40\u0e23\u0e32."
  },
  {
   "id": "v011",
   "kind": "flip",
   "cat": "ganti",
   "catLabel": "Kata ganti",
   "stage": 1,
   "th": "\u0e04\u0e38\u0e13",
   "audio": "\u0e04\u0e38\u0e13",
   "phon": "khun",
   "rom": "khun",
   "freq": 1,
   "gloss": "Anda",
   "alt": [
    "kamu (sopan)",
    "saudara"
   ],
   "detail": "ganti \u00b7 RTGS: khun",
   "cls": "",
   "exTh": "\u0e04\u0e38\u0e13\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e30\u0e44\u0e23",
   "exPhon": "khun ch\u00fbue \u00e0-rai",
   "exGloss": "Siapa nama Anda?",
   "note": "Juga dipakai di depan nama sebagai sebutan hormat, seperti 'Pak' atau 'Bu': \u0e04\u0e38\u0e13\u0e2a\u0e21\u0e0a\u0e32\u0e22. Netral dan aman untuk orang yang baru dikenal."
  },
  {
   "id": "v012",
   "kind": "flip",
   "cat": "ganti",
   "catLabel": "Kata ganti",
   "stage": 1,
   "th": "\u0e40\u0e02\u0e32",
   "audio": "\u0e40\u0e02\u0e32",
   "phon": "kh\u01ceo",
   "rom": "khao",
   "freq": 1,
   "gloss": "dia",
   "alt": [
    "ia",
    "beliau"
   ],
   "detail": "ganti \u00b7 RTGS: khao",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e44\u0e21\u0e48\u0e2d\u0e22\u0e39\u0e48",
   "exPhon": "kh\u01ceo m\u00e2i y\u00f9u",
   "exGloss": "Dia tidak ada (tidak di tempat).",
   "note": "Tidak membedakan lelaki dan perempuan, sama seperti 'dia'. Dalam percakapan sering diucapkan bernada tinggi (kh\u00e1o)."
  },
  {
   "id": "v013",
   "kind": "flip",
   "cat": "ganti",
   "catLabel": "Kata ganti",
   "stage": 1,
   "th": "\u0e40\u0e23\u0e32",
   "audio": "\u0e40\u0e23\u0e32",
   "phon": "rao",
   "rom": "rao",
   "freq": 1,
   "gloss": "kita, kami",
   "alt": [
    "kami",
    "kita"
   ],
   "detail": "ganti \u00b7 RTGS: rao",
   "cls": "",
   "exTh": "\u0e40\u0e23\u0e32\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19",
   "exPhon": "rao pai d\u00fbai-kan",
   "exGloss": "Kita pergi bersama.",
   "note": "Tidak membedakan 'kami' dan 'kita'. Juga dipakai sebagai 'aku' yang akrab, terutama oleh perempuan terhadap teman."
  },
  {
   "id": "v014",
   "kind": "flip",
   "cat": "ganti",
   "catLabel": "Kata ganti",
   "stage": 1,
   "th": "\u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32",
   "audio": "\u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32",
   "phon": "ph\u00fbak-kh\u01ceo",
   "rom": "phuak khao",
   "freq": 2,
   "gloss": "mereka",
   "alt": [],
   "detail": "ganti \u00b7 RTGS: phuak khao",
   "cls": "",
   "exTh": "\u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19",
   "exPhon": "ph\u00fbak-kh\u01ceo pen n\u00e1k-rian",
   "exGloss": "Mereka murid.",
   "note": "\u0e1e\u0e27\u0e01 berarti 'kelompok', jadi \u0e1e\u0e27\u0e01\u0e40\u0e02\u0e32 harfiahnya 'kelompok dia'. Pola yang sama: \u0e1e\u0e27\u0e01\u0e40\u0e23\u0e32 (ph\u00fbak-rao, 'kami semua')."
  },
  {
   "id": "v015",
   "kind": "flip",
   "cat": "tunjuk",
   "catLabel": "Kata tunjuk",
   "stage": 1,
   "th": "\u0e19\u0e35\u0e48",
   "audio": "\u0e19\u0e35\u0e48",
   "phon": "n\u00eei",
   "rom": "ni",
   "freq": 1,
   "gloss": "ini",
   "alt": [
    "yang ini"
   ],
   "detail": "tunjuk \u00b7 RTGS: ni",
   "cls": "",
   "exTh": "\u0e19\u0e35\u0e48\u0e2d\u0e30\u0e44\u0e23",
   "exPhon": "n\u00eei \u00e0-rai",
   "exGloss": "Ini apa?",
   "note": "\u0e19\u0e35\u0e48 berdiri sendiri sebagai kata ('ini'), sedangkan \u0e19\u0e35\u0e49 (n\u00edi) menempel sesudah kata benda: \u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e40\u0e25\u0e48\u0e21\u0e19\u0e35\u0e49 ('buku ini'). Keduanya hanya berbeda nada."
  },
  {
   "id": "v016",
   "kind": "flip",
   "cat": "tunjuk",
   "catLabel": "Kata tunjuk",
   "stage": 1,
   "th": "\u0e19\u0e31\u0e48\u0e19",
   "audio": "\u0e19\u0e31\u0e48\u0e19",
   "phon": "n\u00e2n",
   "rom": "nan",
   "freq": 1,
   "gloss": "itu",
   "alt": [
    "yang itu"
   ],
   "detail": "tunjuk \u00b7 RTGS: nan",
   "cls": "",
   "exTh": "\u0e19\u0e31\u0e48\u0e19\u0e1a\u0e49\u0e32\u0e19\u0e1c\u0e21",
   "exPhon": "n\u00e2n b\u00e2an ph\u01d2m",
   "exGloss": "Itu rumah saya.",
   "note": "Seperti pasangan \u0e19\u0e35\u0e48/\u0e19\u0e35\u0e49, bentuk \u0e19\u0e31\u0e49\u0e19 (n\u00e1n) dipakai menempel sesudah kata benda."
  },
  {
   "id": "v017",
   "kind": "flip",
   "cat": "tanya",
   "catLabel": "Kata tanya",
   "stage": 1,
   "th": "\u0e2d\u0e30\u0e44\u0e23",
   "audio": "\u0e2d\u0e30\u0e44\u0e23",
   "phon": "\u00e0-rai",
   "rom": "arai",
   "freq": 1,
   "gloss": "apa",
   "alt": [
    "apakah"
   ],
   "detail": "tanya \u00b7 RTGS: arai",
   "cls": "",
   "exTh": "\u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e2d\u0e30\u0e44\u0e23",
   "exPhon": "khun kin \u00e0-rai",
   "exGloss": "Anda makan apa?",
   "note": "Kata tanya dalam bahasa Thailand berada di tempat kata yang ditanyakan, bukan di awal kalimat. Susunan kalimatnya tidak berubah."
  },
  {
   "id": "v018",
   "kind": "flip",
   "cat": "tanya",
   "catLabel": "Kata tanya",
   "stage": 1,
   "th": "\u0e43\u0e04\u0e23",
   "audio": "\u0e43\u0e04\u0e23",
   "phon": "khrai",
   "rom": "khrai",
   "freq": 2,
   "gloss": "siapa",
   "alt": [],
   "detail": "tanya \u00b7 RTGS: khrai",
   "cls": "",
   "exTh": "\u0e43\u0e04\u0e23\u0e21\u0e32",
   "exPhon": "khrai maa",
   "exGloss": "Siapa yang datang?",
   "note": "Termasuk daftar kata ber-\u0e43 yang perlu dihafal ejaannya."
  },
  {
   "id": "v019",
   "kind": "flip",
   "cat": "tanya",
   "catLabel": "Kata tanya",
   "stage": 1,
   "th": "\u0e44\u0e2b\u0e19",
   "audio": "\u0e44\u0e2b\u0e19",
   "phon": "n\u01cei",
   "rom": "nai",
   "freq": 1,
   "gloss": "mana",
   "alt": [
    "di mana"
   ],
   "detail": "tanya \u00b7 RTGS: nai",
   "cls": "",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19",
   "exPhon": "h\u00e2awng-n\u00e1am y\u00f9u n\u01cei",
   "exGloss": "Di mana kamar mandi?",
   "note": "Lazim dipakai bersama \u0e17\u0e35\u0e48: \u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19 (th\u00eei-n\u01cei, 'di mana'). Dengan kata kerja \u0e2d\u0e22\u0e39\u0e48 ('berada'), \u0e17\u0e35\u0e48 boleh dihilangkan."
  },
  {
   "id": "v020",
   "kind": "flip",
   "cat": "tanya",
   "catLabel": "Kata tanya",
   "stage": 1,
   "th": "\u0e17\u0e33\u0e44\u0e21",
   "audio": "\u0e17\u0e33\u0e44\u0e21",
   "phon": "tham-mai",
   "rom": "thammai",
   "freq": 2,
   "gloss": "mengapa",
   "alt": [
    "kenapa"
   ],
   "detail": "tanya \u00b7 RTGS: thammai",
   "cls": "",
   "exTh": "\u0e17\u0e33\u0e44\u0e21\u0e04\u0e38\u0e13\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19",
   "exPhon": "tham-mai khun m\u00e2i kin",
   "exGloss": "Mengapa Anda tidak makan?",
   "note": "Berbeda dari kata tanya lain, \u0e17\u0e33\u0e44\u0e21 memang lazim di awal kalimat, meski bisa juga di akhir."
  },
  {
   "id": "v021",
   "kind": "flip",
   "cat": "tanya",
   "catLabel": "Kata tanya",
   "stage": 1,
   "th": "\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e2b\u0e23\u0e48",
   "audio": "\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e2b\u0e23\u0e48",
   "phon": "m\u00fbea-r\u00e0i",
   "rom": "muearai",
   "freq": 2,
   "gloss": "kapan",
   "alt": [
    "bilamana"
   ],
   "detail": "tanya \u00b7 RTGS: muearai",
   "cls": "",
   "exTh": "\u0e04\u0e38\u0e13\u0e44\u0e1b\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e2b\u0e23\u0e48",
   "exPhon": "khun pai m\u00fbea-r\u00e0i",
   "exGloss": "Kapan Anda pergi?",
   "note": "Ejaan \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e23 juga dipakai dan dibaca sama."
  },
  {
   "id": "v022",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "audio": "\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "phon": "n\u00f9eng",
   "rom": "nueng",
   "freq": 1,
   "gloss": "satu",
   "alt": [
    "1"
   ],
   "detail": "angka \u00b7 RTGS: nueng",
   "cls": "",
   "exTh": "\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e04\u0e19",
   "exPhon": "n\u00f9eng khon",
   "exGloss": "satu orang",
   "note": "Pada hitungan sehari-hari sering disingkat menjadi \u0e40\u0e2d\u0e47\u0e14 (\u00e8t) ketika menjadi satuan: \u0e2a\u0e34\u0e1a\u0e40\u0e2d\u0e47\u0e14 = sebelas."
  },
  {
   "id": "v023",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e2a\u0e2d\u0e07",
   "audio": "\u0e2a\u0e2d\u0e07",
   "phon": "s\u01ceawng",
   "rom": "song",
   "freq": 1,
   "gloss": "dua",
   "alt": [
    "2"
   ],
   "detail": "angka \u00b7 RTGS: song",
   "cls": "",
   "exTh": "\u0e2a\u0e2d\u0e07\u0e04\u0e19",
   "exPhon": "s\u01ceawng khon",
   "exGloss": "dua orang",
   "note": ""
  },
  {
   "id": "v024",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e2a\u0e32\u0e21",
   "audio": "\u0e2a\u0e32\u0e21",
   "phon": "s\u01ceam",
   "rom": "sam",
   "freq": 2,
   "gloss": "tiga",
   "alt": [
    "3"
   ],
   "detail": "angka \u00b7 RTGS: sam",
   "cls": "",
   "exTh": "\u0e2a\u0e32\u0e21\u0e27\u0e31\u0e19",
   "exPhon": "s\u01ceam wan",
   "exGloss": "tiga hari",
   "note": ""
  },
  {
   "id": "v025",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e2a\u0e35\u0e48",
   "audio": "\u0e2a\u0e35\u0e48",
   "phon": "s\u00eci",
   "rom": "si",
   "freq": 2,
   "gloss": "empat",
   "alt": [
    "4"
   ],
   "detail": "angka \u00b7 RTGS: si",
   "cls": "",
   "exTh": "\u0e2a\u0e35\u0e48\u0e1a\u0e32\u0e17",
   "exPhon": "s\u00eci b\u00e0at",
   "exGloss": "empat baht",
   "note": ""
  },
  {
   "id": "v026",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e2b\u0e49\u0e32",
   "audio": "\u0e2b\u0e49\u0e32",
   "phon": "h\u00e2a",
   "rom": "ha",
   "freq": 2,
   "gloss": "lima",
   "alt": [
    "5"
   ],
   "detail": "angka \u00b7 RTGS: ha",
   "cls": "",
   "exTh": "\u0e2b\u0e49\u0e32\u0e04\u0e19",
   "exPhon": "h\u00e2a khon",
   "exGloss": "lima orang",
   "note": "Angka 5 juga dipakai sebagai lelucon tulisan: 555 dibaca h\u00e2a-h\u00e2a-h\u00e2a dan berarti 'hahaha'."
  },
  {
   "id": "v027",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e2b\u0e01",
   "audio": "\u0e2b\u0e01",
   "phon": "h\u00f2k",
   "rom": "hok",
   "freq": 2,
   "gloss": "enam",
   "alt": [
    "6"
   ],
   "detail": "angka \u00b7 RTGS: hok",
   "cls": "",
   "exTh": "\u0e2b\u0e01\u0e42\u0e21\u0e07",
   "exPhon": "h\u00f2k moong",
   "exGloss": "jam enam",
   "note": ""
  },
  {
   "id": "v028",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e40\u0e08\u0e47\u0e14",
   "audio": "\u0e40\u0e08\u0e47\u0e14",
   "phon": "j\u00e8t",
   "rom": "chet",
   "freq": 2,
   "gloss": "tujuh",
   "alt": [
    "7"
   ],
   "detail": "angka \u00b7 RTGS: chet",
   "cls": "",
   "exTh": "\u0e40\u0e08\u0e47\u0e14\u0e27\u0e31\u0e19",
   "exPhon": "j\u00e8t wan",
   "exGloss": "tujuh hari",
   "note": ""
  },
  {
   "id": "v029",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e41\u0e1b\u0e14",
   "audio": "\u0e41\u0e1b\u0e14",
   "phon": "p\u00e0et",
   "rom": "paet",
   "freq": 2,
   "gloss": "delapan",
   "alt": [
    "8"
   ],
   "detail": "angka \u00b7 RTGS: paet",
   "cls": "",
   "exTh": "\u0e41\u0e1b\u0e14\u0e1a\u0e32\u0e17",
   "exPhon": "p\u00e0et b\u00e0at",
   "exGloss": "delapan baht",
   "note": ""
  },
  {
   "id": "v030",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e40\u0e01\u0e49\u0e32",
   "audio": "\u0e40\u0e01\u0e49\u0e32",
   "phon": "k\u00e2o",
   "rom": "kao",
   "freq": 2,
   "gloss": "sembilan",
   "alt": [
    "9"
   ],
   "detail": "angka \u00b7 RTGS: kao",
   "cls": "",
   "exTh": "\u0e40\u0e01\u0e49\u0e32\u0e04\u0e19",
   "exPhon": "k\u00e2o khon",
   "exGloss": "sembilan orang",
   "note": ""
  },
  {
   "id": "v031",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e2a\u0e34\u0e1a",
   "audio": "\u0e2a\u0e34\u0e1a",
   "phon": "s\u00ecp",
   "rom": "sip",
   "freq": 2,
   "gloss": "sepuluh",
   "alt": [
    "10"
   ],
   "detail": "angka \u00b7 RTGS: sip",
   "cls": "",
   "exTh": "\u0e2a\u0e34\u0e1a\u0e1a\u0e32\u0e17",
   "exPhon": "s\u00ecp b\u00e0at",
   "exGloss": "sepuluh baht",
   "note": "Puluhan dibentuk dengan menambahkan \u0e2a\u0e34\u0e1a: \u0e22\u0e35\u0e48\u0e2a\u0e34\u0e1a (20), \u0e2a\u0e32\u0e21\u0e2a\u0e34\u0e1a (30). Perhatikan 20 memakai \u0e22\u0e35\u0e48, bukan \u0e2a\u0e2d\u0e07."
  },
  {
   "id": "v032",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 1,
   "th": "\u0e23\u0e49\u0e2d\u0e22",
   "audio": "\u0e23\u0e49\u0e2d\u0e22",
   "phon": "r\u00e1awi",
   "rom": "roi",
   "freq": 2,
   "gloss": "ratus",
   "alt": [
    "seratus"
   ],
   "detail": "angka \u00b7 RTGS: roi",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e2d\u0e22\u0e1a\u0e32\u0e17",
   "exPhon": "r\u00e1awi b\u00e0at",
   "exGloss": "seratus baht",
   "note": ""
  },
  {
   "id": "v033",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 2,
   "th": "\u0e1e\u0e48\u0e2d",
   "audio": "\u0e1e\u0e48\u0e2d",
   "phon": "ph\u00e2aw",
   "rom": "pho",
   "freq": 2,
   "gloss": "ayah",
   "alt": [
    "bapak",
    "papa"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: pho",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1e\u0e48\u0e2d\u0e1c\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e21\u0e2d",
   "exPhon": "ph\u00e2aw ph\u01d2m pen m\u01ceaw",
   "exGloss": "Ayah saya seorang dokter.",
   "note": "Bentuk sapaan akrab: \u0e1b\u0e4a\u0e32 atau \u0e1b\u0e4b\u0e32. Dalam ragam resmi dipakai \u0e1a\u0e34\u0e14\u0e32 (b\u00ec-daa)."
  },
  {
   "id": "v034",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 2,
   "th": "\u0e41\u0e21\u0e48",
   "audio": "\u0e41\u0e21\u0e48",
   "phon": "m\u00e2e",
   "rom": "mae",
   "freq": 2,
   "gloss": "ibu",
   "alt": [
    "mama",
    "emak"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: mae",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e41\u0e21\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "m\u00e2e y\u00f9u b\u00e2an",
   "exGloss": "Ibu ada di rumah.",
   "note": "Juga dipakai sebagai awalan untuk 'induk' atau 'sumber': \u0e41\u0e21\u0e48\u0e19\u0e49\u0e33 (m\u00e2e-n\u00e1am) berarti 'sungai', harfiahnya 'ibu air'."
  },
  {
   "id": "v035",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 2,
   "th": "\u0e1e\u0e35\u0e48",
   "audio": "\u0e1e\u0e35\u0e48",
   "phon": "ph\u00eei",
   "rom": "phi",
   "freq": 2,
   "gloss": "saudara yang lebih tua",
   "alt": [
    "kakak"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: phi",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1e\u0e35\u0e48\u0e0a\u0e32\u0e22\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",
   "exPhon": "ph\u00eei-chaai ph\u01d2m y\u00f9u th\u00eei-n\u00eei",
   "exGloss": "Kakak lelaki saya ada di sini.",
   "note": "Tidak membedakan jenis kelamin; untuk itu ditambahkan \u0e0a\u0e32\u0e22 (lelaki) atau \u0e2a\u0e32\u0e27/\u0e2b\u0e0d\u0e34\u0e07 (perempuan). \u0e1e\u0e35\u0e48 juga dipakai menyapa orang yang sedikit lebih tua, termasuk pelayan restoran dan pengemudi."
  },
  {
   "id": "v036",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 2,
   "th": "\u0e19\u0e49\u0e2d\u0e07",
   "audio": "\u0e19\u0e49\u0e2d\u0e07",
   "phon": "n\u00e1awng",
   "rom": "nong",
   "freq": 2,
   "gloss": "saudara yang lebih muda",
   "alt": [
    "adik"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: nong",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e19\u0e49\u0e2d\u0e07\u0e1c\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19",
   "exPhon": "n\u00e1awng ph\u01d2m pen n\u00e1k-rian",
   "exGloss": "Adik saya murid.",
   "note": "Seperti \u0e1e\u0e35\u0e48, dipakai juga untuk menyapa orang yang lebih muda, termasuk orang asing. Umur relatif lebih penting daripada hubungan darah dalam sebutan keluarga bahasa Thailand."
  },
  {
   "id": "v037",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 2,
   "th": "\u0e25\u0e39\u0e01",
   "audio": "\u0e25\u0e39\u0e01",
   "phon": "l\u00fbuk",
   "rom": "luk",
   "freq": 2,
   "gloss": "anak (keturunan)",
   "alt": [
    "anak kandung"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: luk",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e25\u0e39\u0e01\u0e2a\u0e2d\u0e07\u0e04\u0e19",
   "exPhon": "l\u00fbuk s\u01ceawng khon",
   "exGloss": "dua anak",
   "note": "\u0e25\u0e39\u0e01 adalah anak dalam arti keturunan, sedangkan \u0e40\u0e14\u0e47\u0e01 adalah anak dalam arti usia. Keduanya tidak saling mengganti."
  },
  {
   "id": "v038",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 2,
   "th": "\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27",
   "audio": "\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27",
   "phon": "khr\u00e2awp-khrua",
   "rom": "khropkhrua",
   "freq": 2,
   "gloss": "keluarga",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: khropkhrua",
   "cls": "",
   "exTh": "\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e17\u0e22",
   "exPhon": "khr\u00e2awp-khrua ph\u01d2m y\u00f9u thai",
   "exGloss": "Keluarga saya tinggal di Thailand.",
   "note": ""
  },
  {
   "id": "v039",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
   "audio": "\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
   "phon": "ph\u00fbean",
   "rom": "phuean",
   "freq": 2,
   "gloss": "teman",
   "alt": [
    "kawan",
    "sahabat"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: phuean",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e1c\u0e21\u0e0a\u0e2d\u0e1a\u0e01\u0e32\u0e41\u0e1f",
   "exPhon": "ph\u00fbean ph\u01d2m ch\u00e2awp kaa-fae",
   "exGloss": "Teman saya suka kopi.",
   "note": ""
  },
  {
   "id": "v040",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e04\u0e19",
   "audio": "\u0e04\u0e19",
   "phon": "khon",
   "rom": "khon",
   "freq": 1,
   "gloss": "orang",
   "alt": [
    "manusia"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: khon",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e04\u0e19\u0e44\u0e17\u0e22\u0e43\u0e08\u0e14\u0e35",
   "exPhon": "khon thai jai-dii",
   "exGloss": "Orang Thai baik hati.",
   "note": "\u0e04\u0e19 juga merupakan klasifikator untuk orang: \u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2a\u0e32\u0e21\u0e04\u0e19 ('tiga murid'). Dipakai di depan nama bangsa untuk menyebut orangnya: \u0e04\u0e19\u0e44\u0e17\u0e22, \u0e04\u0e19\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22."
  },
  {
   "id": "v041",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e1c\u0e39\u0e49\u0e0a\u0e32\u0e22",
   "audio": "\u0e1c\u0e39\u0e49\u0e0a\u0e32\u0e22",
   "phon": "ph\u00fbu-chaai",
   "rom": "phuchai",
   "freq": 2,
   "gloss": "lelaki",
   "alt": [
    "pria",
    "laki-laki"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: phuchai",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1c\u0e39\u0e49\u0e0a\u0e32\u0e22\u0e04\u0e19\u0e19\u0e31\u0e49\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e23\u0e39",
   "exPhon": "ph\u00fbu-chaai khon n\u00e1n pen khruu",
   "exGloss": "Lelaki itu seorang guru.",
   "note": "\u0e1c\u0e39\u0e49 berarti 'orang yang', dan dipakai membentuk banyak kata: \u0e1c\u0e39\u0e49\u0e43\u0e2b\u0e0d\u0e48 (orang dewasa), \u0e1c\u0e39\u0e49\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23 (manajer)."
  },
  {
   "id": "v042",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e1c\u0e39\u0e49\u0e2b\u0e0d\u0e34\u0e07",
   "audio": "\u0e1c\u0e39\u0e49\u0e2b\u0e0d\u0e34\u0e07",
   "phon": "ph\u00fbu-y\u01d0ng",
   "rom": "phuying",
   "freq": 2,
   "gloss": "perempuan",
   "alt": [
    "wanita"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: phuying",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1c\u0e39\u0e49\u0e2b\u0e0d\u0e34\u0e07\u0e2a\u0e2d\u0e07\u0e04\u0e19",
   "exPhon": "ph\u00fbu-y\u01d0ng s\u01ceawng khon",
   "exGloss": "dua perempuan",
   "note": ""
  },
  {
   "id": "v043",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e40\u0e14\u0e47\u0e01",
   "audio": "\u0e40\u0e14\u0e47\u0e01",
   "phon": "d\u00e8k",
   "rom": "dek",
   "freq": 2,
   "gloss": "anak (usia muda)",
   "alt": [
    "anak-anak",
    "bocah"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: dek",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e40\u0e14\u0e47\u0e01\u0e0a\u0e2d\u0e1a\u0e40\u0e25\u0e48\u0e19",
   "exPhon": "d\u00e8k ch\u00e2awp l\u00ean",
   "exGloss": "Anak-anak suka bermain.",
   "note": ""
  },
  {
   "id": "v044",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e04\u0e23\u0e39",
   "audio": "\u0e04\u0e23\u0e39",
   "phon": "khruu",
   "rom": "khru",
   "freq": 2,
   "gloss": "guru",
   "alt": [
    "pengajar"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: khru",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e04\u0e23\u0e39\u0e2d\u0e22\u0e39\u0e48\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19",
   "exPhon": "khruu y\u00f9u roong-rian",
   "exGloss": "Guru ada di sekolah.",
   "note": "Serapan dari bahasa Sanskerta (guru), sama asalnya dengan kata bahasa Indonesia 'guru'. Untuk dosen dipakai \u0e2d\u0e32\u0e08\u0e32\u0e23\u0e22\u0e4c (aa-jaan)."
  },
  {
   "id": "v045",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19",
   "audio": "\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19",
   "phon": "n\u00e1k-rian",
   "rom": "nakrian",
   "freq": 2,
   "gloss": "murid, pelajar",
   "alt": [
    "siswa",
    "pelajar"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: nakrian",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2a\u0e34\u0e1a\u0e04\u0e19",
   "exPhon": "n\u00e1k-rian s\u00ecp khon",
   "exGloss": "sepuluh murid",
   "note": "\u0e19\u0e31\u0e01 adalah awalan 'orang yang ahli atau tekun dalam': \u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19 (yang belajar), \u0e19\u0e31\u0e01\u0e23\u0e49\u0e2d\u0e07 (penyanyi), \u0e19\u0e31\u0e01\u0e01\u0e35\u0e2c\u0e32 (atlet)."
  },
  {
   "id": "v046",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e2b\u0e21\u0e2d",
   "audio": "\u0e2b\u0e21\u0e2d",
   "phon": "m\u01ceaw",
   "rom": "mo",
   "freq": 2,
   "gloss": "dokter",
   "alt": [
    "tabib"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: mo",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e2b\u0e32\u0e2b\u0e21\u0e2d",
   "exPhon": "ph\u01d2m pai h\u01cea m\u01ceaw",
   "exGloss": "Saya pergi ke dokter.",
   "note": "Bentuk resminya \u0e41\u0e1e\u0e17\u0e22\u0e4c (ph\u00e2et). \u0e2b\u0e21\u0e2d dipakai sehari-hari dan juga sebagai sapaan langsung kepada dokter."
  },
  {
   "id": "v047",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 2,
   "th": "\u0e0a\u0e37\u0e48\u0e2d",
   "audio": "\u0e0a\u0e37\u0e48\u0e2d",
   "phon": "ch\u00fbue",
   "rom": "chue",
   "freq": 2,
   "gloss": "nama; bernama",
   "alt": [
    "nama"
   ],
   "detail": "nomina \u00b7 RTGS: chue",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e21\u0e0a\u0e32\u0e22",
   "exPhon": "ph\u01d2m ch\u00fbue s\u01d2m-chaai",
   "exGloss": "Nama saya Somchai.",
   "note": "Dipakai langsung sebagai kata kerja: '\u0e1c\u0e21\u0e0a\u0e37\u0e48\u0e2d...' berarti 'saya bernama...', tanpa perlu kata 'adalah'."
  },
  {
   "id": "v048",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e01\u0e34\u0e19",
   "audio": "\u0e01\u0e34\u0e19",
   "phon": "kin",
   "rom": "kin",
   "freq": 1,
   "gloss": "makan",
   "alt": [
    "menyantap"
   ],
   "detail": "verba \u00b7 RTGS: kin",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27",
   "exPhon": "ph\u01d2m kin kh\u00e2ao",
   "exGloss": "Saya makan (nasi).",
   "note": "Bentuk yang lebih halus: \u0e17\u0e32\u0e19 atau \u0e23\u0e31\u0e1a\u0e1b\u0e23\u0e30\u0e17\u0e32\u0e19. \u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27 harfiahnya 'makan nasi', tetapi dipakai untuk 'makan' secara umum, seperti 'makan' dalam bahasa Indonesia."
  },
  {
   "id": "v049",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e14\u0e37\u0e48\u0e21",
   "audio": "\u0e14\u0e37\u0e48\u0e21",
   "phon": "d\u00f9uem",
   "rom": "duem",
   "freq": 2,
   "gloss": "minum",
   "alt": [],
   "detail": "verba \u00b7 RTGS: duem",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e14\u0e37\u0e48\u0e21\u0e19\u0e49\u0e33",
   "exPhon": "ph\u01d2m d\u00f9uem n\u00e1am",
   "exGloss": "Saya minum air.",
   "note": "Dalam percakapan sehari-hari orang justru memakai \u0e01\u0e34\u0e19 untuk minuman juga: \u0e01\u0e34\u0e19\u0e19\u0e49\u0e33, \u0e01\u0e34\u0e19\u0e01\u0e32\u0e41\u0e1f. \u0e14\u0e37\u0e48\u0e21 terasa lebih resmi."
  },
  {
   "id": "v050",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e19\u0e2d\u0e19",
   "audio": "\u0e19\u0e2d\u0e19",
   "phon": "naawn",
   "rom": "non",
   "freq": 2,
   "gloss": "tidur, berbaring",
   "alt": [
    "tidur",
    "berbaring"
   ],
   "detail": "verba \u00b7 RTGS: non",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e19\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "ph\u01d2m naawn th\u00eei b\u00e2an",
   "exGloss": "Saya tidur di rumah.",
   "note": "Untuk 'tertidur' (benar-benar terlelap) dipakai \u0e19\u0e2d\u0e19\u0e2b\u0e25\u0e31\u0e1a (naawn-l\u00e0p)."
  },
  {
   "id": "v051",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e44\u0e1b",
   "audio": "\u0e44\u0e1b",
   "phon": "pai",
   "rom": "pai",
   "freq": 1,
   "gloss": "pergi",
   "alt": [
    "berangkat",
    "menuju"
   ],
   "detail": "verba \u00b7 RTGS: pai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
   "exPhon": "ph\u01d2m pai t\u00e0-l\u00e0at",
   "exGloss": "Saya pergi ke pasar.",
   "note": "Tidak memerlukan kata 'ke': \u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14 sudah berarti 'pergi ke pasar'. \u0e44\u0e1b juga dipakai sesudah kata kerja lain untuk menandai arah menjauh dari pembicara."
  },
  {
   "id": "v052",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e21\u0e32",
   "audio": "\u0e21\u0e32",
   "phon": "maa",
   "rom": "ma",
   "freq": 1,
   "gloss": "datang",
   "alt": [
    "tiba",
    "mari"
   ],
   "detail": "verba \u00b7 RTGS: ma",
   "cls": "",
   "exTh": "\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e21\u0e32\u0e2b\u0e32\u0e1c\u0e21",
   "exPhon": "ph\u00fbean maa h\u01cea ph\u01d2m",
   "exGloss": "Teman datang menemui saya.",
   "note": "Pasangan \u0e44\u0e1b. Sesudah kata kerja lain, \u0e21\u0e32 menandai arah mendekat ke pembicara: \u0e40\u0e2d\u0e32\u0e21\u0e32 ('bawa ke sini')."
  },
  {
   "id": "v053",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e17\u0e33",
   "audio": "\u0e17\u0e33",
   "phon": "tham",
   "rom": "tham",
   "freq": 1,
   "gloss": "melakukan, membuat",
   "alt": [
    "mengerjakan",
    "membuat"
   ],
   "detail": "verba \u00b7 RTGS: tham",
   "cls": "",
   "exTh": "\u0e04\u0e38\u0e13\u0e17\u0e33\u0e2d\u0e30\u0e44\u0e23",
   "exPhon": "khun tham \u00e0-rai",
   "exGloss": "Anda sedang apa? / Apa pekerjaan Anda?",
   "note": "Dipakai membentuk banyak kata: \u0e17\u0e33\u0e07\u0e32\u0e19 (bekerja), \u0e17\u0e33\u0e2d\u0e32\u0e2b\u0e32\u0e23 (memasak), \u0e17\u0e33\u0e44\u0e21 (mengapa)."
  },
  {
   "id": "v054",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e1e\u0e39\u0e14",
   "audio": "\u0e1e\u0e39\u0e14",
   "phon": "ph\u00fbut",
   "rom": "phut",
   "freq": 2,
   "gloss": "berbicara",
   "alt": [
    "bicara",
    "berkata"
   ],
   "detail": "verba \u00b7 RTGS: phut",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e1e\u0e39\u0e14\u0e44\u0e17\u0e22\u0e44\u0e21\u0e48\u0e40\u0e01\u0e48\u0e07",
   "exPhon": "ph\u01d2m ph\u00fbut thai m\u00e2i k\u00e8ng",
   "exGloss": "Saya tidak pandai berbahasa Thai.",
   "note": ""
  },
  {
   "id": "v055",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e2d\u0e48\u0e32\u0e19",
   "audio": "\u0e2d\u0e48\u0e32\u0e19",
   "phon": "\u00e0an",
   "rom": "an",
   "freq": 2,
   "gloss": "membaca",
   "alt": [
    "baca"
   ],
   "detail": "verba \u00b7 RTGS: an",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2d\u0e48\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
   "exPhon": "ph\u01d2m \u00e0an n\u01ceng-s\u01d4ue",
   "exGloss": "Saya membaca buku.",
   "note": ""
  },
  {
   "id": "v056",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e40\u0e02\u0e35\u0e22\u0e19",
   "audio": "\u0e40\u0e02\u0e35\u0e22\u0e19",
   "phon": "kh\u01d0an",
   "rom": "khian",
   "freq": 2,
   "gloss": "menulis",
   "alt": [
    "tulis"
   ],
   "detail": "verba \u00b7 RTGS: khian",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e35\u0e22\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",
   "exPhon": "kh\u01d0an ch\u00fbue th\u00eei-n\u00eei",
   "exGloss": "Tulis nama di sini.",
   "note": ""
  },
  {
   "id": "v057",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e40\u0e23\u0e35\u0e22\u0e19",
   "audio": "\u0e40\u0e23\u0e35\u0e22\u0e19",
   "phon": "rian",
   "rom": "rian",
   "freq": 2,
   "gloss": "belajar",
   "alt": [
    "mempelajari"
   ],
   "detail": "verba \u00b7 RTGS: rian",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e23\u0e35\u0e22\u0e19\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
   "exPhon": "ph\u01d2m rian phaa-s\u01cea thai",
   "exGloss": "Saya belajar bahasa Thailand.",
   "note": ""
  },
  {
   "id": "v058",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e0a\u0e2d\u0e1a",
   "audio": "\u0e0a\u0e2d\u0e1a",
   "phon": "ch\u00e2awp",
   "rom": "chop",
   "freq": 1,
   "gloss": "suka, menyukai",
   "alt": [
    "senang akan",
    "gemar"
   ],
   "detail": "verba \u00b7 RTGS: chop",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e0a\u0e2d\u0e1a\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e44\u0e17\u0e22",
   "exPhon": "ph\u01d2m ch\u00e2awp aa-h\u01cean thai",
   "exGloss": "Saya suka makanan Thai.",
   "note": ""
  },
  {
   "id": "v059",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e23\u0e31\u0e01",
   "audio": "\u0e23\u0e31\u0e01",
   "phon": "r\u00e1k",
   "rom": "rak",
   "freq": 2,
   "gloss": "cinta, mencintai",
   "alt": [
    "sayang",
    "mengasihi"
   ],
   "detail": "verba \u00b7 RTGS: rak",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e23\u0e31\u0e01\u0e04\u0e23\u0e2d\u0e1a\u0e04\u0e23\u0e31\u0e27",
   "exPhon": "ph\u01d2m r\u00e1k khr\u00e2awp-khrua",
   "exGloss": "Saya mencintai keluarga saya.",
   "note": ""
  },
  {
   "id": "v060",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e23\u0e39\u0e49",
   "audio": "\u0e23\u0e39\u0e49",
   "phon": "r\u00fau",
   "rom": "ru",
   "freq": 1,
   "gloss": "tahu, mengetahui",
   "alt": [
    "mengetahui"
   ],
   "detail": "verba \u00b7 RTGS: ru",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e23\u0e39\u0e49",
   "exPhon": "ph\u01d2m m\u00e2i r\u00fau",
   "exGloss": "Saya tidak tahu.",
   "note": "Untuk 'mengenal orang' dipakai \u0e23\u0e39\u0e49\u0e08\u0e31\u0e01 (r\u00fau-j\u00e0k), bukan \u0e23\u0e39\u0e49 saja."
  },
  {
   "id": "v061",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e21\u0e35",
   "audio": "\u0e21\u0e35",
   "phon": "mii",
   "rom": "mi",
   "freq": 1,
   "gloss": "ada, punya",
   "alt": [
    "memiliki",
    "terdapat"
   ],
   "detail": "verba \u00b7 RTGS: mi",
   "cls": "",
   "exTh": "\u0e21\u0e35\u0e19\u0e49\u0e33\u0e44\u0e2b\u0e21",
   "exPhon": "mii n\u00e1am m\u01cei",
   "exGloss": "Ada air?",
   "note": "Satu kata untuk 'punya' dan 'ada (terdapat)', seperti dua arti itu dalam bahasa Indonesia."
  },
  {
   "id": "v062",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e40\u0e1b\u0e47\u0e19",
   "audio": "\u0e40\u0e1b\u0e47\u0e19",
   "phon": "pen",
   "rom": "pen",
   "freq": 1,
   "gloss": "adalah, menjadi",
   "alt": [
    "menjadi"
   ],
   "detail": "verba \u00b7 RTGS: pen",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e21\u0e2d",
   "exPhon": "kh\u01ceo pen m\u01ceaw",
   "exGloss": "Dia seorang dokter.",
   "note": "Dipakai untuk menyatakan jabatan, pekerjaan, atau golongan. TIDAK dipakai di depan kata sifat: 'rumah itu besar' adalah \u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48, bukan \u0e1a\u0e49\u0e32\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e43\u0e2b\u0e0d\u0e48."
  },
  {
   "id": "v063",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e04\u0e37\u0e2d",
   "audio": "\u0e04\u0e37\u0e2d",
   "phon": "khuue",
   "rom": "khue",
   "freq": 1,
   "gloss": "yaitu, adalah",
   "alt": [
    "ialah"
   ],
   "detail": "verba \u00b7 RTGS: khue",
   "cls": "",
   "exTh": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e1a\u0e49\u0e32\u0e19\u0e1c\u0e21",
   "exPhon": "n\u00eei khuue b\u00e2an ph\u01d2m",
   "exGloss": "Ini rumah saya.",
   "note": "\u0e04\u0e37\u0e2d menyamakan dua hal ('A yaitu B'), sedangkan \u0e40\u0e1b\u0e47\u0e19 menyatakan golongan ('A termasuk B'). Untuk pemula: pakai \u0e04\u0e37\u0e2d sesudah kata tunjuk, \u0e40\u0e1b\u0e47\u0e19 untuk pekerjaan."
  },
  {
   "id": "v064",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e2d\u0e22\u0e39\u0e48",
   "audio": "\u0e2d\u0e22\u0e39\u0e48",
   "phon": "y\u00f9u",
   "rom": "yu",
   "freq": 1,
   "gloss": "berada, tinggal di",
   "alt": [
    "ada di",
    "tinggal"
   ],
   "detail": "verba \u00b7 RTGS: yu",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22",
   "exPhon": "ph\u01d2m y\u00f9u in-doo-nii-sia",
   "exGloss": "Saya tinggal di Indonesia.",
   "note": "Juga dipakai sesudah kata kerja untuk menandai perbuatan yang sedang berlangsung: \u0e01\u0e34\u0e19\u0e2d\u0e22\u0e39\u0e48 ('sedang makan')."
  },
  {
   "id": "v065",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e44\u0e14\u0e49",
   "audio": "\u0e44\u0e14\u0e49",
   "phon": "d\u00e2i",
   "rom": "dai",
   "freq": 1,
   "gloss": "bisa, dapat; boleh",
   "alt": [
    "dapat",
    "boleh",
    "bisa"
   ],
   "detail": "verba \u00b7 RTGS: dai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e1e\u0e39\u0e14\u0e44\u0e17\u0e22\u0e44\u0e14\u0e49",
   "exPhon": "ph\u01d2m ph\u00fbut thai d\u00e2i",
   "exGloss": "Saya bisa berbahasa Thai.",
   "note": "Diletakkan SESUDAH kata kerja untuk 'bisa karena mampu'. Bandingkan dengan \u0e40\u0e1b\u0e47\u0e19 yang menandai keterampilan yang dipelajari, dan \u0e44\u0e2b\u0e27 yang menandai kemampuan fisik."
  },
  {
   "id": "v066",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e40\u0e2d\u0e32",
   "audio": "\u0e40\u0e2d\u0e32",
   "phon": "ao",
   "rom": "ao",
   "freq": 1,
   "gloss": "mengambil; mau",
   "alt": [
    "ambil",
    "mau",
    "minta"
   ],
   "detail": "verba \u00b7 RTGS: ao",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e2d\u0e32\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27",
   "exPhon": "ph\u01d2m ao n\u00e1am n\u00f9eng k\u00e2eo",
   "exGloss": "Saya mau satu gelas air.",
   "note": "Kata yang paling sering dipakai saat memesan atau berbelanja. \u0e40\u0e2d\u0e32 + barang = 'saya mau barang itu'."
  },
  {
   "id": "v067",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e40\u0e25\u0e48\u0e19",
   "audio": "\u0e40\u0e25\u0e48\u0e19",
   "phon": "l\u00ean",
   "rom": "len",
   "freq": 2,
   "gloss": "bermain",
   "alt": [
    "main"
   ],
   "detail": "verba \u00b7 RTGS: len",
   "cls": "",
   "exTh": "\u0e40\u0e14\u0e47\u0e01\u0e40\u0e25\u0e48\u0e19\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "d\u00e8k l\u00ean th\u00eei b\u00e2an",
   "exGloss": "Anak-anak bermain di rumah.",
   "note": ""
  },
  {
   "id": "v068",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e2b\u0e32",
   "audio": "\u0e2b\u0e32",
   "phon": "h\u01cea",
   "rom": "ha",
   "freq": 2,
   "gloss": "mencari; menemui",
   "alt": [
    "cari",
    "mencari"
   ],
   "detail": "verba \u00b7 RTGS: ha",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2b\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
   "exPhon": "ph\u01d2m h\u01cea ph\u00fbean",
   "exGloss": "Saya mencari teman saya.",
   "note": ""
  },
  {
   "id": "v069",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 2,
   "th": "\u0e40\u0e01\u0e48\u0e07",
   "audio": "\u0e40\u0e01\u0e48\u0e07",
   "phon": "k\u00e8ng",
   "rom": "keng",
   "freq": 2,
   "gloss": "pandai, mahir",
   "alt": [
    "pintar",
    "hebat",
    "jago"
   ],
   "detail": "sifat \u00b7 RTGS: keng",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e40\u0e01\u0e48\u0e07\u0e21\u0e32\u0e01",
   "exPhon": "kh\u01ceo k\u00e8ng m\u00e2ak",
   "exGloss": "Dia sangat pandai.",
   "note": "\u0e40\u0e01\u0e48\u0e07 menunjuk kemahiran pada suatu keterampilan. Untuk 'pandai' dalam arti cerdas dipakai \u0e09\u0e25\u0e32\u0e14 (ch\u00e0-l\u00e0at)."
  },
  {
   "id": "v070",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 2,
   "th": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
   "audio": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
   "phon": "n\u01ceng-s\u01d4ue",
   "rom": "nangsue",
   "freq": 2,
   "gloss": "buku",
   "alt": [
    "kitab"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e25\u0e48\u0e21 \u00b7 RTGS: nangsue",
   "cls": "\u0e40\u0e25\u0e48\u0e21",
   "exTh": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e40\u0e25\u0e48\u0e21\u0e19\u0e35\u0e49\u0e14\u0e35",
   "exPhon": "n\u01ceng-s\u01d4ue l\u00eam n\u00edi dii",
   "exGloss": "Buku ini bagus.",
   "note": "Klasifikatornya \u0e40\u0e25\u0e48\u0e21 (l\u00eam), dipakai untuk buku dan benda berjilid."
  },
  {
   "id": "v071",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e02\u0e49\u0e32\u0e27",
   "audio": "\u0e02\u0e49\u0e32\u0e27",
   "phon": "kh\u00e2ao",
   "rom": "khao",
   "freq": 1,
   "gloss": "beras, nasi",
   "alt": [
    "nasi",
    "padi"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e08\u0e32\u0e19 \u00b7 RTGS: khao",
   "cls": "\u0e08\u0e32\u0e19",
   "exTh": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "ph\u01d2m kin kh\u00e2ao l\u00e1eo",
   "exGloss": "Saya sudah makan.",
   "note": "Bandingkan dengan \u0e02\u0e32\u0e27 (kh\u01ceao, 'putih') dan \u0e02\u0e48\u0e32\u0e27 (kh\u00e0ao, 'berita') yang hanya berbeda nada."
  },
  {
   "id": "v072",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e19\u0e49\u0e33",
   "audio": "\u0e19\u0e49\u0e33",
   "phon": "n\u00e1am",
   "rom": "nam",
   "freq": 1,
   "gloss": "air",
   "alt": [
    "minuman"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e01\u0e49\u0e27 \u00b7 RTGS: nam",
   "cls": "\u0e41\u0e01\u0e49\u0e27",
   "exTh": "\u0e02\u0e2d\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e25\u0e48\u0e32\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u01ceaw n\u00e1am-pl\u00e0o khr\u00e1p",
   "exGloss": "Minta air putih.",
   "note": "Dipakai sebagai awalan untuk banyak cairan: \u0e19\u0e49\u0e33\u0e41\u0e02\u0e47\u0e07 (es), \u0e19\u0e49\u0e33\u0e15\u0e32\u0e25 (gula), \u0e19\u0e49\u0e33\u0e1b\u0e25\u0e32 (kecap ikan), \u0e19\u0e49\u0e33\u0e21\u0e31\u0e19 (minyak)."
  },
  {
   "id": "v073",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e2d\u0e32\u0e2b\u0e32\u0e23",
   "audio": "\u0e2d\u0e32\u0e2b\u0e32\u0e23",
   "phon": "aa-h\u01cean",
   "rom": "ahan",
   "freq": 2,
   "gloss": "makanan",
   "alt": [
    "hidangan",
    "masakan"
   ],
   "detail": "nomina \u00b7 RTGS: ahan",
   "cls": "",
   "exTh": "\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e44\u0e17\u0e22\u0e2d\u0e23\u0e48\u0e2d\u0e22",
   "exPhon": "aa-h\u01cean thai \u00e0-r\u00e0awi",
   "exGloss": "Makanan Thai enak.",
   "note": ""
  },
  {
   "id": "v074",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e44\u0e02\u0e48",
   "audio": "\u0e44\u0e02\u0e48",
   "phon": "kh\u00e0i",
   "rom": "khai",
   "freq": 2,
   "gloss": "telur",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e1f\u0e2d\u0e07 \u00b7 RTGS: khai",
   "cls": "\u0e1f\u0e2d\u0e07",
   "exTh": "\u0e02\u0e49\u0e32\u0e27\u0e1c\u0e31\u0e14\u0e44\u0e02\u0e48",
   "exPhon": "kh\u00e2ao-ph\u00e0t kh\u00e0i",
   "exGloss": "nasi goreng telur",
   "note": ""
  },
  {
   "id": "v075",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e2b\u0e21\u0e39",
   "audio": "\u0e2b\u0e21\u0e39",
   "phon": "m\u01d4u",
   "rom": "mu",
   "freq": 2,
   "gloss": "babi",
   "alt": [
    "daging babi"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: mu",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19\u0e2b\u0e21\u0e39",
   "exPhon": "ph\u01d2m m\u00e2i kin m\u01d4u",
   "exGloss": "Saya tidak makan babi.",
   "note": "Bagi pembaca Muslim, kata ini perlu dikenali lebih dahulu daripada kata makanan lain, sebab \u0e2b\u0e21\u0e39 muncul pada banyak nama hidangan: \u0e02\u0e49\u0e32\u0e27\u0e2b\u0e21\u0e39\u0e41\u0e14\u0e07, \u0e2b\u0e21\u0e39\u0e1b\u0e34\u0e49\u0e07, \u0e15\u0e49\u0e21\u0e22\u0e33\u0e2b\u0e21\u0e39."
  },
  {
   "id": "v076",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e44\u0e01\u0e48",
   "audio": "\u0e44\u0e01\u0e48",
   "phon": "k\u00e0i",
   "rom": "kai",
   "freq": 2,
   "gloss": "ayam",
   "alt": [
    "daging ayam"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: kai",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e02\u0e49\u0e32\u0e27\u0e1c\u0e31\u0e14\u0e44\u0e01\u0e48",
   "exPhon": "kh\u00e2ao-ph\u00e0t k\u00e0i",
   "exGloss": "nasi goreng ayam",
   "note": ""
  },
  {
   "id": "v077",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e1b\u0e25\u0e32",
   "audio": "\u0e1b\u0e25\u0e32",
   "phon": "plaa",
   "rom": "pla",
   "freq": 2,
   "gloss": "ikan",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: pla",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e1c\u0e21\u0e0a\u0e2d\u0e1a\u0e01\u0e34\u0e19\u0e1b\u0e25\u0e32",
   "exPhon": "ph\u01d2m ch\u00e2awp kin plaa",
   "exGloss": "Saya suka makan ikan.",
   "note": ""
  },
  {
   "id": "v078",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e40\u0e19\u0e37\u0e49\u0e2d",
   "audio": "\u0e40\u0e19\u0e37\u0e49\u0e2d",
   "phon": "n\u00faea",
   "rom": "nuea",
   "freq": 2,
   "gloss": "daging (terutama sapi)",
   "alt": [
    "daging"
   ],
   "detail": "nomina \u00b7 RTGS: nuea",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e40\u0e19\u0e37\u0e49\u0e2d",
   "exPhon": "ph\u01d2m kin n\u00faea",
   "exGloss": "Saya makan daging.",
   "note": "Bila disebut sendirian, \u0e40\u0e19\u0e37\u0e49\u0e2d biasanya berarti daging sapi (\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e27). Untuk 'daging' secara umum dipakai nama hewannya."
  },
  {
   "id": "v079",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e1c\u0e31\u0e01",
   "audio": "\u0e1c\u0e31\u0e01",
   "phon": "ph\u00e0k",
   "rom": "phak",
   "freq": 2,
   "gloss": "sayur",
   "alt": [
    "sayuran"
   ],
   "detail": "nomina \u00b7 RTGS: phak",
   "cls": "",
   "exTh": "\u0e1c\u0e31\u0e14\u0e1c\u0e31\u0e01\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14",
   "exPhon": "ph\u00e0t ph\u00e0k m\u00e2i ph\u00e8t",
   "exGloss": "Tumis sayur yang tidak pedas.",
   "note": ""
  },
  {
   "id": "v080",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e01\u0e25\u0e49\u0e27\u0e22",
   "audio": "\u0e01\u0e25\u0e49\u0e27\u0e22",
   "phon": "kl\u00fbai",
   "rom": "kluai",
   "freq": 2,
   "gloss": "pisang",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e39\u0e01 \u00b7 RTGS: kluai",
   "cls": "\u0e25\u0e39\u0e01",
   "exTh": "\u0e01\u0e25\u0e49\u0e27\u0e22\u0e2a\u0e2d\u0e07\u0e25\u0e39\u0e01",
   "exPhon": "kl\u00fbai s\u01ceawng l\u00fbuk",
   "exGloss": "dua buah pisang",
   "note": "\u0e25\u0e39\u0e01 selain berarti 'anak' juga menjadi klasifikator untuk buah-buahan."
  },
  {
   "id": "v081",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e2a\u0e49\u0e21",
   "audio": "\u0e2a\u0e49\u0e21",
   "phon": "s\u00f4m",
   "rom": "som",
   "freq": 2,
   "gloss": "jeruk",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e39\u0e01 \u00b7 RTGS: som",
   "cls": "\u0e25\u0e39\u0e01",
   "exTh": "\u0e2a\u0e49\u0e21\u0e15\u0e33\u0e40\u0e1c\u0e47\u0e14\u0e21\u0e32\u0e01",
   "exPhon": "s\u00f4m-tam ph\u00e8t m\u00e2ak",
   "exGloss": "Som tam sangat pedas.",
   "note": "\u0e2a\u0e49\u0e21\u0e15\u0e33 (s\u00f4m-tam) adalah salad pepaya muda, bukan hidangan jeruk. Nama itu berasal dari rasa asamnya."
  },
  {
   "id": "v082",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e01\u0e32\u0e41\u0e1f",
   "audio": "\u0e01\u0e32\u0e41\u0e1f",
   "phon": "kaa-fae",
   "rom": "kafae",
   "freq": 2,
   "gloss": "kopi",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e01\u0e49\u0e27 \u00b7 RTGS: kafae",
   "cls": "\u0e41\u0e01\u0e49\u0e27",
   "exTh": "\u0e1c\u0e21\u0e14\u0e37\u0e48\u0e21\u0e01\u0e32\u0e41\u0e1f\u0e23\u0e49\u0e2d\u0e19",
   "exPhon": "ph\u01d2m d\u00f9uem kaa-fae r\u00e1awn",
   "exGloss": "Saya minum kopi panas.",
   "note": "Serapan dari bahasa Eropa. Untuk kopi dingin dipakai \u0e01\u0e32\u0e41\u0e1f\u0e40\u0e22\u0e47\u0e19 (kaa-fae yen)."
  },
  {
   "id": "v083",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 3,
   "th": "\u0e0a\u0e32",
   "audio": "\u0e0a\u0e32",
   "phon": "chaa",
   "rom": "cha",
   "freq": 2,
   "gloss": "teh",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e01\u0e49\u0e27 \u00b7 RTGS: cha",
   "cls": "\u0e41\u0e01\u0e49\u0e27",
   "exTh": "\u0e0a\u0e32\u0e40\u0e22\u0e47\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27",
   "exPhon": "chaa-yen n\u00f9eng k\u00e2eo",
   "exGloss": "satu gelas teh dingin",
   "note": ""
  },
  {
   "id": "v084",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e40\u0e1c\u0e47\u0e14",
   "audio": "\u0e40\u0e1c\u0e47\u0e14",
   "phon": "ph\u00e8t",
   "rom": "phet",
   "freq": 2,
   "gloss": "pedas",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: phet",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "m\u00e2i ph\u00e8t khr\u00e1p",
   "exGloss": "Tidak pedas, ya.",
   "note": "Ungkapan yang perlu dihafal utuh saat memesan: \u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14 ('tidak pedas') dan \u0e40\u0e1c\u0e47\u0e14\u0e19\u0e49\u0e2d\u0e22 ('sedikit pedas')."
  },
  {
   "id": "v085",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e2b\u0e27\u0e32\u0e19",
   "audio": "\u0e2b\u0e27\u0e32\u0e19",
   "phon": "w\u01cean",
   "rom": "wan",
   "freq": 2,
   "gloss": "manis",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: wan",
   "cls": "",
   "exTh": "\u0e0a\u0e32\u0e2b\u0e27\u0e32\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "chaa w\u01cean m\u00e2ak",
   "exGloss": "Tehnya sangat manis.",
   "note": "Perhatikan bedanya dengan \u0e27\u0e31\u0e19 (wan, 'hari'): bukan hanya nadanya, panjang vokalnya juga berbeda."
  },
  {
   "id": "v086",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e40\u0e04\u0e47\u0e21",
   "audio": "\u0e40\u0e04\u0e47\u0e21",
   "phon": "khem",
   "rom": "khem",
   "freq": 2,
   "gloss": "asin",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: khem",
   "cls": "",
   "exTh": "\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e04\u0e47\u0e21\u0e44\u0e1b",
   "exPhon": "aa-h\u01cean khem pai",
   "exGloss": "Makanannya terlalu asin.",
   "note": "Pola 'kata sifat + \u0e44\u0e1b' berarti 'terlalu ...': \u0e40\u0e04\u0e47\u0e21\u0e44\u0e1b, \u0e41\u0e1e\u0e07\u0e44\u0e1b, \u0e40\u0e1c\u0e47\u0e14\u0e44\u0e1b."
  },
  {
   "id": "v087",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e40\u0e1b\u0e23\u0e35\u0e49\u0e22\u0e27",
   "audio": "\u0e40\u0e1b\u0e23\u0e35\u0e49\u0e22\u0e27",
   "phon": "pr\u00eeao",
   "rom": "priao",
   "freq": 2,
   "gloss": "asam",
   "alt": [
    "kecut"
   ],
   "detail": "sifat \u00b7 RTGS: priao",
   "cls": "",
   "exTh": "\u0e2a\u0e49\u0e21\u0e40\u0e1b\u0e23\u0e35\u0e49\u0e22\u0e27",
   "exPhon": "s\u00f4m pr\u00eeao",
   "exGloss": "Jeruknya asam.",
   "note": ""
  },
  {
   "id": "v088",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e2d\u0e23\u0e48\u0e2d\u0e22",
   "audio": "\u0e2d\u0e23\u0e48\u0e2d\u0e22",
   "phon": "\u00e0-r\u00e0awi",
   "rom": "aroi",
   "freq": 2,
   "gloss": "enak, lezat",
   "alt": [
    "lezat",
    "sedap"
   ],
   "detail": "sifat \u00b7 RTGS: aroi",
   "cls": "",
   "exTh": "\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "\u00e0-r\u00e0awi m\u00e2ak khr\u00e1p",
   "exGloss": "Enak sekali.",
   "note": "Contoh aksara nam dengan pemimpin \u0e2d kelas tengah, sehingga \u0e23\u0e48\u0e2d\u0e22 bernada rendah, bukan turun."
  },
  {
   "id": "v089",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e1a\u0e49\u0e32\u0e19",
   "audio": "\u0e1a\u0e49\u0e32\u0e19",
   "phon": "b\u00e2an",
   "rom": "ban",
   "freq": 1,
   "gloss": "rumah",
   "alt": [
    "kampung"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e2b\u0e25\u0e31\u0e07 \u00b7 RTGS: ban",
   "cls": "\u0e2b\u0e25\u0e31\u0e07",
   "exTh": "\u0e1a\u0e49\u0e32\u0e19\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25",
   "exPhon": "b\u00e2an ph\u01d2m y\u00f9u klai",
   "exGloss": "Rumah saya jauh.",
   "note": "Klasifikatornya \u0e2b\u0e25\u0e31\u0e07 (l\u01ceng), kata yang juga berarti 'belakang'. \u0e1a\u0e49\u0e32\u0e19 juga dipakai di depan nama kampung."
  },
  {
   "id": "v090",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33",
   "audio": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33",
   "phon": "h\u00e2awng-n\u00e1am",
   "rom": "hongnam",
   "freq": 2,
   "gloss": "kamar mandi, toilet",
   "alt": [
    "toilet",
    "WC",
    "kamar kecil"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e2b\u0e49\u0e2d\u0e07 \u00b7 RTGS: hongnam",
   "cls": "\u0e2b\u0e49\u0e2d\u0e07",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19",
   "exPhon": "h\u00e2awng-n\u00e1am y\u00f9u th\u00eei-n\u01cei",
   "exGloss": "Di mana toiletnya?",
   "note": "Harfiahnya 'ruang air'. \u0e2b\u0e49\u0e2d\u0e07 berarti 'ruang' dan dipakai pada banyak kata: \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19 (kamar tidur), \u0e2b\u0e49\u0e2d\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19 (ruang kelas)."
  },
  {
   "id": "v091",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19",
   "audio": "\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19",
   "phon": "roong-rian",
   "rom": "rongrian",
   "freq": 2,
   "gloss": "sekolah",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e42\u0e23\u0e07 \u00b7 RTGS: rongrian",
   "cls": "\u0e42\u0e23\u0e07",
   "exTh": "\u0e40\u0e14\u0e47\u0e01\u0e44\u0e1b\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19",
   "exPhon": "d\u00e8k pai roong-rian",
   "exGloss": "Anak-anak pergi ke sekolah.",
   "note": "\u0e42\u0e23\u0e07 berarti 'bangunan besar': \u0e42\u0e23\u0e07\u0e41\u0e23\u0e21 (hotel), \u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25 (rumah sakit), \u0e42\u0e23\u0e07\u0e2b\u0e19\u0e31\u0e07 (gedung bioskop)."
  },
  {
   "id": "v092",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e15\u0e25\u0e32\u0e14",
   "audio": "\u0e15\u0e25\u0e32\u0e14",
   "phon": "t\u00e0-l\u00e0at",
   "rom": "talat",
   "freq": 2,
   "gloss": "pasar",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: talat",
   "cls": "",
   "exTh": "\u0e15\u0e25\u0e32\u0e14\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "t\u00e0-l\u00e0at y\u00f9u kl\u00e2i b\u00e2an",
   "exGloss": "Pasarnya dekat rumah.",
   "note": ""
  },
  {
   "id": "v093",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e23\u0e49\u0e32\u0e19",
   "audio": "\u0e23\u0e49\u0e32\u0e19",
   "phon": "r\u00e1an",
   "rom": "ran",
   "freq": 2,
   "gloss": "toko, warung",
   "alt": [
    "kedai",
    "kios"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e23\u0e49\u0e32\u0e19 \u00b7 RTGS: ran",
   "cls": "\u0e23\u0e49\u0e32\u0e19",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49",
   "exPhon": "r\u00e1an-aa-h\u01cean y\u00f9u trong-n\u00edi",
   "exGloss": "Restorannya ada di sini.",
   "note": "\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23 berarti 'restoran', \u0e23\u0e49\u0e32\u0e19\u0e01\u0e32\u0e41\u0e1f 'kedai kopi'."
  },
  {
   "id": "v094",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21",
   "audio": "\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21",
   "phon": "roong-raem",
   "rom": "rongraem",
   "freq": 2,
   "gloss": "hotel",
   "alt": [
    "penginapan"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e42\u0e23\u0e07 \u00b7 RTGS: rongraem",
   "cls": "\u0e42\u0e23\u0e07",
   "exTh": "\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21",
   "exPhon": "roong-raem y\u00f9u klai m\u01cei",
   "exGloss": "Apakah hotelnya jauh?",
   "note": ""
  },
  {
   "id": "v095",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e2a\u0e16\u0e32\u0e19\u0e35",
   "audio": "\u0e2a\u0e16\u0e32\u0e19\u0e35",
   "phon": "s\u00e0-th\u01cea-nii",
   "rom": "sathani",
   "freq": 2,
   "gloss": "stasiun",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: sathani",
   "cls": "",
   "exTh": "\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e23\u0e16\u0e44\u0e1f\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19",
   "exPhon": "s\u00e0-th\u01cea-nii r\u00f3t-fai y\u00f9u n\u01cei",
   "exGloss": "Di mana stasiun keretanya?",
   "note": "Contoh aksara nam yang TIDAK menularkan kelas, sebab \u0e16 sendiri sudah berkelas tinggi."
  },
  {
   "id": "v096",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e27\u0e31\u0e14",
   "audio": "\u0e27\u0e31\u0e14",
   "phon": "w\u00e1t",
   "rom": "wat",
   "freq": 2,
   "gloss": "kuil (wihara Buddha)",
   "alt": [
    "wihara",
    "candi"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e27\u0e31\u0e14 \u00b7 RTGS: wat",
   "cls": "\u0e27\u0e31\u0e14",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e27\u0e31\u0e14",
   "exPhon": "ph\u01d2m pai w\u00e1t",
   "exGloss": "Saya pergi ke kuil.",
   "note": "Muncul pada banyak nama tempat di Thailand: \u0e27\u0e31\u0e14\u0e42\u0e1e\u0e18\u0e34\u0e4c, \u0e27\u0e31\u0e14\u0e2d\u0e23\u0e38\u0e13. Kata yang sama juga berarti 'mengukur'."
  },
  {
   "id": "v097",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e27\u0e31\u0e19",
   "audio": "\u0e27\u0e31\u0e19",
   "phon": "wan",
   "rom": "wan",
   "freq": 1,
   "gloss": "hari",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e27\u0e31\u0e19 \u00b7 RTGS: wan",
   "cls": "\u0e27\u0e31\u0e19",
   "exTh": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e23\u0e49\u0e2d\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "wan-n\u00edi r\u00e1awn m\u00e2ak",
   "exGloss": "Hari ini sangat panas.",
   "note": "Nama hari dibentuk dengan \u0e27\u0e31\u0e19 + nama planet: \u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c (Senin), \u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c (Minggu)."
  },
  {
   "id": "v098",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",
   "audio": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",
   "phon": "wan-n\u00edi",
   "rom": "wanni",
   "freq": 2,
   "gloss": "hari ini",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: wanni",
   "cls": "",
   "exTh": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e44\u0e1b",
   "exPhon": "wan-n\u00edi ph\u01d2m m\u00e2i pai",
   "exGloss": "Hari ini saya tidak pergi.",
   "note": "Keterangan waktu lazim diletakkan di AWAL kalimat dalam bahasa Thailand, meski boleh juga di akhir."
  },
  {
   "id": "v099",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49",
   "audio": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49",
   "phon": "phr\u00fbng-n\u00edi",
   "rom": "phrungni",
   "freq": 2,
   "gloss": "besok",
   "alt": [
    "esok"
   ],
   "detail": "keterangan \u00b7 RTGS: phrungni",
   "cls": "",
   "exTh": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
   "exPhon": "phr\u00fbng-n\u00edi ph\u01d2m pai t\u00e0-l\u00e0at",
   "exGloss": "Besok saya pergi ke pasar.",
   "note": "Tidak ada perubahan bentuk kata kerja untuk masa depan; keterangan waktu sudah cukup."
  },
  {
   "id": "v100",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19",
   "audio": "\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19",
   "phon": "m\u00fbea-waan",
   "rom": "muea wan",
   "freq": 2,
   "gloss": "kemarin",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: muea wan",
   "cls": "",
   "exTh": "\u0e40\u0e21\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e19\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "m\u00fbea-waan ph\u01d2m y\u00f9u b\u00e2an",
   "exGloss": "Kemarin saya di rumah.",
   "note": ""
  },
  {
   "id": "v101",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32",
   "audio": "\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32",
   "phon": "taawn-ch\u00e1o",
   "rom": "ton chao",
   "freq": 2,
   "gloss": "pagi",
   "alt": [
    "waktu pagi"
   ],
   "detail": "keterangan \u00b7 RTGS: ton chao",
   "cls": "",
   "exTh": "\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32\u0e1c\u0e21\u0e14\u0e37\u0e48\u0e21\u0e01\u0e32\u0e41\u0e1f",
   "exPhon": "taawn-ch\u00e1o ph\u01d2m d\u00f9uem kaa-fae",
   "exGloss": "Pagi saya minum kopi.",
   "note": "\u0e15\u0e2d\u0e19 berarti 'bagian waktu': \u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32, \u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19, \u0e15\u0e2d\u0e19\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19."
  },
  {
   "id": "v102",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19",
   "audio": "\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19",
   "phon": "taawn-yen",
   "rom": "ton yen",
   "freq": 2,
   "gloss": "senja, petang",
   "alt": [
    "sore",
    "petang"
   ],
   "detail": "keterangan \u00b7 RTGS: ton yen",
   "cls": "",
   "exTh": "\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19\u0e1c\u0e21\u0e01\u0e25\u0e31\u0e1a\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "taawn-yen ph\u01d2m kl\u00e0p b\u00e2an",
   "exGloss": "Petang saya pulang.",
   "note": ""
  },
  {
   "id": "v103",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19",
   "audio": "\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19",
   "phon": "klaang-khuuen",
   "rom": "klangkhuen",
   "freq": 2,
   "gloss": "malam",
   "alt": [
    "waktu malam"
   ],
   "detail": "keterangan \u00b7 RTGS: klangkhuen",
   "cls": "",
   "exTh": "\u0e01\u0e25\u0e32\u0e07\u0e04\u0e37\u0e19\u0e40\u0e22\u0e47\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "klaang-khuuen yen m\u00e2ak",
   "exGloss": "Malamnya sangat dingin.",
   "note": "\u0e01\u0e25\u0e32\u0e07 berarti 'tengah', \u0e04\u0e37\u0e19 berarti 'malam'; harfiahnya 'tengah malam' tetapi artinya malam secara umum."
  },
  {
   "id": "v104",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e40\u0e27\u0e25\u0e32",
   "audio": "\u0e40\u0e27\u0e25\u0e32",
   "phon": "wee-laa",
   "rom": "wela",
   "freq": 2,
   "gloss": "waktu",
   "alt": [
    "saat"
   ],
   "detail": "nomina \u00b7 RTGS: wela",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e27\u0e25\u0e32",
   "exPhon": "ph\u01d2m m\u00e2i mii wee-laa",
   "exGloss": "Saya tidak punya waktu.",
   "note": "Serapan dari bahasa Pali-Sanskerta, berasal dari akar yang sama dengan kata bahasa Indonesia 'waktu' lewat jalur berbeda."
  },
  {
   "id": "v105",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
   "audio": "\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
   "phon": "ch\u00fba-moong",
   "rom": "chuamong",
   "freq": 2,
   "gloss": "jam (lama waktu)",
   "alt": [
    "jam"
   ],
   "detail": "nomina \u00b7 RTGS: chuamong",
   "cls": "",
   "exTh": "\u0e2a\u0e2d\u0e07\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
   "exPhon": "s\u01ceawng ch\u00fba-moong",
   "exGloss": "dua jam",
   "note": "\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07 adalah lama waktu; untuk menyebut pukul dipakai \u0e42\u0e21\u0e07 dengan pola yang berbeda-beda menurut bagian hari."
  },
  {
   "id": "v106",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e43\u0e2b\u0e0d\u0e48",
   "audio": "\u0e43\u0e2b\u0e0d\u0e48",
   "phon": "y\u00e0i",
   "rom": "yai",
   "freq": 2,
   "gloss": "besar",
   "alt": [
    "luas",
    "agung"
   ],
   "detail": "sifat \u00b7 RTGS: yai",
   "cls": "",
   "exTh": "\u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48\u0e21\u0e32\u0e01",
   "exPhon": "b\u00e2an y\u00e0i m\u00e2ak",
   "exGloss": "Rumahnya sangat besar.",
   "note": "Kata sifat diletakkan SESUDAH kata benda: \u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48 ('rumah besar'), bukan \u0e43\u0e2b\u0e0d\u0e48\u0e1a\u0e49\u0e32\u0e19."
  },
  {
   "id": "v107",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e40\u0e25\u0e47\u0e01",
   "audio": "\u0e40\u0e25\u0e47\u0e01",
   "phon": "l\u00e9k",
   "rom": "lek",
   "freq": 2,
   "gloss": "kecil",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: lek",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e40\u0e25\u0e47\u0e01\u0e41\u0e15\u0e48\u0e14\u0e35",
   "exPhon": "r\u00e1an l\u00e9k t\u00e0e dii",
   "exGloss": "Tokonya kecil tetapi bagus.",
   "note": ""
  },
  {
   "id": "v108",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e14\u0e35",
   "audio": "\u0e14\u0e35",
   "phon": "dii",
   "rom": "di",
   "freq": 1,
   "gloss": "baik, bagus",
   "alt": [
    "bagus",
    "baik"
   ],
   "detail": "sifat \u00b7 RTGS: di",
   "cls": "",
   "exTh": "\u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35\u0e44\u0e2b\u0e21",
   "exPhon": "s\u00e0-baai-dii m\u01cei",
   "exGloss": "Apa kabar? (Sehat?)",
   "note": "Muncul pada banyak ungkapan: \u0e14\u0e35\u0e43\u0e08 (senang), \u0e43\u0e08\u0e14\u0e35 (baik hati), \u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35 (sehat)."
  },
  {
   "id": "v109",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e2a\u0e27\u0e22",
   "audio": "\u0e2a\u0e27\u0e22",
   "phon": "s\u01d4ai",
   "rom": "suai",
   "freq": 2,
   "gloss": "cantik, indah",
   "alt": [
    "indah",
    "elok"
   ],
   "detail": "sifat \u00b7 RTGS: suai",
   "cls": "",
   "exTh": "\u0e27\u0e31\u0e14\u0e19\u0e35\u0e49\u0e2a\u0e27\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "w\u00e1t n\u00edi s\u01d4ai m\u00e2ak",
   "exGloss": "Kuil ini sangat indah.",
   "note": "Dipakai untuk perempuan, pemandangan, dan benda. Untuk lelaki dipakai \u0e2b\u0e25\u0e48\u0e2d (l\u00e0aw, 'tampan')."
  },
  {
   "id": "v110",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e43\u0e2b\u0e21\u0e48",
   "audio": "\u0e43\u0e2b\u0e21\u0e48",
   "phon": "m\u00e0i",
   "rom": "mai",
   "freq": 2,
   "gloss": "baru",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: mai",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e21\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e15\u0e23\u0e07\u0e19\u0e31\u0e49\u0e19",
   "exPhon": "r\u00e1an m\u00e0i y\u00f9u trong-n\u00e1n",
   "exGloss": "Toko baru itu ada di sana.",
   "note": "Perhatikan empat kata berbunyi 'mai' yang berbeda nada dan arti: \u0e44\u0e21\u0e48 (tidak), \u0e44\u0e2b\u0e21 (partikel tanya), \u0e43\u0e2b\u0e21\u0e48 (baru), \u0e44\u0e21\u0e49 (kayu)."
  },
  {
   "id": "v111",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e40\u0e01\u0e48\u0e32",
   "audio": "\u0e40\u0e01\u0e48\u0e32",
   "phon": "k\u00e0o",
   "rom": "kao",
   "freq": 2,
   "gloss": "lama, tua (untuk benda)",
   "alt": [
    "usang",
    "bekas"
   ],
   "detail": "sifat \u00b7 RTGS: kao",
   "cls": "",
   "exTh": "\u0e23\u0e16\u0e40\u0e01\u0e48\u0e32\u0e41\u0e15\u0e48\u0e14\u0e35",
   "exPhon": "r\u00f3t k\u00e0o t\u00e0e dii",
   "exGloss": "Mobilnya tua tetapi bagus.",
   "note": "Untuk orang yang berusia lanjut dipakai \u0e41\u0e01\u0e48 (k\u00e0e), bukan \u0e40\u0e01\u0e48\u0e32."
  },
  {
   "id": "v112",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e41\u0e1e\u0e07",
   "audio": "\u0e41\u0e1e\u0e07",
   "phon": "phaeng",
   "rom": "phaeng",
   "freq": 2,
   "gloss": "mahal",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: phaeng",
   "cls": "",
   "exTh": "\u0e41\u0e1e\u0e07\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "phaeng m\u00e2ak khr\u00e1p",
   "exGloss": "Mahal sekali.",
   "note": ""
  },
  {
   "id": "v113",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e16\u0e39\u0e01",
   "audio": "\u0e16\u0e39\u0e01",
   "phon": "th\u00f9uk",
   "rom": "thuk",
   "freq": 2,
   "gloss": "murah; benar",
   "alt": [
    "murah",
    "benar",
    "tepat"
   ],
   "detail": "sifat \u00b7 RTGS: thuk",
   "cls": "",
   "exTh": "\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e16\u0e39\u0e01\u0e01\u0e27\u0e48\u0e32",
   "exPhon": "th\u00eei-n\u00eei th\u00f9uk kw\u00e0a",
   "exGloss": "Di sini lebih murah.",
   "note": "Satu kata dengan dua arti yang jauh berbeda: 'murah' dan 'benar'. Konteks yang menentukan."
  },
  {
   "id": "v114",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e23\u0e49\u0e2d\u0e19",
   "audio": "\u0e23\u0e49\u0e2d\u0e19",
   "phon": "r\u00e1awn",
   "rom": "ron",
   "freq": 2,
   "gloss": "panas",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: ron",
   "cls": "",
   "exTh": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e23\u0e49\u0e2d\u0e19",
   "exPhon": "wan-n\u00edi r\u00e1awn",
   "exGloss": "Hari ini panas.",
   "note": ""
  },
  {
   "id": "v115",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e40\u0e22\u0e47\u0e19",
   "audio": "\u0e40\u0e22\u0e47\u0e19",
   "phon": "yen",
   "rom": "yen",
   "freq": 2,
   "gloss": "dingin (benda, minuman); sejuk",
   "alt": [
    "sejuk",
    "dingin"
   ],
   "detail": "sifat \u00b7 RTGS: yen",
   "cls": "",
   "exTh": "\u0e19\u0e49\u0e33\u0e40\u0e22\u0e47\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27",
   "exPhon": "n\u00e1am yen n\u00f9eng k\u00e2eo",
   "exGloss": "satu gelas air dingin",
   "note": "\u0e40\u0e22\u0e47\u0e19 untuk benda atau minuman yang dingin, \u0e2b\u0e19\u0e32\u0e27 untuk cuaca yang membuat badan kedinginan."
  },
  {
   "id": "v116",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e2b\u0e19\u0e32\u0e27",
   "audio": "\u0e2b\u0e19\u0e32\u0e27",
   "phon": "n\u01ceao",
   "rom": "nao",
   "freq": 2,
   "gloss": "dingin (cuaca, badan)",
   "alt": [
    "kedinginan"
   ],
   "detail": "sifat \u00b7 RTGS: nao",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2b\u0e19\u0e32\u0e27",
   "exPhon": "ph\u01d2m n\u01ceao",
   "exGloss": "Saya kedinginan.",
   "note": ""
  },
  {
   "id": "v117",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e21\u0e32\u0e01",
   "audio": "\u0e21\u0e32\u0e01",
   "phon": "m\u00e2ak",
   "rom": "mak",
   "freq": 1,
   "gloss": "banyak; sangat",
   "alt": [
    "sangat",
    "sekali",
    "banyak"
   ],
   "detail": "keterangan \u00b7 RTGS: mak",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e0a\u0e2d\u0e1a\u0e21\u0e32\u0e01",
   "exPhon": "ph\u01d2m ch\u00e2awp m\u00e2ak",
   "exGloss": "Saya sangat suka.",
   "note": "Diletakkan SESUDAH kata yang diperkuat: \u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01, \u0e41\u0e1e\u0e07\u0e21\u0e32\u0e01. Bukan di depan seperti 'sangat' dalam bahasa Indonesia."
  },
  {
   "id": "v118",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e19\u0e49\u0e2d\u0e22",
   "audio": "\u0e19\u0e49\u0e2d\u0e22",
   "phon": "n\u00e1awi",
   "rom": "noi",
   "freq": 2,
   "gloss": "sedikit",
   "alt": [
    "kurang"
   ],
   "detail": "keterangan \u00b7 RTGS: noi",
   "cls": "",
   "exTh": "\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e49\u0e2d\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "ph\u00e8t n\u00e1awi khr\u00e1p",
   "exGloss": "Sedikit pedas saja, ya.",
   "note": "Bentuk \u0e19\u0e34\u0e14\u0e2b\u0e19\u0e48\u0e2d\u0e22 (n\u00edt-n\u00e0wi) juga sering dipakai untuk 'sedikit'."
  },
  {
   "id": "v119",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e44\u0e01\u0e25",
   "audio": "\u0e44\u0e01\u0e25",
   "phon": "klai",
   "rom": "klai",
   "freq": 2,
   "gloss": "jauh",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: klai",
   "cls": "",
   "exTh": "\u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21",
   "exPhon": "klai m\u01cei",
   "exGloss": "Jauh tidak?",
   "note": "Pasangannya \u0e43\u0e01\u0e25\u0e49 (kl\u00e2i, 'dekat') hanya berbeda nada dan ejaan \u0e44/\u0e43. Salah satu pasangan yang paling mudah tertukar."
  },
  {
   "id": "v120",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e43\u0e01\u0e25\u0e49",
   "audio": "\u0e43\u0e01\u0e25\u0e49",
   "phon": "kl\u00e2i",
   "rom": "klai",
   "freq": 2,
   "gloss": "dekat",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: klai",
   "cls": "",
   "exTh": "\u0e15\u0e25\u0e32\u0e14\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49",
   "exPhon": "t\u00e0-l\u00e0at y\u00f9u kl\u00e2i",
   "exGloss": "Pasarnya dekat.",
   "note": ""
  },
  {
   "id": "v121",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e0b\u0e49\u0e32\u0e22",
   "audio": "\u0e0b\u0e49\u0e32\u0e22",
   "phon": "s\u00e1ai",
   "rom": "sai",
   "freq": 2,
   "gloss": "kiri",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: sai",
   "cls": "",
   "exTh": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e27\u0e0b\u0e49\u0e32\u0e22",
   "exPhon": "l\u00edao s\u00e1ai",
   "exGloss": "Belok kiri.",
   "note": ""
  },
  {
   "id": "v122",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e02\u0e27\u0e32",
   "audio": "\u0e02\u0e27\u0e32",
   "phon": "khw\u01cea",
   "rom": "khwa",
   "freq": 2,
   "gloss": "kanan",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: khwa",
   "cls": "",
   "exTh": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e27\u0e02\u0e27\u0e32",
   "exPhon": "l\u00edao khw\u01cea",
   "exGloss": "Belok kanan.",
   "note": "\u0e02\u0e27 adalah gugus konsonan sejati, jadi kelasnya diambil dari \u0e02 (kelas tinggi)."
  },
  {
   "id": "v123",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e15\u0e23\u0e07",
   "audio": "\u0e15\u0e23\u0e07",
   "phon": "trong",
   "rom": "trong",
   "freq": 2,
   "gloss": "lurus; tepat di",
   "alt": [
    "lurus",
    "langsung"
   ],
   "detail": "sifat \u00b7 RTGS: trong",
   "cls": "",
   "exTh": "\u0e15\u0e23\u0e07\u0e44\u0e1b",
   "exPhon": "trong pai",
   "exGloss": "Jalan terus (lurus).",
   "note": "\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49 ('di sini'), \u0e15\u0e23\u0e07\u0e19\u0e31\u0e49\u0e19 ('di sana') dipakai untuk menunjuk tempat yang terlihat."
  },
  {
   "id": "v124",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e2b\u0e19\u0e49\u0e32",
   "audio": "\u0e2b\u0e19\u0e49\u0e32",
   "phon": "n\u00e2a",
   "rom": "na",
   "freq": 2,
   "gloss": "depan; muka; halaman",
   "alt": [
    "muka",
    "wajah",
    "depan"
   ],
   "detail": "nomina \u00b7 RTGS: na",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e19\u0e49\u0e32\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21",
   "exPhon": "r\u00e1an y\u00f9u n\u00e2a roong-raem",
   "exGloss": "Tokonya ada di depan hotel.",
   "note": "Bunyinya sama dengan \u0e19\u0e48\u0e32 (n\u00e2a, 'patut, layak') tetapi ejaannya berbeda. Juga berarti 'berikutnya': \u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c\u0e2b\u0e19\u0e49\u0e32 ('pekan depan')."
  },
  {
   "id": "v125",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e2b\u0e25\u0e31\u0e07",
   "audio": "\u0e2b\u0e25\u0e31\u0e07",
   "phon": "l\u01ceng",
   "rom": "lang",
   "freq": 2,
   "gloss": "belakang; sesudah",
   "alt": [
    "belakang",
    "punggung"
   ],
   "detail": "nomina \u00b7 RTGS: lang",
   "cls": "",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e25\u0e31\u0e07\u0e23\u0e49\u0e32\u0e19",
   "exPhon": "h\u00e2awng-n\u00e1am y\u00f9u l\u01ceng r\u00e1an",
   "exGloss": "Toiletnya ada di belakang toko.",
   "note": "Satu kata dengan tiga tugas: 'belakang', 'sesudah', dan klasifikator untuk rumah serta bangunan (\u0e1a\u0e49\u0e32\u0e19\u0e2a\u0e2d\u0e07\u0e2b\u0e25\u0e31\u0e07, 'dua rumah')."
  },
  {
   "id": "v126",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e23\u0e16",
   "audio": "\u0e23\u0e16",
   "phon": "r\u00f3t",
   "rom": "rot",
   "freq": 2,
   "gloss": "mobil, kendaraan",
   "alt": [
    "kendaraan",
    "mobil"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e31\u0e19 \u00b7 RTGS: rot",
   "cls": "\u0e04\u0e31\u0e19",
   "exTh": "\u0e23\u0e16\u0e04\u0e31\u0e19\u0e19\u0e35\u0e49\u0e40\u0e01\u0e48\u0e32",
   "exPhon": "r\u00f3t khan n\u00edi k\u00e0o",
   "exGloss": "Mobil ini tua.",
   "note": "Awalan untuk banyak kendaraan: \u0e23\u0e16\u0e44\u0e1f (kereta), \u0e23\u0e16\u0e40\u0e21\u0e25\u0e4c (bus kota), \u0e23\u0e16\u0e15\u0e39\u0e49 (minibus)."
  },
  {
   "id": "v127",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e23\u0e16\u0e44\u0e1f",
   "audio": "\u0e23\u0e16\u0e44\u0e1f",
   "phon": "r\u00f3t-fai",
   "rom": "rotfai",
   "freq": 2,
   "gloss": "kereta api",
   "alt": [
    "kereta"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e02\u0e1a\u0e27\u0e19 \u00b7 RTGS: rotfai",
   "cls": "\u0e02\u0e1a\u0e27\u0e19",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22\u0e23\u0e16\u0e44\u0e1f",
   "exPhon": "ph\u01d2m pai d\u00fbai r\u00f3t-fai",
   "exGloss": "Saya pergi dengan kereta.",
   "note": "Harfiahnya 'kendaraan api', sepadan dengan 'kereta api'."
  },
  {
   "id": "v128",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e40\u0e23\u0e37\u0e2d",
   "audio": "\u0e40\u0e23\u0e37\u0e2d",
   "phon": "ruea",
   "rom": "ruea",
   "freq": 2,
   "gloss": "perahu, kapal",
   "alt": [
    "kapal",
    "perahu"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e33 \u00b7 RTGS: ruea",
   "cls": "\u0e25\u0e33",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e40\u0e23\u0e37\u0e2d",
   "exPhon": "ph\u01d2m pai ruea",
   "exGloss": "Saya pergi dengan perahu.",
   "note": ""
  },
  {
   "id": "v129",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1a\u0e34\u0e19",
   "audio": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1a\u0e34\u0e19",
   "phon": "khr\u00fbeang-bin",
   "rom": "khrueangbin",
   "freq": 2,
   "gloss": "pesawat terbang",
   "alt": [
    "pesawat",
    "kapal terbang"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e33 \u00b7 RTGS: khrueangbin",
   "cls": "\u0e25\u0e33",
   "exTh": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1a\u0e34\u0e19\u0e44\u0e1b\u0e44\u0e17\u0e22",
   "exPhon": "khr\u00fbeang-bin pai thai",
   "exGloss": "pesawat ke Thailand",
   "note": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07 berarti 'mesin, alat' dan juga menjadi klasifikator untuk alat: \u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e2a\u0e2d\u0e07\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07."
  },
  {
   "id": "v130",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e41\u0e17\u0e47\u0e01\u0e0b\u0e35\u0e48",
   "audio": "\u0e41\u0e17\u0e47\u0e01\u0e0b\u0e35\u0e48",
   "phon": "th\u00e1ek-s\u00eei",
   "rom": "thaeksi",
   "freq": 2,
   "gloss": "taksi",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e31\u0e19 \u00b7 RTGS: thaeksi",
   "cls": "\u0e04\u0e31\u0e19",
   "exTh": "\u0e1c\u0e21\u0e19\u0e31\u0e48\u0e07\u0e41\u0e17\u0e47\u0e01\u0e0b\u0e35\u0e48",
   "exPhon": "ph\u01d2m n\u00e2ng th\u00e1ek-s\u00eei",
   "exGloss": "Saya naik taksi.",
   "note": "Serapan dari bahasa Inggris. Kata serapan baru sering memakai \u25cc\u0e47 dan tanda nada yang tidak lazim pada kata asli Thai."
  },
  {
   "id": "v131",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e40\u0e14\u0e34\u0e19",
   "audio": "\u0e40\u0e14\u0e34\u0e19",
   "phon": "dooen",
   "rom": "doen",
   "freq": 2,
   "gloss": "berjalan",
   "alt": [
    "jalan kaki"
   ],
   "detail": "verba \u00b7 RTGS: doen",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e14\u0e34\u0e19\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
   "exPhon": "ph\u01d2m dooen pai t\u00e0-l\u00e0at",
   "exGloss": "Saya berjalan ke pasar.",
   "note": ""
  },
  {
   "id": "v132",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e19\u0e31\u0e48\u0e07",
   "audio": "\u0e19\u0e31\u0e48\u0e07",
   "phon": "n\u00e2ng",
   "rom": "nang",
   "freq": 2,
   "gloss": "duduk; naik (kendaraan)",
   "alt": [
    "duduk",
    "naik"
   ],
   "detail": "verba \u00b7 RTGS: nang",
   "cls": "",
   "exTh": "\u0e19\u0e31\u0e48\u0e07\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21",
   "exPhon": "n\u00e2ng th\u00eei-n\u00eei d\u00e2i m\u01cei",
   "exGloss": "Boleh duduk di sini?",
   "note": "Untuk 'naik kendaraan' dipakai \u0e19\u0e31\u0e48\u0e07, bukan \u0e02\u0e36\u0e49\u0e19, bila yang dimaksud menumpang: \u0e19\u0e31\u0e48\u0e07\u0e23\u0e16\u0e44\u0e1f, \u0e19\u0e31\u0e48\u0e07\u0e41\u0e17\u0e47\u0e01\u0e0b\u0e35\u0e48."
  },
  {
   "id": "v133",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e02\u0e36\u0e49\u0e19",
   "audio": "\u0e02\u0e36\u0e49\u0e19",
   "phon": "kh\u00fben",
   "rom": "khuen",
   "freq": 2,
   "gloss": "naik, menaiki",
   "alt": [
    "meningkat"
   ],
   "detail": "verba \u00b7 RTGS: khuen",
   "cls": "",
   "exTh": "\u0e02\u0e36\u0e49\u0e19\u0e23\u0e16\u0e44\u0e1f\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",
   "exPhon": "kh\u00fben r\u00f3t-fai th\u00eei-n\u00eei",
   "exGloss": "Naik kereta di sini.",
   "note": ""
  },
  {
   "id": "v134",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e25\u0e07",
   "audio": "\u0e25\u0e07",
   "phon": "long",
   "rom": "long",
   "freq": 2,
   "gloss": "turun",
   "alt": [
    "menurun"
   ],
   "detail": "verba \u00b7 RTGS: long",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e25\u0e07\u0e17\u0e35\u0e48\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e19\u0e35\u0e49",
   "exPhon": "ph\u01d2m long th\u00eei s\u00e0-th\u01cea-nii n\u00edi",
   "exGloss": "Saya turun di stasiun ini.",
   "note": ""
  },
  {
   "id": "v135",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e01\u0e25\u0e31\u0e1a",
   "audio": "\u0e01\u0e25\u0e31\u0e1a",
   "phon": "kl\u00e0p",
   "rom": "klap",
   "freq": 2,
   "gloss": "kembali, pulang",
   "alt": [
    "pulang",
    "balik"
   ],
   "detail": "verba \u00b7 RTGS: klap",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e01\u0e25\u0e31\u0e1a\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "ph\u01d2m kl\u00e0p b\u00e2an",
   "exGloss": "Saya pulang ke rumah.",
   "note": ""
  },
  {
   "id": "v183",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e42\u0e15\u0e4a\u0e30",
   "audio": "\u0e42\u0e15\u0e4a\u0e30",
   "phon": "t\u00f3",
   "rom": "to",
   "freq": 2,
   "gloss": "meja",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: to",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e42\u0e15\u0e4a\u0e30\u0e19\u0e35\u0e49\u0e40\u0e25\u0e47\u0e01",
   "exPhon": "t\u00f3 n\u00edi l\u00e9k",
   "exGloss": "Meja ini kecil.",
   "note": "Serapan dari bahasa Tionghoa. Klasifikatornya \u0e15\u0e31\u0e27, sama seperti hewan dan pakaian."
  },
  {
   "id": "v184",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49",
   "audio": "\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49",
   "phon": "k\u00e2o-\u00eei",
   "rom": "kaoi",
   "freq": 2,
   "gloss": "kursi",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: kaoi",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e40\u0e01\u0e49\u0e32\u0e2d\u0e35\u0e49\u0e2a\u0e2d\u0e07\u0e15\u0e31\u0e27",
   "exPhon": "k\u00e2o-\u00eei s\u01ceawng tua",
   "exGloss": "dua kursi",
   "note": "Suku kata kedua memakai \u0e2d sebagai tumpuan vokal, sebab tidak ada konsonan awal yang berbunyi."
  },
  {
   "id": "v185",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32",
   "audio": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32",
   "phon": "kr\u00e0-p\u01ceo",
   "rom": "krapao",
   "freq": 2,
   "gloss": "tas",
   "alt": [
    "kantong",
    "dompet"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e43\u0e1a \u00b7 RTGS: krapao",
   "cls": "\u0e43\u0e1a",
   "exTh": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e43\u0e1a\u0e19\u0e35\u0e49\u0e2a\u0e27\u0e22",
   "exPhon": "kr\u00e0-p\u01ceo bai n\u00edi s\u01d4ai",
   "exGloss": "Tas ini cantik.",
   "note": "Contoh mai chattawa pada konsonan kelas tengah. Juga berarti 'dompet' (\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e40\u0e07\u0e34\u0e19) dan 'saku'."
  },
  {
   "id": "v186",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e40\u0e2a\u0e37\u0e49\u0e2d",
   "audio": "\u0e40\u0e2a\u0e37\u0e49\u0e2d",
   "phon": "s\u00fbea",
   "rom": "suea",
   "freq": 2,
   "gloss": "baju",
   "alt": [
    "kemeja",
    "pakaian"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: suea",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e15\u0e31\u0e27\u0e19\u0e35\u0e49\u0e41\u0e1e\u0e07",
   "exPhon": "s\u00fbea tua n\u00edi phaeng",
   "exGloss": "Baju ini mahal.",
   "note": "Hanya berbeda nada dari \u0e40\u0e2a\u0e37\u0e2d (s\u01d4ea, 'harimau') dan \u0e40\u0e2a\u0e37\u0e48\u0e2d (s\u00f9ea, 'tikar'). Lihat pasangan nada mp04 di Modul 2."
  },
  {
   "id": "v136",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e40\u0e07\u0e34\u0e19",
   "audio": "\u0e40\u0e07\u0e34\u0e19",
   "phon": "ngooen",
   "rom": "ngoen",
   "freq": 2,
   "gloss": "uang",
   "alt": [
    "duit",
    "perak (logam)"
   ],
   "detail": "nomina \u00b7 RTGS: ngoen",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e21\u0e35\u0e40\u0e07\u0e34\u0e19",
   "exPhon": "ph\u01d2m m\u00e2i mii ngooen",
   "exGloss": "Saya tidak punya uang.",
   "note": "Kata yang sama berarti 'perak' (logam), sama seperti 'uang perak'."
  },
  {
   "id": "v137",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e1a\u0e32\u0e17",
   "audio": "\u0e1a\u0e32\u0e17",
   "phon": "b\u00e0at",
   "rom": "bat",
   "freq": 2,
   "gloss": "baht (mata uang Thailand)",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: bat",
   "cls": "",
   "exTh": "\u0e2b\u0e49\u0e32\u0e2a\u0e34\u0e1a\u0e1a\u0e32\u0e17",
   "exPhon": "h\u00e2a-s\u00ecp b\u00e0at",
   "exGloss": "lima puluh baht",
   "note": ""
  },
  {
   "id": "v138",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48",
   "audio": "\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48",
   "phon": "th\u00e2o-r\u00e0i",
   "rom": "thaorai",
   "freq": 1,
   "gloss": "berapa",
   "alt": [
    "berapa banyak"
   ],
   "detail": "tanya \u00b7 RTGS: thaorai",
   "cls": "",
   "exTh": "\u0e23\u0e32\u0e04\u0e32\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48",
   "exPhon": "raa-khaa th\u00e2o-r\u00e0i",
   "exGloss": "Berapa harganya?",
   "note": "Untuk jumlah benda yang memakai klasifikator dipakai \u0e01\u0e35\u0e48: \u0e01\u0e35\u0e48\u0e04\u0e19 ('berapa orang'), \u0e01\u0e35\u0e48\u0e1a\u0e32\u0e17 ('berapa baht')."
  },
  {
   "id": "v139",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e23\u0e32\u0e04\u0e32",
   "audio": "\u0e23\u0e32\u0e04\u0e32",
   "phon": "raa-khaa",
   "rom": "rakha",
   "freq": 2,
   "gloss": "harga",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: rakha",
   "cls": "",
   "exTh": "\u0e23\u0e32\u0e04\u0e32\u0e16\u0e39\u0e01",
   "exPhon": "raa-khaa th\u00f9uk",
   "exGloss": "Harganya murah.",
   "note": ""
  },
  {
   "id": "v140",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e0b\u0e37\u0e49\u0e2d",
   "audio": "\u0e0b\u0e37\u0e49\u0e2d",
   "phon": "s\u00faue",
   "rom": "sue",
   "freq": 2,
   "gloss": "membeli",
   "alt": [
    "beli"
   ],
   "detail": "verba \u00b7 RTGS: sue",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e0b\u0e37\u0e49\u0e2d\u0e01\u0e25\u0e49\u0e27\u0e22",
   "exPhon": "ph\u01d2m s\u00faue kl\u00fbai",
   "exGloss": "Saya membeli pisang.",
   "note": ""
  },
  {
   "id": "v141",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e02\u0e32\u0e22",
   "audio": "\u0e02\u0e32\u0e22",
   "phon": "kh\u01ceai",
   "rom": "khai",
   "freq": 2,
   "gloss": "menjual",
   "alt": [
    "jual"
   ],
   "detail": "verba \u00b7 RTGS: khai",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e19\u0e35\u0e49\u0e02\u0e32\u0e22\u0e2d\u0e32\u0e2b\u0e32\u0e23",
   "exPhon": "r\u00e1an n\u00edi kh\u01ceai aa-h\u01cean",
   "exGloss": "Toko ini menjual makanan.",
   "note": ""
  },
  {
   "id": "v142",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e08\u0e48\u0e32\u0e22",
   "audio": "\u0e08\u0e48\u0e32\u0e22",
   "phon": "j\u00e0ai",
   "rom": "chai",
   "freq": 2,
   "gloss": "membayar",
   "alt": [
    "bayar"
   ],
   "detail": "verba \u00b7 RTGS: chai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "ph\u01d2m j\u00e0ai ngooen l\u00e1eo",
   "exGloss": "Saya sudah membayar.",
   "note": ""
  },
  {
   "id": "v143",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e25\u0e14",
   "audio": "\u0e25\u0e14",
   "phon": "l\u00f3t",
   "rom": "lot",
   "freq": 2,
   "gloss": "mengurangi, memberi potongan harga",
   "alt": [
    "kurangi",
    "diskon"
   ],
   "detail": "verba \u00b7 RTGS: lot",
   "cls": "",
   "exTh": "\u0e25\u0e14\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21",
   "exPhon": "l\u00f3t d\u00e2i m\u01cei",
   "exGloss": "Bisa kurang (harganya)?",
   "note": "Ungkapan menawar yang lazim di pasar. Bentuk yang lebih lengkap: \u0e25\u0e14\u0e23\u0e32\u0e04\u0e32\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21."
  },
  {
   "id": "v144",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e41\u0e01\u0e49\u0e27",
   "audio": "\u0e41\u0e01\u0e49\u0e27",
   "phon": "k\u00e2eo",
   "rom": "kaeo",
   "freq": 2,
   "gloss": "gelas; kaca",
   "alt": [
    "gelas",
    "kaca"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e43\u0e1a \u00b7 RTGS: kaeo",
   "cls": "\u0e43\u0e1a",
   "exTh": "\u0e19\u0e49\u0e33\u0e2a\u0e2d\u0e07\u0e41\u0e01\u0e49\u0e27",
   "exPhon": "n\u00e1am s\u01ceawng k\u00e2eo",
   "exGloss": "dua gelas air",
   "note": "Juga menjadi klasifikator untuk minuman yang disajikan dalam gelas."
  },
  {
   "id": "v145",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e43\u0e1a",
   "audio": "\u0e43\u0e1a",
   "phon": "bai",
   "rom": "bai",
   "freq": 2,
   "gloss": "lembar (klasifikator); daun",
   "alt": [
    "daun",
    "lembar"
   ],
   "detail": "klasifikator \u00b7 RTGS: bai",
   "cls": "",
   "exTh": "\u0e2a\u0e2d\u0e07\u0e43\u0e1a",
   "exPhon": "s\u01ceawng bai",
   "exGloss": "dua lembar / dua buah",
   "note": "Klasifikator untuk benda tipis dan berongga: daun, kertas, tiket, gelas, tas, topi."
  },
  {
   "id": "v146",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e15\u0e31\u0e27",
   "audio": "\u0e15\u0e31\u0e27",
   "phon": "tua",
   "rom": "tua",
   "freq": 2,
   "gloss": "tubuh; klasifikator hewan dan pakaian",
   "alt": [
    "badan",
    "ekor"
   ],
   "detail": "klasifikator \u00b7 RTGS: tua",
   "cls": "",
   "exTh": "\u0e2b\u0e21\u0e32\u0e2a\u0e32\u0e21\u0e15\u0e31\u0e27",
   "exPhon": "m\u01cea s\u01ceam tua",
   "exGloss": "tiga ekor anjing",
   "note": "Dipakai untuk hewan, pakaian, meja dan kursi, serta huruf (\u0e15\u0e31\u0e27\u0e2d\u0e31\u0e01\u0e29\u0e23)."
  },
  {
   "id": "v147",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e2d\u0e31\u0e19",
   "audio": "\u0e2d\u0e31\u0e19",
   "phon": "an",
   "rom": "an",
   "freq": 2,
   "gloss": "klasifikator umum untuk benda kecil",
   "alt": [
    "buah (benda)"
   ],
   "detail": "klasifikator \u00b7 RTGS: an",
   "cls": "",
   "exTh": "\u0e40\u0e2d\u0e32\u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49",
   "exPhon": "ao an n\u00edi",
   "exGloss": "Saya mau yang ini.",
   "note": "Bila Anda tidak tahu klasifikator yang tepat, \u0e2d\u0e31\u0e19 adalah pilihan paling aman untuk benda kecil. \u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49 ('yang ini') sangat berguna saat berbelanja."
  },
  {
   "id": "v148",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e01\u0e35\u0e48",
   "audio": "\u0e01\u0e35\u0e48",
   "phon": "k\u00eci",
   "rom": "ki",
   "freq": 1,
   "gloss": "berapa (dengan klasifikator)",
   "alt": [],
   "detail": "tanya \u00b7 RTGS: ki",
   "cls": "",
   "exTh": "\u0e01\u0e35\u0e48\u0e04\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "k\u00eci khon khr\u00e1p",
   "exGloss": "Berapa orang?",
   "note": "Selalu disusul klasifikator: \u0e01\u0e35\u0e48\u0e04\u0e19, \u0e01\u0e35\u0e48\u0e1a\u0e32\u0e17, \u0e01\u0e35\u0e48\u0e42\u0e21\u0e07 ('jam berapa')."
  },
  {
   "id": "v149",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e41\u0e25\u0e49\u0e27",
   "audio": "\u0e41\u0e25\u0e49\u0e27",
   "phon": "l\u00e1eo",
   "rom": "laeo",
   "freq": 1,
   "gloss": "sudah",
   "alt": [
    "telah"
   ],
   "detail": "partikel \u00b7 RTGS: laeo",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "ph\u01d2m kin l\u00e1eo",
   "exGloss": "Saya sudah makan.",
   "note": "Diletakkan di AKHIR kalimat. Kata kerja bahasa Thailand tidak berubah bentuk; penanda seperti \u0e41\u0e25\u0e49\u0e27 dan \u0e08\u0e30 yang menunjukkan waktu."
  },
  {
   "id": "v150",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e22\u0e31\u0e07",
   "audio": "\u0e22\u0e31\u0e07",
   "phon": "yang",
   "rom": "yang",
   "freq": 1,
   "gloss": "masih; belum",
   "alt": [
    "masih"
   ],
   "detail": "partikel \u00b7 RTGS: yang",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19",
   "exPhon": "ph\u01d2m yang m\u00e2i kin",
   "exGloss": "Saya belum makan.",
   "note": "'Belum' dinyatakan dengan \u0e22\u0e31\u0e07...\u0e44\u0e21\u0e48 atau \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48 + kata kerja."
  },
  {
   "id": "v151",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e08\u0e30",
   "audio": "\u0e08\u0e30",
   "phon": "j\u00e0",
   "rom": "cha",
   "freq": 1,
   "gloss": "akan",
   "alt": [],
   "detail": "partikel \u00b7 RTGS: cha",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e08\u0e30\u0e44\u0e1b\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49",
   "exPhon": "ph\u01d2m j\u00e0 pai phr\u00fbng-n\u00edi",
   "exGloss": "Saya akan pergi besok.",
   "note": "Diletakkan SEBELUM kata kerja. Sering dihilangkan bila sudah ada keterangan waktu."
  },
  {
   "id": "v152",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e15\u0e49\u0e2d\u0e07",
   "audio": "\u0e15\u0e49\u0e2d\u0e07",
   "phon": "t\u00e2awng",
   "rom": "tong",
   "freq": 1,
   "gloss": "harus",
   "alt": [
    "mesti",
    "wajib"
   ],
   "detail": "verba \u00b7 RTGS: tong",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e25\u0e31\u0e1a\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "ph\u01d2m t\u00e2awng kl\u00e0p b\u00e2an",
   "exGloss": "Saya harus pulang.",
   "note": ""
  },
  {
   "id": "v153",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e2d\u0e22\u0e32\u0e01",
   "audio": "\u0e2d\u0e22\u0e32\u0e01",
   "phon": "y\u00e0ak",
   "rom": "yak",
   "freq": 1,
   "gloss": "ingin",
   "alt": [
    "mau",
    "hendak"
   ],
   "detail": "verba \u00b7 RTGS: yak",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2d\u0e22\u0e32\u0e01\u0e44\u0e1b\u0e44\u0e17\u0e22",
   "exPhon": "ph\u01d2m y\u00e0ak pai thai",
   "exGloss": "Saya ingin pergi ke Thailand.",
   "note": "Salah satu dari empat kata ber-\u0e2d\u0e22: \u0e2d\u0e22\u0e48\u0e32, \u0e2d\u0e22\u0e39\u0e48, \u0e2d\u0e22\u0e48\u0e32\u0e07, \u0e2d\u0e22\u0e32\u0e01. \u0e2d\u0e22\u0e32\u0e01\u0e44\u0e14\u0e49 dipakai untuk 'ingin punya'."
  },
  {
   "id": "v154",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e14\u0e49\u0e27\u0e22",
   "audio": "\u0e14\u0e49\u0e27\u0e22",
   "phon": "d\u00fbai",
   "rom": "duai",
   "freq": 1,
   "gloss": "juga; dengan",
   "alt": [
    "juga",
    "dengan",
    "pula"
   ],
   "detail": "keterangan \u00b7 RTGS: duai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22",
   "exPhon": "ph\u01d2m pai d\u00fbai",
   "exGloss": "Saya ikut juga.",
   "note": "\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19 (d\u00fbai-kan) berarti 'bersama-sama'."
  },
  {
   "id": "v155",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e01\u0e31\u0e1a",
   "audio": "\u0e01\u0e31\u0e1a",
   "phon": "k\u00e0p",
   "rom": "kap",
   "freq": 1,
   "gloss": "dengan, dan",
   "alt": [
    "bersama",
    "dan"
   ],
   "detail": "depan \u00b7 RTGS: kap",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e01\u0e31\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
   "exPhon": "ph\u01d2m pai k\u00e0p ph\u00fbean",
   "exGloss": "Saya pergi dengan teman.",
   "note": "Untuk menghubungkan kata benda. Untuk menghubungkan kalimat dipakai \u0e41\u0e25\u0e30 (l\u00e1e, 'dan')."
  },
  {
   "id": "v156",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e41\u0e15\u0e48",
   "audio": "\u0e41\u0e15\u0e48",
   "phon": "t\u00e0e",
   "rom": "tae",
   "freq": 1,
   "gloss": "tetapi",
   "alt": [
    "tapi",
    "namun"
   ],
   "detail": "sambung \u00b7 RTGS: tae",
   "cls": "",
   "exTh": "\u0e41\u0e1e\u0e07\u0e41\u0e15\u0e48\u0e2d\u0e23\u0e48\u0e2d\u0e22",
   "exPhon": "phaeng t\u00e0e \u00e0-r\u00e0awi",
   "exGloss": "Mahal tetapi enak.",
   "note": ""
  },
  {
   "id": "v157",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e17\u0e35\u0e48",
   "audio": "\u0e17\u0e35\u0e48",
   "phon": "th\u00eei",
   "rom": "thi",
   "freq": 1,
   "gloss": "di; yang; tempat",
   "alt": [
    "di",
    "yang"
   ],
   "detail": "depan \u00b7 RTGS: thi",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "ph\u01d2m y\u00f9u th\u00eei b\u00e2an",
   "exGloss": "Saya ada di rumah.",
   "note": "Tiga tugas sekaligus: kata depan 'di', kata penghubung 'yang', dan kata benda 'tempat'. Juga dipakai pada \u0e17\u0e35\u0e48\u0e19\u0e35\u0e48, \u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19, \u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e19."
  },
  {
   "id": "v158",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e2b\u0e31\u0e27",
   "audio": "\u0e2b\u0e31\u0e27",
   "phon": "h\u01d4a",
   "rom": "hua",
   "freq": 3,
   "gloss": "kepala",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e2b\u0e31\u0e27 \u00b7 RTGS: hua",
   "cls": "\u0e2b\u0e31\u0e27",
   "exTh": "\u0e1c\u0e21\u0e1b\u0e27\u0e14\u0e2b\u0e31\u0e27",
   "exPhon": "ph\u01d2m p\u00f9at h\u01d4a",
   "exGloss": "Kepala saya sakit.",
   "note": "\u0e1b\u0e27\u0e14 (p\u00f9at) dipakai untuk sakit yang berdenyut di dalam badan; \u0e40\u0e08\u0e47\u0e1a untuk nyeri karena luka."
  },
  {
   "id": "v159",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e15\u0e32",
   "audio": "\u0e15\u0e32",
   "phon": "taa",
   "rom": "ta",
   "freq": 3,
   "gloss": "mata; kakek (dari pihak ibu)",
   "alt": [
    "mata"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e02\u0e49\u0e32\u0e07 \u00b7 RTGS: ta",
   "cls": "\u0e02\u0e49\u0e32\u0e07",
   "exTh": "\u0e15\u0e32\u0e2a\u0e27\u0e22",
   "exPhon": "taa s\u01d4ai",
   "exGloss": "Matanya indah.",
   "note": ""
  },
  {
   "id": "v160",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e1b\u0e32\u0e01",
   "audio": "\u0e1b\u0e32\u0e01",
   "phon": "p\u00e0ak",
   "rom": "pak",
   "freq": 3,
   "gloss": "mulut",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: pak",
   "cls": "",
   "exTh": "\u0e40\u0e08\u0e47\u0e1a\u0e1b\u0e32\u0e01",
   "exPhon": "j\u00e8p p\u00e0ak",
   "exGloss": "Mulutnya sakit.",
   "note": ""
  },
  {
   "id": "v161",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e21\u0e37\u0e2d",
   "audio": "\u0e21\u0e37\u0e2d",
   "phon": "muue",
   "rom": "mue",
   "freq": 3,
   "gloss": "tangan",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e02\u0e49\u0e32\u0e07 \u00b7 RTGS: mue",
   "cls": "\u0e02\u0e49\u0e32\u0e07",
   "exTh": "\u0e25\u0e49\u0e32\u0e07\u0e21\u0e37\u0e2d",
   "exPhon": "l\u00e1ang muue",
   "exGloss": "Mencuci tangan.",
   "note": "\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d (thoo-r\u00e1-s\u00e0p muue-th\u01d4ue) berarti 'telepon genggam', harfiahnya 'telepon yang dipegang tangan'."
  },
  {
   "id": "v162",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e40\u0e17\u0e49\u0e32",
   "audio": "\u0e40\u0e17\u0e49\u0e32",
   "phon": "th\u00e1o",
   "rom": "thao",
   "freq": 3,
   "gloss": "kaki (bagian bawah)",
   "alt": [
    "telapak kaki"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e02\u0e49\u0e32\u0e07 \u00b7 RTGS: thao",
   "cls": "\u0e02\u0e49\u0e32\u0e07",
   "exTh": "\u0e40\u0e08\u0e47\u0e1a\u0e40\u0e17\u0e49\u0e32",
   "exPhon": "j\u00e8p th\u00e1o",
   "exGloss": "Kaki saya sakit.",
   "note": "\u0e02\u0e32 (kh\u01cea) adalah kaki dari pinggul sampai pergelangan; \u0e40\u0e17\u0e49\u0e32 bagian telapaknya. Dalam budaya Thai, kaki dianggap bagian terendah: jangan menunjuk apa pun dengan kaki."
  },
  {
   "id": "v163",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e17\u0e49\u0e2d\u0e07",
   "audio": "\u0e17\u0e49\u0e2d\u0e07",
   "phon": "th\u00e1awng",
   "rom": "thong",
   "freq": 3,
   "gloss": "perut",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: thong",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e1b\u0e27\u0e14\u0e17\u0e49\u0e2d\u0e07",
   "exPhon": "ph\u01d2m p\u00f9at th\u00e1awng",
   "exGloss": "Perut saya sakit.",
   "note": "Ungkapan yang sangat berguna saat berobat: \u0e1b\u0e27\u0e14\u0e17\u0e49\u0e2d\u0e07 ('sakit perut')."
  },
  {
   "id": "v164",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e40\u0e08\u0e47\u0e1a",
   "audio": "\u0e40\u0e08\u0e47\u0e1a",
   "phon": "j\u00e8p",
   "rom": "chep",
   "freq": 3,
   "gloss": "sakit (nyeri karena luka)",
   "alt": [
    "nyeri",
    "perih"
   ],
   "detail": "sifat \u00b7 RTGS: chep",
   "cls": "",
   "exTh": "\u0e40\u0e08\u0e47\u0e1a\u0e21\u0e32\u0e01\u0e44\u0e2b\u0e21",
   "exPhon": "j\u00e8p m\u00e2ak m\u01cei",
   "exGloss": "Sakitnya parah?",
   "note": ""
  },
  {
   "id": "v165",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e1b\u0e48\u0e27\u0e22",
   "audio": "\u0e1b\u0e48\u0e27\u0e22",
   "phon": "p\u00f9ai",
   "rom": "puai",
   "freq": 3,
   "gloss": "sakit (berpenyakit)",
   "alt": [
    "jatuh sakit"
   ],
   "detail": "sifat \u00b7 RTGS: puai",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e1b\u0e48\u0e27\u0e22\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",
   "exPhon": "kh\u01ceo p\u00f9ai wan-n\u00edi",
   "exGloss": "Dia sakit hari ini.",
   "note": "Tiga kata 'sakit' yang berbeda: \u0e1b\u0e48\u0e27\u0e22 (berpenyakit), \u0e40\u0e08\u0e47\u0e1a (nyeri karena luka), \u0e1b\u0e27\u0e14 (sakit berdenyut)."
  },
  {
   "id": "v166",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e22\u0e32",
   "audio": "\u0e22\u0e32",
   "phon": "yaa",
   "rom": "ya",
   "freq": 3,
   "gloss": "obat",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e21\u0e47\u0e14 \u00b7 RTGS: ya",
   "cls": "\u0e40\u0e21\u0e47\u0e14",
   "exTh": "\u0e1c\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e34\u0e19\u0e22\u0e32",
   "exPhon": "ph\u01d2m t\u00e2awng kin yaa",
   "exGloss": "Saya harus minum obat.",
   "note": "Untuk obat dipakai \u0e01\u0e34\u0e19 ('makan'), bukan \u0e14\u0e37\u0e48\u0e21. \u0e23\u0e49\u0e32\u0e19\u0e02\u0e32\u0e22\u0e22\u0e32 berarti 'apotek'."
  },
  {
   "id": "v167",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e2d\u0e32\u0e01\u0e32\u0e28",
   "audio": "\u0e2d\u0e32\u0e01\u0e32\u0e28",
   "phon": "aa-k\u00e0at",
   "rom": "akat",
   "freq": 3,
   "gloss": "cuaca, udara",
   "alt": [
    "udara",
    "hawa"
   ],
   "detail": "nomina \u00b7 RTGS: akat",
   "cls": "",
   "exTh": "\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e23\u0e49\u0e2d\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "aa-k\u00e0at r\u00e1awn m\u00e2ak",
   "exGloss": "Cuacanya sangat panas.",
   "note": "Serapan Sanskerta, seakar dengan kata bahasa Indonesia 'angkasa'."
  },
  {
   "id": "v168",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e1d\u0e19",
   "audio": "\u0e1d\u0e19",
   "phon": "f\u01d2n",
   "rom": "fon",
   "freq": 3,
   "gloss": "hujan",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: fon",
   "cls": "",
   "exTh": "\u0e1d\u0e19\u0e15\u0e01",
   "exPhon": "f\u01d2n t\u00f2k",
   "exGloss": "Hujan turun.",
   "note": "\u0e1d\u0e19\u0e15\u0e01 (harfiahnya 'hujan jatuh') adalah cara biasa mengatakan 'hujan'. \u0e15\u0e01 berarti 'jatuh'."
  },
  {
   "id": "v169",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e41\u0e14\u0e14",
   "audio": "\u0e41\u0e14\u0e14",
   "phon": "d\u00e0et",
   "rom": "daet",
   "freq": 3,
   "gloss": "sinar matahari",
   "alt": [
    "panas matahari"
   ],
   "detail": "nomina \u00b7 RTGS: daet",
   "cls": "",
   "exTh": "\u0e41\u0e14\u0e14\u0e23\u0e49\u0e2d\u0e19",
   "exPhon": "d\u00e0et r\u00e1awn",
   "exGloss": "Mataharinya panas.",
   "note": "\u0e41\u0e14\u0e14 adalah sinarnya; benda langitnya \u0e1e\u0e23\u0e30\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c (phr\u00e1-aa-th\u00edt)."
  },
  {
   "id": "v170",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e25\u0e21",
   "audio": "\u0e25\u0e21",
   "phon": "lom",
   "rom": "lom",
   "freq": 3,
   "gloss": "angin",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: lom",
   "cls": "",
   "exTh": "\u0e25\u0e21\u0e40\u0e22\u0e47\u0e19",
   "exPhon": "lom yen",
   "exGloss": "Anginnya sejuk.",
   "note": ""
  },
  {
   "id": "v171",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e14\u0e35\u0e43\u0e08",
   "audio": "\u0e14\u0e35\u0e43\u0e08",
   "phon": "dii-jai",
   "rom": "dichai",
   "freq": 3,
   "gloss": "senang, gembira",
   "alt": [
    "gembira",
    "bahagia"
   ],
   "detail": "sifat \u00b7 RTGS: dichai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e14\u0e35\u0e43\u0e08\u0e21\u0e32\u0e01",
   "exPhon": "ph\u01d2m dii-jai m\u00e2ak",
   "exGloss": "Saya sangat senang.",
   "note": "\u0e43\u0e08 ('hati') membentuk puluhan kata perasaan: \u0e14\u0e35\u0e43\u0e08 (senang), \u0e40\u0e2a\u0e35\u0e22\u0e43\u0e08 (sedih), \u0e43\u0e08\u0e14\u0e35 (baik hati), \u0e43\u0e08\u0e23\u0e49\u0e2d\u0e19 (tidak sabar)."
  },
  {
   "id": "v172",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e40\u0e2a\u0e35\u0e22\u0e43\u0e08",
   "audio": "\u0e40\u0e2a\u0e35\u0e22\u0e43\u0e08",
   "phon": "s\u01d0a-jai",
   "rom": "siachai",
   "freq": 3,
   "gloss": "sedih",
   "alt": [
    "berduka",
    "menyesal"
   ],
   "detail": "sifat \u00b7 RTGS: siachai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e2a\u0e35\u0e22\u0e43\u0e08\u0e14\u0e49\u0e27\u0e22",
   "exPhon": "ph\u01d2m s\u01d0a-jai d\u00fbai",
   "exGloss": "Saya ikut berduka.",
   "note": "\u0e40\u0e2a\u0e35\u0e22 sendiri berarti 'rusak, hilang', jadi \u0e40\u0e2a\u0e35\u0e22\u0e43\u0e08 harfiahnya 'hati yang rusak'."
  },
  {
   "id": "v173",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22",
   "audio": "\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22",
   "phon": "n\u00f9eai",
   "rom": "nueai",
   "freq": 3,
   "gloss": "lelah",
   "alt": [
    "capek",
    "letih"
   ],
   "detail": "sifat \u00b7 RTGS: nueai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "ph\u01d2m n\u00f9eai m\u00e2ak",
   "exGloss": "Saya sangat lelah.",
   "note": ""
  },
  {
   "id": "v174",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e2b\u0e34\u0e27",
   "audio": "\u0e2b\u0e34\u0e27",
   "phon": "h\u01d0u",
   "rom": "hiu",
   "freq": 3,
   "gloss": "lapar",
   "alt": [
    "haus (dengan \u0e19\u0e49\u0e33)"
   ],
   "detail": "sifat \u00b7 RTGS: hiu",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2b\u0e34\u0e27\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "ph\u01d2m h\u01d0u l\u00e1eo",
   "exGloss": "Saya sudah lapar.",
   "note": "\u0e2b\u0e34\u0e27\u0e19\u0e49\u0e33 (h\u01d0u n\u00e1am) berarti 'haus', harfiahnya 'lapar air'."
  },
  {
   "id": "v175",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e07\u0e48\u0e27\u0e07",
   "audio": "\u0e07\u0e48\u0e27\u0e07",
   "phon": "ng\u00fbang",
   "rom": "nguang",
   "freq": 3,
   "gloss": "mengantuk",
   "alt": [
    "ngantuk"
   ],
   "detail": "sifat \u00b7 RTGS: nguang",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e07\u0e48\u0e27\u0e07\u0e21\u0e32\u0e01",
   "exPhon": "ph\u01d2m ng\u00fbang m\u00e2ak",
   "exGloss": "Saya sangat mengantuk.",
   "note": ""
  },
  {
   "id": "v176",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e2a\u0e19\u0e38\u0e01",
   "audio": "\u0e2a\u0e19\u0e38\u0e01",
   "phon": "s\u00e0-n\u00f9k",
   "rom": "sanuk",
   "freq": 3,
   "gloss": "menyenangkan, seru",
   "alt": [
    "asyik",
    "seru"
   ],
   "detail": "sifat \u00b7 RTGS: sanuk",
   "cls": "",
   "exTh": "\u0e2a\u0e19\u0e38\u0e01\u0e21\u0e32\u0e01",
   "exPhon": "s\u00e0-n\u00f9k m\u00e2ak",
   "exGloss": "Seru sekali.",
   "note": "Kata yang sering disebut sebagai cermin budaya Thai: pekerjaan dan kegiatan dinilai juga dari apakah \u0e2a\u0e19\u0e38\u0e01."
  },
  {
   "id": "v177",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e2a\u0e1a\u0e32\u0e22",
   "audio": "\u0e2a\u0e1a\u0e32\u0e22",
   "phon": "s\u00e0-baai",
   "rom": "sabai",
   "freq": 3,
   "gloss": "nyaman, sehat, santai",
   "alt": [
    "enak badan",
    "santai"
   ],
   "detail": "sifat \u00b7 RTGS: sabai",
   "cls": "",
   "exTh": "\u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "s\u00e0-baai-dii m\u01cei khr\u00e1p",
   "exGloss": "Apa kabar?",
   "note": "\u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35\u0e44\u0e2b\u0e21 adalah 'apa kabar' yang paling lazim. Jawabannya \u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35 ('baik')."
  },
  {
   "id": "v178",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e0a\u0e48\u0e27\u0e22",
   "audio": "\u0e0a\u0e48\u0e27\u0e22",
   "phon": "ch\u00fbai",
   "rom": "chuai",
   "freq": 3,
   "gloss": "membantu; tolong (minta)",
   "alt": [
    "tolong",
    "bantu"
   ],
   "detail": "verba \u00b7 RTGS: chuai",
   "cls": "",
   "exTh": "\u0e0a\u0e48\u0e27\u0e22\u0e1c\u0e21\u0e14\u0e49\u0e27\u0e22",
   "exPhon": "ch\u00fbai ph\u01d2m d\u00fbai",
   "exGloss": "Tolong saya.",
   "note": "\u0e0a\u0e48\u0e27\u0e22 + kata kerja berarti 'tolong lakukan...': \u0e0a\u0e48\u0e27\u0e22\u0e1e\u0e39\u0e14\u0e0a\u0e49\u0e32\u0e46 ('tolong bicara lebih lambat')."
  },
  {
   "id": "v179",
   "kind": "flip",
   "cat": "bangsa",
   "catLabel": "Bangsa & bahasa",
   "stage": 6,
   "th": "\u0e20\u0e32\u0e29\u0e32",
   "audio": "\u0e20\u0e32\u0e29\u0e32",
   "phon": "phaa-s\u01cea",
   "rom": "phasa",
   "freq": 3,
   "gloss": "bahasa",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: phasa",
   "cls": "",
   "exTh": "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e22\u0e32\u0e01",
   "exPhon": "phaa-s\u01cea thai y\u00e2ak",
   "exGloss": "Bahasa Thailand sulit.",
   "note": "Serapan Sanskerta yang seakar dengan kata bahasa Indonesia 'bahasa'. Banyak kata serapan Sanskerta mirip di kedua bahasa: \u0e20\u0e32\u0e29\u0e32/bahasa, \u0e2d\u0e32\u0e01\u0e32\u0e28/angkasa, \u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28/pradesa."
  },
  {
   "id": "v180",
   "kind": "flip",
   "cat": "bangsa",
   "catLabel": "Bangsa & bahasa",
   "stage": 6,
   "th": "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28",
   "audio": "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28",
   "phon": "pr\u00e0-th\u00eaet",
   "rom": "prathet",
   "freq": 3,
   "gloss": "negara",
   "alt": [
    "negeri"
   ],
   "detail": "nomina \u00b7 RTGS: prathet",
   "cls": "",
   "exTh": "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22\u0e2a\u0e27\u0e22",
   "exPhon": "pr\u00e0-th\u00eaet thai s\u01d4ai",
   "exGloss": "Negeri Thailand indah.",
   "note": "\u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22 adalah nama resmi Thailand. Seakar dengan 'pradesa' dalam Sanskerta."
  },
  {
   "id": "v181",
   "kind": "flip",
   "cat": "bangsa",
   "catLabel": "Bangsa & bahasa",
   "stage": 6,
   "th": "\u0e44\u0e17\u0e22",
   "audio": "\u0e44\u0e17\u0e22",
   "phon": "thai",
   "rom": "thai",
   "freq": 3,
   "gloss": "Thai, Thailand",
   "alt": [
    "Thailand"
   ],
   "detail": "nomina \u00b7 RTGS: thai",
   "cls": "",
   "exTh": "\u0e04\u0e19\u0e44\u0e17\u0e22\u0e1e\u0e39\u0e14\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
   "exPhon": "khon thai ph\u00fbut phaa-s\u01cea thai",
   "exGloss": "Orang Thai berbahasa Thai.",
   "note": "Dipakai untuk bangsa, bahasa, dan negaranya: \u0e04\u0e19\u0e44\u0e17\u0e22, \u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22, \u0e1b\u0e23\u0e30\u0e40\u0e17\u0e28\u0e44\u0e17\u0e22."
  },
  {
   "id": "v182",
   "kind": "flip",
   "cat": "bangsa",
   "catLabel": "Bangsa & bahasa",
   "stage": 6,
   "th": "\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22",
   "audio": "\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22",
   "phon": "in-doo-nii-sia",
   "rom": "indonisia",
   "freq": 3,
   "gloss": "Indonesia",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: indonisia",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e19\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22",
   "exPhon": "ph\u01d2m pen khon in-doo-nii-sia",
   "exGloss": "Saya orang Indonesia.",
   "note": "Nama negara diserap menurut bunyinya. Semua suku katanya bernada sedang, sehingga mudah diucapkan."
  },
  {
   "id": "v187",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e43\u0e2b\u0e49",
   "audio": "\u0e43\u0e2b\u0e49",
   "phon": "h\u00e2i",
   "rom": "hai",
   "freq": 1,
   "gloss": "memberi; supaya",
   "alt": [
    "kasih",
    "beri"
   ],
   "detail": "verba \u00b7 RTGS: hai",
   "cls": "",
   "exTh": "\u0e43\u0e2b\u0e49\u0e1c\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "h\u00e2i ph\u01d2m khr\u00e1p",
   "exGloss": "Berikan kepada saya.",
   "note": "Juga dipakai untuk 'untuk saya': \u0e0a\u0e48\u0e27\u0e22\u0e40\u0e02\u0e35\u0e22\u0e19\u0e43\u0e2b\u0e49\u0e14\u0e49\u0e27\u0e22 ('tolong tuliskan untuk saya')."
  },
  {
   "id": "v188",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e1a\u0e2d\u0e01",
   "audio": "\u0e1a\u0e2d\u0e01",
   "phon": "b\u00e0awk",
   "rom": "bok",
   "freq": 2,
   "gloss": "memberitahu",
   "alt": [
    "bilang"
   ],
   "detail": "verba \u00b7 RTGS: bok",
   "cls": "",
   "exTh": "\u0e1a\u0e2d\u0e01\u0e1c\u0e21\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "b\u00e0awk ph\u01d2m n\u00e0awi",
   "exGloss": "Beri tahu saya sedikit.",
   "note": ""
  },
  {
   "id": "v189",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e16\u0e32\u0e21",
   "audio": "\u0e16\u0e32\u0e21",
   "phon": "th\u01ceam",
   "rom": "tham",
   "freq": 2,
   "gloss": "bertanya",
   "alt": [
    "tanya"
   ],
   "detail": "verba \u00b7 RTGS: tham",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e02\u0e2d\u0e16\u0e32\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "ph\u01d2m kh\u01ceaw th\u01ceam khr\u00e1p",
   "exGloss": "Saya mau bertanya.",
   "note": ""
  },
  {
   "id": "v190",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e15\u0e2d\u0e1a",
   "audio": "\u0e15\u0e2d\u0e1a",
   "phon": "t\u00e0awp",
   "rom": "top",
   "freq": 2,
   "gloss": "menjawab",
   "alt": [
    "jawab"
   ],
   "detail": "verba \u00b7 RTGS: top",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e44\u0e21\u0e48\u0e15\u0e2d\u0e1a",
   "exPhon": "kh\u01ceo m\u00e2i t\u00e0awp",
   "exGloss": "Dia tidak menjawab.",
   "note": ""
  },
  {
   "id": "v191",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e1f\u0e31\u0e07",
   "audio": "\u0e1f\u0e31\u0e07",
   "phon": "fang",
   "rom": "fang",
   "freq": 1,
   "gloss": "mendengarkan",
   "alt": [
    "dengar"
   ],
   "detail": "verba \u00b7 RTGS: fang",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e0a\u0e2d\u0e1a\u0e1f\u0e31\u0e07\u0e40\u0e1e\u0e25\u0e07",
   "exPhon": "ph\u01d2m ch\u00e2awp fang phleeng",
   "exGloss": "Saya suka mendengarkan lagu.",
   "note": ""
  },
  {
   "id": "v192",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 2,
   "th": "\u0e14\u0e39",
   "audio": "\u0e14\u0e39",
   "phon": "duu",
   "rom": "du",
   "freq": 1,
   "gloss": "melihat, menonton",
   "alt": [
    "nonton",
    "lihat"
   ],
   "detail": "verba \u00b7 RTGS: du",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e14\u0e39\u0e2b\u0e19\u0e31\u0e07",
   "exPhon": "ph\u01d2m duu n\u01ceng",
   "exGloss": "Saya menonton film.",
   "note": ""
  },
  {
   "id": "v193",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e40\u0e2b\u0e47\u0e19",
   "audio": "\u0e40\u0e2b\u0e47\u0e19",
   "phon": "h\u011bn",
   "rom": "hen",
   "freq": 1,
   "gloss": "melihat (tertangkap mata)",
   "alt": [
    "terlihat"
   ],
   "detail": "verba \u00b7 RTGS: hen",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e40\u0e2b\u0e47\u0e19",
   "exPhon": "ph\u01d2m m\u00e2i h\u011bn",
   "exGloss": "Saya tidak melihatnya.",
   "note": "\u0e14\u0e39 adalah menonton dengan sengaja; \u0e40\u0e2b\u0e47\u0e19 adalah melihat karena tertangkap mata."
  },
  {
   "id": "v194",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e23\u0e2d",
   "audio": "\u0e23\u0e2d",
   "phon": "raaw",
   "rom": "ro",
   "freq": 2,
   "gloss": "menunggu",
   "alt": [
    "tunggu"
   ],
   "detail": "verba \u00b7 RTGS: ro",
   "cls": "",
   "exTh": "\u0e23\u0e2d\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "raaw th\u00eei-n\u00eei khr\u00e1p",
   "exGloss": "Tunggu di sini.",
   "note": ""
  },
  {
   "id": "v195",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e40\u0e23\u0e34\u0e48\u0e21",
   "audio": "\u0e40\u0e23\u0e34\u0e48\u0e21",
   "phon": "r\u00f4oem",
   "rom": "roem",
   "freq": 2,
   "gloss": "mulai",
   "alt": [
    "memulai"
   ],
   "detail": "verba \u00b7 RTGS: roem",
   "cls": "",
   "exTh": "\u0e40\u0e23\u0e34\u0e48\u0e21\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32",
   "exPhon": "r\u00f4oem taawn-ch\u00e1o",
   "exGloss": "Mulai pada pagi hari.",
   "note": ""
  },
  {
   "id": "v196",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e08\u0e1a",
   "audio": "\u0e08\u0e1a",
   "phon": "j\u00f2p",
   "rom": "chop",
   "freq": 2,
   "gloss": "selesai, berakhir",
   "alt": [
    "tamat"
   ],
   "detail": "verba \u00b7 RTGS: chop",
   "cls": "",
   "exTh": "\u0e07\u0e32\u0e19\u0e08\u0e1a\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "ngaan j\u00f2p l\u00e1eo",
   "exGloss": "Pekerjaannya sudah selesai.",
   "note": ""
  },
  {
   "id": "v197",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e1b\u0e34\u0e14",
   "audio": "\u0e1b\u0e34\u0e14",
   "phon": "p\u00ect",
   "rom": "pit",
   "freq": 2,
   "gloss": "menutup, mematikan",
   "alt": [
    "tutup",
    "matikan"
   ],
   "detail": "verba \u00b7 RTGS: pit",
   "cls": "",
   "exTh": "\u0e1b\u0e34\u0e14\u0e1b\u0e23\u0e30\u0e15\u0e39\u0e14\u0e49\u0e27\u0e22",
   "exPhon": "p\u00ect pr\u00e0-tuu d\u00fbai",
   "exGloss": "Tolong tutup pintunya.",
   "note": ""
  },
  {
   "id": "v198",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e40\u0e1b\u0e34\u0e14",
   "audio": "\u0e40\u0e1b\u0e34\u0e14",
   "phon": "p\u00f2oet",
   "rom": "poet",
   "freq": 2,
   "gloss": "membuka, menyalakan",
   "alt": [
    "buka",
    "nyalakan"
   ],
   "detail": "verba \u00b7 RTGS: poet",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e40\u0e1b\u0e34\u0e14\u0e01\u0e35\u0e48\u0e42\u0e21\u0e07",
   "exPhon": "r\u00e1an p\u00f2oet k\u00eci moong",
   "exGloss": "Tokonya buka jam berapa?",
   "note": ""
  },
  {
   "id": "v199",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e2a\u0e48\u0e07",
   "audio": "\u0e2a\u0e48\u0e07",
   "phon": "s\u00f2ng",
   "rom": "song",
   "freq": 2,
   "gloss": "mengirim, mengantar",
   "alt": [
    "kirim",
    "antar"
   ],
   "detail": "verba \u00b7 RTGS: song",
   "cls": "",
   "exTh": "\u0e2a\u0e48\u0e07\u0e43\u0e2b\u0e49\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
   "exPhon": "s\u00f2ng h\u00e2i ph\u00fbean",
   "exGloss": "Mengirimkannya untuk teman.",
   "note": ""
  },
  {
   "id": "v200",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e23\u0e31\u0e1a",
   "audio": "\u0e23\u0e31\u0e1a",
   "phon": "r\u00e1p",
   "rom": "rap",
   "freq": 2,
   "gloss": "menerima, menjemput",
   "alt": [
    "terima",
    "jemput"
   ],
   "detail": "verba \u00b7 RTGS: rap",
   "cls": "",
   "exTh": "\u0e23\u0e31\u0e1a\u0e2d\u0e30\u0e44\u0e23\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "r\u00e1p \u00e0-rai dii khr\u00e1p",
   "exGloss": "Mau pesan apa?",
   "note": "Di warung dan restoran, \u0e23\u0e31\u0e1a\u0e2d\u0e30\u0e44\u0e23\u0e14\u0e35 adalah cara menanyakan pesanan."
  },
  {
   "id": "v201",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e43\u0e0a\u0e49",
   "audio": "\u0e43\u0e0a\u0e49",
   "phon": "ch\u00e1i",
   "rom": "chai",
   "freq": 1,
   "gloss": "memakai",
   "alt": [
    "pakai",
    "menggunakan"
   ],
   "detail": "verba \u00b7 RTGS: chai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e43\u0e0a\u0e49\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d",
   "exPhon": "ph\u01d2m ch\u00e1i muue-th\u01d4ue",
   "exGloss": "Saya memakai telepon genggam.",
   "note": "Jangan dikacaukan dengan \u0e43\u0e0a\u0e48 (ch\u00e2i, 'ya, benar') yang hanya berbeda nada."
  },
  {
   "id": "v202",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e17\u0e33\u0e07\u0e32\u0e19",
   "audio": "\u0e17\u0e33\u0e07\u0e32\u0e19",
   "phon": "tham-ngaan",
   "rom": "thamngan",
   "freq": 1,
   "gloss": "bekerja",
   "alt": [
    "kerja"
   ],
   "detail": "verba \u00b7 RTGS: thamngan",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e17\u0e33\u0e07\u0e32\u0e19\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48",
   "exPhon": "ph\u01d2m tham-ngaan th\u00eei-n\u00eei",
   "exGloss": "Saya bekerja di sini.",
   "note": ""
  },
  {
   "id": "v203",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e1e\u0e31\u0e01",
   "audio": "\u0e1e\u0e31\u0e01",
   "phon": "ph\u00e1k",
   "rom": "phak",
   "freq": 2,
   "gloss": "beristirahat, menginap",
   "alt": [
    "istirahat"
   ],
   "detail": "verba \u00b7 RTGS: phak",
   "cls": "",
   "exTh": "\u0e1e\u0e31\u0e01\u0e17\u0e35\u0e48\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21",
   "exPhon": "ph\u00e1k th\u00eei roong-raem",
   "exGloss": "Menginap di hotel.",
   "note": ""
  },
  {
   "id": "v204",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e27\u0e34\u0e48\u0e07",
   "audio": "\u0e27\u0e34\u0e48\u0e07",
   "phon": "w\u00eeng",
   "rom": "wing",
   "freq": 2,
   "gloss": "berlari",
   "alt": [
    "lari"
   ],
   "detail": "verba \u00b7 RTGS: wing",
   "cls": "",
   "exTh": "\u0e40\u0e14\u0e47\u0e01\u0e27\u0e34\u0e48\u0e07\u0e40\u0e23\u0e47\u0e27\u0e21\u0e32\u0e01",
   "exPhon": "d\u00e8k w\u00eeng reo m\u00e2ak",
   "exGloss": "Anak itu berlari sangat cepat.",
   "note": ""
  },
  {
   "id": "v205",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e02\u0e35\u0e48",
   "audio": "\u0e02\u0e35\u0e48",
   "phon": "kh\u00eci",
   "rom": "khi",
   "freq": 3,
   "gloss": "mengendarai (yang dinaiki)",
   "alt": [
    "naik",
    "mengendarai"
   ],
   "detail": "verba \u00b7 RTGS: khi",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e02\u0e35\u0e48\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19",
   "exPhon": "ph\u01d2m kh\u00eci m\u00e2i pen",
   "exGloss": "Saya tidak bisa mengendarainya.",
   "note": "\u0e02\u0e35\u0e48 untuk yang dinaiki dengan kaki mengangkang (sepeda, motor, kuda); \u0e02\u0e31\u0e1a untuk yang disetir (mobil)."
  },
  {
   "id": "v206",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e25\u0e37\u0e21",
   "audio": "\u0e25\u0e37\u0e21",
   "phon": "luuem",
   "rom": "luem",
   "freq": 2,
   "gloss": "lupa",
   "alt": [
    "melupakan"
   ],
   "detail": "verba \u00b7 RTGS: luem",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e25\u0e37\u0e21\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e02\u0e32",
   "exPhon": "ph\u01d2m luuem ch\u00fbue kh\u01ceo",
   "exGloss": "Saya lupa namanya.",
   "note": ""
  },
  {
   "id": "v207",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e08\u0e33",
   "audio": "\u0e08\u0e33",
   "phon": "jam",
   "rom": "cham",
   "freq": 2,
   "gloss": "mengingat",
   "alt": [
    "ingat",
    "hafal"
   ],
   "detail": "verba \u00b7 RTGS: cham",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e08\u0e33\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49",
   "exPhon": "ph\u01d2m jam m\u00e2i d\u00e2i",
   "exGloss": "Saya tidak bisa mengingatnya.",
   "note": "\u0e08\u0e33\u0e44\u0e14\u0e49 berarti 'ingat', \u0e08\u0e33\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 berarti 'lupa, tidak ingat'."
  },
  {
   "id": "v208",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e04\u0e34\u0e14",
   "audio": "\u0e04\u0e34\u0e14",
   "phon": "kh\u00edt",
   "rom": "khit",
   "freq": 1,
   "gloss": "berpikir; menghitung",
   "alt": [
    "pikir",
    "kira"
   ],
   "detail": "verba \u00b7 RTGS: khit",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e04\u0e34\u0e14\u0e27\u0e48\u0e32\u0e14\u0e35",
   "exPhon": "ph\u01d2m kh\u00edt w\u00e2a dii",
   "exGloss": "Saya rasa itu bagus.",
   "note": "\u0e04\u0e34\u0e14\u0e27\u0e48\u0e32 berarti 'berpikir bahwa'. Di warung, \u0e04\u0e34\u0e14\u0e40\u0e07\u0e34\u0e19 berarti 'menghitung tagihan'."
  },
  {
   "id": "v209",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08",
   "audio": "\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08",
   "phon": "kh\u00e2o-jai",
   "rom": "khaochai",
   "freq": 1,
   "gloss": "mengerti",
   "alt": [
    "paham"
   ],
   "detail": "verba \u00b7 RTGS: khaochai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "ph\u01d2m m\u00e2i kh\u00e2o-jai khr\u00e1p",
   "exGloss": "Saya tidak mengerti.",
   "note": "Harfiahnya 'masuk hati'."
  },
  {
   "id": "v210",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e15\u0e37\u0e48\u0e19",
   "audio": "\u0e15\u0e37\u0e48\u0e19",
   "phon": "t\u00f9uen",
   "rom": "tuen",
   "freq": 2,
   "gloss": "bangun (dari tidur)",
   "alt": [
    "terbangun"
   ],
   "detail": "verba \u00b7 RTGS: tuen",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e15\u0e37\u0e48\u0e19\u0e2b\u0e01\u0e42\u0e21\u0e07",
   "exPhon": "ph\u01d2m t\u00f9uen h\u00f2k moong",
   "exGloss": "Saya bangun jam enam.",
   "note": ""
  },
  {
   "id": "v211",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e2d\u0e32\u0e1a\u0e19\u0e49\u0e33",
   "audio": "\u0e2d\u0e32\u0e1a\u0e19\u0e49\u0e33",
   "phon": "\u00e0ap-n\u00e1am",
   "rom": "apnam",
   "freq": 2,
   "gloss": "mandi",
   "alt": [],
   "detail": "verba \u00b7 RTGS: apnam",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2d\u0e32\u0e1a\u0e19\u0e49\u0e33\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32",
   "exPhon": "ph\u01d2m \u00e0ap-n\u00e1am taawn-ch\u00e1o",
   "exGloss": "Saya mandi pagi.",
   "note": ""
  },
  {
   "id": "v212",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e43\u0e2a\u0e48",
   "audio": "\u0e43\u0e2a\u0e48",
   "phon": "s\u00e0i",
   "rom": "sai",
   "freq": 2,
   "gloss": "memakai (pakaian); memasukkan",
   "alt": [
    "pakai",
    "masukkan"
   ],
   "detail": "verba \u00b7 RTGS: sai",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e43\u0e2a\u0e48\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "m\u00e2i s\u00e0i n\u00e1am-taan khr\u00e1p",
   "exGloss": "Tanpa gula, ya.",
   "note": "Sangat berguna saat memesan minuman: \u0e44\u0e21\u0e48\u0e43\u0e2a\u0e48\u0e19\u0e49\u0e33\u0e41\u0e02\u0e47\u0e07 ('tanpa es')."
  },
  {
   "id": "v213",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07",
   "audio": "\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07",
   "phon": "dooen-thaang",
   "rom": "doenthang",
   "freq": 3,
   "gloss": "bepergian",
   "alt": [
    "melakukan perjalanan"
   ],
   "detail": "verba \u00b7 RTGS: doenthang",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e14\u0e34\u0e19\u0e17\u0e32\u0e07\u0e04\u0e19\u0e40\u0e14\u0e35\u0e22\u0e27",
   "exPhon": "ph\u01d2m dooen-thaang khon diao",
   "exGloss": "Saya bepergian sendirian.",
   "note": ""
  },
  {
   "id": "v214",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e0a\u0e34\u0e21",
   "audio": "\u0e0a\u0e34\u0e21",
   "phon": "chim",
   "rom": "chim",
   "freq": 3,
   "gloss": "mencicipi",
   "alt": [
    "cicip"
   ],
   "detail": "verba \u00b7 RTGS: chim",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e0a\u0e34\u0e21\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u01ceaw chim n\u00e0awi khr\u00e1p",
   "exGloss": "Boleh saya cicipi sedikit?",
   "note": ""
  },
  {
   "id": "v215",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e2a\u0e31\u0e48\u0e07",
   "audio": "\u0e2a\u0e31\u0e48\u0e07",
   "phon": "s\u00e0ng",
   "rom": "sang",
   "freq": 2,
   "gloss": "memesan; menyuruh",
   "alt": [
    "pesan"
   ],
   "detail": "verba \u00b7 RTGS: sang",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2a\u0e31\u0e48\u0e07\u0e02\u0e49\u0e32\u0e27\u0e1c\u0e31\u0e14",
   "exPhon": "ph\u01d2m s\u00e0ng kh\u00e2ao-ph\u00e0t",
   "exGloss": "Saya memesan nasi goreng.",
   "note": ""
  },
  {
   "id": "v216",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e40\u0e01\u0e47\u0e1a",
   "audio": "\u0e40\u0e01\u0e47\u0e1a",
   "phon": "k\u00e8p",
   "rom": "kep",
   "freq": 2,
   "gloss": "menyimpan, membereskan",
   "alt": [
    "simpan"
   ],
   "detail": "verba \u00b7 RTGS: kep",
   "cls": "",
   "exTh": "\u0e40\u0e01\u0e47\u0e1a\u0e40\u0e07\u0e34\u0e19\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "k\u00e8p ngooen d\u00fbai khr\u00e1p",
   "exGloss": "Minta bonnya.",
   "note": "\u0e40\u0e01\u0e47\u0e1a\u0e40\u0e07\u0e34\u0e19 adalah cara Thai asli untuk meminta bon; \u0e40\u0e0a\u0e47\u0e04\u0e1a\u0e34\u0e25 adalah serapan Inggris."
  },
  {
   "id": "v217",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e40\u0e08\u0e2d",
   "audio": "\u0e40\u0e08\u0e2d",
   "phon": "jooe",
   "rom": "choe",
   "freq": 1,
   "gloss": "bertemu, menemukan",
   "alt": [
    "ketemu",
    "temu"
   ],
   "detail": "verba \u00b7 RTGS: choe",
   "cls": "",
   "exTh": "\u0e41\u0e25\u0e49\u0e27\u0e40\u0e08\u0e2d\u0e01\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "l\u00e1eo jooe kan khr\u00e1p",
   "exGloss": "Sampai jumpa.",
   "note": ""
  },
  {
   "id": "v218",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e04\u0e38\u0e22",
   "audio": "\u0e04\u0e38\u0e22",
   "phon": "khui",
   "rom": "khui",
   "freq": 2,
   "gloss": "mengobrol",
   "alt": [
    "ngobrol",
    "bicara"
   ],
   "detail": "verba \u00b7 RTGS: khui",
   "cls": "",
   "exTh": "\u0e04\u0e38\u0e22\u0e01\u0e31\u0e1a\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19",
   "exPhon": "khui k\u00e0p ph\u00fbean",
   "exGloss": "Mengobrol dengan teman.",
   "note": ""
  },
  {
   "id": "v219",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e40\u0e25\u0e48\u0e32",
   "audio": "\u0e40\u0e25\u0e48\u0e32",
   "phon": "l\u00e2o",
   "rom": "lao",
   "freq": 3,
   "gloss": "menceritakan",
   "alt": [
    "cerita"
   ],
   "detail": "verba \u00b7 RTGS: lao",
   "cls": "",
   "exTh": "\u0e40\u0e25\u0e48\u0e32\u0e43\u0e2b\u0e49\u0e1f\u0e31\u0e07\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "l\u00e2o h\u00e2i fang n\u00e0awi",
   "exGloss": "Ceritakan sedikit, dong.",
   "note": ""
  },
  {
   "id": "v220",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e40\u0e15\u0e49\u0e19",
   "audio": "\u0e40\u0e15\u0e49\u0e19",
   "phon": "t\u00ean",
   "rom": "ten",
   "freq": 3,
   "gloss": "menari",
   "alt": [
    "dansa"
   ],
   "detail": "verba \u00b7 RTGS: ten",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e40\u0e15\u0e49\u0e19\u0e40\u0e01\u0e48\u0e07",
   "exPhon": "kh\u01ceo t\u00ean k\u00e8ng",
   "exGloss": "Dia pandai menari.",
   "note": ""
  },
  {
   "id": "v221",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e27\u0e32\u0e14",
   "audio": "\u0e27\u0e32\u0e14",
   "phon": "w\u00e2at",
   "rom": "wat",
   "freq": 3,
   "gloss": "menggambar",
   "alt": [
    "gambar"
   ],
   "detail": "verba \u00b7 RTGS: wat",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e27\u0e32\u0e14\u0e23\u0e39\u0e1b\u0e44\u0e21\u0e48\u0e40\u0e01\u0e48\u0e07",
   "exPhon": "ph\u01d2m w\u00e2at r\u00fbup m\u00e2i k\u00e8ng",
   "exGloss": "Saya tidak pandai menggambar.",
   "note": ""
  },
  {
   "id": "v222",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e2a\u0e2d\u0e19",
   "audio": "\u0e2a\u0e2d\u0e19",
   "phon": "s\u01ceawn",
   "rom": "son",
   "freq": 2,
   "gloss": "mengajar",
   "alt": [
    "ajar"
   ],
   "detail": "verba \u00b7 RTGS: son",
   "cls": "",
   "exTh": "\u0e04\u0e23\u0e39\u0e2a\u0e2d\u0e19\u0e17\u0e35\u0e48\u0e42\u0e23\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19",
   "exPhon": "khruu s\u01ceawn th\u00eei roong-rian",
   "exGloss": "Guru mengajar di sekolah.",
   "note": ""
  },
  {
   "id": "v223",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e08\u0e2d\u0e07",
   "audio": "\u0e08\u0e2d\u0e07",
   "phon": "jaawng",
   "rom": "chong",
   "freq": 3,
   "gloss": "memesan tempat",
   "alt": [
    "booking",
    "pesan tempat"
   ],
   "detail": "verba \u00b7 RTGS: chong",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e08\u0e2d\u0e07\u0e2b\u0e49\u0e2d\u0e07\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "ph\u01d2m jaawng h\u00e2awng l\u00e1eo",
   "exGloss": "Saya sudah memesan kamar.",
   "note": ""
  },
  {
   "id": "v224",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e40\u0e0a\u0e48\u0e32",
   "audio": "\u0e40\u0e0a\u0e48\u0e32",
   "phon": "ch\u00e2o",
   "rom": "chao",
   "freq": 3,
   "gloss": "menyewa",
   "alt": [
    "sewa"
   ],
   "detail": "verba \u00b7 RTGS: chao",
   "cls": "",
   "exTh": "\u0e40\u0e0a\u0e48\u0e32\u0e23\u0e16\u0e27\u0e31\u0e19\u0e25\u0e30\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48",
   "exPhon": "ch\u00e2o r\u00f3t wan-l\u00e1 th\u00e2o-r\u00e0i",
   "exGloss": "Sewa mobil berapa sehari?",
   "note": ""
  },
  {
   "id": "v225",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e22\u0e37\u0e21",
   "audio": "\u0e22\u0e37\u0e21",
   "phon": "yuuem",
   "rom": "yuem",
   "freq": 3,
   "gloss": "meminjam",
   "alt": [
    "pinjam"
   ],
   "detail": "verba \u00b7 RTGS: yuem",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e22\u0e37\u0e21\u0e1b\u0e32\u0e01\u0e01\u0e32\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "kh\u01ceaw yuuem p\u00e0ak-kaa n\u00e0awi",
   "exGloss": "Boleh pinjam pulpennya?",
   "note": ""
  },
  {
   "id": "v226",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 5,
   "th": "\u0e08\u0e2d\u0e14",
   "audio": "\u0e08\u0e2d\u0e14",
   "phon": "j\u00e0awt",
   "rom": "chot",
   "freq": 2,
   "gloss": "berhenti, memarkir",
   "alt": [
    "parkir",
    "berhenti"
   ],
   "detail": "verba \u00b7 RTGS: chot",
   "cls": "",
   "exTh": "\u0e08\u0e2d\u0e14\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "j\u00e0awt trong-n\u00edi khr\u00e1p",
   "exGloss": "Berhenti di sini saja.",
   "note": ""
  },
  {
   "id": "v227",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e27",
   "audio": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e27",
   "phon": "l\u00edao",
   "rom": "liao",
   "freq": 2,
   "gloss": "berbelok",
   "alt": [
    "belok"
   ],
   "detail": "verba \u00b7 RTGS: liao",
   "cls": "",
   "exTh": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e27\u0e0b\u0e49\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "l\u00edao s\u00e1ai khr\u00e1p",
   "exGloss": "Belok kiri.",
   "note": ""
  },
  {
   "id": "v228",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 5,
   "th": "\u0e02\u0e49\u0e32\u0e21",
   "audio": "\u0e02\u0e49\u0e32\u0e21",
   "phon": "kh\u00e2am",
   "rom": "kham",
   "freq": 3,
   "gloss": "menyeberang",
   "alt": [
    "seberang"
   ],
   "detail": "verba \u00b7 RTGS: kham",
   "cls": "",
   "exTh": "\u0e02\u0e49\u0e32\u0e21\u0e16\u0e19\u0e19\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49",
   "exPhon": "kh\u00e2am th\u00e0-n\u01d2n trong-n\u00edi",
   "exGloss": "Menyeberang jalan di sini.",
   "note": ""
  },
  {
   "id": "v229",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e27\u0e48\u0e32\u0e22",
   "audio": "\u0e27\u0e48\u0e32\u0e22",
   "phon": "w\u00e2ai",
   "rom": "wai",
   "freq": 3,
   "gloss": "berenang",
   "alt": [
    "renang"
   ],
   "detail": "verba \u00b7 RTGS: wai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e47\u0e19",
   "exPhon": "ph\u01d2m w\u00e2ai-n\u00e1am pen",
   "exGloss": "Saya bisa berenang.",
   "note": "Bentuk lengkapnya \u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33. \u0e40\u0e1b\u0e47\u0e19 sesudah kata kerja menandai keterampilan yang dipelajari."
  },
  {
   "id": "v230",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e2a\u0e39\u0e07",
   "audio": "\u0e2a\u0e39\u0e07",
   "phon": "s\u01d4ung",
   "rom": "sung",
   "freq": 2,
   "gloss": "tinggi",
   "alt": [
    "jangkung"
   ],
   "detail": "sifat \u00b7 RTGS: sung",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e2a\u0e39\u0e07\u0e21\u0e32\u0e01",
   "exPhon": "kh\u01ceo s\u01d4ung m\u00e2ak",
   "exGloss": "Dia sangat tinggi.",
   "note": ""
  },
  {
   "id": "v231",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e40\u0e15\u0e35\u0e49\u0e22",
   "audio": "\u0e40\u0e15\u0e35\u0e49\u0e22",
   "phon": "t\u00eea",
   "rom": "tia",
   "freq": 3,
   "gloss": "pendek (orang)",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: tia",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e15\u0e35\u0e49\u0e22\u0e01\u0e27\u0e48\u0e32\u0e40\u0e02\u0e32",
   "exPhon": "ph\u01d2m t\u00eea kw\u00e0a kh\u01ceo",
   "exGloss": "Saya lebih pendek daripada dia.",
   "note": ""
  },
  {
   "id": "v232",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e22\u0e32\u0e27",
   "audio": "\u0e22\u0e32\u0e27",
   "phon": "yaao",
   "rom": "yao",
   "freq": 2,
   "gloss": "panjang",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: yao",
   "cls": "",
   "exTh": "\u0e16\u0e19\u0e19\u0e40\u0e2a\u0e49\u0e19\u0e19\u0e35\u0e49\u0e22\u0e32\u0e27",
   "exPhon": "th\u00e0-n\u01d2n s\u00ean n\u00edi yaao",
   "exGloss": "Jalan ini panjang.",
   "note": ""
  },
  {
   "id": "v233",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e2a\u0e31\u0e49\u0e19",
   "audio": "\u0e2a\u0e31\u0e49\u0e19",
   "phon": "s\u00e2n",
   "rom": "san",
   "freq": 2,
   "gloss": "pendek (benda)",
   "alt": [
    "singkat"
   ],
   "detail": "sifat \u00b7 RTGS: san",
   "cls": "",
   "exTh": "\u0e40\u0e27\u0e25\u0e32\u0e2a\u0e31\u0e49\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "wee-laa s\u00e2n m\u00e2ak",
   "exGloss": "Waktunya sangat singkat.",
   "note": ""
  },
  {
   "id": "v234",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e2b\u0e19\u0e31\u0e01",
   "audio": "\u0e2b\u0e19\u0e31\u0e01",
   "phon": "n\u00e0k",
   "rom": "nak",
   "freq": 2,
   "gloss": "berat",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: nak",
   "cls": "",
   "exTh": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e2b\u0e19\u0e31\u0e01\u0e44\u0e2b\u0e21",
   "exPhon": "kr\u00e0-p\u01ceo n\u00e0k m\u01cei",
   "exGloss": "Tasnya berat tidak?",
   "note": ""
  },
  {
   "id": "v235",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e40\u0e1a\u0e32",
   "audio": "\u0e40\u0e1a\u0e32",
   "phon": "bao",
   "rom": "bao",
   "freq": 2,
   "gloss": "ringan; pelan (suara)",
   "alt": [
    "pelan"
   ],
   "detail": "sifat \u00b7 RTGS: bao",
   "cls": "",
   "exTh": "\u0e1e\u0e39\u0e14\u0e40\u0e1a\u0e32\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "ph\u00fbut bao n\u00e0awi",
   "exGloss": "Tolong bicara lebih pelan.",
   "note": "Bentuk \u0e40\u0e1a\u0e32\u0e46 dengan tanda ulang terdengar lebih halus lagi."
  },
  {
   "id": "v236",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e40\u0e23\u0e47\u0e27",
   "audio": "\u0e40\u0e23\u0e47\u0e27",
   "phon": "reo",
   "rom": "reo",
   "freq": 1,
   "gloss": "cepat",
   "alt": [
    "lekas"
   ],
   "detail": "sifat \u00b7 RTGS: reo",
   "cls": "",
   "exTh": "\u0e23\u0e16\u0e40\u0e23\u0e47\u0e27\u0e21\u0e32\u0e01",
   "exPhon": "r\u00f3t reo m\u00e2ak",
   "exGloss": "Mobilnya sangat cepat.",
   "note": ""
  },
  {
   "id": "v237",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e0a\u0e49\u0e32",
   "audio": "\u0e0a\u0e49\u0e32",
   "phon": "ch\u00e1a",
   "rom": "cha",
   "freq": 1,
   "gloss": "lambat",
   "alt": [
    "pelan"
   ],
   "detail": "sifat \u00b7 RTGS: cha",
   "cls": "",
   "exTh": "\u0e0a\u0e48\u0e27\u0e22\u0e1e\u0e39\u0e14\u0e0a\u0e49\u0e32\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "ch\u00fbai ph\u00fbut ch\u00e1a n\u00e0awi khr\u00e1p",
   "exGloss": "Tolong bicara lebih lambat.",
   "note": "Kalimat ini termasuk yang paling sering diperlukan pembelajar pemula."
  },
  {
   "id": "v238",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 3,
   "th": "\u0e07\u0e48\u0e32\u0e22",
   "audio": "\u0e07\u0e48\u0e32\u0e22",
   "phon": "ng\u00e2ai",
   "rom": "ngai",
   "freq": 2,
   "gloss": "mudah",
   "alt": [
    "gampang"
   ],
   "detail": "sifat \u00b7 RTGS: ngai",
   "cls": "",
   "exTh": "\u0e20\u0e32\u0e29\u0e32\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e07\u0e48\u0e32\u0e22",
   "exPhon": "phaa-s\u01cea n\u00edi m\u00e2i ng\u00e2ai",
   "exGloss": "Bahasa ini tidak mudah.",
   "note": ""
  },
  {
   "id": "v239",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 2,
   "th": "\u0e22\u0e32\u0e01",
   "audio": "\u0e22\u0e32\u0e01",
   "phon": "y\u00e2ak",
   "rom": "yak",
   "freq": 2,
   "gloss": "sulit",
   "alt": [
    "susah"
   ],
   "detail": "sifat \u00b7 RTGS: yak",
   "cls": "",
   "exTh": "\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e22\u0e32\u0e01\u0e21\u0e32\u0e01",
   "exPhon": "s\u01d0ang y\u00e2ak m\u00e2ak",
   "exGloss": "Nadanya sangat sulit.",
   "note": ""
  },
  {
   "id": "v240",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e2a\u0e30\u0e2d\u0e32\u0e14",
   "audio": "\u0e2a\u0e30\u0e2d\u0e32\u0e14",
   "phon": "s\u00e0-\u00e0at",
   "rom": "sa-at",
   "freq": 2,
   "gloss": "bersih",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: sa-at",
   "cls": "",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2a\u0e30\u0e2d\u0e32\u0e14\u0e21\u0e32\u0e01",
   "exPhon": "h\u00e2awng-n\u00e1am s\u00e0-\u00e0at m\u00e2ak",
   "exGloss": "Toiletnya sangat bersih.",
   "note": ""
  },
  {
   "id": "v241",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e2d\u0e48\u0e2d\u0e19",
   "audio": "\u0e2d\u0e48\u0e2d\u0e19",
   "phon": "\u00e0awn",
   "rom": "on",
   "freq": 3,
   "gloss": "lembut; muda (warna)",
   "alt": [
    "lunak"
   ],
   "detail": "sifat \u00b7 RTGS: on",
   "cls": "",
   "exTh": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2d\u0e48\u0e2d\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "n\u00faea \u00e0awn m\u00e2ak",
   "exGloss": "Dagingnya sangat lembut.",
   "note": ""
  },
  {
   "id": "v242",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e41\u0e02\u0e47\u0e07",
   "audio": "\u0e41\u0e02\u0e47\u0e07",
   "phon": "kh\u01ceeng",
   "rom": "khaeng",
   "freq": 2,
   "gloss": "keras",
   "alt": [
    "kaku"
   ],
   "detail": "sifat \u00b7 RTGS: khaeng",
   "cls": "",
   "exTh": "\u0e02\u0e49\u0e32\u0e27\u0e41\u0e02\u0e47\u0e07\u0e44\u0e1b",
   "exPhon": "kh\u00e2ao kh\u01ceeng pai",
   "exGloss": "Nasinya terlalu keras.",
   "note": ""
  },
  {
   "id": "v243",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e27\u0e48\u0e32\u0e07",
   "audio": "\u0e27\u0e48\u0e32\u0e07",
   "phon": "w\u00e2ang",
   "rom": "wang",
   "freq": 2,
   "gloss": "luang, kosong",
   "alt": [
    "senggang"
   ],
   "detail": "sifat \u00b7 RTGS: wang",
   "cls": "",
   "exTh": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e27\u0e48\u0e32\u0e07",
   "exPhon": "phr\u00fbng-n\u00edi ph\u01d2m w\u00e2ang",
   "exGloss": "Besok saya luang.",
   "note": ""
  },
  {
   "id": "v244",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e40\u0e15\u0e47\u0e21",
   "audio": "\u0e40\u0e15\u0e47\u0e21",
   "phon": "tem",
   "rom": "tem",
   "freq": 2,
   "gloss": "penuh",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: tem",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e40\u0e15\u0e47\u0e21\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "r\u00e1an tem l\u00e1eo",
   "exGloss": "Restorannya sudah penuh.",
   "note": ""
  },
  {
   "id": "v245",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e14\u0e31\u0e07",
   "audio": "\u0e14\u0e31\u0e07",
   "phon": "dang",
   "rom": "dang",
   "freq": 2,
   "gloss": "keras (suara); terkenal",
   "alt": [
    "nyaring",
    "terkenal"
   ],
   "detail": "sifat \u00b7 RTGS: dang",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e19\u0e35\u0e49\u0e14\u0e31\u0e07\u0e21\u0e32\u0e01",
   "exPhon": "r\u00e1an n\u00edi dang m\u00e2ak",
   "exGloss": "Restoran ini sangat terkenal.",
   "note": ""
  },
  {
   "id": "v246",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e40\u0e07\u0e35\u0e22\u0e1a",
   "audio": "\u0e40\u0e07\u0e35\u0e22\u0e1a",
   "phon": "ng\u00eeap",
   "rom": "ngiap",
   "freq": 3,
   "gloss": "sunyi, diam",
   "alt": [
    "hening"
   ],
   "detail": "sifat \u00b7 RTGS: ngiap",
   "cls": "",
   "exTh": "\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e40\u0e07\u0e35\u0e22\u0e1a\u0e14\u0e35",
   "exPhon": "th\u00eei-n\u00eei ng\u00eeap dii",
   "exGloss": "Di sini enak, sunyi.",
   "note": ""
  },
  {
   "id": "v247",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e19\u0e48\u0e32\u0e23\u0e31\u0e01",
   "audio": "\u0e19\u0e48\u0e32\u0e23\u0e31\u0e01",
   "phon": "n\u00e2a-r\u00e1k",
   "rom": "narak",
   "freq": 2,
   "gloss": "manis, menggemaskan",
   "alt": [
    "imut",
    "lucu"
   ],
   "detail": "sifat \u00b7 RTGS: narak",
   "cls": "",
   "exTh": "\u0e40\u0e14\u0e47\u0e01\u0e04\u0e19\u0e19\u0e35\u0e49\u0e19\u0e48\u0e32\u0e23\u0e31\u0e01",
   "exPhon": "d\u00e8k khon n\u00edi n\u00e2a-r\u00e1k",
   "exGloss": "Anak ini menggemaskan.",
   "note": "\u0e19\u0e48\u0e32 + kata kerja berarti 'patut di-': \u0e19\u0e48\u0e32\u0e01\u0e34\u0e19 ('menggugah selera'), \u0e19\u0e48\u0e32\u0e44\u0e1b ('layak dikunjungi')."
  },
  {
   "id": "v248",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e2a\u0e33\u0e04\u0e31\u0e0d",
   "audio": "\u0e2a\u0e33\u0e04\u0e31\u0e0d",
   "phon": "s\u01cem-khan",
   "rom": "samkhan",
   "freq": 2,
   "gloss": "penting",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: samkhan",
   "cls": "",
   "exTh": "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e2a\u0e33\u0e04\u0e31\u0e0d\u0e21\u0e32\u0e01",
   "exPhon": "r\u00fbeang n\u00edi s\u01cem-khan m\u00e2ak",
   "exGloss": "Hal ini sangat penting.",
   "note": ""
  },
  {
   "id": "v249",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 6,
   "th": "\u0e2d\u0e1a\u0e2d\u0e38\u0e48\u0e19",
   "audio": "\u0e2d\u0e1a\u0e2d\u0e38\u0e48\u0e19",
   "phon": "\u00f2p-\u00f9n",
   "rom": "op-un",
   "freq": 3,
   "gloss": "hangat",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: op-un",
   "cls": "",
   "exTh": "\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e2d\u0e1a\u0e2d\u0e38\u0e48\u0e19",
   "exPhon": "aa-k\u00e0at \u00f2p-\u00f9n",
   "exGloss": "Cuacanya hangat.",
   "note": ""
  },
  {
   "id": "v250",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e2a\u0e14",
   "audio": "\u0e2a\u0e14",
   "phon": "s\u00f2t",
   "rom": "sot",
   "freq": 2,
   "gloss": "segar",
   "alt": [
    "baru"
   ],
   "detail": "sifat \u00b7 RTGS: sot",
   "cls": "",
   "exTh": "\u0e1b\u0e25\u0e32\u0e2a\u0e14\u0e21\u0e32\u0e01",
   "exPhon": "plaa s\u00f2t m\u00e2ak",
   "exGloss": "Ikannya sangat segar.",
   "note": ""
  },
  {
   "id": "v251",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e02\u0e21",
   "audio": "\u0e02\u0e21",
   "phon": "kh\u01d2m",
   "rom": "khom",
   "freq": 3,
   "gloss": "pahit",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: khom",
   "cls": "",
   "exTh": "\u0e01\u0e32\u0e41\u0e1f\u0e02\u0e21\u0e44\u0e1b",
   "exPhon": "kaa-fae kh\u01d2m pai",
   "exGloss": "Kopinya terlalu pahit.",
   "note": ""
  },
  {
   "id": "v252",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 6,
   "th": "\u0e21\u0e31\u0e19",
   "audio": "\u0e21\u0e31\u0e19",
   "phon": "man",
   "rom": "man",
   "freq": 3,
   "gloss": "berminyak, gurih",
   "alt": [
    "gurih"
   ],
   "detail": "sifat \u00b7 RTGS: man",
   "cls": "",
   "exTh": "\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e21\u0e31\u0e19\u0e44\u0e1b",
   "exPhon": "aa-h\u01cean man pai",
   "exGloss": "Makanannya terlalu berminyak.",
   "note": ""
  },
  {
   "id": "v253",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e2a\u0e38\u0e01",
   "audio": "\u0e2a\u0e38\u0e01",
   "phon": "s\u00f9k",
   "rom": "suk",
   "freq": 3,
   "gloss": "matang",
   "alt": [
    "masak"
   ],
   "detail": "sifat \u00b7 RTGS: suk",
   "cls": "",
   "exTh": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2a\u0e38\u0e01\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "n\u00faea s\u00f9k l\u00e1eo",
   "exGloss": "Dagingnya sudah matang.",
   "note": ""
  },
  {
   "id": "v254",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 6,
   "th": "\u0e14\u0e34\u0e1a",
   "audio": "\u0e14\u0e34\u0e1a",
   "phon": "d\u00ecp",
   "rom": "dip",
   "freq": 3,
   "gloss": "mentah",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: dip",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19\u0e02\u0e2d\u0e07\u0e14\u0e34\u0e1a",
   "exPhon": "ph\u01d2m m\u00e2i kin kh\u01ceawng d\u00ecp",
   "exGloss": "Saya tidak makan makanan mentah.",
   "note": ""
  },
  {
   "id": "v256",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 4,
   "th": "\u0e2b\u0e23\u0e37\u0e2d",
   "audio": "\u0e2b\u0e23\u0e37\u0e2d",
   "phon": "r\u01d4ue",
   "rom": "rue",
   "freq": 1,
   "gloss": "atau",
   "alt": [],
   "detail": "sambung \u00b7 RTGS: rue",
   "cls": "",
   "exTh": "\u0e0a\u0e32\u0e2b\u0e23\u0e37\u0e2d\u0e01\u0e32\u0e41\u0e1f",
   "exPhon": "chaa r\u01d4ue kaa-fae",
   "exGloss": "Teh atau kopi?",
   "note": ""
  },
  {
   "id": "v257",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 4,
   "th": "\u0e41\u0e25\u0e30",
   "audio": "\u0e41\u0e25\u0e30",
   "phon": "l\u00e1e",
   "rom": "lae",
   "freq": 1,
   "gloss": "dan",
   "alt": [],
   "detail": "sambung \u00b7 RTGS: lae",
   "cls": "",
   "exTh": "\u0e02\u0e49\u0e32\u0e27\u0e41\u0e25\u0e30\u0e19\u0e49\u0e33",
   "exPhon": "kh\u00e2ao l\u00e1e n\u00e1am",
   "exGloss": "Nasi dan air.",
   "note": "\u0e41\u0e25\u0e30 menghubungkan kalimat atau daftar; untuk 'dengan' di antara dua kata benda dipakai \u0e01\u0e31\u0e1a."
  },
  {
   "id": "v258",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e40\u0e1e\u0e23\u0e32\u0e30",
   "audio": "\u0e40\u0e1e\u0e23\u0e32\u0e30",
   "phon": "phr\u00e1w",
   "rom": "phro",
   "freq": 2,
   "gloss": "karena",
   "alt": [
    "sebab"
   ],
   "detail": "sambung \u00b7 RTGS: phro",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e44\u0e1b\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e1d\u0e19\u0e15\u0e01",
   "exPhon": "m\u00e2i pai phr\u00e1w f\u01d2n t\u00f2k",
   "exGloss": "Tidak pergi karena hujan.",
   "note": ""
  },
  {
   "id": "v259",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e16\u0e49\u0e32",
   "audio": "\u0e16\u0e49\u0e32",
   "phon": "th\u00e2a",
   "rom": "tha",
   "freq": 2,
   "gloss": "kalau, jika",
   "alt": [
    "jika"
   ],
   "detail": "sambung \u00b7 RTGS: tha",
   "cls": "",
   "exTh": "\u0e16\u0e49\u0e32\u0e1d\u0e19\u0e15\u0e01\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e44\u0e1b",
   "exPhon": "th\u00e2a f\u01d2n t\u00f2k ph\u01d2m m\u00e2i pai",
   "exGloss": "Kalau hujan, saya tidak pergi.",
   "note": ""
  },
  {
   "id": "v260",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e41\u0e04\u0e48",
   "audio": "\u0e41\u0e04\u0e48",
   "phon": "kh\u00e2e",
   "rom": "khae",
   "freq": 2,
   "gloss": "hanya",
   "alt": [
    "cuma"
   ],
   "detail": "keterangan \u00b7 RTGS: khae",
   "cls": "",
   "exTh": "\u0e41\u0e04\u0e48\u0e19\u0e35\u0e49\u0e1e\u0e2d\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u00e2e n\u00edi phaaw khr\u00e1p",
   "exGloss": "Segini saja cukup.",
   "note": ""
  },
  {
   "id": "v261",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
   "audio": "\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14",
   "phon": "th\u00e1ng-m\u00f2t",
   "rom": "thangmot",
   "freq": 2,
   "gloss": "semuanya",
   "alt": [
    "seluruhnya"
   ],
   "detail": "keterangan \u00b7 RTGS: thangmot",
   "cls": "",
   "exTh": "\u0e17\u0e31\u0e49\u0e07\u0e2b\u0e21\u0e14\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "th\u00e1ng-m\u00f2t th\u00e2o-r\u00e0i khr\u00e1p",
   "exGloss": "Semuanya berapa?",
   "note": ""
  },
  {
   "id": "v262",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e2d\u0e37\u0e48\u0e19",
   "audio": "\u0e2d\u0e37\u0e48\u0e19",
   "phon": "\u00f9uen",
   "rom": "uen",
   "freq": 2,
   "gloss": "lain",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: uen",
   "cls": "",
   "exTh": "\u0e21\u0e35\u0e2a\u0e35\u0e2d\u0e37\u0e48\u0e19\u0e44\u0e2b\u0e21",
   "exPhon": "mii s\u01d0i \u00f9uen m\u01cei",
   "exGloss": "Ada warna lain?",
   "note": ""
  },
  {
   "id": "v263",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 6,
   "th": "\u0e40\u0e2d\u0e07",
   "audio": "\u0e40\u0e2d\u0e07",
   "phon": "eeng",
   "rom": "eng",
   "freq": 3,
   "gloss": "sendiri",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: eng",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e17\u0e33\u0e40\u0e2d\u0e07",
   "exPhon": "ph\u01d2m tham eeng",
   "exGloss": "Saya mengerjakannya sendiri.",
   "note": ""
  },
  {
   "id": "v264",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 4,
   "th": "\u0e01\u0e31\u0e19",
   "audio": "\u0e01\u0e31\u0e19",
   "phon": "kan",
   "rom": "kan",
   "freq": 2,
   "gloss": "bersama, saling",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: kan",
   "cls": "",
   "exTh": "\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "pai d\u00fbai-kan khr\u00e1p",
   "exGloss": "Ayo pergi bersama.",
   "note": ""
  },
  {
   "id": "v265",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
   "audio": "\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
   "phon": "th\u00eei-s\u00f9t",
   "rom": "thisut",
   "freq": 2,
   "gloss": "paling",
   "alt": [
    "ter-"
   ],
   "detail": "keterangan \u00b7 RTGS: thisut",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e19\u0e35\u0e49\u0e14\u0e35\u0e17\u0e35\u0e48\u0e2a\u0e38\u0e14",
   "exPhon": "r\u00e1an n\u00edi dii th\u00eei-s\u00f9t",
   "exGloss": "Restoran ini yang paling bagus.",
   "note": ""
  },
  {
   "id": "v266",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e01\u0e27\u0e48\u0e32",
   "audio": "\u0e01\u0e27\u0e48\u0e32",
   "phon": "kw\u00e0a",
   "rom": "kwa",
   "freq": 2,
   "gloss": "lebih ... daripada",
   "alt": [
    "lebih"
   ],
   "detail": "keterangan \u00b7 RTGS: kwa",
   "cls": "",
   "exTh": "\u0e41\u0e1e\u0e07\u0e01\u0e27\u0e48\u0e32\u0e23\u0e49\u0e32\u0e19\u0e19\u0e31\u0e49\u0e19",
   "exPhon": "phaeng kw\u00e0a r\u00e1an n\u00e1n",
   "exGloss": "Lebih mahal daripada toko itu.",
   "note": ""
  },
  {
   "id": "v267",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19",
   "audio": "\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19",
   "phon": "m\u01d4ean",
   "rom": "muean",
   "freq": 2,
   "gloss": "seperti, sama dengan",
   "alt": [
    "serupa"
   ],
   "detail": "keterangan \u00b7 RTGS: muean",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e2d\u0e19\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19",
   "exPhon": "r\u00e1awn m\u01d4ean-kan",
   "exGloss": "Sama panasnya.",
   "note": "\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19 juga dipakai sendirian untuk menanggapi: 'sama saja', 'saya juga'."
  },
  {
   "id": "v268",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 6,
   "th": "\u0e15\u0e48\u0e32\u0e07",
   "audio": "\u0e15\u0e48\u0e32\u0e07",
   "phon": "t\u00e0ang",
   "rom": "tang",
   "freq": 3,
   "gloss": "berbeda; asing",
   "alt": [
    "beda"
   ],
   "detail": "sifat \u00b7 RTGS: tang",
   "cls": "",
   "exTh": "\u0e23\u0e32\u0e04\u0e32\u0e15\u0e48\u0e32\u0e07\u0e01\u0e31\u0e19",
   "exPhon": "raa-khaa t\u00e0ang kan",
   "exGloss": "Harganya berbeda-beda.",
   "note": "\u0e15\u0e48\u0e32\u0e07\u0e0a\u0e32\u0e15\u0e34 (t\u00e0ang-ch\u00e2at) berarti 'asing', harfiahnya 'bangsa lain'."
  },
  {
   "id": "v269",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 6,
   "th": "\u0e40\u0e01\u0e37\u0e2d\u0e1a",
   "audio": "\u0e40\u0e01\u0e37\u0e2d\u0e1a",
   "phon": "k\u00f9eap",
   "rom": "kueap",
   "freq": 3,
   "gloss": "hampir",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: kueap",
   "cls": "",
   "exTh": "\u0e40\u0e01\u0e37\u0e2d\u0e1a\u0e25\u0e37\u0e21\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "k\u00f9eap luuem l\u00e1eo",
   "exGloss": "Hampir saja lupa.",
   "note": ""
  },
  {
   "id": "v270",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 4,
   "th": "\u0e19\u0e34\u0e14",
   "audio": "\u0e19\u0e34\u0e14",
   "phon": "n\u00edt",
   "rom": "nit",
   "freq": 2,
   "gloss": "sedikit",
   "alt": [
    "dikit"
   ],
   "detail": "keterangan \u00b7 RTGS: nit",
   "cls": "",
   "exTh": "\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e34\u0e14\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "ph\u00e8t n\u00edt-n\u00e0awi",
   "exGloss": "Sedikit pedas.",
   "note": "Bentuk lengkapnya \u0e19\u0e34\u0e14\u0e2b\u0e19\u0e48\u0e2d\u0e22, dan itulah yang paling sering terdengar."
  },
  {
   "id": "v271",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 4,
   "th": "\u0e1a\u0e48\u0e2d\u0e22",
   "audio": "\u0e1a\u0e48\u0e2d\u0e22",
   "phon": "b\u00e0awi",
   "rom": "boi",
   "freq": 2,
   "gloss": "sering",
   "alt": [
    "kerap"
   ],
   "detail": "keterangan \u00b7 RTGS: boi",
   "cls": "",
   "exTh": "\u0e1d\u0e19\u0e15\u0e01\u0e1a\u0e48\u0e2d\u0e22",
   "exPhon": "f\u01d2n t\u00f2k b\u00e0awi",
   "exGloss": "Sering hujan.",
   "note": ""
  },
  {
   "id": "v272",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 6,
   "th": "\u0e1a\u0e32\u0e07\u0e04\u0e23\u0e31\u0e49\u0e07",
   "audio": "\u0e1a\u0e32\u0e07\u0e04\u0e23\u0e31\u0e49\u0e07",
   "phon": "baang-kr\u00e1ng",
   "rom": "bangkhrang",
   "freq": 3,
   "gloss": "kadang-kadang",
   "alt": [
    "terkadang"
   ],
   "detail": "keterangan \u00b7 RTGS: bangkhrang",
   "cls": "",
   "exTh": "\u0e1a\u0e32\u0e07\u0e04\u0e23\u0e31\u0e49\u0e07\u0e1c\u0e21\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
   "exPhon": "baang-kr\u00e1ng ph\u01d2m pai t\u00e0-l\u00e0at",
   "exGloss": "Kadang-kadang saya pergi ke pasar.",
   "note": ""
  },
  {
   "id": "v273",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e40\u0e04\u0e22",
   "audio": "\u0e40\u0e04\u0e22",
   "phon": "khooei",
   "rom": "khoei",
   "freq": 2,
   "gloss": "pernah",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: khoei",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e04\u0e22\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e19",
   "exPhon": "ph\u01d2m khooei pai th\u00eei-n\u00e2n",
   "exGloss": "Saya pernah ke sana.",
   "note": "Penafiannya \u0e44\u0e21\u0e48\u0e40\u0e04\u0e22 ('belum pernah')."
  },
  {
   "id": "v274",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e01\u0e48\u0e2d\u0e19",
   "audio": "\u0e01\u0e48\u0e2d\u0e19",
   "phon": "k\u00e0awn",
   "rom": "kon",
   "freq": 2,
   "gloss": "sebelum, lebih dahulu",
   "alt": [
    "dulu"
   ],
   "detail": "keterangan \u00b7 RTGS: kon",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e01\u0e48\u0e2d\u0e19\u0e19\u0e30",
   "exPhon": "ph\u01d2m pai k\u00e0awn n\u00e1",
   "exGloss": "Saya pergi duluan, ya.",
   "note": ""
  },
  {
   "id": "v275",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49",
   "audio": "\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49",
   "phon": "taawn-n\u00edi",
   "rom": "tonni",
   "freq": 1,
   "gloss": "sekarang",
   "alt": [
    "saat ini"
   ],
   "detail": "keterangan \u00b7 RTGS: tonni",
   "cls": "",
   "exTh": "\u0e15\u0e2d\u0e19\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07",
   "exPhon": "taawn-n\u00edi ph\u01d2m m\u00e2i w\u00e2ang",
   "exGloss": "Sekarang saya tidak luang.",
   "note": ""
  },
  {
   "id": "v276",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 3,
   "th": "\u0e2b\u0e49\u0e2d\u0e07",
   "audio": "\u0e2b\u0e49\u0e2d\u0e07",
   "phon": "h\u00e2awng",
   "rom": "hong",
   "freq": 1,
   "gloss": "ruang, kamar",
   "alt": [
    "kamar"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e2b\u0e49\u0e2d\u0e07 \u00b7 RTGS: hong",
   "cls": "\u0e2b\u0e49\u0e2d\u0e07",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e0d\u0e48\u0e21\u0e32\u0e01",
   "exPhon": "h\u00e2awng n\u00edi y\u00e0i m\u00e2ak",
   "exGloss": "Kamar ini sangat besar.",
   "note": "Dipakai pada banyak kata: \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e2d\u0e19 (kamar tidur), \u0e2b\u0e49\u0e2d\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19 (ruang kelas), \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33 (toilet)."
  },
  {
   "id": "v277",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e04\u0e23\u0e31\u0e27",
   "audio": "\u0e04\u0e23\u0e31\u0e27",
   "phon": "khrua",
   "rom": "khrua",
   "freq": 3,
   "gloss": "dapur",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e2b\u0e49\u0e2d\u0e07 \u00b7 RTGS: khrua",
   "cls": "\u0e2b\u0e49\u0e2d\u0e07",
   "exTh": "\u0e41\u0e21\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e04\u0e23\u0e31\u0e27",
   "exPhon": "m\u00e2e y\u00f9u nai khrua",
   "exGloss": "Ibu ada di dapur.",
   "note": ""
  },
  {
   "id": "v278",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 4,
   "th": "\u0e2a\u0e27\u0e19",
   "audio": "\u0e2a\u0e27\u0e19",
   "phon": "s\u01d4an",
   "rom": "suan",
   "freq": 2,
   "gloss": "taman, kebun",
   "alt": [
    "kebun"
   ],
   "detail": "nomina \u00b7 RTGS: suan",
   "cls": "",
   "exTh": "\u0e2a\u0e27\u0e19\u0e19\u0e35\u0e49\u0e2a\u0e27\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "s\u01d4an n\u00edi s\u01d4ai m\u00e2ak",
   "exGloss": "Taman ini sangat indah.",
   "note": ""
  },
  {
   "id": "v279",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e16\u0e19\u0e19",
   "audio": "\u0e16\u0e19\u0e19",
   "phon": "th\u00e0-n\u01d2n",
   "rom": "thanon",
   "freq": 2,
   "gloss": "jalan (raya)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e2a\u0e32\u0e22 \u00b7 RTGS: thanon",
   "cls": "\u0e2a\u0e32\u0e22",
   "exTh": "\u0e16\u0e19\u0e19\u0e19\u0e35\u0e49\u0e22\u0e32\u0e27\u0e21\u0e32\u0e01",
   "exPhon": "th\u00e0-n\u01d2n n\u00edi yaao m\u00e2ak",
   "exGloss": "Jalan ini sangat panjang.",
   "note": "Contoh aksara nam: \u0e16 berkelas tinggi memimpin \u0e19\u0e19, sehingga suku kata keduanya bernada naik."
  },
  {
   "id": "v280",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 6,
   "th": "\u0e2a\u0e30\u0e1e\u0e32\u0e19",
   "audio": "\u0e2a\u0e30\u0e1e\u0e32\u0e19",
   "phon": "s\u00e0-phaan",
   "rom": "saphan",
   "freq": 3,
   "gloss": "jembatan",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: saphan",
   "cls": "",
   "exTh": "\u0e02\u0e49\u0e32\u0e21\u0e2a\u0e30\u0e1e\u0e32\u0e19\u0e44\u0e1b",
   "exPhon": "kh\u00e2am s\u00e0-phaan pai",
   "exGloss": "Menyeberang lewat jembatan.",
   "note": ""
  },
  {
   "id": "v281",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23",
   "audio": "\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23",
   "phon": "th\u00e1-naa-khaan",
   "rom": "thanakhan",
   "freq": 2,
   "gloss": "bank",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: thanakhan",
   "cls": "",
   "exTh": "\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "th\u00e1-naa-khaan y\u00f9u n\u01cei khr\u00e1p",
   "exGloss": "Di mana banknya?",
   "note": ""
  },
  {
   "id": "v282",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25",
   "audio": "\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25",
   "phon": "roong-ph\u00e1-yaa-baan",
   "rom": "rongphayaban",
   "freq": 2,
   "gloss": "rumah sakit",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e2b\u0e48\u0e07 \u00b7 RTGS: rongphayaban",
   "cls": "\u0e41\u0e2b\u0e48\u0e07",
   "exTh": "\u0e44\u0e1b\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e14\u0e49\u0e27\u0e22\u0e01\u0e31\u0e19",
   "exPhon": "pai roong-ph\u00e1-yaa-baan d\u00fbai-kan",
   "exGloss": "Pergi ke rumah sakit bersama.",
   "note": ""
  },
  {
   "id": "v283",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 4,
   "th": "\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23",
   "audio": "\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23",
   "phon": "r\u00e1an-aa-h\u01cean",
   "rom": "ran ahan",
   "freq": 2,
   "gloss": "restoran, rumah makan",
   "alt": [
    "warung makan"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e23\u0e49\u0e32\u0e19 \u00b7 RTGS: ran ahan",
   "cls": "\u0e23\u0e49\u0e32\u0e19",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e1b\u0e34\u0e14\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "r\u00e1an-aa-h\u01cean p\u00f2oet l\u00e1eo",
   "exGloss": "Rumah makannya sudah buka.",
   "note": ""
  },
  {
   "id": "v284",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 6,
   "th": "\u0e0a\u0e32\u0e22\u0e2b\u0e32\u0e14",
   "audio": "\u0e0a\u0e32\u0e22\u0e2b\u0e32\u0e14",
   "phon": "chaai-h\u00e0at",
   "rom": "chaihat",
   "freq": 3,
   "gloss": "pantai",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e2b\u0e48\u0e07 \u00b7 RTGS: chaihat",
   "cls": "\u0e41\u0e2b\u0e48\u0e07",
   "exTh": "\u0e0a\u0e32\u0e22\u0e2b\u0e32\u0e14\u0e2a\u0e27\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "chaai-h\u00e0at s\u01d4ai m\u00e2ak",
   "exGloss": "Pantainya sangat indah.",
   "note": ""
  },
  {
   "id": "v285",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e20\u0e39\u0e40\u0e02\u0e32",
   "audio": "\u0e20\u0e39\u0e40\u0e02\u0e32",
   "phon": "phuu-kh\u01ceo",
   "rom": "phukhao",
   "freq": 3,
   "gloss": "gunung",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e39\u0e01 \u00b7 RTGS: phukhao",
   "cls": "\u0e25\u0e39\u0e01",
   "exTh": "\u0e20\u0e39\u0e40\u0e02\u0e32\u0e2a\u0e39\u0e07\u0e21\u0e32\u0e01",
   "exPhon": "phuu-kh\u01ceo s\u01d4ung m\u00e2ak",
   "exGloss": "Gunungnya sangat tinggi.",
   "note": ""
  },
  {
   "id": "v286",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e41\u0e21\u0e48\u0e19\u0e49\u0e33",
   "audio": "\u0e41\u0e21\u0e48\u0e19\u0e49\u0e33",
   "phon": "m\u00e2e-n\u00e1am",
   "rom": "maenam",
   "freq": 3,
   "gloss": "sungai",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e2a\u0e32\u0e22 \u00b7 RTGS: maenam",
   "cls": "\u0e2a\u0e32\u0e22",
   "exTh": "\u0e41\u0e21\u0e48\u0e19\u0e49\u0e33\u0e22\u0e32\u0e27\u0e21\u0e32\u0e01",
   "exPhon": "m\u00e2e-n\u00e1am yaao m\u00e2ak",
   "exGloss": "Sungainya sangat panjang.",
   "note": "Harfiahnya 'ibu air'."
  },
  {
   "id": "v287",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e17\u0e30\u0e40\u0e25",
   "audio": "\u0e17\u0e30\u0e40\u0e25",
   "phon": "th\u00e1-lee",
   "rom": "thale",
   "freq": 2,
   "gloss": "laut",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: thale",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e0a\u0e2d\u0e1a\u0e17\u0e30\u0e40\u0e25",
   "exPhon": "ph\u01d2m ch\u00e2awp th\u00e1-lee",
   "exGloss": "Saya suka laut.",
   "note": ""
  },
  {
   "id": "v288",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e40\u0e21\u0e37\u0e2d\u0e07",
   "audio": "\u0e40\u0e21\u0e37\u0e2d\u0e07",
   "phon": "mueang",
   "rom": "mueang",
   "freq": 2,
   "gloss": "kota",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e21\u0e37\u0e2d\u0e07 \u00b7 RTGS: mueang",
   "cls": "\u0e40\u0e21\u0e37\u0e2d\u0e07",
   "exTh": "\u0e40\u0e21\u0e37\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e0d\u0e48",
   "exPhon": "mueang n\u00edi y\u00e0i",
   "exGloss": "Kota ini besar.",
   "note": ""
  },
  {
   "id": "v289",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 6,
   "th": "\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19",
   "audio": "\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19",
   "phon": "m\u00f9u-b\u00e2an",
   "rom": "muban",
   "freq": 3,
   "gloss": "kampung, desa",
   "alt": [
    "desa"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e2b\u0e48\u0e07 \u00b7 RTGS: muban",
   "cls": "\u0e41\u0e2b\u0e48\u0e07",
   "exTh": "\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25",
   "exPhon": "m\u00f9u-b\u00e2an y\u00f9u klai",
   "exGloss": "Kampungnya jauh.",
   "note": ""
  },
  {
   "id": "v290",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e2a\u0e19\u0e32\u0e21\u0e1a\u0e34\u0e19",
   "audio": "\u0e2a\u0e19\u0e32\u0e21\u0e1a\u0e34\u0e19",
   "phon": "s\u00e0-n\u01ceam-bin",
   "rom": "sanambin",
   "freq": 2,
   "gloss": "bandar udara",
   "alt": [
    "bandara"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e2b\u0e48\u0e07 \u00b7 RTGS: sanambin",
   "cls": "\u0e41\u0e2b\u0e48\u0e07",
   "exTh": "\u0e44\u0e1b\u0e2a\u0e19\u0e32\u0e21\u0e1a\u0e34\u0e19\u0e01\u0e35\u0e48\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
   "exPhon": "pai s\u00e0-n\u01ceam-bin k\u00eci ch\u00fba-moong",
   "exGloss": "Ke bandara berapa jam?",
   "note": ""
  },
  {
   "id": "v291",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e2b\u0e49\u0e32\u0e07",
   "audio": "\u0e2b\u0e49\u0e32\u0e07",
   "phon": "h\u00e2ang",
   "rom": "hang",
   "freq": 2,
   "gloss": "pusat perbelanjaan",
   "alt": [
    "mal"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e2b\u0e49\u0e32\u0e07 \u00b7 RTGS: hang",
   "cls": "\u0e2b\u0e49\u0e32\u0e07",
   "exTh": "\u0e2b\u0e49\u0e32\u0e07\u0e40\u0e1b\u0e34\u0e14\u0e2a\u0e34\u0e1a\u0e42\u0e21\u0e07",
   "exPhon": "h\u00e2ang p\u00f2oet s\u00ecp moong",
   "exGloss": "Malnya buka jam sepuluh.",
   "note": ""
  },
  {
   "id": "v292",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e21\u0e31\u0e2a\u0e22\u0e34\u0e14",
   "audio": "\u0e21\u0e31\u0e2a\u0e22\u0e34\u0e14",
   "phon": "m\u00e1t-s\u00e0-y\u00edt",
   "rom": "matsayit",
   "freq": 2,
   "gloss": "masjid",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e2b\u0e48\u0e07 \u00b7 RTGS: matsayit",
   "cls": "\u0e41\u0e2b\u0e48\u0e07",
   "exTh": "\u0e21\u0e31\u0e2a\u0e22\u0e34\u0e14\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49\u0e15\u0e25\u0e32\u0e14",
   "exPhon": "m\u00e1t-s\u00e0-y\u00edt y\u00f9u kl\u00e2i t\u00e0-l\u00e0at",
   "exGloss": "Masjidnya dekat pasar.",
   "note": "Huruf \u0e2a di sini dibaca dua kali: menutup suku kata pertama dan membuka suku kata kedua. Karena itu lafalnya tiga suku kata, sedangkan tulisannya hanya dua."
  },
  {
   "id": "v293",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e17\u0e35\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19",
   "audio": "\u0e17\u0e35\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19",
   "phon": "th\u00eei-tham-ngaan",
   "rom": "thi thamngan",
   "freq": 2,
   "gloss": "tempat kerja",
   "alt": [
    "kantor"
   ],
   "detail": "nomina \u00b7 RTGS: thi thamngan",
   "cls": "",
   "exTh": "\u0e17\u0e35\u0e48\u0e17\u0e33\u0e07\u0e32\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21",
   "exPhon": "th\u00eei-tham-ngaan y\u00f9u klai m\u01cei",
   "exGloss": "Tempat kerjanya jauh tidak?",
   "note": ""
  },
  {
   "id": "v294",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d",
   "audio": "\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d",
   "phon": "muue-th\u01d4ue",
   "rom": "muethue",
   "freq": 1,
   "gloss": "telepon genggam",
   "alt": [
    "HP",
    "ponsel"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07 \u00b7 RTGS: muethue",
   "cls": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07",
   "exTh": "\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d\u0e1c\u0e21\u0e2b\u0e32\u0e22",
   "exPhon": "muue-th\u01d4ue ph\u01d2m h\u01ceai",
   "exGloss": "Telepon genggam saya hilang.",
   "note": "Harfiahnya 'tangan memegang'. Bentuk resminya \u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c\u0e21\u0e37\u0e2d\u0e16\u0e37\u0e2d."
  },
  {
   "id": "v295",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e01\u0e38\u0e0d\u0e41\u0e08",
   "audio": "\u0e01\u0e38\u0e0d\u0e41\u0e08",
   "phon": "kun-jae",
   "rom": "kunchae",
   "freq": 3,
   "gloss": "kunci",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e14\u0e2d\u0e01 \u00b7 RTGS: kunchae",
   "cls": "\u0e14\u0e2d\u0e01",
   "exTh": "\u0e01\u0e38\u0e0d\u0e41\u0e08\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19\u0e42\u0e15\u0e4a\u0e30",
   "exPhon": "kun-jae y\u00f9u bon t\u00f3",
   "exGloss": "Kuncinya ada di atas meja.",
   "note": ""
  },
  {
   "id": "v296",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e1b\u0e23\u0e30\u0e15\u0e39",
   "audio": "\u0e1b\u0e23\u0e30\u0e15\u0e39",
   "phon": "pr\u00e0-tuu",
   "rom": "pratu",
   "freq": 2,
   "gloss": "pintu",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e1a\u0e32\u0e19 \u00b7 RTGS: pratu",
   "cls": "\u0e1a\u0e32\u0e19",
   "exTh": "\u0e1b\u0e34\u0e14\u0e1b\u0e23\u0e30\u0e15\u0e39\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "p\u00ect pr\u00e0-tuu d\u00fbai khr\u00e1p",
   "exGloss": "Tolong tutup pintunya.",
   "note": ""
  },
  {
   "id": "v297",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e48\u0e32\u0e07",
   "audio": "\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e48\u0e32\u0e07",
   "phon": "n\u00e2a-t\u00e0ang",
   "rom": "natang",
   "freq": 3,
   "gloss": "jendela",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e1a\u0e32\u0e19 \u00b7 RTGS: natang",
   "cls": "\u0e1a\u0e32\u0e19",
   "exTh": "\u0e40\u0e1b\u0e34\u0e14\u0e2b\u0e19\u0e49\u0e32\u0e15\u0e48\u0e32\u0e07\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "p\u00f2oet n\u00e2a-t\u00e0ang n\u00e0awi",
   "exGloss": "Tolong buka jendelanya.",
   "note": ""
  },
  {
   "id": "v298",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e40\u0e15\u0e35\u0e22\u0e07",
   "audio": "\u0e40\u0e15\u0e35\u0e22\u0e07",
   "phon": "tiang",
   "rom": "tiang",
   "freq": 3,
   "gloss": "ranjang, tempat tidur",
   "alt": [
    "kasur"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e15\u0e35\u0e22\u0e07 \u00b7 RTGS: tiang",
   "cls": "\u0e40\u0e15\u0e35\u0e22\u0e07",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e21\u0e35\u0e2a\u0e2d\u0e07\u0e40\u0e15\u0e35\u0e22\u0e07",
   "exPhon": "h\u00e2awng n\u00edi mii s\u01ceawng tiang",
   "exGloss": "Kamar ini punya dua tempat tidur.",
   "note": ""
  },
  {
   "id": "v299",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e1c\u0e49\u0e32",
   "audio": "\u0e1c\u0e49\u0e32",
   "phon": "ph\u00e2a",
   "rom": "pha",
   "freq": 3,
   "gloss": "kain",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e1c\u0e37\u0e19 \u00b7 RTGS: pha",
   "cls": "\u0e1c\u0e37\u0e19",
   "exTh": "\u0e1c\u0e49\u0e32\u0e1c\u0e37\u0e19\u0e19\u0e35\u0e49\u0e2a\u0e27\u0e22",
   "exPhon": "ph\u00e2a ph\u01d4uen n\u00edi s\u01d4ai",
   "exGloss": "Kain ini indah.",
   "note": ""
  },
  {
   "id": "v300",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e23\u0e2d\u0e07\u0e40\u0e17\u0e49\u0e32",
   "audio": "\u0e23\u0e2d\u0e07\u0e40\u0e17\u0e49\u0e32",
   "phon": "raawng-th\u00e1o",
   "rom": "rongthao",
   "freq": 2,
   "gloss": "sepatu",
   "alt": [
    "alas kaki"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e39\u0e48 \u00b7 RTGS: rongthao",
   "cls": "\u0e04\u0e39\u0e48",
   "exTh": "\u0e16\u0e2d\u0e14\u0e23\u0e2d\u0e07\u0e40\u0e17\u0e49\u0e32\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "th\u00e0awt raawng-th\u00e1o k\u00e0awn khr\u00e1p",
   "exGloss": "Lepas sepatunya dulu.",
   "note": "Melepas sepatu sebelum masuk rumah dan kuil adalah kebiasaan yang diharapkan di Thailand."
  },
  {
   "id": "v301",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e01\u0e32\u0e07\u0e40\u0e01\u0e07",
   "audio": "\u0e01\u0e32\u0e07\u0e40\u0e01\u0e07",
   "phon": "kaang-keeng",
   "rom": "kangkeng",
   "freq": 3,
   "gloss": "celana",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: kangkeng",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e01\u0e32\u0e07\u0e40\u0e01\u0e07\u0e15\u0e31\u0e27\u0e19\u0e35\u0e49\u0e41\u0e1e\u0e07",
   "exPhon": "kaang-keeng tua n\u00edi phaeng",
   "exGloss": "Celana ini mahal.",
   "note": ""
  },
  {
   "id": "v302",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 6,
   "th": "\u0e2b\u0e21\u0e27\u0e01",
   "audio": "\u0e2b\u0e21\u0e27\u0e01",
   "phon": "m\u00f9ak",
   "rom": "muak",
   "freq": 3,
   "gloss": "topi",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e43\u0e1a \u00b7 RTGS: muak",
   "cls": "\u0e43\u0e1a",
   "exTh": "\u0e43\u0e2a\u0e48\u0e2b\u0e21\u0e27\u0e01\u0e14\u0e49\u0e27\u0e22",
   "exPhon": "s\u00e0i m\u00f9ak d\u00fbai",
   "exGloss": "Pakai topi juga.",
   "note": ""
  },
  {
   "id": "v303",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32",
   "audio": "\u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32",
   "phon": "naa-l\u00ed-kaa",
   "rom": "nalika",
   "freq": 3,
   "gloss": "jam (alat)",
   "alt": [
    "arloji"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e23\u0e37\u0e2d\u0e19 \u00b7 RTGS: nalika",
   "cls": "\u0e40\u0e23\u0e37\u0e2d\u0e19",
   "exTh": "\u0e19\u0e32\u0e2c\u0e34\u0e01\u0e32\u0e40\u0e23\u0e37\u0e2d\u0e19\u0e19\u0e35\u0e49\u0e2a\u0e27\u0e22",
   "exPhon": "naa-l\u00ed-kaa ruuean n\u00edi s\u01d4ai",
   "exGloss": "Jam tangan ini bagus.",
   "note": "Salah satu dari sedikit kata sehari-hari yang memakai huruf \u0e2c."
  },
  {
   "id": "v304",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e1b\u0e32\u0e01\u0e01\u0e32",
   "audio": "\u0e1b\u0e32\u0e01\u0e01\u0e32",
   "phon": "p\u00e0ak-kaa",
   "rom": "pakka",
   "freq": 3,
   "gloss": "pulpen",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e14\u0e49\u0e32\u0e21 \u00b7 RTGS: pakka",
   "cls": "\u0e14\u0e49\u0e32\u0e21",
   "exTh": "\u0e02\u0e2d\u0e22\u0e37\u0e21\u0e1b\u0e32\u0e01\u0e01\u0e32\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "kh\u01ceaw yuuem p\u00e0ak-kaa n\u00e0awi",
   "exGloss": "Boleh pinjam pulpennya?",
   "note": ""
  },
  {
   "id": "v305",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e01\u0e23\u0e30\u0e14\u0e32\u0e29",
   "audio": "\u0e01\u0e23\u0e30\u0e14\u0e32\u0e29",
   "phon": "kr\u00e0-d\u00e0at",
   "rom": "kradat",
   "freq": 3,
   "gloss": "kertas",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e1c\u0e48\u0e19 \u00b7 RTGS: kradat",
   "cls": "\u0e41\u0e1c\u0e48\u0e19",
   "exTh": "\u0e02\u0e2d\u0e01\u0e23\u0e30\u0e14\u0e32\u0e29\u0e41\u0e1c\u0e48\u0e19\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "exPhon": "kh\u01ceaw kr\u00e0-d\u00e0at ph\u00e0en n\u00f9eng",
   "exGloss": "Minta selembar kertas.",
   "note": ""
  },
  {
   "id": "v306",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 3,
   "th": "\u0e02\u0e2d\u0e07",
   "audio": "\u0e02\u0e2d\u0e07",
   "phon": "kh\u01ceawng",
   "rom": "khong",
   "freq": 1,
   "gloss": "barang; milik",
   "alt": [
    "punya"
   ],
   "detail": "nomina \u00b7 RTGS: khong",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e07\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19",
   "exPhon": "kh\u01ceawng ph\u01d2m y\u00f9u n\u01cei",
   "exGloss": "Di mana barang saya?",
   "note": "Juga menjadi penanda kepemilikan: \u0e1a\u0e49\u0e32\u0e19\u0e02\u0e2d\u0e07\u0e1c\u0e21 ('rumah saya'), meskipun \u0e02\u0e2d\u0e07 sering dihilangkan."
  },
  {
   "id": "v307",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e44\u0e1f",
   "audio": "\u0e44\u0e1f",
   "phon": "fai",
   "rom": "fai",
   "freq": 2,
   "gloss": "api; lampu, listrik",
   "alt": [
    "lampu"
   ],
   "detail": "nomina \u00b7 RTGS: fai",
   "cls": "",
   "exTh": "\u0e1b\u0e34\u0e14\u0e44\u0e1f\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "p\u00ect fai d\u00fbai khr\u00e1p",
   "exGloss": "Tolong matikan lampunya.",
   "note": ""
  },
  {
   "id": "v308",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 6,
   "th": "\u0e23\u0e48\u0e21",
   "audio": "\u0e23\u0e48\u0e21",
   "phon": "r\u00f4m",
   "rom": "rom",
   "freq": 3,
   "gloss": "payung",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e31\u0e19 \u00b7 RTGS: rom",
   "cls": "\u0e04\u0e31\u0e19",
   "exTh": "\u0e1d\u0e19\u0e15\u0e01\u0e40\u0e2d\u0e32\u0e23\u0e48\u0e21\u0e44\u0e1b\u0e14\u0e49\u0e27\u0e22",
   "exPhon": "f\u01d2n t\u00f2k ao r\u00f4m pai d\u00fbai",
   "exGloss": "Hujan, bawa payung juga.",
   "note": ""
  },
  {
   "id": "v309",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e23\u0e39\u0e1b",
   "audio": "\u0e23\u0e39\u0e1b",
   "phon": "r\u00fbup",
   "rom": "rup",
   "freq": 2,
   "gloss": "gambar, foto",
   "alt": [
    "foto"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e23\u0e39\u0e1b \u00b7 RTGS: rup",
   "cls": "\u0e23\u0e39\u0e1b",
   "exTh": "\u0e16\u0e48\u0e32\u0e22\u0e23\u0e39\u0e1b\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "th\u00e0ai-r\u00fbup d\u00e2i m\u01cei khr\u00e1p",
   "exGloss": "Boleh memotret?",
   "note": ""
  },
  {
   "id": "v310",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e2b\u0e19\u0e31\u0e07",
   "audio": "\u0e2b\u0e19\u0e31\u0e07",
   "phon": "n\u01ceng",
   "rom": "nang",
   "freq": 2,
   "gloss": "film; kulit",
   "alt": [
    "film"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u00b7 RTGS: nang",
   "cls": "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07",
   "exTh": "\u0e2b\u0e19\u0e31\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e14\u0e35",
   "exPhon": "n\u01ceng r\u00fbeang n\u00edi dii",
   "exGloss": "Film ini bagus.",
   "note": ""
  },
  {
   "id": "v311",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e40\u0e1e\u0e25\u0e07",
   "audio": "\u0e40\u0e1e\u0e25\u0e07",
   "phon": "phleeng",
   "rom": "phleng",
   "freq": 2,
   "gloss": "lagu",
   "alt": [
    "musik"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e1e\u0e25\u0e07 \u00b7 RTGS: phleng",
   "cls": "\u0e40\u0e1e\u0e25\u0e07",
   "exTh": "\u0e40\u0e1e\u0e25\u0e07\u0e19\u0e35\u0e49\u0e40\u0e1e\u0e23\u0e32\u0e30\u0e21\u0e32\u0e01",
   "exPhon": "phleeng n\u00edi phr\u00e1w m\u00e2ak",
   "exGloss": "Lagu ini sangat merdu.",
   "note": "\u0e40\u0e1e\u0e23\u0e32\u0e30 bermakna 'merdu' di sini; kata yang sama juga berarti 'karena'."
  },
  {
   "id": "v312",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e40\u0e14\u0e37\u0e2d\u0e19",
   "audio": "\u0e40\u0e14\u0e37\u0e2d\u0e19",
   "phon": "duean",
   "rom": "duean",
   "freq": 1,
   "gloss": "bulan (waktu)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e14\u0e37\u0e2d\u0e19 \u00b7 RTGS: duean",
   "cls": "\u0e40\u0e14\u0e37\u0e2d\u0e19",
   "exTh": "\u0e1c\u0e21\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2a\u0e2d\u0e07\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "ph\u01d2m rian s\u01ceawng duean l\u00e1eo",
   "exGloss": "Saya sudah belajar dua bulan.",
   "note": ""
  },
  {
   "id": "v313",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e1b\u0e35",
   "audio": "\u0e1b\u0e35",
   "phon": "pii",
   "rom": "pi",
   "freq": 1,
   "gloss": "tahun",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e1b\u0e35 \u00b7 RTGS: pi",
   "cls": "\u0e1b\u0e35",
   "exTh": "\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e2a\u0e32\u0e21\u0e1b\u0e35",
   "exPhon": "ph\u01d2m y\u00f9u th\u00eei-n\u00eei s\u01ceam pii",
   "exGloss": "Saya tinggal di sini tiga tahun.",
   "note": ""
  },
  {
   "id": "v314",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e19\u0e32\u0e17\u0e35",
   "audio": "\u0e19\u0e32\u0e17\u0e35",
   "phon": "naa-thii",
   "rom": "nathi",
   "freq": 2,
   "gloss": "menit",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e19\u0e32\u0e17\u0e35 \u00b7 RTGS: nathi",
   "cls": "\u0e19\u0e32\u0e17\u0e35",
   "exTh": "\u0e23\u0e2d\u0e2b\u0e49\u0e32\u0e19\u0e32\u0e17\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "raaw h\u00e2a naa-thii khr\u00e1p",
   "exGloss": "Tunggu lima menit.",
   "note": ""
  },
  {
   "id": "v315",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e40\u0e0a\u0e49\u0e32",
   "audio": "\u0e40\u0e0a\u0e49\u0e32",
   "phon": "ch\u00e1o",
   "rom": "chao",
   "freq": 2,
   "gloss": "pagi",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: chao",
   "cls": "",
   "exTh": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e0a\u0e49\u0e32\u0e1c\u0e21\u0e44\u0e1b",
   "exPhon": "phr\u00fbng-n\u00edi ch\u00e1o ph\u01d2m pai",
   "exGloss": "Besok pagi saya pergi.",
   "note": ""
  },
  {
   "id": "v316",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 5,
   "th": "\u0e1a\u0e48\u0e32\u0e22",
   "audio": "\u0e1a\u0e48\u0e32\u0e22",
   "phon": "b\u00e0ai",
   "rom": "bai",
   "freq": 2,
   "gloss": "siang (sesudah tengah hari)",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: bai",
   "cls": "",
   "exTh": "\u0e1a\u0e48\u0e32\u0e22\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e27\u0e48\u0e32\u0e07",
   "exPhon": "b\u00e0ai n\u00edi ph\u01d2m w\u00e2ang",
   "exGloss": "Siang ini saya luang.",
   "note": ""
  },
  {
   "id": "v317",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 5,
   "th": "\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",
   "audio": "\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",
   "phon": "th\u00eeang",
   "rom": "thiang",
   "freq": 2,
   "gloss": "tengah hari",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: thiang",
   "cls": "",
   "exTh": "\u0e40\u0e08\u0e2d\u0e01\u0e31\u0e19\u0e15\u0e2d\u0e19\u0e40\u0e17\u0e35\u0e48\u0e22\u0e07",
   "exPhon": "jooe kan taawn th\u00eeang",
   "exGloss": "Bertemu pada tengah hari.",
   "note": ""
  },
  {
   "id": "v318",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 6,
   "th": "\u0e04\u0e48\u0e33",
   "audio": "\u0e04\u0e48\u0e33",
   "phon": "kh\u00e2m",
   "rom": "kham",
   "freq": 3,
   "gloss": "petang, malam",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: kham",
   "cls": "",
   "exTh": "\u0e15\u0e2d\u0e19\u0e04\u0e48\u0e33\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e40\u0e22\u0e47\u0e19",
   "exPhon": "taawn kh\u00e2m aa-k\u00e0at yen",
   "exGloss": "Pada malam hari cuacanya sejuk.",
   "note": ""
  },
  {
   "id": "v319",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 4,
   "th": "\u0e22\u0e35\u0e48\u0e2a\u0e34\u0e1a",
   "audio": "\u0e22\u0e35\u0e48\u0e2a\u0e34\u0e1a",
   "phon": "y\u00eei-s\u00ecp",
   "rom": "yisip",
   "freq": 2,
   "gloss": "dua puluh",
   "alt": [
    "20"
   ],
   "detail": "angka \u00b7 RTGS: yisip",
   "cls": "",
   "exTh": "\u0e22\u0e35\u0e48\u0e2a\u0e34\u0e1a\u0e1a\u0e32\u0e17\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "y\u00eei-s\u00ecp b\u00e0at khr\u00e1p",
   "exGloss": "Dua puluh baht.",
   "note": "Perhatikan 20 memakai \u0e22\u0e35\u0e48, bukan \u0e2a\u0e2d\u0e07. Hanya angka 20 yang berperilaku begitu."
  },
  {
   "id": "v320",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 4,
   "th": "\u0e1e\u0e31\u0e19",
   "audio": "\u0e1e\u0e31\u0e19",
   "phon": "phan",
   "rom": "phan",
   "freq": 2,
   "gloss": "ribu",
   "alt": [
    "seribu"
   ],
   "detail": "angka \u00b7 RTGS: phan",
   "cls": "",
   "exTh": "\u0e2a\u0e2d\u0e07\u0e1e\u0e31\u0e19\u0e1a\u0e32\u0e17",
   "exPhon": "s\u01ceawng phan b\u00e0at",
   "exGloss": "dua ribu baht",
   "note": ""
  },
  {
   "id": "v321",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 6,
   "th": "\u0e2b\u0e21\u0e37\u0e48\u0e19",
   "audio": "\u0e2b\u0e21\u0e37\u0e48\u0e19",
   "phon": "m\u00f9uen",
   "rom": "muen",
   "freq": 3,
   "gloss": "sepuluh ribu",
   "alt": [],
   "detail": "angka \u00b7 RTGS: muen",
   "cls": "",
   "exTh": "\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e2b\u0e21\u0e37\u0e48\u0e19\u0e1a\u0e32\u0e17",
   "exPhon": "n\u00f9eng m\u00f9uen b\u00e0at",
   "exGloss": "sepuluh ribu baht",
   "note": "Bahasa Thailand punya kata tersendiri untuk 10.000 (\u0e2b\u0e21\u0e37\u0e48\u0e19) dan 100.000 (\u0e41\u0e2a\u0e19), berbeda dari bahasa Indonesia yang menyusunnya dari 'puluh' dan 'ratus'."
  },
  {
   "id": "v322",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 6,
   "th": "\u0e41\u0e2a\u0e19",
   "audio": "\u0e41\u0e2a\u0e19",
   "phon": "s\u01ceen",
   "rom": "saen",
   "freq": 3,
   "gloss": "seratus ribu",
   "alt": [],
   "detail": "angka \u00b7 RTGS: saen",
   "cls": "",
   "exTh": "\u0e23\u0e32\u0e04\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e2a\u0e19\u0e1a\u0e32\u0e17",
   "exPhon": "raa-khaa n\u00f9eng s\u01ceen b\u00e0at",
   "exGloss": "Harganya seratus ribu baht.",
   "note": ""
  },
  {
   "id": "v323",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 6,
   "th": "\u0e25\u0e49\u0e32\u0e19",
   "audio": "\u0e25\u0e49\u0e32\u0e19",
   "phon": "l\u00e1an",
   "rom": "lan",
   "freq": 3,
   "gloss": "juta",
   "alt": [],
   "detail": "angka \u00b7 RTGS: lan",
   "cls": "",
   "exTh": "\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e25\u0e49\u0e32\u0e19\u0e1a\u0e32\u0e17",
   "exPhon": "n\u00f9eng l\u00e1an b\u00e0at",
   "exGloss": "satu juta baht",
   "note": ""
  },
  {
   "id": "v324",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 5,
   "th": "\u0e04\u0e23\u0e36\u0e48\u0e07",
   "audio": "\u0e04\u0e23\u0e36\u0e48\u0e07",
   "phon": "khr\u00fbeng",
   "rom": "khrueng",
   "freq": 2,
   "gloss": "setengah",
   "alt": [
    "separuh"
   ],
   "detail": "angka \u00b7 RTGS: khrueng",
   "cls": "",
   "exTh": "\u0e04\u0e23\u0e36\u0e48\u0e07\u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
   "exPhon": "khr\u00fbeng ch\u00fba-moong",
   "exGloss": "setengah jam",
   "note": ""
  },
  {
   "id": "v325",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e02\u0e19\u0e21",
   "audio": "\u0e02\u0e19\u0e21",
   "phon": "kh\u00e0-n\u01d2m",
   "rom": "khanom",
   "freq": 2,
   "gloss": "kue, penganan",
   "alt": [
    "jajanan"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e0a\u0e34\u0e49\u0e19 \u00b7 RTGS: khanom",
   "cls": "\u0e0a\u0e34\u0e49\u0e19",
   "exTh": "\u0e02\u0e19\u0e21\u0e19\u0e35\u0e49\u0e2b\u0e27\u0e32\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "kh\u00e0-n\u01d2m n\u00edi w\u01cean m\u00e2ak",
   "exGloss": "Kue ini sangat manis.",
   "note": ""
  },
  {
   "id": "v326",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e02\u0e19\u0e21\u0e1b\u0e31\u0e07",
   "audio": "\u0e02\u0e19\u0e21\u0e1b\u0e31\u0e07",
   "phon": "kh\u00e0-n\u01d2m-pang",
   "rom": "khanompang",
   "freq": 2,
   "gloss": "roti",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e1c\u0e48\u0e19 \u00b7 RTGS: khanompang",
   "cls": "\u0e41\u0e1c\u0e48\u0e19",
   "exTh": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e02\u0e19\u0e21\u0e1b\u0e31\u0e07\u0e15\u0e2d\u0e19\u0e40\u0e0a\u0e49\u0e32",
   "exPhon": "ph\u01d2m kin kh\u00e0-n\u01d2m-pang taawn-ch\u00e1o",
   "exGloss": "Saya makan roti pagi hari.",
   "note": "Harfiahnya 'kue pang'. \u0e1b\u0e31\u0e07 diduga berasal dari kata Portugis p\u00e3o, sebagaimana beberapa nama makanan Thai lain yang datang lewat pedagang Portugis."
  },
  {
   "id": "v327",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e19\u0e21",
   "audio": "\u0e19\u0e21",
   "phon": "nom",
   "rom": "nom",
   "freq": 2,
   "gloss": "susu",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e01\u0e25\u0e48\u0e2d\u0e07 \u00b7 RTGS: nom",
   "cls": "\u0e01\u0e25\u0e48\u0e2d\u0e07",
   "exTh": "\u0e02\u0e2d\u0e19\u0e21\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27",
   "exPhon": "kh\u01ceaw nom n\u00f9eng k\u00e2eo",
   "exGloss": "Minta satu gelas susu.",
   "note": ""
  },
  {
   "id": "v328",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25",
   "audio": "\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25",
   "phon": "n\u00e1am-taan",
   "rom": "namtan",
   "freq": 2,
   "gloss": "gula",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: namtan",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e43\u0e2a\u0e48\u0e19\u0e49\u0e33\u0e15\u0e32\u0e25\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "m\u00e2i s\u00e0i n\u00e1am-taan khr\u00e1p",
   "exGloss": "Tanpa gula, ya.",
   "note": ""
  },
  {
   "id": "v329",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 5,
   "th": "\u0e40\u0e01\u0e25\u0e37\u0e2d",
   "audio": "\u0e40\u0e01\u0e25\u0e37\u0e2d",
   "phon": "kluea",
   "rom": "kluea",
   "freq": 3,
   "gloss": "garam",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: kluea",
   "cls": "",
   "exTh": "\u0e43\u0e2a\u0e48\u0e40\u0e01\u0e25\u0e37\u0e2d\u0e19\u0e34\u0e14\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "s\u00e0i kluea n\u00edt-n\u00e0awi",
   "exGloss": "Tambahkan sedikit garam.",
   "note": ""
  },
  {
   "id": "v330",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e1e\u0e23\u0e34\u0e01",
   "audio": "\u0e1e\u0e23\u0e34\u0e01",
   "phon": "phr\u00edk",
   "rom": "phrik",
   "freq": 2,
   "gloss": "cabai",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e21\u0e47\u0e14 \u00b7 RTGS: phrik",
   "cls": "\u0e40\u0e21\u0e47\u0e14",
   "exTh": "\u0e44\u0e21\u0e48\u0e43\u0e2a\u0e48\u0e1e\u0e23\u0e34\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "m\u00e2i s\u00e0i phr\u00edk khr\u00e1p",
   "exGloss": "Tanpa cabai, ya.",
   "note": "Permintaan yang perlu dihafal bagi yang tidak tahan pedas."
  },
  {
   "id": "v331",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 6,
   "th": "\u0e01\u0e23\u0e30\u0e40\u0e17\u0e35\u0e22\u0e21",
   "audio": "\u0e01\u0e23\u0e30\u0e40\u0e17\u0e35\u0e22\u0e21",
   "phon": "kr\u00e0-thiam",
   "rom": "krathiam",
   "freq": 3,
   "gloss": "bawang putih",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e2b\u0e31\u0e27 \u00b7 RTGS: krathiam",
   "cls": "\u0e2b\u0e31\u0e27",
   "exTh": "\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e19\u0e35\u0e49\u0e21\u0e35\u0e01\u0e23\u0e30\u0e40\u0e17\u0e35\u0e22\u0e21",
   "exPhon": "aa-h\u01cean n\u00edi mii kr\u00e0-thiam",
   "exGloss": "Makanan ini memakai bawang putih.",
   "note": ""
  },
  {
   "id": "v332",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 5,
   "th": "\u0e21\u0e30\u0e19\u0e32\u0e27",
   "audio": "\u0e21\u0e30\u0e19\u0e32\u0e27",
   "phon": "m\u00e1-naao",
   "rom": "manao",
   "freq": 3,
   "gloss": "jeruk nipis",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e39\u0e01 \u00b7 RTGS: manao",
   "cls": "\u0e25\u0e39\u0e01",
   "exTh": "\u0e43\u0e2a\u0e48\u0e21\u0e30\u0e19\u0e32\u0e27\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "s\u00e0i m\u00e1-naao d\u00fbai khr\u00e1p",
   "exGloss": "Tambahkan jeruk nipis juga.",
   "note": ""
  },
  {
   "id": "v333",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e21\u0e30\u0e21\u0e48\u0e27\u0e07",
   "audio": "\u0e21\u0e30\u0e21\u0e48\u0e27\u0e07",
   "phon": "m\u00e1-m\u00fbang",
   "rom": "mamuang",
   "freq": 2,
   "gloss": "mangga",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e39\u0e01 \u00b7 RTGS: mamuang",
   "cls": "\u0e25\u0e39\u0e01",
   "exTh": "\u0e02\u0e49\u0e32\u0e27\u0e40\u0e2b\u0e19\u0e35\u0e22\u0e27\u0e21\u0e30\u0e21\u0e48\u0e27\u0e07\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "kh\u00e2ao-n\u01d0ao m\u00e1-m\u00fbang \u00e0-r\u00e0awi m\u00e2ak",
   "exGloss": "Ketan mangga sangat enak.",
   "note": ""
  },
  {
   "id": "v334",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 6,
   "th": "\u0e2a\u0e31\u0e1a\u0e1b\u0e30\u0e23\u0e14",
   "audio": "\u0e2a\u0e31\u0e1a\u0e1b\u0e30\u0e23\u0e14",
   "phon": "s\u00e0p-p\u00e0-r\u00f3t",
   "rom": "sapparot",
   "freq": 3,
   "gloss": "nanas",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e39\u0e01 \u00b7 RTGS: sapparot",
   "cls": "\u0e25\u0e39\u0e01",
   "exTh": "\u0e2a\u0e31\u0e1a\u0e1b\u0e30\u0e23\u0e14\u0e2b\u0e27\u0e32\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "s\u00e0p-p\u00e0-r\u00f3t w\u01cean m\u00e2ak",
   "exGloss": "Nanasnya sangat manis.",
   "note": ""
  },
  {
   "id": "v335",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 5,
   "th": "\u0e41\u0e15\u0e07\u0e42\u0e21",
   "audio": "\u0e41\u0e15\u0e07\u0e42\u0e21",
   "phon": "taeng-moo",
   "rom": "taengmo",
   "freq": 3,
   "gloss": "semangka",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e39\u0e01 \u00b7 RTGS: taengmo",
   "cls": "\u0e25\u0e39\u0e01",
   "exTh": "\u0e1c\u0e21\u0e0a\u0e2d\u0e1a\u0e41\u0e15\u0e07\u0e42\u0e21",
   "exPhon": "ph\u01d2m ch\u00e2awp taeng-moo",
   "exGloss": "Saya suka semangka.",
   "note": ""
  },
  {
   "id": "v336",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 6,
   "th": "\u0e2d\u0e07\u0e38\u0e48\u0e19",
   "audio": "\u0e2d\u0e07\u0e38\u0e48\u0e19",
   "phon": "\u00e0-ng\u00f9n",
   "rom": "angun",
   "freq": 3,
   "gloss": "anggur",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e25\u0e39\u0e01 \u00b7 RTGS: angun",
   "cls": "\u0e25\u0e39\u0e01",
   "exTh": "\u0e2d\u0e07\u0e38\u0e48\u0e19\u0e25\u0e39\u0e01\u0e19\u0e35\u0e49\u0e40\u0e1b\u0e23\u0e35\u0e49\u0e22\u0e27",
   "exPhon": "\u00e0-ng\u00f9n l\u00fbuk n\u00edi pr\u00eeao",
   "exGloss": "Anggur ini asam.",
   "note": "Contoh aksara nam dengan pemimpin \u0e2d: \u0e07\u0e38\u0e48\u0e19 bernada rendah, bukan turun."
  },
  {
   "id": "v337",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e01\u0e38\u0e49\u0e07",
   "audio": "\u0e01\u0e38\u0e49\u0e07",
   "phon": "k\u00fbng",
   "rom": "kung",
   "freq": 2,
   "gloss": "udang",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: kung",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e1c\u0e21\u0e41\u0e1e\u0e49\u0e01\u0e38\u0e49\u0e07",
   "exPhon": "ph\u01d2m ph\u00e1e k\u00fbng",
   "exGloss": "Saya alergi udang.",
   "note": "\u0e41\u0e1e\u0e49 (ph\u00e1e) berarti 'alergi' sekaligus 'kalah'. Kalimat ini penting bagi yang punya alergi makanan."
  },
  {
   "id": "v338",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 5,
   "th": "\u0e1b\u0e39",
   "audio": "\u0e1b\u0e39",
   "phon": "puu",
   "rom": "pu",
   "freq": 3,
   "gloss": "kepiting",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: pu",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e1b\u0e39\u0e15\u0e31\u0e27\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e0d\u0e48\u0e21\u0e32\u0e01",
   "exPhon": "puu tua n\u00edi y\u00e0i m\u00e2ak",
   "exGloss": "Kepiting ini sangat besar.",
   "note": ""
  },
  {
   "id": "v339",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e15\u0e49\u0e21\u0e22\u0e33",
   "audio": "\u0e15\u0e49\u0e21\u0e22\u0e33",
   "phon": "t\u00f4m-yam",
   "rom": "tomyam",
   "freq": 2,
   "gloss": "tom yam (sup asam pedas)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e16\u0e49\u0e27\u0e22 \u00b7 RTGS: tomyam",
   "cls": "\u0e16\u0e49\u0e27\u0e22",
   "exTh": "\u0e15\u0e49\u0e21\u0e22\u0e33\u0e40\u0e1c\u0e47\u0e14\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "t\u00f4m-yam ph\u00e8t m\u01cei khr\u00e1p",
   "exGloss": "Tom yamnya pedas tidak?",
   "note": ""
  },
  {
   "id": "v340",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e2a\u0e49\u0e21\u0e15\u0e33",
   "audio": "\u0e2a\u0e49\u0e21\u0e15\u0e33",
   "phon": "s\u00f4m-tam",
   "rom": "somtam",
   "freq": 2,
   "gloss": "som tam (salad pepaya muda)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e08\u0e32\u0e19 \u00b7 RTGS: somtam",
   "cls": "\u0e08\u0e32\u0e19",
   "exTh": "\u0e2a\u0e49\u0e21\u0e15\u0e33\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "s\u00f4m-tam m\u00e2i ph\u00e8t khr\u00e1p",
   "exGloss": "Som tam yang tidak pedas, ya.",
   "note": ""
  },
  {
   "id": "v341",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 5,
   "th": "\u0e41\u0e01\u0e07",
   "audio": "\u0e41\u0e01\u0e07",
   "phon": "kaeng",
   "rom": "kaeng",
   "freq": 2,
   "gloss": "gulai, kari",
   "alt": [
    "kari"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e16\u0e49\u0e27\u0e22 \u00b7 RTGS: kaeng",
   "cls": "\u0e16\u0e49\u0e27\u0e22",
   "exTh": "\u0e41\u0e01\u0e07\u0e19\u0e35\u0e49\u0e40\u0e1c\u0e47\u0e14\u0e21\u0e32\u0e01",
   "exPhon": "kaeng n\u00edi ph\u00e8t m\u00e2ak",
   "exGloss": "Gulai ini sangat pedas.",
   "note": ""
  },
  {
   "id": "v342",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27",
   "audio": "\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27",
   "phon": "k\u01d4ai-t\u01d0ao",
   "rom": "kuaitiao",
   "freq": 2,
   "gloss": "mi kuah, kuetiau",
   "alt": [
    "mi"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e0a\u0e32\u0e21 \u00b7 RTGS: kuaitiao",
   "cls": "\u0e0a\u0e32\u0e21",
   "exTh": "\u0e02\u0e2d\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e0a\u0e32\u0e21",
   "exPhon": "kh\u01ceaw k\u01d4ai-t\u01d0ao n\u00f9eng chaam",
   "exGloss": "Minta satu mangkuk mi kuah.",
   "note": "Salah satu dari sedikit kata yang memakai mai chattawa dua kali."
  },
  {
   "id": "v343",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 5,
   "th": "\u0e02\u0e49\u0e32\u0e27\u0e40\u0e2b\u0e19\u0e35\u0e22\u0e27",
   "audio": "\u0e02\u0e49\u0e32\u0e27\u0e40\u0e2b\u0e19\u0e35\u0e22\u0e27",
   "phon": "kh\u00e2ao-n\u01d0ao",
   "rom": "khaoniao",
   "freq": 3,
   "gloss": "ketan",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: khaoniao",
   "cls": "",
   "exTh": "\u0e02\u0e49\u0e32\u0e27\u0e40\u0e2b\u0e19\u0e35\u0e22\u0e27\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "kh\u00e2ao-n\u01d0ao \u00e0-r\u00e0awi m\u00e2ak",
   "exGloss": "Ketannya sangat enak.",
   "note": ""
  },
  {
   "id": "v344",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 4,
   "th": "\u0e19\u0e49\u0e33\u0e41\u0e02\u0e47\u0e07",
   "audio": "\u0e19\u0e49\u0e33\u0e41\u0e02\u0e47\u0e07",
   "phon": "n\u00e1am-kh\u01ceeng",
   "rom": "namkhaeng",
   "freq": 2,
   "gloss": "es",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: namkhaeng",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e43\u0e2a\u0e48\u0e19\u0e49\u0e33\u0e41\u0e02\u0e47\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "m\u00e2i s\u00e0i n\u00e1am-kh\u01ceeng khr\u00e1p",
   "exGloss": "Tanpa es, ya.",
   "note": ""
  },
  {
   "id": "v345",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e0a\u0e49\u0e2d\u0e19",
   "audio": "\u0e0a\u0e49\u0e2d\u0e19",
   "phon": "ch\u00e1awn",
   "rom": "chon",
   "freq": 2,
   "gloss": "sendok",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e31\u0e19 \u00b7 RTGS: chon",
   "cls": "\u0e04\u0e31\u0e19",
   "exTh": "\u0e02\u0e2d\u0e0a\u0e49\u0e2d\u0e19\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u01ceaw ch\u00e1awn n\u00e0awi khr\u00e1p",
   "exGloss": "Minta sendok.",
   "note": ""
  },
  {
   "id": "v346",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e08\u0e32\u0e19",
   "audio": "\u0e08\u0e32\u0e19",
   "phon": "jaan",
   "rom": "chan",
   "freq": 2,
   "gloss": "piring",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e43\u0e1a \u00b7 RTGS: chan",
   "cls": "\u0e43\u0e1a",
   "exTh": "\u0e02\u0e49\u0e32\u0e27\u0e1c\u0e31\u0e14\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e08\u0e32\u0e19",
   "exPhon": "kh\u00e2ao-ph\u00e0t n\u00f9eng jaan",
   "exGloss": "satu piring nasi goreng",
   "note": ""
  },
  {
   "id": "v347",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e16\u0e49\u0e27\u0e22",
   "audio": "\u0e16\u0e49\u0e27\u0e22",
   "phon": "th\u00fbai",
   "rom": "thuai",
   "freq": 3,
   "gloss": "mangkuk kecil, cangkir",
   "alt": [
    "cangkir"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e43\u0e1a \u00b7 RTGS: thuai",
   "cls": "\u0e43\u0e1a",
   "exTh": "\u0e0b\u0e38\u0e1b\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e16\u0e49\u0e27\u0e22",
   "exPhon": "s\u00fap n\u00f9eng th\u00fbai",
   "exGloss": "satu mangkuk sup",
   "note": ""
  },
  {
   "id": "v348",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 5,
   "th": "\u0e1b\u0e39\u0e48",
   "audio": "\u0e1b\u0e39\u0e48",
   "phon": "p\u00f9u",
   "rom": "pu",
   "freq": 3,
   "gloss": "kakek (dari ayah)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: pu",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1b\u0e39\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e2b\u0e21\u0e39\u0e48\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "p\u00f9u y\u00f9u th\u00eei m\u00f9u-b\u00e2an",
   "exGloss": "Kakek tinggal di kampung.",
   "note": "Bahasa Thailand membedakan kakek-nenek dari pihak ayah (\u0e1b\u0e39\u0e48, \u0e22\u0e48\u0e32) dan dari pihak ibu (\u0e15\u0e32, \u0e22\u0e32\u0e22)."
  },
  {
   "id": "v349",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 5,
   "th": "\u0e22\u0e48\u0e32",
   "audio": "\u0e22\u0e48\u0e32",
   "phon": "y\u00e2a",
   "rom": "ya",
   "freq": 3,
   "gloss": "nenek (dari ayah)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: ya",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e22\u0e48\u0e32\u0e17\u0e33\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e01\u0e48\u0e07",
   "exPhon": "y\u00e2a tham aa-h\u01cean k\u00e8ng",
   "exGloss": "Nenek pandai memasak.",
   "note": ""
  },
  {
   "id": "v350",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 5,
   "th": "\u0e22\u0e32\u0e22",
   "audio": "\u0e22\u0e32\u0e22",
   "phon": "yaai",
   "rom": "yai",
   "freq": 3,
   "gloss": "nenek (dari ibu)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: yai",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e22\u0e32\u0e22\u0e2d\u0e32\u0e22\u0e38\u0e41\u0e1b\u0e14\u0e2a\u0e34\u0e1a",
   "exPhon": "yaai aa-y\u00fa p\u00e0et-s\u00ecp",
   "exGloss": "Nenek berusia delapan puluh tahun.",
   "note": ""
  },
  {
   "id": "v351",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 5,
   "th": "\u0e25\u0e38\u0e07",
   "audio": "\u0e25\u0e38\u0e07",
   "phon": "lung",
   "rom": "lung",
   "freq": 3,
   "gloss": "paman (lebih tua dari orang tua)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: lung",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e25\u0e38\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e21\u0e2d",
   "exPhon": "lung pen m\u01ceaw",
   "exGloss": "Paman seorang dokter.",
   "note": ""
  },
  {
   "id": "v352",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 5,
   "th": "\u0e1b\u0e49\u0e32",
   "audio": "\u0e1b\u0e49\u0e32",
   "phon": "p\u00e2a",
   "rom": "pa",
   "freq": 3,
   "gloss": "bibi (lebih tua dari orang tua)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: pa",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1b\u0e49\u0e32\u0e02\u0e32\u0e22\u0e02\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e15\u0e25\u0e32\u0e14",
   "exPhon": "p\u00e2a kh\u01ceai kh\u01ceawng th\u00eei t\u00e0-l\u00e0at",
   "exGloss": "Bibi berjualan di pasar.",
   "note": "\u0e1b\u0e49\u0e32 juga dipakai menyapa perempuan paruh baya yang tidak dikenal, seperti 'Bu' dalam bahasa Indonesia."
  },
  {
   "id": "v353",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 6,
   "th": "\u0e19\u0e49\u0e32",
   "audio": "\u0e19\u0e49\u0e32",
   "phon": "n\u00e1a",
   "rom": "na",
   "freq": 3,
   "gloss": "om atau tante (adik ibu)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: na",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e19\u0e49\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e01\u0e23\u0e38\u0e07\u0e40\u0e17\u0e1e",
   "exPhon": "n\u00e1a y\u00f9u krung-th\u00eaep",
   "exGloss": "Om tinggal di Bangkok.",
   "note": ""
  },
  {
   "id": "v354",
   "kind": "flip",
   "cat": "keluarga",
   "catLabel": "Keluarga",
   "stage": 6,
   "th": "\u0e2d\u0e32",
   "audio": "\u0e2d\u0e32",
   "phon": "aa",
   "rom": "a",
   "freq": 3,
   "gloss": "om atau tante (adik ayah)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: a",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e2d\u0e32\u0e21\u0e32\u0e2b\u0e32\u0e1c\u0e21",
   "exPhon": "aa maa h\u01cea ph\u01d2m",
   "exGloss": "Om datang menemui saya.",
   "note": ""
  },
  {
   "id": "v355",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 4,
   "th": "\u0e41\u0e1f\u0e19",
   "audio": "\u0e41\u0e1f\u0e19",
   "phon": "faen",
   "rom": "faen",
   "freq": 2,
   "gloss": "pacar; pasangan",
   "alt": [
    "pacar"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: faen",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e41\u0e1f\u0e19\u0e1c\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e19\u0e44\u0e17\u0e22",
   "exPhon": "faen ph\u01d2m pen khon thai",
   "exGloss": "Pacar saya orang Thai.",
   "note": "Serapan dari bahasa Inggris 'fan'. Dipakai untuk pacar maupun suami-istri, tanpa membedakan jenis kelamin."
  },
  {
   "id": "v356",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 6,
   "th": "\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e1a\u0e49\u0e32\u0e19",
   "audio": "\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e1a\u0e49\u0e32\u0e19",
   "phon": "ph\u00fbean-b\u00e2an",
   "rom": "phueanban",
   "freq": 3,
   "gloss": "tetangga",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: phueanban",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e1a\u0e49\u0e32\u0e19\u0e43\u0e08\u0e14\u0e35\u0e21\u0e32\u0e01",
   "exPhon": "ph\u00fbean-b\u00e2an jai-dii m\u00e2ak",
   "exGloss": "Tetangganya sangat baik hati.",
   "note": ""
  },
  {
   "id": "v357",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 6,
   "th": "\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",
   "audio": "\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19",
   "phon": "ph\u00e1-n\u00e1k-ngaan",
   "rom": "phanakngan",
   "freq": 3,
   "gloss": "karyawan, petugas",
   "alt": [
    "pegawai"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: phanakngan",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1e\u0e19\u0e31\u0e01\u0e07\u0e32\u0e19\u0e43\u0e08\u0e14\u0e35",
   "exPhon": "ph\u00e1-n\u00e1k-ngaan jai-dii",
   "exGloss": "Petugasnya ramah.",
   "note": ""
  },
  {
   "id": "v358",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 6,
   "th": "\u0e1e\u0e48\u0e2d\u0e04\u0e49\u0e32",
   "audio": "\u0e1e\u0e48\u0e2d\u0e04\u0e49\u0e32",
   "phon": "ph\u00e2aw-kh\u00e1a",
   "rom": "phokha",
   "freq": 3,
   "gloss": "pedagang (lelaki)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: phokha",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e1e\u0e48\u0e2d\u0e04\u0e49\u0e32\u0e02\u0e32\u0e22\u0e02\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e15\u0e25\u0e32\u0e14",
   "exPhon": "ph\u00e2aw-kh\u00e1a kh\u01ceai kh\u01ceawng th\u00eei t\u00e0-l\u00e0at",
   "exGloss": "Pedagang itu berjualan di pasar.",
   "note": "Pasangannya \u0e41\u0e21\u0e48\u0e04\u0e49\u0e32 (m\u00e2e-kh\u00e1a) untuk pedagang perempuan, dan itulah yang lebih sering terdengar di pasar."
  },
  {
   "id": "v359",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 6,
   "th": "\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07",
   "audio": "\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07",
   "phon": "j\u00e2o-kh\u01ceawng",
   "rom": "chaokhong",
   "freq": 3,
   "gloss": "pemilik",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e19 \u00b7 RTGS: chaokhong",
   "cls": "\u0e04\u0e19",
   "exTh": "\u0e40\u0e08\u0e49\u0e32\u0e02\u0e2d\u0e07\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19",
   "exPhon": "j\u00e2o-kh\u01ceawng r\u00e1an y\u00f9u n\u01cei",
   "exGloss": "Di mana pemilik tokonya?",
   "note": ""
  },
  {
   "id": "v360",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 4,
   "th": "\u0e02\u0e32",
   "audio": "\u0e02\u0e32",
   "phon": "kh\u01cea",
   "rom": "kha",
   "freq": 2,
   "gloss": "kaki (tungkai)",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e02\u0e49\u0e32\u0e07 \u00b7 RTGS: kha",
   "cls": "\u0e02\u0e49\u0e32\u0e07",
   "exTh": "\u0e02\u0e32\u0e1c\u0e21\u0e40\u0e08\u0e47\u0e1a",
   "exPhon": "kh\u01cea ph\u01d2m j\u00e8p",
   "exGloss": "Kaki saya sakit.",
   "note": "\u0e02\u0e32 adalah tungkai dari pinggul sampai pergelangan; \u0e40\u0e17\u0e49\u0e32 adalah telapak kakinya."
  },
  {
   "id": "v361",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 5,
   "th": "\u0e41\u0e02\u0e19",
   "audio": "\u0e41\u0e02\u0e19",
   "phon": "kh\u01ceen",
   "rom": "khaen",
   "freq": 3,
   "gloss": "lengan",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e02\u0e49\u0e32\u0e07 \u00b7 RTGS: khaen",
   "cls": "\u0e02\u0e49\u0e32\u0e07",
   "exTh": "\u0e41\u0e02\u0e19\u0e0b\u0e49\u0e32\u0e22\u0e40\u0e08\u0e47\u0e1a",
   "exPhon": "kh\u01ceen s\u00e1ai j\u00e8p",
   "exGloss": "Lengan kiri saya sakit.",
   "note": ""
  },
  {
   "id": "v362",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e19\u0e34\u0e49\u0e27",
   "audio": "\u0e19\u0e34\u0e49\u0e27",
   "phon": "n\u00edu",
   "rom": "niu",
   "freq": 3,
   "gloss": "jari",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e19\u0e34\u0e49\u0e27 \u00b7 RTGS: niu",
   "cls": "\u0e19\u0e34\u0e49\u0e27",
   "exTh": "\u0e19\u0e34\u0e49\u0e27\u0e21\u0e37\u0e2d\u0e40\u0e08\u0e47\u0e1a",
   "exPhon": "n\u00edu muue j\u00e8p",
   "exGloss": "Jari tangan saya sakit.",
   "note": ""
  },
  {
   "id": "v363",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 5,
   "th": "\u0e2b\u0e39",
   "audio": "\u0e2b\u0e39",
   "phon": "h\u01d4u",
   "rom": "hu",
   "freq": 3,
   "gloss": "telinga",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e02\u0e49\u0e32\u0e07 \u00b7 RTGS: hu",
   "cls": "\u0e02\u0e49\u0e32\u0e07",
   "exTh": "\u0e2b\u0e39\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e14\u0e35",
   "exPhon": "h\u01d4u ph\u01d2m m\u00e2i dii",
   "exGloss": "Pendengaran saya kurang baik.",
   "note": ""
  },
  {
   "id": "v364",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e08\u0e21\u0e39\u0e01",
   "audio": "\u0e08\u0e21\u0e39\u0e01",
   "phon": "j\u00e0-m\u00f9uk",
   "rom": "chamuk",
   "freq": 3,
   "gloss": "hidung",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: chamuk",
   "cls": "",
   "exTh": "\u0e08\u0e21\u0e39\u0e01\u0e44\u0e21\u0e48\u0e14\u0e35",
   "exPhon": "j\u00e0-m\u00f9uk m\u00e2i dii",
   "exGloss": "Hidung saya sedang tidak enak.",
   "note": "Contoh aksara nam dengan pemimpin \u0e08 berkelas tengah."
  },
  {
   "id": "v365",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 4,
   "th": "\u0e1f\u0e31\u0e19",
   "audio": "\u0e1f\u0e31\u0e19",
   "phon": "fan",
   "rom": "fan",
   "freq": 2,
   "gloss": "gigi",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e0b\u0e35\u0e48 \u00b7 RTGS: fan",
   "cls": "\u0e0b\u0e35\u0e48",
   "exTh": "\u0e1c\u0e21\u0e1b\u0e27\u0e14\u0e1f\u0e31\u0e19",
   "exPhon": "ph\u01d2m p\u00f9at fan",
   "exGloss": "Gigi saya sakit.",
   "note": ""
  },
  {
   "id": "v366",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e40\u0e25\u0e37\u0e2d\u0e14",
   "audio": "\u0e40\u0e25\u0e37\u0e2d\u0e14",
   "phon": "l\u00fbeat",
   "rom": "lueat",
   "freq": 3,
   "gloss": "darah",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: lueat",
   "cls": "",
   "exTh": "\u0e21\u0e35\u0e40\u0e25\u0e37\u0e2d\u0e14\u0e2d\u0e2d\u0e01",
   "exPhon": "mii l\u00fbeat \u00e0awk",
   "exGloss": "Ada darah keluar.",
   "note": ""
  },
  {
   "id": "v367",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 5,
   "th": "\u0e44\u0e02\u0e49",
   "audio": "\u0e44\u0e02\u0e49",
   "phon": "kh\u00e2i",
   "rom": "khai",
   "freq": 2,
   "gloss": "demam",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: khai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e02\u0e49",
   "exPhon": "ph\u01d2m pen kh\u00e2i",
   "exGloss": "Saya demam.",
   "note": "Untuk penyakit dipakai \u0e40\u0e1b\u0e47\u0e19: \u0e40\u0e1b\u0e47\u0e19\u0e44\u0e02\u0e49 ('demam'), \u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e27\u0e31\u0e14 ('pilek')."
  },
  {
   "id": "v368",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 4,
   "th": "\u0e1b\u0e27\u0e14",
   "audio": "\u0e1b\u0e27\u0e14",
   "phon": "p\u00f9at",
   "rom": "puat",
   "freq": 2,
   "gloss": "nyeri, sakit berdenyut",
   "alt": [
    "nyeri"
   ],
   "detail": "sifat \u00b7 RTGS: puat",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e1b\u0e27\u0e14\u0e2b\u0e31\u0e27\u0e21\u0e32\u0e01",
   "exPhon": "ph\u01d2m p\u00f9at h\u01d4a m\u00e2ak",
   "exGloss": "Kepala saya sangat sakit.",
   "note": "Tiga kata 'sakit': \u0e1b\u0e27\u0e14 (berdenyut di dalam), \u0e40\u0e08\u0e47\u0e1a (nyeri karena luka), \u0e1b\u0e48\u0e27\u0e22 (berpenyakit)."
  },
  {
   "id": "v369",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 5,
   "th": "\u0e41\u0e1e\u0e49",
   "audio": "\u0e41\u0e1e\u0e49",
   "phon": "ph\u00e1e",
   "rom": "phae",
   "freq": 2,
   "gloss": "alergi; kalah",
   "alt": [
    "alergi"
   ],
   "detail": "verba \u00b7 RTGS: phae",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e41\u0e1e\u0e49\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e17\u0e30\u0e40\u0e25",
   "exPhon": "ph\u01d2m ph\u00e1e aa-h\u01cean th\u00e1-lee",
   "exGloss": "Saya alergi makanan laut.",
   "note": ""
  },
  {
   "id": "v370",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 6,
   "th": "\u0e2b\u0e27\u0e31\u0e14",
   "audio": "\u0e2b\u0e27\u0e31\u0e14",
   "phon": "w\u00e0t",
   "rom": "wat",
   "freq": 3,
   "gloss": "pilek, flu ringan",
   "alt": [
    "flu"
   ],
   "detail": "nomina \u00b7 RTGS: wat",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e27\u0e31\u0e14",
   "exPhon": "ph\u01d2m pen w\u00e0t",
   "exGloss": "Saya sedang pilek.",
   "note": ""
  },
  {
   "id": "v371",
   "kind": "flip",
   "cat": "tubuh",
   "catLabel": "Tubuh & sakit",
   "stage": 5,
   "th": "\u0e2b\u0e32\u0e22",
   "audio": "\u0e2b\u0e32\u0e22",
   "phon": "h\u01ceai",
   "rom": "hai",
   "freq": 2,
   "gloss": "sembuh; hilang",
   "alt": [
    "sembuh",
    "hilang"
   ],
   "detail": "verba \u00b7 RTGS: hai",
   "cls": "",
   "exTh": "\u0e2b\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "h\u01ceai l\u00e1eo khr\u00e1p",
   "exGloss": "Sudah sembuh.",
   "note": "Satu kata untuk dua hal yang berbeda: penyakit yang sembuh dan barang yang hilang."
  },
  {
   "id": "v372",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e2a\u0e35",
   "audio": "\u0e2a\u0e35",
   "phon": "s\u01d0i",
   "rom": "si",
   "freq": 2,
   "gloss": "warna",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e2a\u0e35 \u00b7 RTGS: si",
   "cls": "\u0e2a\u0e35",
   "exTh": "\u0e2a\u0e35\u0e2d\u0e30\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "s\u01d0i \u00e0-rai khr\u00e1p",
   "exGloss": "Warna apa?",
   "note": "Perhatikan bedanya dengan \u0e2a\u0e35\u0e48 (s\u00eci, 'empat') yang hanya berbeda nada."
  },
  {
   "id": "v373",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e41\u0e14\u0e07",
   "audio": "\u0e41\u0e14\u0e07",
   "phon": "daeng",
   "rom": "daeng",
   "freq": 2,
   "gloss": "merah",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: daeng",
   "cls": "",
   "exTh": "\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e2a\u0e35\u0e41\u0e14\u0e07\u0e2a\u0e27\u0e22",
   "exPhon": "s\u00fbea s\u01d0i-daeng s\u01d4ai",
   "exGloss": "Baju merah itu bagus.",
   "note": "Nama warna dipakai bersama \u0e2a\u0e35: \u0e2a\u0e35\u0e41\u0e14\u0e07 ('warna merah')."
  },
  {
   "id": "v374",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e02\u0e32\u0e27",
   "audio": "\u0e02\u0e32\u0e27",
   "phon": "kh\u01ceao",
   "rom": "khao",
   "freq": 2,
   "gloss": "putih",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: khao",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e0a\u0e2d\u0e1a\u0e2a\u0e35\u0e02\u0e32\u0e27",
   "exPhon": "ph\u01d2m ch\u00e2awp s\u01d0i-kh\u01ceao",
   "exGloss": "Saya suka warna putih.",
   "note": ""
  },
  {
   "id": "v375",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 4,
   "th": "\u0e14\u0e33",
   "audio": "\u0e14\u0e33",
   "phon": "dam",
   "rom": "dam",
   "freq": 2,
   "gloss": "hitam",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: dam",
   "cls": "",
   "exTh": "\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32\u0e2a\u0e35\u0e14\u0e33",
   "exPhon": "kr\u00e0-p\u01ceo s\u01d0i-dam",
   "exGloss": "tas hitam",
   "note": ""
  },
  {
   "id": "v376",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e40\u0e02\u0e35\u0e22\u0e27",
   "audio": "\u0e40\u0e02\u0e35\u0e22\u0e27",
   "phon": "kh\u01d0ao",
   "rom": "khiao",
   "freq": 3,
   "gloss": "hijau",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: khiao",
   "cls": "",
   "exTh": "\u0e1c\u0e31\u0e01\u0e2a\u0e35\u0e40\u0e02\u0e35\u0e22\u0e27",
   "exPhon": "ph\u00e0k s\u01d0i-kh\u01d0ao",
   "exGloss": "sayur hijau",
   "note": ""
  },
  {
   "id": "v377",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e07",
   "audio": "\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e07",
   "phon": "l\u01d4eang",
   "rom": "lueang",
   "freq": 3,
   "gloss": "kuning",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: lueang",
   "cls": "",
   "exTh": "\u0e14\u0e2d\u0e01\u0e44\u0e21\u0e49\u0e2a\u0e35\u0e40\u0e2b\u0e25\u0e37\u0e2d\u0e07",
   "exPhon": "d\u00e0awk-m\u00e1ai s\u01d0i-l\u01d4eang",
   "exGloss": "bunga kuning",
   "note": ""
  },
  {
   "id": "v378",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e1f\u0e49\u0e32",
   "audio": "\u0e1f\u0e49\u0e32",
   "phon": "f\u00e1a",
   "rom": "fa",
   "freq": 2,
   "gloss": "biru muda; langit",
   "alt": [
    "langit"
   ],
   "detail": "sifat \u00b7 RTGS: fa",
   "cls": "",
   "exTh": "\u0e17\u0e49\u0e2d\u0e07\u0e1f\u0e49\u0e32\u0e2a\u0e27\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "th\u00e1awng-f\u00e1a s\u01d4ai m\u00e2ak",
   "exGloss": "Langitnya sangat indah.",
   "note": "Satu kata untuk 'langit' dan untuk warnanya. Untuk biru tua dipakai \u0e2a\u0e35\u0e19\u0e49\u0e33\u0e40\u0e07\u0e34\u0e19."
  },
  {
   "id": "v379",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 3,
   "th": "\u0e2b\u0e21\u0e32",
   "audio": "\u0e2b\u0e21\u0e32",
   "phon": "m\u01cea",
   "rom": "ma",
   "freq": 2,
   "gloss": "anjing",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: ma",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e2b\u0e21\u0e32\u0e15\u0e31\u0e27\u0e19\u0e35\u0e49\u0e19\u0e48\u0e32\u0e23\u0e31\u0e01",
   "exPhon": "m\u01cea tua n\u00edi n\u00e2a-r\u00e1k",
   "exGloss": "Anjing ini menggemaskan.",
   "note": "Bentuk yang lebih halus \u0e2a\u0e38\u0e19\u0e31\u0e02 (s\u00f9-n\u00e1k) dipakai pada tulisan resmi."
  },
  {
   "id": "v380",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 3,
   "th": "\u0e41\u0e21\u0e27",
   "audio": "\u0e41\u0e21\u0e27",
   "phon": "maeo",
   "rom": "maeo",
   "freq": 2,
   "gloss": "kucing",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: maeo",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e41\u0e21\u0e27\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19\u0e40\u0e15\u0e35\u0e22\u0e07",
   "exPhon": "maeo y\u00f9u bon tiang",
   "exGloss": "Kucingnya ada di atas tempat tidur.",
   "note": ""
  },
  {
   "id": "v381",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 3,
   "th": "\u0e19\u0e01",
   "audio": "\u0e19\u0e01",
   "phon": "n\u00f3k",
   "rom": "nok",
   "freq": 2,
   "gloss": "burung",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: nok",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e19\u0e01\u0e1a\u0e34\u0e19\u0e2a\u0e39\u0e07\u0e21\u0e32\u0e01",
   "exPhon": "n\u00f3k bin s\u01d4ung m\u00e2ak",
   "exGloss": "Burung itu terbang sangat tinggi.",
   "note": ""
  },
  {
   "id": "v382",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 4,
   "th": "\u0e0a\u0e49\u0e32\u0e07",
   "audio": "\u0e0a\u0e49\u0e32\u0e07",
   "phon": "ch\u00e1ang",
   "rom": "chang",
   "freq": 2,
   "gloss": "gajah",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: chang",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e0a\u0e49\u0e32\u0e07\u0e40\u0e1b\u0e47\u0e19\u0e2a\u0e31\u0e15\u0e27\u0e4c\u0e43\u0e2b\u0e0d\u0e48",
   "exPhon": "ch\u00e1ang pen s\u00e0t y\u00e0i",
   "exGloss": "Gajah adalah hewan besar.",
   "note": "Gajah adalah lambang Thailand sejak lama, dan namanya muncul pada huruf \u0e0a \u0e0a\u0e49\u0e32\u0e07."
  },
  {
   "id": "v383",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e25\u0e34\u0e07",
   "audio": "\u0e25\u0e34\u0e07",
   "phon": "ling",
   "rom": "ling",
   "freq": 3,
   "gloss": "kera, monyet",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: ling",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e25\u0e34\u0e07\u0e01\u0e34\u0e19\u0e01\u0e25\u0e49\u0e27\u0e22",
   "exPhon": "ling kin kl\u00fbai",
   "exGloss": "Kera itu makan pisang.",
   "note": ""
  },
  {
   "id": "v384",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e27\u0e31\u0e27",
   "audio": "\u0e27\u0e31\u0e27",
   "phon": "wua",
   "rom": "wua",
   "freq": 3,
   "gloss": "sapi",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: wua",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e27\u0e31\u0e27\u0e41\u0e1e\u0e07\u0e01\u0e27\u0e48\u0e32\u0e2b\u0e21\u0e39",
   "exPhon": "n\u00faea wua phaeng kw\u00e0a m\u01d4u",
   "exGloss": "Daging sapi lebih mahal daripada daging babi.",
   "note": ""
  },
  {
   "id": "v385",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e04\u0e27\u0e32\u0e22",
   "audio": "\u0e04\u0e27\u0e32\u0e22",
   "phon": "khwaai",
   "rom": "khwai",
   "freq": 3,
   "gloss": "kerbau",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: khwai",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e04\u0e27\u0e32\u0e22\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e19\u0e32",
   "exPhon": "khwaai y\u00f9u nai naa",
   "exGloss": "Kerbau itu ada di sawah.",
   "note": "Muncul pada nama huruf \u0e04 \u0e04\u0e27\u0e32\u0e22."
  },
  {
   "id": "v386",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e07\u0e39",
   "audio": "\u0e07\u0e39",
   "phon": "nguu",
   "rom": "ngu",
   "freq": 3,
   "gloss": "ular",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: ngu",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e23\u0e30\u0e27\u0e31\u0e07\u0e07\u0e39",
   "exPhon": "r\u00e1-wang nguu",
   "exGloss": "Awas ular.",
   "note": "Muncul pada nama huruf \u0e07 \u0e07\u0e39."
  },
  {
   "id": "v387",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e22\u0e38\u0e07",
   "audio": "\u0e22\u0e38\u0e07",
   "phon": "yung",
   "rom": "yung",
   "freq": 3,
   "gloss": "nyamuk",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e31\u0e27 \u00b7 RTGS: yung",
   "cls": "\u0e15\u0e31\u0e27",
   "exTh": "\u0e22\u0e38\u0e07\u0e40\u0e22\u0e2d\u0e30\u0e21\u0e32\u0e01",
   "exPhon": "yung y\u00f3e m\u00e2ak",
   "exGloss": "Nyamuknya banyak sekali.",
   "note": ""
  },
  {
   "id": "v388",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 4,
   "th": "\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49",
   "audio": "\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49",
   "phon": "t\u00f4n-m\u00e1ai",
   "rom": "tonmai",
   "freq": 2,
   "gloss": "pohon",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e15\u0e49\u0e19 \u00b7 RTGS: tonmai",
   "cls": "\u0e15\u0e49\u0e19",
   "exTh": "\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49\u0e15\u0e49\u0e19\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e0d\u0e48",
   "exPhon": "t\u00f4n-m\u00e1ai t\u00f4n n\u00edi y\u00e0i",
   "exGloss": "Pohon ini besar.",
   "note": ""
  },
  {
   "id": "v389",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 4,
   "th": "\u0e14\u0e2d\u0e01\u0e44\u0e21\u0e49",
   "audio": "\u0e14\u0e2d\u0e01\u0e44\u0e21\u0e49",
   "phon": "d\u00e0awk-m\u00e1ai",
   "rom": "dokmai",
   "freq": 2,
   "gloss": "bunga",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e14\u0e2d\u0e01 \u00b7 RTGS: dokmai",
   "cls": "\u0e14\u0e2d\u0e01",
   "exTh": "\u0e14\u0e2d\u0e01\u0e44\u0e21\u0e49\u0e2a\u0e27\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "d\u00e0awk-m\u00e1ai s\u01d4ai m\u00e2ak",
   "exGloss": "Bunganya sangat indah.",
   "note": ""
  },
  {
   "id": "v390",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e43\u0e1a\u0e44\u0e21\u0e49",
   "audio": "\u0e43\u0e1a\u0e44\u0e21\u0e49",
   "phon": "bai-m\u00e1ai",
   "rom": "baimai",
   "freq": 3,
   "gloss": "daun",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e43\u0e1a \u00b7 RTGS: baimai",
   "cls": "\u0e43\u0e1a",
   "exTh": "\u0e43\u0e1a\u0e44\u0e21\u0e49\u0e2a\u0e35\u0e40\u0e02\u0e35\u0e22\u0e27",
   "exPhon": "bai-m\u00e1ai s\u01d0i-kh\u01d0ao",
   "exGloss": "Daunnya hijau.",
   "note": "Muncul pada nama huruf \u0e1a \u0e43\u0e1a\u0e44\u0e21\u0e49."
  },
  {
   "id": "v391",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 5,
   "th": "\u0e14\u0e34\u0e19",
   "audio": "\u0e14\u0e34\u0e19",
   "phon": "din",
   "rom": "din",
   "freq": 3,
   "gloss": "tanah",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: din",
   "cls": "",
   "exTh": "\u0e14\u0e34\u0e19\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e14\u0e35",
   "exPhon": "din th\u00eei-n\u00eei dii",
   "exGloss": "Tanah di sini bagus.",
   "note": ""
  },
  {
   "id": "v392",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e2b\u0e34\u0e19",
   "audio": "\u0e2b\u0e34\u0e19",
   "phon": "h\u01d0n",
   "rom": "hin",
   "freq": 3,
   "gloss": "batu",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e01\u0e49\u0e2d\u0e19 \u00b7 RTGS: hin",
   "cls": "\u0e01\u0e49\u0e2d\u0e19",
   "exTh": "\u0e2b\u0e34\u0e19\u0e01\u0e49\u0e2d\u0e19\u0e19\u0e35\u0e49\u0e2b\u0e19\u0e31\u0e01",
   "exPhon": "h\u01d0n k\u00e2awn n\u00edi n\u00e0k",
   "exGloss": "Batu ini berat.",
   "note": ""
  },
  {
   "id": "v393",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e40\u0e21\u0e06",
   "audio": "\u0e40\u0e21\u0e06",
   "phon": "m\u00eaek",
   "rom": "mek",
   "freq": 3,
   "gloss": "awan",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e01\u0e49\u0e2d\u0e19 \u00b7 RTGS: mek",
   "cls": "\u0e01\u0e49\u0e2d\u0e19",
   "exTh": "\u0e40\u0e21\u0e06\u0e40\u0e22\u0e2d\u0e30\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",
   "exPhon": "m\u00eaek y\u00f3e wan-n\u00edi",
   "exGloss": "Hari ini banyak awan.",
   "note": "Salah satu dari sedikit kata sehari-hari yang memakai huruf \u0e06."
  },
  {
   "id": "v394",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e14\u0e32\u0e27",
   "audio": "\u0e14\u0e32\u0e27",
   "phon": "daao",
   "rom": "dao",
   "freq": 3,
   "gloss": "bintang",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e14\u0e27\u0e07 \u00b7 RTGS: dao",
   "cls": "\u0e14\u0e27\u0e07",
   "exTh": "\u0e14\u0e32\u0e27\u0e2a\u0e27\u0e22\u0e21\u0e32\u0e01",
   "exPhon": "daao s\u01d4ai m\u00e2ak",
   "exGloss": "Bintangnya indah sekali.",
   "note": ""
  },
  {
   "id": "v395",
   "kind": "flip",
   "cat": "alam",
   "catLabel": "Alam & cuaca",
   "stage": 6,
   "th": "\u0e19\u0e32",
   "audio": "\u0e19\u0e32",
   "phon": "naa",
   "rom": "na",
   "freq": 3,
   "gloss": "sawah",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: na",
   "cls": "",
   "exTh": "\u0e0a\u0e32\u0e27\u0e19\u0e32\u0e17\u0e33\u0e19\u0e32",
   "exPhon": "chaao-naa tham naa",
   "exGloss": "Petani menggarap sawah.",
   "note": "\u0e0a\u0e32\u0e27\u0e19\u0e32 berarti 'petani sawah'; \u0e0a\u0e32\u0e27 adalah awalan untuk penduduk atau pelaku."
  },
  {
   "id": "v396",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 4,
   "th": "\u0e2b\u0e49\u0e2d\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19",
   "audio": "\u0e2b\u0e49\u0e2d\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19",
   "phon": "h\u00e2awng-rian",
   "rom": "hongrian",
   "freq": 2,
   "gloss": "ruang kelas",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e2b\u0e49\u0e2d\u0e07 \u00b7 RTGS: hongrian",
   "cls": "\u0e2b\u0e49\u0e2d\u0e07",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e0a\u0e31\u0e49\u0e19\u0e2a\u0e2d\u0e07",
   "exPhon": "h\u00e2awng-rian y\u00f9u ch\u00e1n s\u01ceawng",
   "exGloss": "Ruang kelasnya di lantai dua.",
   "note": "\u0e0a\u0e31\u0e49\u0e19 (ch\u00e1n) berarti 'lantai' atau 'tingkat'."
  },
  {
   "id": "v397",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e01\u0e32\u0e23\u0e1a\u0e49\u0e32\u0e19",
   "audio": "\u0e01\u0e32\u0e23\u0e1a\u0e49\u0e32\u0e19",
   "phon": "kaan-b\u00e2an",
   "rom": "kanban",
   "freq": 3,
   "gloss": "pekerjaan rumah",
   "alt": [
    "PR"
   ],
   "detail": "nomina \u00b7 RTGS: kanban",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e17\u0e33\u0e01\u0e32\u0e23\u0e1a\u0e49\u0e32\u0e19\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "ph\u01d2m tham kaan-b\u00e2an l\u00e1eo",
   "exGloss": "Saya sudah mengerjakan PR.",
   "note": "\u0e01\u0e32\u0e23 adalah awalan pembentuk kata benda dari kata kerja, mirip 'pe-an' dalam bahasa Indonesia."
  },
  {
   "id": "v398",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e2a\u0e2d\u0e1a",
   "audio": "\u0e2a\u0e2d\u0e1a",
   "phon": "s\u00e0awp",
   "rom": "sop",
   "freq": 2,
   "gloss": "ujian; menguji",
   "alt": [
    "ulangan"
   ],
   "detail": "nomina \u00b7 RTGS: sop",
   "cls": "",
   "exTh": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e21\u0e35\u0e2a\u0e2d\u0e1a",
   "exPhon": "phr\u00fbng-n\u00edi mii s\u00e0awp",
   "exGloss": "Besok ada ujian.",
   "note": ""
  },
  {
   "id": "v399",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e2a\u0e21\u0e38\u0e14",
   "audio": "\u0e2a\u0e21\u0e38\u0e14",
   "phon": "s\u00e0-m\u00f9t",
   "rom": "samut",
   "freq": 3,
   "gloss": "buku tulis",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e25\u0e48\u0e21 \u00b7 RTGS: samut",
   "cls": "\u0e40\u0e25\u0e48\u0e21",
   "exTh": "\u0e02\u0e2d\u0e2a\u0e21\u0e38\u0e14\u0e40\u0e25\u0e48\u0e21\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "exPhon": "kh\u01ceaw s\u00e0-m\u00f9t l\u00eam n\u00f9eng",
   "exGloss": "Minta satu buku tulis.",
   "note": "Contoh aksara nam: \u0e2a memimpin \u0e21\u0e38\u0e14 sehingga bernada rendah, bukan tinggi."
  },
  {
   "id": "v400",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e14\u0e34\u0e19\u0e2a\u0e2d",
   "audio": "\u0e14\u0e34\u0e19\u0e2a\u0e2d",
   "phon": "din-s\u01ceaw",
   "rom": "dinso",
   "freq": 3,
   "gloss": "pensil",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e17\u0e48\u0e07 \u00b7 RTGS: dinso",
   "cls": "\u0e41\u0e17\u0e48\u0e07",
   "exTh": "\u0e14\u0e34\u0e19\u0e2a\u0e2d\u0e41\u0e17\u0e48\u0e07\u0e19\u0e35\u0e49\u0e2a\u0e31\u0e49\u0e19",
   "exPhon": "din-s\u01ceaw th\u00e2eng n\u00edi s\u00e2n",
   "exGloss": "Pensil ini pendek.",
   "note": ""
  },
  {
   "id": "v401",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e0a\u0e31\u0e49\u0e19",
   "audio": "\u0e0a\u0e31\u0e49\u0e19",
   "phon": "ch\u00e1n",
   "rom": "chan",
   "freq": 2,
   "gloss": "lantai, tingkat",
   "alt": [
    "lantai"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e0a\u0e31\u0e49\u0e19 \u00b7 RTGS: chan",
   "cls": "\u0e0a\u0e31\u0e49\u0e19",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e0a\u0e31\u0e49\u0e19\u0e2a\u0e32\u0e21",
   "exPhon": "h\u00e2awng ph\u01d2m y\u00f9u ch\u00e1n s\u01ceam",
   "exGloss": "Kamar saya di lantai tiga.",
   "note": ""
  },
  {
   "id": "v402",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 5,
   "th": "\u0e15\u0e31\u0e4b\u0e27",
   "audio": "\u0e15\u0e31\u0e4b\u0e27",
   "phon": "t\u01d4a",
   "rom": "tua",
   "freq": 2,
   "gloss": "karcis, tiket",
   "alt": [
    "karcis"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e43\u0e1a \u00b7 RTGS: tua",
   "cls": "\u0e43\u0e1a",
   "exTh": "\u0e0b\u0e37\u0e49\u0e2d\u0e15\u0e31\u0e4b\u0e27\u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "s\u00faue t\u01d4a th\u00eei-n\u01cei khr\u00e1p",
   "exGloss": "Beli tiketnya di mana?",
   "note": "Salah satu dari sedikit kata sehari-hari yang memakai mai chattawa."
  },
  {
   "id": "v403",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 5,
   "th": "\u0e1b\u0e49\u0e32\u0e22",
   "audio": "\u0e1b\u0e49\u0e32\u0e22",
   "phon": "p\u00e2ai",
   "rom": "pai",
   "freq": 3,
   "gloss": "papan nama; halte",
   "alt": [
    "halte"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e1b\u0e49\u0e32\u0e22 \u00b7 RTGS: pai",
   "cls": "\u0e1b\u0e49\u0e32\u0e22",
   "exTh": "\u0e25\u0e07\u0e17\u0e35\u0e48\u0e1b\u0e49\u0e32\u0e22\u0e2b\u0e19\u0e49\u0e32",
   "exPhon": "long th\u00eei p\u00e2ai n\u00e2a",
   "exGloss": "Turun di halte berikutnya.",
   "note": "\u0e2b\u0e19\u0e49\u0e32 di sini berarti 'berikutnya', bukan 'depan'."
  },
  {
   "id": "v404",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 5,
   "th": "\u0e0b\u0e2d\u0e22",
   "audio": "\u0e0b\u0e2d\u0e22",
   "phon": "saawi",
   "rom": "soi",
   "freq": 3,
   "gloss": "gang",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e0b\u0e2d\u0e22 \u00b7 RTGS: soi",
   "cls": "\u0e0b\u0e2d\u0e22",
   "exTh": "\u0e1a\u0e49\u0e32\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e0b\u0e2d\u0e22",
   "exPhon": "b\u00e2an y\u00f9u nai saawi",
   "exGloss": "Rumahnya ada di dalam gang.",
   "note": "Alamat di Thailand hampir selalu memuat nomor \u0e0b\u0e2d\u0e22, misalnya \u0e2a\u0e38\u0e02\u0e38\u0e21\u0e27\u0e34\u0e17 \u0e0b\u0e2d\u0e22 11."
  },
  {
   "id": "v405",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e17\u0e32\u0e07",
   "audio": "\u0e17\u0e32\u0e07",
   "phon": "thaang",
   "rom": "thang",
   "freq": 2,
   "gloss": "jalan, arah",
   "alt": [
    "arah"
   ],
   "detail": "nomina \u00b7 RTGS: thang",
   "cls": "",
   "exTh": "\u0e17\u0e32\u0e07\u0e19\u0e35\u0e49\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
   "exPhon": "thaang n\u00edi pai t\u00e0-l\u00e0at",
   "exGloss": "Jalan ini menuju pasar.",
   "note": ""
  },
  {
   "id": "v406",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 5,
   "th": "\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07",
   "audio": "\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07",
   "phon": "th\u00eei-n\u00e2ng",
   "rom": "thinang",
   "freq": 3,
   "gloss": "tempat duduk",
   "alt": [
    "kursi"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e17\u0e35\u0e48 \u00b7 RTGS: thinang",
   "cls": "\u0e17\u0e35\u0e48",
   "exTh": "\u0e21\u0e35\u0e17\u0e35\u0e48\u0e19\u0e31\u0e48\u0e07\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "mii th\u00eei-n\u00e2ng m\u01cei khr\u00e1p",
   "exGloss": "Ada tempat duduk?",
   "note": ""
  },
  {
   "id": "v407",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 6,
   "th": "\u0e23\u0e16\u0e15\u0e39\u0e49",
   "audio": "\u0e23\u0e16\u0e15\u0e39\u0e49",
   "phon": "r\u00f3t-t\u00fbu",
   "rom": "rottu",
   "freq": 3,
   "gloss": "minibus",
   "alt": [
    "mobil van"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e31\u0e19 \u00b7 RTGS: rottu",
   "cls": "\u0e04\u0e31\u0e19",
   "exTh": "\u0e1c\u0e21\u0e44\u0e1b\u0e23\u0e16\u0e15\u0e39\u0e49",
   "exPhon": "ph\u01d2m pai r\u00f3t-t\u00fbu",
   "exGloss": "Saya pergi naik minibus.",
   "note": ""
  },
  {
   "id": "v408",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e19\u0e49\u0e33\u0e21\u0e31\u0e19",
   "audio": "\u0e19\u0e49\u0e33\u0e21\u0e31\u0e19",
   "phon": "n\u00e1am-man",
   "rom": "namman",
   "freq": 3,
   "gloss": "minyak; bensin",
   "alt": [
    "bensin"
   ],
   "detail": "nomina \u00b7 RTGS: namman",
   "cls": "",
   "exTh": "\u0e40\u0e15\u0e34\u0e21\u0e19\u0e49\u0e33\u0e21\u0e31\u0e19\u0e01\u0e48\u0e2d\u0e19",
   "exPhon": "tooem n\u00e1am-man k\u00e0awn",
   "exGloss": "Isi bensin dulu.",
   "note": "\u0e40\u0e15\u0e34\u0e21 (tooem) berarti 'menambah, mengisi'."
  },
  {
   "id": "v409",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 5,
   "th": "\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e14",
   "audio": "\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e14",
   "phon": "ngooen-s\u00f2t",
   "rom": "ngoenso",
   "freq": 2,
   "gloss": "uang tunai",
   "alt": [
    "tunai"
   ],
   "detail": "nomina \u00b7 RTGS: ngoenso",
   "cls": "",
   "exTh": "\u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19\u0e2a\u0e14\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21",
   "exPhon": "j\u00e0ai ngooen-s\u00f2t d\u00e2i m\u01cei",
   "exGloss": "Bisa bayar tunai?",
   "note": ""
  },
  {
   "id": "v410",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e22\u0e37\u0e19",
   "audio": "\u0e22\u0e37\u0e19",
   "phon": "yuuen",
   "rom": "yuen",
   "freq": 3,
   "gloss": "berdiri",
   "alt": [],
   "detail": "verba \u00b7 RTGS: yuen",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e22\u0e37\u0e19\u0e23\u0e2d\u0e2d\u0e22\u0e39\u0e48",
   "exPhon": "kh\u01ceo yuuen raaw y\u00f9u",
   "exGloss": "Dia sedang berdiri menunggu.",
   "note": ""
  },
  {
   "id": "v411",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e25\u0e49\u0e32\u0e07",
   "audio": "\u0e25\u0e49\u0e32\u0e07",
   "phon": "l\u00e1ang",
   "rom": "lang",
   "freq": 2,
   "gloss": "mencuci (benda)",
   "alt": [
    "cuci"
   ],
   "detail": "verba \u00b7 RTGS: lang",
   "cls": "",
   "exTh": "\u0e25\u0e49\u0e32\u0e07\u0e21\u0e37\u0e2d\u0e01\u0e48\u0e2d\u0e19\u0e01\u0e34\u0e19",
   "exPhon": "l\u00e1ang muue k\u00e0awn kin",
   "exGloss": "Cuci tangan sebelum makan.",
   "note": ""
  },
  {
   "id": "v412",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e0b\u0e31\u0e01",
   "audio": "\u0e0b\u0e31\u0e01",
   "phon": "s\u00e1k",
   "rom": "sak",
   "freq": 3,
   "gloss": "mencuci (pakaian)",
   "alt": [],
   "detail": "verba \u00b7 RTGS: sak",
   "cls": "",
   "exTh": "\u0e0b\u0e31\u0e01\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",
   "exPhon": "s\u00e1k s\u00fbea-ph\u00e2a wan-n\u00edi",
   "exGloss": "Mencuci pakaian hari ini.",
   "note": "\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32 (s\u00fbea-ph\u00e2a) berarti 'pakaian' secara umum."
  },
  {
   "id": "v413",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e1b\u0e25\u0e39\u0e01",
   "audio": "\u0e1b\u0e25\u0e39\u0e01",
   "phon": "pl\u00f9uk",
   "rom": "pluk",
   "freq": 3,
   "gloss": "menanam",
   "alt": [
    "tanam"
   ],
   "detail": "verba \u00b7 RTGS: pluk",
   "cls": "",
   "exTh": "\u0e1b\u0e25\u0e39\u0e01\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49\u0e2b\u0e19\u0e49\u0e32\u0e1a\u0e49\u0e32\u0e19",
   "exPhon": "pl\u00f9uk t\u00f4n-m\u00e1ai n\u00e2a b\u00e2an",
   "exGloss": "Menanam pohon di depan rumah.",
   "note": ""
  },
  {
   "id": "v414",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07",
   "audio": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07",
   "phon": "l\u00edang",
   "rom": "liang",
   "freq": 3,
   "gloss": "memelihara; mentraktir",
   "alt": [
    "pelihara",
    "traktir"
   ],
   "detail": "verba \u00b7 RTGS: liang",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07\u0e41\u0e21\u0e27\u0e2a\u0e2d\u0e07\u0e15\u0e31\u0e27",
   "exPhon": "ph\u01d2m l\u00edang maeo s\u01ceawng tua",
   "exGloss": "Saya memelihara dua kucing.",
   "note": "Juga berarti 'mentraktir': \u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e40\u0e25\u0e35\u0e49\u0e22\u0e07 ('hari ini saya yang traktir')."
  },
  {
   "id": "v415",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 5,
   "th": "\u0e23\u0e49\u0e2d\u0e07\u0e44\u0e2b\u0e49",
   "audio": "\u0e23\u0e49\u0e2d\u0e07\u0e44\u0e2b\u0e49",
   "phon": "r\u00e1awng-h\u00e2i",
   "rom": "ronghai",
   "freq": 3,
   "gloss": "menangis",
   "alt": [],
   "detail": "verba \u00b7 RTGS: ronghai",
   "cls": "",
   "exTh": "\u0e40\u0e14\u0e47\u0e01\u0e23\u0e49\u0e2d\u0e07\u0e44\u0e2b\u0e49",
   "exPhon": "d\u00e8k r\u00e1awng-h\u00e2i",
   "exGloss": "Anak itu menangis.",
   "note": ""
  },
  {
   "id": "v416",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 5,
   "th": "\u0e2b\u0e31\u0e27\u0e40\u0e23\u0e32\u0e30",
   "audio": "\u0e2b\u0e31\u0e27\u0e40\u0e23\u0e32\u0e30",
   "phon": "h\u01d4a-r\u00e1w",
   "rom": "huaro",
   "freq": 3,
   "gloss": "tertawa",
   "alt": [],
   "detail": "verba \u00b7 RTGS: huaro",
   "cls": "",
   "exTh": "\u0e40\u0e02\u0e32\u0e2b\u0e31\u0e27\u0e40\u0e23\u0e32\u0e30\u0e14\u0e31\u0e07",
   "exPhon": "kh\u01ceo h\u01d4a-r\u00e1w dang",
   "exGloss": "Dia tertawa keras.",
   "note": ""
  },
  {
   "id": "v417",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 4,
   "th": "\u0e22\u0e34\u0e49\u0e21",
   "audio": "\u0e22\u0e34\u0e49\u0e21",
   "phon": "y\u00edm",
   "rom": "yim",
   "freq": 2,
   "gloss": "tersenyum",
   "alt": [
    "senyum"
   ],
   "detail": "verba \u00b7 RTGS: yim",
   "cls": "",
   "exTh": "\u0e04\u0e19\u0e44\u0e17\u0e22\u0e22\u0e34\u0e49\u0e21\u0e1a\u0e48\u0e2d\u0e22",
   "exPhon": "khon thai y\u00edm b\u00e0awi",
   "exGloss": "Orang Thai sering tersenyum.",
   "note": ""
  },
  {
   "id": "v418",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 5,
   "th": "\u0e42\u0e01\u0e23\u0e18",
   "audio": "\u0e42\u0e01\u0e23\u0e18",
   "phon": "kr\u00f2ot",
   "rom": "krot",
   "freq": 3,
   "gloss": "marah",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: krot",
   "cls": "",
   "exTh": "\u0e2d\u0e22\u0e48\u0e32\u0e42\u0e01\u0e23\u0e18\u0e19\u0e30",
   "exPhon": "y\u00e0a kr\u00f2ot n\u00e1",
   "exGloss": "Jangan marah, ya.",
   "note": "\u0e2d\u0e22\u0e48\u0e32 (y\u00e0a) berarti 'jangan'. Termasuk empat kata ber-\u0e2d\u0e22."
  },
  {
   "id": "v419",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 4,
   "th": "\u0e01\u0e25\u0e31\u0e27",
   "audio": "\u0e01\u0e25\u0e31\u0e27",
   "phon": "klua",
   "rom": "klua",
   "freq": 2,
   "gloss": "takut",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: klua",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e01\u0e25\u0e31\u0e27\u0e2b\u0e21\u0e32",
   "exPhon": "ph\u01d2m klua m\u01cea",
   "exGloss": "Saya takut anjing.",
   "note": ""
  },
  {
   "id": "v420",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 5,
   "th": "\u0e15\u0e01\u0e43\u0e08",
   "audio": "\u0e15\u0e01\u0e43\u0e08",
   "phon": "t\u00f2k-jai",
   "rom": "tokchai",
   "freq": 3,
   "gloss": "terkejut",
   "alt": [
    "kaget"
   ],
   "detail": "sifat \u00b7 RTGS: tokchai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e15\u0e01\u0e43\u0e08\u0e21\u0e32\u0e01",
   "exPhon": "ph\u01d2m t\u00f2k-jai m\u00e2ak",
   "exGloss": "Saya sangat terkejut.",
   "note": ""
  },
  {
   "id": "v421",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 5,
   "th": "\u0e40\u0e1a\u0e37\u0e48\u0e2d",
   "audio": "\u0e40\u0e1a\u0e37\u0e48\u0e2d",
   "phon": "b\u00f9ea",
   "rom": "buea",
   "freq": 3,
   "gloss": "bosan",
   "alt": [
    "jenuh"
   ],
   "detail": "sifat \u00b7 RTGS: buea",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e1a\u0e37\u0e48\u0e2d\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e19\u0e35\u0e49",
   "exPhon": "ph\u01d2m b\u00f9ea aa-h\u01cean n\u00edi",
   "exGloss": "Saya bosan dengan makanan ini.",
   "note": ""
  },
  {
   "id": "v422",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e2d\u0e22\u0e48\u0e32",
   "audio": "\u0e2d\u0e22\u0e48\u0e32",
   "phon": "y\u00e0a",
   "rom": "ya",
   "freq": 2,
   "gloss": "jangan",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: ya",
   "cls": "",
   "exTh": "\u0e2d\u0e22\u0e48\u0e32\u0e25\u0e37\u0e21\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "y\u00e0a luuem n\u00e1 khr\u00e1p",
   "exGloss": "Jangan lupa, ya.",
   "note": "Salah satu dari empat kata ber-\u0e2d\u0e22: \u0e2d\u0e22\u0e48\u0e32, \u0e2d\u0e22\u0e39\u0e48, \u0e2d\u0e22\u0e48\u0e32\u0e07, \u0e2d\u0e22\u0e32\u0e01."
  },
  {
   "id": "v423",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e2d\u0e22\u0e48\u0e32\u0e07",
   "audio": "\u0e2d\u0e22\u0e48\u0e32\u0e07",
   "phon": "y\u00e0ang",
   "rom": "yang",
   "freq": 2,
   "gloss": "cara; macam",
   "alt": [
    "macam"
   ],
   "detail": "nomina \u00b7 RTGS: yang",
   "cls": "",
   "exTh": "\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e19\u0e35\u0e49\u0e14\u0e35\u0e01\u0e27\u0e48\u0e32",
   "exPhon": "y\u00e0ang n\u00edi dii kw\u00e0a",
   "exGloss": "Cara ini lebih baik.",
   "note": ""
  },
  {
   "id": "v424",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19",
   "audio": "\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19",
   "phon": "th\u00fak-wan",
   "rom": "thukwan",
   "freq": 2,
   "gloss": "setiap hari",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: thukwan",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e40\u0e23\u0e35\u0e22\u0e19\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19",
   "exPhon": "ph\u01d2m rian th\u00fak-wan",
   "exGloss": "Saya belajar setiap hari.",
   "note": ""
  },
  {
   "id": "v425",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e17\u0e38\u0e01\u0e04\u0e19",
   "audio": "\u0e17\u0e38\u0e01\u0e04\u0e19",
   "phon": "th\u00fak-khon",
   "rom": "thukkhon",
   "freq": 3,
   "gloss": "semua orang",
   "alt": [],
   "detail": "ganti \u00b7 RTGS: thukkhon",
   "cls": "",
   "exTh": "\u0e17\u0e38\u0e01\u0e04\u0e19\u0e21\u0e32\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "th\u00fak-khon maa l\u00e1eo",
   "exGloss": "Semua orang sudah datang.",
   "note": ""
  },
  {
   "id": "v426",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 5,
   "th": "\u0e1b\u0e35\u0e19\u0e35\u0e49",
   "audio": "\u0e1b\u0e35\u0e19\u0e35\u0e49",
   "phon": "pii-n\u00edi",
   "rom": "pini",
   "freq": 3,
   "gloss": "tahun ini",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: pini",
   "cls": "",
   "exTh": "\u0e1b\u0e35\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e1b\u0e44\u0e17\u0e22",
   "exPhon": "pii-n\u00edi ph\u01d2m pai thai",
   "exGloss": "Tahun ini saya pergi ke Thailand.",
   "note": ""
  },
  {
   "id": "v427",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 4,
   "th": "\u0e2a\u0e34\u0e1a\u0e40\u0e2d\u0e47\u0e14",
   "audio": "\u0e2a\u0e34\u0e1a\u0e40\u0e2d\u0e47\u0e14",
   "phon": "s\u00ecp-\u00e8t",
   "rom": "sip-et",
   "freq": 2,
   "gloss": "sebelas",
   "alt": [
    "11"
   ],
   "detail": "angka \u00b7 RTGS: sip-et",
   "cls": "",
   "exTh": "\u0e2a\u0e34\u0e1a\u0e40\u0e2d\u0e47\u0e14\u0e1a\u0e32\u0e17",
   "exPhon": "s\u00ecp-\u00e8t b\u00e0at",
   "exGloss": "sebelas baht",
   "note": "Angka satu berubah menjadi \u0e40\u0e2d\u0e47\u0e14 ketika menjadi satuan: 11, 21, 31, dan seterusnya."
  },
  {
   "id": "v428",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 4,
   "th": "\u0e2a\u0e34\u0e1a\u0e2a\u0e2d\u0e07",
   "audio": "\u0e2a\u0e34\u0e1a\u0e2a\u0e2d\u0e07",
   "phon": "s\u00ecp-s\u01ceawng",
   "rom": "sip song",
   "freq": 2,
   "gloss": "dua belas",
   "alt": [
    "12"
   ],
   "detail": "angka \u00b7 RTGS: sip song",
   "cls": "",
   "exTh": "\u0e2a\u0e34\u0e1a\u0e2a\u0e2d\u0e07\u0e04\u0e19",
   "exPhon": "s\u00ecp-s\u01ceawng khon",
   "exGloss": "dua belas orang",
   "note": ""
  },
  {
   "id": "v429",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 4,
   "th": "\u0e2a\u0e32\u0e21\u0e2a\u0e34\u0e1a",
   "audio": "\u0e2a\u0e32\u0e21\u0e2a\u0e34\u0e1a",
   "phon": "s\u01ceam-s\u00ecp",
   "rom": "samsip",
   "freq": 2,
   "gloss": "tiga puluh",
   "alt": [
    "30"
   ],
   "detail": "angka \u00b7 RTGS: samsip",
   "cls": "",
   "exTh": "\u0e2a\u0e32\u0e21\u0e2a\u0e34\u0e1a\u0e1a\u0e32\u0e17",
   "exPhon": "s\u01ceam-s\u00ecp b\u00e0at",
   "exGloss": "tiga puluh baht",
   "note": ""
  },
  {
   "id": "v430",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 4,
   "th": "\u0e2b\u0e49\u0e32\u0e2a\u0e34\u0e1a",
   "audio": "\u0e2b\u0e49\u0e32\u0e2a\u0e34\u0e1a",
   "phon": "h\u00e2a-s\u00ecp",
   "rom": "hasip",
   "freq": 2,
   "gloss": "lima puluh",
   "alt": [
    "50"
   ],
   "detail": "angka \u00b7 RTGS: hasip",
   "cls": "",
   "exTh": "\u0e2b\u0e49\u0e32\u0e2a\u0e34\u0e1a\u0e1a\u0e32\u0e17\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "h\u00e2a-s\u00ecp b\u00e0at khr\u00e1p",
   "exGloss": "Lima puluh baht.",
   "note": ""
  },
  {
   "id": "v431",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 6,
   "th": "\u0e41\u0e23\u0e01",
   "audio": "\u0e41\u0e23\u0e01",
   "phon": "r\u00e2ek",
   "rom": "raek",
   "freq": 3,
   "gloss": "pertama",
   "alt": [
    "awal"
   ],
   "detail": "sifat \u00b7 RTGS: raek",
   "cls": "",
   "exTh": "\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01\u0e17\u0e35\u0e48\u0e21\u0e32",
   "exPhon": "kr\u00e1ng r\u00e2ek th\u00eei maa",
   "exGloss": "pertama kali datang",
   "note": ""
  },
  {
   "id": "v432",
   "kind": "flip",
   "cat": "angka-kata",
   "catLabel": "Angka",
   "stage": 6,
   "th": "\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22",
   "audio": "\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22",
   "phon": "s\u00f9t-th\u00e1ai",
   "rom": "sutthai",
   "freq": 3,
   "gloss": "terakhir",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: sutthai",
   "cls": "",
   "exTh": "\u0e27\u0e31\u0e19\u0e2a\u0e38\u0e14\u0e17\u0e49\u0e32\u0e22\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "wan s\u00f9t-th\u00e1ai l\u00e1eo",
   "exGloss": "Sudah hari terakhir.",
   "note": ""
  },
  {
   "id": "v433",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e17\u0e33\u0e2d\u0e32\u0e2b\u0e32\u0e23",
   "audio": "\u0e17\u0e33\u0e2d\u0e32\u0e2b\u0e32\u0e23",
   "phon": "tham aa-h\u01cean",
   "rom": "tham ahan",
   "freq": 2,
   "gloss": "memasak",
   "alt": [
    "masak"
   ],
   "detail": "verba \u00b7 RTGS: tham ahan",
   "cls": "",
   "exTh": "\u0e41\u0e21\u0e48\u0e17\u0e33\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e01\u0e48\u0e07",
   "exPhon": "m\u00e2e tham aa-h\u01cean k\u00e8ng",
   "exGloss": "Ibu pandai memasak.",
   "note": ""
  },
  {
   "id": "v434",
   "kind": "flip",
   "cat": "uang",
   "catLabel": "Uang & belanja",
   "stage": 4,
   "th": "\u0e0b\u0e37\u0e49\u0e2d\u0e02\u0e2d\u0e07",
   "audio": "\u0e0b\u0e37\u0e49\u0e2d\u0e02\u0e2d\u0e07",
   "phon": "s\u00faue-kh\u01ceawng",
   "rom": "suekhong",
   "freq": 2,
   "gloss": "berbelanja",
   "alt": [
    "belanja"
   ],
   "detail": "verba \u00b7 RTGS: suekhong",
   "cls": "",
   "exTh": "\u0e44\u0e1b\u0e0b\u0e37\u0e49\u0e2d\u0e02\u0e2d\u0e07\u0e17\u0e35\u0e48\u0e2b\u0e49\u0e32\u0e07",
   "exPhon": "pai s\u00faue-kh\u01ceawng th\u00eei h\u00e2ang",
   "exGloss": "Pergi berbelanja di mal.",
   "note": ""
  },
  {
   "id": "v435",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e14\u0e39\u0e2b\u0e19\u0e31\u0e07",
   "audio": "\u0e14\u0e39\u0e2b\u0e19\u0e31\u0e07",
   "phon": "duu n\u01ceng",
   "rom": "du nang",
   "freq": 2,
   "gloss": "menonton film",
   "alt": [],
   "detail": "verba \u00b7 RTGS: du nang",
   "cls": "",
   "exTh": "\u0e04\u0e37\u0e19\u0e19\u0e35\u0e49\u0e44\u0e1b\u0e14\u0e39\u0e2b\u0e19\u0e31\u0e07\u0e01\u0e31\u0e19",
   "exPhon": "khuuen n\u00edi pai duu n\u01ceng kan",
   "exGloss": "Malam ini kita nonton film, yuk.",
   "note": ""
  },
  {
   "id": "v436",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 4,
   "th": "\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27",
   "audio": "\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27",
   "phon": "th\u00eeao",
   "rom": "thiao",
   "freq": 2,
   "gloss": "bertamasya, jalan-jalan",
   "alt": [
    "jalan-jalan"
   ],
   "detail": "verba \u00b7 RTGS: thiao",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e21\u0e32\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27\u0e44\u0e17\u0e22",
   "exPhon": "ph\u01d2m maa th\u00eeao thai",
   "exGloss": "Saya datang berwisata ke Thailand.",
   "note": "\u0e44\u0e1b\u0e40\u0e17\u0e35\u0e48\u0e22\u0e27 adalah kata yang paling sering dipakai untuk 'jalan-jalan' maupun 'berlibur'."
  },
  {
   "id": "v437",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e1e\u0e31\u0e01\u0e1c\u0e48\u0e2d\u0e19",
   "audio": "\u0e1e\u0e31\u0e01\u0e1c\u0e48\u0e2d\u0e19",
   "phon": "ph\u00e1k-ph\u00e0awn",
   "rom": "phakphon",
   "freq": 3,
   "gloss": "beristirahat",
   "alt": [
    "santai"
   ],
   "detail": "verba \u00b7 RTGS: phakphon",
   "cls": "",
   "exTh": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e1e\u0e31\u0e01\u0e1c\u0e48\u0e2d\u0e19",
   "exPhon": "wan-n\u00edi ph\u01d2m ph\u00e1k-ph\u00e0awn",
   "exGloss": "Hari ini saya beristirahat.",
   "note": ""
  },
  {
   "id": "v438",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21",
   "audio": "\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21",
   "phon": "pr\u00e0-chum",
   "rom": "prachum",
   "freq": 3,
   "gloss": "rapat",
   "alt": [
    "pertemuan"
   ],
   "detail": "nomina \u00b7 RTGS: prachum",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e21\u0e35\u0e1b\u0e23\u0e30\u0e0a\u0e38\u0e21\u0e1a\u0e48\u0e32\u0e22\u0e19\u0e35\u0e49",
   "exPhon": "ph\u01d2m mii pr\u00e0-chum b\u00e0ai n\u00edi",
   "exGloss": "Saya ada rapat siang ini.",
   "note": ""
  },
  {
   "id": "v439",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 5,
   "th": "\u0e19\u0e31\u0e14",
   "audio": "\u0e19\u0e31\u0e14",
   "phon": "n\u00e1t",
   "rom": "nat",
   "freq": 3,
   "gloss": "janji temu; membuat janji",
   "alt": [
    "janji"
   ],
   "detail": "nomina \u00b7 RTGS: nat",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e21\u0e35\u0e19\u0e31\u0e14\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19",
   "exPhon": "ph\u01d2m mii n\u00e1t taawn-yen",
   "exGloss": "Saya ada janji sore ini.",
   "note": ""
  },
  {
   "id": "v440",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 4,
   "th": "\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01",
   "audio": "\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01",
   "phon": "r\u00fau-j\u00e0k",
   "rom": "ruchak",
   "freq": 2,
   "gloss": "mengenal",
   "alt": [
    "kenal"
   ],
   "detail": "verba \u00b7 RTGS: ruchak",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e40\u0e02\u0e32",
   "exPhon": "ph\u01d2m r\u00fau-j\u00e0k kh\u01ceo",
   "exGloss": "Saya mengenal dia.",
   "note": "\u0e23\u0e39\u0e49 saja berarti 'tahu' tentang sesuatu; untuk mengenal orang dipakai \u0e23\u0e39\u0e49\u0e08\u0e31\u0e01."
  },
  {
   "id": "v441",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 6,
   "th": "\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",
   "audio": "\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23",
   "phon": "t\u00e2awng-kaan",
   "rom": "tongkan",
   "freq": 3,
   "gloss": "memerlukan",
   "alt": [
    "butuh",
    "perlu"
   ],
   "detail": "verba \u00b7 RTGS: tongkan",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e32\u0e23\u0e2b\u0e49\u0e2d\u0e07\u0e40\u0e07\u0e35\u0e22\u0e1a",
   "exPhon": "ph\u01d2m t\u00e2awng-kaan h\u00e2awng ng\u00eeap",
   "exGloss": "Saya memerlukan kamar yang sunyi.",
   "note": "Lebih resmi daripada \u0e2d\u0e22\u0e32\u0e01; dipakai pada tulisan dan percakapan dengan orang yang baru dikenal."
  },
  {
   "id": "v442",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e23\u0e35\u0e1a",
   "audio": "\u0e23\u0e35\u0e1a",
   "phon": "r\u00eeip",
   "rom": "rip",
   "freq": 3,
   "gloss": "buru-buru",
   "alt": [
    "tergesa"
   ],
   "detail": "verba \u00b7 RTGS: rip",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e23\u0e35\u0e1a\u0e44\u0e1b",
   "exPhon": "ph\u01d2m t\u00e2awng r\u00eeip pai",
   "exGloss": "Saya harus buru-buru pergi.",
   "note": ""
  },
  {
   "id": "v443",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 5,
   "th": "\u0e17\u0e31\u0e19",
   "audio": "\u0e17\u0e31\u0e19",
   "phon": "than",
   "rom": "than",
   "freq": 3,
   "gloss": "keburu, sempat",
   "alt": [
    "sempat"
   ],
   "detail": "verba \u00b7 RTGS: than",
   "cls": "",
   "exTh": "\u0e44\u0e1b\u0e44\u0e21\u0e48\u0e17\u0e31\u0e19\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "pai m\u00e2i than l\u00e1eo",
   "exGloss": "Sudah tidak keburu pergi.",
   "note": ""
  },
  {
   "id": "v444",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 5,
   "th": "\u0e2a\u0e32\u0e22",
   "audio": "\u0e2a\u0e32\u0e22",
   "phon": "s\u01ceai",
   "rom": "sai",
   "freq": 2,
   "gloss": "terlambat; jalur",
   "alt": [
    "telat"
   ],
   "detail": "sifat \u00b7 RTGS: sai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e21\u0e32\u0e2a\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "ph\u01d2m maa s\u01ceai khr\u00e1p",
   "exGloss": "Saya datang terlambat.",
   "note": "Kata yang sama berarti 'jalur' untuk bus dan kereta: \u0e23\u0e16\u0e2a\u0e32\u0e22\u0e19\u0e35\u0e49 ('bus jalur ini')."
  },
  {
   "id": "v445",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 6,
   "th": "\u0e1e\u0e34\u0e40\u0e28\u0e29",
   "audio": "\u0e1e\u0e34\u0e40\u0e28\u0e29",
   "phon": "ph\u00ed-s\u00e8et",
   "rom": "phiset",
   "freq": 3,
   "gloss": "istimewa",
   "alt": [
    "spesial"
   ],
   "detail": "sifat \u00b7 RTGS: phiset",
   "cls": "",
   "exTh": "\u0e23\u0e32\u0e04\u0e32\u0e1e\u0e34\u0e40\u0e28\u0e29\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49",
   "exPhon": "raa-khaa ph\u00ed-s\u00e8et wan-n\u00edi",
   "exGloss": "Harga istimewa hari ini.",
   "note": "Di warung mi, \u0e1e\u0e34\u0e40\u0e28\u0e29 berarti porsi besar."
  },
  {
   "id": "v446",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e41\u0e19\u0e48\u0e19\u0e2d\u0e19",
   "audio": "\u0e41\u0e19\u0e48\u0e19\u0e2d\u0e19",
   "phon": "n\u00e2e-naawn",
   "rom": "naenon",
   "freq": 3,
   "gloss": "pasti, tentu saja",
   "alt": [
    "tentu"
   ],
   "detail": "keterangan \u00b7 RTGS: naenon",
   "cls": "",
   "exTh": "\u0e41\u0e19\u0e48\u0e19\u0e2d\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "n\u00e2e-naawn khr\u00e1p",
   "exGloss": "Tentu saja.",
   "note": ""
  },
  {
   "id": "v447",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e1a\u0e32\u0e07\u0e17\u0e35",
   "audio": "\u0e1a\u0e32\u0e07\u0e17\u0e35",
   "phon": "baang-thii",
   "rom": "bangthi",
   "freq": 3,
   "gloss": "mungkin",
   "alt": [
    "barangkali"
   ],
   "detail": "keterangan \u00b7 RTGS: bangthi",
   "cls": "",
   "exTh": "\u0e1a\u0e32\u0e07\u0e17\u0e35\u0e40\u0e02\u0e32\u0e44\u0e21\u0e48\u0e21\u0e32",
   "exPhon": "baang-thii kh\u01ceo m\u00e2i maa",
   "exGloss": "Mungkin dia tidak datang.",
   "note": ""
  },
  {
   "id": "v448",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 5,
   "th": "\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",
   "audio": "\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",
   "phon": "th\u00f9uk-t\u00e2awng",
   "rom": "thuktong",
   "freq": 3,
   "gloss": "benar, tepat",
   "alt": [
    "betul"
   ],
   "detail": "sifat \u00b7 RTGS: thuktong",
   "cls": "",
   "exTh": "\u0e04\u0e33\u0e15\u0e2d\u0e1a\u0e16\u0e39\u0e01\u0e15\u0e49\u0e2d\u0e07",
   "exPhon": "kham-t\u00e0awp th\u00f9uk-t\u00e2awng",
   "exGloss": "Jawabannya benar.",
   "note": "\u0e04\u0e33\u0e15\u0e2d\u0e1a berarti 'jawaban'; \u0e04\u0e33 adalah 'kata'."
  },
  {
   "id": "v449",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e1c\u0e34\u0e14",
   "audio": "\u0e1c\u0e34\u0e14",
   "phon": "ph\u00ect",
   "rom": "phit",
   "freq": 2,
   "gloss": "salah",
   "alt": [
    "keliru"
   ],
   "detail": "sifat \u00b7 RTGS: phit",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e1e\u0e39\u0e14\u0e1c\u0e34\u0e14",
   "exPhon": "ph\u01d2m ph\u00fbut ph\u00ect",
   "exGloss": "Saya salah bicara.",
   "note": ""
  },
  {
   "id": "v450",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 6,
   "th": "\u0e41\u0e23\u0e07",
   "audio": "\u0e41\u0e23\u0e07",
   "phon": "raeng",
   "rom": "raeng",
   "freq": 3,
   "gloss": "kuat, keras (tenaga)",
   "alt": [
    "kencang"
   ],
   "detail": "sifat \u00b7 RTGS: raeng",
   "cls": "",
   "exTh": "\u0e25\u0e21\u0e41\u0e23\u0e07\u0e21\u0e32\u0e01",
   "exPhon": "lom raeng m\u00e2ak",
   "exGloss": "Anginnya sangat kencang.",
   "note": ""
  },
  {
   "id": "v451",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e15\u0e37\u0e48\u0e19\u0e40\u0e15\u0e49\u0e19",
   "audio": "\u0e15\u0e37\u0e48\u0e19\u0e40\u0e15\u0e49\u0e19",
   "phon": "t\u00f9uen-t\u00ean",
   "rom": "tuenten",
   "freq": 3,
   "gloss": "gembira; gugup",
   "alt": [
    "deg-degan"
   ],
   "detail": "sifat \u00b7 RTGS: tuenten",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e15\u0e37\u0e48\u0e19\u0e40\u0e15\u0e49\u0e19\u0e21\u0e32\u0e01",
   "exPhon": "ph\u01d2m t\u00f9uen-t\u00ean m\u00e2ak",
   "exGloss": "Saya sangat gembira.",
   "note": ""
  },
  {
   "id": "v452",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 5,
   "th": "\u0e2a\u0e19\u0e43\u0e08",
   "audio": "\u0e2a\u0e19\u0e43\u0e08",
   "phon": "s\u01d2n-jai",
   "rom": "sonchai",
   "freq": 3,
   "gloss": "tertarik, berminat",
   "alt": [
    "minat"
   ],
   "detail": "verba \u00b7 RTGS: sonchai",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e2a\u0e19\u0e43\u0e08\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
   "exPhon": "ph\u01d2m s\u01d2n-jai phaa-s\u01cea thai",
   "exGloss": "Saya tertarik pada bahasa Thai.",
   "note": ""
  },
  {
   "id": "v453",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 4,
   "th": "\u0e01\u0e33\u0e25\u0e31\u0e07",
   "audio": "\u0e01\u0e33\u0e25\u0e31\u0e07",
   "phon": "kam-lang",
   "rom": "kamlang",
   "freq": 2,
   "gloss": "sedang (berlangsung)",
   "alt": [],
   "detail": "partikel \u00b7 RTGS: kamlang",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27",
   "exPhon": "ph\u01d2m kam-lang kin kh\u00e2ao",
   "exGloss": "Saya sedang makan.",
   "note": "Diletakkan sebelum kata kerja, dan sering dipasangkan dengan \u0e2d\u0e22\u0e39\u0e48 di akhir kalimat."
  },
  {
   "id": "v454",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07",
   "audio": "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07",
   "phon": "r\u00fbeang",
   "rom": "rueang",
   "freq": 2,
   "gloss": "hal, perkara, cerita",
   "alt": [
    "cerita",
    "masalah"
   ],
   "detail": "nomina \u00b7 klasifikator: \u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07 \u00b7 RTGS: rueang",
   "cls": "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07",
   "exTh": "\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49\u0e2a\u0e33\u0e04\u0e31\u0e0d",
   "exPhon": "r\u00fbeang n\u00edi s\u01cem-khan",
   "exGloss": "Hal ini penting.",
   "note": "Juga menjadi klasifikator untuk film dan cerita: \u0e2b\u0e19\u0e31\u0e07\u0e40\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e19\u0e35\u0e49."
  },
  {
   "id": "v455",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 6,
   "th": "\u0e1b\u0e31\u0e0d\u0e2b\u0e32",
   "audio": "\u0e1b\u0e31\u0e0d\u0e2b\u0e32",
   "phon": "pan-h\u01cea",
   "rom": "panha",
   "freq": 3,
   "gloss": "masalah",
   "alt": [
    "persoalan"
   ],
   "detail": "nomina \u00b7 RTGS: panha",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e21\u0e35\u0e1b\u0e31\u0e0d\u0e2b\u0e32\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "m\u00e2i mii pan-h\u01cea khr\u00e1p",
   "exGloss": "Tidak ada masalah.",
   "note": ""
  },
  {
   "id": "v456",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e02\u0e48\u0e32\u0e27",
   "audio": "\u0e02\u0e48\u0e32\u0e27",
   "phon": "kh\u00e0ao",
   "rom": "khao",
   "freq": 3,
   "gloss": "berita",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e02\u0e48\u0e32\u0e27 \u00b7 RTGS: khao",
   "cls": "\u0e02\u0e48\u0e32\u0e27",
   "exTh": "\u0e1c\u0e21\u0e14\u0e39\u0e02\u0e48\u0e32\u0e27\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19",
   "exPhon": "ph\u01d2m duu kh\u00e0ao th\u00fak-wan",
   "exGloss": "Saya menonton berita setiap hari.",
   "note": "Bandingkan \u0e02\u0e49\u0e32\u0e27 (kh\u00e2ao, 'nasi') dan \u0e02\u0e32\u0e27 (kh\u01ceao, 'putih') yang hanya berbeda nada."
  },
  {
   "id": "v457",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e04\u0e33",
   "audio": "\u0e04\u0e33",
   "phon": "kham",
   "rom": "kham",
   "freq": 2,
   "gloss": "kata",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e04\u0e33 \u00b7 RTGS: kham",
   "cls": "\u0e04\u0e33",
   "exTh": "\u0e04\u0e33\u0e19\u0e35\u0e49\u0e41\u0e1b\u0e25\u0e27\u0e48\u0e32\u0e2d\u0e30\u0e44\u0e23",
   "exPhon": "kham n\u00edi plae w\u00e2a \u00e0-rai",
   "exGloss": "Kata ini artinya apa?",
   "note": "\u0e41\u0e1b\u0e25 (plae) berarti 'menerjemahkan'; \u0e41\u0e1b\u0e25\u0e27\u0e48\u0e32 berarti 'artinya'."
  },
  {
   "id": "v458",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e41\u0e1b\u0e25",
   "audio": "\u0e41\u0e1b\u0e25",
   "phon": "plae",
   "rom": "plae",
   "freq": 3,
   "gloss": "menerjemahkan",
   "alt": [
    "terjemah",
    "arti"
   ],
   "detail": "verba \u00b7 RTGS: plae",
   "cls": "",
   "exTh": "\u0e0a\u0e48\u0e27\u0e22\u0e41\u0e1b\u0e25\u0e43\u0e2b\u0e49\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "exPhon": "ch\u00fbai plae h\u00e2i n\u00e0awi",
   "exGloss": "Tolong terjemahkan untuk saya.",
   "note": ""
  },
  {
   "id": "v459",
   "kind": "flip",
   "cat": "partikel",
   "catLabel": "Partikel",
   "stage": 3,
   "th": "\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "audio": "\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "phon": "n\u00e0awi",
   "rom": "noi",
   "freq": 1,
   "gloss": "sedikit; dong (pelembut permintaan)",
   "alt": [
    "dong"
   ],
   "detail": "partikel \u00b7 RTGS: noi",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u01ceaw n\u00e1am n\u00e0awi khr\u00e1p",
   "exGloss": "Minta air sedikit, dong.",
   "note": "Ditambahkan pada permintaan supaya tidak terdengar seperti perintah. Sangat sering dipakai."
  },
  {
   "id": "v460",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e27\u0e48\u0e32",
   "audio": "\u0e27\u0e48\u0e32",
   "phon": "w\u00e2a",
   "rom": "wa",
   "freq": 2,
   "gloss": "bahwa; berkata",
   "alt": [
    "bahwa"
   ],
   "detail": "sambung \u00b7 RTGS: wa",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e04\u0e34\u0e14\u0e27\u0e48\u0e32\u0e43\u0e0a\u0e48",
   "exPhon": "ph\u01d2m kh\u00edt w\u00e2a ch\u00e2i",
   "exGloss": "Saya rasa memang begitu.",
   "note": "Menghubungkan kata kerja berpikir atau berkata dengan isinya: \u0e04\u0e34\u0e14\u0e27\u0e48\u0e32, \u0e1a\u0e2d\u0e01\u0e27\u0e48\u0e32, \u0e1e\u0e39\u0e14\u0e27\u0e48\u0e32."
  },
  {
   "id": "v461",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 3,
   "th": "\u0e43\u0e19",
   "audio": "\u0e43\u0e19",
   "phon": "nai",
   "rom": "nai",
   "freq": 1,
   "gloss": "di dalam",
   "alt": [
    "dalam"
   ],
   "detail": "depan \u00b7 RTGS: nai",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e07\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e19\u0e01\u0e23\u0e30\u0e40\u0e1b\u0e4b\u0e32",
   "exPhon": "kh\u01ceawng y\u00f9u nai kr\u00e0-p\u01ceo",
   "exGloss": "Barangnya ada di dalam tas.",
   "note": "Termasuk daftar kata ber-\u0e43 yang ejaannya perlu dihafal."
  },
  {
   "id": "v462",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 3,
   "th": "\u0e1a\u0e19",
   "audio": "\u0e1a\u0e19",
   "phon": "bon",
   "rom": "bon",
   "freq": 2,
   "gloss": "di atas",
   "alt": [
    "atas"
   ],
   "detail": "depan \u00b7 RTGS: bon",
   "cls": "",
   "exTh": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19\u0e42\u0e15\u0e4a\u0e30",
   "exPhon": "n\u01ceng-s\u01d4ue y\u00f9u bon t\u00f3",
   "exGloss": "Bukunya ada di atas meja.",
   "note": ""
  },
  {
   "id": "v463",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e43\u0e15\u0e49",
   "audio": "\u0e43\u0e15\u0e49",
   "phon": "t\u00e2ai",
   "rom": "tai",
   "freq": 2,
   "gloss": "di bawah",
   "alt": [
    "bawah"
   ],
   "detail": "depan \u00b7 RTGS: tai",
   "cls": "",
   "exTh": "\u0e41\u0e21\u0e27\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e15\u0e49\u0e40\u0e15\u0e35\u0e22\u0e07",
   "exPhon": "maeo y\u00f9u t\u00e2ai tiang",
   "exGloss": "Kucingnya ada di bawah tempat tidur.",
   "note": ""
  },
  {
   "id": "v464",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e02\u0e49\u0e32\u0e07",
   "audio": "\u0e02\u0e49\u0e32\u0e07",
   "phon": "kh\u00e2ang",
   "rom": "khang",
   "freq": 2,
   "gloss": "sisi, sebelah",
   "alt": [
    "samping"
   ],
   "detail": "nomina \u00b7 RTGS: khang",
   "cls": "",
   "exTh": "\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e02\u0e49\u0e32\u0e07\u0e18\u0e19\u0e32\u0e04\u0e32\u0e23",
   "exPhon": "r\u00e1an y\u00f9u kh\u00e2ang th\u00e1-naa-khaan",
   "exGloss": "Tokonya di sebelah bank.",
   "note": "Membentuk banyak kata arah: \u0e02\u0e49\u0e32\u0e07\u0e43\u0e19, \u0e02\u0e49\u0e32\u0e07\u0e19\u0e2d\u0e01, \u0e02\u0e49\u0e32\u0e07\u0e1a\u0e19, \u0e02\u0e49\u0e32\u0e07\u0e25\u0e48\u0e32\u0e07, \u0e02\u0e49\u0e32\u0e07\u0e2b\u0e25\u0e31\u0e07."
  },
  {
   "id": "v465",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 5,
   "th": "\u0e19\u0e2d\u0e01",
   "audio": "\u0e19\u0e2d\u0e01",
   "phon": "n\u00e2awk",
   "rom": "nok",
   "freq": 3,
   "gloss": "luar",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: nok",
   "cls": "",
   "exTh": "\u0e23\u0e2d\u0e02\u0e49\u0e32\u0e07\u0e19\u0e2d\u0e01\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "raaw kh\u00e2ang-n\u00e2awk n\u00e1 khr\u00e1p",
   "exGloss": "Tunggu di luar, ya.",
   "note": ""
  },
  {
   "id": "v466",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 5,
   "th": "\u0e25\u0e48\u0e32\u0e07",
   "audio": "\u0e25\u0e48\u0e32\u0e07",
   "phon": "l\u00e2ang",
   "rom": "lang",
   "freq": 3,
   "gloss": "bawah",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: lang",
   "cls": "",
   "exTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e02\u0e49\u0e32\u0e07\u0e25\u0e48\u0e32\u0e07",
   "exPhon": "h\u00e2awng-n\u00e1am y\u00f9u kh\u00e2ang-l\u00e2ang",
   "exGloss": "Toiletnya ada di bawah.",
   "note": ""
  },
  {
   "id": "v467",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e23\u0e30\u0e27\u0e31\u0e07",
   "audio": "\u0e23\u0e30\u0e27\u0e31\u0e07",
   "phon": "r\u00e1-wang",
   "rom": "rawang",
   "freq": 3,
   "gloss": "hati-hati, awas",
   "alt": [
    "awas"
   ],
   "detail": "verba \u00b7 RTGS: rawang",
   "cls": "",
   "exTh": "\u0e23\u0e30\u0e27\u0e31\u0e07\u0e23\u0e16\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "r\u00e1-wang r\u00f3t khr\u00e1p",
   "exGloss": "Hati-hati, ada mobil.",
   "note": ""
  },
  {
   "id": "v468",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 5,
   "th": "\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e25\u0e48\u0e19",
   "audio": "\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e25\u0e48\u0e19",
   "phon": "ch\u00fbue-l\u00ean",
   "rom": "chuelen",
   "freq": 3,
   "gloss": "nama panggilan",
   "alt": [
    "nama kecil"
   ],
   "detail": "nomina \u00b7 RTGS: chuelen",
   "cls": "",
   "exTh": "\u0e0a\u0e37\u0e48\u0e2d\u0e40\u0e25\u0e48\u0e19\u0e1c\u0e21\u0e04\u0e37\u0e2d\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "exPhon": "ch\u00fbue-l\u00ean ph\u01d2m khuue n\u00f9eng",
   "exGloss": "Nama panggilan saya Nueng.",
   "note": "Hampir setiap orang Thai punya nama panggilan pendek, dan itulah yang dipakai sehari-hari."
  },
  {
   "id": "v469",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 6,
   "th": "\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25",
   "audio": "\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25",
   "phon": "naam-s\u00e0-kun",
   "rom": "namsakun",
   "freq": 3,
   "gloss": "nama keluarga",
   "alt": [
    "marga"
   ],
   "detail": "nomina \u00b7 RTGS: namsakun",
   "cls": "",
   "exTh": "\u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25\u0e22\u0e32\u0e27\u0e21\u0e32\u0e01",
   "exPhon": "naam-s\u00e0-kun yaao m\u00e2ak",
   "exGloss": "Nama keluarganya sangat panjang.",
   "note": ""
  },
  {
   "id": "v470",
   "kind": "flip",
   "cat": "orang",
   "catLabel": "Orang",
   "stage": 4,
   "th": "\u0e2d\u0e32\u0e22\u0e38",
   "audio": "\u0e2d\u0e32\u0e22\u0e38",
   "phon": "aa-y\u00fa",
   "rom": "ayu",
   "freq": 2,
   "gloss": "usia",
   "alt": [
    "umur"
   ],
   "detail": "nomina \u00b7 RTGS: ayu",
   "cls": "",
   "exTh": "\u0e04\u0e38\u0e13\u0e2d\u0e32\u0e22\u0e38\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48",
   "exPhon": "khun aa-y\u00fa th\u00e2o-r\u00e0i",
   "exGloss": "Berapa usia Anda?",
   "note": ""
  },
  {
   "id": "v471",
   "kind": "flip",
   "cat": "tempat",
   "catLabel": "Tempat",
   "stage": 5,
   "th": "\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48",
   "audio": "\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48",
   "phon": "th\u00eei-y\u00f9u",
   "rom": "thiyu",
   "freq": 3,
   "gloss": "alamat",
   "alt": [],
   "detail": "nomina \u00b7 RTGS: thiyu",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e17\u0e35\u0e48\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e19\u0e48\u0e2d\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "kh\u01ceaw th\u00eei-y\u00f9u n\u00e0awi khr\u00e1p",
   "exGloss": "Boleh minta alamatnya?",
   "note": ""
  },
  {
   "id": "v472",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e40\u0e02\u0e49\u0e32",
   "audio": "\u0e40\u0e02\u0e49\u0e32",
   "phon": "kh\u00e2o",
   "rom": "khao",
   "freq": 1,
   "gloss": "masuk",
   "alt": [],
   "detail": "verba \u00b7 RTGS: khao",
   "cls": "",
   "exTh": "\u0e40\u0e0a\u0e34\u0e0d\u0e40\u0e02\u0e49\u0e32\u0e21\u0e32\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "chooen kh\u00e2o maa khr\u00e1p",
   "exGloss": "Silakan masuk.",
   "note": "\u0e40\u0e0a\u0e34\u0e0d (chooen) berarti 'silakan'."
  },
  {
   "id": "v473",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e2d\u0e2d\u0e01",
   "audio": "\u0e2d\u0e2d\u0e01",
   "phon": "\u00e0awk",
   "rom": "ok",
   "freq": 1,
   "gloss": "keluar",
   "alt": [],
   "detail": "verba \u00b7 RTGS: ok",
   "cls": "",
   "exTh": "\u0e2d\u0e2d\u0e01\u0e44\u0e1b\u0e02\u0e49\u0e32\u0e07\u0e19\u0e2d\u0e01",
   "exPhon": "\u00e0awk pai kh\u00e2ang-n\u00e2awk",
   "exGloss": "Keluar ke luar.",
   "note": ""
  },
  {
   "id": "v474",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 3,
   "th": "\u0e15\u0e01",
   "audio": "\u0e15\u0e01",
   "phon": "t\u00f2k",
   "rom": "tok",
   "freq": 2,
   "gloss": "jatuh, turun",
   "alt": [
    "jatuh"
   ],
   "detail": "verba \u00b7 RTGS: tok",
   "cls": "",
   "exTh": "\u0e1d\u0e19\u0e15\u0e01\u0e17\u0e38\u0e01\u0e27\u0e31\u0e19",
   "exPhon": "f\u01d2n t\u00f2k th\u00fak-wan",
   "exGloss": "Hujan turun setiap hari.",
   "note": "\u0e1d\u0e19\u0e15\u0e01 ('hujan jatuh') adalah cara biasa mengatakan 'hujan'."
  },
  {
   "id": "v475",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e44\u0e2b\u0e27",
   "audio": "\u0e44\u0e2b\u0e27",
   "phon": "w\u01cei",
   "rom": "wai",
   "freq": 3,
   "gloss": "sanggup, tahan",
   "alt": [
    "kuat"
   ],
   "detail": "verba \u00b7 RTGS: wai",
   "cls": "",
   "exTh": "\u0e40\u0e14\u0e34\u0e19\u0e44\u0e21\u0e48\u0e44\u0e2b\u0e27\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "dooen m\u00e2i w\u01cei l\u00e1eo",
   "exGloss": "Sudah tidak sanggup berjalan.",
   "note": "Salah satu dari tiga kata 'bisa': \u0e44\u0e14\u0e49 (mungkin atau boleh), \u0e40\u0e1b\u0e47\u0e19 (keterampilan), \u0e44\u0e2b\u0e27 (daya tahan)."
  },
  {
   "id": "v476",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 6,
   "th": "\u0e17\u0e23\u0e32\u0e1a",
   "audio": "\u0e17\u0e23\u0e32\u0e1a",
   "phon": "s\u00e2ap",
   "rom": "sap",
   "freq": 3,
   "gloss": "tahu (ragam halus)",
   "alt": [
    "mengetahui"
   ],
   "detail": "verba \u00b7 RTGS: sap",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e17\u0e23\u0e32\u0e1a\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "m\u00e2i s\u00e2ap khr\u00e1p",
   "exGloss": "Saya tidak tahu. (halus)",
   "note": "Perhatikan ejaannya: \u0e17\u0e23 di awal kata dibaca s, bukan thr. Dipakai pada ragam sopan, menggantikan \u0e23\u0e39\u0e49."
  },
  {
   "id": "v477",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e1e\u0e32",
   "audio": "\u0e1e\u0e32",
   "phon": "phaa",
   "rom": "pha",
   "freq": 3,
   "gloss": "membawa (orang), mengantar",
   "alt": [
    "mengajak"
   ],
   "detail": "verba \u00b7 RTGS: pha",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e1e\u0e32\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e19\u0e21\u0e32",
   "exPhon": "ph\u01d2m phaa ph\u00fbean maa",
   "exGloss": "Saya mengajak teman datang.",
   "note": "\u0e1e\u0e32 untuk membawa orang; \u0e40\u0e2d\u0e32 untuk membawa barang."
  },
  {
   "id": "v478",
   "kind": "flip",
   "cat": "jalan",
   "catLabel": "Kendaraan",
   "stage": 5,
   "th": "\u0e1a\u0e34\u0e19",
   "audio": "\u0e1a\u0e34\u0e19",
   "phon": "bin",
   "rom": "bin",
   "freq": 3,
   "gloss": "terbang",
   "alt": [],
   "detail": "verba \u00b7 RTGS: bin",
   "cls": "",
   "exTh": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e1a\u0e34\u0e19\u0e1a\u0e34\u0e19\u0e2a\u0e39\u0e07",
   "exPhon": "khr\u00fbeang-bin bin s\u01d4ung",
   "exGloss": "Pesawatnya terbang tinggi.",
   "note": ""
  },
  {
   "id": "v479",
   "kind": "flip",
   "cat": "kerja",
   "catLabel": "Kata kerja",
   "stage": 5,
   "th": "\u0e42\u0e17\u0e23",
   "audio": "\u0e42\u0e17\u0e23",
   "phon": "thoo",
   "rom": "tho",
   "freq": 2,
   "gloss": "menelepon",
   "alt": [
    "telepon"
   ],
   "detail": "verba \u00b7 RTGS: tho",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e08\u0e30\u0e42\u0e17\u0e23\u0e2b\u0e32\u0e04\u0e38\u0e13",
   "exPhon": "ph\u01d2m j\u00e0 thoo h\u01cea khun",
   "exGloss": "Saya akan menelepon Anda.",
   "note": "Pemendekan dari \u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c. Huruf \u0e23 di sini tidak dibunyikan, sehingga terbaca thoo."
  },
  {
   "id": "v480",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 5,
   "th": "\u0e40\u0e0a\u0e34\u0e0d",
   "audio": "\u0e40\u0e0a\u0e34\u0e0d",
   "phon": "chooen",
   "rom": "choen",
   "freq": 3,
   "gloss": "silakan, mempersilakan",
   "alt": [
    "silakan"
   ],
   "detail": "verba \u00b7 RTGS: choen",
   "cls": "",
   "exTh": "\u0e40\u0e0a\u0e34\u0e0d\u0e19\u0e31\u0e48\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "chooen n\u00e2ng khr\u00e1p",
   "exGloss": "Silakan duduk.",
   "note": ""
  },
  {
   "id": "v481",
   "kind": "flip",
   "cat": "rasa",
   "catLabel": "Perasaan",
   "stage": 6,
   "th": "\u0e0a\u0e37\u0e48\u0e19",
   "audio": "\u0e0a\u0e37\u0e48\u0e19",
   "phon": "ch\u00fbuen",
   "rom": "chuen",
   "freq": 3,
   "gloss": "senang, segar (hati)",
   "alt": [],
   "detail": "sifat \u00b7 RTGS: chuen",
   "cls": "",
   "exTh": "\u0e22\u0e34\u0e19\u0e14\u0e35\u0e41\u0e25\u0e30\u0e0a\u0e37\u0e48\u0e19\u0e43\u0e08",
   "exPhon": "yin-dii l\u00e1e ch\u00fbuen-jai",
   "exGloss": "Senang dan lega hati.",
   "note": "\u0e0a\u0e37\u0e48\u0e19\u0e43\u0e08 berarti 'lega dan menyenangkan hati', sering dipakai untuk minuman yang menyegarkan."
  },
  {
   "id": "v482",
   "kind": "flip",
   "cat": "partikel",
   "catLabel": "Partikel",
   "stage": 3,
   "th": "\u0e19\u0e30",
   "audio": "\u0e19\u0e30",
   "phon": "n\u00e1",
   "rom": "na",
   "freq": 1,
   "gloss": "ya, dong (pelembut)",
   "alt": [
    "ya"
   ],
   "detail": "partikel \u00b7 RTGS: na",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "m\u00e2i ph\u00e8t n\u00e1 khr\u00e1p",
   "exGloss": "Jangan pedas, ya.",
   "note": "Melembutkan permintaan atau mencari persetujuan. Tanpa \u0e19\u0e30, kalimatnya terdengar seperti perintah."
  },
  {
   "id": "v483",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e40\u0e25\u0e22",
   "audio": "\u0e40\u0e25\u0e22",
   "phon": "looei",
   "rom": "loei",
   "freq": 2,
   "gloss": "sama sekali; langsung",
   "alt": [
    "langsung"
   ],
   "detail": "partikel \u00b7 RTGS: loei",
   "cls": "",
   "exTh": "\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e40\u0e25\u0e22",
   "exPhon": "m\u00e2i ph\u00e8t looei",
   "exGloss": "Sama sekali tidak pedas.",
   "note": "Sesudah kalimat negatif berarti 'sama sekali'; sesudah kata kerja berarti 'langsung saja'."
  },
  {
   "id": "v484",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 4,
   "th": "\u0e2d\u0e35\u0e01",
   "audio": "\u0e2d\u0e35\u0e01",
   "phon": "\u00ecik",
   "rom": "ik",
   "freq": 1,
   "gloss": "lagi, tambah",
   "alt": [
    "lagi"
   ],
   "detail": "keterangan \u00b7 RTGS: ik",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e2d\u0e35\u0e01\u0e41\u0e01\u0e49\u0e27\u0e2b\u0e19\u0e36\u0e48\u0e07",
   "exPhon": "kh\u01ceaw \u00ecik k\u00e2eo n\u00f9eng",
   "exGloss": "Minta satu gelas lagi.",
   "note": ""
  },
  {
   "id": "v485",
   "kind": "flip",
   "cat": "sifat",
   "catLabel": "Kata sifat",
   "stage": 4,
   "th": "\u0e40\u0e22\u0e2d\u0e30",
   "audio": "\u0e40\u0e22\u0e2d\u0e30",
   "phon": "y\u00f3e",
   "rom": "yoe",
   "freq": 2,
   "gloss": "banyak (percakapan)",
   "alt": [
    "banyak"
   ],
   "detail": "keterangan \u00b7 RTGS: yoe",
   "cls": "",
   "exTh": "\u0e04\u0e19\u0e40\u0e22\u0e2d\u0e30\u0e21\u0e32\u0e01",
   "exPhon": "khon y\u00f3e m\u00e2ak",
   "exGloss": "Orangnya banyak sekali.",
   "note": "\u0e40\u0e22\u0e2d\u0e30 dipakai dalam percakapan; \u0e21\u0e32\u0e01 dipakai untuk 'sangat' dan juga 'banyak'."
  },
  {
   "id": "v486",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e04\u0e23\u0e31\u0e49\u0e07",
   "audio": "\u0e04\u0e23\u0e31\u0e49\u0e07",
   "phon": "kr\u00e1ng",
   "rom": "khrang",
   "freq": 2,
   "gloss": "kali",
   "alt": [],
   "detail": "klasifikator \u00b7 RTGS: khrang",
   "cls": "",
   "exTh": "\u0e1c\u0e21\u0e21\u0e32\u0e04\u0e23\u0e31\u0e49\u0e07\u0e41\u0e23\u0e01",
   "exPhon": "ph\u01d2m maa kr\u00e1ng r\u00e2ek",
   "exGloss": "Saya datang untuk pertama kali.",
   "note": ""
  },
  {
   "id": "v487",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 5,
   "th": "\u0e25\u0e30",
   "audio": "\u0e25\u0e30",
   "phon": "l\u00e1",
   "rom": "la",
   "freq": 3,
   "gloss": "per, setiap",
   "alt": [
    "per"
   ],
   "detail": "partikel \u00b7 RTGS: la",
   "cls": "",
   "exTh": "\u0e27\u0e31\u0e19\u0e25\u0e30\u0e2a\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e49\u0e07",
   "exPhon": "wan-l\u00e1 s\u01ceawng kr\u00e1ng",
   "exGloss": "dua kali sehari",
   "note": "Dipakai pada takaran: \u0e27\u0e31\u0e19\u0e25\u0e30 ('per hari'), \u0e04\u0e19\u0e25\u0e30 ('per orang'), \u0e2d\u0e31\u0e19\u0e25\u0e30 ('per buah')."
  },
  {
   "id": "v488",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 4,
   "th": "\u0e40\u0e25\u0e48\u0e21",
   "audio": "\u0e40\u0e25\u0e48\u0e21",
   "phon": "l\u00eam",
   "rom": "lem",
   "freq": 2,
   "gloss": "klasifikator untuk buku",
   "alt": [],
   "detail": "klasifikator \u00b7 RTGS: lem",
   "cls": "",
   "exTh": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e2a\u0e32\u0e21\u0e40\u0e25\u0e48\u0e21",
   "exPhon": "n\u01ceng-s\u01d4ue s\u01ceam l\u00eam",
   "exGloss": "tiga buku",
   "note": ""
  },
  {
   "id": "v489",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 4,
   "th": "\u0e04\u0e31\u0e19",
   "audio": "\u0e04\u0e31\u0e19",
   "phon": "khan",
   "rom": "khan",
   "freq": 2,
   "gloss": "klasifikator kendaraan beroda; gatal",
   "alt": [
    "gatal"
   ],
   "detail": "klasifikator \u00b7 RTGS: khan",
   "cls": "",
   "exTh": "\u0e23\u0e16\u0e2a\u0e2d\u0e07\u0e04\u0e31\u0e19",
   "exPhon": "r\u00f3t s\u01ceawng khan",
   "exGloss": "dua mobil",
   "note": "Kata yang sama juga berarti 'gatal' dan menjadi klasifikator untuk sendok dan payung."
  },
  {
   "id": "v490",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e0a\u0e34\u0e49\u0e19",
   "audio": "\u0e0a\u0e34\u0e49\u0e19",
   "phon": "ch\u00edn",
   "rom": "chin",
   "freq": 3,
   "gloss": "klasifikator potongan",
   "alt": [
    "potong"
   ],
   "detail": "klasifikator \u00b7 RTGS: chin",
   "cls": "",
   "exTh": "\u0e02\u0e19\u0e21\u0e2a\u0e2d\u0e07\u0e0a\u0e34\u0e49\u0e19",
   "exPhon": "kh\u00e0-n\u01d2m s\u01ceawng ch\u00edn",
   "exGloss": "dua potong kue",
   "note": ""
  },
  {
   "id": "v491",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 4,
   "th": "\u0e02\u0e27\u0e14",
   "audio": "\u0e02\u0e27\u0e14",
   "phon": "kh\u00f9at",
   "rom": "khuat",
   "freq": 2,
   "gloss": "botol",
   "alt": [],
   "detail": "klasifikator \u00b7 RTGS: khuat",
   "cls": "",
   "exTh": "\u0e19\u0e49\u0e33\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e02\u0e27\u0e14",
   "exPhon": "n\u00e1am n\u00f9eng kh\u00f9at",
   "exGloss": "satu botol air",
   "note": "Muncul pada nama huruf \u0e03 \u0e02\u0e27\u0e14 yang sudah tidak dipakai."
  },
  {
   "id": "v492",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 4,
   "th": "\u0e16\u0e38\u0e07",
   "audio": "\u0e16\u0e38\u0e07",
   "phon": "th\u01d4ng",
   "rom": "thung",
   "freq": 2,
   "gloss": "kantong, tas plastik",
   "alt": [
    "kantong"
   ],
   "detail": "klasifikator \u00b7 RTGS: thung",
   "cls": "",
   "exTh": "\u0e02\u0e2d\u0e16\u0e38\u0e07\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e43\u0e1a",
   "exPhon": "kh\u01ceaw th\u01d4ng n\u00f9eng bai",
   "exGloss": "Minta satu kantong.",
   "note": "Muncul pada nama huruf \u0e16 \u0e16\u0e38\u0e07."
  },
  {
   "id": "v493",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e01\u0e25\u0e48\u0e2d\u0e07",
   "audio": "\u0e01\u0e25\u0e48\u0e2d\u0e07",
   "phon": "kl\u00e0awng",
   "rom": "klong",
   "freq": 3,
   "gloss": "kotak, dus",
   "alt": [
    "kotak"
   ],
   "detail": "klasifikator \u00b7 RTGS: klong",
   "cls": "",
   "exTh": "\u0e19\u0e21\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e01\u0e25\u0e48\u0e2d\u0e07",
   "exPhon": "nom n\u00f9eng kl\u00e0awng",
   "exGloss": "satu kotak susu",
   "note": ""
  },
  {
   "id": "v494",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e04\u0e39\u0e48",
   "audio": "\u0e04\u0e39\u0e48",
   "phon": "kh\u00fbu",
   "rom": "khu",
   "freq": 3,
   "gloss": "pasang; pasangan",
   "alt": [
    "pasang"
   ],
   "detail": "klasifikator \u00b7 RTGS: khu",
   "cls": "",
   "exTh": "\u0e23\u0e2d\u0e07\u0e40\u0e17\u0e49\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e04\u0e39\u0e48",
   "exPhon": "raawng-th\u00e1o n\u00f9eng kh\u00fbu",
   "exGloss": "sepasang sepatu",
   "note": ""
  },
  {
   "id": "v495",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e0a\u0e32\u0e21",
   "audio": "\u0e0a\u0e32\u0e21",
   "phon": "chaam",
   "rom": "cham",
   "freq": 3,
   "gloss": "mangkuk; klasifikator untuk makanan berkuah",
   "alt": [
    "mangkuk"
   ],
   "detail": "klasifikator \u00b7 RTGS: cham",
   "cls": "",
   "exTh": "\u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2a\u0e2d\u0e07\u0e0a\u0e32\u0e21",
   "exPhon": "k\u01d4ai-t\u01d0ao s\u01ceawng chaam",
   "exGloss": "dua mangkuk mi kuah",
   "note": "Satu kata untuk bendanya sekaligus klasifikatornya: \u0e0a\u0e32\u0e21\u0e43\u0e1a\u0e19\u0e35\u0e49 ('mangkuk ini'), \u0e01\u0e4b\u0e27\u0e22\u0e40\u0e15\u0e35\u0e4b\u0e22\u0e27\u0e2a\u0e2d\u0e07\u0e0a\u0e32\u0e21 ('dua mangkuk mi')."
  },
  {
   "id": "v497",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 6,
   "th": "\u0e41\u0e2b\u0e48\u0e07",
   "audio": "\u0e41\u0e2b\u0e48\u0e07",
   "phon": "h\u00e0eng",
   "rom": "haeng",
   "freq": 3,
   "gloss": "klasifikator tempat",
   "alt": [],
   "detail": "klasifikator \u00b7 RTGS: haeng",
   "cls": "",
   "exTh": "\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21\u0e2a\u0e2d\u0e07\u0e41\u0e2b\u0e48\u0e07",
   "exPhon": "roong-raem s\u01ceawng h\u00e0eng",
   "exGloss": "dua hotel",
   "note": ""
  },
  {
   "id": "v498",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 6,
   "th": "\u0e14\u0e27\u0e07",
   "audio": "\u0e14\u0e27\u0e07",
   "phon": "duang",
   "rom": "duang",
   "freq": 3,
   "gloss": "klasifikator benda bulat bercahaya",
   "alt": [],
   "detail": "klasifikator \u00b7 RTGS: duang",
   "cls": "",
   "exTh": "\u0e14\u0e32\u0e27\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e14\u0e27\u0e07",
   "exPhon": "daao n\u00f9eng duang",
   "exGloss": "satu bintang",
   "note": "Dipakai untuk matahari, bulan, bintang, lampu, dan juga perangko."
  },
  {
   "id": "v499",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 6,
   "th": "\u0e01\u0e49\u0e2d\u0e19",
   "audio": "\u0e01\u0e49\u0e2d\u0e19",
   "phon": "k\u00e2awn",
   "rom": "kon",
   "freq": 3,
   "gloss": "klasifikator benda bergumpal",
   "alt": [
    "bongkah"
   ],
   "detail": "klasifikator \u00b7 RTGS: kon",
   "cls": "",
   "exTh": "\u0e19\u0e49\u0e33\u0e41\u0e02\u0e47\u0e07\u0e2a\u0e2d\u0e07\u0e01\u0e49\u0e2d\u0e19",
   "exPhon": "n\u00e1am-kh\u01ceeng s\u01ceawng k\u00e2awn",
   "exGloss": "dua bongkah es",
   "note": ""
  },
  {
   "id": "v500",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e15\u0e49\u0e19",
   "audio": "\u0e15\u0e49\u0e19",
   "phon": "t\u00f4n",
   "rom": "ton",
   "freq": 3,
   "gloss": "klasifikator pohon; pangkal",
   "alt": [
    "batang"
   ],
   "detail": "klasifikator \u00b7 RTGS: ton",
   "cls": "",
   "exTh": "\u0e15\u0e49\u0e19\u0e44\u0e21\u0e49\u0e2a\u0e34\u0e1a\u0e15\u0e49\u0e19",
   "exPhon": "t\u00f4n-m\u00e1ai s\u00ecp t\u00f4n",
   "exGloss": "sepuluh pohon",
   "note": ""
  },
  {
   "id": "v501",
   "kind": "flip",
   "cat": "klasifikator",
   "catLabel": "Klasifikator",
   "stage": 5,
   "th": "\u0e14\u0e2d\u0e01",
   "audio": "\u0e14\u0e2d\u0e01",
   "phon": "d\u00e0awk",
   "rom": "dok",
   "freq": 3,
   "gloss": "klasifikator bunga dan kunci",
   "alt": [
    "kuntum"
   ],
   "detail": "klasifikator \u00b7 RTGS: dok",
   "cls": "",
   "exTh": "\u0e14\u0e2d\u0e01\u0e44\u0e21\u0e49\u0e2a\u0e32\u0e21\u0e14\u0e2d\u0e01",
   "exPhon": "d\u00e0awk-m\u00e1ai s\u01ceam d\u00e0awk",
   "exGloss": "tiga kuntum bunga",
   "note": ""
  },
  {
   "id": "v502",
   "kind": "flip",
   "cat": "benda",
   "catLabel": "Benda",
   "stage": 5,
   "th": "\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32",
   "audio": "\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32",
   "phon": "s\u00fbea-ph\u00e2a",
   "rom": "sueapha",
   "freq": 3,
   "gloss": "pakaian",
   "alt": [
    "baju"
   ],
   "detail": "nomina \u00b7 RTGS: sueapha",
   "cls": "",
   "exTh": "\u0e0b\u0e31\u0e01\u0e40\u0e2a\u0e37\u0e49\u0e2d\u0e1c\u0e49\u0e32\u0e41\u0e25\u0e49\u0e27",
   "exPhon": "s\u00e1k s\u00fbea-ph\u00e2a l\u00e1eo",
   "exGloss": "Pakaiannya sudah dicuci.",
   "note": ""
  },
  {
   "id": "v503",
   "kind": "flip",
   "cat": "makanan",
   "catLabel": "Makanan",
   "stage": 5,
   "th": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e37\u0e48\u0e21",
   "audio": "\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e37\u0e48\u0e21",
   "phon": "khr\u00fbeang-d\u00f9uem",
   "rom": "khrueangduem",
   "freq": 3,
   "gloss": "minuman",
   "alt": [],
   "detail": "nomina \u00b7 klasifikator: \u0e41\u0e01\u0e49\u0e27 \u00b7 RTGS: khrueangduem",
   "cls": "\u0e41\u0e01\u0e49\u0e27",
   "exTh": "\u0e21\u0e35\u0e40\u0e04\u0e23\u0e37\u0e48\u0e2d\u0e07\u0e14\u0e37\u0e48\u0e21\u0e2d\u0e30\u0e44\u0e23\u0e1a\u0e49\u0e32\u0e07",
   "exPhon": "mii khr\u00fbeang-d\u00f9uem \u00e0-rai b\u00e2ang",
   "exGloss": "Ada minuman apa saja?",
   "note": "\u0e1a\u0e49\u0e32\u0e07 (b\u00e2ang) ditambahkan pada pertanyaan yang jawabannya lebih dari satu."
  },
  {
   "id": "v504",
   "kind": "flip",
   "cat": "keterangan",
   "catLabel": "Kata penanda",
   "stage": 6,
   "th": "\u0e1a\u0e49\u0e32\u0e07",
   "audio": "\u0e1a\u0e49\u0e32\u0e07",
   "phon": "b\u00e2ang",
   "rom": "bang",
   "freq": 3,
   "gloss": "beberapa; apa saja",
   "alt": [],
   "detail": "keterangan \u00b7 RTGS: bang",
   "cls": "",
   "exTh": "\u0e21\u0e35\u0e2d\u0e30\u0e44\u0e23\u0e1a\u0e49\u0e32\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "exPhon": "mii \u00e0-rai b\u00e2ang khr\u00e1p",
   "exGloss": "Ada apa saja?",
   "note": ""
  }
 ],
 "serumpun": [
  {
   "id": "c01",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 3,
   "th": "\u0e21\u0e19\u0e38\u0e29\u0e22\u0e4c",
   "audio": "\u0e21\u0e19\u0e38\u0e29\u0e22\u0e4c",
   "phon": "m\u00e1-n\u00fat",
   "rom": "manut",
   "gloss": "manusia",
   "idWord": "manusia",
   "relation": "artinya sejalan",
   "note": "Ejaan Thai mempertahankan bentuk Sanskerta manu\u1e63ya, lengkap dengan \u0e29 dan \u0e22 yang tidak dibunyikan. Bahasa Indonesia menulisnya menurut bunyi."
  },
  {
   "id": "c02",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 3,
   "th": "\u0e19\u0e23\u0e01",
   "audio": "\u0e19\u0e23\u0e01",
   "phon": "n\u00e1-r\u00f3k",
   "rom": "narok",
   "gloss": "neraka",
   "idWord": "neraka",
   "relation": "artinya sejalan",
   "note": "Contoh aksara nam yang pemimpinnya berkelas rendah (\u0e19), sehingga tidak ada penularan kelas dan kedua suku katanya bernada tinggi."
  },
  {
   "id": "c03",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 3,
   "th": "\u0e23\u0e32\u0e0a\u0e32",
   "audio": "\u0e23\u0e32\u0e0a\u0e32",
   "phon": "raa-chaa",
   "rom": "racha",
   "gloss": "raja",
   "idWord": "raja",
   "relation": "artinya sejalan",
   "note": "Muncul pada banyak nama tempat dan gelar, misalnya \u0e23\u0e32\u0e0a\u0e01\u0e32\u0e23 ('kedinasan') dan \u0e23\u0e32\u0e0a\u0e34\u0e19\u0e35 ('ratu')."
  },
  {
   "id": "c04",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 3,
   "th": "\u0e19\u0e32\u0e21",
   "audio": "\u0e19\u0e32\u0e21",
   "phon": "naam",
   "rom": "nam",
   "gloss": "nama",
   "idWord": "nama",
   "relation": "artinya sejalan",
   "note": "Dalam percakapan sehari-hari dipakai \u0e0a\u0e37\u0e48\u0e2d (ch\u00fbue); \u0e19\u0e32\u0e21 terasa resmi, seperti 'nama' dibandingkan 'sebutan'. \u0e19\u0e32\u0e21\u0e2a\u0e01\u0e38\u0e25 berarti 'nama keluarga'."
  },
  {
   "id": "c05",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 3,
   "th": "\u0e21\u0e2b\u0e32",
   "audio": "\u0e21\u0e2b\u0e32",
   "phon": "m\u00e1-h\u01cea",
   "rom": "maha",
   "gloss": "besar, agung",
   "idWord": "maha",
   "relation": "artinya sejalan",
   "note": "Sama seperti dalam bahasa Indonesia, ia menjadi awalan: \u0e21\u0e2b\u0e32\u0e27\u0e34\u0e17\u0e22\u0e32\u0e25\u0e31\u0e22 ('universitas'), \u0e21\u0e2b\u0e32\u0e2a\u0e21\u0e38\u0e17\u0e23 ('samudra'). Bandingkan 'mahasiswa' dan 'mahakuasa'."
  },
  {
   "id": "c06",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e2a\u0e31\u0e15\u0e27\u0e4c",
   "audio": "\u0e2a\u0e31\u0e15\u0e27\u0e4c",
   "phon": "s\u00e0t",
   "rom": "sat",
   "gloss": "hewan",
   "idWord": "satwa",
   "relation": "artinya sejalan",
   "note": "Bahasa Indonesia memakai 'satwa' hanya dalam ragam resmi (suaka margasatwa), sedangkan \u0e2a\u0e31\u0e15\u0e27\u0e4c adalah kata sehari-hari untuk hewan."
  },
  {
   "id": "c07",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e19\u0e32\u0e04",
   "audio": "\u0e19\u0e32\u0e04",
   "phon": "n\u00e2ak",
   "rom": "nak",
   "gloss": "naga",
   "idWord": "naga",
   "relation": "artinya sejalan",
   "note": "Patung \u0e19\u0e32\u0e04 ada di tangga hampir setiap kuil Thailand. Bentuknya ular berkepala banyak, sama dengan naga dalam cerita Nusantara."
  },
  {
   "id": "c08",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e04\u0e23\u0e38\u0e11",
   "audio": "\u0e04\u0e23\u0e38\u0e11",
   "phon": "khr\u00fat",
   "rom": "khrut",
   "gloss": "garuda",
   "idWord": "garuda",
   "relation": "artinya sejalan",
   "note": "\u0e04\u0e23\u0e38\u0e11 adalah lambang negara Thailand, sebagaimana Garuda menjadi lambang Indonesia. Keduanya burung yang sama dari cerita yang sama."
  },
  {
   "id": "c09",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e40\u0e17\u0e27\u0e14\u0e32",
   "audio": "\u0e40\u0e17\u0e27\u0e14\u0e32",
   "phon": "thee-w\u00e1-daa",
   "rom": "thewada",
   "gloss": "dewa, makhluk kayangan",
   "idWord": "dewata",
   "relation": "artinya sejalan",
   "note": "Bentuk pendeknya \u0e40\u0e17\u0e1e (th\u00eaep), seasal dengan 'dewa'."
  },
  {
   "id": "c10",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e17\u0e38\u0e01\u0e02\u0e4c",
   "audio": "\u0e17\u0e38\u0e01\u0e02\u0e4c",
   "phon": "th\u00fak",
   "rom": "thuk",
   "gloss": "penderitaan, kesusahan",
   "idWord": "duka",
   "relation": "artinya sejalan",
   "note": "Istilah inti dalam ajaran Buddha. Perhatikan bunyinya sama persis dengan \u0e17\u0e38\u0e01 ('setiap'), hanya ejaannya yang berbeda."
  },
  {
   "id": "c11",
   "kind": "flip",
   "cat": "serumpun-bergeser",
   "catLabel": "Arti bergeser",
   "stage": 4,
   "th": "\u0e2a\u0e38\u0e02",
   "audio": "\u0e2a\u0e38\u0e02",
   "phon": "s\u00f9k",
   "rom": "suk",
   "gloss": "bahagia, sejahtera",
   "idWord": "suka",
   "relation": "seasal tetapi artinya sudah bergeser",
   "note": "PERINGATAN: dalam bahasa Indonesia 'suka' berarti menyenangi sesuatu, sedangkan \u0e2a\u0e38\u0e02 berarti bahagia. Untuk 'suka' dalam arti Indonesia, bahasa Thailand memakai \u0e0a\u0e2d\u0e1a. \u0e04\u0e27\u0e32\u0e21\u0e2a\u0e38\u0e02 berarti 'kebahagiaan'."
  },
  {
   "id": "c12",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e2a\u0e32\u0e21\u0e35",
   "audio": "\u0e2a\u0e32\u0e21\u0e35",
   "phon": "s\u01cea-mii",
   "rom": "sami",
   "gloss": "suami",
   "idWord": "suami",
   "relation": "artinya sejalan",
   "note": "Pasangannya \u0e20\u0e23\u0e23\u0e22\u0e32 (phan-r\u00e1-yaa, 'istri') juga serapan Sanskerta, seasal dengan 'bharya' dalam bahasa Jawa Kuno."
  },
  {
   "id": "c13",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 5,
   "th": "\u0e2d\u0e31\u0e01\u0e29\u0e23",
   "audio": "\u0e2d\u0e31\u0e01\u0e29\u0e23",
   "phon": "\u00e0k-s\u01d2on",
   "rom": "akson",
   "gloss": "huruf, aksara",
   "idWord": "aksara",
   "relation": "artinya sejalan",
   "note": "Istilah yang Anda pakai sepanjang Modul 1: \u0e2d\u0e31\u0e01\u0e29\u0e23\u0e01\u0e25\u0e32\u0e07 ('aksara tengah'), \u0e2d\u0e31\u0e01\u0e29\u0e23\u0e2a\u0e39\u0e07 ('aksara tinggi'), \u0e2d\u0e31\u0e01\u0e29\u0e23\u0e15\u0e48\u0e33 ('aksara rendah'), dan \u0e2d\u0e31\u0e01\u0e29\u0e23\u0e19\u0e33 ('aksara nam')."
  },
  {
   "id": "c14",
   "kind": "flip",
   "cat": "serumpun-sebagian",
   "catLabel": "Jarang di Indonesia",
   "stage": 5,
   "th": "\u0e0a\u0e35\u0e27\u0e34\u0e15",
   "audio": "\u0e0a\u0e35\u0e27\u0e34\u0e15",
   "phon": "chii-w\u00edt",
   "rom": "chiwit",
   "gloss": "kehidupan, nyawa",
   "idWord": "jiwa",
   "relation": "kata Indonesianya jarang dipakai sehari-hari",
   "note": "Seasal dengan 'jiwa' lewat bentuk Sanskerta j\u012bva. Artinya lebih dekat ke 'hidup' daripada ke 'jiwa' dalam arti batin."
  },
  {
   "id": "c15",
   "kind": "flip",
   "cat": "serumpun-bergeser",
   "catLabel": "Arti bergeser",
   "stage": 5,
   "th": "\u0e20\u0e39\u0e21\u0e34",
   "audio": "\u0e20\u0e39\u0e21\u0e34",
   "phon": "phuum",
   "rom": "phum",
   "gloss": "tanah, daerah, latar",
   "idWord": "bumi",
   "relation": "seasal tetapi artinya sudah bergeser",
   "note": "Bukan 'bumi' sebagai planet (itu \u0e42\u0e25\u0e01), melainkan 'tanah' atau 'asal': \u0e20\u0e39\u0e21\u0e34\u0e25\u0e33\u0e40\u0e19\u0e32 ('tempat asal'), \u0e20\u0e39\u0e21\u0e34\u0e43\u0e08 ('bangga', harfiahnya 'tanah hati')."
  },
  {
   "id": "c16",
   "kind": "flip",
   "cat": "serumpun-sebagian",
   "catLabel": "Jarang di Indonesia",
   "stage": 5,
   "th": "\u0e42\u0e25\u0e01",
   "audio": "\u0e42\u0e25\u0e01",
   "phon": "l\u00f4ok",
   "rom": "lok",
   "gloss": "dunia",
   "idWord": "loka",
   "relation": "kata Indonesianya jarang dipakai sehari-hari",
   "note": "Dalam bahasa Indonesia 'loka' hanya hidup di dalam gabungan seperti 'lokakarya' dan nama tempat, sedangkan kata sehari-harinya 'dunia' berasal dari bahasa Arab. Dalam bahasa Thailand \u0e42\u0e25\u0e01 justru kata sehari-hari."
  },
  {
   "id": "c17",
   "kind": "flip",
   "cat": "serumpun-sebagian",
   "catLabel": "Jarang di Indonesia",
   "stage": 5,
   "th": "\u0e27\u0e32\u0e08\u0e32",
   "audio": "\u0e27\u0e32\u0e08\u0e32",
   "phon": "waa-jaa",
   "rom": "wacha",
   "gloss": "ucapan, perkataan",
   "idWord": "wacana",
   "relation": "kata Indonesianya jarang dipakai sehari-hari",
   "note": "Keduanya berasal dari akar Sanskerta yang sama untuk 'berbicara'. Bahasa Indonesia memakai 'wacana' untuk pembicaraan atau rencana; bahasa Thailand memakai \u0e27\u0e32\u0e08\u0e32 untuk ucapan."
  },
  {
   "id": "c18",
   "kind": "flip",
   "cat": "serumpun-sebagian",
   "catLabel": "Jarang di Indonesia",
   "stage": 5,
   "th": "\u0e27\u0e34\u0e0a\u0e32",
   "audio": "\u0e27\u0e34\u0e0a\u0e32",
   "phon": "w\u00ed-chaa",
   "rom": "wicha",
   "gloss": "mata pelajaran, ilmu",
   "idWord": "widya",
   "relation": "kata Indonesianya jarang dipakai sehari-hari",
   "note": "Seasal dengan 'widya' (vidy\u0101) yang dalam bahasa Indonesia tinggal dipakai pada nama lembaga dan nama orang."
  },
  {
   "id": "c19",
   "kind": "flip",
   "cat": "serumpun-bergeser",
   "catLabel": "Arti bergeser",
   "stage": 6,
   "th": "\u0e0a\u0e32\u0e15\u0e34",
   "audio": "\u0e0a\u0e32\u0e15\u0e34",
   "phon": "ch\u00e2at",
   "rom": "chat",
   "gloss": "bangsa; kelahiran",
   "idWord": "jati",
   "relation": "seasal tetapi artinya sudah bergeser",
   "note": "Dari Sanskerta j\u0101ti ('kelahiran, asal'), seasal dengan 'jati' pada 'sejati' dan 'jati diri'. Dalam bahasa Thailand artinya 'bangsa' (\u0e0a\u0e32\u0e15\u0e34\u0e44\u0e17\u0e22) dan juga 'kelahiran' dalam ajaran kelahiran kembali."
  },
  {
   "id": "c20",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 6,
   "th": "\u0e42\u0e22\u0e04\u0e30",
   "audio": "\u0e42\u0e22\u0e04\u0e30",
   "phon": "yoo-kh\u00e1",
   "rom": "yokha",
   "gloss": "yoga",
   "idWord": "yoga",
   "relation": "artinya sejalan",
   "note": "Serapan baru yang bentuk Sanskertanya masih terlihat utuh di kedua bahasa."
  },
  {
   "id": "c21",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",
   "audio": "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c",
   "phon": "aa-th\u00edt",
   "rom": "athit",
   "gloss": "Minggu; matahari; pekan",
   "idWord": "Aditya",
   "relation": "artinya sejalan",
   "note": "Nama hari dalam bahasa Thailand adalah nama planet Sanskerta, persis seperti nama hari Jawa-Bali. \u0e27\u0e31\u0e19\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c = hari Aditya = Minggu."
  },
  {
   "id": "c22",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c",
   "audio": "\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c",
   "phon": "jan",
   "rom": "chan",
   "gloss": "Senin; bulan",
   "idWord": "Candra",
   "relation": "artinya sejalan",
   "note": "\u0e27\u0e31\u0e19\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c = hari Candra = Senin. Bandingkan 'Soma' dan 'Candra' pada penanggalan Jawa-Bali."
  },
  {
   "id": "c23",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 4,
   "th": "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23",
   "audio": "\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23",
   "phon": "ang-khaan",
   "rom": "angkhan",
   "gloss": "Selasa; planet Mars",
   "idWord": "Anggara",
   "relation": "artinya sejalan",
   "note": "\u0e27\u0e31\u0e19\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23 = hari Anggara = Selasa. Namanya nyaris tidak berubah dari bentuk yang dipakai di Jawa dan Bali."
  },
  {
   "id": "c24",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 5,
   "th": "\u0e1e\u0e38\u0e18",
   "audio": "\u0e1e\u0e38\u0e18",
   "phon": "ph\u00fat",
   "rom": "phut",
   "gloss": "Rabu; planet Merkurius",
   "idWord": "Buda",
   "relation": "artinya sejalan",
   "note": "\u0e27\u0e31\u0e19\u0e1e\u0e38\u0e18 = hari Buda = Rabu. Jangan dikacaukan dengan \u0e1e\u0e38\u0e17\u0e18 (ph\u00fat-th\u00e1, 'Buddha') yang bunyinya mirip tetapi ejaannya berbeda."
  },
  {
   "id": "c25",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 5,
   "th": "\u0e28\u0e38\u0e01\u0e23\u0e4c",
   "audio": "\u0e28\u0e38\u0e01\u0e23\u0e4c",
   "phon": "s\u00f9k",
   "rom": "suk",
   "gloss": "Jumat; planet Venus",
   "idWord": "Sukra",
   "relation": "artinya sejalan",
   "note": "\u0e27\u0e31\u0e19\u0e28\u0e38\u0e01\u0e23\u0e4c = hari Sukra = Jumat. Bunyinya sama persis dengan \u0e2a\u0e38\u0e02 ('bahagia'), hanya ejaannya yang berbeda."
  },
  {
   "id": "c26",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 5,
   "th": "\u0e40\u0e2a\u0e32\u0e23\u0e4c",
   "audio": "\u0e40\u0e2a\u0e32\u0e23\u0e4c",
   "phon": "s\u01ceo",
   "rom": "sao",
   "gloss": "Sabtu; planet Saturnus",
   "idWord": "Saniscara",
   "relation": "artinya sejalan",
   "note": "\u0e27\u0e31\u0e19\u0e40\u0e2a\u0e32\u0e23\u0e4c = hari Saniscara = Sabtu dalam penanggalan Jawa-Bali."
  },
  {
   "id": "c27",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 6,
   "th": "\u0e40\u0e2d\u0e01",
   "audio": "\u0e40\u0e2d\u0e01",
   "phon": "\u00e8ek",
   "rom": "ek",
   "gloss": "satu, utama, tunggal",
   "idWord": "eka",
   "relation": "artinya sejalan",
   "note": "Inilah 'eka' pada 'ekasila' dan 'Bhinneka'. Dalam bahasa Thailand ia menjadi nama tanda nada pertama: \u0e44\u0e21\u0e49\u0e40\u0e2d\u0e01."
  },
  {
   "id": "c28",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 6,
   "th": "\u0e42\u0e17",
   "audio": "\u0e42\u0e17",
   "phon": "thoo",
   "rom": "tho",
   "gloss": "dua, tingkat kedua",
   "idWord": "dwi",
   "relation": "artinya sejalan",
   "note": "Seasal dengan 'dwi'. Nama tanda nada kedua: \u0e44\u0e21\u0e49\u0e42\u0e17. Juga dipakai untuk gelar: \u0e1b\u0e23\u0e34\u0e0d\u0e0d\u0e32\u0e42\u0e17 ('magister')."
  },
  {
   "id": "c29",
   "kind": "flip",
   "cat": "serumpun-sama",
   "catLabel": "Arti sejalan",
   "stage": 6,
   "th": "\u0e15\u0e23\u0e35",
   "audio": "\u0e15\u0e23\u0e35",
   "phon": "trii",
   "rom": "tri",
   "gloss": "tiga",
   "idWord": "tri",
   "relation": "artinya sejalan",
   "note": "Nama tanda nada ketiga: \u0e44\u0e21\u0e49\u0e15\u0e23\u0e35. Tanda keempat, \u0e44\u0e21\u0e49\u0e08\u0e31\u0e15\u0e27\u0e32, berasal dari catur ('empat'). Jadi keempat tanda nada Thai sebenarnya bernama satu, dua, tiga, empat dalam Sanskerta \u2014 eka, dwi, tri, catur."
  }
 ],
 "tatabahasa": [
  {
   "id": "g01-1",
   "kind": "mcq",
   "cat": "g01",
   "catLabel": "Susunan kalimat: pelaku - kata kerja - sasaran",
   "stage": 1,
   "prompt": "Bagaimana bentuk kata kerja bahasa Thailand berubah menurut waktu?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Tidak berubah sama sekali; waktu ditandai kata lain atau keterangan waktu",
    "Berubah dengan menambahkan akhiran",
    "Berubah dengan mengubah nada",
    "Berubah dengan mengulang kata kerjanya"
   ],
   "answer": 0,
   "explain": "\u0e1c\u0e21\u0e01\u0e34\u0e19 bisa berarti 'saya makan', 'saya sudah makan', atau 'saya akan makan'. Penanda seperti \u0e41\u0e25\u0e49\u0e27 dan \u0e08\u0e30 yang menjelaskan, bukan bentuk kata kerjanya."
  },
  {
   "id": "g01-2",
   "kind": "mcq",
   "cat": "g01",
   "catLabel": "Susunan kalimat: pelaku - kata kerja - sasaran",
   "stage": 1,
   "prompt": "Mana susunan yang benar untuk 'Saya pergi ke pasar'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e1c\u0e21\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
    "\u0e15\u0e25\u0e32\u0e14\u0e44\u0e1b\u0e1c\u0e21",
    "\u0e44\u0e1b\u0e1c\u0e21\u0e15\u0e25\u0e32\u0e14",
    "\u0e1c\u0e21\u0e15\u0e25\u0e32\u0e14\u0e44\u0e1b"
   ],
   "answer": 0,
   "explain": "Pelaku, kata kerja, lalu tujuan. Perhatikan tidak ada kata 'ke': \u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14 sudah berarti 'pergi ke pasar'."
  },
  {
   "id": "g01-3",
   "kind": "mcq",
   "cat": "g01",
   "catLabel": "Susunan kalimat: pelaku - kata kerja - sasaran",
   "stage": 1,
   "prompt": "Mengapa tulisan Thai sulit dipecah menjadi kata oleh pembaca baru?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Karena tidak ada spasi antarkata",
    "Karena hurufnya ditulis dari kanan ke kiri",
    "Karena satu huruf bisa mewakili beberapa kata",
    "Karena kata selalu ditulis bersambung dengan tanda hubung"
   ],
   "answer": 0,
   "explain": "Spasi hanya memisahkan kalimat atau bagian kalimat. Pemecahan kata bergantung pada pengenalan kosakata, bukan pada tanda baca."
  },
  {
   "id": "g01-4",
   "kind": "mcq",
   "cat": "g01",
   "catLabel": "Susunan kalimat: pelaku - kata kerja - sasaran",
   "stage": 1,
   "prompt": "Kalimat '\u0e44\u0e1b\u0e44\u0e2b\u0e19' tanpa pelaku berarti apa?",
   "promptTh": "\u0e44\u0e1b\u0e44\u0e2b\u0e19",
   "optionsLang": "id",
   "options": [
    "(Kamu) mau ke mana?",
    "Kalimat itu tidak lengkap dan salah",
    "Pergi ke sana",
    "Siapa yang pergi?"
   ],
   "answer": 0,
   "explain": "Penghilangan pelaku adalah hal biasa, bukan kesalahan. Siapa pelakunya diketahui dari keadaan percakapan."
  },
  {
   "id": "g01-5",
   "kind": "mcq",
   "cat": "g01",
   "catLabel": "Susunan kalimat: pelaku - kata kerja - sasaran",
   "stage": 1,
   "prompt": "Bagaimana jumlah (tunggal atau jamak) ditandai pada kata benda Thai?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Tidak ditandai pada kata bendanya; bila perlu dipakai angka dengan klasifikator",
    "Dengan mengulang kata bendanya",
    "Dengan menambahkan awalan",
    "Dengan mengubah nadanya"
   ],
   "answer": 0,
   "explain": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d bisa berarti 'buku' atau 'buku-buku'. Untuk menyatakan jumlah dipakai pola seperti \u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e2a\u0e32\u0e21\u0e40\u0e25\u0e48\u0e21 ('tiga buku')."
  },
  {
   "id": "g02-1",
   "kind": "mcq",
   "cat": "g02",
   "catLabel": "Kata sifat sesudah kata benda, tanpa kata 'adalah'",
   "stage": 1,
   "prompt": "Mana yang benar untuk 'Makanannya enak'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e2d\u0e23\u0e48\u0e2d\u0e22",
    "\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e40\u0e1b\u0e47\u0e19\u0e2d\u0e23\u0e48\u0e2d\u0e22",
    "\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e2d\u0e32\u0e2b\u0e32\u0e23",
    "\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e04\u0e37\u0e2d\u0e2d\u0e23\u0e48\u0e2d\u0e22"
   ],
   "answer": 0,
   "explain": "Kata sifat langsung menyusul kata bendanya, tanpa \u0e40\u0e1b\u0e47\u0e19 atau \u0e04\u0e37\u0e2d. Memakai \u0e40\u0e1b\u0e47\u0e19 di depan kata sifat adalah kesalahan yang paling sering dibuat pembelajar."
  },
  {
   "id": "g02-2",
   "kind": "mcq",
   "cat": "g02",
   "catLabel": "Kata sifat sesudah kata benda, tanpa kata 'adalah'",
   "stage": 1,
   "prompt": "Di mana letak \u0e21\u0e32\u0e01 ('sangat') pada kalimat?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Sesudah kata sifat yang diperkuat",
    "Sebelum kata sifat yang diperkuat",
    "Di awal kalimat",
    "Di akhir kalimat setelah partikel sopan"
   ],
   "answer": 0,
   "explain": "\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01, \u0e41\u0e1e\u0e07\u0e21\u0e32\u0e01, \u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01. Urutannya berlawanan dengan 'sangat enak' dalam bahasa Indonesia."
  },
  {
   "id": "g02-3",
   "kind": "mcq",
   "cat": "g02",
   "catLabel": "Kata sifat sesudah kata benda, tanpa kata 'adalah'",
   "stage": 1,
   "prompt": "Mengapa kata sifat Thai disebut berperilaku seperti kata kerja?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Karena bisa menjadi predikat sendiri dan dinegasikan dengan \u0e44\u0e21\u0e48",
    "Karena bentuknya berubah menurut waktu",
    "Karena selalu memerlukan pelaku",
    "Karena harus didahului \u0e40\u0e1b\u0e47\u0e19"
   ],
   "answer": 0,
   "explain": "\u0e44\u0e21\u0e48\u0e41\u0e1e\u0e07 ('tidak mahal') memakai \u0e44\u0e21\u0e48 yang sama seperti pada \u0e44\u0e21\u0e48\u0e44\u0e1b ('tidak pergi'). Keduanya diperlakukan sama oleh tata bahasanya."
  },
  {
   "id": "g02-4",
   "kind": "mcq",
   "cat": "g02",
   "catLabel": "Kata sifat sesudah kata benda, tanpa kata 'adalah'",
   "stage": 1,
   "prompt": "Apa arti \u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48 ?",
   "promptTh": "\u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48",
   "optionsLang": "id",
   "options": [
    "Bisa 'rumah besar' maupun 'rumahnya besar'",
    "Hanya 'rumah besar'",
    "Hanya 'rumahnya besar'",
    "'Besar rumah'"
   ],
   "answer": 0,
   "explain": "Kedua makna itu dituliskan sama. Untuk mempertegas dipakai kata tunjuk dengan klasifikator: \u0e1a\u0e49\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e0d\u0e48."
  },
  {
   "id": "g02-5",
   "kind": "mcq",
   "cat": "g02",
   "catLabel": "Kata sifat sesudah kata benda, tanpa kata 'adalah'",
   "stage": 1,
   "prompt": "Mana yang BUKAN kalimat yang wajar?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e1c\u0e21\u0e40\u0e1b\u0e47\u0e19\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22",
    "\u0e1c\u0e21\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22",
    "\u0e1c\u0e21\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01",
    "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22"
   ],
   "answer": 0,
   "explain": "\u0e40\u0e2b\u0e19\u0e37\u0e48\u0e2d\u0e22 adalah kata sifat, jadi tidak boleh didahului \u0e40\u0e1b\u0e47\u0e19. Tiga pilihan lainnya wajar."
  },
  {
   "id": "g03-1",
   "kind": "mcq",
   "cat": "g03",
   "catLabel": "Tiga kata untuk 'adalah': \u0e40\u0e1b\u0e47\u0e19, \u0e04\u0e37\u0e2d, \u0e2d\u0e22\u0e39\u0e48",
   "stage": 2,
   "prompt": "Mana yang benar untuk 'Dia seorang guru'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e40\u0e02\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e04\u0e23\u0e39",
    "\u0e40\u0e02\u0e32\u0e04\u0e37\u0e2d\u0e04\u0e23\u0e39",
    "\u0e40\u0e02\u0e32\u0e2d\u0e22\u0e39\u0e48\u0e04\u0e23\u0e39",
    "\u0e40\u0e02\u0e32\u0e04\u0e23\u0e39"
   ],
   "answer": 0,
   "explain": "Pekerjaan dan golongan memakai \u0e40\u0e1b\u0e47\u0e19. \u0e04\u0e37\u0e2d\u0e04\u0e23\u0e39 tidak salah secara tata bahasa, tetapi terdengar seperti sedang menjelaskan identitas, bukan menyebut pekerjaan."
  },
  {
   "id": "g03-2",
   "kind": "mcq",
   "cat": "g03",
   "catLabel": "Tiga kata untuk 'adalah': \u0e40\u0e1b\u0e47\u0e19, \u0e04\u0e37\u0e2d, \u0e2d\u0e22\u0e39\u0e48",
   "stage": 2,
   "prompt": "Mana yang benar untuk 'Toiletnya di belakang'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e2b\u0e25\u0e31\u0e07",
    "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e25\u0e31\u0e07",
    "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e04\u0e37\u0e2d\u0e2b\u0e25\u0e31\u0e07",
    "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2b\u0e25\u0e31\u0e07"
   ],
   "answer": 0,
   "explain": "Keberadaan di suatu tempat selalu memakai \u0e2d\u0e22\u0e39\u0e48."
  },
  {
   "id": "g03-3",
   "kind": "mcq",
   "cat": "g03",
   "catLabel": "Tiga kata untuk 'adalah': \u0e40\u0e1b\u0e47\u0e19, \u0e04\u0e37\u0e2d, \u0e2d\u0e22\u0e39\u0e48",
   "stage": 2,
   "prompt": "Kata mana yang dipakai untuk 'Ini ...' saat menjelaskan sesuatu?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e04\u0e37\u0e2d",
    "\u0e40\u0e1b\u0e47\u0e19",
    "\u0e2d\u0e22\u0e39\u0e48",
    "\u0e44\u0e14\u0e49"
   ],
   "answer": 0,
   "explain": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d... adalah pola yang lazim. \u0e04\u0e37\u0e2d menyamakan dua hal."
  },
  {
   "id": "g03-4",
   "kind": "mcq",
   "cat": "g03",
   "catLabel": "Tiga kata untuk 'adalah': \u0e40\u0e1b\u0e47\u0e19, \u0e04\u0e37\u0e2d, \u0e2d\u0e22\u0e39\u0e48",
   "stage": 2,
   "prompt": "Mana kalimat yang SALAH?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e1a\u0e49\u0e32\u0e19\u0e40\u0e1b\u0e47\u0e19\u0e43\u0e2b\u0e0d\u0e48",
    "\u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48",
    "\u0e1a\u0e49\u0e32\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e01\u0e25",
    "\u0e40\u0e02\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e21\u0e2d"
   ],
   "answer": 0,
   "explain": "\u0e43\u0e2b\u0e0d\u0e48 adalah kata sifat, sehingga tidak memakai \u0e40\u0e1b\u0e47\u0e19. Tiga pilihan lainnya benar."
  },
  {
   "id": "g03-5",
   "kind": "mcq",
   "cat": "g03",
   "catLabel": "Tiga kata untuk 'adalah': \u0e40\u0e1b\u0e47\u0e19, \u0e04\u0e37\u0e2d, \u0e2d\u0e22\u0e39\u0e48",
   "stage": 2,
   "prompt": "Pada \u0e1c\u0e21\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e47\u0e19, apa arti \u0e40\u0e1b\u0e47\u0e19?",
   "promptTh": "\u0e1c\u0e21\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e47\u0e19",
   "optionsLang": "id",
   "options": [
    "Bisa, karena sudah dipelajari",
    "Adalah",
    "Sedang",
    "Harus"
   ],
   "answer": 0,
   "explain": "\u0e40\u0e1b\u0e47\u0e19 sesudah kata kerja menandai keterampilan yang dikuasai. Bandingkan \u0e44\u0e14\u0e49 yang menandai kemungkinan atau izin."
  },
  {
   "id": "g04-1",
   "kind": "mcq",
   "cat": "g04",
   "catLabel": "Penafian: \u0e44\u0e21\u0e48, \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48, \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48",
   "stage": 2,
   "prompt": "Di mana letak \u0e44\u0e21\u0e48 pada kalimat?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Sebelum kata kerja atau kata sifat",
    "Sesudah kata kerja",
    "Di akhir kalimat",
    "Sebelum pelaku"
   ],
   "answer": 0,
   "explain": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e44\u0e1b, \u0e44\u0e21\u0e48\u0e41\u0e1e\u0e07, \u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14. Letaknya sama dengan 'tidak' dalam bahasa Indonesia."
  },
  {
   "id": "g04-2",
   "kind": "mcq",
   "cat": "g04",
   "catLabel": "Penafian: \u0e44\u0e21\u0e48, \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48, \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48",
   "stage": 2,
   "prompt": "Mana yang benar untuk 'Ini bukan air'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e19\u0e35\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e19\u0e49\u0e33",
    "\u0e19\u0e35\u0e48\u0e44\u0e21\u0e48\u0e19\u0e49\u0e33",
    "\u0e19\u0e49\u0e33\u0e44\u0e21\u0e48\u0e19\u0e35\u0e48",
    "\u0e19\u0e35\u0e48\u0e19\u0e49\u0e33\u0e44\u0e21\u0e48"
   ],
   "answer": 0,
   "explain": "Kata benda ditafikan dengan \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48, sama seperti 'bukan' dalam bahasa Indonesia."
  },
  {
   "id": "g04-3",
   "kind": "mcq",
   "cat": "g04",
   "catLabel": "Penafian: \u0e44\u0e21\u0e48, \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48, \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48",
   "stage": 2,
   "prompt": "Bagaimana mengatakan 'belum'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48",
    "\u0e44\u0e21\u0e48\u0e22\u0e31\u0e07",
    "\u0e44\u0e21\u0e48\u0e41\u0e25\u0e49\u0e27",
    "\u0e41\u0e25\u0e49\u0e27\u0e44\u0e21\u0e48"
   ],
   "answer": 0,
   "explain": "\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48 + kata kerja. \u0e22\u0e31\u0e07 sendiri berarti 'masih'."
  },
  {
   "id": "g04-4",
   "kind": "mcq",
   "cat": "g04",
   "catLabel": "Penafian: \u0e44\u0e21\u0e48, \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48, \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48",
   "stage": 2,
   "prompt": "Pertanyaan '\u0e04\u0e38\u0e13\u0e44\u0e1b\u0e44\u0e2b\u0e21' dijawab 'tidak' dengan apa?",
   "promptTh": "\u0e04\u0e38\u0e13\u0e44\u0e1b\u0e44\u0e2b\u0e21",
   "optionsLang": "th",
   "options": [
    "\u0e44\u0e21\u0e48\u0e44\u0e1b",
    "\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48",
    "\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e23",
    "\u0e22\u0e31\u0e07"
   ],
   "answer": 0,
   "explain": "Jawaban atas pertanyaan kata kerja mengulang kata kerjanya: \u0e44\u0e1b untuk 'ya', \u0e44\u0e21\u0e48\u0e44\u0e1b untuk 'tidak'. \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 hanya untuk menyangkal pernyataan."
  },
  {
   "id": "g04-5",
   "kind": "mcq",
   "cat": "g04",
   "catLabel": "Penafian: \u0e44\u0e21\u0e48, \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48, \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48",
   "stage": 2,
   "prompt": "Apa arti \u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e23?",
   "promptTh": "\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e23",
   "optionsLang": "id",
   "options": [
    "Tidak apa-apa; tidak masalah",
    "Tidak ada",
    "Belum selesai",
    "Tidak mau"
   ],
   "answer": 0,
   "explain": "Ungkapan yang sangat sering dipakai, baik untuk menjawab permintaan maaf maupun untuk menolak tawaran dengan sopan."
  },
  {
   "id": "g05-1",
   "kind": "mcq",
   "cat": "g05",
   "catLabel": "Membuat pertanyaan",
   "stage": 3,
   "prompt": "Di mana letak partikel \u0e44\u0e2b\u0e21?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Di akhir kalimat",
    "Di awal kalimat",
    "Sesudah pelaku",
    "Sebelum kata kerja"
   ],
   "answer": 0,
   "explain": "Partikel pertanyaan selalu di akhir, sesudah seluruh kalimatnya: \u0e04\u0e38\u0e13\u0e44\u0e1b\u0e44\u0e2b\u0e21."
  },
  {
   "id": "g05-2",
   "kind": "mcq",
   "cat": "g05",
   "catLabel": "Membuat pertanyaan",
   "stage": 3,
   "prompt": "Di mana letak kata tanya seperti \u0e2d\u0e30\u0e44\u0e23?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Di tempat kata yang ditanyakan, tanpa mengubah susunan",
    "Selalu di awal kalimat",
    "Selalu di akhir kalimat",
    "Sesudah partikel sopan"
   ],
   "answer": 0,
   "explain": "\u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e2d\u0e30\u0e44\u0e23 mengikuti susunan pelaku-kerja-sasaran, dengan \u0e2d\u0e30\u0e44\u0e23 menempati tempat sasaran."
  },
  {
   "id": "g05-3",
   "kind": "mcq",
   "cat": "g05",
   "catLabel": "Membuat pertanyaan",
   "stage": 3,
   "prompt": "Apa yang terjadi bila nada bicara dinaikkan di akhir pertanyaan?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Kata terakhirnya bisa berubah menjadi kata lain",
    "Pertanyaan menjadi lebih sopan",
    "Tidak ada pengaruh apa pun",
    "Pertanyaan menjadi pernyataan"
   ],
   "answer": 0,
   "explain": "Nada di bahasa Thailand adalah bagian dari kata, bukan hiasan kalimat. Pola naik-turun gaya pertanyaan bahasa Indonesia dapat merusak kata."
  },
  {
   "id": "g05-4",
   "kind": "mcq",
   "cat": "g05",
   "catLabel": "Membuat pertanyaan",
   "stage": 3,
   "prompt": "Mana yang berarti 'Enak, kan?'",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21",
    "\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e44\u0e2b\u0e21",
    "\u0e43\u0e0a\u0e48\u0e2d\u0e23\u0e48\u0e2d\u0e22",
    "\u0e2d\u0e30\u0e44\u0e23\u0e2d\u0e23\u0e48\u0e2d\u0e22"
   ],
   "answer": 0,
   "explain": "\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21 meminta pembenaran atas sesuatu yang sudah diduga. \u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e44\u0e2b\u0e21 adalah pertanyaan terbuka 'enak?'."
  },
  {
   "id": "g05-5",
   "kind": "mcq",
   "cat": "g05",
   "catLabel": "Membuat pertanyaan",
   "stage": 3,
   "prompt": "Mana pertanyaan yang TIDAK wajar?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e2d\u0e30\u0e44\u0e23\u0e44\u0e2b\u0e21",
    "\u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e2d\u0e30\u0e44\u0e23",
    "\u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e44\u0e2b\u0e21",
    "\u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27\u0e44\u0e2b\u0e21"
   ],
   "answer": 0,
   "explain": "Kalimat yang sudah memakai kata tanya tidak memerlukan \u0e44\u0e2b\u0e21 lagi."
  },
  {
   "id": "g06-1",
   "kind": "mcq",
   "cat": "g06",
   "catLabel": "Klasifikator dan cara menghitung",
   "stage": 3,
   "prompt": "Apa urutan yang benar saat menghitung benda?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Kata benda + angka + klasifikator",
    "Angka + klasifikator + kata benda",
    "Klasifikator + angka + kata benda",
    "Angka + kata benda"
   ],
   "answer": 0,
   "explain": "\u0e2b\u0e21\u0e32\u0e2a\u0e32\u0e21\u0e15\u0e31\u0e27, \u0e19\u0e49\u0e33\u0e2a\u0e2d\u0e07\u0e41\u0e01\u0e49\u0e27, \u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2a\u0e34\u0e1a\u0e04\u0e19. Klasifikator berada paling akhir."
  },
  {
   "id": "g06-2",
   "kind": "mcq",
   "cat": "g06",
   "catLabel": "Klasifikator dan cara menghitung",
   "stage": 3,
   "prompt": "Klasifikator apa untuk orang?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e04\u0e19",
    "\u0e15\u0e31\u0e27",
    "\u0e43\u0e1a",
    "\u0e40\u0e25\u0e48\u0e21"
   ],
   "answer": 0,
   "explain": "\u0e04\u0e19 dipakai untuk orang, dan kata itu memang berarti 'orang'. Memakai \u0e15\u0e31\u0e27 untuk orang terdengar menghina."
  },
  {
   "id": "g06-3",
   "kind": "mcq",
   "cat": "g06",
   "catLabel": "Klasifikator dan cara menghitung",
   "stage": 3,
   "prompt": "Klasifikator apa untuk buku?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e40\u0e25\u0e48\u0e21",
    "\u0e43\u0e1a",
    "\u0e2d\u0e31\u0e19",
    "\u0e25\u0e39\u0e01"
   ],
   "answer": 0,
   "explain": "\u0e40\u0e25\u0e48\u0e21 dipakai untuk buku dan benda berjilid: \u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e2a\u0e2d\u0e07\u0e40\u0e25\u0e48\u0e21."
  },
  {
   "id": "g06-4",
   "kind": "mcq",
   "cat": "g06",
   "catLabel": "Klasifikator dan cara menghitung",
   "stage": 3,
   "prompt": "Mana yang benar untuk 'tiga ekor anjing'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e2b\u0e21\u0e32\u0e2a\u0e32\u0e21\u0e15\u0e31\u0e27",
    "\u0e2a\u0e32\u0e21\u0e15\u0e31\u0e27\u0e2b\u0e21\u0e32",
    "\u0e15\u0e31\u0e27\u0e2a\u0e32\u0e21\u0e2b\u0e21\u0e32",
    "\u0e2b\u0e21\u0e32\u0e15\u0e31\u0e27\u0e2a\u0e32\u0e21"
   ],
   "answer": 0,
   "explain": "\u0e2b\u0e21\u0e32\u0e15\u0e31\u0e27\u0e2a\u0e32\u0e21 justru berarti 'anjing yang ketiga', bukan 'tiga anjing'. Urutan menentukan arti."
  },
  {
   "id": "g06-5",
   "kind": "mcq",
   "cat": "g06",
   "catLabel": "Klasifikator dan cara menghitung",
   "stage": 3,
   "prompt": "Apa yang terjadi bila klasifikatornya keliru?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Biasanya tetap dipahami, meski terdengar salah",
    "Kalimatnya tidak bisa dipahami sama sekali",
    "Artinya berubah menjadi kebalikannya",
    "Nada kata bendanya berubah"
   ],
   "answer": 0,
   "explain": "Klasifikator yang keliru adalah kesalahan yang segera terdengar, tetapi jarang menghalangi pemahaman. Kesalahan nada jauh lebih mengganggu."
  },
  {
   "id": "g07-1",
   "kind": "mcq",
   "cat": "g07",
   "catLabel": "Kata tunjuk: \u0e19\u0e35\u0e48/\u0e19\u0e31\u0e48\u0e19 dan \u0e19\u0e35\u0e49/\u0e19\u0e31\u0e49\u0e19",
   "stage": 4,
   "prompt": "Apa yang membedakan \u0e19\u0e35\u0e48 dari \u0e19\u0e35\u0e49?",
   "promptTh": "\u0e19\u0e35\u0e48 / \u0e19\u0e35\u0e49",
   "optionsLang": "id",
   "options": [
    "Nadanya, dan karena itu pemakaiannya",
    "Panjang vokalnya",
    "Kelas konsonannya",
    "Tidak ada bedanya"
   ],
   "answer": 0,
   "explain": "\u0e19\u0e35\u0e48 bernada turun dan berdiri sendiri; \u0e19\u0e35\u0e49 bernada tinggi dan menempel sesudah kata benda."
  },
  {
   "id": "g07-2",
   "kind": "mcq",
   "cat": "g07",
   "catLabel": "Kata tunjuk: \u0e19\u0e35\u0e48/\u0e19\u0e31\u0e48\u0e19 dan \u0e19\u0e35\u0e49/\u0e19\u0e31\u0e49\u0e19",
   "stage": 4,
   "prompt": "Mana pola lengkap untuk 'buku ini'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e40\u0e25\u0e48\u0e21\u0e19\u0e35\u0e49",
    "\u0e19\u0e35\u0e49\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
    "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e19\u0e35\u0e48",
    "\u0e40\u0e25\u0e48\u0e21\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e19\u0e35\u0e49"
   ],
   "answer": 0,
   "explain": "Kata benda + klasifikator + kata tunjuk. \u0e40\u0e25\u0e48\u0e21 adalah klasifikator untuk buku."
  },
  {
   "id": "g07-3",
   "kind": "mcq",
   "cat": "g07",
   "catLabel": "Kata tunjuk: \u0e19\u0e35\u0e48/\u0e19\u0e31\u0e48\u0e19 dan \u0e19\u0e35\u0e49/\u0e19\u0e31\u0e49\u0e19",
   "stage": 4,
   "prompt": "Mana yang berarti 'Ini apa?'",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e19\u0e35\u0e48\u0e2d\u0e30\u0e44\u0e23",
    "\u0e19\u0e35\u0e49\u0e2d\u0e30\u0e44\u0e23",
    "\u0e2d\u0e30\u0e44\u0e23\u0e19\u0e35\u0e48\u0e44\u0e2b\u0e21",
    "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23\u0e44\u0e2b\u0e21"
   ],
   "answer": 0,
   "explain": "\u0e19\u0e35\u0e48 berdiri sendiri sebagai pelaku. Bentuk \u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e2d\u0e30\u0e44\u0e23 juga benar dan terasa lebih lengkap."
  },
  {
   "id": "g07-4",
   "kind": "mcq",
   "cat": "g07",
   "catLabel": "Kata tunjuk: \u0e19\u0e35\u0e48/\u0e19\u0e31\u0e48\u0e19 dan \u0e19\u0e35\u0e49/\u0e19\u0e31\u0e49\u0e19",
   "stage": 4,
   "prompt": "Apa guna \u0e42\u0e19\u0e48\u0e19?",
   "promptTh": "\u0e42\u0e19\u0e48\u0e19",
   "optionsLang": "id",
   "options": [
    "Menunjuk benda yang jauh dari pembicara maupun pendengar",
    "Menunjuk benda di tangan pembicara",
    "Menandai pertanyaan",
    "Menandai jumlah"
   ],
   "answer": 0,
   "explain": "Bahasa Thailand punya tiga tingkat jarak: \u0e19\u0e35\u0e48 (dekat pembicara), \u0e19\u0e31\u0e48\u0e19 (dekat pendengar), \u0e42\u0e19\u0e48\u0e19 (jauh dari keduanya)."
  },
  {
   "id": "g07-5",
   "kind": "mcq",
   "cat": "g07",
   "catLabel": "Kata tunjuk: \u0e19\u0e35\u0e48/\u0e19\u0e31\u0e48\u0e19 dan \u0e19\u0e35\u0e49/\u0e19\u0e31\u0e49\u0e19",
   "stage": 4,
   "prompt": "Mana yang paling wajar untuk menunjuk tempat yang terlihat, 'di sini'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49",
    "\u0e19\u0e35\u0e49",
    "\u0e19\u0e35\u0e48\u0e19\u0e35\u0e49",
    "\u0e17\u0e35\u0e48\u0e19\u0e35\u0e49"
   ],
   "answer": 0,
   "explain": "\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49 dipakai untuk tempat yang terlihat. \u0e17\u0e35\u0e48\u0e19\u0e35\u0e48 juga benar dan lebih umum untuk 'di sini' dalam arti luas."
  },
  {
   "id": "g08-1",
   "kind": "mcq",
   "cat": "g08",
   "catLabel": "Waktu tanpa perubahan kata kerja: \u0e41\u0e25\u0e49\u0e27, \u0e08\u0e30, \u0e01\u0e33\u0e25\u0e31\u0e07, \u0e22\u0e31\u0e07",
   "stage": 4,
   "prompt": "Di mana letak \u0e08\u0e30 ('akan')?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Sebelum kata kerja",
    "Di akhir kalimat",
    "Sebelum pelaku",
    "Sesudah sasaran"
   ],
   "answer": 0,
   "explain": "\u0e1c\u0e21\u0e08\u0e30\u0e44\u0e1b. Bandingkan \u0e41\u0e25\u0e49\u0e27 yang justru di akhir kalimat."
  },
  {
   "id": "g08-2",
   "kind": "mcq",
   "cat": "g08",
   "catLabel": "Waktu tanpa perubahan kata kerja: \u0e41\u0e25\u0e49\u0e27, \u0e08\u0e30, \u0e01\u0e33\u0e25\u0e31\u0e07, \u0e22\u0e31\u0e07",
   "stage": 4,
   "prompt": "Di mana letak \u0e41\u0e25\u0e49\u0e27 ('sudah')?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Di akhir kalimat",
    "Sebelum kata kerja",
    "Sebelum pelaku",
    "Sesudah pelaku"
   ],
   "answer": 0,
   "explain": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27. Letak ini berlawanan dengan 'sudah' dalam bahasa Indonesia yang berada sebelum kata kerja."
  },
  {
   "id": "g08-3",
   "kind": "mcq",
   "cat": "g08",
   "catLabel": "Waktu tanpa perubahan kata kerja: \u0e41\u0e25\u0e49\u0e27, \u0e08\u0e30, \u0e01\u0e33\u0e25\u0e31\u0e07, \u0e22\u0e31\u0e07",
   "stage": 4,
   "prompt": "Mana yang berarti 'Saya sedang makan'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e1c\u0e21\u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e34\u0e19",
    "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27",
    "\u0e1c\u0e21\u0e08\u0e30\u0e01\u0e34\u0e19",
    "\u0e1c\u0e21\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19"
   ],
   "answer": 0,
   "explain": "\u0e01\u0e33\u0e25\u0e31\u0e07 + kata kerja menandai perbuatan yang sedang berlangsung. Bentuk \u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e34\u0e19\u0e2d\u0e22\u0e39\u0e48 juga lazim."
  },
  {
   "id": "g08-4",
   "kind": "mcq",
   "cat": "g08",
   "catLabel": "Waktu tanpa perubahan kata kerja: \u0e41\u0e25\u0e49\u0e27, \u0e08\u0e30, \u0e01\u0e33\u0e25\u0e31\u0e07, \u0e22\u0e31\u0e07",
   "stage": 4,
   "prompt": "Apa arti \u0e2d\u0e34\u0e48\u0e21\u0e41\u0e25\u0e49\u0e27?",
   "promptTh": "\u0e2d\u0e34\u0e48\u0e21\u0e41\u0e25\u0e49\u0e27",
   "optionsLang": "id",
   "options": [
    "Sudah kenyang (sekarang)",
    "Dulu pernah kenyang",
    "Akan kenyang",
    "Belum kenyang"
   ],
   "answer": 0,
   "explain": "\u0e41\u0e25\u0e49\u0e27 menandai perubahan keadaan, tidak selalu masa lalu. Ungkapan ini dipakai untuk menolak tambahan makanan."
  },
  {
   "id": "g08-5",
   "kind": "mcq",
   "cat": "g08",
   "catLabel": "Waktu tanpa perubahan kata kerja: \u0e41\u0e25\u0e49\u0e27, \u0e08\u0e30, \u0e01\u0e33\u0e25\u0e31\u0e07, \u0e22\u0e31\u0e07",
   "stage": 4,
   "prompt": "Mengapa kalimat '\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e1b' benar tanpa \u0e08\u0e30?",
   "promptTh": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e1b",
   "optionsLang": "id",
   "options": [
    "Karena keterangan waktu \u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49 sudah menjelaskan waktunya",
    "Karena \u0e44\u0e1b selalu bermakna masa depan",
    "Karena pelakunya orang pertama",
    "Karena kalimatnya tidak lengkap"
   ],
   "answer": 0,
   "explain": "Penanda waktu bersifat pilihan bila konteksnya sudah jelas. Inilah sebabnya bahasa Thailand terasa ringkas."
  },
  {
   "id": "g09-1",
   "kind": "mcq",
   "cat": "g09",
   "catLabel": "Partikel sopan dan partikel rasa",
   "stage": 5,
   "prompt": "Partikel sopan dipilih berdasarkan apa?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Jenis kelamin pembicara",
    "Jenis kelamin pendengar",
    "Umur pendengar",
    "Jenis kalimat saja"
   ],
   "answer": 0,
   "explain": "Lelaki memakai \u0e04\u0e23\u0e31\u0e1a, perempuan memakai \u0e04\u0e48\u0e30 atau \u0e04\u0e30, siapa pun yang diajak bicara."
  },
  {
   "id": "g09-2",
   "kind": "mcq",
   "cat": "g09",
   "catLabel": "Partikel sopan dan partikel rasa",
   "stage": 5,
   "prompt": "Penutur perempuan memakai partikel apa pada PERTANYAAN?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e04\u0e30",
    "\u0e04\u0e48\u0e30",
    "\u0e04\u0e23\u0e31\u0e1a",
    "\u0e19\u0e30"
   ],
   "answer": 0,
   "explain": "\u0e04\u0e30 bernada tinggi untuk pertanyaan, \u0e04\u0e48\u0e30 bernada turun untuk pernyataan. Perbedaannya hanya nada."
  },
  {
   "id": "g09-3",
   "kind": "mcq",
   "cat": "g09",
   "catLabel": "Partikel sopan dan partikel rasa",
   "stage": 5,
   "prompt": "Apa guna partikel \u0e19\u0e30?",
   "promptTh": "\u0e19\u0e30",
   "optionsLang": "id",
   "options": [
    "Melembutkan kalimat atau mencari persetujuan",
    "Menandai pertanyaan ya/tidak",
    "Menandai masa lalu",
    "Menandai jumlah"
   ],
   "answer": 0,
   "explain": "\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e30 terasa seperti 'tidak pedas, ya?' \u2014 permintaan yang dilunakkan."
  },
  {
   "id": "g09-4",
   "kind": "mcq",
   "cat": "g09",
   "catLabel": "Partikel sopan dan partikel rasa",
   "stage": 5,
   "prompt": "Apa akibat tidak memakai partikel sopan sama sekali?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Kalimatnya tetap benar tetapi bisa terdengar datar atau kurang ramah",
    "Kalimatnya menjadi salah secara tata bahasa",
    "Artinya berubah",
    "Kalimatnya menjadi pertanyaan"
   ],
   "answer": 0,
   "explain": "Secara tata bahasa tidak ada yang salah, tetapi di tempat umum partikel sopan sangat diharapkan."
  },
  {
   "id": "g09-5",
   "kind": "mcq",
   "cat": "g09",
   "catLabel": "Partikel sopan dan partikel rasa",
   "stage": 5,
   "prompt": "Mana yang BUKAN bentuk percakapan santai dari \u0e04\u0e23\u0e31\u0e1a atau \u0e04\u0e48\u0e30?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e04\u0e38\u0e13",
    "\u0e04\u0e31\u0e1a",
    "\u0e04\u0e48\u0e32",
    "\u0e08\u0e49\u0e32"
   ],
   "answer": 0,
   "explain": "\u0e04\u0e38\u0e13 berarti 'Anda', bukan partikel sopan. Tiga lainnya adalah bentuk santai yang lazim dalam percakapan dan pesan singkat."
  },
  {
   "id": "g10-1",
   "kind": "mcq",
   "cat": "g10",
   "catLabel": "Kata ganti dan sebutan: lebih rumit daripada 'saya' dan 'kamu'",
   "stage": 5,
   "prompt": "Kata ganti 'saya' apa yang dipakai penutur lelaki pada keadaan sopan?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e1c\u0e21",
    "\u0e09\u0e31\u0e19",
    "\u0e40\u0e18\u0e2d",
    "\u0e04\u0e38\u0e13"
   ],
   "answer": 0,
   "explain": "\u0e1c\u0e21 untuk lelaki, \u0e09\u0e31\u0e19 untuk perempuan. \u0e04\u0e38\u0e13 berarti 'Anda', bukan 'saya'."
  },
  {
   "id": "g10-2",
   "kind": "mcq",
   "cat": "g10",
   "catLabel": "Kata ganti dan sebutan: lebih rumit daripada 'saya' dan 'kamu'",
   "stage": 5,
   "prompt": "Bagaimana cara lazim memanggil pelayan restoran yang kelihatan lebih tua?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e1e\u0e35\u0e48",
    "\u0e04\u0e38\u0e13",
    "\u0e40\u0e18\u0e2d",
    "\u0e40\u0e02\u0e32"
   ],
   "answer": 0,
   "explain": "Sebutan kekeluargaan dipakai luas kepada orang yang tidak dikenal. \u0e1e\u0e35\u0e48 untuk yang lebih tua, \u0e19\u0e49\u0e2d\u0e07 untuk yang lebih muda."
  },
  {
   "id": "g10-3",
   "kind": "mcq",
   "cat": "g10",
   "catLabel": "Kata ganti dan sebutan: lebih rumit daripada 'saya' dan 'kamu'",
   "stage": 5,
   "prompt": "Apakah wajar menyebut nama diri sendiri untuk 'saya'?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Wajar dan lazim dalam bahasa Thailand",
    "Hanya dipakai anak kecil",
    "Dianggap tidak sopan",
    "Hanya dipakai dalam tulisan resmi"
   ],
   "answer": 0,
   "explain": "Orang dewasa pun lazim memakai nama atau nama panggilannya sendiri sebagai 'saya', terutama dalam percakapan santai."
  },
  {
   "id": "g10-4",
   "kind": "mcq",
   "cat": "g10",
   "catLabel": "Kata ganti dan sebutan: lebih rumit daripada 'saya' dan 'kamu'",
   "stage": 5,
   "prompt": "Mengapa kata ganti \u0e21\u0e36\u0e07 dan \u0e01\u0e39 sebaiknya dihindari?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Keduanya sangat kasar kecuali di antara teman sangat dekat",
    "Keduanya sudah tidak dipakai lagi",
    "Keduanya hanya dipakai dalam tulisan",
    "Keduanya hanya dipakai oleh perempuan"
   ],
   "answer": 0,
   "explain": "Di antara teman dekat keduanya menandakan keakraban, tetapi kepada orang lain merupakan penghinaan."
  },
  {
   "id": "g10-5",
   "kind": "mcq",
   "cat": "g10",
   "catLabel": "Kata ganti dan sebutan: lebih rumit daripada 'saya' dan 'kamu'",
   "stage": 5,
   "prompt": "Apa yang sering terjadi pada kata ganti dalam percakapan Thai?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Dihilangkan sama sekali bila sudah jelas dari keadaan",
    "Diulang dua kali untuk penegasan",
    "Diletakkan di akhir kalimat",
    "Diganti dengan angka"
   ],
   "answer": 0,
   "explain": "\u0e44\u0e1b\u0e44\u0e2b\u0e19 tanpa kata ganti adalah kalimat yang lengkap dan wajar."
  },
  {
   "id": "g11-1",
   "kind": "mcq",
   "cat": "g11",
   "catLabel": "Tempat dan arah: \u0e17\u0e35\u0e48, \u0e43\u0e19, \u0e1a\u0e19, \u0e44\u0e1b, \u0e21\u0e32",
   "stage": 6,
   "prompt": "Mana yang benar untuk 'Saya pergi ke pasar'?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e1c\u0e21\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
    "\u0e1c\u0e21\u0e44\u0e1b\u0e17\u0e35\u0e48\u0e43\u0e19\u0e15\u0e25\u0e32\u0e14",
    "\u0e1c\u0e21\u0e15\u0e25\u0e32\u0e14\u0e44\u0e1b",
    "\u0e1c\u0e21\u0e44\u0e1b\u0e1a\u0e19\u0e15\u0e25\u0e32\u0e14"
   ],
   "answer": 0,
   "explain": "Kata kerja gerak tidak memerlukan kata depan untuk tujuannya."
  },
  {
   "id": "g11-2",
   "kind": "mcq",
   "cat": "g11",
   "catLabel": "Tempat dan arah: \u0e17\u0e35\u0e48, \u0e43\u0e19, \u0e1a\u0e19, \u0e44\u0e1b, \u0e21\u0e32",
   "stage": 6,
   "prompt": "Apa arti \u0e1a\u0e19?",
   "promptTh": "\u0e1a\u0e19",
   "optionsLang": "id",
   "options": [
    "Di atas",
    "Di dalam",
    "Di bawah",
    "Di samping"
   ],
   "answer": 0,
   "explain": "\u0e1a\u0e19\u0e42\u0e15\u0e4a\u0e30 ('di atas meja'). Untuk 'di dalam' dipakai \u0e43\u0e19, untuk 'di bawah' \u0e43\u0e15\u0e49."
  },
  {
   "id": "g11-3",
   "kind": "mcq",
   "cat": "g11",
   "catLabel": "Tempat dan arah: \u0e17\u0e35\u0e48, \u0e43\u0e19, \u0e1a\u0e19, \u0e44\u0e1b, \u0e21\u0e32",
   "stage": 6,
   "prompt": "Apa guna \u0e21\u0e32 pada \u0e40\u0e2d\u0e32\u0e21\u0e32?",
   "promptTh": "\u0e40\u0e2d\u0e32\u0e21\u0e32",
   "optionsLang": "id",
   "options": [
    "Menandai arah mendekat ke pembicara",
    "Menandai masa lalu",
    "Menandai pertanyaan",
    "Menandai jumlah"
   ],
   "answer": 0,
   "explain": "\u0e40\u0e2d\u0e32\u0e21\u0e32 = 'bawa ke sini', \u0e40\u0e2d\u0e32\u0e44\u0e1b = 'bawa ke sana'. Arah terhadap pembicara ditandai oleh \u0e21\u0e32 dan \u0e44\u0e1b."
  },
  {
   "id": "g11-4",
   "kind": "mcq",
   "cat": "g11",
   "catLabel": "Tempat dan arah: \u0e17\u0e35\u0e48, \u0e43\u0e19, \u0e1a\u0e19, \u0e44\u0e1b, \u0e21\u0e32",
   "stage": 6,
   "prompt": "Mengapa \u0e17\u0e35\u0e48 bisa dihilangkan pada \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19?",
   "promptTh": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19",
   "optionsLang": "id",
   "options": [
    "Karena \u0e2d\u0e22\u0e39\u0e48 sendiri sudah menyatakan keberadaan di suatu tempat",
    "Karena \u0e44\u0e2b\u0e19 tidak boleh didahului kata depan",
    "Karena kalimatnya pertanyaan",
    "Karena \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33 kata majemuk"
   ],
   "answer": 0,
   "explain": "Bentuk lengkapnya \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19 juga benar, tetapi \u0e17\u0e35\u0e48 sering dihilangkan dalam percakapan."
  },
  {
   "id": "g11-5",
   "kind": "mcq",
   "cat": "g11",
   "catLabel": "Tempat dan arah: \u0e17\u0e35\u0e48, \u0e43\u0e19, \u0e1a\u0e19, \u0e44\u0e1b, \u0e21\u0e32",
   "stage": 6,
   "prompt": "Apa arti \u0e02\u0e49\u0e32\u0e07\u0e19\u0e2d\u0e01?",
   "promptTh": "\u0e02\u0e49\u0e32\u0e07\u0e19\u0e2d\u0e01",
   "optionsLang": "id",
   "options": [
    "Di luar",
    "Di dalam",
    "Di sebelah kiri",
    "Di belakang"
   ],
   "answer": 0,
   "explain": "\u0e02\u0e49\u0e32\u0e07 ('sisi') + \u0e19\u0e2d\u0e01 ('luar'). Pola yang sama: \u0e02\u0e49\u0e32\u0e07\u0e43\u0e19 (di dalam), \u0e02\u0e49\u0e32\u0e07\u0e1a\u0e19 (di atas), \u0e02\u0e49\u0e32\u0e07\u0e25\u0e48\u0e32\u0e07 (di bawah)."
  },
  {
   "id": "g12-1",
   "kind": "mcq",
   "cat": "g12",
   "catLabel": "Kata kerja berangkai dan tiga cara mengatakan 'bisa'",
   "stage": 6,
   "prompt": "Di mana letak \u0e44\u0e14\u0e49 ('bisa')?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Sesudah kata kerja",
    "Sebelum kata kerja",
    "Di awal kalimat",
    "Sebelum pelaku"
   ],
   "answer": 0,
   "explain": "\u0e1e\u0e39\u0e14\u0e44\u0e14\u0e49, \u0e01\u0e34\u0e19\u0e44\u0e14\u0e49, \u0e44\u0e1b\u0e44\u0e14\u0e49. Berlawanan dengan 'bisa' bahasa Indonesia yang berada sebelum kata kerja."
  },
  {
   "id": "g12-2",
   "kind": "mcq",
   "cat": "g12",
   "catLabel": "Kata kerja berangkai dan tiga cara mengatakan 'bisa'",
   "stage": 6,
   "prompt": "Kata mana untuk 'bisa' dalam arti keterampilan yang dipelajari?",
   "promptTh": "",
   "optionsLang": "th",
   "options": [
    "\u0e40\u0e1b\u0e47\u0e19",
    "\u0e44\u0e14\u0e49",
    "\u0e44\u0e2b\u0e27",
    "\u0e2d\u0e22\u0e39\u0e48"
   ],
   "answer": 0,
   "explain": "\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e47\u0e19 ('bisa berenang'), \u0e1e\u0e39\u0e14\u0e44\u0e17\u0e22\u0e40\u0e1b\u0e47\u0e19 ('bisa berbahasa Thai'). \u0e40\u0e1b\u0e47\u0e19 di sini bukan 'adalah'."
  },
  {
   "id": "g12-3",
   "kind": "mcq",
   "cat": "g12",
   "catLabel": "Kata kerja berangkai dan tiga cara mengatakan 'bisa'",
   "stage": 6,
   "prompt": "Apa arti \u0e44\u0e2b\u0e27 pada \u0e40\u0e14\u0e34\u0e19\u0e44\u0e2b\u0e27?",
   "promptTh": "\u0e40\u0e14\u0e34\u0e19\u0e44\u0e2b\u0e27",
   "optionsLang": "id",
   "options": [
    "Masih kuat atau tahan secara fisik",
    "Sudah terbiasa",
    "Boleh menurut aturan",
    "Sedang berlangsung"
   ],
   "answer": 0,
   "explain": "\u0e44\u0e2b\u0e27 menandai daya tahan fisik. \u0e44\u0e21\u0e48\u0e44\u0e2b\u0e27 ('tidak tahan lagi') sangat sering dipakai dalam percakapan."
  },
  {
   "id": "g12-4",
   "kind": "mcq",
   "cat": "g12",
   "catLabel": "Kata kerja berangkai dan tiga cara mengatakan 'bisa'",
   "stage": 6,
   "prompt": "Apa arti \u0e1c\u0e21\u0e40\u0e14\u0e34\u0e19\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14?",
   "promptTh": "\u0e1c\u0e21\u0e40\u0e14\u0e34\u0e19\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
   "optionsLang": "id",
   "options": [
    "Saya berjalan ke pasar",
    "Saya berjalan lalu pergi, kemudian ke pasar",
    "Saya menyuruh orang berjalan ke pasar",
    "Saya pernah berjalan ke pasar"
   ],
   "answer": 0,
   "explain": "Rangkaian kata kerja \u0e40\u0e14\u0e34\u0e19\u0e44\u0e1b menggambarkan satu perbuatan: berjalan dengan arah menjauh dari pembicara."
  },
  {
   "id": "g12-5",
   "kind": "mcq",
   "cat": "g12",
   "catLabel": "Kata kerja berangkai dan tiga cara mengatakan 'bisa'",
   "stage": 6,
   "prompt": "Bagaimana mengatakan 'Tolong bicara lebih lambat'?",
   "promptTh": "",
   "optionsLang": "id",
   "options": [
    "Dengan \u0e0a\u0e48\u0e27\u0e22 di depan kata kerjanya",
    "Dengan \u0e44\u0e14\u0e49 di depan kata kerjanya",
    "Dengan \u0e44\u0e2b\u0e21 di depan kata kerjanya",
    "Dengan \u0e40\u0e1b\u0e47\u0e19 di akhir kalimat"
   ],
   "answer": 0,
   "explain": "\u0e0a\u0e48\u0e27\u0e22 + kata kerja membentuk permintaan sopan, dan sering ditutup \u0e14\u0e49\u0e27\u0e22 atau \u0e2b\u0e19\u0e48\u0e2d\u0e22: \u0e0a\u0e48\u0e27\u0e22\u0e1e\u0e39\u0e14\u0e0a\u0e49\u0e32\u0e46\u0e2b\u0e19\u0e48\u0e2d\u0e22."
  }
 ],
 "frasa": [
  {
   "id": "f01",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "phon": "s\u00e0-w\u00e0t-dii khr\u00e1p",
   "rom": "sawatdi khrap",
   "gloss": "Salam. (diucapkan lelaki)",
   "lit": "",
   "note": "Dipakai pagi, siang, malam, dan juga saat berpamitan. Lelaki selalu menutup dengan \u0e04\u0e23\u0e31\u0e1a."
  },
  {
   "id": "f02",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e48\u0e30",
   "audio": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e48\u0e30",
   "phon": "s\u00e0-w\u00e0t-dii kh\u00e2",
   "rom": "sawatdi kha",
   "gloss": "Salam. (diucapkan perempuan)",
   "lit": "",
   "note": "Perempuan memakai \u0e04\u0e48\u0e30 pada pernyataan dan sapaan."
  },
  {
   "id": "f03",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "phon": "s\u00e0-baai-dii m\u01cei khr\u00e1p",
   "rom": "sabaidi mai khrap",
   "gloss": "Apa kabar?",
   "lit": "nyaman-baik kah",
   "note": "Pertanyaan pembuka yang paling lazim. Tidak dipakai kepada orang yang sudah Anda temui pada hari yang sama."
  },
  {
   "id": "f04",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "phon": "s\u00e0-baai-dii khr\u00e1p",
   "rom": "sabaidi khrap",
   "gloss": "Baik, terima kasih.",
   "lit": "nyaman-baik",
   "note": "Jawaban baku atas \u0e2a\u0e1a\u0e32\u0e22\u0e14\u0e35\u0e44\u0e2b\u0e21. Bila sedang tidak sehat: \u0e44\u0e21\u0e48\u0e2a\u0e1a\u0e32\u0e22 (m\u00e2i s\u00e0-baai)."
  },
  {
   "id": "f05",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e23\u0e31\u0e1a",
   "phon": "kh\u00e0awp-khun khr\u00e1p",
   "rom": "khopkhun khrap",
   "gloss": "Terima kasih.",
   "lit": "",
   "note": "Untuk terima kasih yang lebih dalam: \u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a."
  },
  {
   "id": "f06",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a",
   "phon": "m\u00e2i-pen-rai khr\u00e1p",
   "rom": "mai pen rai khrap",
   "gloss": "Tidak apa-apa. / Tidak masalah.",
   "lit": "tidak jadi apa",
   "note": "Salah satu ungkapan paling sering didengar di Thailand. Dipakai untuk menjawab permintaan maaf, menjawab terima kasih, dan menolak tawaran dengan halus."
  },
  {
   "id": "f07",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 1,
   "th": "\u0e02\u0e2d\u0e42\u0e17\u0e29\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e02\u0e2d\u0e42\u0e17\u0e29\u0e04\u0e23\u0e31\u0e1a",
   "phon": "kh\u01ceaw-th\u00f4ot khr\u00e1p",
   "rom": "khothot khrap",
   "gloss": "Maaf. / Permisi.",
   "lit": "minta hukuman",
   "note": "Juga dipakai untuk menyapa orang yang tidak dikenal sebelum bertanya."
  },
  {
   "id": "f08",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 2,
   "th": "\u0e22\u0e34\u0e19\u0e14\u0e35\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01",
   "audio": "\u0e22\u0e34\u0e19\u0e14\u0e35\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01",
   "phon": "yin-dii th\u00eei d\u00e2i r\u00fau-j\u00e0k",
   "rom": "yindi thi dai ruchak",
   "gloss": "Senang berkenalan dengan Anda.",
   "lit": "senang yang dapat mengenal",
   "note": "Kalimat yang panjang tetapi dipakai utuh sebagai satu ungkapan. Hafalkan sebagai satu blok."
  },
  {
   "id": "f09",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 2,
   "th": "\u0e04\u0e38\u0e13\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e30\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e04\u0e38\u0e13\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e30\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a",
   "phon": "khun ch\u00fbue \u00e0-rai khr\u00e1p",
   "rom": "khun chue arai khrap",
   "gloss": "Siapa nama Anda?",
   "lit": "Anda bernama apa",
   "note": "Kata tanya \u0e2d\u0e30\u0e44\u0e23 berada di tempat jawabannya, bukan di awal kalimat."
  },
  {
   "id": "f10",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 2,
   "th": "\u0e1c\u0e21\u0e21\u0e32\u0e08\u0e32\u0e01\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22",
   "audio": "\u0e1c\u0e21\u0e21\u0e32\u0e08\u0e32\u0e01\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22",
   "phon": "ph\u01d2m maa j\u00e0ak in-doo-nii-sia",
   "rom": "phom ma chak indonisia",
   "gloss": "Saya dari Indonesia.",
   "lit": "saya datang dari Indonesia",
   "note": "Perempuan mengganti \u0e1c\u0e21 dengan \u0e09\u0e31\u0e19."
  },
  {
   "id": "f11",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 2,
   "th": "\u0e1c\u0e21\u0e1e\u0e39\u0e14\u0e44\u0e17\u0e22\u0e44\u0e14\u0e49\u0e19\u0e34\u0e14\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "audio": "\u0e1c\u0e21\u0e1e\u0e39\u0e14\u0e44\u0e17\u0e22\u0e44\u0e14\u0e49\u0e19\u0e34\u0e14\u0e2b\u0e19\u0e48\u0e2d\u0e22",
   "phon": "ph\u01d2m ph\u00fbut thai d\u00e2i n\u00edt-n\u00e0awi",
   "rom": "phom phut thai dai nitnoi",
   "gloss": "Saya bisa berbahasa Thai sedikit.",
   "lit": "saya bicara Thai bisa sedikit",
   "note": "Kalimat yang sangat berguna di awal percakapan: ia menurunkan kecepatan bicara lawan bicara Anda."
  },
  {
   "id": "f12",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 2,
   "th": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ph\u01d2m m\u00e2i kh\u00e2o-jai khr\u00e1p",
   "rom": "phom mai khaochai khrap",
   "gloss": "Saya tidak mengerti.",
   "lit": "saya tidak masuk hati",
   "note": "\u0e40\u0e02\u0e49\u0e32\u0e43\u0e08 ('mengerti') harfiahnya 'masuk ke hati'. Kata \u0e43\u0e08 muncul pada banyak ungkapan perasaan dan pikiran."
  },
  {
   "id": "f13",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 3,
   "th": "\u0e0a\u0e48\u0e27\u0e22\u0e1e\u0e39\u0e14\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e0a\u0e48\u0e27\u0e22\u0e1e\u0e39\u0e14\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ch\u00fbai ph\u00fbut \u00ecik kr\u00e1ng khr\u00e1p",
   "rom": "chuai phut ik khrang khrap",
   "gloss": "Tolong ucapkan sekali lagi.",
   "lit": "bantu bicara lagi kali",
   "note": "\u0e0a\u0e48\u0e27\u0e22 + kata kerja adalah pola permintaan sopan yang paling berguna untuk pemula."
  },
  {
   "id": "f14",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 3,
   "th": "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e22\u0e32\u0e01\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e22\u0e32\u0e01\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "phon": "phaa-s\u01cea thai y\u00e2ak m\u01cei khr\u00e1p",
   "rom": "phasa thai yak mai khrap",
   "gloss": "Apakah bahasa Thailand sulit?",
   "lit": "",
   "note": "Pertanyaan pembuka percakapan yang hampir selalu disambut hangat oleh penutur asli."
  },
  {
   "id": "f15",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 2,
   "th": "\u0e41\u0e25\u0e49\u0e27\u0e40\u0e08\u0e2d\u0e01\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e41\u0e25\u0e49\u0e27\u0e40\u0e08\u0e2d\u0e01\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "phon": "l\u00e1eo jooe kan khr\u00e1p",
   "rom": "laeo choe kan khrap",
   "gloss": "Sampai jumpa.",
   "lit": "sudah berjumpa bersama",
   "note": "Dipakai kepada orang yang akan Anda temui lagi. Lebih santai daripada \u0e25\u0e32\u0e01\u0e48\u0e2d\u0e19."
  },
  {
   "id": "f16",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 3,
   "th": "\u0e25\u0e32\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e25\u0e32\u0e01\u0e48\u0e2d\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "phon": "laa-k\u00e0awn khr\u00e1p",
   "rom": "lakon khrap",
   "gloss": "Selamat tinggal.",
   "lit": "berpisah dahulu",
   "note": "Terasa agak resmi dan berjarak. Dalam percakapan sehari-hari orang lebih sering memakai \u0e41\u0e25\u0e49\u0e27\u0e40\u0e08\u0e2d\u0e01\u0e31\u0e19 atau \u0e44\u0e1b\u0e01\u0e48\u0e2d\u0e19\u0e19\u0e30."
  },
  {
   "id": "f17",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 3,
   "th": "\u0e44\u0e1b\u0e01\u0e48\u0e2d\u0e19\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e44\u0e1b\u0e01\u0e48\u0e2d\u0e19\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
   "phon": "pai k\u00e0awn n\u00e1 khr\u00e1p",
   "rom": "pai kon na khrap",
   "gloss": "Saya pergi dulu, ya.",
   "lit": "pergi dahulu ya",
   "note": "Cara pamit yang paling wajar saat meninggalkan sekelompok orang."
  },
  {
   "id": "f18",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 4,
   "th": "\u0e1d\u0e31\u0e19\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1d\u0e31\u0e19\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
   "phon": "f\u01cen dii khr\u00e1p",
   "rom": "fandi khrap",
   "gloss": "Selamat tidur. (mimpi indah)",
   "lit": "bermimpi baik",
   "note": "Dipakai kepada orang dekat sebelum tidur, biasanya lewat pesan singkat."
  },
  {
   "id": "f19",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 2,
   "th": "\u0e40\u0e2d\u0e32\u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e40\u0e2d\u0e32\u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ao an n\u00edi khr\u00e1p",
   "rom": "ao an ni khrap",
   "gloss": "Saya mau yang ini.",
   "lit": "ambil buah ini",
   "note": "Kalimat terpenting bagi pemula: dengan menunjuk, Anda bisa memesan apa pun tanpa tahu namanya."
  },
  {
   "id": "f20",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 2,
   "th": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19\u0e2b\u0e21\u0e39\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19\u0e2b\u0e21\u0e39\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ph\u01d2m m\u00e2i kin m\u01d4u khr\u00e1p",
   "rom": "phom mai kin mu khrap",
   "gloss": "Saya tidak makan babi.",
   "lit": "",
   "note": "Bagi pembaca Muslim, kalimat ini perlu dihafal lebih dahulu daripada kalimat lain. Perhatikan nada naik pada \u0e2b\u0e21\u0e39; bila diucapkan bernada sedang (\u0e21\u0e39) kata itu tidak dikenali."
  },
  {
   "id": "f21",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 3,
   "th": "\u0e21\u0e35\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e2e\u0e32\u0e25\u0e32\u0e25\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e21\u0e35\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e2e\u0e32\u0e25\u0e32\u0e25\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "phon": "mii aa-h\u01cean haa-laan m\u01cei khr\u00e1p",
   "rom": "mi ahan halan mai khrap",
   "gloss": "Apakah ada makanan halal?",
   "lit": "",
   "note": "\u0e2e\u0e32\u0e25\u0e32\u0e25 adalah serapan dan dilafalkan haa-laan, sebab \u0e25 di akhir suku kata berbunyi -n. Di Bangkok dan Thailand selatan banyak rumah makan halal; di daerah lain pertanyaan ini perlu disertai penjelasan."
  },
  {
   "id": "f22",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 2,
   "th": "\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
   "phon": "m\u00e2i ph\u00e8t n\u00e1 khr\u00e1p",
   "rom": "mai phet na khrap",
   "gloss": "Jangan pedas, ya.",
   "lit": "tidak pedas ya",
   "note": "Partikel \u0e19\u0e30 melembutkan permintaan. Tanpa \u0e19\u0e30 kalimatnya terdengar seperti perintah."
  },
  {
   "id": "f23",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 3,
   "th": "\u0e40\u0e2d\u0e32\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e25\u0e48\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e40\u0e2d\u0e32\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e25\u0e48\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ao n\u00e1am-pl\u00e0o n\u00f9eng k\u00e2eo khr\u00e1p",
   "rom": "ao nam plao nueng kaeo khrap",
   "gloss": "Saya mau satu gelas air putih.",
   "lit": "ambil air kosong satu gelas",
   "note": "\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e25\u0e48\u0e32 harfiahnya 'air kosong', yaitu air minum biasa. Pola hitungannya: benda + angka + klasifikator."
  },
  {
   "id": "f24",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 2,
   "th": "\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "phon": "\u00e0-r\u00e0awi m\u00e2ak khr\u00e1p",
   "rom": "aroi mak khrap",
   "gloss": "Enak sekali.",
   "lit": "",
   "note": "Pujian yang selalu disukai. Perhatikan \u0e21\u0e32\u0e01 berada SESUDAH kata sifatnya."
  },
  {
   "id": "f25",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 3,
   "th": "\u0e02\u0e2d\u0e0a\u0e49\u0e2d\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e02\u0e2d\u0e0a\u0e49\u0e2d\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "phon": "kh\u01ceaw ch\u00e1awn khr\u00e1p",
   "rom": "kho chon khrap",
   "gloss": "Minta sendok.",
   "lit": "minta sendok",
   "note": "\u0e02\u0e2d + benda adalah pola meminta sesuatu yang kecil. Lebih sopan daripada \u0e40\u0e2d\u0e32 pada keadaan ini."
  },
  {
   "id": "f26",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 3,
   "th": "\u0e40\u0e0a\u0e47\u0e04\u0e1a\u0e34\u0e25\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e40\u0e0a\u0e47\u0e04\u0e1a\u0e34\u0e25\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ch\u00e9k bin khr\u00e1p",
   "rom": "chek bin khrap",
   "gloss": "Minta bonnya. (bayar)",
   "lit": "",
   "note": "Serapan dari bahasa Inggris 'check bill'. Bentuk Thai aslinya \u0e40\u0e01\u0e47\u0e1a\u0e40\u0e07\u0e34\u0e19 (k\u00e8p ngooen) juga dipakai."
  },
  {
   "id": "f27",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 3,
   "th": "\u0e2d\u0e34\u0e48\u0e21\u0e41\u0e25\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e2d\u0e34\u0e48\u0e21\u0e41\u0e25\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "phon": "\u00ecm l\u00e1eo khr\u00e1p",
   "rom": "im laeo khrap",
   "gloss": "Sudah kenyang.",
   "lit": "kenyang sudah",
   "note": "Cara menolak tambahan makanan tanpa menyinggung tuan rumah. \u0e41\u0e25\u0e49\u0e27 di sini menandai perubahan keadaan."
  },
  {
   "id": "f28",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 4,
   "th": "\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27\u0e41\u0e25\u0e49\u0e27\u0e2b\u0e23\u0e37\u0e2d\u0e22\u0e31\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27\u0e41\u0e25\u0e49\u0e27\u0e2b\u0e23\u0e37\u0e2d\u0e22\u0e31\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "phon": "kin kh\u00e2ao l\u00e1eo r\u01d4ue yang khr\u00e1p",
   "rom": "kin khao laeo rue yang khrap",
   "gloss": "Sudah makan atau belum?",
   "lit": "makan nasi sudah atau belum",
   "note": "Pertanyaan sapaan yang sangat lazim, mirip 'sudah makan?' dalam bahasa Indonesia. Pola ...\u0e41\u0e25\u0e49\u0e27\u0e2b\u0e23\u0e37\u0e2d\u0e22\u0e31\u0e07 berarti 'sudah ... atau belum'."
  },
  {
   "id": "f29",
   "kind": "flip",
   "cat": "belanja",
   "catLabel": "Belanja",
   "stage": 3,
   "th": "\u0e23\u0e32\u0e04\u0e32\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e23\u0e32\u0e04\u0e32\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48\u0e04\u0e23\u0e31\u0e1a",
   "phon": "raa-khaa th\u00e2o-r\u00e0i khr\u00e1p",
   "rom": "rakha thaorai khrap",
   "gloss": "Berapa harganya?",
   "lit": "",
   "note": "Bentuk pendeknya \u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48\u0e04\u0e23\u0e31\u0e1a saja sudah cukup bila barangnya sedang Anda pegang."
  },
  {
   "id": "f30",
   "kind": "flip",
   "cat": "belanja",
   "catLabel": "Belanja",
   "stage": 3,
   "th": "\u0e41\u0e1e\u0e07\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e41\u0e1e\u0e07\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "phon": "phaeng m\u00e2ak khr\u00e1p",
   "rom": "phaeng mak khrap",
   "gloss": "Mahal sekali.",
   "lit": "",
   "note": "Dipakai sebagai pembuka menawar di pasar, bukan di toko berlabel harga."
  },
  {
   "id": "f31",
   "kind": "flip",
   "cat": "belanja",
   "catLabel": "Belanja",
   "stage": 4,
   "th": "\u0e25\u0e14\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e25\u0e14\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "phon": "l\u00f3t d\u00e2i m\u01cei khr\u00e1p",
   "rom": "lot dai mai khrap",
   "gloss": "Bisa kurang harganya?",
   "lit": "kurangi bisa kah",
   "note": "Menawar lazim di pasar dan kios suvenir, tetapi tidak di pasar modern. Jawabannya \u0e44\u0e14\u0e49 ('bisa') atau \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 ('tidak bisa')."
  },
  {
   "id": "f32",
   "kind": "flip",
   "cat": "belanja",
   "catLabel": "Belanja",
   "stage": 3,
   "th": "\u0e40\u0e2d\u0e32\u0e2a\u0e2d\u0e07\u0e2d\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e40\u0e2d\u0e32\u0e2a\u0e2d\u0e07\u0e2d\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ao s\u01ceawng an khr\u00e1p",
   "rom": "ao song an khrap",
   "gloss": "Saya mau dua buah.",
   "lit": "ambil dua buah",
   "note": "\u0e2d\u0e31\u0e19 adalah klasifikator umum untuk benda kecil, pilihan yang aman bila Anda belum tahu klasifikator yang tepat."
  },
  {
   "id": "f33",
   "kind": "flip",
   "cat": "belanja",
   "catLabel": "Belanja",
   "stage": 4,
   "th": "\u0e21\u0e35\u0e2a\u0e35\u0e2d\u0e37\u0e48\u0e19\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e21\u0e35\u0e2a\u0e35\u0e2d\u0e37\u0e48\u0e19\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "phon": "mii s\u01d0i \u00f9uen m\u01cei khr\u00e1p",
   "rom": "mi si uen mai khrap",
   "gloss": "Ada warna lain?",
   "lit": "ada warna lain kah",
   "note": "\u0e2a\u0e35 berarti 'warna' dan bernada naik; \u0e2a\u0e35\u0e48 ('empat') bernada rendah. Keduanya hanya berbeda nada."
  },
  {
   "id": "f34",
   "kind": "flip",
   "cat": "belanja",
   "catLabel": "Belanja",
   "stage": 4,
   "th": "\u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19\u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e08\u0e48\u0e32\u0e22\u0e40\u0e07\u0e34\u0e19\u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "phon": "j\u00e0ai ngooen th\u00eei-n\u01cei khr\u00e1p",
   "rom": "chai ngoen thi nai khrap",
   "gloss": "Bayarnya di mana?",
   "lit": "",
   "note": ""
  },
  {
   "id": "f35",
   "kind": "flip",
   "cat": "belanja",
   "catLabel": "Belanja",
   "stage": 2,
   "th": "\u0e44\u0e21\u0e48\u0e40\u0e2d\u0e32\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e44\u0e21\u0e48\u0e40\u0e2d\u0e32\u0e04\u0e23\u0e31\u0e1a",
   "phon": "m\u00e2i ao khr\u00e1p",
   "rom": "mai ao khrap",
   "gloss": "Tidak, terima kasih.",
   "lit": "tidak ambil",
   "note": "Cara menolak tawaran penjual dengan singkat tetapi tetap sopan karena ada \u0e04\u0e23\u0e31\u0e1a."
  },
  {
   "id": "f36",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 2,
   "th": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "phon": "h\u00e2awng-n\u00e1am y\u00f9u th\u00eei-n\u01cei khr\u00e1p",
   "rom": "hongnam yu thi nai khrap",
   "gloss": "Di mana toiletnya?",
   "lit": "ruang air berada di mana",
   "note": "Kalimat yang paling sering diperlukan wisatawan. Bentuk pendeknya \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a."
  },
  {
   "id": "f37",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 5,
   "th": "\u0e44\u0e1b\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e23\u0e16\u0e44\u0e1f\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e44\u0e1b\u0e2a\u0e16\u0e32\u0e19\u0e35\u0e23\u0e16\u0e44\u0e1f\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a",
   "phon": "pai s\u00e0-th\u01cea-nii r\u00f3t-fai y\u00e0ang-rai khr\u00e1p",
   "rom": "pai sathani rotfai yangrai khrap",
   "gloss": "Bagaimana caranya ke stasiun kereta?",
   "lit": "pergi stasiun kereta bagaimana",
   "note": "\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23 ('bagaimana') dalam percakapan hampir selalu diucapkan \u0e22\u0e31\u0e07\u0e44\u0e07 (yang-ngai). Ejaan \u0e2d\u0e22\u0e48\u0e32\u0e07\u0e44\u0e23 dipakai pada tulisan."
  },
  {
   "id": "f38",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 2,
   "th": "\u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "phon": "klai m\u01cei khr\u00e1p",
   "rom": "klai mai khrap",
   "gloss": "Jauh tidak?",
   "lit": "",
   "note": "Jawabannya biasanya \u0e44\u0e21\u0e48\u0e44\u0e01\u0e25 ('tidak jauh') atau \u0e43\u0e01\u0e25\u0e49\u0e46 ('dekat saja')."
  },
  {
   "id": "f39",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e27\u0e0b\u0e49\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e40\u0e25\u0e35\u0e49\u0e22\u0e27\u0e0b\u0e49\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "phon": "l\u00edao s\u00e1ai khr\u00e1p",
   "rom": "liao sai khrap",
   "gloss": "Belok kiri.",
   "lit": "",
   "note": "Dipakai saat memberi arah kepada pengemudi. Pasangannya \u0e40\u0e25\u0e35\u0e49\u0e22\u0e27\u0e02\u0e27\u0e32 ('belok kanan')."
  },
  {
   "id": "f40",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 4,
   "th": "\u0e15\u0e23\u0e07\u0e44\u0e1b\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e15\u0e23\u0e07\u0e44\u0e1b\u0e04\u0e23\u0e31\u0e1a",
   "phon": "trong pai khr\u00e1p",
   "rom": "trong pai khrap",
   "gloss": "Jalan terus (lurus).",
   "lit": "lurus pergi",
   "note": ""
  },
  {
   "id": "f41",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 5,
   "th": "\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e02\u0e35\u0e22\u0e19\u0e43\u0e2b\u0e49\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e0a\u0e48\u0e27\u0e22\u0e40\u0e02\u0e35\u0e22\u0e19\u0e43\u0e2b\u0e49\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ch\u00fbai kh\u01d0an h\u00e2i d\u00fbai khr\u00e1p",
   "rom": "chuai khian hai duai khrap",
   "gloss": "Tolong tuliskan untuk saya.",
   "lit": "bantu tulis beri juga",
   "note": "Berguna saat menanyakan alamat: tulisan tangan penutur asli bisa Anda tunjukkan kepada pengemudi."
  },
  {
   "id": "f42",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 5,
   "th": "\u0e1c\u0e21\u0e2b\u0e25\u0e07\u0e17\u0e32\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1c\u0e21\u0e2b\u0e25\u0e07\u0e17\u0e32\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ph\u01d2m l\u01d2ng thaang khr\u00e1p",
   "rom": "phom longthang khrap",
   "gloss": "Saya tersesat.",
   "lit": "saya tersesat jalan",
   "note": "\u0e2b\u0e25\u0e07 sendiri berarti 'tersesat, terpikat'; \u0e2b\u0e25\u0e07\u0e17\u0e32\u0e07 khusus untuk kehilangan arah."
  },
  {
   "id": "f43",
   "kind": "flip",
   "cat": "darurat",
   "catLabel": "Darurat & sakit",
   "stage": 3,
   "th": "\u0e0a\u0e48\u0e27\u0e22\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e0a\u0e48\u0e27\u0e22\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ch\u00fbai d\u00fbai khr\u00e1p",
   "rom": "chuai duai khrap",
   "gloss": "Tolong!",
   "lit": "bantu juga",
   "note": "Seruan meminta pertolongan. Dalam keadaan darurat partikel sopan boleh dihilangkan: \u0e0a\u0e48\u0e27\u0e22\u0e14\u0e49\u0e27\u0e22."
  },
  {
   "id": "f44",
   "kind": "flip",
   "cat": "darurat",
   "catLabel": "Darurat & sakit",
   "stage": 3,
   "th": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e1a\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e1a\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ph\u01d2m m\u00e2i s\u00e0-baai khr\u00e1p",
   "rom": "phom mai sabai khrap",
   "gloss": "Saya tidak sehat.",
   "lit": "saya tidak nyaman",
   "note": "Ungkapan umum untuk 'sakit'. Untuk menyebut bagian yang sakit dipakai \u0e1b\u0e27\u0e14 atau \u0e40\u0e08\u0e47\u0e1a."
  },
  {
   "id": "f45",
   "kind": "flip",
   "cat": "darurat",
   "catLabel": "Darurat & sakit",
   "stage": 4,
   "th": "\u0e1c\u0e21\u0e1b\u0e27\u0e14\u0e17\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1c\u0e21\u0e1b\u0e27\u0e14\u0e17\u0e49\u0e2d\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ph\u01d2m p\u00f9at th\u00e1awng khr\u00e1p",
   "rom": "phom puat thong khrap",
   "gloss": "Perut saya sakit.",
   "lit": "",
   "note": "Pola \u0e1b\u0e27\u0e14 + bagian badan: \u0e1b\u0e27\u0e14\u0e2b\u0e31\u0e27 (sakit kepala), \u0e1b\u0e27\u0e14\u0e1f\u0e31\u0e19 (sakit gigi), \u0e1b\u0e27\u0e14\u0e17\u0e49\u0e2d\u0e07 (sakit perut)."
  },
  {
   "id": "f46",
   "kind": "flip",
   "cat": "darurat",
   "catLabel": "Darurat & sakit",
   "stage": 5,
   "th": "\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e42\u0e23\u0e07\u0e1e\u0e22\u0e32\u0e1a\u0e32\u0e25\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "phon": "roong-ph\u00e1-yaa-baan y\u00f9u n\u01cei khr\u00e1p",
   "rom": "rongphayaban yu nai khrap",
   "gloss": "Di mana rumah sakit?",
   "lit": "",
   "note": "Suku kata \u0e1e berdiri sendiri dan berkelas rendah, sehingga bernada tinggi (ph\u00e1). Bandingkan dengan aksara nam yang pemimpinnya berkelas tinggi, seperti \u0e02\u0e19\u0e21."
  },
  {
   "id": "f47",
   "kind": "flip",
   "cat": "darurat",
   "catLabel": "Darurat & sakit",
   "stage": 5,
   "th": "\u0e40\u0e23\u0e35\u0e22\u0e01\u0e2b\u0e21\u0e2d\u0e43\u0e2b\u0e49\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e40\u0e23\u0e35\u0e22\u0e01\u0e2b\u0e21\u0e2d\u0e43\u0e2b\u0e49\u0e14\u0e49\u0e27\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "phon": "r\u00eeak m\u01ceaw h\u00e2i d\u00fbai khr\u00e1p",
   "rom": "riak mo hai duai khrap",
   "gloss": "Tolong panggil dokter.",
   "lit": "panggil dokter beri juga",
   "note": "Pola ...\u0e43\u0e2b\u0e49\u0e14\u0e49\u0e27\u0e22 ('lakukan untuk saya') adalah permintaan yang sopan dan jelas."
  },
  {
   "id": "f48",
   "kind": "flip",
   "cat": "darurat",
   "catLabel": "Darurat & sakit",
   "stage": 4,
   "th": "\u0e1c\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e34\u0e19\u0e22\u0e32\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1c\u0e21\u0e15\u0e49\u0e2d\u0e07\u0e01\u0e34\u0e19\u0e22\u0e32\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ph\u01d2m t\u00e2awng kin yaa khr\u00e1p",
   "rom": "phom tong kin ya khrap",
   "gloss": "Saya harus minum obat.",
   "lit": "saya harus makan obat",
   "note": "Untuk obat dipakai \u0e01\u0e34\u0e19 ('makan'), bukan \u0e14\u0e37\u0e48\u0e21 ('minum')."
  },
  {
   "id": "f49",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e01\u0e35\u0e48\u0e42\u0e21\u0e07\u0e41\u0e25\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e01\u0e35\u0e48\u0e42\u0e21\u0e07\u0e41\u0e25\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "phon": "k\u00eci moong l\u00e1eo khr\u00e1p",
   "rom": "ki mong laeo khrap",
   "gloss": "Jam berapa sekarang?",
   "lit": "berapa jam sudah",
   "note": "Penyebutan pukul dalam bahasa Thailand memakai sistem yang berbeda-beda menurut bagian hari, dan itu di luar cakupan materi ini."
  },
  {
   "id": "f50",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e23\u0e2d\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48\u0e04\u0e23\u0e31\u0e1a",
   "phon": "raaw s\u00e0k-khr\u00fbu khr\u00e1p",
   "rom": "ro sakkhru khrap",
   "gloss": "Tunggu sebentar.",
   "lit": "tunggu sejenak",
   "note": "Lebih sopan daripada \u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27 saja, dan lazim dipakai di kantor atau toko."
  },
  {
   "id": "f51",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 3,
   "th": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27\u0e04\u0e23\u0e31\u0e1a",
   "phon": "d\u01d0ao khr\u00e1p",
   "rom": "diao khrap",
   "gloss": "Sebentar.",
   "lit": "",
   "note": "Kata percakapan yang sangat sering dipakai. \u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27\u0e01\u0e48\u0e2d\u0e19 berarti 'tunggu dulu'."
  },
  {
   "id": "f52",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "phon": "wan-n\u00edi ph\u01d2m m\u00e2i w\u00e2ang khr\u00e1p",
   "rom": "wanni phom mai wang khrap",
   "gloss": "Hari ini saya tidak ada waktu.",
   "lit": "hari ini saya tidak kosong",
   "note": "\u0e27\u0e48\u0e32\u0e07 berarti 'kosong, lowong'. \u0e44\u0e21\u0e48\u0e27\u0e48\u0e32\u0e07 adalah cara halus menolak undangan."
  },
  {
   "id": "f53",
   "kind": "flip",
   "cat": "waktu",
   "catLabel": "Waktu",
   "stage": 4,
   "th": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e08\u0e2d\u0e01\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e40\u0e08\u0e2d\u0e01\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "phon": "phr\u00fbng-n\u00edi jooe kan khr\u00e1p",
   "rom": "phrungni choe kan khrap",
   "gloss": "Sampai besok.",
   "lit": "besok berjumpa bersama",
   "note": ""
  },
  {
   "id": "f54",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 5,
   "th": "\u0e1c\u0e21\u0e2d\u0e22\u0e32\u0e01\u0e44\u0e1b\u0e44\u0e17\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1c\u0e21\u0e2d\u0e22\u0e32\u0e01\u0e44\u0e1b\u0e44\u0e17\u0e22\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ph\u01d2m y\u00e0ak pai thai khr\u00e1p",
   "rom": "phom yak pai thai khrap",
   "gloss": "Saya ingin pergi ke Thailand.",
   "lit": "",
   "note": "\u0e2d\u0e22\u0e32\u0e01 + kata kerja berarti 'ingin melakukan'. Untuk 'ingin punya' dipakai \u0e2d\u0e22\u0e32\u0e01\u0e44\u0e14\u0e49."
  },
  {
   "id": "f56",
   "kind": "flip",
   "cat": "restoran",
   "catLabel": "Warung & restoran",
   "stage": 6,
   "th": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e40\u0e1c\u0e47\u0e14\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e40\u0e1c\u0e47\u0e14\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49\u0e04\u0e23\u0e31\u0e1a",
   "phon": "ph\u01d2m kin ph\u00e8t m\u00e2i d\u00e2i khr\u00e1p",
   "rom": "phom kin phet mai dai khrap",
   "gloss": "Saya tidak bisa makan pedas.",
   "lit": "saya makan pedas tidak bisa",
   "note": "\u0e44\u0e14\u0e49 diletakkan SESUDAH kata kerja, dan penafiannya \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 berada di akhir. Susunannya kebalikan dari 'tidak bisa makan' dalam bahasa Indonesia."
  },
  {
   "id": "f57",
   "kind": "flip",
   "cat": "arah",
   "catLabel": "Arah",
   "stage": 6,
   "th": "\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e16\u0e48\u0e32\u0e22\u0e23\u0e39\u0e1b\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e16\u0e48\u0e32\u0e22\u0e23\u0e39\u0e1b\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
   "phon": "th\u00eei-n\u00eei th\u00e0ai-r\u00fbup d\u00e2i m\u01cei khr\u00e1p",
   "rom": "thi ni thairup dai mai khrap",
   "gloss": "Boleh memotret di sini?",
   "lit": "di sini ambil gambar bisa kah",
   "note": "Pertanyaan yang perlu diajukan di dalam kuil dan museum. \u0e44\u0e14\u0e49 di sini berarti 'boleh', bukan 'mampu'."
  },
  {
   "id": "f58",
   "kind": "flip",
   "cat": "sapaan",
   "catLabel": "Sapaan",
   "stage": 6,
   "th": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e38\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a\u0e17\u0e38\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e04\u0e23\u0e31\u0e1a",
   "phon": "kh\u00e0awp-khun s\u01cem-r\u00e0p th\u00fak-y\u00e0ang khr\u00e1p",
   "rom": "khopkhun samrap thukyang khrap",
   "gloss": "Terima kasih untuk semuanya.",
   "lit": "terima kasih untuk setiap hal",
   "note": "\u0e2a\u0e33\u0e2b\u0e23\u0e31\u0e1a ('untuk') memakai \u0e2b nam pada suku kata kedua, sehingga \u0e2b\u0e23\u0e31\u0e1a bernada rendah, bukan tinggi."
  },
  {
   "id": "f55",
   "kind": "flip",
   "cat": "kenalan",
   "catLabel": "Perkenalan",
   "stage": 5,
   "th": "\u0e04\u0e19\u0e44\u0e17\u0e22\u0e43\u0e08\u0e14\u0e35\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "audio": "\u0e04\u0e19\u0e44\u0e17\u0e22\u0e43\u0e08\u0e14\u0e35\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "phon": "khon thai jai-dii m\u00e2ak khr\u00e1p",
   "rom": "khon thai chaidi mak khrap",
   "gloss": "Orang Thai sangat baik hati.",
   "lit": "orang Thai hati-baik sangat",
   "note": "\u0e43\u0e08\u0e14\u0e35 ('baik hati') menempatkan \u0e43\u0e08 di depan, sedangkan \u0e14\u0e35\u0e43\u0e08 ('senang') urutannya terbalik. Urutan kata mengubah artinya."
  }
 ],
 "bacaan": [
  {
   "id": "b01",
   "kind": "flip",
   "cat": "percakapan",
   "catLabel": "Percakapan",
   "stage": 2,
   "title": "Berkenalan",
   "audio": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a \u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e48\u0e30 \u0e1c\u0e21\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e21\u0e0a\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a \u0e04\u0e38\u0e13\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e30\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a \u0e09\u0e31\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e32\u0e25\u0e35\u0e04\u0e48\u0e30 \u0e22\u0e34\u0e19\u0e14\u0e35\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "lines": [
    {
     "speaker": "A",
     "th": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
     "phon": "s\u00e0-w\u00e0t-dii khr\u00e1p",
     "gloss": "Selamat siang."
    },
    {
     "speaker": "B",
     "th": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e48\u0e30",
     "phon": "s\u00e0-w\u00e0t-dii kh\u00e2",
     "gloss": "Selamat siang."
    },
    {
     "speaker": "A",
     "th": "\u0e1c\u0e21\u0e0a\u0e37\u0e48\u0e2d\u0e2a\u0e21\u0e0a\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a",
     "phon": "ph\u01d2m ch\u00fbue s\u01d2m-chaai khr\u00e1p",
     "gloss": "Nama saya Somchai."
    },
    {
     "speaker": "A",
     "th": "\u0e04\u0e38\u0e13\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e30\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a",
     "phon": "khun ch\u00fbue \u00e0-rai khr\u00e1p",
     "gloss": "Siapa nama Anda?"
    },
    {
     "speaker": "B",
     "th": "\u0e09\u0e31\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e32\u0e25\u0e35\u0e04\u0e48\u0e30",
     "phon": "ch\u01cen ch\u00fbue maa-lii kh\u00e2",
     "gloss": "Nama saya Mali."
    },
    {
     "speaker": "A",
     "th": "\u0e22\u0e34\u0e19\u0e14\u0e35\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e39\u0e49\u0e08\u0e31\u0e01\u0e04\u0e23\u0e31\u0e1a",
     "phon": "yin-dii th\u00eei d\u00e2i r\u00fau-j\u00e0k khr\u00e1p",
     "gloss": "Senang berkenalan dengan Anda."
    }
   ],
   "note": "Perhatikan partikel sopannya: Somchai memakai \u0e04\u0e23\u0e31\u0e1a, Mali memakai \u0e04\u0e48\u0e30. Keduanya mengucapkan kalimat yang sama persis kecuali partikel itu."
  },
  {
   "id": "b02",
   "kind": "flip",
   "cat": "percakapan",
   "catLabel": "Percakapan",
   "stage": 3,
   "title": "Memesan makanan",
   "audio": "\u0e23\u0e31\u0e1a\u0e2d\u0e30\u0e44\u0e23\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a \u0e02\u0e2d\u0e02\u0e49\u0e32\u0e27\u0e1c\u0e31\u0e14\u0e44\u0e01\u0e48\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e08\u0e32\u0e19\u0e04\u0e23\u0e31\u0e1a \u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a \u0e44\u0e14\u0e49\u0e04\u0e23\u0e31\u0e1a \u0e14\u0e37\u0e48\u0e21\u0e2d\u0e30\u0e44\u0e23\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a \u0e19\u0e49\u0e33\u0e40\u0e1b\u0e25\u0e48\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a \u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
   "lines": [
    {
     "speaker": "A",
     "th": "\u0e23\u0e31\u0e1a\u0e2d\u0e30\u0e44\u0e23\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
     "phon": "r\u00e1p \u00e0-rai dii khr\u00e1p",
     "gloss": "Mau pesan apa?"
    },
    {
     "speaker": "B",
     "th": "\u0e02\u0e2d\u0e02\u0e49\u0e32\u0e27\u0e1c\u0e31\u0e14\u0e44\u0e01\u0e48\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e08\u0e32\u0e19\u0e04\u0e23\u0e31\u0e1a",
     "phon": "kh\u01ceaw kh\u00e2ao-ph\u00e0t k\u00e0i n\u00f9eng jaan khr\u00e1p",
     "gloss": "Minta satu piring nasi goreng ayam."
    },
    {
     "speaker": "B",
     "th": "\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
     "phon": "m\u00e2i ph\u00e8t n\u00e1 khr\u00e1p",
     "gloss": "Jangan pedas, ya."
    },
    {
     "speaker": "A",
     "th": "\u0e44\u0e14\u0e49\u0e04\u0e23\u0e31\u0e1a \u0e14\u0e37\u0e48\u0e21\u0e2d\u0e30\u0e44\u0e23\u0e14\u0e35\u0e04\u0e23\u0e31\u0e1a",
     "phon": "d\u00e2i khr\u00e1p d\u00f9uem \u00e0-rai dii khr\u00e1p",
     "gloss": "Baik. Mau minum apa?"
    },
    {
     "speaker": "B",
     "th": "\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e25\u0e48\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27\u0e04\u0e23\u0e31\u0e1a",
     "phon": "n\u00e1am-pl\u00e0o n\u00f9eng k\u00e2eo khr\u00e1p",
     "gloss": "Satu gelas air putih."
    },
    {
     "speaker": "A",
     "th": "\u0e2a\u0e31\u0e01\u0e04\u0e23\u0e39\u0e48\u0e19\u0e30\u0e04\u0e23\u0e31\u0e1a",
     "phon": "s\u00e0k-khr\u00fbu n\u00e1 khr\u00e1p",
     "gloss": "Mohon tunggu sebentar."
    }
   ],
   "note": "\u0e08\u0e32\u0e19 ('piring') dan \u0e41\u0e01\u0e49\u0e27 ('gelas') di sini berfungsi sebagai klasifikator. Polanya: benda + angka + klasifikator."
  },
  {
   "id": "b03",
   "kind": "flip",
   "cat": "percakapan",
   "catLabel": "Percakapan",
   "stage": 3,
   "title": "Mencari toilet",
   "audio": "\u0e02\u0e2d\u0e42\u0e17\u0e29\u0e04\u0e23\u0e31\u0e1a \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a \u0e2d\u0e22\u0e39\u0e48\u0e02\u0e49\u0e32\u0e07\u0e2b\u0e25\u0e31\u0e07\u0e23\u0e49\u0e32\u0e19\u0e04\u0e48\u0e30 \u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a \u0e44\u0e21\u0e48\u0e44\u0e01\u0e25\u0e04\u0e48\u0e30 \u0e40\u0e14\u0e34\u0e19\u0e2b\u0e49\u0e32\u0e19\u0e32\u0e17\u0e35 \u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
   "lines": [
    {
     "speaker": "A",
     "th": "\u0e02\u0e2d\u0e42\u0e17\u0e29\u0e04\u0e23\u0e31\u0e1a",
     "phon": "kh\u01ceaw-th\u00f4ot khr\u00e1p",
     "gloss": "Permisi."
    },
    {
     "speaker": "A",
     "th": "\u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
     "phon": "h\u00e2awng-n\u00e1am y\u00f9u n\u01cei khr\u00e1p",
     "gloss": "Di mana toiletnya?"
    },
    {
     "speaker": "B",
     "th": "\u0e2d\u0e22\u0e39\u0e48\u0e02\u0e49\u0e32\u0e07\u0e2b\u0e25\u0e31\u0e07\u0e23\u0e49\u0e32\u0e19\u0e04\u0e48\u0e30",
     "phon": "y\u00f9u kh\u00e2ang-l\u01ceng r\u00e1an kh\u00e2",
     "gloss": "Ada di belakang toko."
    },
    {
     "speaker": "A",
     "th": "\u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
     "phon": "klai m\u01cei khr\u00e1p",
     "gloss": "Jauh tidak?"
    },
    {
     "speaker": "B",
     "th": "\u0e44\u0e21\u0e48\u0e44\u0e01\u0e25\u0e04\u0e48\u0e30 \u0e40\u0e14\u0e34\u0e19\u0e2b\u0e49\u0e32\u0e19\u0e32\u0e17\u0e35",
     "phon": "m\u00e2i klai kh\u00e2 dooen h\u00e2a naa-thii",
     "gloss": "Tidak jauh. Lima menit jalan kaki."
    },
    {
     "speaker": "A",
     "th": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
     "phon": "kh\u00e0awp-khun m\u00e2ak khr\u00e1p",
     "gloss": "Terima kasih banyak."
    }
   ],
   "note": "\u0e02\u0e49\u0e32\u0e07\u0e2b\u0e25\u0e31\u0e07 ('di belakang') memakai \u0e02\u0e49\u0e32\u0e07 yang berarti 'sisi'. Pola yang sama: \u0e02\u0e49\u0e32\u0e07\u0e43\u0e19, \u0e02\u0e49\u0e32\u0e07\u0e19\u0e2d\u0e01, \u0e02\u0e49\u0e32\u0e07\u0e1a\u0e19, \u0e02\u0e49\u0e32\u0e07\u0e25\u0e48\u0e32\u0e07."
  },
  {
   "id": "b04",
   "kind": "flip",
   "cat": "percakapan",
   "catLabel": "Percakapan",
   "stage": 4,
   "title": "Menawar di pasar",
   "audio": "\u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49\u0e23\u0e32\u0e04\u0e32\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48\u0e04\u0e23\u0e31\u0e1a \u0e2a\u0e2d\u0e07\u0e23\u0e49\u0e2d\u0e22\u0e1a\u0e32\u0e17\u0e04\u0e48\u0e30 \u0e41\u0e1e\u0e07\u0e44\u0e1b\u0e04\u0e23\u0e31\u0e1a \u0e25\u0e14\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a \u0e25\u0e14\u0e43\u0e2b\u0e49\u0e2a\u0e34\u0e1a\u0e1a\u0e32\u0e17\u0e04\u0e48\u0e30 \u0e40\u0e2d\u0e32\u0e2a\u0e2d\u0e07\u0e2d\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
   "lines": [
    {
     "speaker": "A",
     "th": "\u0e2d\u0e31\u0e19\u0e19\u0e35\u0e49\u0e23\u0e32\u0e04\u0e32\u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48\u0e04\u0e23\u0e31\u0e1a",
     "phon": "an n\u00edi raa-khaa th\u00e2o-r\u00e0i khr\u00e1p",
     "gloss": "Yang ini berapa harganya?"
    },
    {
     "speaker": "B",
     "th": "\u0e2a\u0e2d\u0e07\u0e23\u0e49\u0e2d\u0e22\u0e1a\u0e32\u0e17\u0e04\u0e48\u0e30",
     "phon": "s\u01ceawng r\u00e1awi b\u00e0at kh\u00e2",
     "gloss": "Dua ratus baht."
    },
    {
     "speaker": "A",
     "th": "\u0e41\u0e1e\u0e07\u0e44\u0e1b\u0e04\u0e23\u0e31\u0e1a \u0e25\u0e14\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
     "phon": "phaeng pai khr\u00e1p l\u00f3t d\u00e2i m\u01cei khr\u00e1p",
     "gloss": "Terlalu mahal. Bisa kurang?"
    },
    {
     "speaker": "B",
     "th": "\u0e25\u0e14\u0e43\u0e2b\u0e49\u0e2a\u0e34\u0e1a\u0e1a\u0e32\u0e17\u0e04\u0e48\u0e30",
     "phon": "l\u00f3t h\u00e2i s\u00ecp b\u00e0at kh\u00e2",
     "gloss": "Saya kurangi sepuluh baht."
    },
    {
     "speaker": "A",
     "th": "\u0e40\u0e2d\u0e32\u0e2a\u0e2d\u0e07\u0e2d\u0e31\u0e19\u0e04\u0e23\u0e31\u0e1a",
     "phon": "ao s\u01ceawng an khr\u00e1p",
     "gloss": "Saya ambil dua."
    }
   ],
   "note": "\u0e41\u0e1e\u0e07\u0e44\u0e1b memakai pola 'kata sifat + \u0e44\u0e1b' yang berarti 'terlalu ...'. Potongan sepuluh baht dari dua ratus adalah hasil tawar-menawar yang wajar; menawar setengah harga justru dianggap kurang sopan."
  },
  {
   "id": "b05",
   "kind": "flip",
   "cat": "percakapan",
   "catLabel": "Percakapan",
   "stage": 4,
   "title": "Cuaca",
   "audio": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e23\u0e49\u0e2d\u0e19\u0e21\u0e32\u0e01 \u0e17\u0e35\u0e48\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22\u0e23\u0e49\u0e2d\u0e19\u0e44\u0e2b\u0e21 \u0e23\u0e49\u0e2d\u0e19\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19 \u0e41\u0e15\u0e48\u0e1d\u0e19\u0e15\u0e01\u0e1a\u0e48\u0e2d\u0e22 \u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e1d\u0e19\u0e15\u0e01\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19",
   "lines": [
    {
     "speaker": "A",
     "th": "\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e2d\u0e32\u0e01\u0e32\u0e28\u0e23\u0e49\u0e2d\u0e19\u0e21\u0e32\u0e01",
     "phon": "wan-n\u00edi aa-k\u00e0at r\u00e1awn m\u00e2ak",
     "gloss": "Hari ini cuacanya sangat panas."
    },
    {
     "speaker": "A",
     "th": "\u0e17\u0e35\u0e48\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22\u0e23\u0e49\u0e2d\u0e19\u0e44\u0e2b\u0e21",
     "phon": "th\u00eei in-doo-nii-sia r\u00e1awn m\u01cei",
     "gloss": "Apakah di Indonesia panas juga?"
    },
    {
     "speaker": "B",
     "th": "\u0e23\u0e49\u0e2d\u0e19\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19 \u0e41\u0e15\u0e48\u0e1d\u0e19\u0e15\u0e01\u0e1a\u0e48\u0e2d\u0e22",
     "phon": "r\u00e1awn m\u01d4ean-kan t\u00e0e f\u01d2n t\u00f2k b\u00e0awi",
     "gloss": "Sama-sama panas, tetapi sering hujan."
    },
    {
     "speaker": "A",
     "th": "\u0e17\u0e35\u0e48\u0e19\u0e35\u0e48\u0e1d\u0e19\u0e15\u0e01\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19",
     "phon": "th\u00eei-n\u00eei f\u01d2n t\u00f2k taawn-yen",
     "gloss": "Di sini hujan turun pada sore hari."
    }
   ],
   "note": "\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19 ('sama saja, juga') adalah salah satu kata percakapan yang paling sering dipakai untuk menanggapi."
  },
  {
   "id": "b06",
   "kind": "flip",
   "cat": "percakapan",
   "catLabel": "Percakapan",
   "stage": 5,
   "title": "Naik taksi",
   "audio": "\u0e44\u0e1b\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21\u0e19\u0e35\u0e49\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a \u0e44\u0e14\u0e49\u0e04\u0e23\u0e31\u0e1a \u0e02\u0e36\u0e49\u0e19\u0e23\u0e16\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22\u0e04\u0e23\u0e31\u0e1a \u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a \u0e44\u0e21\u0e48\u0e44\u0e01\u0e25\u0e04\u0e23\u0e31\u0e1a \u0e2a\u0e34\u0e1a\u0e19\u0e32\u0e17\u0e35 \u0e08\u0e2d\u0e14\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49\u0e04\u0e23\u0e31\u0e1a",
   "lines": [
    {
     "speaker": "A",
     "th": "\u0e44\u0e1b\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21\u0e19\u0e35\u0e49\u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
     "phon": "pai roong-raem n\u00edi d\u00e2i m\u01cei khr\u00e1p",
     "gloss": "Bisa mengantar saya ke hotel ini?"
    },
    {
     "speaker": "B",
     "th": "\u0e44\u0e14\u0e49\u0e04\u0e23\u0e31\u0e1a \u0e02\u0e36\u0e49\u0e19\u0e23\u0e16\u0e44\u0e14\u0e49\u0e40\u0e25\u0e22\u0e04\u0e23\u0e31\u0e1a",
     "phon": "d\u00e2i khr\u00e1p kh\u00fben r\u00f3t d\u00e2i looei khr\u00e1p",
     "gloss": "Bisa. Silakan langsung naik."
    },
    {
     "speaker": "A",
     "th": "\u0e44\u0e01\u0e25\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
     "phon": "klai m\u01cei khr\u00e1p",
     "gloss": "Jauh tidak?"
    },
    {
     "speaker": "B",
     "th": "\u0e44\u0e21\u0e48\u0e44\u0e01\u0e25\u0e04\u0e23\u0e31\u0e1a \u0e2a\u0e34\u0e1a\u0e19\u0e32\u0e17\u0e35",
     "phon": "m\u00e2i klai khr\u00e1p s\u00ecp naa-thii",
     "gloss": "Tidak jauh. Sepuluh menit."
    },
    {
     "speaker": "A",
     "th": "\u0e08\u0e2d\u0e14\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49\u0e04\u0e23\u0e31\u0e1a",
     "phon": "j\u00e0awt trong-n\u00edi khr\u00e1p",
     "gloss": "Berhenti di sini saja."
    }
   ],
   "note": "\u0e40\u0e25\u0e22 sesudah \u0e44\u0e14\u0e49 berarti 'langsung saja'. Kata ini sangat sering dipakai dan artinya berubah-ubah menurut letaknya."
  },
  {
   "id": "b07",
   "kind": "flip",
   "cat": "percakapan",
   "catLabel": "Percakapan",
   "stage": 5,
   "title": "Di apotek",
   "audio": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e1a\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a \u0e1b\u0e27\u0e14\u0e17\u0e49\u0e2d\u0e07\u0e21\u0e32\u0e01 \u0e01\u0e34\u0e19\u0e22\u0e32\u0e19\u0e35\u0e49\u0e27\u0e31\u0e19\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e04\u0e23\u0e31\u0e49\u0e07 \u0e16\u0e49\u0e32\u0e44\u0e21\u0e48\u0e14\u0e35\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b\u0e2b\u0e32\u0e2b\u0e21\u0e2d \u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e23\u0e31\u0e1a",
   "lines": [
    {
     "speaker": "A",
     "th": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e2a\u0e1a\u0e32\u0e22\u0e04\u0e23\u0e31\u0e1a \u0e1b\u0e27\u0e14\u0e17\u0e49\u0e2d\u0e07\u0e21\u0e32\u0e01",
     "phon": "ph\u01d2m m\u00e2i s\u00e0-baai khr\u00e1p p\u00f9at th\u00e1awng m\u00e2ak",
     "gloss": "Saya tidak sehat. Perut saya sangat sakit."
    },
    {
     "speaker": "B",
     "th": "\u0e01\u0e34\u0e19\u0e22\u0e32\u0e19\u0e35\u0e49\u0e27\u0e31\u0e19\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e04\u0e23\u0e31\u0e49\u0e07",
     "phon": "kin yaa n\u00edi wan-l\u00e1 s\u01ceam kr\u00e1ng",
     "gloss": "Minum obat ini tiga kali sehari."
    },
    {
     "speaker": "B",
     "th": "\u0e16\u0e49\u0e32\u0e44\u0e21\u0e48\u0e14\u0e35\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b\u0e2b\u0e32\u0e2b\u0e21\u0e2d",
     "phon": "th\u00e2a m\u00e2i dii kh\u00fben pai h\u01cea m\u01ceaw",
     "gloss": "Kalau tidak membaik, pergilah ke dokter."
    },
    {
     "speaker": "A",
     "th": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e23\u0e31\u0e1a",
     "phon": "kh\u00e0awp-khun khr\u00e1p",
     "gloss": "Terima kasih."
    }
   ],
   "note": "\u0e27\u0e31\u0e19\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e04\u0e23\u0e31\u0e49\u0e07: \u0e25\u0e30 berarti 'per', jadi harfiahnya 'per hari tiga kali'. \u0e14\u0e35\u0e02\u0e36\u0e49\u0e19 berarti 'menjadi lebih baik' \u2014 \u0e02\u0e36\u0e49\u0e19 ('naik') dipakai untuk menandai perubahan ke arah lebih."
  },
  {
   "id": "b08",
   "kind": "flip",
   "cat": "percakapan",
   "catLabel": "Percakapan",
   "stage": 6,
   "title": "Mengobrol tentang belajar",
   "audio": "\u0e04\u0e38\u0e13\u0e21\u0e32\u0e08\u0e32\u0e01\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a \u0e09\u0e31\u0e19\u0e21\u0e32\u0e08\u0e32\u0e01\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22\u0e04\u0e48\u0e30 \u0e04\u0e38\u0e13\u0e1e\u0e39\u0e14\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e40\u0e01\u0e48\u0e07\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e40\u0e01\u0e48\u0e07\u0e04\u0e48\u0e30 \u0e40\u0e23\u0e35\u0e22\u0e19\u0e2a\u0e2d\u0e07\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e41\u0e25\u0e49\u0e27 \u0e2a\u0e19\u0e38\u0e01\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a \u0e2a\u0e19\u0e38\u0e01\u0e21\u0e32\u0e01\u0e04\u0e48\u0e30 \u0e41\u0e15\u0e48\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e22\u0e32\u0e01\u0e04\u0e48\u0e30",
   "lines": [
    {
     "speaker": "A",
     "th": "\u0e04\u0e38\u0e13\u0e21\u0e32\u0e08\u0e32\u0e01\u0e44\u0e2b\u0e19\u0e04\u0e23\u0e31\u0e1a",
     "phon": "khun maa j\u00e0ak n\u01cei khr\u00e1p",
     "gloss": "Anda dari mana?"
    },
    {
     "speaker": "B",
     "th": "\u0e09\u0e31\u0e19\u0e21\u0e32\u0e08\u0e32\u0e01\u0e2d\u0e34\u0e19\u0e42\u0e14\u0e19\u0e35\u0e40\u0e0b\u0e35\u0e22\u0e04\u0e48\u0e30",
     "phon": "ch\u01cen maa j\u00e0ak in-doo-nii-sia kh\u00e2",
     "gloss": "Saya dari Indonesia."
    },
    {
     "speaker": "A",
     "th": "\u0e04\u0e38\u0e13\u0e1e\u0e39\u0e14\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22\u0e40\u0e01\u0e48\u0e07\u0e21\u0e32\u0e01\u0e04\u0e23\u0e31\u0e1a",
     "phon": "khun ph\u00fbut phaa-s\u01cea thai k\u00e8ng m\u00e2ak khr\u00e1p",
     "gloss": "Bahasa Thai Anda bagus sekali."
    },
    {
     "speaker": "B",
     "th": "\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e40\u0e01\u0e48\u0e07\u0e04\u0e48\u0e30 \u0e40\u0e23\u0e35\u0e22\u0e19\u0e2a\u0e2d\u0e07\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e41\u0e25\u0e49\u0e27",
     "phon": "yang m\u00e2i k\u00e8ng kh\u00e2 rian s\u01ceawng duean l\u00e1eo",
     "gloss": "Belum bagus. Saya sudah belajar dua bulan."
    },
    {
     "speaker": "A",
     "th": "\u0e2a\u0e19\u0e38\u0e01\u0e44\u0e2b\u0e21\u0e04\u0e23\u0e31\u0e1a",
     "phon": "s\u00e0-n\u00f9k m\u01cei khr\u00e1p",
     "gloss": "Menyenangkan?"
    },
    {
     "speaker": "B",
     "th": "\u0e2a\u0e19\u0e38\u0e01\u0e21\u0e32\u0e01\u0e04\u0e48\u0e30 \u0e41\u0e15\u0e48\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e22\u0e32\u0e01\u0e04\u0e48\u0e30",
     "phon": "s\u00e0-n\u00f9k m\u00e2ak kh\u00e2 t\u00e0e s\u01d0ang y\u00e2ak kh\u00e2",
     "gloss": "Sangat menyenangkan, tetapi nadanya sulit."
    }
   ],
   "note": "Memuji kemampuan berbahasa adalah basa-basi yang hampir pasti Anda dengar. Jawaban yang wajar adalah merendah (\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e40\u0e01\u0e48\u0e07), bukan menerima pujian itu bulat-bulat."
  },
  {
   "id": "b01-q1",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 2,
   "prompt": "Siapa nama perempuan dalam percakapan ini?",
   "promptTh": "",
   "promptLabel": "Berkenalan",
   "optionsLang": "id",
   "options": [
    "Mali",
    "Somchai",
    "Keduanya tidak menyebut nama",
    "Namanya tidak disebut dengan jelas"
   ],
   "answer": 0,
   "explain": "\u0e09\u0e31\u0e19\u0e0a\u0e37\u0e48\u0e2d\u0e21\u0e32\u0e25\u0e35\u0e04\u0e48\u0e30 \u2014 ia memakai \u0e09\u0e31\u0e19 dan \u0e04\u0e48\u0e30, dua penanda penutur perempuan."
  },
  {
   "id": "b01-q2",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 2,
   "prompt": "Dari mana Anda tahu penutur pertama seorang lelaki?",
   "promptTh": "",
   "promptLabel": "Berkenalan",
   "optionsLang": "id",
   "options": [
    "Ia memakai \u0e1c\u0e21 dan \u0e04\u0e23\u0e31\u0e1a",
    "Ia menyapa lebih dahulu",
    "Namanya Somchai",
    "Ia memakai kalimat yang lebih panjang"
   ],
   "answer": 0,
   "explain": "Kata ganti dan partikel sopan dipilih menurut jenis kelamin pembicara, jadi keduanya menandai hal yang sama."
  },
  {
   "id": "b02-q1",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 3,
   "prompt": "Apa yang dipesan tamu itu?",
   "promptTh": "",
   "promptLabel": "Memesan makanan",
   "optionsLang": "id",
   "options": [
    "Nasi goreng ayam dan air putih",
    "Nasi goreng babi dan teh",
    "Mi dan kopi",
    "Nasi goreng telur dan air putih"
   ],
   "answer": 0,
   "explain": "\u0e02\u0e49\u0e32\u0e27\u0e1c\u0e31\u0e14\u0e44\u0e01\u0e48 = nasi goreng ayam; \u0e19\u0e49\u0e33\u0e40\u0e1b\u0e25\u0e48\u0e32 = air putih (air minum biasa)."
  },
  {
   "id": "b02-q2",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 3,
   "prompt": "Apa guna kata \u0e08\u0e32\u0e19 dan \u0e41\u0e01\u0e49\u0e27 pada percakapan ini?",
   "promptTh": "",
   "promptLabel": "Memesan makanan",
   "optionsLang": "id",
   "options": [
    "Klasifikator untuk menghitung",
    "Nama makanan",
    "Kata sifat",
    "Partikel sopan"
   ],
   "answer": 0,
   "explain": "\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e08\u0e32\u0e19 ('satu piring'), \u0e2b\u0e19\u0e36\u0e48\u0e07\u0e41\u0e01\u0e49\u0e27 ('satu gelas'). Klasifikator selalu berada sesudah angkanya."
  },
  {
   "id": "b03-q1",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 3,
   "prompt": "Di mana toiletnya?",
   "promptTh": "",
   "promptLabel": "Mencari toilet",
   "optionsLang": "id",
   "options": [
    "Di belakang toko",
    "Di depan toko",
    "Di dalam hotel",
    "Di sebelah kiri"
   ],
   "answer": 0,
   "explain": "\u0e2d\u0e22\u0e39\u0e48\u0e02\u0e49\u0e32\u0e07\u0e2b\u0e25\u0e31\u0e07\u0e23\u0e49\u0e32\u0e19 \u2014 \u0e02\u0e49\u0e32\u0e07\u0e2b\u0e25\u0e31\u0e07 berarti 'di belakang', \u0e23\u0e49\u0e32\u0e19 berarti 'toko'."
  },
  {
   "id": "b03-q2",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 3,
   "prompt": "Berapa lama jalan kakinya?",
   "promptTh": "",
   "promptLabel": "Mencari toilet",
   "optionsLang": "id",
   "options": [
    "Lima menit",
    "Lima belas menit",
    "Lima jam",
    "Tidak disebutkan"
   ],
   "answer": 0,
   "explain": "\u0e40\u0e14\u0e34\u0e19\u0e2b\u0e49\u0e32\u0e19\u0e32\u0e17\u0e35 \u2014 \u0e2b\u0e49\u0e32 berarti 'lima', \u0e19\u0e32\u0e17\u0e35 berarti 'menit'."
  },
  {
   "id": "b04-q1",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 4,
   "prompt": "Berapa harga akhirnya untuk satu barang?",
   "promptTh": "",
   "promptLabel": "Menawar di pasar",
   "optionsLang": "id",
   "options": [
    "190 baht",
    "200 baht",
    "180 baht",
    "210 baht"
   ],
   "answer": 0,
   "explain": "\u0e2a\u0e2d\u0e07\u0e23\u0e49\u0e2d\u0e22 ('dua ratus') dikurangi \u0e2a\u0e34\u0e1a ('sepuluh') menjadi 190 baht."
  },
  {
   "id": "b04-q2",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 4,
   "prompt": "Apa arti \u0e41\u0e1e\u0e07\u0e44\u0e1b?",
   "promptTh": "\u0e41\u0e1e\u0e07\u0e44\u0e1b",
   "promptLabel": "Menawar di pasar",
   "optionsLang": "id",
   "options": [
    "Terlalu mahal",
    "Mahal sekali bagi saya",
    "Harga naik",
    "Mahal tetapi dibeli"
   ],
   "answer": 0,
   "explain": "Pola 'kata sifat + \u0e44\u0e1b' berarti melebihi batas: \u0e40\u0e1c\u0e47\u0e14\u0e44\u0e1b ('terlalu pedas'), \u0e40\u0e04\u0e47\u0e21\u0e44\u0e1b ('terlalu asin')."
  },
  {
   "id": "b05-q1",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 4,
   "prompt": "Apa kata B tentang cuaca di Indonesia?",
   "promptTh": "",
   "promptLabel": "Cuaca",
   "optionsLang": "id",
   "options": [
    "Sama panasnya, tetapi sering hujan",
    "Lebih dingin",
    "Tidak pernah hujan",
    "Lebih panas daripada Thailand"
   ],
   "answer": 0,
   "explain": "\u0e23\u0e49\u0e2d\u0e19\u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19 \u0e41\u0e15\u0e48\u0e1d\u0e19\u0e15\u0e01\u0e1a\u0e48\u0e2d\u0e22 \u2014 \u0e40\u0e2b\u0e21\u0e37\u0e2d\u0e19\u0e01\u0e31\u0e19 berarti 'sama saja', \u0e1a\u0e48\u0e2d\u0e22 berarti 'sering'."
  },
  {
   "id": "b05-q2",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 4,
   "prompt": "Kapan hujan biasanya turun di tempat A?",
   "promptTh": "",
   "promptLabel": "Cuaca",
   "optionsLang": "id",
   "options": [
    "Sore hari",
    "Pagi hari",
    "Tengah malam",
    "Sepanjang hari"
   ],
   "answer": 0,
   "explain": "\u0e15\u0e2d\u0e19\u0e40\u0e22\u0e47\u0e19 berarti 'waktu sore/petang'."
  },
  {
   "id": "b06-q1",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 5,
   "prompt": "Berapa lama perjalanannya?",
   "promptTh": "",
   "promptLabel": "Naik taksi",
   "optionsLang": "id",
   "options": [
    "Sepuluh menit",
    "Lima menit",
    "Sepuluh jam",
    "Tidak disebutkan"
   ],
   "answer": 0,
   "explain": "\u0e2a\u0e34\u0e1a\u0e19\u0e32\u0e17\u0e35 \u2014 \u0e2a\u0e34\u0e1a berarti 'sepuluh', \u0e19\u0e32\u0e17\u0e35 berarti 'menit'."
  },
  {
   "id": "b06-q2",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 5,
   "prompt": "Apa yang diminta penumpang pada baris terakhir?",
   "promptTh": "",
   "promptLabel": "Naik taksi",
   "optionsLang": "id",
   "options": [
    "Berhenti di tempat itu",
    "Jalan lebih cepat",
    "Belok kiri",
    "Kembali ke hotel"
   ],
   "answer": 0,
   "explain": "\u0e08\u0e2d\u0e14 berarti 'berhenti, parkir'; \u0e15\u0e23\u0e07\u0e19\u0e35\u0e49 berarti 'tepat di sini'."
  },
  {
   "id": "b07-q1",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 5,
   "prompt": "Berapa kali sehari obatnya diminum?",
   "promptTh": "",
   "promptLabel": "Di apotek",
   "optionsLang": "id",
   "options": [
    "Tiga kali",
    "Sekali",
    "Dua kali",
    "Setiap jam"
   ],
   "answer": 0,
   "explain": "\u0e27\u0e31\u0e19\u0e25\u0e30\u0e2a\u0e32\u0e21\u0e04\u0e23\u0e31\u0e49\u0e07 \u2014 \u0e25\u0e30 berarti 'per', \u0e04\u0e23\u0e31\u0e49\u0e07 berarti 'kali'."
  },
  {
   "id": "b07-q2",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 5,
   "prompt": "Apa yang harus dilakukan kalau tidak membaik?",
   "promptTh": "",
   "promptLabel": "Di apotek",
   "optionsLang": "id",
   "options": [
    "Pergi ke dokter",
    "Minum obat dua kali lipat",
    "Istirahat saja",
    "Kembali ke apotek"
   ],
   "answer": 0,
   "explain": "\u0e16\u0e49\u0e32\u0e44\u0e21\u0e48\u0e14\u0e35\u0e02\u0e36\u0e49\u0e19\u0e44\u0e1b\u0e2b\u0e32\u0e2b\u0e21\u0e2d \u2014 \u0e16\u0e49\u0e32 berarti 'kalau', \u0e44\u0e1b\u0e2b\u0e32\u0e2b\u0e21\u0e2d berarti 'pergi menemui dokter'."
  },
  {
   "id": "b08-q1",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 6,
   "prompt": "Sudah berapa lama B belajar?",
   "promptTh": "",
   "promptLabel": "Mengobrol tentang belajar",
   "optionsLang": "id",
   "options": [
    "Dua bulan",
    "Dua tahun",
    "Dua minggu",
    "Belum mulai"
   ],
   "answer": 0,
   "explain": "\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2a\u0e2d\u0e07\u0e40\u0e14\u0e37\u0e2d\u0e19\u0e41\u0e25\u0e49\u0e27 \u2014 \u0e40\u0e14\u0e37\u0e2d\u0e19 berarti 'bulan', \u0e41\u0e25\u0e49\u0e27 menandai bahwa itu sudah berlangsung."
  },
  {
   "id": "b08-q2",
   "kind": "mcq",
   "cat": "soal-bacaan",
   "catLabel": "Soal pemahaman",
   "stage": 6,
   "prompt": "Apa yang dirasa sulit oleh B?",
   "promptTh": "",
   "promptLabel": "Mengobrol tentang belajar",
   "optionsLang": "id",
   "options": [
    "Nadanya",
    "Tulisannya",
    "Kosakatanya",
    "Tata bahasanya"
   ],
   "answer": 0,
   "explain": "\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e22\u0e32\u0e01 \u2014 \u0e40\u0e2a\u0e35\u0e22\u0e07 di sini berarti 'nada, bunyi'."
  }
 ],
 "topik": [
  {
   "id": "g01",
   "title": "Susunan kalimat: pelaku - kata kerja - sasaran",
   "stage": 1,
   "explanation": "Susunan dasar kalimat bahasa Thailand sama dengan bahasa Indonesia: pelaku, kata kerja, lalu sasaran. \u0e1c\u0e21\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27 tersusun dari 'saya' + 'makan' + 'nasi'. Yang berbeda dari bahasa-bahasa Eropa: kata kerjanya TIDAK pernah berubah bentuk. Tidak ada perbedaan antara 'makan', 'memakan', 'makanlah', atau bentuk masa lalu. Satu bentuk kata kerja dipakai untuk segala keadaan, dan selebihnya dijelaskan oleh keterangan waktu atau kata penanda. Bahasa Thailand juga tidak memakai kata sandang (seperti 'the' atau 'a'), tidak menandai jumlah pada kata benda, dan sering menghilangkan pelaku bila sudah jelas dari keadaan.",
   "caveats": [
    "Pelaku sangat sering dihilangkan. '\u0e44\u0e1b\u0e44\u0e2b\u0e19' tanpa pelaku berarti '(Kamu) mau ke mana?' dan itu kalimat yang wajar, bukan kalimat tidak lengkap.",
    "Keterangan waktu lazim diletakkan di awal kalimat, meski boleh juga di akhir: \u0e27\u0e31\u0e19\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e44\u0e1b dan \u0e1c\u0e21\u0e44\u0e21\u0e48\u0e44\u0e1b\u0e27\u0e31\u0e19\u0e19\u0e35\u0e49 keduanya benar.",
    "Dalam tulisan Thai tidak ada spasi antarkata. Spasi hanya dipakai untuk memisahkan kalimat atau bagian kalimat yang panjang. Memecah kata adalah keterampilan yang terbangun bersama kosakata."
   ],
   "examples": [
    {
     "th": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e02\u0e49\u0e32\u0e27",
     "phon": "ph\u01d2m kin kh\u00e2ao",
     "gloss": "Saya makan (nasi)."
    },
    {
     "th": "\u0e40\u0e02\u0e32\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
     "phon": "kh\u01ceo pai t\u00e0-l\u00e0at",
     "gloss": "Dia pergi ke pasar."
    },
    {
     "th": "\u0e40\u0e14\u0e47\u0e01\u0e2d\u0e48\u0e32\u0e19\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d",
     "phon": "d\u00e8k \u00e0an n\u01ceng-s\u01d4ue",
     "gloss": "Anak itu membaca buku."
    }
   ]
  },
  {
   "id": "g02",
   "title": "Kata sifat sesudah kata benda, tanpa kata 'adalah'",
   "stage": 1,
   "explanation": "Kata sifat bahasa Thailand diletakkan SESUDAH kata benda yang diterangkan, sama seperti bahasa Indonesia: \u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48 = 'rumah besar'. Yang berbeda: untuk mengatakan 'rumah itu besar', bahasa Thailand tidak memerlukan kata penghubung apa pun. \u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48 bisa berarti 'rumah besar' maupun 'rumahnya besar', bergantung keadaan. Kata sifat dalam bahasa Thailand berperilaku seperti kata kerja: ia bisa berdiri sendiri sebagai predikat, bisa dinegasikan dengan \u0e44\u0e21\u0e48, dan bisa diperkuat dengan \u0e21\u0e32\u0e01. Karena itu JANGAN memakai \u0e40\u0e1b\u0e47\u0e19 di depan kata sifat.",
   "caveats": [
    "\u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48 memang bermakna ganda antara 'rumah besar' dan 'rumahnya besar'. Dalam percakapan nyata keadaan yang menentukan, dan bila perlu ditambahkan kata tunjuk: \u0e1a\u0e49\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e19\u0e35\u0e49\u0e43\u0e2b\u0e0d\u0e48 ('rumah ini besar').",
    "Penguat diletakkan sesudah kata sifat: \u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01 ('sangat enak'), bukan \u0e21\u0e32\u0e01\u0e2d\u0e23\u0e48\u0e2d\u0e22. Ini berlawanan dengan urutan bahasa Indonesia.",
    "Beberapa kata sifat yang berasal dari kata serapan memakai pola yang berbeda, tetapi untuk tingkat ini aturan di atas berlaku luas."
   ],
   "examples": [
    {
     "th": "\u0e1a\u0e49\u0e32\u0e19\u0e43\u0e2b\u0e0d\u0e48",
     "phon": "b\u00e2an y\u00e0i",
     "gloss": "rumah besar / Rumahnya besar."
    },
    {
     "th": "\u0e2d\u0e32\u0e2b\u0e32\u0e23\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e21\u0e32\u0e01",
     "phon": "aa-h\u01cean \u00e0-r\u00e0awi m\u00e2ak",
     "gloss": "Makanannya sangat enak."
    },
    {
     "th": "\u0e23\u0e49\u0e32\u0e19\u0e19\u0e35\u0e49\u0e44\u0e21\u0e48\u0e41\u0e1e\u0e07",
     "phon": "r\u00e1an n\u00edi m\u00e2i phaeng",
     "gloss": "Toko ini tidak mahal."
    }
   ]
  },
  {
   "id": "g03",
   "title": "Tiga kata untuk 'adalah': \u0e40\u0e1b\u0e47\u0e19, \u0e04\u0e37\u0e2d, \u0e2d\u0e22\u0e39\u0e48",
   "stage": 2,
   "explanation": "Bahasa Indonesia memakai satu kata 'adalah' untuk banyak keadaan; bahasa Thailand membaginya. \u0e40\u0e1b\u0e47\u0e19 dipakai untuk menyatakan golongan, pekerjaan, atau keadaan ('A termasuk B'): \u0e40\u0e02\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e21\u0e2d. \u0e04\u0e37\u0e2d dipakai untuk menyamakan dua hal atau menjelaskan ('A yaitu B'), lazim sesudah kata tunjuk: \u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e1a\u0e49\u0e32\u0e19\u0e1c\u0e21. \u0e2d\u0e22\u0e39\u0e48 dipakai untuk keberadaan di suatu tempat: \u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19. Dan untuk kata sifat, tidak dipakai salah satu pun dari ketiganya. Sebagai pegangan awal: pekerjaan dan golongan pakai \u0e40\u0e1b\u0e47\u0e19, penjelasan sesudah 'ini/itu' pakai \u0e04\u0e37\u0e2d, tempat pakai \u0e2d\u0e22\u0e39\u0e48, kata sifat tanpa kata penghubung.",
   "caveats": [
    "Batas antara \u0e40\u0e1b\u0e47\u0e19 dan \u0e04\u0e37\u0e2d tidak selalu tegas, dan penutur asli kadang memakai keduanya pada kalimat yang sama. Pembagian di atas adalah pegangan praktis, bukan hukum.",
    "\u0e40\u0e1b\u0e47\u0e19 juga punya arti lain sama sekali: 'bisa karena sudah dipelajari' (\u0e1c\u0e21\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e47\u0e19, 'saya bisa berenang') dan 'menderita penyakit' (\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e02\u0e49, 'demam').",
    "\u0e2d\u0e22\u0e39\u0e48 juga dipakai sesudah kata kerja untuk menandai perbuatan yang sedang berlangsung: \u0e01\u0e34\u0e19\u0e2d\u0e22\u0e39\u0e48 ('sedang makan')."
   ],
   "examples": [
    {
     "th": "\u0e40\u0e02\u0e32\u0e40\u0e1b\u0e47\u0e19\u0e2b\u0e21\u0e2d",
     "phon": "kh\u01ceo pen m\u01ceaw",
     "gloss": "Dia seorang dokter."
    },
    {
     "th": "\u0e19\u0e35\u0e48\u0e04\u0e37\u0e2d\u0e1a\u0e49\u0e32\u0e19\u0e1c\u0e21",
     "phon": "n\u00eei khuue b\u00e2an ph\u01d2m",
     "gloss": "Ini rumah saya."
    },
    {
     "th": "\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e1a\u0e49\u0e32\u0e19",
     "phon": "ph\u01d2m y\u00f9u th\u00eei b\u00e2an",
     "gloss": "Saya ada di rumah."
    }
   ]
  },
  {
   "id": "g04",
   "title": "Penafian: \u0e44\u0e21\u0e48, \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48, \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48",
   "stage": 2,
   "explanation": "\u0e44\u0e21\u0e48 diletakkan SEBELUM kata kerja atau kata sifat yang ditafikan: \u0e1c\u0e21\u0e44\u0e21\u0e48\u0e44\u0e1b ('saya tidak pergi'), \u0e44\u0e21\u0e48\u0e41\u0e1e\u0e07 ('tidak mahal'). Untuk menafikan kata benda dipakai \u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48 ('bukan'): \u0e19\u0e35\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e1a\u0e49\u0e32\u0e19\u0e1c\u0e21 ('ini bukan rumah saya'). Perbedaan ini sama dengan 'tidak' dan 'bukan' dalam bahasa Indonesia, sehingga mudah bagi penutur bahasa Indonesia. Untuk 'belum' dipakai \u0e22\u0e31\u0e07 + \u0e44\u0e21\u0e48: \u0e1c\u0e21\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19 ('saya belum makan'). Satu hal yang perlu diperhatikan: menjawab 'tidak' pada pertanyaan kata kerja dilakukan dengan mengulang kata kerjanya yang ditafikan, bukan dengan satu kata 'tidak' saja.",
   "caveats": [
    "\u0e44\u0e21\u0e48 dan \u0e21\u0e35 adalah dua kata yang berdiri sendiri, tetapi gabungan \u0e44\u0e21\u0e48\u0e21\u0e35 ('tidak ada') diucapkan menyatu sebagai m\u00e2i-mii. Banyak gabungan dengan \u0e44\u0e21\u0e48 yang sudah menjadi satu kata lazim: \u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e23 ('tidak apa-apa'), \u0e44\u0e21\u0e48\u0e04\u0e48\u0e2d\u0e22 ('tidak begitu').",
    "Dalam percakapan cepat, \u0e44\u0e21\u0e48 sering diucapkan pendek dan hampir kehilangan nada turunnya. Dalam tulisan nadanya tetap.",
    "Penafian yang lebih halus dipakai untuk menolak tawaran: \u0e44\u0e21\u0e48\u0e40\u0e1b\u0e47\u0e19\u0e44\u0e23\u0e04\u0e23\u0e31\u0e1a terasa lebih sopan daripada \u0e44\u0e21\u0e48\u0e04\u0e23\u0e31\u0e1a saja."
   ],
   "examples": [
    {
     "th": "\u0e1c\u0e21\u0e44\u0e21\u0e48\u0e44\u0e1b",
     "phon": "ph\u01d2m m\u00e2i pai",
     "gloss": "Saya tidak pergi."
    },
    {
     "th": "\u0e19\u0e35\u0e48\u0e44\u0e21\u0e48\u0e43\u0e0a\u0e48\u0e1a\u0e49\u0e32\u0e19\u0e1c\u0e21",
     "phon": "n\u00eei m\u00e2i-ch\u00e2i b\u00e2an ph\u01d2m",
     "gloss": "Ini bukan rumah saya."
    },
    {
     "th": "\u0e1c\u0e21\u0e22\u0e31\u0e07\u0e44\u0e21\u0e48\u0e01\u0e34\u0e19",
     "phon": "ph\u01d2m yang m\u00e2i kin",
     "gloss": "Saya belum makan."
    }
   ]
  },
  {
   "id": "g05",
   "title": "Membuat pertanyaan",
   "stage": 3,
   "explanation": "Ada tiga cara utama. Pertama, partikel \u0e44\u0e2b\u0e21 di akhir kalimat untuk pertanyaan ya/tidak: \u0e04\u0e38\u0e13\u0e44\u0e1b\u0e44\u0e2b\u0e21 ('Anda pergi?'). Kedua, kata tanya (\u0e2d\u0e30\u0e44\u0e23, \u0e43\u0e04\u0e23, \u0e44\u0e2b\u0e19, \u0e40\u0e21\u0e37\u0e48\u0e2d\u0e44\u0e2b\u0e23\u0e48, \u0e40\u0e17\u0e48\u0e32\u0e44\u0e2b\u0e23\u0e48) yang diletakkan DI TEMPAT kata yang ditanyakan, tanpa mengubah susunan kalimat: \u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e2d\u0e30\u0e44\u0e23, harfiahnya 'Anda makan apa'. Ketiga, \u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21 di akhir untuk meminta pembenaran: \u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21 ('enak, kan?'). Yang perlu disadari penutur bahasa Indonesia: tidak ada 'apakah' di awal kalimat, dan nada bicara TIDAK dinaikkan di akhir pertanyaan. Menaikkan nada akhir justru dapat mengubah kata terakhir menjadi kata lain.",
   "caveats": [
    "\u0e44\u0e2b\u0e21 menurut aturan ejaan bernada naik, tetapi dalam percakapan hampir selalu bernada tinggi dan ditulis \u0e21\u0e31\u0e49\u0e22 pada tulisan tidak resmi.",
    "\u0e2b\u0e23\u0e37\u0e2d (r\u01d4ue) di akhir kalimat juga membentuk pertanyaan, dengan nuansa 'oh begitu ya?'. Dalam percakapan sering diucapkan singkat menjadi \u0e40\u0e2b\u0e23\u0e2d.",
    "Untuk pertanyaan yang sudah memakai kata tanya, partikel \u0e44\u0e2b\u0e21 TIDAK dipakai. '\u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e2d\u0e30\u0e44\u0e23\u0e44\u0e2b\u0e21' bukan kalimat yang wajar."
   ],
   "examples": [
    {
     "th": "\u0e04\u0e38\u0e13\u0e44\u0e1b\u0e44\u0e2b\u0e21",
     "phon": "khun pai m\u01cei",
     "gloss": "Anda pergi?"
    },
    {
     "th": "\u0e04\u0e38\u0e13\u0e01\u0e34\u0e19\u0e2d\u0e30\u0e44\u0e23",
     "phon": "khun kin \u00e0-rai",
     "gloss": "Anda makan apa?"
    },
    {
     "th": "\u0e2d\u0e23\u0e48\u0e2d\u0e22\u0e43\u0e0a\u0e48\u0e44\u0e2b\u0e21",
     "phon": "\u00e0-r\u00e0awi ch\u00e2i m\u01cei",
     "gloss": "Enak, kan?"
    }
   ]
  },
  {
   "id": "g06",
   "title": "Klasifikator dan cara menghitung",
   "stage": 3,
   "explanation": "Untuk menghitung benda, bahasa Thailand memakai pola: kata benda + angka + klasifikator. \u0e2b\u0e21\u0e32\u0e2a\u0e32\u0e21\u0e15\u0e31\u0e27 = 'anjing' + 'tiga' + klasifikator hewan, artinya 'tiga anjing'. Klasifikator adalah kata penggolong yang dipilih menurut jenis bendanya, mirip 'tiga BUAH buku' atau 'dua BATANG rokok' dalam bahasa Indonesia, tetapi dalam bahasa Thailand pemakaiannya WAJIB saat menghitung. Beberapa yang terpenting: \u0e04\u0e19 (orang), \u0e15\u0e31\u0e27 (hewan, pakaian, meja dan kursi), \u0e43\u0e1a (benda tipis dan berongga: daun, kertas, tas, gelas), \u0e40\u0e25\u0e48\u0e21 (buku), \u0e04\u0e31\u0e19 (kendaraan beroda), \u0e25\u0e39\u0e01 (buah), \u0e41\u0e01\u0e49\u0e27 (minuman dalam gelas), \u0e2d\u0e31\u0e19 (benda kecil umum).",
   "caveats": [
    "Urutannya berbeda dari bahasa Indonesia: benda lebih dahulu, angka kemudian, klasifikator terakhir. 'tiga anjing' menjadi 'anjing tiga \u0e15\u0e31\u0e27'.",
    "Angka satu adalah pengecualian: \u0e2b\u0e21\u0e32\u0e15\u0e31\u0e27\u0e2b\u0e19\u0e36\u0e48\u0e07 (klasifikator sebelum angka) terasa lebih wajar daripada \u0e2b\u0e21\u0e32\u0e2b\u0e19\u0e36\u0e48\u0e07\u0e15\u0e31\u0e27, meski keduanya dipakai.",
    "Bila Anda tidak tahu klasifikator yang tepat, \u0e2d\u0e31\u0e19 adalah pilihan yang cukup aman untuk benda kecil, dan menyebut angka saja biasanya tetap dipahami. Pemakaian klasifikator yang keliru tidak menghalangi pemahaman."
   ],
   "examples": [
    {
     "th": "\u0e2b\u0e21\u0e32\u0e2a\u0e32\u0e21\u0e15\u0e31\u0e27",
     "phon": "m\u01cea s\u01ceam tua",
     "gloss": "tiga ekor anjing"
    },
    {
     "th": "\u0e19\u0e49\u0e33\u0e2a\u0e2d\u0e07\u0e41\u0e01\u0e49\u0e27",
     "phon": "n\u00e1am s\u01ceawng k\u00e2eo",
     "gloss": "dua gelas air"
    },
    {
     "th": "\u0e19\u0e31\u0e01\u0e40\u0e23\u0e35\u0e22\u0e19\u0e2a\u0e34\u0e1a\u0e04\u0e19",
     "phon": "n\u00e1k-rian s\u00ecp khon",
     "gloss": "sepuluh murid"
    }
   ]
  },
  {
   "id": "g07",
   "title": "Kata tunjuk: \u0e19\u0e35\u0e48/\u0e19\u0e31\u0e48\u0e19 dan \u0e19\u0e35\u0e49/\u0e19\u0e31\u0e49\u0e19",
   "stage": 4,
   "explanation": "Bahasa Thailand membedakan kata tunjuk yang berdiri sendiri dari yang menempel pada kata benda, dan perbedaannya hanya NADA. \u0e19\u0e35\u0e48 (nada turun) dan \u0e19\u0e31\u0e48\u0e19 (nada turun) berdiri sendiri sebagai kata benda: \u0e19\u0e35\u0e48\u0e2d\u0e30\u0e44\u0e23 ('ini apa?'). \u0e19\u0e35\u0e49 (nada tinggi) dan \u0e19\u0e31\u0e49\u0e19 (nada tinggi) menempel sesudah kata benda, dan didahului klasifikatornya: \u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e40\u0e25\u0e48\u0e21\u0e19\u0e35\u0e49 ('buku ini'), \u0e1a\u0e49\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19 ('rumah itu'). Pola lengkapnya adalah kata benda + klasifikator + kata tunjuk. Untuk pemula, pola tanpa klasifikator (\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e19\u0e35\u0e49) juga akan dipahami, tetapi pola dengan klasifikator itulah yang dipakai penutur asli.",
   "caveats": [
    "Perbedaan \u0e19\u0e35\u0e48 dan \u0e19\u0e35\u0e49 hanya pada nada, dan dalam percakapan cepat perbedaannya tidak selalu terdengar jelas. Dalam tulisan perbedaannya tegas.",
    "Ada tingkat ketiga: \u0e42\u0e19\u0e48\u0e19/\u0e42\u0e19\u0e49\u0e19 untuk benda yang jauh dari pembicara maupun pendengar, sepadan dengan 'itu di sana'.",
    "\u0e15\u0e23\u0e07\u0e19\u0e35\u0e49 dan \u0e15\u0e23\u0e07\u0e19\u0e31\u0e49\u0e19 ('di sini', 'di sana') dipakai untuk menunjuk tempat yang terlihat, dan terasa lebih alami daripada \u0e17\u0e35\u0e48\u0e19\u0e35\u0e48 pada banyak keadaan."
   ],
   "examples": [
    {
     "th": "\u0e19\u0e35\u0e48\u0e2d\u0e30\u0e44\u0e23",
     "phon": "n\u00eei \u00e0-rai",
     "gloss": "Ini apa?"
    },
    {
     "th": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e40\u0e25\u0e48\u0e21\u0e19\u0e35\u0e49\u0e14\u0e35",
     "phon": "n\u01ceng-s\u01d4ue l\u00eam n\u00edi dii",
     "gloss": "Buku ini bagus."
    },
    {
     "th": "\u0e1a\u0e49\u0e32\u0e19\u0e2b\u0e25\u0e31\u0e07\u0e19\u0e31\u0e49\u0e19\u0e43\u0e2b\u0e0d\u0e48",
     "phon": "b\u00e2an l\u01ceng n\u00e1n y\u00e0i",
     "gloss": "Rumah itu besar."
    }
   ]
  },
  {
   "id": "g08",
   "title": "Waktu tanpa perubahan kata kerja: \u0e41\u0e25\u0e49\u0e27, \u0e08\u0e30, \u0e01\u0e33\u0e25\u0e31\u0e07, \u0e22\u0e31\u0e07",
   "stage": 4,
   "explanation": "Karena kata kerja tidak berubah bentuk, waktu dan tahapan perbuatan ditandai kata lain. \u0e08\u0e30 diletakkan SEBELUM kata kerja untuk masa depan: \u0e1c\u0e21\u0e08\u0e30\u0e44\u0e1b ('saya akan pergi'). \u0e41\u0e25\u0e49\u0e27 diletakkan di AKHIR kalimat untuk perbuatan yang sudah selesai: \u0e1c\u0e21\u0e01\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27 ('saya sudah makan'). \u0e01\u0e33\u0e25\u0e31\u0e07 diletakkan sebelum kata kerja untuk perbuatan yang sedang berlangsung: \u0e1c\u0e21\u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e34\u0e19 ('saya sedang makan'), dan sering dipasangkan dengan \u0e2d\u0e22\u0e39\u0e48 di akhir. \u0e22\u0e31\u0e07 berarti 'masih', dan \u0e22\u0e31\u0e07\u0e44\u0e21\u0e48 berarti 'belum'. Bila sudah ada keterangan waktu yang jelas, penanda ini sering dihilangkan: \u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49\u0e1c\u0e21\u0e44\u0e1b sudah berarti 'besok saya pergi'.",
   "caveats": [
    "\u0e41\u0e25\u0e49\u0e27 tidak selalu berarti masa lalu. Ia menandai perubahan keadaan, sehingga \u0e2d\u0e34\u0e48\u0e21\u0e41\u0e25\u0e49\u0e27 berarti 'sudah kenyang (sekarang)', dan \u0e44\u0e1b\u0e41\u0e25\u0e49\u0e27 bisa berarti 'sudah berangkat'.",
    "\u0e44\u0e14\u0e49 sebelum kata kerja juga dapat menandai masa lalu dalam ragam resmi dan tulisan, tetapi pemakaian itu berbeda dari \u0e44\u0e14\u0e49 sesudah kata kerja yang berarti 'bisa'.",
    "Penutur asli lebih sering mengandalkan keterangan waktu dan konteks daripada menumpuk penanda. Memakai \u0e08\u0e30 dan \u0e41\u0e25\u0e49\u0e27 pada setiap kalimat membuat bahasa terdengar kaku."
   ],
   "examples": [
    {
     "th": "\u0e1c\u0e21\u0e08\u0e30\u0e44\u0e1b\u0e1e\u0e23\u0e38\u0e48\u0e07\u0e19\u0e35\u0e49",
     "phon": "ph\u01d2m j\u00e0 pai phr\u00fbng-n\u00edi",
     "gloss": "Saya akan pergi besok."
    },
    {
     "th": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e41\u0e25\u0e49\u0e27",
     "phon": "ph\u01d2m kin l\u00e1eo",
     "gloss": "Saya sudah makan."
    },
    {
     "th": "\u0e1c\u0e21\u0e01\u0e33\u0e25\u0e31\u0e07\u0e01\u0e34\u0e19",
     "phon": "ph\u01d2m kam-lang kin",
     "gloss": "Saya sedang makan."
    }
   ]
  },
  {
   "id": "g09",
   "title": "Partikel sopan dan partikel rasa",
   "stage": 5,
   "explanation": "Partikel di akhir kalimat adalah bagian penting kesopanan bahasa Thailand, dan tidak ada padanan langsungnya dalam bahasa Indonesia. \u0e04\u0e23\u0e31\u0e1a dipakai penutur lelaki pada kalimat apa pun. Penutur perempuan memakai DUA bentuk: \u0e04\u0e48\u0e30 (nada turun) untuk pernyataan dan \u0e04\u0e30 (nada tinggi) untuk pertanyaan. Selain itu ada partikel rasa: \u0e19\u0e30 melembutkan permintaan atau mencari persetujuan, \u0e2a\u0e34 memberi dorongan atau penegasan, \u0e04\u0e23\u0e31\u0e1a\u0e1c\u0e21 terdengar lebih hormat lagi. Kalimat tanpa partikel sopan tidak salah, tetapi bisa terdengar datar atau kurang ramah terhadap orang yang baru dikenal, terutama di tempat umum.",
   "caveats": [
    "Partikel sopan dipilih menurut jenis kelamin PEMBICARA, bukan pendengar. Penutur lelaki tetap memakai \u0e04\u0e23\u0e31\u0e1a saat berbicara kepada perempuan.",
    "Dalam percakapan santai, \u0e04\u0e23\u0e31\u0e1a sering dipendekkan menjadi \u0e04\u0e31\u0e1a dan \u0e04\u0e48\u0e30 menjadi \u0e04\u0e48\u0e32 atau \u0e08\u0e49\u0e32. Bentuk pendek ini tidak dipakai pada tulisan resmi.",
    "Memakai terlalu banyak partikel pada satu kalimat terdengar berlebihan. Satu partikel di akhir sudah cukup."
   ],
   "examples": [
    {
     "th": "\u0e02\u0e2d\u0e1a\u0e04\u0e38\u0e13\u0e04\u0e23\u0e31\u0e1a",
     "phon": "kh\u00e0awp-khun khr\u00e1p",
     "gloss": "Terima kasih. (lelaki)"
    },
    {
     "th": "\u0e2a\u0e27\u0e31\u0e2a\u0e14\u0e35\u0e04\u0e48\u0e30",
     "phon": "s\u00e0-w\u00e0t-dii kh\u00e2",
     "gloss": "Salam. (perempuan)"
    },
    {
     "th": "\u0e44\u0e21\u0e48\u0e40\u0e1c\u0e47\u0e14\u0e19\u0e30",
     "phon": "m\u00e2i ph\u00e8t n\u00e1",
     "gloss": "Tidak pedas, ya."
    }
   ]
  },
  {
   "id": "g10",
   "title": "Kata ganti dan sebutan: lebih rumit daripada 'saya' dan 'kamu'",
   "stage": 5,
   "explanation": "Kata ganti bahasa Thailand dipilih menurut jenis kelamin pembicara, umur relatif, keakraban, dan keadaan. Untuk 'saya': \u0e1c\u0e21 (lelaki), \u0e09\u0e31\u0e19 (perempuan, agak resmi), \u0e40\u0e23\u0e32 (akrab), atau nama diri sendiri. Untuk 'kamu': \u0e04\u0e38\u0e13 (sopan, netral), \u0e40\u0e18\u0e2d (akrab), atau \u2014 yang paling lazim \u2014 SEBUTAN KEKELUARGAAN menurut umur: \u0e1e\u0e35\u0e48 untuk orang yang lebih tua, \u0e19\u0e49\u0e2d\u0e07 untuk yang lebih muda. Memanggil pelayan dengan \u0e1e\u0e35\u0e48 atau \u0e19\u0e49\u0e2d\u0e07 adalah hal biasa dan sopan. Selain itu, kata ganti sangat sering DIHILANGKAN sama sekali. Menyebut nama diri sendiri sebagai 'saya' terdengar wajar dalam bahasa Thailand, berbeda dari bahasa Indonesia baku.",
   "caveats": [
    "Ada kata ganti yang kasar atau sangat akrab (\u0e21\u0e36\u0e07, \u0e01\u0e39) yang hanya dipakai di antara teman sangat dekat. Memakainya kepada orang asing adalah penghinaan serius, jadi sebaiknya dihindari sama sekali.",
    "\u0e40\u0e02\u0e32 berarti 'dia' tanpa membedakan lelaki dan perempuan, dan dalam percakapan sering diucapkan bernada tinggi, berbeda dari nada naik menurut ejaannya.",
    "Memakai \u0e04\u0e38\u0e13 terus-menerus kepada orang yang sudah dekat bisa terasa berjarak. Beralih ke \u0e1e\u0e35\u0e48 atau nama diri adalah tanda keakraban."
   ],
   "examples": [
    {
     "th": "\u0e1e\u0e35\u0e48\u0e44\u0e1b\u0e44\u0e2b\u0e19",
     "phon": "ph\u00eei pai n\u01cei",
     "gloss": "Mau ke mana, Kak?"
    },
    {
     "th": "\u0e04\u0e38\u0e13\u0e0a\u0e37\u0e48\u0e2d\u0e2d\u0e30\u0e44\u0e23",
     "phon": "khun ch\u00fbue \u00e0-rai",
     "gloss": "Siapa nama Anda?"
    },
    {
     "th": "\u0e44\u0e1b\u0e44\u0e2b\u0e19",
     "phon": "pai n\u01cei",
     "gloss": "Mau ke mana? (tanpa kata ganti)"
    }
   ]
  },
  {
   "id": "g11",
   "title": "Tempat dan arah: \u0e17\u0e35\u0e48, \u0e43\u0e19, \u0e1a\u0e19, \u0e44\u0e1b, \u0e21\u0e32",
   "stage": 6,
   "explanation": "Kata depan tempat yang paling sering dipakai: \u0e17\u0e35\u0e48 ('di'), \u0e43\u0e19 ('di dalam'), \u0e1a\u0e19 ('di atas'), \u0e43\u0e15\u0e49 ('di bawah'), \u0e02\u0e49\u0e32\u0e07 ('di samping'), \u0e43\u0e01\u0e25\u0e49 ('dekat'), \u0e44\u0e01\u0e25 ('jauh dari'). Semuanya diletakkan sebelum kata tempatnya, seperti bahasa Indonesia. Dengan kata kerja \u0e2d\u0e22\u0e39\u0e48, kata depan \u0e17\u0e35\u0e48 sering dihilangkan: \u0e2b\u0e49\u0e2d\u0e07\u0e19\u0e49\u0e33\u0e2d\u0e22\u0e39\u0e48\u0e44\u0e2b\u0e19. Selain itu, \u0e44\u0e1b ('pergi') dan \u0e21\u0e32 ('datang') dipakai SESUDAH kata kerja lain untuk menandai arah terhadap pembicara: \u0e40\u0e14\u0e34\u0e19\u0e44\u0e1b ('berjalan menjauh'), \u0e40\u0e2d\u0e32\u0e21\u0e32 ('bawa ke sini'). Pola arah ini sangat khas bahasa Thailand dan tidak ada padanan langsungnya dalam bahasa Indonesia.",
   "caveats": [
    "\u0e44\u0e1b dan \u0e21\u0e32 sebagai penanda arah tidak selalu dapat diterjemahkan. \u0e40\u0e2d\u0e32\u0e44\u0e1b dan \u0e40\u0e2d\u0e32\u0e21\u0e32 keduanya berarti 'membawa', bedanya hanya arah terhadap pembicara.",
    "Kata kerja gerak tidak memerlukan kata depan untuk tujuannya: \u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14 sudah berarti 'pergi ke pasar'. Menambahkan \u0e17\u0e35\u0e48 di situ terasa berlebihan.",
    "\u0e02\u0e49\u0e32\u0e07 berarti 'sisi', dan dipakai dalam banyak gabungan: \u0e02\u0e49\u0e32\u0e07\u0e43\u0e19 (di dalam), \u0e02\u0e49\u0e32\u0e07\u0e19\u0e2d\u0e01 (di luar), \u0e02\u0e49\u0e32\u0e07\u0e1a\u0e19 (di atas), \u0e02\u0e49\u0e32\u0e07\u0e25\u0e48\u0e32\u0e07 (di bawah)."
   ],
   "examples": [
    {
     "th": "\u0e1c\u0e21\u0e2d\u0e22\u0e39\u0e48\u0e17\u0e35\u0e48\u0e42\u0e23\u0e07\u0e41\u0e23\u0e21",
     "phon": "ph\u01d2m y\u00f9u th\u00eei roong-raem",
     "gloss": "Saya ada di hotel."
    },
    {
     "th": "\u0e2b\u0e19\u0e31\u0e07\u0e2a\u0e37\u0e2d\u0e2d\u0e22\u0e39\u0e48\u0e1a\u0e19\u0e42\u0e15\u0e4a\u0e30",
     "phon": "n\u01ceng-s\u01d4ue y\u00f9u bon t\u00f3",
     "gloss": "Bukunya ada di atas meja."
    },
    {
     "th": "\u0e23\u0e49\u0e32\u0e19\u0e2d\u0e22\u0e39\u0e48\u0e43\u0e01\u0e25\u0e49\u0e1a\u0e49\u0e32\u0e19",
     "phon": "r\u00e1an y\u00f9u kl\u00e2i b\u00e2an",
     "gloss": "Tokonya dekat rumah."
    }
   ]
  },
  {
   "id": "g12",
   "title": "Kata kerja berangkai dan tiga cara mengatakan 'bisa'",
   "stage": 6,
   "explanation": "Bahasa Thailand merangkai beberapa kata kerja berturut-turut tanpa kata penghubung: \u0e1c\u0e21\u0e40\u0e14\u0e34\u0e19\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14 = 'saya' + 'berjalan' + 'pergi' + 'pasar', artinya 'saya berjalan ke pasar'. Rangkaian ini bukan daftar perbuatan terpisah, melainkan satu peristiwa yang dirinci. Pola yang sama dipakai untuk permintaan: \u0e0a\u0e48\u0e27\u0e22 + kata kerja berarti 'tolong lakukan...'. Untuk 'bisa' ada tiga kata yang berbeda, semuanya diletakkan SESUDAH kata kerja: \u0e44\u0e14\u0e49 untuk kemungkinan atau izin (\u0e1e\u0e39\u0e14\u0e44\u0e14\u0e49, 'bisa berbicara / boleh bicara'), \u0e40\u0e1b\u0e47\u0e19 untuk keterampilan yang dipelajari (\u0e27\u0e48\u0e32\u0e22\u0e19\u0e49\u0e33\u0e40\u0e1b\u0e47\u0e19, 'bisa berenang'), dan \u0e44\u0e2b\u0e27 untuk kemampuan fisik atau daya tahan (\u0e40\u0e14\u0e34\u0e19\u0e44\u0e2b\u0e27, 'masih kuat berjalan').",
   "caveats": [
    "Perbedaan \u0e44\u0e14\u0e49, \u0e40\u0e1b\u0e47\u0e19, dan \u0e44\u0e2b\u0e27 tidak selalu tegas, dan penutur asli kadang memakai \u0e44\u0e14\u0e49 untuk semuanya dalam percakapan santai. Namun \u0e40\u0e1b\u0e47\u0e19 pada keterampilan terdengar lebih tepat.",
    "\u0e44\u0e14\u0e49\u0e22\u0e31\u0e07? dan \u0e44\u0e14\u0e49\u0e44\u0e2b\u0e21? adalah cara lazim bertanya 'bisa tidak?'. Jawabannya \u0e44\u0e14\u0e49 ('bisa') atau \u0e44\u0e21\u0e48\u0e44\u0e14\u0e49 ('tidak bisa').",
    "Rangkaian kata kerja bisa menjadi panjang dan tetap wajar: \u0e40\u0e2d\u0e32\u0e44\u0e1b\u0e43\u0e2b\u0e49\u0e40\u0e02\u0e32 ('ambil, bawa, berikan kepadanya'), yang diterjemahkan sebagai satu perbuatan."
   ],
   "examples": [
    {
     "th": "\u0e1c\u0e21\u0e40\u0e14\u0e34\u0e19\u0e44\u0e1b\u0e15\u0e25\u0e32\u0e14",
     "phon": "ph\u01d2m dooen pai t\u00e0-l\u00e0at",
     "gloss": "Saya berjalan ke pasar."
    },
    {
     "th": "\u0e0a\u0e48\u0e27\u0e22\u0e1e\u0e39\u0e14\u0e2d\u0e35\u0e01\u0e04\u0e23\u0e31\u0e49\u0e07",
     "phon": "ch\u00fbai ph\u00fbut \u00ecik kr\u00e1ng",
     "gloss": "Tolong ucapkan sekali lagi."
    },
    {
     "th": "\u0e1c\u0e21\u0e01\u0e34\u0e19\u0e40\u0e1c\u0e47\u0e14\u0e44\u0e21\u0e48\u0e44\u0e14\u0e49",
     "phon": "ph\u01d2m kin ph\u00e8t m\u00e2i d\u00e2i",
     "gloss": "Saya tidak bisa makan pedas."
    }
   ]
  }
 ],
 "info": {
  "nada": {
   "tones": [
    {
     "key": "sedang",
     "nameTh": "\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e2a\u0e32\u0e21\u0e31\u0e0d",
     "contour": "Datar di tengah wilayah suara Anda. Tidak naik, tidak turun."
    },
    {
     "key": "rendah",
     "nameTh": "\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e40\u0e2d\u0e01",
     "contour": "Datar tetapi jelas lebih rendah daripada nada sedang, dan sedikit menurun di ujung."
    },
    {
     "key": "turun",
     "nameTh": "\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e42\u0e17",
     "contour": "Mulai tinggi lalu jatuh."
    },
    {
     "key": "tinggi",
     "nameTh": "\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e15\u0e23\u0e35",
     "contour": "Tinggi dan sedikit naik di ujung, diucapkan agak tegang."
    },
    {
     "key": "naik",
     "nameTh": "\u0e40\u0e2a\u0e35\u0e22\u0e07\u0e08\u0e31\u0e15\u0e27\u0e32",
     "contour": "Mulai rendah lalu naik."
    }
   ],
   "noMark": [
    {
     "cls": "tengah",
     "kind": "hidup",
     "length": "panjang",
     "tone": "sedang",
     "ex": "\u0e01\u0e32",
     "phon": "kaa"
    },
    {
     "cls": "tengah",
     "kind": "mati",
     "length": "pendek",
     "tone": "rendah",
     "ex": "\u0e08\u0e30",
     "phon": "j\u00e0"
    },
    {
     "cls": "tengah",
     "kind": "mati",
     "length": "panjang",
     "tone": "rendah",
     "ex": "\u0e08\u0e32\u0e01",
     "phon": "j\u00e0ak"
    },
    {
     "cls": "tinggi",
     "kind": "hidup",
     "length": "panjang",
     "tone": "naik",
     "ex": "\u0e02\u0e32",
     "phon": "kh\u01cea"
    },
    {
     "cls": "tinggi",
     "kind": "mati",
     "length": "pendek",
     "tone": "rendah",
     "ex": "\u0e2b\u0e01",
     "phon": "h\u00f2k"
    },
    {
     "cls": "tinggi",
     "kind": "mati",
     "length": "panjang",
     "tone": "rendah",
     "ex": "\u0e16\u0e39\u0e01",
     "phon": "th\u00f9uk"
    },
    {
     "cls": "rendah",
     "kind": "hidup",
     "length": "panjang",
     "tone": "sedang",
     "ex": "\u0e21\u0e32",
     "phon": "maa"
    },
    {
     "cls": "rendah",
     "kind": "mati",
     "length": "pendek",
     "tone": "tinggi",
     "ex": "\u0e19\u0e01",
     "phon": "n\u00f3k"
    },
    {
     "cls": "rendah",
     "kind": "mati",
     "length": "panjang",
     "tone": "turun",
     "ex": "\u0e21\u0e32\u0e01",
     "phon": "m\u00e2ak"
    }
   ],
   "mark": [
    {
     "mark": "\u0e48",
     "markRom": "mai ek",
     "cls": "tengah",
     "tone": "rendah",
     "ex": "\u0e1b\u0e48\u0e32",
     "phon": "p\u00e0a"
    },
    {
     "mark": "\u0e48",
     "markRom": "mai ek",
     "cls": "tinggi",
     "tone": "rendah",
     "ex": "\u0e02\u0e48\u0e32\u0e27",
     "phon": "kh\u00e0ao"
    },
    {
     "mark": "\u0e48",
     "markRom": "mai ek",
     "cls": "rendah",
     "tone": "turun",
     "ex": "\u0e44\u0e21\u0e48",
     "phon": "m\u00e2i"
    },
    {
     "mark": "\u0e49",
     "markRom": "mai tho",
     "cls": "tengah",
     "tone": "turun",
     "ex": "\u0e1b\u0e49\u0e32",
     "phon": "p\u00e2a"
    },
    {
     "mark": "\u0e49",
     "markRom": "mai tho",
     "cls": "tinggi",
     "tone": "turun",
     "ex": "\u0e02\u0e49\u0e32\u0e27",
     "phon": "kh\u00e2ao"
    },
    {
     "mark": "\u0e49",
     "markRom": "mai tho",
     "cls": "rendah",
     "tone": "tinggi",
     "ex": "\u0e21\u0e49\u0e32",
     "phon": "m\u00e1a"
    },
    {
     "mark": "\u0e4a",
     "markRom": "mai tri",
     "cls": "tengah",
     "tone": "tinggi",
     "ex": "\u0e42\u0e15\u0e4a\u0e30",
     "phon": "t\u00f3"
    },
    {
     "mark": "\u0e4b",
     "markRom": "mai chattawa",
     "cls": "tengah",
     "tone": "naik",
     "ex": "\u0e40\u0e14\u0e35\u0e4b\u0e22\u0e27",
     "phon": "d\u01d0ao"
    }
   ],
   "notes": [
    "Tanda nada tidak pernah berarti satu nada tertentu. Mai ek pada kelas rendah menghasilkan nada TURUN, bukan rendah; mai tho pada kelas rendah menghasilkan nada TINGGI, bukan turun.",
    "Panjang vokal hanya menentukan pada satu keadaan: suku kata mati berkonsonan awal kelas rendah. \u0e19\u0e01 (pendek) bernada tinggi, \u0e21\u0e32\u0e01 (panjang) bernada turun.",
    "Pada ejaan baku, mai tri dan mai chattawa praktis hanya dipakai bersama konsonan kelas tengah. Alasannya: kelas tengah sendirian sudah bisa menghasilkan tiga nada, dan dua tanda itu melengkapinya menjadi lima. Kelas rendah dan tinggi tidak memerlukannya karena nada yang kurang pada keduanya dapat dicapai dengan pasangan hurufnya atau dengan \u0e2b nam.",
    "Itulah sebabnya pasangan huruf berbunyi sama tetapi berkelas berbeda (\u0e02/\u0e04, \u0e16/\u0e17, \u0e1c/\u0e1e, \u0e2a/\u0e0b, \u0e1d/\u0e1f, \u0e09/\u0e0a) tetap dipertahankan dalam ejaan Thai: dengan pasangan itu, setiap bunyi konsonan bisa dituliskan dalam lima nada."
   ]
  },
  "serumpun": [
   {
    "id": "cn01",
    "title": "Kata yang ejaannya memakai \u0e23\u0e23",
    "text": "Beberapa kata serumpun yang paling dikenal ditulis dengan \u0e23\u0e23 (ro han), yang dibaca -an- atau -am- dan tidak mengikuti pola suku kata biasa: \u0e18\u0e23\u0e23\u0e21 (tham) = 'dharma', \u0e01\u0e23\u0e23\u0e21 (kam) = 'karma', \u0e2a\u0e27\u0e23\u0e23\u0e04\u0e4c (s\u00e0-w\u01cen) = 'surga', dan \u0e18\u0e23\u0e23\u0e21\u0e0a\u0e32\u0e15\u0e34 (tham-m\u00e1-ch\u00e2at) = 'alam'. Kata-kata itu tidak dijadikan kartu di sini karena pembacaannya tidak bisa diperiksa mesin, tetapi tetap perlu Anda kenali."
   },
   {
    "id": "cn02",
    "title": "Nama hari yang belum tercantum",
    "text": "\u0e27\u0e31\u0e19\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35 (wan ph\u00e1-r\u00fae-h\u00e0t-s\u00e0-baaw-dii, Kamis) berasal dari Brihaspati \u2014 'Respati' dalam penanggalan Jawa. Ejaannya memakai \u0e24 dan berlapis-lapis, sehingga tidak dijadikan kartu. Enam hari lainnya ada di daftar di atas."
   },
   {
    "id": "cn03",
    "title": "Jangan percaya kemiripan begitu saja",
    "text": "Kemiripan bentuk tidak selalu berarti kemiripan makna. \u0e2a\u0e38\u0e02 bukan 'suka', \u0e20\u0e39\u0e21\u0e34 bukan 'bumi' sebagai planet, dan \u0e0a\u0e32\u0e15\u0e34 bukan 'sejati'. Pakailah kemiripan untuk MENGINGAT kata, bukan untuk MENEBAK artinya."
   },
   {
    "id": "cn04",
    "title": "Di mana lagi kata serumpun muncul",
    "text": "Jalur Sanskerta paling banyak muncul pada istilah keagamaan, pemerintahan, ilmu, dan gelar. Pada kosakata sehari-hari (makanan, keluarga, kata kerja) hampir tidak ada, sebab di sana bahasa Thailand memakai kata aslinya sendiri. Jadi modul ini mempercepat kosakata ragam resmi, bukan kosakata warung."
   }
  ],
  "aksara": {
   "classes": [
    {
     "name": "tengah",
     "count": 9,
     "letters": "\u0e01 \u0e08 \u0e14 \u0e15 \u0e1a \u0e1b \u0e2d \u0e0e \u0e0f"
    },
    {
     "name": "tinggi",
     "count": 11,
     "letters": "\u0e02 \u0e2a \u0e2b \u0e1c \u0e1d \u0e16 \u0e09 \u0e28 \u0e29 \u0e10 \u0e03"
    },
    {
     "name": "rendah",
     "count": 24,
     "letters": "\u0e04 \u0e07 \u0e19 \u0e21 \u0e0a \u0e0b \u0e17 \u0e1e \u0e1f \u0e22 \u0e23 \u0e25 \u0e27 \u0e20 \u0e18 \u0e2e \u0e0d \u0e13 \u0e2c \u0e06 \u0e11 \u0e12 \u0e0c \u0e05"
    }
   ]
  }
 }
};
