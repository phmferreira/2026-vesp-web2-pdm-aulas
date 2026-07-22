function buscarUsuario() {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve(['Ana', 'Carlos']);
                }, 1000
            )
        }
    )
}

function buscarPosts() {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve(['Post 1', 'Post 2'])
                }, 2000
            )
        }
    )
}

function buscarComentarios() {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => {
                    resolve(['Comentário A', 'Comentário B']);
                }, 500
            )
        }
    )
}

const promisesBuscas = [
    buscarUsuario(),
    buscarPosts(),
    buscarComentarios(),
]

Promise.all(promisesBuscas)
    .then(resposta => console.log(resposta))