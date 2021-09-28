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
  movePx: number = 0;

  constructor() { }

  ngOnInit(): void {

    //inicializando a variável para servir de exemplo
    this.cardProduct.cellName = 'Iphone X'
    this.cardProduct.price = '1257,30'
    this.cardProduct.storeName = 'Electronics & More'
  }

  moveProducts(side: string){
    const carouselList = document.getElementById('carousel-list')
    
    if(side == "left"){
      this.movePx-=450

      if((carouselList!.offsetWidth + this.movePx) > 0){
        //console.log("width do carossel: "+carouselList?.offsetWidth)
        //console.log("movePx: "+this.movePx)
        console.log("movePx+carList: "+carouselList!.offsetWidth + this.movePx)
        carouselList!.style.left = this.movePx+"px"
      }else{
        this.movePx = carouselList!.offsetWidth;  //0 para travar o card-list senão ele vai ficar aumentando o valor de this.movePx e, quando clicar no botão de scroll-left, ele vai reposicionar a página para esse offset que estaria fora da lista (esse offset poderia ser infinito)
        console.log("movePx final: "+this.movePx)
      }    
    }else if(side == "right"){
      this.movePx+=450

      //offsetLeft retorna a distancia, em pixels, do carousel-list com relação ao carousel-frame
      if(carouselList!.offsetLeft != 0){
        carouselList!.style.left = this.movePx+"px"
      }else{
        this.movePx = 0;  //0 para travar o card-list senão ele vai ficar aumentando o valor de this.movePx e, quando clicar no botão de scroll-left, ele vai reposicionar a página para esse offset que estaria fora da lista (esse offset poderia ser infinito)
      }
    }
    
  }

}
