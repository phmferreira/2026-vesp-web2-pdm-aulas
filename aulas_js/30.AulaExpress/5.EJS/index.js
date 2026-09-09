import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    let tipoDia = 'dia de semana';
    let sugestao = 'fazer atividades produtivas'

    res.render(
        "index.ejs",
        {
            tipoDia: tipoDia,
            sugestao: sugestao
        }
    );
});


app.get('/ping', (req, res) => {
    res.send("Funcionando!");
});

app.listen(port, () => {
    console.log('Executando serviço!');
});