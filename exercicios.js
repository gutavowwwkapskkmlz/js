/* let niveldeBateria = 49;

if (niveldeBateria <= 20) {
    console.log("bateria fraca, por favor coloque para carregar");
} else if (niveldeBateria <= 30) {
 console.log("bateria esta: " + niveldeBateria + " fique em alerta, a bateria esta //acabando");
} else if(niveldeBateria  <= 90) {
    console.log("bateria esta: " + niveldeBateria + " bateria esta em um nivel bom, //continue usando");
}
//segundo desafio - 
function verificarNivelBateria(nivel) {
  if(nivel <= 20) {
    console.log("Bateria fraca por favor coloque para carregar");
  } else if ( nivel <= 30) {
    console.log("Bateria esta: " + nivel + "% fique em alerta, a bateria esta acabando");
  } else {
    console.log("Bateria esta: " + nivel + "% bateria esta em um nivel bom, continue usando");
  }
}
verificarNivelBateria(nivel = 58);

//nivel 3

function multiplicadordeValores(valor1 = 22, valor2 = 20) {
  return valor1 * valor2;
}
let resultadoFinal = multiplicadordeValores();
console.log(resultadoFinal);
 
for (let i = 10; i>= 1; i--) {
  console.log("contando: " + i);
}
console.log("Feliz natal!!")

let carrinho  = ["Processador i5", "Placa Mãe B550", "Memoria RAM 16GB", "SSD 1TB", "Fonte 650W"];

for (let i=0; i < carrinho.length; i++) {
  console.log ("Adicionado ao carrinho: " + carrinho[i])
} 

*/

let Total = document.getElementById("btn-calcular");
let resultado = document.getElementById("tela-resultado");

let carrinhoDoCliente = [
    { nome: "Processador i5", preco: 1200 },
    { nome: "Placa Mãe B550", preco: 800 },
    { nome: "Memória RAM 16GB", preco: 400 },
    { nome: "SSD 1TB", preco: 500 }
];

function calcularTotal(listaDePecas) {
  let somaTotal = 0;
  for (let i = 0; i < listaDePecas.length; i++) {
    somaTotal += listaDePecas[i].preco;
  }
  return somaTotal;
} 
Total.addEventListener("click", function() {

  
  let valorProcTexto = document.getElementById(select-processador).value;
  let precoProcessador = parseFloat(valorProcTexto);


  let valorPlacaDeVideo = document.getElementById(select-placa-de-video).value;
  let precoPlacaDeVideo = parseFloat(valorPlacaDeVideo);

  let total = precoProcessador + precoPlacaDeVideo;

  resultado.innerHTML = "O valor do orçamento é R$" + total.toFixed(2);
});


/*
let valorFinal = calcularTotal(carrinhoDoCliente);
console.log("Valor total da compra é: " + valorFinal);
*/