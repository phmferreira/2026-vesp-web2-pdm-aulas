// laço for clássico
for (let index = 0; index < 10; index++){
    console.log('o índice atual é', index);
}

// for in
const frutas = [
    'Maçã', 'Uva', 'Abacaxi'
];
for (let index in frutas) {
    const fruta = frutas[index];
    console.log('O índice é:', index);
    console.log('A fruta é:', fruta);    
}
// for of
for (let fruta of frutas) {
    console.log('A fruta atual é', fruta);
}

// for com indice e conteúdo
// usando for of
for (let [index, fruta] of frutas.entries()){
    console.log('O índice é:', index);
    console.log('A fruta é:', fruta);    
}


const aluno = {
    nome: 'João',
    sobrenome: 'Silva',
    matricula: '2023000123'
}

for (let atributo in aluno) {
    console.log('Nome do atributo:', atributo);
    console.log(
        'Conteúdo do atributo', aluno[atributo]);
}

// outro estilo de programação
// programação funcional

const printFruta = fruta => console.log(fruta);
frutas.forEach(printFruta);

/*
const frutas = [
    printFruta('Maçã'),
    printFruta('Uva'),
    printFruta('Abacaxi')
]
*/

function printFrutaIndice (fruta, index){
    console.log('Índice:', index);
    console.log('Fruta:', fruta);
}
frutas.forEach(printFrutaIndice);

const numeros = [2, 7, 10, 12];
function ehPar(numero) {
    return (numero % 2 === 0) ? 'é par' : 'é ímpar';
}
let resultado = numeros.map(ehPar);
console.log(resultado);

