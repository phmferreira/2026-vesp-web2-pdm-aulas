function instrucaoLatencia(msg, tempoLatencia) {
    setTimeout(
        () => {
            console.log(msg);
        }
        , tempoLatencia
    )
}

// instrucaoLatencia('Abrir arquivo', 1500);
// instrucaoLatencia('Leitura do arquivo', 500);
// instrucaoLatencia('Escrever no arquivo', 1000);
// console.log('Isso executa primeiro!!!');

function executar(funcaoCallback) {
    funcaoCallback();
}

function instrucaoLatCallback(
    msg, tempo, callback) {
    setTimeout(
        () => {
            console.log(msg);
            callback();
        }, tempo
    )
}

instrucaoLatCallback('Abrir arquivo', 1500,
    () => instrucaoLatCallback('Leitura de arquivo', 500,
        () => instrucaoLatCallback('Escreve no arquivo', 1000,
            () => console.log('Isso executa primeiro #sqn')
        )
    )
)

function autenticar(callback) {
    console.log('Autenticando com o sistema');
    let chaveAcesso = 1;
    if (callback) callback(chaveAcesso);
}

function conexao(chaveAcesso, callback) {
    console.log('Conectando ao sistema');
    console.log('Usando a chave', chaveAcesso);
    if(callback) callback()
}

// autenticar((chave) => {
//     conexao(chave,
//         () => {
//             console.log('Fim da conexão!');
//         }
//     )
// })

function instrucaoLatPromise(msg, tempo) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve(msg)
            }, tempo);
        }
    );
}

instrucaoLatPromise('Abrir arquivo', 1500)
    .then(resposta => {
        console.log(resposta);
        return instrucaoLatPromise('Leitura arquivo', 500);
    })
    .then(resposta => {
        console.log(resposta);
        return instrucaoLatPromise('Escrita no arquivo', 1000);
    })
    .then(resposta => {
        console.log(resposta);
    })
    .then(
        () => console.log('Isso vai por último')
    )