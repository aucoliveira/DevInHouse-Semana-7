function criaProfessor(nome, idade, diciplina) {
    return {
        exibeProfessor: function() {
            const professor = document.createElement('span');
            professor.innerText = `Professor - Ǹome ${nome} com idade de ${idade} e diciplina ${diciplina}\n `;
            const pai = document.querySelector('body');
            pai.appendChild(professor);
        }
    }
}

const professor1 = criaProfessor('Augusto', 32, 'Matemática');
professor1.exibeProfessor();
const professor2 = criaProfessor('Giovanna', 8,'Português');
professor2.exibeProfessor();