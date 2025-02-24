document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("saveButton");
    const editButton = document.getElementById("editButton");
    const deleteButton = document.getElementById("deleteButton");
    const contactNumber = document.getElementById("contact_number");

    // Contact number validation on input
    contactNumber.addEventListener("input", () => {
        if (contactNumber.value.length !== 10) {
            contactNumber.setCustomValidity("Contact number must be 10 digits");
        } else {
            contactNumber.setCustomValidity("");
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
