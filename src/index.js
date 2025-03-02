import "./styles.css";
import createHome from "./home.js";
import createAbout from "./about.js";
import createMenu from "./menu.js";
// import odinImage from "./odin.png";---example for images
   
// const image = document.createElement("img");
// image.src = odinImage;
   
// document.body.appendChild(image);
const homePage = document.querySelector('#home')
const aboutPage = document.querySelector('#about')
const menuPage = document.querySelector('#menu')
const content = document.querySelector('.content')
let currentPage = 'home';

const toggleNav = ()=>{
   const navBtns = document.querySelectorAll('.navbtn')
   navBtns.forEach(btn => {
    if(btn.classList.contains('bold')){
        btn.classList.toggle('bold')
    }
   })
}

homePage.addEventListener('click', ()=>{
    if(currentPage === 'home') return

    content.innerHTML = ''
    createHome()
    currentPage = 'home';
    toggleNav()
    homePage.classList.toggle('bold')
})

aboutPage.addEventListener('click', ()=>{
    if(currentPage === 'about') return
    content.innerHTML = '';
    createAbout()
    currentPage = 'about';
    console.log(currentPage)
    toggleNav()
    aboutPage.classList.toggle('bold')
})

menuPage.addEventListener('click', ()=>{
    if(currentPage === 'menu') return
    content.innerHTML = '';
    createMenu()
    currentPage = 'menu';
    console.log(currentPage)
    toggleNav()
    menu.classList.toggle('bold')
})

homePage.classList.toggle('bold')

console.log(currentPage)
createHome()
