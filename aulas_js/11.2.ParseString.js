function parsearUsuario(jsonString) {
    let objeto;
    try {
        objeto = JSON.parse(jsonString);
    } catch (erro) {
        objeto = {
            erro: true,
            mensagem: "JSON Inválido"
        };
    }
    return objeto;
}

console.log(
    parsearUsuario(
        `{
            "nome": "João Silva",
            "idade": 20
        }`
    )
);
