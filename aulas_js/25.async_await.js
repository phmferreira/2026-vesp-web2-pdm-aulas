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

async function executar() {
    
    try {
        const resposta = await instrucaoLatPromise('Abrir arquivo', 1500);
        console.log(resposta);
        const respostaLeitura = await instrucaoLatPromise(2, 500);
        console.log(respostaLeitura);
        const respostaEscrita = await instrucaoLatPromise('Escreve arquivo', 1000);
        console.log(respostaEscrita);
    } catch (erro) {
        console.log(erro.message);
        
    }
    
}

executar();