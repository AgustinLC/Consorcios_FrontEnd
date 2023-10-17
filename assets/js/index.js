const header = document.getElementById("header");
const logoLight = document.querySelector(".logo-img.light");
const logoDark = document.querySelector(".logo-img.dark");
const body = document.getElementById("container__all");
const nav = document.getElementById("nav");

const mostrar_menu = () =>{
    body.classList.toggle('move_content');
    header.classList.toggle('move_content');
    nav.classList.toggle('move_nav');
}
document.getElementById("btn_menu").addEventListener("click", mostrar_menu);


const headerFunction = () =>{
    let scroll = document.documentElement.scrollTop;   
    if (scroll > 20) {
        header.classList.add('nav_mod');
        logoLight.style.display = 'none';
        logoDark.style.display = 'block';
    } else if (scroll < 20) {
        header.classList.remove('nav_mod');
        logoLight.style.display = 'block';
        logoDark.style.display = 'none';
    }
}
window.onscroll = headerFunction;


const resizeWindow = ()=>{
    window.addEventListener("resize", function () {
        if (window.innerWidth > 760) {
            body.classList.remove('move_content');
            header.classList.remove('move_content');
            nav.classList.remove('move_nav');
        }
    });
}

