import { Component, OnInit } from '@angular/core';
import { cardProduct } from './card-product';

@Component({
  selector: 'app-scroll-carrousel',
  templateUrl: './scroll-carrousel.component.html',
  styleUrls: ['./scroll-carrousel.component.scss']
})
export class ScrollCarrouselComponent implements OnInit {

  
  cardProduct: cardProduct = {
    cellName: '',
    price: '',
    storeName: ''
  }

  card!: any[]

  constructor() { }

  ngOnInit(): void {

    //inicializando a variável para servir de exemplo
    this.cardProduct.cellName = 'Iphone X'
    this.cardProduct.price = '1257,30'
    this.cardProduct.storeName = 'Electronics & More'
  }

  moveProducts(){
    console.log('moveu')
    //this.card = document.getElementsByClassName('carousel-card')
    //this.card.style.left=5+"px";
  }

}
