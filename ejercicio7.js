let contador = 0;
let mostradorResultado = document.getElementById('resultado');
const btnIncrement = document.getElementById('btnIncrement');
const btnDecrease = document.getElementById('btnDecrease');

function increment(){
  mostradorResultado.textContent = ++contador
};

function decrease(){
  mostradorResultado.textContent = --contador
}

btnIncrement.onclick('click').increment()
btnDecrease.onclick('click').decrease()