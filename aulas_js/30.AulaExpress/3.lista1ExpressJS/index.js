import express from 'express';
const app = express();
const port = 8080;

app.get('/sobre', (req, res) => {
  res.send('<p>Lista 1 - ExpressJS</p>');
});

app.get('/saudacao/:nome', (req, res) => {
    const nome = req.params.nome;
    res.send(`<p>Olá, ${nome}!</p><p>Exemplo de aula!</p>`);
});

app.get('/saudacao', (req, res) => {
    const nome = req.query.nome || 'Visitante';
    // if (!req.query.nome) {
    //     res.send('<p>Olá, Visitante!</p><p>Exemplo da lista!</p>');
    //     return;
    // }
    res.send(`<p>Olá, ${nome}!</p><p>Exemplo da lista!</p>`);
});

app.get('/ping', (req, res) => {
    res.status(200).json({ status: 'ok' });
});

app.get('/erro', (req, res) => {
    res.status(404).json({ mensagem: "Página não encontrada" });
});

app.listen(port, () => {
    console.log(
        `Servidor executando em http://localhost:${port}`
    );
});