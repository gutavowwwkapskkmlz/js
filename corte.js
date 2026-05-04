let carrinhoDocliente = [
  { modelo: "Ryzen 5 5600X", preco: 950 },
  { modelo: "A520", preco: 700 },
  { modelo: "Fonte 600W", preco: 350 },
];
function removerDoCarrinho(nomeDaPeca) {
    //remove a peça escolhida pelo cliente.
  let removerItem = carrinhoDocliente.findIndex(pecaAtual => pecaAtual.modelo === nomeDaPeca);
    if(removerItem !== -1){
        carrinhoDocliente.splice(removerItem, 1);
    };
    //salva a nova lista que o cliente decidiu
    //localStorage.setItem("carrinhoSalvo", JSON.stringify(carrinhoDocliente));
    //let carrinhoNovo = JSON.parse(localStorage.getItem("carrinhoSalvo"));
    
    console.log(carrinhoDocliente);
};
removerDoCarrinho("A520");
