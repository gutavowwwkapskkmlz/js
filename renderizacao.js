let telaDoCarrinho = document.getElementById("vitrine-do-carrinho");

let carrinhoDocliente = [
  { modelo: "Ryzen 5 5600X", preco: 950 },
  { modelo: "A520", preco: 700 },
  { modelo: "Fonte 600W", preco: 350 },
];
function renderizarCarrinho() {
    telaDoCarrinho.innerHTML = "";

  for (let i = 0; i < carrinhoDocliente.length; i++) {
    telaDoCarrinho.innerHTML += `<p> Peça: ${carrinhoDocliente[i].modelo} Preço: ${carrinhoDocliente[i].preco}</p>`;
  }
}
renderizarCarrinho();
