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

registNav.addEventListener("mouseenter", () => {
    slctr.style.marginRight = "-44.5%"
    slctr.style.width = "19%"
    registNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    registNav.style.color = "#FFFFFF";
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
    slctr.style.marginRight = '90%'
    slctr.style.width = "13%"
    x.style.textShadow = 'none';
    x.style.boxShadow = 'none';
    
}

document.querySelectorAll('.navEl').forEach(x => {
    x.addEventListener('mouseleave', () => {

        homeNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
        slctr.style.marginRight = '90%'
        slctr.style.width = "13%"
        homeNav.style.color = "#FFFFFF";
        reset(x);
    })
})

/*
  This JS is from the following project:
  https://github.com/bushblade/Full-Screen-Touch-Slider
*/

// const slider = document.querySelector('.newsCarrousel'),
//   slides = Array.from(document.querySelectorAll('.slide'))

// let isDragging = false,
//   startPos = 0,
//   currentTranslate = 0,
//   prevTranslate = 0,
//   animationID = 0,
//   currentIndex = 0

// slides.forEach((slide, index) => {

//   slide.addEventListener('dragstart', (e) => e.preventDefault())

//   // Touch events
//   slide.addEventListener('touchstart', touchStart(index))
//   slide.addEventListener('touchend', touchEnd)
//   slide.addEventListener('touchmove', touchMove)
  
//   windowWidth320.addEventListener(animationWindowWidth)
//   animationWindowWidth(windowWidth320)


//   // Mouse events
//   slide.addEventListener('mousedown', touchStart(index))
//   slide.addEventListener('mouseup', touchEnd)
//   slide.addEventListener('mouseleave', touchEnd)
//   slide.addEventListener('mousemove', touchMove)
// })

// // Disable context menu
// window.oncontextmenu = function (event) {
//   event.preventDefault()
//   event.stopPropagation()
//   return false
// }

// function touchStart(index) {
//   return function (event) {
//     currentIndex = index
//     startPos = getPositionX(event)
//     isDragging = true

//     // https://css-tricks.com/using-requestanimationframe/
//     animationID = requestAnimationFrame(animation)
//     slider.classList.add('grabbing')
//   }
// }

// function touchEnd() {
//   isDragging = false
//   cancelAnimationFrame(animationID)

//   const movedBy = currentTranslate - prevTranslate

//   if (movedBy < -250 && currentIndex < slides.length - 1) currentIndex += 1

//   if (movedBy > 250 && currentIndex > 0) currentIndex -= 1

//   setPositionByIndex(currentIndex)

//   slider.classList.remove('grabbing')
// }

// function touchMove(event) {
//   if (isDragging) {
//     const currentPosition = getPositionX(event)
//     currentTranslate = prevTranslate + currentPosition - startPos
//   }
// }

// function getPositionX(event) {
//   return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX
// }

// function animation() {
//   setSliderPosition()
//   if (isDragging) requestAnimationFrame(animation)
// }

// function setSliderPosition() {
//   slider.style.transform = `translateX(${currentTranslate}px)`
// }

// function setPositionByIndex(idx) {
  
//     // if(idx == 0)currentTranslate = currentIndex * -window.innerWidth
//     // else if(idx == 1) currentTranslate = currentIndex * -window.innerWidth + 465
//     // else if(idx == 2) currentTranslate = currentIndex * -window.innerWidth + 930
//     // else if(idx == 3) currentTranslate = currentIndex * -window.innerWidth + 1395.5
//     // else if(idx == 4) currentTranslate = currentIndex * -window.innerWidth + 1860

//     if(idx == 0)currentTranslate = currentIndex * -window.innerWidth
//     else if(idx == 1) currentTranslate = currentIndex * -window.innerWidth + 660
//     else if(idx == 2) currentTranslate = currentIndex * -window.innerWidth + 1310
//     else if(idx == 3) currentTranslate = currentIndex * -window.innerWidth + 1967
//     else if(idx == 4) currentTranslate = currentIndex * -window.innerWidth + 2620
  
//   prevTranslate = currentTranslate
//   setSliderPosition()
// }

// Event Listener Based on Window Width

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
        hamburgerMenu.style.right = '-200px'

    }else{
        hamburgerMenuBtn.classList.add('activeHamburger')
        hamburgerMenu.style.right = '-16px'
        
    }
})



