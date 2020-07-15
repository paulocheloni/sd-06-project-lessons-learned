//Descubra quantos valores ímpares existem no array e

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoImpar = [];
for (let index = 0; index < numbers.length; index++) {

    if (numbers[index] % 2 != 0) {

        resultadoImpar.push(numbers[index])


    }

}
if (resultadoImpar.length != 0) {

    console.log(resultadoImpar);
} else {

    console.log("Nenhum numero ímpar");
}