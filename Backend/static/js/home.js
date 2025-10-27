document.addEventListener('DOMContentLoaded', function () {
  // Pronađi sve preview dugmiće
  const previewButtons = document.querySelectorAll('.btn-preview');
  const previewModalEl = document.getElementById('previewModal');
  const previewImage = document.getElementById('previewImage');
  const previewModalLabel = document.getElementById('previewModalLabel');
  const previewOpen = document.getElementById('previewOpen');

  // Bootstrap modal object
  let bsModal = null;
  if (previewModalEl) {
    bsModal = new bootstrap.Modal(previewModalEl, {
      keyboard: true,
      backdrop: 'static'
    });
  }

  previewButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const url = btn.getAttribute('data-url');
      const name = btn.getAttribute('data-name') || 'Preview';

      if (!url) {
        console.warn('No data-url on preview button');
        return;
      }

      // Postavi src slike i naslov
      previewImage.src = url;
      previewImage.alt = name;
      previewModalLabel.textContent = name;

      // Postavi Open in new tab link
      previewOpen.href = url;

      // Kad se slika učita, možemo sakriti loader (ako ga imamo). Ostat ćemo jednostavni.
      // Otvori modal
      if (bsModal) bsModal.show();
    });
  });

  // Očisti src kad se modal zatvori (oslobodi memoriju)
  if (previewModalEl) {
    previewModalEl.addEventListener('hidden.bs.modal', () => {
      bsModal.hide()
      previewImage.src = '';
      previewImage.alt = '';
      previewModalLabel.textContent = 'Preview';
      previewOpen.href = '#';
      
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
    // Selektujemo sve "Save" dugmiće
    const saveButtons = document.querySelectorAll(".btn-outline-success");

    saveButtons.forEach(btn => {
        btn.addEventListener("click", async (e) => {
            e.preventDefault(); // Sprečava default ponašanje linka

            // Dohvatamo URL fajla sa href atributa
            const fileUrl = btn.getAttribute("href");
            if (!fileUrl) return;

            // Kreiramo ime fajla iz URL-a
            const fileName = fileUrl.split("/").pop() || "file";

            try {
                // Preuzimamo fajl kao blob
                const response = await fetch(fileUrl);
                if (!response.ok) throw new Error("Greška pri preuzimanju fajla");
                const blob = await response.blob();

                // Koristimo FileSaver.js da sačuvamo fajl
                saveAs(blob, fileName);
                console.log(`OVO JE BLOB:${blob} A OVO JE FILENAME: ${fileName}`);
            } catch (err) {
                console.error("Neuspešno preuzimanje:", err);
            }
        });
    });
});

