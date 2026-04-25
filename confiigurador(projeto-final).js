// 1. Catálogo de Peças estruturado com Objetos
const catalogo = {
    processadores: [
        { nome: "i3", preco: 800 },
        { nome: "i5", preco: 1200 },
        { nome: "i7", preco: 1600 },
        { nome: "i9", preco: 2000 }
    ],
    placasDeVideo: [
        { nome: "gtx-1660", preco: 1500 },
        { nome: "rtx-2060", preco: 2500 },
        { nome: "rtx-3060", preco: 3500 }
    ],
    memoriasRAM: [
        { nome: "8GB", preco: 400 },
        { nome: "16GB", preco: 800 },
        { nome: "32GB", preco: 1200 }
    ],
    armazenamentos: [
        { nome: "SSD-512GB", preco: 500 },
        { nome: "SSD-1TB", preco: 700 }
    ]
};

// 2. Definindo as configurações pré-montadas (guardando os objetos inteiros)
const pcBasico = {
    processador: catalogo.processadores[0], // i3
    placaVideo: catalogo.placasDeVideo[0],  // gtx-1660
    ram: catalogo.memoriasRAM[0],           // 8GB
    armazenamento: catalogo.armazenamentos[0] // SSD-512GB
};

// 3. Função limpa para calcular qualquer configuração
function calcularTotal(configuracao) {
    return configuracao.processador.preco + 
           configuracao.placaVideo.preco + 
           configuracao.ram.preco + 
           configuracao.armazenamento.preco;
}

// 4. Função para descrever o orçamento
function descreverOrcamento(nomeConfig, configuracao) {
    const total = calcularTotal(configuracao);
    
    // Usando Template Literals (crases) para montar a string de forma mais legível
    return `Orçamento [${nomeConfig}]:
- Processador: ${configuracao.processador.nome}
- Placa de Vídeo: ${configuracao.placaVideo.nome}
- Memória RAM: ${configuracao.ram.nome}
- Armazenamento: ${configuracao.armazenamento.nome}
-----------------------------------
Preço Total: R$ ${total.toFixed(2)}`;
}
// ... (mantenha o catalogo, pcBasico e calcularTotal aqui em cima) ...

// Nova função conectada ao botão do HTML
function verificarOrcamento() {
    // 1. JS vai no HTML e pega o valor que o usuário digitou no input
    const valorDigitado = document.getElementById("input-dinheiro").value;
    
    // Converte o texto digitado para um número decimal
    const dinheiroDisponivel = parseFloat(valorDigitado); 

    // 2. JS vai no HTML e encontra a área de resultado para poder escrever lá
    const areaResultado = document.getElementById("resultado");

    // Validação de segurança: se o usuário não digitar nada, avise-o
    if (isNaN(dinheiroDisponivel)) {
        areaResultado.innerText = "Por favor, digite um valor válido.";
        areaResultado.style.color = "red";
        return; // Para a execução da função aqui
    }

    // 3. Puxa a função matemática que criamos antes
    const precoDoPc = calcularTotal(pcBasico);

    // 4. A Lógica de Decisão (O Bolso vs O Preço)
    if (dinheiroDisponivel >= precoDoPc) {
        const troco = dinheiroDisponivel - precoDoPc;
        areaResultado.innerText = `Sucesso! Você pode comprar o PC Básico.\nO PC custa R$ ${precoDoPc.toFixed(2)}.\nAinda vai te sobrar R$ ${troco.toFixed(2)} de troco.`;
        areaResultado.style.color = "green";
    } else {
        const falta = precoDoPc - dinheiroDisponivel;
        areaResultado.innerText = `Poxa, o dinheiro não deu.\nO PC Básico custa R$ ${precoDoPc.toFixed(2)}.\nFaltam R$ ${falta.toFixed(2)} para você conseguir comprar.`;
        areaResultado.style.color = "red";
    }
}

// Testando o código:
console.log(descreverOrcamento("PC Básico", pcBasico));

