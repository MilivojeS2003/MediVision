function generatePrompt() {  
  const productName = document.getElementById('product_name').value.trim();
  const productColors = document.getElementById('product_colors').value.trim();
  const productSizes = document.getElementById('product_sizes').value.trim();
  const productDescription = document.getElementById('product_description').value.trim();
  const productImages = document.getElementById('product_images').files;
  
  if (!productName) {
    alert('Molimo unesite naziv proizvoda!');
    return;
  }

  if (productImages.length === 0) {
    alert('Molimo izaberite barem jednu sliku!');
    return;
  }

  // Kreiraj prompt
  let prompt = `Kreiranje profesionalnih produktnih fotografija za: ${productName}`;

  if (productColors) {
    prompt += `\nDostupne boje: ${productColors}`;
  }

  if (productSizes) {
    prompt += `\nDostupne veličine: ${productSizes}`;
  }

  if (productDescription) {
    prompt += `\nOpis: ${productDescription}`;
  }
  
  prompt += `\nBroj slika: ${productImages.length}`;
  prompt += `\nZahtevi: visok kvalitet, bela pozadina, profesionalno osvetljenje, jasna prezentacija proizvoda`;

  // Popuni textarea sa generisanim promptom
  const promptTextarea = document.getElementById('generated_prompt');
  promptTextarea.value = prompt;
  promptTextarea.readOnly = true; // omogući editovanje
}


// Reset forme
function resetForm() {
  document.getElementById('uploadForm').reset();
  document.getElementById('thumbs').innerHTML = '';
  document.getElementById('generated_prompt').value = '';
  document.getElementById('generated_prompt').readOnly = true;
}

// Preview thumbnails za izabrane slike
document.getElementById('product_images').addEventListener('change', function(e) {
  const thumbsContainer = document.getElementById('thumbs');
  thumbsContainer.innerHTML = ''; // očisti prethodne thumbnails

  const files = e.target.files;

  // Provera broja fajlova
  if (files.length > 8) {
    alert('Maksimalno možete uploadovati 8 slika!');
    this.value = '';
    return;
  }

  // Provera veličine fajlova i kreiranje preview-a
  Array.from(files).forEach((file, index) => {
    // Provera veličine (8MB = 8 * 1024 * 1024 bytes)
    if (file.size > 8 * 1024 * 1024) {
      alert(`Slika "${file.name}" je veća od 8MB!`);
      this.value = '';
      thumbsContainer.innerHTML = '';
      return;
    }

    // Kreiraj thumbnail
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = document.createElement('img');
      img.src = event.target.result;
      img.style.width = '100px';
      img.style.height = '100px';
      img.style.objectFit = 'cover';
      img.style.borderRadius = '8px';
      img.style.border = '2px solid #dee2e6';
      img.title = file.name;
      thumbsContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  });
});


// Submit forme (opciono - ako želiš AJAX umesto standardnog POST-a)
document.getElementById('uploadForm').addEventListener('submit', function(e) {
  // Proveri da li je prompt generisan
  const prompt = document.getElementById('generated_prompt').value.trim();
  
  if (!prompt) {
    e.preventDefault();
    alert('Molimo prvo generišite prompt klikom na "Generiši prompt" dugme!');
    return;
  }

  // Ovde može ići AJAX logika ako želiš, ili pusti standardni submit
  console.log('Forma se šalje...');
});
