const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaTarefas = document.getElementById("listaTarefas");
 
// Filtro
const btnTodas = document.getElementById("btnTodas");
const btnPendentes = document.getElementById("btnPendentes");
const btnConcluidas = document.getElementById("btnConcluidas");
 
 
 
let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
 
let filtroAtual = "todas";
 
function salvarNoLocalStorage() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}
 
function listarTarefas() {
 
 
    listaTarefas.innerHTML = "";
 
    let tarefasFiltradas = tarefas;
 
    // Filtros pendentes
    if(filtroAtual === "pendentes"){
        tarefasFiltradas = tarefas.filter(
            tarefa => !tarefa.realizada
        );
    }
    // Filtro de concluídas
    if(filtroAtual === "concluidas"){
        tarefasFiltradas = tarefas.filter(
            tarefa => tarefa.realizada
        );
    }
 
    tarefas.forEach((tarefa, indice) => {
 
        const item = document.createElement("li");
 
        const texto = document.createElement("span");
 
        texto.textContent = tarefa.nome;
 
        if (tarefa.realizada) {
            texto.classList.add("tarefa-realizada");
        }
 
        const divAcoes = document.createElement("div");
        divAcoes.classList.add("acoes");
 
        const btnRealizar = document.createElement("button");
 
        if(tarefa.realizada){
 
            btnRealizar.textContent = "↺"
 
        } else {
 
            btnRealizar.textContent = "✓";
       
        }
 
 
       
        btnRealizar.classList.add("btn-realizar");
 
        btnRealizar.addEventListener("click", () => {
 
            tarefas[indice].realizada = !tarefas[indice].realizada;
 
            salvarNoLocalStorage();
            listarTarefas();
        });
 
        const btnDeletar = document.createElement("button");
 
        btnDeletar.textContent = "X";
        btnDeletar.classList.add("btn-deletar");
 
        btnDeletar.addEventListener("click", () => {
 
            tarefas.splice(indice, 1);
 
            salvarNoLocalStorage();
            listarTarefas();
        });
 
        divAcoes.appendChild(btnRealizar);
        divAcoes.appendChild(btnDeletar);
 
        item.appendChild(texto);
        item.appendChild(divAcoes);
 
        listaTarefas.appendChild(item);
    });
}
 
function adicionarTarefa() {
 
    const nomeTarefa = inputTarefa.value.trim();
 
    if (nomeTarefa === "") {
        alert("Digite uma tarefa.");
        return;
    }
 
    const novaTarefa = {
        nome: nomeTarefa,
        realizada: false
    };
 
    tarefas.push(novaTarefa);
 
    salvarNoLocalStorage();
    listarTarefas();
 
    inputTarefa.value = "";
    inputTarefa.focus();
}
 
btnAdicionar.addEventListener("click", adicionarTarefa);
 
inputTarefa.addEventListener("keypress", (evento) => {
 
    if (evento.key === "Enter") {
        adicionarTarefa();
    }
});
 
listarTarefas();