/**
//O Banco de Dados Falso (Mock Database) e o Filtro
// O nosso estoque total (O Mock Database)
const estoqueDaLoja = [
    { categoria: "RAM", modelo: "Kingston 8GB", preco: 150 },
    { categoria: "Fonte", modelo: "Corsair 600W", preco: 350 },
    { categoria: "RAM", modelo: "Corsair 16GB", preco: 300 }
];

// O Motor de Filtragem:
// Eu quero imprimir APENAS as memórias RAM.
for (let i = 0; i < estoqueDaLoja.length; i++) {
    
    let pecaAtual = estoqueDaLoja[i];
    
    // A trava de segurança: Só passa se a categoria for RAM
    if (pecaAtual.categoria === "RAM") {
        console.log(pecaAtual.modelo);
    }
}


// A máquina vai ignorar a Fonte e imprimir apenas a Kingston e a Corsair de 16GB.
*/
let listaDePecas = document.getElementById("lista-recomendacoes");
const bancoDePecas = [
  {
    categoria: "processador",
    modelo: "Intel - I5-14400F",
    soquete: "LGA 1700",
    preco: "1200",
  },
  {
    categoria: "processador",
    modelo: "Ryzen - 5 5600G",
    soquete: "AM4",
    preco: "999",
  },
  { 
    categoria: "Placa Mãe",
     modelo: "A520", 
     soquete: "AM4", 
     preco: "800" },
  { 
    categoria: "Placa Mãe", 
    modelo: "B760M", 
    soquete: "LGA 1700", 
    preco: "789" },
];
listaDePecas.innerHTML = "";
let processadorEscolhido = { soquete: "AM4" };
for (let i = 0; i < bancoDePecas.length; i++) {
  let pecaAtual = bancoDePecas[i];

  if (
    pecaAtual.soquete === processadorEscolhido.soquete &&
    pecaAtual.categoria === "Placa Mãe"
  ) {
    listaDePecas.innerHTML += `<li>Modelo da Peça: ${pecaAtual.modelo} - ${pecaAtual.preco}
        </li>`;
  }
}
