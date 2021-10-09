function contactUs(){
    //changes title to contact us
    document.querySelector('.title').textContent = "Contact Us"
    //remove text from infobox
    document.querySelector('.infobox').textContent = ""
    //create box to display hours and phone number
    const hours = document.createElement('div')
    hours.innerHTML = "Phone Number: 555-555-5555<br><br>Monday: 8:00am - 11:00pm<br>Tuesday: 8:00am - 11:00pm<br>Wednesday: 7:00am - 10:00pm<br>Thursday: 10:00am - 2:00am<br>Friday: 9:00am - 3:00am<br>Saturday: 1:00pm - 3:00am<br>Sunday: 10:00am - 8:00pm"
    document.querySelector('.infobox').appendChild(hours)
    hours.classList.add('hours')
    //changes image to telephone
    document.querySelector('.image').src = "../../dist/images/telephone.png"
    document.querySelector('.image').classList.add('contactimage')
}
export default contactUs