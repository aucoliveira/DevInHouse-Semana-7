function aluno(nome, idade, turma) {
    const nomeDoAluno = nome;
    const idadeDoAluno = idade;
    let turmaDoAluno = turma;

    function dadosDoAluno() {
        const aluno = document.createElement('span');
        aluno.innerText = `Aluno ${nomeDoAluno} idade ${idadeDoAluno} esta na turma ${turmaDoAluno}.\n`;
        document.body.appendChild(aluno);
    }

    return {
        getNome:() => nomeDoAluno,
        getIdade: () => idadeDoAluno,
        getTurma: () => turmaDoAluno,
        setTurma: novaTurma => turmaDoAluno = novaTurma,
        dadosDoAluno,
    }
}
const augusto = aluno('Augusto', 32, 'Ssenior');
augusto.dadosDoAluno();

augusto.setTurma('Senior');
augusto.dadosDoAluno();