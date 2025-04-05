// script.js

// List of products for each category
const products = {
    crompton: [
      '350W Crompton LED Street Light',
      '220W Crompton LED Street Light',
      'Crompton 120W LED Street Light',
      '180W Crompton LED Street Light',
      '...more'
    ],
    bajaj: [
      '200W Bajaj LED Flood Light',
      '500W Bajaj LED Flood Light',
      'Bajaj Flood Light',
      '250W Bajaj LED Flood Light',
      '...more'
    ],
    havells: [
      '150W Havells LED Street Light',
      '120W Havells LED Street Light',
      '200W Havells LED Street Light',
      'Havells Street Lights',
      '...more'
    ],
    surya: [
      'Surya 45W LED Street Light',
      'Surya 100W LED Street Light',
      'Surya 220W LED Street Light',
      'Surya 180W LED Street Light',
      '...more'
    ],
    flameproof: [
      'Flameproof LED Street Light',
      'Sudhir Flameproof High bay Light',
      '100W FLP/WP Flood Light',
      'Sudhir 60W Flameproof Hand Lamp',
      '...more'
    ]
  };
  
  // Function to display products based on selected category
  function displayProducts() {
    const category = document.getElementById('category').value;
    const productListDiv = document.getElementById('productList');
  
    // Clear the previous list and hide the product list
    productListDiv.innerHTML = '';
    productListDiv.style.display = 'none';
  
    // If a category is selected, display the respective products
    if (category && products[category]) {
      productListDiv.style.display = 'block';
      products[category].forEach(product => {
        const productOption = document.createElement('label');
        productOption.classList.add('product-option');
        productOption.innerHTML = `<input type="radio" name="product" value="${product}"> ${product}`;
        productListDiv.appendChild(productOption);
      });
    }
  }
  
  // Form validation function
  function validateForm() {
    let isValid = true;
  
    // Clear previous error messages
    document.getElementById('productNameError').innerText = '';
    document.getElementById('quantityError').innerText = '';
  
    // Product Name validation
    const productName = document.getElementById('productName').value.trim();
    if (productName === '') {
      document.getElementById('productNameError').innerText = 'Product/Service title is required.';
      isValid = false;
    }
  
    // Quantity validation
    const quantity = document.getElementById('quantity').value.trim();
    if (quantity === '' || quantity <= 0) {
      document.getElementById('quantityError').innerText = 'Please enter a valid quantity.';
      isValid = false;
    }
  
    return isValid; // If false, form will not be submitted
  }
  