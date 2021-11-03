import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Address } from 'src/app/shared/services/cep-services/address';
import { GetCepService } from 'src/app/shared/services/cep-services/get-cep.service';
import { ProductDetails } from '../../../shared/services/product-details-service/product-details';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  miniatures: string[] = ['assets/scroll-carousel/carousel-miniature.jpg', 'assets/home/home-thumb-1.jpg', 'assets/scroll-carousel/carousel-miniature.jpg', 'assets/home/home-thumb-2.jpg', 'assets/home/home-thumb-3.jpg']
  productDetails!: ProductDetails
  inscricao!: Subscription
  freteAddress$!: Observable<Address>

  constructor(
    private activatedRoute: ActivatedRoute,
    private getCepService: GetCepService
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
    this.inscricao = this.activatedRoute.data /* data retorna um observable com os dados resolvidos pelo resolver da rota atual*/
      .subscribe( 
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
  *************************************************/
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
   * @param miniatureUrl String contendo a url da imagem em minitura clicada
   * @returns void
   * ***********************************************/
  changeMainImg(miniatureUrl: string) {
    const mainImg = document.getElementById('main-img')

    //só faz a troca e as animações se a imagem clicada for diferente da imagem atual
    if(miniatureUrl != mainImg?.getAttribute('src')){
      mainImg?.animate([
        { opacity: 1 },
        { opacity: 0 },
      ], {
        duration: 210,
      })
      
      //precisa do setTimeout porque eu só posso alterar a src da imagem sepois que a animação da imagem anterior terminar
      setTimeout(()=> {
        mainImg?.setAttribute('src', miniatureUrl)
        mainImg!.animate([
        { opacity: 0 },
        { opacity: 1 }
      ], {
        duration: 300,
      })
      }, 200) //inicia um pouco antes da animação da imagem antiga terminar para evitar uns pequenos bugs na transição
    }
  }

  /************************************************
   * 
   * @param
   * @returns 
   * ***********************************************/
  formataCEP(event: any){
    const cep = document.getElementById('teste')
    
    //console.dir(cep)

    // cep!.statusChanges.pipe( 	//statusChanges é um observable que emite um evento sempre que o status dos validators do campo/controle cep forem alterados, nesse caso, o status muda a cada valor digitado na input, ele vai ficar sempre mudando de INVALID para INVALID até o penultimo digito do cep, quando digitar o ultimo, ele muda para VALID
		// 	distinctUntilChanged(), //essa função só faz rodar a linha de baixo quando o status for modificado, nesse caso, como o CEP precisa ter 8 digitos para ser válido (isso foi definido no validator) ele vai imprimir o status inválido, inicialmente e, só após digitar o oitavo digito, ele vai imprimir na tela de novo o novo status de 'válido'. Sem essa função o programa ficaria imprimindo inválido a cada digito que eu colocasse do cep (até o 7º digito, depois imprimiria 'valido')
		// 	switchMap(status => status === 'VALID'? this.getCepService.findCep(cep!.value) : of({}))  //o método consultaCep() retorna um observable (que é a chamada http lá do viaCep) - of({}) é um observable que emite os argumentos passados para ele e completa sem erros; como, nesse caso, não estou passando argumentos, ele envia um observable vazio, isso porque o operador switchMap() precisa que sejam retornados observables
		// )
		// .subscribe(data => data ? this.populateDataForm(data) : {});
  }

  /************************************************
   * Método que faz a busca dos dados na API do ViaCep e devolve um Observable: Address com os respectivos dados
   * @param cep O CEP que se deseja buscar os dados
   * @returns void
   * ***********************************************/
  getCep(cep: string){
    this.freteAddress$ = this.getCepService.findCep(cep)
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
