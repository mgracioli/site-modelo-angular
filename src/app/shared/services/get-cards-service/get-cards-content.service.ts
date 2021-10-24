import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class GetCardsContentService {

  constructor(
    private http: HttpClient
  ) { }

  public getCards(){ /*o Observable faz referência ao tipo de dados que esse método vai retornar - não é necessário fazer essa tipagem - Imagem é o tipo de dado que ele vai retornar*/
    return this.http.get<Card[]>('assets/get-cards-service/db-cards.json')
    .pipe(
      take(1) //já que esse get só vai pegar os cards do servidor uma vez e pronto, eu nao preciso manter a conexão aberta, por isso uso o take(1) que vai pegar a primeira resposta do servidor e finalizar o subscribe; caso os cards fossem dinâmicos (no caso de um websocket, por exemplo), eu precisaria ficar constantemente buscando eles no servidor, nesse caso, eu nao usaria o take(1). Não é obrigatorio usar ele uma vez que o async já vai fazer a mesma coisa 
    );
  }
}
