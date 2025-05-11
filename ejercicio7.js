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