function buscarUsuario(id, callback) {
    setTimeout(function(){
        // instução de busca no BD
        let usuarioBuscado = {
            id: id,
            nome: 'Ana'
        };
        callback(usuarioBuscado);
    }, 2000);
}

function mostraNoLog(usuario) {
    console.log(usuario);
}

buscarUsuario(1, mostraNoLog);