import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
    let tipoDia = 'dia de semana';
    let sugestao = 'fazer atividades produtivas'

    const hoje = new Date(2026, 8, 6);
    const diaSemana = hoje.getDay();

    if (diaSemana === 0 || diaSemana === 6) {
        tipoDia = 'final de semana';
        sugestao = 'descansar e se divertir';
    }

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