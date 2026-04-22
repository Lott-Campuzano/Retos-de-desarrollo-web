const definicion = document.getElementById('definicion');
const termino = document.getElementById('termino');
const btnFrase = document.getElementById('cambiar-palabra');

function generaEnteroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function mostrarFraseAleatoria() {
    const indiceAleatorio = generaEnteroAleatorio(0, frases.length);
    // obtengo la frase aleatoria usando el indíce
    const fraseAleatoria = frases[indiceAleatorio];

    // obtengo el contenido del html co la frase y el autor
    termino.textContent = `"${fraseAleatoria.palabra}"`;
    definicion.textContent = `${fraseAleatoria.significado}`;
}

btnFrase.addEventListener('click', mostrarFraseAleatoria);
mostrarFraseAleatoria()