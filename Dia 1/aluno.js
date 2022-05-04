function criaAluno(nome, idade, turma) {
    return {
        exibeAluno: function() {
            const aluno = document.createElement('span');
            aluno.innerText = `Aluno - Ǹome ${nome} com idade de ${idade} e diciplina ${turma} \n`;
            const pai = document.querySelector('body');
            pai.appendChild(aluno);
        }
    }
}

const aluno1 = criaAluno('Augusto', 32,'9C');
aluno1.exibeAluno();
const aluno2 = criaAluno('Giovanna', 8,'2C');
aluno2.exibeAluno();