const nomes = ['João', 'Ana', 'Maria', 'José'];

// isso dá erro!
// nomes = ['Paulo', 'José'];

const idade = 18;
nomes.push('Paulo');
console.log(nomes);

// acesso a dados
console.log(nomes[2]);
console.log(nomes[0]);

// inserir dados
// inserir no final do array - push
nomes.push('Mariana');
// inserir no início do array - unshift
nomes.unshift('Pedro');

// remover dados
// remove do fim do array - pop
const nomeRemovidoFim = nomes.pop();
// remove do início do array - shift
const nomeRemovidoInicio = nomes.shift();


console.log(typeof nomes);
console.log(nomes instanceof Array);


