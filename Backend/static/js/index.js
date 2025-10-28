function getFormInput(){
  const productName = document.getElementById('product_name').value.trim();
  const productColors = document.getElementById('product_colors').value.trim();
  const productSizes = document.getElementById('product_sizes').value.trim();
  const productDescription = document.getElementById('product_description').value.trim();
  const productImages = document.getElementById('product_images').files;

  return {
    'product_name':productName,
    'product_color':productColors,
    'product_size':productSizes,
    'product_descriptiona': productDescription,
    'product_images': productImages
  }
}

function generatePrompt() {  
  product_info = getFormInput()
  
  if (!product_info.product_name) {
    alert('Molimo unesite naziv proizvoda!');
    return;
  }

  if (product_info.product_images.length === 0) {
    alert('Molimo izaberite barem jednu sliku!');
    return;
  }

  // Kreiraj prompt
  let prompt = `Kreiranje profesionalnih produktnih fotografija za: ${product_info[product_name]}`;

  if (product_info.prosuct_color) {
    prompt += `\nDostupne boje: ${product_info.prosuct_color}`;
  }

  if (product_info.product_size) {
    prompt += `\nDostupne veličine: ${product_info.product_size}`;
  }

  if (product_info.product_descriptiona) {
    prompt += `\nOpis: ${product_info.product_descriptiona}`;
  }
  
  prompt += `\nBroj slika: ${product_info.product_images.length}`;
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


async function sendForm(e) {
  e.preventDefault(); 
  
  const prompt = document.getElementById('generated_prompt').value.trim();
  const data =  getFormInput();
  let product_info = new FormData();

  // Dodaj sva tekstualna polja
  for (const [key, value] of Object.entries(data)) {
    if (key !== 'product_images') { // fajlovi posebno
      product_info.append(key, value);
    }
  }

  // Dodaj slike (ako ih ima)
  if (data.product_images && data.product_images.length > 0) {
    for (const file of data.product_images) {
      product_info.append('product_images', file); // višestruke slike
    }
  }

  console.log(`OVO JE PRODUCT INFO: ${product_info}`);
  try{
    const res = await fetch('/upload/postData', {
      method:'POST',
      body: product_info
    })

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`Server error ${res.status}: ${errText}`);
    }

    const json = await res.json();
    console.log('Upload success:', json);

  }catch(err){
    console.error('Upload failed:', err);
    alert('Greška pri uploadu: ' + err.message);
  }

  // console.log('1️ Forma se šalje...');

  // if (!prompt) {
  //   Swal.fire({
  //     title: "Forma poslata!",
  //     icon: "success",
  //     draggable: true
  //   });
  //   return;
  // }

  // console.log('2️ Forma se šalje...');
  
  // Swal.fire({
  //   title: "Forma poslata!",
  //   icon: "success",
  //   draggable: true
  // }).then(() => {
  //   console.log('Korisnik zatvorio alert');
  // });
}

