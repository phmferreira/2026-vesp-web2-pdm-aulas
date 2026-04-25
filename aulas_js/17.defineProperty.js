function Aluno(
    nome, sobrenome, matricula, cpf) {
    const data = new Date();

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.matricula = matricula;

    Object.defineProperty(this, 'cpf',
        {
            value: cpf,
            enumerable: true,
            writable: false,
            configurable: true
        }
    );
}

const alunoJoao = new Aluno(
    'João', 'Santos', '112233',
    '111.222.333-44'
)
console.log(alunoJoao);
console.log(alunoJoao.cpf);
Object.defineProperty(alunoJoao, 'cpf',
    {
        writable: true
    }
)
alunoJoao.cpf = '999.888.777-66';
// delete alunoJoao.cpf
console.log(alunoJoao);
console.log(
    Object.getOwnPropertyDescriptor(
        Aluno, 'nome'
    )
);


