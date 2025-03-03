import image from "./imgs/jason-leung-poI7DelFiVA-unsplash.jpg"

const createHome = ()=>{
    const content = document.querySelector('.content')
    const head = document.createElement('h2')
    const par = document.createElement('p')
    const hours = document.createElement('p')
    const location = document.createElement('p')
    const img = document.createElement('img')

    img.src = image
    head.classList = 'header'
    par.classList = 'paragraph'
    hours.classList = 'paragraph'
    location.classList = 'paragraph'
    img.classList = 'background-image'
    
    head.textContent ='Odins Bar and Grill'
    par.textContent = 'Meat Mead and NPM'
    hours.textContent = 'Open Monday through sat 9am to 10pm'
    location.textContent = 'Find us past yggdrasil and across the bridge'

    content.appendChild(head)
    content.appendChild(par)
    content.appendChild(hours)
    content.appendChild(location)
    content.appendChild(img)
}

export default createHome