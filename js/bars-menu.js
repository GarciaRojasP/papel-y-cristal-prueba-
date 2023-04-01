document.querySelector(".bars-menu").addEventListener("click", animateBars);

const linea1_bar = document.querySelector(".bars-menu__linea1");
const linea2_bar = document.querySelector(".bars-menu__linea2");
const linea3_bar = document.querySelector(".bars-menu__linea3");
const menu = document.querySelector(".menu");

function animateBars(){
    linea1_bar.classList.toggle("bars-menu__linea1--active");
    linea2_bar.classList.toggle("bars-menu__linea2--active");
    linea3_bar.classList.toggle("bars-menu__linea3--active");

    menu.classList.toggle("menu--active");
}
