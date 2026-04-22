const definicion = document.getElementById('definicion');
const termino = document.getElementById('termino');
const btnFrase = document.getElementById('cambiar-palabra');

function generaEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function mostrarFraseAleatoria() {
    const indiceAleatorio = generaEnteroAleatorio(0, diccionario.length);
    const fraseAleatoria = diccionario[indiceAleatorio];
    termino.textContent = `"${fraseAleatoria.termino}"`;
    definicion.textContent = `${fraseAleatoria.definicion}`;
}

btnFrase.addEventListener('click', mostrarFraseAleatoria);
mostrarFraseAleatoria()