class Personagem{
    constructor(nome) {
        this.nome = nome;
        this.vida = 100;
    }
    atacar() {
        console.log(`${this.nome} atacou`);
    }
}

class Guerreiro extends Personagem {
    // exemplo de sobreescrita
    atacar() {
        super.atacar();
        console.log('com a espada');   
    }
}

class Mago extends Personagem {
    atacar() {
        console.log(`${this.nome} jogou um feitiço`);
    }
}

const zelda = new Guerreiro('Zelda');
// zelda.atacar();

// exemplo de polimorfismo
personagens = [];
personagens.push(zelda);
personagens.push(new Personagem('Ryu'));
personagens.push(new Mago('Dalsin'));
personagens.forEach(personagem => {
    personagem.atacar()
});
