const boton = document.getElementById('cambioTexto');
const parrafos = document.querySelectorAll('p');
const nuevoTexto = "¡Texto cambiado al hacer clic!";

boton.addEventListener('click', function(){
    parrafos.forEach(function(parrafo) {    
        parrafo.textContent = nuevoTexto;
    });
})