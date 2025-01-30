let menu = document.querySelector(".menu");
let menu_icon = document.getElementById("menu");

function ToggleMenu(){
    menu.classList.toggle("active");
    if(menu_icon.className !== 'fa fa-xmark')
    menu_icon.classList.replace('fa-bars','fa-xmark');
    else
    menu_icon.classList.replace('fa-xmark','fa-bars');
}


let test = document.querySelector(".bee-container");
const beeModel = document.getElementById("bee-model");

window.addEventListener('scroll',()=>{

        const htmlScroll = window.scrollY;

        if(htmlScroll < 120){
                test.classList.remove('bottom-left');
                test.classList.remove('middle-left');
        }
        if(htmlScroll >= 120 && htmlScroll <360){
                test.classList.remove('bottom-left');
                test.classList.add('middle-left');
        }
        else if(htmlScroll >= 360 && htmlScroll <480){
                test.classList.remove('bottom-left');
                test.classList.remove('middle-left');
        }
        else if(htmlScroll >= 480 && htmlScroll <560){
                test.classList.remove('bottom-left');
                test.classList.remove('bottom-right');
                test.classList.add('middle-left');
        }
        else if(htmlScroll >= 560 && htmlScroll <800){
                test.classList.remove('bottom-left');
                test.classList.remove('middle-left');
                test.classList.add('bottom-left');
        }
        else if(htmlScroll >= 2028 && htmlScroll <2428){
                test.classList.remove('bottom-left');
                test.classList.remove('middle-left');
                test.classList.add('bottom-right');
        }
        else{
            test.classList.remove('middle-left');
            test.classList.remove('bottom-right');
            test.classList.remove('bottom-left');
        }
})

function Hi(){
    console.log(window.scrollY)
}
