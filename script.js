const burger = document.querySelector(".hamburger");
const iconBurger = document.querySelector(".fa-bars");
const iconCross = document.querySelector(".fa-times");
const nav = document.querySelector(".navigation");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("on");
    iconCross.classList.toggle("on");
    nav.classList.toggle("on");
})