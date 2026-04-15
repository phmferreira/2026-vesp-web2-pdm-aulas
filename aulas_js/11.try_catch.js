let nome = 'João';

try {
    console.log('Concentando ao Servidor');
    // console.log(naoExiste);
    console.log('Faz a requisição');
    console.log('Tratamento da resposta');
} catch (erro) {
    console.log('Erro na conexão.');
    console.log(erro.message);
} finally {
    console.log(naoExiste);  
    console.log('Fechando conexão.');
}