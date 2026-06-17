function calcular(num1, num2, callback) {
    return callback(num1, num2);
}

function soma(x, y) {
    return x + y;
}
function subtracao(x, y) {
    return x - y;
}
function multiplicao(x, y) {
    return x * y;
}
function divisao(x, y) {
    return x / y;
}
function potencia(x, y) {
    return x ** y;
}

// testando

let resultado = calcular(3, 4, soma);
console.log(resultado);
resultado = calcular(3, 4, subtracao);
resultado = calcular(3, 4, multiplicao);
resultado = calcular(3, 4, divisao)
resultado = calcular(3, 4, potencia);
console.log(resultado);
