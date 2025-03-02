 
const createAbout = () =>{
    const content = document.querySelector('.content')
    const par = document.createElement('p')
    par.textContent ='About page'
    content.appendChild(par)
}

export default createAbout