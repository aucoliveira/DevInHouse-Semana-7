const alunoModelo = {
    nome:'',
    idade: null,
    turma:'',
    alunoToString: function() {
        const aluno = document.createElement('h2');
        aluno.innerText = `Olá, eu sou ${this.nome}, tenho ${this.idade} e estou na turma ${this.turma} \n`;
        const pai = document.querySelector('body')
        pai.appendChild(aluno);
    }
};

const alunoAugusto = Object.create(alunoModelo, {
    
    nome : {
        value:'Augusto',
        writable: true,
        configurable: true,
        enumerable:true,
    },
    idade: {
        value:32,
        writable: true,
    },
    turma: {
        value: 'Senior',
        writable: true,
    }
});

alunoAugusto.alunoToString();
alunoAugusto.nome = 'Zeca Pagodinho';
alunoAugusto.alunoToString();

delete alunoAugusto.turma;
alunoAugusto.alunoToString();
alunoAugusto.turma = 'Turma do pagode';
alunoAugusto.alunoToString();
