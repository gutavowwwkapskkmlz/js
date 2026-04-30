/*
Quando você invoca o comando new Date(), o JavaScript tira uma "foto" exata daquele milissegundo no tempo. 
A partir dessa foto, você pode usar ferramentas (métodos) para extrair apenas o pedaço da data que te interessa.

// 1. Tiramos a foto do momento EXATO de agora
let momentoAtual = new Date(); 

// 2. Usamos as ferramentas "get" (pegar) para fatiar a foto
let dia = momentoAtual.getDate();
let mes = momentoAtual.getMonth(); // Lembra do perigo aqui!
let ano = momentoAtual.getFullYear();

console.log(`Hoje é dia ${dia} do mês ${mes} de ${ano}`);
// Se hoje for 29 de Abril, a máquina vai imprimir: "Hoje é dia 29 do mês 3 de 2026".
*/
let dataFormatura = new Date(2028, 11, 10);
let dia = dataFormatura.getDate();
let mes = dataFormatura.getMonth() +1;
let ano = dataFormatura.getFullYear();

console.log(`A formatura é ${dia} do mes ${mes} ano ${ano}`);


