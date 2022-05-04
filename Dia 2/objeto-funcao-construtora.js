const pinsher = {
    nome:'Totó',
    raca:'pinsher',
    peso:3.5,
    latir: function() {
        console.log("auauauau...")
    }
};

//console.log(pinsher);

function Cachorro(nome,raca, peso) {
    this.nome;
    this.raca;
    this.peso;
    this.latir= function() {
        console.log('Auauau...')
    }
}
const viraLata = new Cachorro('Marley','Vira lata', 10);
//console.log(viraLata.latir())

function Aluno(nome, idade, turma) {
    this.nome = nome;
    this.idade = idade;
    this.turma = turma;
    this.apresentacao = function() {
        console.log(`Olá, eu sou ${nome}, tenho ${idade} e estou na turma ${turma}`);
        const aluno = document.createElement('h2');
        aluno.innerText = `Olá, eu sou ${nome}, tenho ${idade} e estou na turma ${turma} \n`;
        const pai = document.querySelector('body')
        pai.appendChild(aluno);
    }
}

const augusto = new Aluno('Augusto', 32, '3E');
augusto.apresentacao();