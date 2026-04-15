function soma(num1, num2) {
    if (typeof num1 !== 'number' ||
        typeof num2 !== 'number'
    ) {
        throw new TypeError(
            'Os parâmentros precisam ser numéricos!');
    }

    return num1 + num2;
}

try {
    console.log(soma(1, 2));
    console.log(soma('x', 'um'));
} catch (erro) {
    console.log(erro.message);
}