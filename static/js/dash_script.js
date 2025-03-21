// Function to show the Login Form inside the content area
function showLoginForm() {
    // HTML content for the Login Form
    const loginContent = `
        <section>
            <div class="box">
                <div class="form">
                    <h2>Login</h2>
                    <form id="loginForm" onsubmit="return validateForm()">
                        <div class="inputBx">
                            <input type="text" id="username" placeholder="Username">
                            <img src="user.png" alt="user icon">
                        </div>
                        <div class="inputBx">
                            <input type="password" id="password" placeholder="Password">
                            <img src="lock.png" alt="lock icon">
                        </div>
                        <label class="remember">
                            <input type="checkbox" id="remember">Remember Me
                        </label>
                        <div class="inputBx">
                            <input type="submit" value="Login">
                        </div>
                    </form>
                    <p>Forget <a href="forgot_password.html">Password</a></p>
                    <p>Need an <a href="need_account.html">Account</a></p>

                    <!-- Success Message Popup -->
                    <div id="successModal" class="modal">
                        <div class="modal-content">
                            <span class="close-btn" onclick="closeModal()">&times;</span>
                            <h2>Login Successful!</h2>
                            <p>Welcome to your dashboard.</p>
                            <button onclick="closeModal()">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;

    // Set the content of the contentArea to the login form
    document.getElementById('contentArea').innerHTML = loginContent;
}

// Add a function to validate the form (you can implement your custom logic here)
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Example validation (you can extend it)
    if (username === "" || password === "") {
        alert("Please fill in both fields!");
        return false;
    }

    // Simulate successful login for now (this would be replaced with actual validation)
    document.getElementById('successModal').style.display = 'block';
    return false; // Prevent the form from submitting
}

// Function to close the success modal
function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}
function showAddProductForm() {
    // Dynamically add the CSS for the product form
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "product_form.css";  // Path to your product form CSS
    document.head.appendChild(link);

    // Now load the Product Form content
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <h2>Product Form</h2>
        <form id="product-form">
            <div class="form-group">
                <label for="product-image">Product Image:</label>
                <input type="file" id="product-image" name="product-image" accept="image/*">
            </div>
            <div class="form-group">
                <label for="product-name">Product Name:</label>
                <input type="text" id="product-name" name="product-name" required>
            </div>
            <div class="form-group">
                <label for="price">Price ($):</label>
                <input type="number" id="price" name="price" required>
            </div>
            <div class="form-group">
                <label for="company-name">Company Name:</label>
                <input type="text" id="company-name" name="company-name" required>
            </div>
            <div id="material-types" class="form-group">
                <label for="material-type">Material Type:</label>
                <input type="text" name="material-type[]" placeholder="Enter material type" required>
            </div>
            <div id="additional-fields"></div>
            <button type="button" onclick="addAdditionalField()">Add Additional Field</button>
            <div class="form-group">
                <button type="submit">Submit</button>
            </div>
        </form>
    `;
}
