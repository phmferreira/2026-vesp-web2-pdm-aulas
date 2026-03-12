// busca linear

// array de número
// número a buscar
// retorno é a posição do número no array

const numeros = [1, -2, 14, 9, 5];
const numeroBusca = 9;
let posicao = -1;
let indice = 0;
let sairDaBusca = false;
while (sairDaBusca === false) {
    const numAtual = numeros[indice];
    if (numAtual === numeroBusca) {
        sairDaBusca = true;
        posicao = indice;
    } else if (indice === numeros.length - 1) {
        sairDaBusca = true;
    }
    indice = indice + 1;
}