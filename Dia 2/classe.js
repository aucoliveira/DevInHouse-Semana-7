class Aluno {
    constructor(nome, idade, turma) {
        this.nome = nome;
        this.idade = idade;
        this.turma = turma;
    }
    alunoToString () {
        const aluno = document.createElement('h2');
        aluno.innerText = `Olá, eu sou ${this.nome}, tenho ${this.idade} e estou na turma ${this.turma} \n`;
        document.body.appendChild(aluno);
    }
};
/*
const alunoAugusto = new Aluno('Augusto', 32,'Senior');
alunoAugusto.alunoToString();

const alunoGiovanna = new Aluno('Giovanna', 8, '1A');
alunoGiovanna.alunoToString();
*/
//export default Aluno;

class Professor {
    constructor(nome, turma, disciplina) {
        this.nome = nome;
        this.turma = turma;
        this.disciplina = disciplina;
    }
    professorToString () {
        const professor = document.createElement('h2');
        professor.innerText = `Olá, sou ${this.nome}, sou professor da turma ${this.turma} na disciplina ${this.disciplina}`;
        document.body.appendChild(professor);
    }
}

