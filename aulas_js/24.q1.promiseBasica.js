function aguardarSegundos(seg) {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve('Tempo esgotado!');
                }, seg * 1000
            )
        }
    )
}

const retorno = aguardarSegundos(2);
console.log(retorno);
retorno.then(resposta => console.log(resposta))
setTimeout(
    () => {
        console.log(retorno);
    }, 2000
)