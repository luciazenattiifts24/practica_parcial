let colores = ['blanco', 'azul', 'verde'];
let tiempoRetraso = 1000;

colores.forEach((color, indice) => { 
  setTimeout(() => {
    console.log(color);
  }, (indice + 1) * tiempoRetraso);  // porque quiero que el segundo se imprima un segundo despues que el anterior
});