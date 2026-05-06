class ContaBancaria{
    #saldo;
    constructor(saldoInicial) {
        if (saldoInicial < 0) {
            throw new Error(
                'O saldo inicial não pode ser negativo.'
            );
        }
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            throw new Error('O valor deve ser positivo!');
        }
        this.#saldo = this.#saldo + valor;
    }

    sacar(valor) {
        if (valor <= 0) {
            throw new Error('O valor deve ser positivo!');
        }
        if (valor > this.#saldo) {
            throw new Error('Não há saldo suficiente!');
        }
        this.#saldo = this.#saldo - valor;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(valor) {
        if (valor < 0) {
            throw new Error(
                'O valor do saldo não pode ser negativo!');
        }
        this.#saldo = valor;
    }
}

try {
    const contaNuBank = new ContaBancaria(12000);
    console.log(contaNuBank.saldo);
    contaNuBank.depositar(1000);
    console.log(contaNuBank.saldo);
    contaNuBank.sacar(-500);
    console.log(contaNuBank.saldo);
    contaNuBank.saldo = 30000;
    console.log(contaNuBank.saldo);
} catch (error) {
    console.log(error.message);
    
}




