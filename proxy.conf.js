/*esse é um proxy que vem embutido no angular cli
aqui eu estou usando para não precisar habilitar o 
cors no backend (o CORS é usado para impedir erro de 
crossorigin um vez que o frontend (porta 4200) e o 
backend (porta 8000) estão rodando em domínios (portas
diferentes))*/

/* para esse codigo funcionar precisa adionar a flag  --proxy-config
no package.json da aplicação (na parte de scripts (start))*/

/* **************************************************
    para rodar o servidor: 'npm run start' dentro da pasta server (o servidor vai passar a rodar na porta 8000)
    para rodar o angular: 'npm run start' dentro da pasta site-modelo-angular (o angular vai passar a rodar na porta 4200 usando o proxy)
*************************************************** */

/*o proxy faz a intermediação das requisições do cliente para o servidor*/

const PROXY_CONFIG = [
    {
        context: ['/api'],   //o '/api' é uma convenção que ajuda a distinguir o que é uma rota do angular do que é uma chamada para o backend, nesse caso, toda url que começar com /api eu sei que é uma chamada para backend e, não, uma rota do angular
        target: 'http://localhost:8000/', //quando o programa detectar que a url começa com /api ele vai redirecionar para a porta 8000 que é a do servidor
        secure: false, //true seria se estivesse usando https
        logLevel: 'debug', //padrão
        pathRewrite: { '^/api': '' }    //esse comando remove o /api da url, isso serve para quando o backend já está criado e os endpoints no seu servidor já existem (por exemplo, se meu backend já tem uma chamada para a url /download e eu crio esse proxy depois, o node vai tentar chamar localhost:8000/api/download e isso nao vai funcionar, por isso tem que tirar o /api, caso o backend ainda não tenha sido contruído, não precisa desse comando). Essa linha é usada nos casos, por exemplo, da linha 13 do arquivo index.js do servidor (app.get('/downloadMenuPDF', (req, res) => {}), como ali está declarado /downloadMenuPDF o proxy precisa apagar o /api senão ele nao encontra essa rota... 
    }
];

module.exports = PROXY_CONFIG;