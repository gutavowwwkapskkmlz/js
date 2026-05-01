/*
Quando você invoca o comando new Date(), o JavaScript tira uma "foto" exata daquele milissegundo no tempo. 
A partir dessa foto, você pode usar ferramentas (métodos) para extrair apenas o pedaço da data que te interessa.

// 1. Tiramos a foto do momento EXATO de agora
let momentoAtual = new Date(); 

// 2. Usamos as ferramentas "get" (pegar) para fatiar a foto
let dia = momentoAtual.getDate();
let mes = dataFormatura.getMonth() +1; // Lembra do perigo aqui!
let ano = momentoAtual.getFullYear();

console.log(`Hoje é dia ${dia} do mês ${mes} de ${ano}`);
// Se hoje for 29 de Abril, a máquina vai imprimir: "Hoje é dia 29 do mês 4 de 2026".
*/

// Definimos a data atual como o nosso ponto de partida.
let dataDaProva = new Date();

// Projetamos o agendamento da prova para daqui a 30 dias.
dataDaProva.setDate(dataDaProva.getDate() + 30);

// Verificamos em qual dia da semana essa nova data caiu. 
//No JavaScript, 0 representa o Domingo e 6 representa o Sábado.
let diaDaSemana = dataDaProva.getDay();

// Iniciamos a regra de negócio: a prova não deve ocorrer no fim de semana.
if(diaDaSemana === 6){
    // Caso a data caia em um sábado, avançamos dois dias para que a prova ocorra na segunda-feira.
    dataDaProva.setDate(dataDaProva.getDate() + 2);
    
} else if(diaDaSemana === 0){
    // Caso caia em um domingo, avançamos apenas um dia, transferindo também para a segunda-feira.
    dataDaProva.setDate(dataDaProva.getDate() + 1);
}

// Extraímos o dia e o mês para a apresentação final.
let dia = dataDaProva.getDate();

// Um detalhe técnico da linguagem: somamos 1 ao mês, pois o JavaScript os contabiliza de 0 (Janeiro) a 11 (Dezembro).
let mes = dataDaProva.getMonth() + 1;

// Por fim, exibimos o resultado do agendamento.
console.log(`Data da prova: ${dia}/${mes}`);

 
