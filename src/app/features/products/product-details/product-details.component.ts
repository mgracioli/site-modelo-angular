import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ProductDetails } from '../models/product-details';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  miniatures: string[] = ['assets/scroll-carousel/carousel-miniature.jpg', 'assets/home/home-thumb-1.jpg', 'assets/scroll-carousel/carousel-miniature.jpg', 'assets/home/home-thumb-2.jpg', 'assets/home/home-thumb-3.jpg']
  productDetails!: ProductDetails
  inscricao!: Subscription
  //colorName!: string  //armazena o nome da cor do produto (caso haja mais de uma cor disponível)

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProductDetails()
    this.fillRatingStars(this.productDetails.rating)
    this.changeMainImg(this.miniatures[0])  //inicializa a imagem principal como sendo a primeira imagem do array miniatures[]
  }

  /*************************************************
   * Método que recupera as informações (o objeto) pré-carregadas pelo resolver e as atribui à variável productDetails para que sejam carregadas no template
   * uma vez que os dados do produto (produto referente ao id da rota atual) foram carregados pelo productDetailsResolver eu preciso recuperar esses dados depois que o componente for renderizado
   * @returns void
   *************************************************/
  private getProductDetails() {
    this.inscricao = this.activatedRoute.data
    .subscribe( /* data retorna um observable com os dados resolvidos pelo resolver da rota*/
      (info) => {
        this.productDetails = info.productDetail  /* esse productDetail do info.productDetail tem q ser o mesmo nome que foi passado como chave lá no parametro resolve do products-routing.module */    
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

  /************************************************
   * Método que faz a troca da imagem principal do produto sempre que for clicado em uma miniatura
   * @returns void
   * ***********************************************/
  changeMainImg(miniatureUrl: string){
    const mainImg = document.getElementById('main-img')
    mainImg?.setAttribute('src', miniatureUrl)
  }


  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
