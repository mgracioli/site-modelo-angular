import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Card } from 'src/app/shared/services/get-cards-service/card';
import { GetCardsContentService } from 'src/app/shared/services/get-cards-service/get-cards-content.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards$!: Observable<Card[]>
  
  constructor(
    private getCardsContentService: GetCardsContentService
  ) { }

  ngOnInit(): void {
    this.populateCards()
  }

  //classe que carrega os cards com a imagem e descrição do produto
  populateCards(){    
    this.cards$ = this.getCardsContentService.getCards()  //não precisa se inscrever nesse observable porque lá no template eu estou usando o "| async" que se inscreve e desinscreve automaticamente desse observable. Se nao quiser usar o 'async' no template é só fazer o subscribe() aqui e o unsubscribe no ngOnDestroy()
    .pipe(
      //esse código só vai ser executao caso haja um erro na hora de obter a lista de cards
      catchError(error => {
        console.error("ERROR WHEN RETURNING CARDS LIST: "+error);  
        return EMPTY; //retorna EMPTY porque o pipe() precisa retornar um Observable (EMPTY é um observable vazio)
      })
    );
  } 

    
}
