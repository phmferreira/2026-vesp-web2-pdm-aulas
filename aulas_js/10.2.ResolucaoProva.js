let qntMulheres = 4;
let qntHomens = 3;
// explicando a lógica
// ['m', 'm', 'm']
for (let i = 0; i < qntMulheres + 1; i++) {
    const fila = [];
    // for -> coloca as mulheres antes
    // dos três homens
    for (let j = 0; j < i; j++){
        fila.push('m')
    }
    // coloca sempre três homens
    for (let j = 0; j < qntHomens; j++){
        fila.push('h');
    }
    // for -> coloca as mulheres depois
    // dos três homens
    for (let j = i; j < qntMulheres; j++){
        fila.push('m');
    }
    console.log('configuração da fila', i, fila);
    
}