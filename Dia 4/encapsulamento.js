class Aluno {
    #nome;
    #idade;
    #turma;
    constructor(nome, idade, turma) {
        this.#nome = nome;
        this.#idade = idade;
        this.#turma = turma;
    }

    get nome() {
        return this.#nome;
    }
    get idade() {
        return this.#idade;
    }
    get turma() {
        return this.turma;
    }

    set turma(novaTurma) {
        this.#turma = novaTurma;
    }
    imprimeDados() {
        const aluno = document.createElement('span');
        aluno.innerText = `Aluno ${this.#nome} idade ${this.#idade} esta na turma ${this.#turma}.`;
        document.body.appendChild(aluno);
    }

}

const aluno =  new Aluno('Augusto', 32, '3D');
aluno.imprimeDados();