// DOM Elements
const emailOption = document.getElementById('emailOption');
const phoneOption = document.getElementById('phoneOption');
const registrationForm = document.getElementById('registrationForm');
const emailFields = document.getElementById('emailFields');
const phoneFields = document.getElementById('phoneFields');
const privacyAgreement = document.getElementById('privacyAgreement');
const registerButton = document.getElementById('registerButton');

// Show email registration form
emailOption.addEventListener('click', () => {
    registrationForm.style.display = 'block';
    emailFields.style.display = 'block';
    phoneFields.style.display = 'none';
});

// Show phone registration form
phoneOption.addEventListener('click', () => {
    registrationForm.style.display = 'block';
    emailFields.style.display = 'none';
    phoneFields.style.display = 'block';
});

// Enable Register button if privacy agreement is checked
privacyAgreement.addEventListener('change', () => {
    registerButton.disabled = !privacyAgreement.checked;
});
