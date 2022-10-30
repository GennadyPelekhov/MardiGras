const firstNameError = document.getElementById('fname-error');
const lastNameError = document.getElementById('lname-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('msg-error');
const submitError = document.getElementById('submit-error');
let intervalId;

function validateName() {
    const firstName = document.getElementById('fname').value;
    const regName = /^[a-zA-Z ]{2,30}$/;

    if (firstName == '') {
        firstNameError.innerHTML = 'Fist Name is required';
        return false;
    }
    if (!firstName.match(regName)) {
        firstNameError.innerHTML = 'Please enter your First Name properly';
        return false;

    }
    firstNameError.innerHTML = '';
    return true;
}
function validateLastName() {
    const lastName = document.getElementById('lname').value;
    const regName = /^[a-zA-Z ]{2,30}$/;

    if (lastName == '') {
        lastNameError.innerHTML = 'Last Name is required';
        return false;
    }

    if (!lastName.match(regName)) {
        lastNameError.innerHTML = 'Please enter your Last Name properly';
        return false;
    }
    lastNameError.innerHTML = '';
    return true;
}
function validateEmail() {
    const email = document.getElementById('email').value;
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if (email == '') {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(regEmail)) {
        emailError.innerHTML = 'Please enter your Email properly';
        return false;
    }
    emailError.innerHTML = '';
    return true;

}

function validateMessage() {
    const message = document.getElementById('msg').value;
    const required = 25;
    let left = required - message.length;
    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '';
    return true;
}

function validateForm() {
    clearInterval(intervalId);

    if (!validateName() || !validateLastName() || !validateEmail() || !validateMessage()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fill the required fields(marked with "*") before sending';
        intervalId = setTimeout(() => {
            submitError.style.display = 'none';
        }, 5000);
        return false;
    }

}