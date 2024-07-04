
let searchBox = document.querySelector('.search-box');
let lupa = document.querySelector('.lupa-search');
let closeButton = document.querySelector('.close-button');
const navbar = document.querySelector(".navbar");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', () => {
    navbar.classList.toggle("show-menu");
})

lupa.addEventListener('click', ()=> {
    searchBox.classList.add('ativar');
})

closeButton.addEventListener('click', ()=> {
    searchBox.classList.remove('ativar');
})