let menu = document.querySelector(".menu");
let menu_icon = document.getElementById("menu");

function ToggleMenu(){
    menu.classList.toggle("active");
    if(menu_icon.className !== 'fa fa-xmark')
    menu_icon.classList.replace('fa-bars','fa-xmark');
    else
    menu_icon.classList.replace('fa-xmark','fa-bars');
}