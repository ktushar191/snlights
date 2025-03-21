function validateForm() {
    // Get the username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (you can add more conditions for better validation)
    if (username === '' || password === '') {
        alert('Please fill in both fields');
        return false; // Prevent form submission if fields are empty
    }

    // Example: hardcoded credentials for demo (you can replace with actual logic or API calls)
    if (username === 'admin' && password === 'admin123') {
        // Show the success modal (popup)
        document.getElementById('successModal').style.display = 'block';

        // Optionally hide the form (if successful login is not to show form anymore)
        document.getElementById('loginForm').style.display = 'none';

        // Prevent form submission to avoid page reload
        return false;
    } else {
        alert('Invalid username or password');
        return false; // Prevent form submission on invalid credentials
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}
