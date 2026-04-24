// modelo do script do contador...(chatgpt)
const visor = document.getElementById("visor");
const btnSomar = document.getElementById("btnSomar");
const btnReset = document.getElementById("btnReset");

const chave = "contador";

// 1. O CARREGAMENTO
const valorSalvo = localStorage.getItem(chave);

if (valorSalvo !== null) {
  visor.innerHTML = valorSalvo;
}

// 2. BOTÃO +1
btnSomar.addEventListener("click", () => {
  let valorAtual = parseInt(visor.innerHTML);
  valorAtual += 1;

  visor.innerHTML = valorAtual;
  localStorage.setItem(chave, valorAtual);
});

// 3. BOTÃO RESET
btnReset.addEventListener("click", () => {
  visor.innerHTML = "0";

  // você pode escolher um dos dois:
  localStorage.setItem(chave, "0");
  // OU
  // localStorage.removeItem(chave);
});

//crud (chatgpt)
// 1. O Carregamento (Lendo o Armário)
// Buscamos o texto JSON no disco. Se existir, ressuscitamos para Array com parse().
// Se retornar null (vazio), o operador || (OU) garante a criação de um Array vazio.
let minhasTarefas = JSON.parse(localStorage.getItem('minhasTarefasCache')) || [];

// Capturando os elementos da interface
const inputTarefa = document.getElementById('nova-tarefa');
const btnAdicionar = document.getElementById('btn-adicionar');
const ulTela = document.getElementById('lista-tela');

// 2. A Renderização (Atualizando a Tela)
function renderizarTarefas() {
    // Passo crucial: limpar a tela antes de desenhar, senão as tarefas se duplicam a cada clique
    ulTela.innerHTML = '';

    // O Laço de Repetição (For) varrendo o Array
    for (let i = 0; i < minhasTarefas.length; i++) {
        // Injetando o <li> novo para cada item existente no Array
        ulTela.innerHTML += `<li>${minhasTarefas[i]}</li>`;
    }
}

// 3. A Lógica de Adição e Salvamento
btnAdicionar.addEventListener('click', function() {
    let texto = inputTarefa.value;

    // Pequena validação para não salvar tarefas em branco
    if (texto.trim() === '') {
        return; 
    }

    // A) Empurra o texto digitado para o Array real no JS
    minhasTarefas.push(texto);

    // B) Transforma o Array atualizado em "Texto JSON" e salva no armário
    localStorage.setItem('minhasTarefasCache', JSON.stringify(minhasTarefas));

    // C) Limpa o campo de digitação
    inputTarefa.value = '';

    // D) Chama a função que limpa a tela e roda o For novamente
    renderizarTarefas();
});

// Executa a renderização logo que o script carrega para mostrar o que já estava salvo
renderizarTarefas();