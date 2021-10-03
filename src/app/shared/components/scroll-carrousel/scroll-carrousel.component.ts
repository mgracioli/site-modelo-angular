import { Component, OnInit } from '@angular/core';
import { cardProduct } from './card-product';

@Component({
	selector: 'app-scroll-carrousel',
	templateUrl: './scroll-carrousel.component.html',
	styleUrls: ['./scroll-carrousel.component.scss']
})
export class ScrollCarrouselComponent implements OnInit {

	//produtos a serem exibidos na lista de produtos
	cardProducts: cardProduct[] = []

	movePx: number = 0
	showButtonLeft = false	//mostra ou esconde os botões do carrossel de produtos
	showButtonRight = true	//mostra ou esconde os botões do carrossel de produtos

	constructor() { }

	ngOnInit(): void {
		//função para preencher a lista de produtos
		this.preencheCardList()	
	}

	/***************************************************************/
	/* Função para preencher a lista de produtos a titulo de exemplo
	/***************************************************************/
	preencheCardList(){
		for (let i = 0; i < 15; i++) {
			this.cardProducts.push({
				cellName: 'Iphone X 32GB Camera 55mpx Rose Gold, Silver or Black Gorilla Glass',
				price: '1.257,30',
				storeName: 'Electronics & More State Avenue'
			})
		}
	}

	/***************************************************************/
	/* Função para mover a lista de produtos
	/***************************************************************/
	moveProducts(side: string) {
		const carouselList = document.getElementById('carousel-list')
		const carouselFrame = document.getElementById('carousel-frame')


		console.log("this.MovePx: " + this.movePx)

		if (side == "left") {
			if ((this.movePx * -1) < carouselFrame!.clientWidth) {
				this.movePx-=600
				this.showButtons(this.movePx)
				carouselList!.style.left = this.movePx + "px"
			}
		} else if (side == "right") {
			//se this.movePx < 0 quer dizer que existem produtos a serem mostrados do lado esquerdo, se for = 0 é porque não tem (não vai ser nunca > 0 pq no momento que que this.movePx for > 0 o programa entra no else e faz o seu valor ser = 0)
			if (this.movePx < 0) {
				this.movePx+=600
				this.showButtons(this.movePx)
				carouselList!.style.left = this.movePx + "px"
			} else {
				this.movePx = 0  //0 para travar o card-list senão ele vai ficar aumentando o valor de this.movePx e, quando clicar no botão de scroll-left, ele vai reposicionar a página para esse offset que estaria fora da lista (esse offset poderia ser infinito)
			}
		}
	}

	showButtons(movePx: number){
		const carouselFrame = document.getElementById('carousel-frame')

		console.log('carousel-frame: '+carouselFrame?.clientWidth)
		console.log('movePx: '+movePx)

		if(movePx < 0){
			this.showButtonLeft = true		
			
			if((movePx * -1) < carouselFrame!.clientWidth){
				this.showButtonRight = true
			}else{
				this.showButtonRight = false
			}
			
		}else{
			this.showButtonLeft = false
			this.showButtonRight = true
		}	
	}
	

}
