const nome = 'João';
const sobrenome = 'Silva';
const idade = 20;

const apresentacao = () => {
    return 'Meu nome é ' + nome + ' ' + sobrenome;
}

module.exports.nome = nome;
exports.idade = idade;
this.apresentarNomeCompleto = apresentacao;

// console.log(module);
