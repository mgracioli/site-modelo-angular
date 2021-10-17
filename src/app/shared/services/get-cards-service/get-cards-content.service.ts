import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class GetCardsContentService {

  constructor(
    private http: HttpClient
  ) { }

  public getCards(){ /*o Observable faz referência ao tipo de dados que esse método vai retornar - não é necessário fazer essa tipagem - Imagem é o tipo de dado que ele vai retornar*/
    return this.http.get<Card[]>('assets/get-cards-service/db-cards.json');
  }
}
