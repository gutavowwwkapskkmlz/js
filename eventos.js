let dados = document.getElementById("entrada-de-dados");
let botao = document.getElementById("btn-captura")

botao.addEventListener("click", () => {
let escritoPeloUsuario = dados.value.trim();

    if(escritoPeloUsuario === ""){
        console.error("Aviso: Placa invalida ou vazia.");
        return
    }
console.log(escritoPeloUsuario)
dados.value ="";
});