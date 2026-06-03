let catalogoDePecas = [
  {
    id: 1,
    nome: "AMD Ryzen 5 5600G",
    preco: 800,
    categoria: "Processador ",
  },
  { id: 2, nome: "B550M ", preco: 750, categoria: "Placa-mãe" },
  {
    id: 3,
    nome: "16 GB DDR4 (2x8 GB)",
    preco: 800,
    categoria: "Memória RAM",
  },
  {
    id: 4,
    nome: "500W 80 Plus Bronze ",
    preco: 700,
    categoria: "Fonte",
  },
  {
    id: 5,
    nome: "Mid Tower com boa ventilação ",
    preco: 450,
    categoria: "Fonte",
  },
  {
    id: 6,
    nome: "Integrado Radeon Vega 7 ",
    preco: 0,
    categoria: "Vídeo",
  },
];

let setupDoCliente = JSON.parse(localStorage.getItem('carrinhoSalvo')) || [];

function renderizarVitrine() {
  let vitrine = document.getElementById("vitrine-de-pecas");
  vitrine.innerHTML = "";
  catalogoDePecas.forEach((pecaAtual) => {
    vitrine.innerHTML += `<p class="vitrine-css"> Modelo: ${pecaAtual.categoria}, Nome: ${pecaAtual.nome}, Preço: ${pecaAtual.preco} <button onclick="adicionarAoCarrinho(${pecaAtual.id})">Adicionar</button> </p>`;
  });
}

function adicionarAoCarrinho(idDaPecaClicada) {
  
  let pecaEncontrada = catalogoDePecas.find(
    (item) => item.id === idDaPecaClicada,
  );
  setupDoCliente.push(pecaEncontrada);
  console.log(setupDoCliente);

  localStorage.setItem('carrinhoSalvo',JSON.stringify(setupDoCliente));
  renderizarCarrinho();
}
function renderizarCarrinho() {
  let carrinho = document.getElementById("carrinho-do-cliente");
  carrinho.innerHTML = "";

  setupDoCliente.forEach((peca) => {
    carrinho.innerHTML += `<p class="vitrine-css">Nome: ${peca.nome}, Preço: ${peca.preco} <button onclick="removerDoCarrinho(${peca.id})">excluir</button> </p>`;
  });

  let total = setupDoCliente.reduce((acumulador, peca) => {
    return acumulador + peca.preco;
  }, 0);

  let totalFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

  carrinho.innerHTML += `<p class="vitrine-css"> Custo Total: ${totalFormatado} </p>`;
}
function removerDoCarrinho(idDaPeca) {
  setupDoCliente = setupDoCliente.filter((peca) => peca.id !== idDaPeca);
    localStorage.setItem('carrinhoSalvo',JSON.stringify(setupDoCliente));
  renderizarCarrinho();
}
renderizarVitrine();
renderizarCarrinho();
