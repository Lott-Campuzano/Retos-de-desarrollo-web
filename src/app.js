var splashScreen = document.querySelector('.splash');
var boton = document.querySelector('.boton');

boton.addEventListener('click', ()=> {
    splashScreen.style.opacity = 0;
    setTimeout(()=> {
        splashScreen.classList.add('hidden');
    },610)
})