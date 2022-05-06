class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    imprimeDados() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, turma){
        super(nome, idade);
        this.turma = turma;
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina){
        super(nome, idade);
        this.disciplina = disciplina;
    }
}

const augusto = new Aluno('Augusto', 32, '3D');
augusto.imprimeDados();