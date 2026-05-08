// let botaoCalcular = document.getElementById("btn-calcular");
// let telaResultado = document.getElementById("tela-resultado");

// botaoCalcular.addEventListener("click", function() {
    
//     // 1. Pegamos o valor do processador no HTML e já transformamos em número:
// let valorProcTexto = document.getElementById("select-processador").value;
//   let precoProcessador = parseFloat(valorProcTexto);


//   let valorPlacaDeVideo = document.getElementById("select-placa-de-video").value;
//   let precoPlacaDeVideo = parseFloat(valorPlacaDeVideo);

//   let total = precoProcessador + precoPlacaDeVideo;

//   telaResultado.innerHTML = "O valor do orçamento é R$" + total.toFixed(2);
// });


// TESTE DE FINDINDEX COM .SPLICE...

// let listaSimples = [
//   {modelo: "caixa-a", tamanho: "grande"},
//   {modelo: "caixa-b", tamanho: "media"},
//   {modelo: "caixa-c", tamanho: "pequena"}
// ];

// function cortarCaixa(tamanho) {
//   let localizar = listaSimples.findIndex((item) => item.tamanho == tamanho);

//   if(localizar !== -1) {
//     listaSimples.splice(localizar, 1)
//     console.log(listaSimples);
//   }
// }
//    cortarCaixa("media") 
