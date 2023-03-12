let menu_close;
let menu;


window.onload = function() {
     menu_close = document.querySelector(".menu-close");
     menu = document.querySelector("#menu");
}

function closeMenu() {
    menu.style.transform= "translateX(400px)";
}
function openMenu() {
    menu.style.transform= "translateX(-400px)";
}