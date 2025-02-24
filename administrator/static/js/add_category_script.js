let isEditing = false;

function saveCategory() {
  const categoryName = document.getElementById('categoryName').value;
  if (categoryName === "") {
    alert("Please enter a category name.");
    return;
  }
  
  alert(`Category '${categoryName}' saved successfully!`);
  clearForm();
}

function editCategory() {
  const categoryName = document.getElementById('categoryName').value;
  if (categoryName === "") {
    alert("Please enter a category name to edit.");
    return;
  }

  alert(`Category '${categoryName}' updated successfully!`);
  clearForm();
}

function clearForm() {
  document.getElementById('categoryForm').reset();
  document.getElementById('saveBtn').style.display = 'inline-block';
  document.getElementById('editBtn').style.display = 'none';
}

function setEditingMode() {
  isEditing = true;
  document.getElementById('saveBtn').style.display = 'none';
  document.getElementById('editBtn').style.display = 'inline-block';
}
