function contactUs(){
    //changes title to contact us
    document.querySelector('.title').textContent = "Contact Us"
    //changes infobox to contact information
    document.querySelector('.infobox').textContent = "Phone number: 555-555-5555"
    //changes image to telephone
    document.querySelector('.image').src = "../images/telephone.png"
}
export default contactUs