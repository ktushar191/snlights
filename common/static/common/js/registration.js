// Wait for the DOM to load before attaching events
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', function(event) {
      let valid = true;
  
      // Validation for mobile number
      const mobile = document.getElementById('mobile').value;
      const mobileRegex = /^\d{10}$/;
      if (!mobile.match(mobileRegex)) {
        alert('Please enter a valid 10-digit mobile number');
        valid = false;
      }
  
      // Validation for postal code
      // const postal = document.getElementById('postal').value;
      // const postalRegex = /^\d{5}$/;
      // if (!postal.match(postalRegex)) {
      //   alert('Please enter a valid 6-digit postal code');
      //   valid = false;
      // }
  
      if (!valid) {
        event.preventDefault();  // Prevent form submission if validation fails
      }
    });
  });
  