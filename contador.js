let btnBeber = document.getElementById("btn-beber");
let btnZerar = document.getElementById("btn-zerar");
let visor  = document.getElementById("visor");

const chave = "contador";

const valorDeCopos = localStorage.getItem(chave);

if(valorDeCopos !== null){
visor.innerHTML = valorDeCopos;
}

// 2.botão +1
btnBeber.addEventListener("click", () => {
  let copoAtual = parseInt(visor.innerHTML);
  copoAtual += 1;

  visor.innerHTML = copoAtual;
  localStorage.setItem(chave, copoAtual);
});

btnZerar.addEventListener("click", () => {
  visor.innerHTML = "0";

  localStorage.setItem(chave, "0");
})