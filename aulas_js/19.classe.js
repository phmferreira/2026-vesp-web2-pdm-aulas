class Aluno{
    //atributo privado
    #cpf;

    constructor(nome, matricula, cpf) {
        this.nome = nome;
        this.matricula = matricula;
        this.#cpf = cpf;
    }
    
    nomeMatricula() {
        return `Nome aluno:${this.nome}, Matrícula: ${this.matricula}`;
    }

    get cpf() {
        // return this.#cpf;
        return this.#cpf.slice(0, 5) + 'x.xxx-xx';
    }

    set cpf(valor) {
        if (typeof valor !== 'string') {
            throw new Error('O cpf deve ser uma string.')
        }
        this.#cpf = valor;
    }
}

const joao = new Aluno(
    'João',
    '2024.001122',
    '111.222.333-44');
console.log(joao);
console.log(joao.nomeMatricula());
console.log(joao.qualquerNome);
joao.qualquerNome = '444.555.666-77'
console.log(joao.qualquerNome);



