let mobileMenu = document.getElementById("mobile-menu");
let body = document.getElementById("body");
let menu = document.getElementById("menu");
let close = document.getElementById("close-menu");

const openMenu = () => {
    mobileMenu.style.display = 'block';
    body.style.display = 'none';
    menu.style.display = 'none';
    close.style.display = 'flex';
}

const closeMenu = () => {
    mobileMenu.style.display = 'none';
    body.style.display = 'block';
    menu.style.display = 'flex';
    close.style.display = 'none';
}
