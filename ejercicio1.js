function reciboArray(array){
    return array.filter(numero => numero % 2 === 0);
}

let arrayNumeros = [0,1,2,3,4,5,6,7,8,9,10];
let nuevoArray = reciboArray(arrayNumeros);
console.log(nuevoArray); 
