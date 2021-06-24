let navLink = document.querySelectorAll(".nav-link") 
let navbarToggler = document.querySelector(".navbar-toggler")

navLink.forEach((i)=>{
    i.addEventListener("click",()=>{
        navbarToggler.click()
    })
})

