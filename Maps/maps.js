function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
}

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

homeNav.addEventListener("mouseenter", () => {
    slctr.style.marginRight = "90%"
    slctr.style.width = "13%"
    homeNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    homeNav.style.color = "#FFFFFF";
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
    slctr.style.marginRight = '-2.5%'
    slctr.style.width = "13%"
    x.style.textShadow = 'none';
    x.style.boxShadow = 'none';
    
}

document.querySelectorAll('.navEl').forEach(x => {
    x.addEventListener('mouseleave', () => {

        mapsNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
        slctr.style.marginRight = '-2.5%'
        slctr.style.width = "13%"
        mapsNav.style.color = "#FFFFFF";
        reset(x);
    })
})



// Event Listener Based on Window Width



// Hamburger menu
const hamburgerMenuBtn = document.querySelector('.hamburger')
const hamburgerMenu = document.querySelector('.containerHamMenu')
console.log(hamburgerMenuBtn)
hamburgerMenuBtn.addEventListener('click', () => {
    if(hamburgerMenuBtn.classList.contains('activeHamburger')){
        hamburgerMenuBtn.classList.remove('activeHamburger')
        hamburgerMenu.style.right = '-230px'

    }else{
        hamburgerMenuBtn.classList.add('activeHamburger')
        hamburgerMenuBtn.style.color = 'red'
        hamburgerMenu.style.right = '-16px'
        
    }
})



