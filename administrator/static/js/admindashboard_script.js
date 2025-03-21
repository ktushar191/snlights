const addProductLink = document.getElementById('addProductLink');
const addCompanyLink = document.getElementById('addCompanyLink');
const addCategoryLink = document.getElementById('addCategoryLink');
const formContainer = document.getElementById('formContainer');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    loadForm('login');
});

addProductLink.addEventListener('click', () => {
    loadForm('product');
});

addCompanyLink.addEventListener('click', () => {
    loadForm('add_company');
});

addCategoryLink.addEventListener('click', () => {
    loadForm('category');
});

function loadForm(type) {
    let formUrl = '';

    if (type === 'product') {
        formUrl = 'path/to/add_product.html';
    } else if (type === 'company') {
        formUrl = 'administrator/templates/administrator/add_company.html';
    } else if (type === 'category') {
        formUrl = 'path/to/add_category.html';
    } else if (type === 'login') {
        formUrl = 'path/to/login.html';
    }

    fetch(formUrl)
        .then(response => response.text())
        .then(html => {
            formContainer.innerHTML = html;

            if (type === 'product') {
                initializeProductForm();
            } else if (type === 'add_company') {
                initializeCompanyForm();
            } else if (type === 'category') {
                initializeCategoryForm();
            } else if (type === 'login') {
                initializeLoginForm();
            }
        })
        .catch(error => {
            console.error('Error loading form:', error);
            formContainer.innerHTML = `<div class="error">Failed to load the form. Please try again later.</div>`;
        });
}

function initializeProductForm() {
    const saveProductButton = document.getElementById('saveProductButton');
    saveProductButton.addEventListener('click', () => {
        alert('Product saved!');
    });
}

function initializeCompanyForm() {
    const saveCompanyButton = document.getElementById('saveCompanyButton');
    saveCompanyButton.addEventListener('click', () => {
        alert('Company saved!');
    });
}

function initializeCategoryForm() {
    const saveCategoryButton = document.getElementById('saveCategoryButton');
    saveCategoryButton.addEventListener('click', () => {
        alert('Category saved!');
    });
}

function initializeLoginForm() {
    const loginSubmitButton = document.getElementById('loginSubmitButton');
    loginSubmitButton.addEventListener('click', () => {
        alert('Logged in!');
    });
}
