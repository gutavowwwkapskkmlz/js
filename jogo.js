// O Math.random gera um número quebrado (ex: 0.543). O Math.floor arredonda para baixo
let numeroSecreto = Math.floor(Math.random() * 10) + 1;

let btnChutar = document.getElementById("btn-chutar");
let dica = document.getElementById("dica");



btnChutar.addEventListener("click", function() {
let chuteUsuario = document.getElementById("chute-usuario").value;
const numeroUsuario = parseFloat(chuteUsuario);

if (numeroSecreto === numeroUsuario) {
dica.innerHTML = "Acertou na mosca, parabens " + numeroSecreto;

} else if (chuteUsuario > numeroSecreto) {
dica.innerHTML = "chutou muito alto, tente mais baixo";

} else {
    dica.innerHTML = "chutou muito baixo";
}

});