async function obterEndereco(cep) {
    const resposta = await
        fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );
    const respostaJson = await resposta.json();

    if (respostaJson.erro) {
        throw new Error('CEP não encontrado!');
    }

    return {
        'logradouro': respostaJson.logradouro,
        'localidade': respostaJson.localidade
    };
}

async function executar() {
    try {
        const resposta = await obterEndereco('00000000');
        console.log(resposta);
    } catch (erro) {
        console.log(erro.message);
    }
}
executar();
