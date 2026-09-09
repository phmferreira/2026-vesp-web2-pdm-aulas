import express from 'express';

const app = express();
const port = process.env.PORT;

const comunicaoSegura = (req, res, next) => {
    const senhaEnviada = req.headers['x-admin-secret'];
    if (!senhaEnviada) {
        return res.status(401).json(
            {erro: 'Acesso não autorizado'}
        )
    }
    if (senhaEnviada !== process.env.KEY_SECRET) {
        return res.status(401).json(
            {erro: 'Acesso não autorizado'}
        )
    }
    next();
}

// app.use(comunicaoSegura);

app.get('/publico', (req, res) => {
    res.json({ mensagem: "Rota aberta!" });
});

app.get('/admin/dashboard', comunicaoSegura, (req, res) => {
    res.json({
        mensagem: 'Bem-vindo ao site!!!'
    });
});

app.listen(port, (req, res) => {
    console.log('Executando serviço...');
});