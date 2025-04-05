document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Basic validation
    if (!name || !email || !subject || !message) {
        alert("All fields are required!");
        return;
    }

    // Simulate form submission (in reality, here you would send data to the server)
    console.log("Form Data Submitted:", { name, email, subject, message });

    // Show success message
    const formMessage = document.getElementById("formMessage");
    formMessage.innerHTML = "Thank you for contacting us. We will get back to you shortly!";
    formMessage.style.backgroundColor = "#2ecc71";
    formMessage.style.display = "block";

    // Clear form fields
    document.getElementById("contactForm").reset();
});
