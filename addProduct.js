document.getElementById('addProd').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const image = document.getElementById('image').files[0];
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('image', image);
  
    try {
      const response = await fetch('date.txt', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Product added successfully!');
        document.getElementById('name').value = '';
        document.getElementById('image').value = '';
      } else {
        alert('Failed to add product!');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  });
  