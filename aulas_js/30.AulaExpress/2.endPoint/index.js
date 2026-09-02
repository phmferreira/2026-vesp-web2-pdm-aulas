import express from "express";

const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Olá mundo!</h1><p>Teste</p>');
});

app.get('/ola', (req, res) => {
    res.send('<h1>Olá</h1><p>No endpoint ola</p>');
});

app.get('/ola/:nome', (req, res) => {
    res.send(
        `<h1>Olá, ${req.params.nome}</h1>`
    );
})

app.listen(port, () => {
    console.log('Executando...');
});