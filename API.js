const express = require('express');


const app = express();
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
app.get('/catalogo/:id', (requisicao, resposta) => {
  let extraiId = Number(requisicao.params.id);
  let pecaEncontrada = catalogoDePecas.find(item => item.id === extraiId);

  if(pecaEncontrada){
    return resposta.json(pecaEncontrada);
  } else {
    resposta.status(404).json({erro: "Peça não encontrada" });
  }
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000"); 
});
