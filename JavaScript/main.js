///////////////////////////////////////
//Dark mode

const container = document.querySelector('.container');
const darkMode = document.querySelector('.dark-mode');
const headerLogo = document.querySelector('.header__logo');
const headerLogo2 = document.querySelector('.header__logo-2');
const body = document.querySelector('body');


darkMode.addEventListener('click', (e) =>{

    darkMode.classList.toggle('active');
    container.classList.toggle('active')
    headerLogo.classList.toggle('active')
    headerLogo2.classList.toggle('active')
    body.classList.toggle('active')
})