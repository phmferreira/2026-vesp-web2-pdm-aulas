function olaMundo() {
    console.log('Olá, mundo!');
}
olaMundo();

// exemplo 2
function olaMundoComSaida() {
    return 'Olá, mundo!';
}

function olaMundoComVariavel() {
    let mensagemBoasVindas = 'Olá, mundo';
    return mensagemBoasVindas;
}

console.log(olaMundoComSaida());
let mensagem = olaMundoComSaida();
console.log(mensagem);
mensagem = 14;
console.log(typeof mensagem);


// exemplo - função com entrada e saída
function olaPessoa(nome) {
    return `Olá, ${nome}`;
}
function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(olaPessoa('João'));
console.log('A soma de 2 + 3:');
console.log(soma(2, 3));
console.log(soma('Paulo', ' Henrique'));

function somaValoresPadroes(num1 = 0, num2 = 0) {
    return num1 + num2;
}
console.log(somaValoresPadroes());
console.log(somaValoresPadroes(5));
console.log(somaValoresPadroes('Texto', ' Ex'));
console.log(somaValoresPadroes('Texto'));

let somaPadrao = somaValoresPadroes;

function executaFuncoes(funcao) {
    return funcao(10, 15);
}
console.log(executaFuncoes(somaPadrao));

// notação seta - função set - arrow function
let somaFuncaoSeta = (num1, num2) => {
    return num1, num2;
}
let somaUmaLinhaSo = (num1, num2) => num1 + num2;
let somaCinco = numero => numero + 5;
let somaFixa = () => 5 + 14;








