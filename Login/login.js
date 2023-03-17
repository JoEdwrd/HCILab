const form = document.getElementById('form');
const inputID = document.getElementById('inputID');
const password = document.getElementById('password');

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
    const inputIDValue = inputID.value.trim();
    const passwordValue = password.value.trim();

    if (inputIDValue === ''){
        setError(inputID, "Game ID is required");
    } else {
        setSuccess(inputID);
    }

    if (passwordValue === ''){
        setError(password, "Password is required");
    } else if (passwordValue.length < 8){
        setError(password, "Minimum length is 8");
    } else {
        setSuccess(password);
    }

};