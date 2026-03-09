let hora = 12;

if (hora < 12) {
    console.log('Bom dia.');
} else if (hora < 18) {
    console.log('Boa tarde.');
} else {
    console.log('Boa noite.');   
}

// operador ternário
// (condicao) ?  se_for_verdadeiro : caso_contrário
let media = 69;
let sit = media >= 70 ? 'aprovado' : 'em recuperação';
console.log(sit);
