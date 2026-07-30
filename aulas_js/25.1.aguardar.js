function aguardarSegundos(s) {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve('Tempo esgotado!')
                }, 1000 * s);
        }
    )
}

// aguardarSegundos(1).then(
//     resposta => console.log(resposta)
// );

async function executar() {
    let resposta = await aguardarSegundos(1);
    console.log(resposta);
}
executar();