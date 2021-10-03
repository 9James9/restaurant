import helloMenu from "./menu"
import contactUs from "./contact"
function testModule(){
    console.log('hello testmodule')
}

function loadHome(){
    const mainTitle = document.createElement('h1')
    mainTitle.textContent = "My Restaurant!"
    document.querySelector('#content').appendChild(mainTitle)
    mainTitle.classList.add('mainTitle')
    const headContent = document.createElement('div')
    const content = document.querySelector('#content')
    content.appendChild(headContent)
    //headContent.textContent = 'headcontent'
    //console.log('loadhome is linked')
    const title = document.createElement('h2')
    title.classList.add('title')
    title.textContent = "Welcome to restaraunt"
    headContent.appendChild(title)
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')
    button1.textContent = 'Home'
    button1.classList.add('button1')
    button2.textContent = 'Menu'
    button3.textContent = 'Contact'
    const buttonContainer = document.createElement('div')
    headContent.appendChild(buttonContainer)
    buttonContainer.appendChild(button1)
    buttonContainer.appendChild(button2)
    buttonContainer.appendChild(button3)
    const image = document.createElement('img')
    image.classList.add('image')
    headContent.appendChild(image)
    button1.addEventListener('click', () => {
        content.textContent = ""
        loadHome()
    })
    button2.addEventListener('click', () => {
        content.textContent = ""
        loadHome()
        helloMenu()
    })
    button3.addEventListener('click', () => {
        content.textContent = ""
        loadHome()
        contactUs()
    })
    image.src = "../images/image1.png"
   
}
export {loadHome, testModule}
