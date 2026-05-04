let carrinhoSimulado = [
  { modelo: "Ryzen 5 5600X", preco: 950 },
  { modelo: "A520", preco: 700 },
  { modelo: "Fonte 600W", preco: 350 }
];
function removerDoCarrinho(nomeDaPeca){
 let carrinhoAtualizado = carrinhoSimulado.filter(pecaAtual => pecaAtual.modelo !== nomeDaPeca);
 
 console.log(carrinhoAtualizado);
}
removerDoCarrinho("A520");
