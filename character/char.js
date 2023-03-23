// Navigation
const homeNav = document.getElementById('currentNav')
const characterNav = document.getElementById('navChar')
const slctr = document.getElementById('selector')
const mapsNav = document.getElementById('navMaps')
const registNav = document.getElementById('navReg')
const aboutNav = document.getElementById('navAbout');
const loginNav = document.querySelector('.login');

slctr.style.transition = ".5s";
aboutNav.addEventListener("mouseenter", () => {
    slctr.style.marginRight = '-89.5%'
    slctr.style.width = "15%"
    aboutNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    aboutNav.style.color = "#FFFFFF";
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

homeNav.addEventListener("mouseenter", () => {
    slctr.style.marginRight = "91%"
    slctr.style.width = "13%"
    homeNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
    homeNav.style.color = "#FFFFFF";
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
    if(!(x == characterNav)){
        x.style.color = "#CACACA";
        slctr.style.marginRight = "43%"
        slctr.style.width = "25%"
        x.style.textShadow = 'none';
        x.style.boxShadow = 'none';
    } 
}

document.querySelectorAll('.navEl').forEach(x => {
    x.addEventListener('mouseleave', () => {

        characterNav.style.textShadow = '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)';
        slctr.style.marginRight = "43%"
        slctr.style.width = "25%"
        characterNav.style.color = "#FFFFFF";
        reset(x);
    })
})




// Navigation Char Type
const mondstadt = document.querySelector('.mondstadtNav')
const liyue = document.querySelector('.liyueNav')
const sumeru = document.querySelector('.sumeruNav')
const inazuma = document.querySelector('.inazumaNav')
const slctrNavType = document.querySelector('#selectorCharType')
let activeCharType = document.querySelector('.activeCharType')

slctrNavType.style.transition = ".5s";

function EListen(x){
    x.style.color = "#FFFFFF"
    if(x == mondstadt){
        slctrNavType.style.marginLeft = '19.4%';
        slctrNavType.style.width =  '11%';
    }else if(x == liyue){
        slctrNavType.style.marginLeft = '38.9%';
        slctrNavType.style.width =  '7%';
    }else if(x == sumeru){
        slctrNavType.style.marginLeft = '54.5%';
        slctrNavType.style.width =  '8.5%';
    }else if(x == inazuma){
        slctrNavType.style.marginLeft = '71.75%';
        slctrNavType.style.width =  '9%';
    }
}

let resetCharType = (x, y) => {
    if(x != y) x.style.color = "#ffffff93";
    
    if(y == mondstadt){
        slctrNavType.style.marginLeft = '19.4%';
        slctrNavType.style.width =  '11%';
    }else if(y == liyue){
        slctrNavType.style.marginLeft = '38.9%';
        slctrNavType.style.width =  '7%';
    }else if(y == sumeru){
        slctrNavType.style.marginLeft = '54.5%';
        slctrNavType.style.width =  '8.5%';
    }else if(y == inazuma){
        slctrNavType.style.marginLeft = '71.75%';
        slctrNavType.style.width =  '9%';
    }
}

let check = 0

document.querySelectorAll('.navCharType').forEach(x => {
    x.addEventListener('mouseleave', () => {
        // slctr.style.marginRight = "43%"
        // slctr.style.width = "25%"
        // mondstadt.style.color = "#FFFFFF";
        activeCharType = document.querySelector('.activeCharType')
        if(check == 0) resetCharType(x, activeCharType);
        
    })

    x.addEventListener('click', () => {
        EListen(x)
        
        activeCharType = document.querySelector('.activeCharType')
        resetCharType(activeCharType, x)
        activeCharType.classList.remove('activeCharType')
        x.classList.add('activeCharType')
        
        check = 1
    })

    x.addEventListener('mouseenter', () => {
        EListen(x)
        check = 0
    })
})


// Click Carrousel
const prev = document.querySelector('.backIcon')
const next = document.querySelector('.nextIcon')
let currSlides = document.querySelector('.mondstadtList')
activeChar = document.querySelector('.activeChar')

mondstadt.addEventListener('click', () => {
    activeChar = document.querySelector('.activeChar')
    currSlides = document.querySelector(".mondstadtList");
    activeChar.classList.remove('activeChar')
    currSlides.children[0].classList.add('activeChar')

})

liyue.addEventListener('click', () => {
    activeChar = document.querySelector('.activeChar')
    currSlides = document.querySelector(".liyueList")
    activeChar.classList.remove('activeChar')
    currSlides.children[0].classList.add('activeChar')
})

sumeru.addEventListener('click', () => {
    activeChar = document.querySelector('.activeChar')
    currSlides = document.querySelector(".sumeruList")
    activeChar.classList.remove('activeChar')
    currSlides.children[0].classList.add('activeChar')
})

inazuma.addEventListener('click', () => {
    activeChar = document.querySelector('.activeChar')
    currSlides = document.querySelector(".inazumaList")
    activeChar.classList.remove('activeChar')
    currSlides.children[0].classList.add('activeChar')
})

next.addEventListener("click", () => {
    activeChar = document.querySelector('.activeChar')
    let index = [...currSlides.children].indexOf(activeChar) + 1

    if(index > currSlides.children.length-1) index = 0

    activeChar.classList.remove('activeChar')
    currSlides.children[index].classList.add('activeChar')
})

prev.addEventListener("click", () => {
    activeChar = document.querySelector('.activeChar')
    let index = [...currSlides.children].indexOf(activeChar) - 1

    if(index < 0) index = currSlides.children.length - 1

    activeChar.classList.remove('activeChar')
    currSlides.children[index].classList.add('activeChar')
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

