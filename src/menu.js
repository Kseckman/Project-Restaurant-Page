const createMenu = () =>{
    const content = document.querySelector('.content')
    const head = document.createElement('h2')
    const div = document.createElement('div')
    const itemName = document.createElement('h2')
    const description = document.createElement('p')
    const price = document.createElement('p')

    head.classList = 'header'
    div.classList = 'menu'
    // itemName.classList = 'paragraph'
    // description.classList = 'paragraph'
    // price.classList = 'paragraph'

    
    head.textContent ='MENU'
    itemName.textContent = 'Steaks'
    description.textContent = 'ribeye comes with choice of two sides and a salad'
    price.textContent = '19.64'



    content.appendChild(head)
    div.appendChild(itemName)
    div.appendChild(description)
    div.appendChild(price)
    content.appendChild(div)
}


export default createMenu