function bomDiaMundo() {
    console.log('Bom dia, mundo!');
}
// usando notação seta
let bomDiaMundoOutraForma = () => {
    console.log('Bom dia usando a notação seta!');
}

bomDiaMundo();
bomDiaMundoOutraForma();

// q2
function cubo(numero) {
    // return numero * numero * numero;
    // outra forma
    return numero ** 3;
    // mais outra forma 
    // return Math.pow(numero, 3);
}

// fatorial

function fatorial(num) {
    // caso base - 0! = 1
    let resposta;
    if (num === 0) {
        resposta = 1;
    } else {
        resposta = num * fatorial(num - 1);
    }
}