// Function to show the Forgot Password form
function showForgotPassword() {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "block";
}

// Function to show the Login form again
function showLogin() {
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("reset-password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
}

// Function to handle the login form submission
document.getElementById("login-form-element").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailOrMobile = document.getElementById("email_or_mobile").value;
    const password = document.getElementById("password").value;

    // Basic validation (simple check)
    if (!emailOrMobile || !password) {
        alert("Please fill in both fields.");
        return;
    }

    // Validate email or mobile number (basic check)
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    const mobilePattern = /^[0-9]{10}$/;

    if (emailPattern.test(emailOrMobile)) {
        console.log("Email login attempt: " + emailOrMobile);
    } else if (mobilePattern.test(emailOrMobile)) {
        console.log("Mobile login attempt: " + emailOrMobile);
    } else {
        alert("Please enter a valid email or mobile number.");
        return;
    }

    // Simulate successful login (you can replace this with actual backend authentication)
    alert("Login successful!");
    // You can redirect the user after successful login or show a success message.
});

// Function to handle the Forgot Password form submission
document.getElementById("forgot-password-form-element").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailOrMobile = document.getElementById("forgot-email_or_mobile").value;

    // Basic validation
    if (!emailOrMobile) {
        alert("Please fill in the field.");
        return;
    }

    // Validate email or mobile number
    const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;
    const mobilePattern = /^[0-9]{10}$/;

    if (emailPattern.test(emailOrMobile)) {
        console.log("Password reset request for email: " + emailOrMobile);
    } else if (mobilePattern.test(emailOrMobile)) {
        console.log("Password reset request for mobile: " + emailOrMobile);
    } else {
        alert("Please enter a valid email or mobile number.");
        return;
    }

    // Simulate successful password reset request (you can replace this with actual backend logic)
    alert("Password reset instructions have been sent to your email or mobile.");
    showLogin();
});

// Function to handle the Reset Password form submission
document.getElementById("reset-password-form-element").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    const newPassword = document.getElementById("new-password").value;

    // Basic validation
    if (!newPassword) {
        alert("Please enter a new password.");
        return;
    }

    // Simulate successful password reset (you can replace this with actual backend logic)
    alert("Your password has been successfully reset.");
    showLogin();
});
