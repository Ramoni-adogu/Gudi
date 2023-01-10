const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-two');
const checkbox = document.getElementById('checkbox');

form.addEventListener('submit', e => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    // get the values from the inputs
    const firstnameValue = firstname.value.trim();
    const lastnameValue = lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();


    if (firstnameValue === '') {
        //show error
        //add error class
        setErrorFor(firstname, 'First Name cannot be blank');
    } else {
        //add success class
        setSuccessFor(firstname);
    }

    if (lastnameValue === '') {
        setErrorFor(lastname, 'Last Name cannot be blank');
    } else {
        setSuccessFor(lastname);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email is required');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Please confirm your password');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
    } else {
        setSuccessFor(password2);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; // .form-control
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function myFunction() {
    alert("Strong passwords must contain at least 8 characters, including numeric, alphabetic and special characters.");
}