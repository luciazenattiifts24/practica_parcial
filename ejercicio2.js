function calcularPromedio(arrayNum){
    return arrayNum.reduce((a, b) => a + b) / arrayNum.length;
}

let arrayNum = [2,5,5];
console.log(calcularPromedio(arrayNum));