function Aluno(
    nome, sobrenome, cpf) {
    
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.nomeCompleto = function () {
        return this.nome + " " + this.sobrenome;
    }
}

let alunaMaria = new Aluno(
    'Maria',
    'Silva',
    '000.111.222-33'
);
let alunoJoao = new Aluno(
    'João',
    'Santos',
    '999.888.777-66'
);

console.log(alunaMaria);
console.log(alunoJoao);

console.log(alunaMaria.nomeCompleto());
console.log(alunoJoao.nomeCompleto());

