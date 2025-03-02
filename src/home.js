{/* <h2>Content</h2>
<p>words about page</p>
<button>btn1</button>
<button>btn2</button> */}
const createHome = ()=>{
    const content = document.querySelector('.content')
    const head = document.createElement('h2')
    const par = document.createElement('p')
    const btn1 = document.createElement('button')
    const btn2 = document.createElement('button')
    
    head.textContent ='Content'
    par.textContent = 'about page'
    btn1.textContent = 'btn one'
    btn2.textContent = 'btn two'

    content.appendChild(head)
    content.appendChild(par)
    content.appendChild(btn1)
    content.appendChild(btn2)
}

export default createHome