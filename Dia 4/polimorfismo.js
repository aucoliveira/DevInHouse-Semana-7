class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    imprimeDados() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

class Aluno extends Pessoa {
    constructor(nome, idade, turma){
        super(nome, idade);
        this.turma = turma;
    }
    imprimeDados() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, e estou na turma ${this.turma}.`);
    }
}

class Professor extends Pessoa {
    constructor(nome, idade, disciplina){
        super(nome, idade);
        this.disciplina = disciplina;
    }
    imprimeDados() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, e sou professor de  ${this.disciplina}.`);
    }
}

const augusto = new Aluno('Augusto', 32, '3D');
augusto.imprimeDados();

const professor =  new Professor("Cesar", 32, "Matemática");
professor.imprimeDados();