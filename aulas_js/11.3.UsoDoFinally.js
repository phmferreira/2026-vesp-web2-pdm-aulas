function conexaoBD() {
    try {
        console.log('Conectando BD.');
        console.log('Autenticação BD');
        console.log('Leitura de Dados');
        console.log('Tratamento nos dados');
    } catch (error) {
        console.log('Erro na conexão ao BD');
        console.log(error.message);
    } finally {
        console.log('Fechando conexão ao BD');
    }
}