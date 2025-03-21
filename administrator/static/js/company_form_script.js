document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("saveButton");
    const editButton = document.getElementById("editButton");
    const deleteButton = document.getElementById("deleteButton");
    const contactNumber = document.getElementById("contact_number");
    const errorMessages = document.getElementById("errorMessages"); // Assuming you have an element for displaying error messages

    // Function to show error message
    function showError(message) {
        errorMessages.innerHTML = `<div style="color: red;">${message}</div>`;
        contactNumber.setCustomValidity(message); // Set custom validity message
    }

    // Validate Contact Number on input
    contactNumber.addEventListener('input', () => {
        const contactValue = contactNumber.value;

        // Validate that contact number only contains digits and is at most 10 digits long
        if (contactValue.length > 10) {
            showError('Contact number must be at most 10 digits.');
        } else if (contactValue.length === 10 && !/^\d{10}$/.test(contactValue)) {
            showError('Contact number must be exactly 10 digits.');
        } else if (!/^\d*$/.test(contactValue)) {  // Check if the contact number contains only digits
            showError('Contact number can only contain digits (no letters or special characters).');
        } else {
            errorMessages.innerHTML = ''; // Clear any previous error messages
            contactNumber.setCustomValidity(""); // Clear custom validity
        }
    });

    // Save Button Functionality
    saveButton.addEventListener("click", () => {
        const form = document.getElementById("companyForm");

        if (form.checkValidity()) {
            alert("Company details saved!");
            form.reset();
        } else {
            alert("Please fill out all fields correctly.");
        }
    });

    // Edit Button Functionality
    editButton.addEventListener("click", () => {
        alert("Edit functionality will be implemented here.");
    });

    // Delete Button Functionality
    deleteButton.addEventListener("click", () => {
        alert("Delete functionality will be implemented here.");
    });
});
