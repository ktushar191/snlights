// Add Material Type field dynamically
document.getElementById('add-material').addEventListener('click', function() {
    const materialTypesDiv = document.getElementById('material-types');
    const newMaterialInput = document.createElement('input');
    newMaterialInput.type = 'text';
    newMaterialInput.name = 'material-type[]';
    newMaterialInput.placeholder = 'Enter material type';
    materialTypesDiv.appendChild(newMaterialInput);
});

// Add Additional Field dynamically
function addAdditionalField() {
    const additionalFieldsSection = document.getElementById('additional-fields');

    // Create the container for the new field
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('additional-field');

    // Create an input for the field name
    const inputLabel = document.createElement('input');
    inputLabel.type = 'text';
    inputLabel.name = 'additional-field-name[]';
    inputLabel.placeholder = 'Field Name';

    // Create an input for the field value
    const inputValue = document.createElement('input');
    inputValue.type = 'text';
    inputValue.name = 'additional-field-value[]';
    inputValue.placeholder = 'Field Value';

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-btn');
    deleteBtn.innerText = 'Delete';

    // Add delete functionality to the delete button
    deleteBtn.addEventListener('click', function() {
        additionalFieldsSection.removeChild(fieldDiv);
    });

    // Append inputs and delete button to the field div
    fieldDiv.appendChild(inputLabel);
    fieldDiv.appendChild(inputValue);
    fieldDiv.appendChild(deleteBtn);

    // Append the field div to the additional fields section
    additionalFieldsSection.appendChild(fieldDiv);
}

// Form submission handler
document.getElementById('product-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    // Log form data to the console for now (could be sent to a server)
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    alert("Form Submitted!");
});
