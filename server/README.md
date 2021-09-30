Para esse servidor funcionar foi adicionada a linha 7
no package.json dele ("start": ...)

# Como rodar o servidor junto com o Angular
-> Para inicializar o servidor:
    Usar "npm run start" (dentro do diretório "server").

-> Para inicializar o angular:
    Se estiver rodando o servidor:
        - Usar "npm run start" (no diretório "site-mo
        delo-angular") pq daí o angular vai passar pelo 
        proxy evitando o problema de crossorigin nas comunicações do angular com o servidor.
    
    Se não estiver rodando o servidor:
    - Usar "ng serve" normal.