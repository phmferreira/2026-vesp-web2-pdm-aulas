function instrucaoLatPromise(msg, tempo) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                if (typeof msg !== "string")
                    reject(new Error('Valor inválido!'));
                resolve(msg)
            }, tempo);
        }
    );
}

// instrucaoLatPromise('Abrir arquivo', 1500)
//     .then(resposta => {
//         console.log(resposta);
//         return instrucaoLatPromise(2, 500);
//     })
//     .then(resposta => {
//         console.log(resposta);
//         return instrucaoLatPromise('Escrita no arquivo', 1000);
//     })
//     .then(resposta => {
//         console.log(resposta);
//     })
//     .then(
//         () => console.log('Isso vai por último'))
//     .catch(
//         (erro) => console.log(erro.message)
// );

const promisesArquivo = [
    // 'Inicializando',
    instrucaoLatPromise('Abrir arquivo', 1500),
    instrucaoLatPromise('Leitura', 502),
    instrucaoLatPromise('Escrita no arquivo', 501)
    // 'Finalizacao'
]
// Promise.all
// Promise.all(promisesArquivo)
//     .then(resposta => console.log(resposta))
//     .catch(erro => console.log(erro.message));

// promise.race
Promise.race(promisesArquivo)
    .then(resposta => console.log(resposta))
    .catch(erro => console.log(erro.message));