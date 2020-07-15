let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaArray = 0;

for (let i = 0; i < numbers.length; i++) {
    somaArray += numbers[i];
}

console.log(somaArray);


//dividir esse valor de 278 por 10, que é o comprimento do array.

let mediaAritimetica = somaArray / numbers.length;

console.log(mediaAritimetica)
    //se a variavel mediaAritimetica já contem valor, preciso declara-la?


if (mediaAritimetica > 20) {
    console.log("Valor maior que 20");

} else {

    console.log("Valor menor ou igual a 20");
}