import express from 'express';

const port = 3000;

const app = express();

app.get("/", (req, res) => {
    res.send('ola mundo 1');
});

app.listen(port, () => {
    console.log('Servidor Executado na porta: ${port}');
});