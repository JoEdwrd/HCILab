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

    if (inputIDValue === ''){
        setError(inputID, "Game ID is required");
    } else {
        setSuccess(inputID);
    }

    if (emailValue === ''){
        setError(email, "Email is required");
    } else if (!emailValue.includes('@gmail.com')){
        setError(email, "Must includes @gmail.com");
    } else {
        setSuccess(email);
    }

    if (passwordValue === ''){
        setError(password, "Password is required");
    } else if (passwordValue.length < 8){
        setError(password, "Minimum length is 8");
    } else {
        setSuccess(password);
    }

    if (confirmValue === ''){
        setError(confirmPass, "Password is required");
    } else if (confirmValue.length < 8){
        setError(confirmPass, "Minimum length is 8");
    }else if (passwordValue != confirmValue){
        setError(confirmPass,"Password doesn't match");
    } else {
        setSuccess(confirmPass);
    }

    if (ageValue === ''){
        setError(age, "Age is required");
    } else if (ageValue < 8){
        setError(age, "Minimum age is 12 years old");
    } else {
        setSuccess(age);
    }

    const agreementBox = agreement.checked

    if (!agreementBox){
        setError(agreement, "Agree");
    } else {
        setSuccess(agreement);
    }

};

const homeNav = document.getElementById('currentNav')
const characterNav = document.getElementById('navChar')
const slctr = document.getElementById('selector')
const mapsNav = document.getElementById('navMaps')
const registNav = document.getElementById('navReg')
const aboutNav = document.getElementById('navAbout');
const loginNav = document.querySelector('.login');

slctr.style.transition = ".5s";
characterNav.addEventListener("mouseenter", () => {
    slctr.style.marginRight = "43%"
    slctr.style.width = "25%"
    characterNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    characterNav.style.color = "#FFFFFF";
})

mapsNav.addEventListener("mouseenter", () => {
    slctr.style.marginRight = "-2.5%"
    slctr.style.width = "13%"
    mapsNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    mapsNav.style.color = "#FFFFFF";
})

homeNav.addEventListener("mouseenter", () => {
    slctr.style.marginRight = "90%"
    slctr.style.width = "13%"
    homeNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    homeNav.style.color = "#FFFFFF";
})

aboutNav.addEventListener("mouseenter", () => {
    slctr.style.marginRight = "-89%"
    slctr.style.width = "15%"
    aboutNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    aboutNav.style.color = "#FFFFFF";
})

loginNav.addEventListener("mouseenter", () => {
    loginNav.style.backgroundColor = '#FFFFFF';
    loginNav.style.boxShadow = '0px 0px 4px 4px rgba(255, 255, 255, 0.3)';
    document.querySelector('.textLoginImg').style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
})

const reset = x => {

    if(x == loginNav){
        x.style.backgroundColor = 'rgba(190, 189, 189, 0.3)';
        document.querySelector('.textLoginImg').style.textShadow = 'none';
    }
    x.style.color = "#CACACA";
    slctr.style.marginRight = '-44.5%'
    slctr.style.width = "19%"
    x.style.textShadow = 'none';
    x.style.boxShadow = 'none';
    
}

document.querySelectorAll('.navEl').forEach(x => {
    x.addEventListener('mouseleave', () => {

        registNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
        slctr.style.marginRight = '-44.5%'
        slctr.style.width = "19%"
        registNav.style.color = "#FFFFFF";
        reset(x);
    })
})


// Event Listener Icon Click
const prev = document.querySelector('.backIcon')
const next = document.querySelector('.nextIcon')
const slides = document.querySelectorAll('.slide')

let idx = 0

next.addEventListener('click', (e) => {
  e.preventDefault()
  slides[idx].style.opacity = '0'
  idx += 1
  if(idx > slides.length - 1) idx = 0
  else if(idx < 0) idx = slides.length - 1
  slides[idx].style.opacity = '1'

})

prev.addEventListener('click', (e) => {
  e.preventDefault()
  slides[idx].style.opacity = '0'
  idx -= 1
  if(idx > slides.length - 1) idx = 0
  else if(idx < 0) idx = slides.length - 1
  slides[idx].style.opacity = '1'

})

// Hamburger menu
const hamburgerMenuBtn = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.containerHamMenu')

hamburgerMenuBtn.addEventListener('click', () => {
    if(hamburgerMenuBtn.classList.contains('activeHamburger')){
        hamburgerMenuBtn.classList.remove('activeHamburger')
        hamburgerMenu.style.right = '-230px'

    }else{
        hamburgerMenuBtn.classList.add('activeHamburger')
        hamburgerMenu.style.right = '-16px'
        
    }
})



