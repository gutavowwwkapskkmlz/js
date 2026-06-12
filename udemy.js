//factory fuction 

function criaCoisas(nome, sobrenome){
return {
    nome, 
    sobrenome,
    get nomeCompleto(){
      return `${this.nome} ${this.sobrenome}`  
    }
};
}
const p1 = criaCoisas('doido', 'Fernando');
console.log(p1.nomeCompleto);


//construtor function

function Coisas(nome, sobrenome){
this.nome = nome;
this.sobrenome = sobrenome;
}
const p2 = new Coisas('doido', 'Fernando');
console.log(p2);

