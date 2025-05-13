let contador = 0;
let mostradorResultado = document.getElementById('resultado');
const btnIncrement = document.getElementById('btnIncrement');
const btnDecrease = document.getElementById('btnDecrease');

function increment(){
  mostradorResultado.textContent = ++contador
};

function decrease(){
  mostradorResultado.textContent = --contador // lo habia puesto atras y lo que pasaba es que disminuia uno mas antes de aumentar si usaba el otro boton, raro.
}

btnIncrement.onclick('click').increment()
btnDecrease.onclick('click').decrease() // aqui probe que si ponia = en vez de . funciona de la misma forma, por que?


//No logro comprender a que te referis con "lo habia puesto atras y lo..." no me doy cuenta que es lo que hiciste.

/* 
Vamos con el otro:
onclick no es un metodo, es una propiedad, entonces no recibe parámetros, sino que podes asignarle una función, por eso funciona con el =
El códgio asi como está es erróneo y hace que el comportamiento sea inadecuado, por eso el contador arranca en 1 (no se si te diste cuenta).
Y hay algo mas, reemplazá tu codigo por esto y fijate el comportamiento de contador en la consola:

btnIncrement.onclick = increment()
console.log(contador)
btnDecrease.onclick = decrease()
console.log(contador)

Cuando carga la pagina vas a ver el contador en 0, pero si mirás la consola vas a ver que primero está en 1 y luego baja a 0.
Eso es porque al poner btnIncrement.onclick = increment(), con los (), cuando se lee esa línea lo que estás haciendo es INVOCAR a la funcion propiamente, lo que hace que esta se ejecute. Lo mismo con decrease()

En cambio, si pones:

btnIncrement.onclick = increment
console.log(contador)
btnDecrease.onclick = decrease
console.log(contador)

Lo que estás haciendo es pasarle la REFERENCIA de la funcion, y solo se va a ejecutar cuando hagas click en el botón

Entonces la forma correcta para tu cófigo es:

btnIncrement.onclick = increment
btnDecrease.onclick = decrease

*/