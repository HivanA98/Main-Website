/* ============================================================
   email.js — alamat email dirakit di peramban
   ------------------------------------------------------------
   Alamat tidak ditulis utuh di HTML (tidak ada "@" maupun
   "mailto:"), supaya pemanen alamat yang hanya membaca HTML
   mentah tidak menemukannya. Elemen menyimpan dua bagiannya
   di data-mail-user dan data-mail-host. Pada <a>, skrip ini
   memasang href mailto:; pada elemen ber-data-mail-text, teks
   cadangannya diganti dengan alamat lengkap.

   Tanpa JavaScript, href bawaan tetap mengarah ke bagian
   kontak dan teks cadangan "nama [at] host" tetap terbaca.
   ============================================================ */
(function () {
  "use strict";

  function run() {
    document.querySelectorAll("[data-mail-user][data-mail-host]").forEach(function (el) {
      var addr = el.getAttribute("data-mail-user") + "@" + el.getAttribute("data-mail-host");
      if (el.tagName === "A") el.href = "mailto:" + addr;
      if (el.hasAttribute("data-mail-text")) el.textContent = addr;
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
