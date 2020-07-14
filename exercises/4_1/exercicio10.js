let custoProduto = 20;
let valorRevenda = 50;
let lucroTotal = 0;
let lucroLiquido = (valorRevenda - custoProduto) * 0.8;

if (custoProduto > 0 && valorRevenda > 0) {


    lucroTotal = lucroLiquido * 1000;


    console.log("Lucro foi " + lucroTotal)

} else {


    console.log("Mensagem de erro");
}