let botaoCalcular = document.getElementById("btn-calcular");
let telaResultado = document.getElementById("tela-resultado");

botaoCalcular.addEventListener("click", function() {
    
    // 1. Pegamos o valor do processador no HTML e já transformamos em número:
let valorProcTexto = document.getElementById("select-processador").value;
  let precoProcessador = parseFloat(valorProcTexto);


  let valorPlacaDeVideo = document.getElementById("select-placa-de-video").value;
  let precoPlacaDeVideo = parseFloat(valorPlacaDeVideo);

  let total = precoProcessador + precoPlacaDeVideo;

  telaResultado.innerHTML = "O valor do orçamento é R$" + total.toFixed(2);
});

    
