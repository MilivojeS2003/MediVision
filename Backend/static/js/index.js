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

