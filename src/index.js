import "./styles.css";
import createHome from "./home.js";
import createAbout from "./about.js";
import createMenu from "./menu.js";

const homePage = document.querySelector('#home')
const aboutPage = document.querySelector('#about')
const menuPage = document.querySelector('#menu')
const content = document.querySelector('.content')

const toggleNav = ()=>{
   const navBtns = document.querySelectorAll('.navbtn')
   navBtns.forEach(btn => {
    if(btn.classList.contains('bold')){
        btn.classList.toggle('bold')
    }
   })
}

homePage.addEventListener('click', ()=>{
    content.innerHTML = '';
    createHome()
    toggleNav()
    home.classList.toggle('bold')
})

aboutPage.addEventListener('click', ()=>{
    content.innerHTML = '';
    createAbout()   
    toggleNav()
    about.classList.toggle('bold')
})

menuPage.addEventListener('click', ()=>{
    content.innerHTML = '';
    createMenu()    
    toggleNav()
    menu.classList.toggle('bold')
})

homePage.classList.toggle('bold')
createHome()
