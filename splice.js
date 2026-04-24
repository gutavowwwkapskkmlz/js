/*
Exemplo de .splice()

let gaveta = ["Meias", "Camisas", "Calças", "Casacos"];

// Eu quero jogar fora as "Camisas". 
// Contagem: Meias (0), Camisas (1). Então o índice é 1.
// Eu quero jogar fora APENAS a camisa. Então a quantidade é 1.

gaveta.splice(1, 1); // Corta 1 item na posição 1

// Se eu mandar exibir a gaveta agora, as Camisas sumiram.
console.log(gaveta); // O resultado será: ["Meias", "Calças", "Casacos"]
*/

//TREINAMENTO - FACIL
let carrinho = ["processador", "Placa Mãe", "Memoria RAM", "Placa de Video", "Fonte"];


/*
let gaveta = ["Meias", "Camisas", "Calças"];

// Mandamos o radar procurar onde estão as "Camisas"
let posicao = gaveta.indexOf("Camisas"); 

console.log(posicao); // A máquina vai imprimir 1
*/

//TREINAMENTO FACIL - (.indexOf)

let acharItens = carrinho.indexOf("Placa de Video");

console.log(acharItens);
carrinho.splice(acharItens, 1);

