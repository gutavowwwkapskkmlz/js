// Sintaxe do .reduce.
/*
let totalDaCompra = bancada.reduce( (telaDaCalculadora, pecaNaMao) => {
    
    // O que você retornar aqui, vira o novo número na tela da calculadora
    return telaDaCalculadora + pecaNaMao.preco;
    
}, 0 ); // <-- Esse zero é você ligando a calculadora 
*/


let telaDoCarrinho = document.getElementById("vitrine-do-carrinho");
let telaTotal = document.getElementById("valor-total");

let carrinhoDocliente = [
  { modelo: "Ryzen 5 5600X", preco: 950 },
  { modelo: "A520", preco: 700 },
  { modelo: "Fonte 600W", preco: 350 },
];

function calcularTotal() {
  let valorFinal = carrinhoDocliente.reduce((calculadora, peca) => {
    return calculadora + peca.preco;
  }, 0);
  telaTotal.innerHTML = valorFinal;
}

function renderizarCarrinho() {
  telaDoCarrinho.innerHTML = "";
  //bloco do forEach
  carrinhoDocliente.forEach((peca) => {
    telaDoCarrinho.innerHTML += `
        <div class= "card-peca";>
        <h4>Modelo: ${peca.modelo}</h4>
        <p>Preço: ${peca.preco}</p>
        <button onclick="removerDoCarrinho('${peca.modelo}')">Remover</button>
        </div>`;
    });
    //manter fora para funcionar corretamente.
    calcularTotal();
}
renderizarCarrinho();
