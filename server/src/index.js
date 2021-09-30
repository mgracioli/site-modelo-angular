/* SERVIDOR SIMPLES UTILIZADO PARA FAZER O DOWNLOAD
DOS ARQUIVOS NA ROTA /PRODUCTS */

const express = require('express');

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}))

//Endpoint para o download de arquivos PDF (localhost:8000/downloadPDF)
app.get('/downloadMenuPDF', (req, res) => { // /downloadMenuPDF é a chamada do backend (rota do backend) para fazer o download, lá no arquivo.component.ts eu tenho q redirecionar algum botão ou link para essa rota. O pathRewrite lá do proxy existe por conta dessa rota, isso pq ela está declarada aqui como /downloadMenuPDF e não /api/downloadMenuPDF
    res.download('src/files/menu.pdf'); //faz o download do arquivo menu.pdf que está na pasta 'files'
});

//middleware: mensagem a ser enviada pelo servidor ao angular caso dê algum erro
app.use((err, req, res, next) => {
    res.json({error: err.message});
})

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000");
})
