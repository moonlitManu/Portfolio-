// typewriter effect
const names = document.querySelector("#intro h1")
let intro = "Hi, I'm Manav Dev Sharma"
let i = 0
document.addEventListener("DOMContentLoaded",()=>{
    function typewriter(){
        if(i < intro.length){
            names.textContent = names.textContent + intro[i]
            i++;
            setTimeout(typewriter, 100);
        }
    }
    typewriter()
})

// for hamburgure menu animation
const nav_list = document.querySelector("nav ul")
const menu = document.querySelector(".menu img")
const nav = document.getElementById("nav")
menu.addEventListener("click",()=>{
    nav_list.classList.toggle("active")
     if(nav_list.classList.contains("active")){
                menu.src = "assets/close.png"
                nav_list.style.display = "flex"
                nav.classList.add("height_nav")
            }else{
                menu.src = "assets/menu.png"
                nav_list.style.display = "none"
                nav.classList.remove("height_nav")
            }
})

// for sending the email by contact form
const publicKey= "Ri498PkOyMxDgRR9c"
const templateId = "template_mwi6j12"
const serviceId = "service_f9k4heo"

const form = document.getElementById("contact_form")
const nameInput = document.getElementById("name")
const email = document.getElementById("emails")
const msg = document.getElementById("msg")
const submit_btn = document.querySelector("input[type='submit']")
emailjs.init(publicKey);

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    submit_btn.value = "Just a moment..."
    const inputField = {
        name : nameInput.value,
        email : email.value,
        message : msg.value
    }
    // sending an email
    emailjs.send(serviceId,templateId,inputField).then(()=>{
        submit_btn.value = "Thank you, I will contact you soon."
        nameInput.value = ""
        email.value = ""
        msg.value = ""

    }, (error)=>{
        console.log(error)
        submit_btn.value = "Try again later"
        submit_btn.style.backgroundColor = "red"
    })
})