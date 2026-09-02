import express from 'express';
import bodyParser from 'body-parser';

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log('Tipo do método:', req.method);
    console.log('Endpoint', req.url);
    next();
}

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger)

const produtos = [
  {
    id: 1,
    nome: "Água com gás",
    preco: 3
  },
  {
    id: 2,
    nome: "Batata",
    preco: 8
  },
  {
    id: 3,
    nome: "Cachorro-quente",
    preco: 10
  },
];

app.get('/produtos', (req, res) => {
    res.json(produtos);
});

app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find(p => p.id === id);
    if(!produto) {
        res.status(404).json(
            { mensagem: "Produto não encontrado" }
        );
        return;
    }
    res.json(produto);
});

app.get('/cadastrar', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/produtos', (req, res) => {
    const { nome, preco } = req.body;
    if (!nome || !preco) {
        res.status(400).json(
            { mensagem: "Nome e preço são obrigatórios" }
        );
        return;
    }
    const novoProduto = {
        id: produtos.length + 1,
        nome,
        preco
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});