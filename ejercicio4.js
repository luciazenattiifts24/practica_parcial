let numero1 = 3;
let numero2 = 4;

function suma(num1,num2){
    return num1 + num2;
}

function multiplicacion(num1,num2){
    return num1 * num2;
}

function totalSuma(callback,num1,num2){
    return callback(num1,num2);
}

function totalMultiplicacion(callback,num1,num2){
    return callback(num1,num2);
}

console.log('El total de la suma es: ', totalSuma(suma,numero1,numero2));
console.log('El total de la multiplicación es: ', totalMultiplicacion(multiplicacion,numero1,numero2));
