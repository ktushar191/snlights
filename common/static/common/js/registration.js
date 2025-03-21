function validateForm() {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Username Validation
  if (username === '') {
      alert('Username is required');
      return false;
  }

  // Email Validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
      alert('Please enter a valid email address');
      return false;
  }

  // Mobile Validation (Assuming a 10-digit number)
  const mobilePattern = /^\d{10}$/;
  if (!mobilePattern.test(mobile)) {
      alert('Please enter a valid 10-digit mobile number');
      return false;
  }

  // Password Validation
  if (password === '') {
      alert('Password is required');
      return false;
  }

  // Confirm Password Validation
  if (confirmPassword !== password) {
      alert('Passwords do not match');
      return false;
  }

  // If all validations pass
  alert('Registration Successful!');
  return true; // Allow form submission
}
