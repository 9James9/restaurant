import createMenu from "./menu"
import contactUs from "./contact"

function loadHome(){
    const mainTitle = document.createElement('h1')
    mainTitle.textContent = "Beachside Buffet"
    document.querySelector('#content').appendChild(mainTitle)
    mainTitle.classList.add('mainTitle')
    const headContent = document.createElement('div')
    const content = document.querySelector('#content')
    content.appendChild(headContent)
    const title = document.createElement('h2')
    title.classList.add('title')
    title.textContent = "Welcome home"
    headContent.appendChild(title)
    headContent.classList.add('headcontent')
    const button1 = document.createElement('button')
    const button2 = document.createElement('button')
    const button3 = document.createElement('button')
    button1.textContent = 'Home'
    button1.classList.add('button1')
    button2.classList.add('button2')
    button3.classList.add('button3')
    button2.textContent = 'Menu'
    button3.textContent = 'Contact'
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttoncontainer')
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
        createMenu()
    })
    button3.addEventListener('click', () => {
        content.textContent = ""
        loadHome()
        contactUs()
    })
    image.src = "../dist/images/image1.png"
    let infoBox = document.createElement('div')
    infoBox.classList.add('infobox')
    content.appendChild(infoBox)
    infoBox.textContent = "Our restaurant is famously known for having some of the best Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere quam quam, a rutrum ante imperdiet venenatis. Duis faucibus lacinia justo et dapibus. Maecenas vitae dictum nunc. Praesent eu eros sed nulla pulvinar vulputate. Suspendisse non nisl faucibus, iaculis enim a, venenatis massa. Mauris porta vulputate nisi, eu volutpat velit aliquam sit amet. Nulla cursus, mi vitae ultrices lobortis, est nulla fringilla odio, vel feugiat velit orci vel erat. Maecenas feugiat ante sed ex tincidunt placerat. Morbi ut metus vel ex dignissim tempor quis sit amet mi. Aenean eget maximus orci, at porttitor odio."
    const chefDisplay = document.createElement('div')
    chefDisplay.classList.add('chefdisplay')
    infoBox.appendChild(chefDisplay)
    chefDisplay.textContent = "Meet the chefs'"
    function createChef (name,favoriteFood,picture) {
        const chefContainer = document.createElement('div')
        chefContainer.classList.add('chefcontainer')
        const chefImg = document.createElement('img')
        chefImg.setAttribute('src',picture)
        chefImg.classList.add('chefimg')
        const chefName = document.createElement('h3')
        chefName.textContent = name
        chefName.classList.add('chefname')

        const chefFavorite = document.createElement('div')
        chefFavorite.textContent = favoriteFood
        chefFavorite.classList.add('cheffavorite')

        chefDisplay.appendChild(chefContainer)
        chefContainer.appendChild(chefName)
        chefContainer.appendChild(chefImg)
        chefContainer.appendChild(chefFavorite)
    }
    createChef("John","Senior chef, favorite food: sliced watermelon","images/firstchef.png")
    createChef("Mike","Junior chef, favorite food: exactly 7 turkey sandwiches","images/secondchef.png")
}
export default loadHome

