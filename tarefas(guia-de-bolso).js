// ==========================================
// ZONA 1: O TOPO (Despertar e Pinças)
// ==========================================
const btnAdicionar = document.getElementById("btn-adicionar");
const inputTarefa = document.getElementById("nova-tarefa");
const ulTela = document.getElementById("lista-tela");

// SINTAXE DE LEITURA: JSON.parse( localStorage.getItem('chave') )
// O "|| []" garante que se o armário estiver vazio, ele cria um Array vazio e não dá erro.
let minhasTarefas = JSON.parse(localStorage.getItem('tarefas')) || [];


// =========================================
// ZONA 2: AS FERRAMENTAS (O motor da tela)
function atualizacaoDeTarefas() {
    ulTela.innerHTML = ""; 
    for (let i = 0; i < minhasTarefas.length; i++) {
        // O botão na tela já nasce sabendo a própria posição (i)
        ulTela.innerHTML += `<li>${minhasTarefas[i]} <button onclick="deletarTarefa(${i})">Apagar</button></li>`;
    }
}


// ==========================================
// ZONA 2.5: O SEU DESAFIO FINAL
// ==========================================
function deletarTarefa(posicao) {
    
    // 1. Corte 1 item do array 'minhasTarefas' usando a 'posicao'
    minhasTarefas.splice(posicao, 1);

    // 2. Salve o array 'minhasTarefas' no localStorage (lembre do JSON.stringify)
    localStorage.setItem('tarefas', JSON.stringify(minhasTarefas));

    // 3. Chame a função atualizacaoDeTarefas() para redesenhar a tela
    atualizacaoDeTarefas();

}
// ==========================================
// ZONA 3: OS GATILHOS (Ações do Usuário e Salvamento)
// ==========================================
btnAdicionar.addEventListener("click", () => {
    let texto = inputTarefa.value;

    if (texto.trim() === '') {
        return; // Trava de segurança
    }

    // 1. Modificamos o Array (O Guarda-roupa)
    minhasTarefas.push(texto);
    
    // 2. SINTAXE DE SALVAMENTO: localStorage.setItem('chave', JSON.stringify(variavel) )
    // Nós empacotamos o guarda-roupa a vácuo e jogamos no disco.
    localStorage.setItem('tarefas', JSON.stringify(minhasTarefas));

    inputTarefa.value = ''; // Limpa a caixa

    // 3. Mandamos o motor da Zona 2 rodar para atualizar a tela
    atualizacaoDeTarefas();
});

// A primeira partida do motor assim que a página carrega (fora do botão)
atualizacaoDeTarefas();