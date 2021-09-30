import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  download(url: string){
    return this.http.get(url, {
      responseType: 'blob' as 'json'  //diz para o angular qual o tipo de arquivo que ele vai ter q fazer download - o tipo 'blob' é um conjunto de bytes
    })
  }

  handleFile(res: any, fileName: string){
    const file = new Blob([res], {  //res é uma instância do arquivo que será feito o download, res: res.type é para o navegador saber qual é o tipo desse arquivo que está sendo baixado
      type: res.type
    });

    // Suporte para IE
    // if(window.navigator && window.navigator.msSaveOrOpenBlob){
    //   window.navigator.msSaveOrOpenBlob(file);
    //   return;
    // }

    //cria um objeto a partir da instância do arquivo
    const blob = window.URL.createObjectURL(file);

    //cria um elemento <a> que fica invisível e simula um clique nele para fazer o download
    const link = document.createElement('a');
    link.href = blob;
    link.download = fileName; //nome do arquivo que será baixado para o usuário
    //link.click(); //simula um clique no botão, isso é o que vai fazer o download. O Firefox não tem suporte para esse comando (o chrome dá), por isso foi feito o comando abaixo
    //simula um clique no botão, essa maneira abaixo é suportada pelo Firefoz e pelo Chrome
    link.dispatchEvent(new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window
    }))

    //libera o objeto URL para informar o navegador que não é mais necessário manter a referência para o arquivo.
    setTimeout(() => {  //a função setTimeout é por conta do Firefox, se deixar os comandos de revoke e remove sem o setTimeout o Firefox não vai romover a instância do arquivo. O Chrome não precisa dessa função
      window.URL.revokeObjectURL(blob);
      link.remove();
    }, 100);
  }
}
