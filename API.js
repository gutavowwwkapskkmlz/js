// Importa o módulo nativo de HTTP do Node.js
const http = require('http');

// Cria o servidor lógico
const servidor = http.createServer((requisicao, resposta) => {
    
    // PASSO 1: O código de status HTTP 200 significa "OK". 
    // Escreva a instrução para configurar o cabeçalho da resposta enviando o status 200 e informando que o conteúdo é um texto simples (Content-Type: text/plain).
    // SEU CÓDIGO AQUI: resposta.writeHead( ... );
    resposta.writeHead(200, {'Content-Type': 'text/plan'});
    // PASSO 2: Encerre a requisição enviando a mensagem "Backend Operante. Acesso Autorizado."
    // SEU CÓDIGO AQUI: resposta.end( ... );
    resposta.end("Backend Operante. Acesso Autorizado.");

});

// PASSO 3: Os computadores possuem 65.535 portas de rede lógicas. 
// Mande o seu servidor escutar o tráfego especificamente na porta 3000.
// SEU CÓDIGO AQUI: servidor.listen( ... );
server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});