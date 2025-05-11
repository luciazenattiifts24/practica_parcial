function generarColorAleatorio() {
  const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return colorAleatorio;
}

const botonColor = document.getElementById('btnColor');
const body = document.body; // Obtenemos una referencia al elemento body

botonColor.onclick = function() {
  body.style.backgroundColor = generarColorAleatorio(); // Cambiamos el background del body
};