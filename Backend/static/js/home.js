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
