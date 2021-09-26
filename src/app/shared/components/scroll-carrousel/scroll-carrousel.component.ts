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

  constructor() { }

  ngOnInit(): void {

    //inicializando a variável para servir de exemplo
    this.cardProduct.cellName = 'Iphone X'
    this.cardProduct.price = '1257,30'
    this.cardProduct.storeName = 'Electronics & More'

  }

}
