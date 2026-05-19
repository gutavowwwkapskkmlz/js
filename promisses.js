//[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)
/*
função assicrona 
async function carregarClientes(){
    //fetch resposta - faz requições http  assicronas permitindo buscar recursos dados ou interagir com APIs(interface de programação de aplicações) 
    let resposta = await fetch("https://jsonplaceholder.typicode.com/users")
    // ele pausa a promisse enquanto o resultado ainda não esta pronto.
    let clientes = await resposta.json();
    
    console.log(clientes);
}
carregarClientes();
*/


async function carregarClientes(){
    try {
        //colocamos o codigo perigoso dentro do try
        let resposta  = await fetch("https://site-falso.com/api");
        let dados = await resposta.json();
    } catch (erro){
        console.error("Alerta critico:  falha da comunicação.", erro);
    }
}