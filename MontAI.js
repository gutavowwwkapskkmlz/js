let carrinhoDocliente = [];

function adicionarAoCarrinho(nomeRecebido, precoRecebido) {
  let novaPeca = { modelo: nomeRecebido, preco: precoRecebido };
  carrinhoDocliente.push(novaPeca);
  localStorage.setItem("carrinhoSalvo", JSON.stringify(carrinhoDocliente));

  const carrinhoFinal = JSON.parse(localStorage.getItem("carrinhoSalvo"));

  console.log(carrinhoFinal);
}

/*
// .push - para injetar na tela os itens do array

let listaDeDesejos = []; // Array vazio esperando itens

// Quando eu quiser adicionar um Objeto lá dentro, eu "empurro":
listaDeDesejos.push( { produto: "Teclado Mecânico", preco: 350 } );

// Se eu rodar o push de novo, a lista passa a ter 2 itens, e assim por diante.
*/
