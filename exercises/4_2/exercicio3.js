//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;

for (let i = 0; i < numbers.length; i++) {
    somaArray += numbers[i];
}

console.log(somaArray);


//dividir esse valor de 278 por 10, que é o comprimento do array.

var mediaAritimetica = somaArray / numbers.length;

console.log(mediaAritimetica)