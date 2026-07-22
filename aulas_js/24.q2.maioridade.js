function verificarMaioridade(idade) {
    return new Promise(
        (resolve, reject) => {
            if (idade < 18)
                reject(new Error('Acesso negado!'));
            resolve('Acesso permitido!');
        }
    )
}

verificarMaioridade(10)
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro.message))
