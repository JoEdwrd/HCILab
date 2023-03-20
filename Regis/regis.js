const form = document.getElementById('form');
const inputID = document.getElementById('inputID');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirm');
const age = document.getElementById('age');
const agreement = document.getElementById('agreement');
const divError = document.getElementById('divError');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const setError = (element, message) => {
    const inputbox = element.parentElement;
    const errorDisplay = inputbox.querySelector('.error');
    
    errorDisplay.innerText = message;
    inputbox.classList.add('error');
    inputbox.classList.remove('success');
}

const setSuccess = element => {
    const inputbox = element.parentElement;
    const errorDisplay = inputbox.querySelector('.error');

    errorDisplay.innerText = '';
    inputbox.classList.add('success');
    inputbox.classList.remove('error');
}

const validateInputs = () => {
    const inputIDValue =inputID.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const confirmValue = confirmPass.value.trim();
    const ageValue = age.value.trim();

    var tempText = ""

    if (inputIDValue === ''){
        setError(inputID, "Game ID is required");
        tempText = "id"
    } else {
        setSuccess(inputID);
    }

    if (emailValue === ''){
        setError(email, "Email is required");
        tempText += "email"
    } else if (!emailValue.includes('@gmail.com')){
        setError(email, "Must includes @gmail.com");
        tempText += "email"
    } else {
        setSuccess(email);
    }

    if (passwordValue === ''){
        setError(password, "Password is required");
        tempText += "password"
    } else if (passwordValue.length < 8){
        setError(password, "Minimum length is 8");
        tempText += "password"
    } else {
        setSuccess(password);
    }

    if (confirmValue === ''){
        setError(confirmPass, "Password is required");
        tempText += "confirm"
    } else if (confirmValue.length < 8){
        setError(confirmPass, "Minimum length is 8");
        tempText += "confirm"
    }else if (passwordValue != confirmValue){
        setError(confirmPass,"Password doesn't match");
        tempText += "confirm"
    } else {
        setSuccess(confirmPass);
    }

    if (ageValue === ''){
        setError(age, "Age is required");
        tempText += "age"
    } else if (ageValue < 8){
        setError(age, "Minimum age is 12 years old");
        tempText += "age"
    } else {
        setSuccess(age);
    }

    const agreementBox = agreement.checked

    if (!agreementBox){
        setError(agreement, "Agree");
        tempText += "agree"
    } else {
        setSuccess(agreement);
    }

    // if (tempText == ''){
    //     alert("Registered!");
    // }

    // divError.innerHTML = tempText;

};

// function toggle(){
//     var blur = document.getElementById('blur');
//     blur.classList.toggle('active');
//     var popup = document.getElementById('popup');
//     popup.classList.toggle('active');
// }