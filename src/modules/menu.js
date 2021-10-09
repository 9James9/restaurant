
import loadHome from "./homepage"
function createMenu(){
    document.querySelector('#content').textContent = ""
    
    //loads the home page
    loadHome()
    //remove the homepage info box
    document.querySelector('.infobox').textContent = ""
    //remove the homepage image
    document.querySelector('.image').src = ""
    //change sub title
    document.querySelector('.title').textContent = "Our Menu"
    //factory function to create menu items
    const menuContainer = document.createElement('div')
    document.querySelector('#content').appendChild(menuContainer)
    menuContainer.textContent = ""
    menuContainer.classList.add('menucontainer')
    function createMenuItems (title,image,description,price){
        const container = document.createElement('div')
        container.classList.add('flex')
        const img = document.createElement('img')
        img.setAttribute('src',image)
        img.classList.add('foodimg')

        const foodTitle = document.createElement('h3')
        foodTitle.textContent = title
        foodTitle.classList.add('foodtitle')

        const foodDescription = document.createElement('p')
        foodDescription.textContent = description
        foodDescription.classList.add('fooddescription')

        const foodPrice = document.createElement('p')
        foodPrice.textContent = price
        foodPrice.classList.add('foodprice')

        //append container to menuContainer
        menuContainer.appendChild(container)
        //append title to container
        container.appendChild(foodTitle)
        //append image to title
        foodTitle.appendChild(img)
        //append description to title
        foodTitle.appendChild(foodDescription)
        //append price to description
        foodDescription.appendChild(foodPrice)
    }
    createMenuItems("Watermelon","images/watermelon.png","Fresh watermelon", "$12.99")
    createMenuItems("Exactly 7 Turkey Sandwiches","../../dist/images/turkeysandwiches.png","Some delicious turkey sandwiches for you and your friends!", "$84.29")
    createMenuItems("Farm-raised Salmon","../../dist/images/salmon.png","Perfectly cooked salmon", "$27.39")
    createMenuItems("Bacon","../../dist/images/bacon.png","All you can eat bacon", "$50.00")
}
export default createMenu