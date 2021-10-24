import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductDetailsService } from 'src/app/shared/services/product-details-service/product-details.service';
import { ProductDetails } from '../models/product-details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  miniatures: string[] = ['assets/scroll-carousel/carousel-miniature.jpg','./images/miniature2.jpg','./images/miniature3.jpg','./images/miniature4.jpg']
  productDetails!: ProductDetails
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductDetails()
  }

  /* uma vez que os dados do produto (produto referente ao id da rota atual) foram carregados pelo productDetailsResolver eu preciso recuperar esses dados depois que o componente for renderizado */
  getProductDetails(){
    this.inscricao = this.route.data.subscribe( /* data retorna um observable com os dados resolvidos pelo resolver da rota*/
      (info) => {
        this.productDetails = info.productDetail;  /* esse productDetail do info.productDetail tem q ser o mesmo nome que foi passado como chave lá no parametro resolve do products-routing.module */
      }
    );
  }

  goToPaymentOptions(){
    const element = document.getElementById('payment-options')
    element?.scrollIntoView({behavior:"smooth"});
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }
}
