 
const createAbout = () =>{
    const content = document.querySelector('.content')
    const head = document.createElement('h2')
    const div = document.createElement('div')
    const email = document.createElement('h2')
    const address = document.createElement('p')

    head.classList = 'header'
    div.classList = 'menu'
    // itemName.classList = 'paragraph'
    // description.classList = 'paragraph'
    // price.classList = 'paragraph'

    
    head.textContent ='Contact us'
    email.textContent = 'Email address: pretendEmail@anEmail.com'
    address.textContent = 'Address: 1234 valhalla drive'



    content.appendChild(head)
    div.appendChild(email)
    div.appendChild(address)

    content.appendChild(div)
}

export default createAbout