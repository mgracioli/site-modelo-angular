/* SERVIDOR SIMPLES UTILIZADO PARA FAZER O DOWNLOAD
DOS ARQUIVOS NA ROTA /PRODUCTS */

const express = require('express');

const app = express();

//middlewares (middlewares are methods/functions/operations that are called BETWEEN processing the Request and sending the Response in your application method)
//You NEED express.json() and express.urlencoded() only in POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
app.use(express.json());    //express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());
app.use(express.urlencoded({extended: true})) //express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. This method is called as a middleware in your application using the code: app.use(express.urlencoded());

//Endpoint para o download de arquivos PDF (localhost:8000/downloadMenuPDF)
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
