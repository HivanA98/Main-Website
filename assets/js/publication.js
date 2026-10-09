/* ============================================================
   publication.js — tombol salin sitasi
   ------------------------------------------------------------
   Tombol ditambahkan lewat JS, bukan ditulis di HTML, supaya
   tanpa JavaScript tidak ada tombol mati yang membingungkan.
   Teks sitasi tetap bisa diblok dan disalin manual.
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".cite-box").forEach(function (box) {
      var text = box.querySelector(".cite-text");
      if (!text) return;

      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "act cite-copy";
      btn.textContent = "Salin sitasi";
      box.appendChild(btn);

      var reset;
      btn.addEventListener("click", function () {
        // rapikan spasi dari indentasi HTML sebelum disalin
        var plain = text.textContent.replace(/\s+/g, " ").trim();

        var done = function (ok) {
          btn.textContent = ok ? "Tersalin" : "Gagal menyalin";
          btn.setAttribute("data-copied", ok ? "1" : "0");
          clearTimeout(reset);
          reset = setTimeout(function () {
            btn.textContent = "Salin sitasi";
            btn.removeAttribute("data-copied");
          }, 2000);
        };

        // Cadangan untuk konteks tanpa Clipboard API (mis. http:// biasa)
        // dan untuk kasus Promise-nya ditolak — antara lain saat dokumen
        // sedang tidak fokus, yang membuat writeText() gagal.
        var legacyCopy = function () {
          try {
            var ta = document.createElement("textarea");
            ta.value = plain;
            ta.setAttribute("readonly", "");
            ta.style.cssText = "position:absolute;left:-9999px;top:0";
            document.body.appendChild(ta);
            ta.select();
            ta.setSelectionRange(0, plain.length);
            var ok = document.execCommand("copy");
            document.body.removeChild(ta);
            return ok;
          } catch (e) {
            return false;
          }
        };

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(plain).then(
            function () { done(true); },
            function () { done(legacyCopy()); }   // jangan menyerah dulu
          );
        } else {
          done(legacyCopy());
        }
      });
    });
  });
})();
