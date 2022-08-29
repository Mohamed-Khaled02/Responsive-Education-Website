
// selecting element 
let nav = document.querySelector("nav");
const faq = document.querySelectorAll(".faq")
let menuNav = document.querySelector(".nav-menu")
let openBtn = document.querySelector("#open-menu")
let closBtn = document.querySelector("#close-menu")



// set function that change color of nav
window.addEventListener("scroll", function() {
    nav.classList.toggle("window-scroll", window.scrollY > 100);
})

// set function that hide and show answer
faq.forEach(faq => {
    faq.addEventListener("click", function() {
        console.log("hi");
        faq.classList.toggle("show-answer")
    })

})

// set the function that open and close menu nav 
openBtn.addEventListener("click", function() {
    // when menu not displayed
    menuNav.setAttribute('style', 'display:flex !important');
    closBtn.style.display = "inline-block"
    openBtn.style.display = "none"
})


    // function that close the menu again 
    const closeNav = function() {
        menuNav.setAttribute('style', 'display:none !important');
        closBtn.style.display = "none"
        openBtn.style.display = "inline-block"
    }
    closBtn.addEventListener("click", closeNav);