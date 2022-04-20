/* responsive nav menu */
let show = true;

const navBar = document.querySelector(".nav-bar")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("on", show)
    show = !show;
})
