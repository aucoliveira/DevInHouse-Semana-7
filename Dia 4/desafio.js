class Animal {
    #nome;
    constructor(nome) {
        this.#nome = nome;
    }
    dizerNome() {
        console.log(`Meu nome é ${this.#nome}\n`)
    }
}

class Mamifero extends Animal {
    #alimentacao;
    constructor(nome, alimentacao) {
        super(nome);
        this.#alimentacao = alimentacao;
    }
    seAlimentaDe() {
        console.log(`Minha alimentação é ${this.#alimentacao}\n`);
    }
}

class Leao extends Mamifero {
    #sexo;
    constructor(nome, alimentacao, sexo) {
        super(nome, alimentacao);
        this.#sexo = sexo;
    }
    dizerNome() {
        if (this.#sexo === 'M') {
            return console.log('Meu nome é Simba.\n');
        }else {
            return console.log('meu nome é Leia\n');
        }
    }
}

class Cachorro extends Mamifero {
    #som;
    constructor(nome, alimentacao, som) {
        super(nome, alimentacao);
        this.#som = som;
    }
    emitirSom() {
        console.log(`Meu som é: ${this.#som}\n`);
    }
    seAlimentaDe() {
        console.log("Me alimento de carne e vegetais.");
    }
}

const simba = new Leao("Simba", "Carne", "M");
simba.dizerNome();

const leia = new Leao("Simba", "carne","F");
leia.dizerNome();

const marley = new Cachorro('Marley', 'carne', 'auauauau');
marley.emitirSom();
marley.dizerNome();
marley.seAlimentaDe();

// ------------------------------ Repteis -------------------------------------------- \\
class Repteis extends Animal{
    #habitat;
    constructor(nome, habitat) {
        super(nome);
        this.#habitat = habitat;
    }
    viveEm() {
        console.log(`Eu vivo em ${this.#habitat}\n`)
    }
    dizerNome() {
        console.log(`Esse réptil é chamado de ${this.nome}\n `)
    }
}

class Cobra extends Repteis {
    #venenosa;
    constructor(nome, habitat, venenosa) {
        super(nome,habitat);
        this.#venenosa = venenosa;
    }
    dizerSeEhVenenosa() {
        if(this.#venenosa){
            console.log(`Essa cobra é venenosa.\n`);
        } else {
            console.log(`Essa cobra não é venenosa.\n`);
        }
        
    }
}

const cobra = new Cobra('sucuri', 'matagal', false);
cobra.dizerNome();
cobra.dizerSeEhVenenosa();