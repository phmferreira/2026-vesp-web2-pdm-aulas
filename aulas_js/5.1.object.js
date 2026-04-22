const aluno = {
    nome: 'João',
    sobrenome: 'da Silva',
    matricula: 893472,
    matriculaAtiva: true,
    disciplinas: ['pt', 'mat', 'web2', 'pdm'],
    endereco: {
        rua: 'Rua principal',
        numero: 12,
        bairro: 'centro',
        cidade: 'Itaporanga'
    },

    olaAluno() {
        console.log('Olá, eu sou', this.nomeCompleto());
    },

    nomeCompleto: function () {
        return this.nome + ' ' + this.sobrenome;
    }
}

// acesso aos atributos
// usando a notação .
console.log('Nome aluno', aluno.nome);
// usando a notação []
console.log('Nome aluno', aluno['nome']);

aluno.dataNascimento = '19/02/2007';


// imprimindo o objeto aluno
// console.log(aluno);

// delete atributos
delete aluno.matriculaAtiva;

console.log(aluno);

// aluno.olaAluno();


// padrão de projeto (design patterns)
// factory (fábrica)

function criarAluno(nome, sobrenome, matricula) {
    return {
        nome,
        sobrenome,
        matricula
    };
}

console.log(criarAluno('Maria', 'Santos', 123));







