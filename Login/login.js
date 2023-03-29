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

const homeNav = document.getElementById('currentNav')
const characterNav = document.getElementById('navChar')
const slctr = document.getElementById('selector')
const mapsNav = document.getElementById('navMaps')
const registNav = document.getElementById('navReg')
const aboutNav = document.getElementById('navAbout');
const loginNav = document.querySelector('.login');

slctr.style.transition = ".5s";
characterNav.addEventListener("mouseenter", () => {
    slctr.style.opacity = "1"
    slctr.style.marginRight = "43%"
    slctr.style.width = "25%"
    characterNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    characterNav.style.color = "#FFFFFF";
})

mapsNav.addEventListener("mouseenter", () => {
    slctr.style.opacity = "1"
    slctr.style.marginRight = "-2.5%"
    slctr.style.width = "13%"
    mapsNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    mapsNav.style.color = "#FFFFFF";
})

registNav.addEventListener("mouseenter", () => {
    slctr.style.opacity = "1"
    slctr.style.marginRight = "-44.5%"
    slctr.style.width = "19%"
    registNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    registNav.style.color = "#FFFFFF";
})

aboutNav.addEventListener("mouseenter", () => {
    slctr.style.opacity = "1"
    slctr.style.marginRight = "-89%"
    slctr.style.width = "15%"
    aboutNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    aboutNav.style.color = "#FFFFFF";
})

homeNav.addEventListener("mouseenter", () => {
    slctr.style.opacity = "1"
    slctr.style.marginRight = "90%"
    slctr.style.width = "13%"
    homeNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    homeNav.style.color = "#FFFFFF";
})


const reset = x => {

    if(x == loginNav){
        return
    }
    x.style.color = "#CACACA";
    x.style.textShadow = 'none';
    x.style.boxShadow = 'none';
    slctr.style.opacity = "0"
}

document.querySelectorAll('.navEl').forEach(x => {
    x.addEventListener('mouseleave', () => {

        reset(x);
    })
})




// Hamburger menu
const hamburgerMenuBtn = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.containerHamMenu')

hamburgerMenuBtn.addEventListener('click', () => {
    if(hamburgerMenuBtn.classList.contains('activeHamburger')){
        hamburgerMenuBtn.classList.remove('activeHamburger')
        hamburgerMenu.style.right = '-200px'

    }else{
        hamburgerMenuBtn.classList.add('activeHamburger')
        hamburgerMenu.style.right = '-16px'
        
    }
})



