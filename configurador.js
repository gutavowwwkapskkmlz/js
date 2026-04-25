let resumoTela = document.getElementById("resumo-tela");


const meuCarrinho = [
  {
    categoria: "Processador",
    modelo: "Ryzen 5 5600X",
    soquete: "AM4",
    nucleos: 6,
    preco: 950.5,
  },
  {
    categoria: "Placa Mãe",
    modelo: "A520",
    soquete: "AM4",
    preco: 700.0,
  },
];
// de objeto para JSON
localStorage.setItem("catalogo", JSON.stringify(meuCarrinho));
// de JSON para array
const catalogo = JSON.parse(localStorage.getItem("catalogo"));

for (let i = 0; i < meuCarrinho.length; i++){
    resumoTela.innerHTML += 
    `<p>Modelo: ${catalogo[i].modelo} - R$ ${catalogo[i].preco}</p>`
}

