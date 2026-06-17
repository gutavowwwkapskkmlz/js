let catalogoDePecas = [];
let setupDoCliente = JSON.parse(localStorage.getItem('carrinhoSalvo')) || [];


async function carregarCatalogo() {
  try{
    const resposta = await fetch("http://localhost:3000/catalogo");

    if(!resposta.ok) { 
     throw new Error("Peça não encontrada");
    }

    catalogoDePecas = await resposta.json();
    console.log(catalogoDePecas)

    renderizarVitrine(catalogoDePecas)

   

  } catch(erro){
    console.error("erro:", erro)
  } 
};




function renderizarVitrine(catalogoDePecas) {
  let vitrine = document.getElementById("vitrine-de-pecas");

  let htmlAcumulado = "";

  catalogoDePecas.forEach((pecaAtual) => {
    htmlAcumulado += `
      <p class="vitrine-css">
        Modelo: ${pecaAtual.categoria},
        Nome: ${pecaAtual.nome},
        Preço: ${pecaAtual.preco}
        <button onclick="adicionarAoCarrinho(${pecaAtual.id})">
          Adicionar
        </button>
      </p>
    `;
  });

  vitrine.innerHTML = htmlAcumulado;
}

function adicionarAoCarrinho(idDaPecaClicada) {
  
  let pecaEncontrada = catalogoDePecas.find(
    (item) => item.id === idDaPecaClicada,
  );

  let pecaNoCarrinho = setupDoCliente.find((item) => item.id === idDaPecaClicada)
  if(pecaNoCarrinho) {
    pecaNoCarrinho.quantidade += 1
  } else{
    let copiaDaPeca =  {...pecaEncontrada}
    copiaDaPeca.quantidade = 1;
    setupDoCliente.push(copiaDaPeca);
  }
  console.log(setupDoCliente);
  localStorage.setItem('carrinhoSalvo',JSON.stringify(setupDoCliente));
  renderizarCarrinho();
}


function renderizarCarrinho() {
  let htmlAcumulado = "";
  let carrinho = document.getElementById("carrinho-do-cliente");
  carrinho.innerHTML = "";

  setupDoCliente.forEach((peca) => {
    htmlAcumulado += `<p class="vitrine-css">Nome: ${peca.nome}, Preço: ${peca.preco}, quantidade: ${peca.quantidade}   <button onclick="removerDoCarrinho(${peca.id})">excluir</button> </p>`;
  });

  let total = setupDoCliente.reduce((acumulador, peca) => {
    return acumulador + (peca.preco * peca.quantidade);
  }, 0);

  let totalFormatado = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(total);

   htmlAcumulado += `<p class="vitrine-css"> Custo Total: ${totalFormatado} </p>`;
   carrinho.innerHTML = htmlAcumulado;
}
function removerDoCarrinho(idDaPeca) {
  let pecaAlvo = setupDoCliente.find((item) => item.id === idDaPeca);
  if(pecaAlvo.quantidade > 1){
    pecaAlvo.quantidade -= 1;
  } else{
     setupDoCliente = setupDoCliente.filter((peca) => peca.id !== idDaPeca);
  }
    localStorage.setItem('carrinhoSalvo',JSON.stringify(setupDoCliente));
  renderizarCarrinho(); 
}

renderizarCarrinho();
carregarCatalogo();
