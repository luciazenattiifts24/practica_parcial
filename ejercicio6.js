function generarColorAleatorio() {
  const colorAleatorio = '#' + Math.floor(Math.random() * 16777215).toString(16);
  return colorAleatorio;
} // para generar color aleatorio, averigue que random es para numero, y luego math.floor que lo redondea para que sea un color especifico, que lo pasamos a string para ponerlo luego del #. La explicacion del numero 16... es el numero maximo de los bytes

const botonColor = document.getElementById('btnColor'); // asigno el elemento a una const
const body = document.body; // guardo el elemento del body para que sea mas sencillo escribir el codigo luego

botonColor.onclick = function() {
  body.style.backgroundColor = generarColorAleatorio(); // tomo el boton y le asigno el evento de escuchar como funcion y que cada vez q lo toquemos, cambie de color
};