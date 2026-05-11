class AnimalPet {
    constructor(nome) {
        this.nome = nome;
    }
    comer() {
        console.log(`${this.nome} está comendo`);
    }
}

class Cachorro extends AnimalPet{
    constructor() {
        
    }
    constructor(nome) {
        super(nome);
    }
    constructor(nome, raca) {
        super(nome);
        this.raca = raca;
    }
    latir() {
        console.log(`${this.nome} está latindo.`);       
    }
    // não existe sobrecarga em JS
    // latir() {
    //     return 'texto'
    // }
}

const max = new Cachorro('Max', 'Pastor alemão');
const peixe = new AnimalPet('Beta');
max.comer();
console.log(max);
max.latir()
peixe.comer();
console.log(peixe);

