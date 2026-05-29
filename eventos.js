

let garagem = []; 

let patio = document.getElementById("patio-da-frota");
let dados = document.getElementById("entrada-de-dados");
let botao = document.getElementById("btn-captura");
let painelCusto = document.getElementById("painel-custo");

botao.addEventListener("click", () => {
    let escritoPeloUsuario = dados.value.trim();
    
    if(escritoPeloUsuario === ""){
        console.error("Aviso: Placa invalida ou vazia.");
        return
    }
    let caminhao ={
        placa: escritoPeloUsuario, 
        status: "Aguardando Manutenção",
        custoEstimado: 200
    };
    garagem.push(caminhao);
    console.log(garagem);
    renderizarFrota()
    dados.value ="";
});

function renderizarFrota(){
    patio.innerHTML = "";
    
    garagem.forEach((caminhao)=> {
        patio.innerHTML +=`<p> Placa: ${caminhao.placa} - Status:  ${caminhao.status} <button onclick="liberarVeiculo('${caminhao.placa}')">Liberar Veículo</button></p>`
    })
atualizarPainelFinanceiro();
};

function liberarVeiculo(placaDigitada){
    garagem = garagem.filter(liberar => liberar.placa !== placaDigitada)
    
    renderizarFrota();
};

function atualizarPainelFinanceiro(){
let prejuizo = garagem.reduce((acumulador, caminhao) => {
    return acumulador + caminhao.custoEstimado;
    
}, 0);
let variavelFormatado = new Intl.NumberFormat('pt-BR', {
        style: 'currency', 
        currency: 'BRL'
    }).format(prejuizo);
painelCusto.innerHTML = "Custo total no Patio é: " + variavelFormatado
};
renderizarFrota();
