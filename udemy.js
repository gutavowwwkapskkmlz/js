//factory fuction 

function pessoas(nome, sobrenome){
return {
    nome, 
    sobrenome,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`  
    }
};
}
const pessoa1 = new pessoas('doido', 'Fernando');
console.log(pessoa1.nomeCompleto);


//construtor function

function Coisas(nome, sobrenome){
this.nome = nome;
this.sobrenome = sobrenome;
}
const p2 = new Coisas('doido', 'Fernando');
console.log(p2);

