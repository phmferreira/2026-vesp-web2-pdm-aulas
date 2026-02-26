// remoção usando o conteúdo
let nomeRemover = 'João';
// pesquisar e usar a indexOf
// implementar a remoção por conteúdo

const alunos = ['João', 'Maria',
    'Ana', 'José'
];

let indiceRemover =
    alunos.indexOf(nomeRemover);
// pesquisar e usa a função slice
// para construir um novo array
// removendo o item no indiceRemover

const arrayAntes = alunos.slice(0, indiceRemover);
const arrayDepois =
    alunos.slice(indiceRemover + 1, alunos.length);

console.log(alunos);
console.log('Usando concat:');
const resultado = arrayAntes.concat(arrayDepois);
console.log(resultado);
console.log('Usando o operador spread:');
// outra forma de concatenar
const outraSolucao =
    [...arrayAntes, ...arrayDepois];
console.log(outraSolucao);


