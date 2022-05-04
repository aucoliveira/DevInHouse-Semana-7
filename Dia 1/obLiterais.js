const aluno1 = {
    nome: 'Augusto',
    turma: 'Senior',
    imprimeDados: function() {
        console.log(`Meu nome é ${this.nome} e estou na turma ${this.turma}`)
    }
}

const aluno2 = {
    nome: 'Giovanna',
    turma: 'Senior',
    imprimeDados: function() {
        console.log(`Meu nome é ${this.nome} e estou na turma ${this.turma}`)
    }
}

aluno1.imprimeDados();
aluno2.imprimeDados();