//q2
// receber um numero e testar se é positivo, negativo ou zero

function testarSinalNumero(numero) {
    let resultado;
    if (numero === 0) {
        resultado = 'eh zero!';
    } else if (numero > 0) {
        resultado = 'eh positivo!';
    } else {
        resultado = 'eh negativo!';
    }
    return resultado;
}

console.log('1', testarSinalNumero(1));
console.log('0', testarSinalNumero(0));
console.log('-5', testarSinalNumero(-5));

// q5
// votação
function votacao(idade) {
    let resposta;
    if (idade < 16) {
        resposta = 'não pode votar!';
    } else if (idade < 18) {
        resposta = 'eh facultativo o voto!';
    } else if (idade < 70) {
        resposta = 'eh obrigatório o voto!';
    } else {
        resposta = 'eh facultativo o voto!';
    }
    return resposta;
}

//q6
function custoTotalMacas(qntMacas) {
    let valorTotal;
    let custoUnitatio = (qntMacas < 12) ? 0.3 : 0.25;
    valorTotal = qntMacas * custoUnitatio;
    return valorTotal;
}

console.log(custoTotalMacas(10));
console.log(custoTotalMacas(20));

