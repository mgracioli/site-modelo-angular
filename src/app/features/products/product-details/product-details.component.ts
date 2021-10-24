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

  miniatures: string[] = ['assets/scroll-carousel/carousel-miniature.jpg', './images/miniature2.jpg', './images/miniature3.jpg', './images/miniature4.jpg']
  productDetails!: ProductDetails
  inscricao!: Subscription
  //colorName!: string  //armazena o nome da cor do produto (caso haja mais de uma cor disponível)

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductDetails()
    this.fillRatingStars(this.productDetails.rating)
  }

  /*************************************************
   * Método que recupera as informações (o objeto) pré-carregadas pelo resolver e as atribui à variável productDetails para que sejam carregadas no template
   * uma vez que os dados do produto (produto referente ao id da rota atual) foram carregados pelo productDetailsResolver eu preciso recuperar esses dados depois que o componente for renderizado
   * @returns void
   *************************************************/
  private getProductDetails() {
    this.inscricao = this.route.data.subscribe( /* data retorna um observable com os dados resolvidos pelo resolver da rota*/
      (info) => {
        this.productDetails = info.productDetail;  /* esse productDetail do info.productDetail tem q ser o mesmo nome que foi passado como chave lá no parametro resolve do products-routing.module */
      }
    );
  }

  /************************************************
   * Método que preenche as estrelas com a cor amarela a depender do valor da avaliação dos clientes para aquele produto
   * esse método é chamado pelo método getProductsDetails()
   * @returns void
   * ***********************************************/
  private fillRatingStars(rating: number) {
    const starsWidth = document.getElementById('colored-stars')
    const ratingValue = this.productDetails.rating
    const percentOfColor = (ratingValue * 100) / 5

    starsWidth!.style.width = `${percentOfColor}%`
  }

   /************************************************
   * Método que atualiza o nome da cor do produto com base da propriedade 'colors' do produto atual selecionado 
   * @returns void
   * ***********************************************/
  changeColorName(event: any) {
    //o id, nesse caso, já é o código da cor, por isso posso fazer dessa forma
    const selectedColor = event.target.id
    //'color-name' é a span que mostra o nome da cor selecionada
    const colorName = document.getElementById('color-name')  
    //atribui o nome da cor no innerText da span  
    colorName!.innerText = selectedColor   
  }

  /************************************************
   * Método que faz o scroll da janela para a section 'payment-options' ao clicar no link 'More payment methods'
   * @returns void
   * ***********************************************/
  goToPaymentOptions() {
    const element = document.getElementById('payment-options')
    element?.scrollIntoView({ behavior: "smooth" });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
