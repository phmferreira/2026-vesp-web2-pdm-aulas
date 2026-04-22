function ContaBancaria(
    nome, sobrenome, cpf, saldoInicial) {

    if (saldoInicial < 0) {
        throw new Error("O saldo inicial não pode ser negativo");
    }

    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.saldo = saldoInicial;

    this.depositar = function (valorDeposito) {
        if (valorDeposito <= 0) {
            throw new Error("O valor do depósito deve ser positivo")
        }
        this.saldo += valorDeposito;
    }

    this.sacar = function (valorSaque) {
        if (valorSaque > this.saldo) {
            throw new Error("O saldo é insuficiente!")
        }

        this.saldo -= valorSaque;
    }
}

try {
    const contaBB = new ContaBancaria(
        'Maria', 'Silva', '111.222.333-44', 35000)
    contaBB.depositar(10000);
    contaBB.sacar(5000);
} catch (erro) {
    console.log(erro.message);
}