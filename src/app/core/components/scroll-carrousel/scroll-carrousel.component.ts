import { Component, OnInit } from '@angular/core';
import { cardProduct } from './models/card-product';

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
		for (let i = 0; i < 18; i++) {
			this.cardProducts.push({
				id: i,
				productDescription: 'Iphone X 32GB Camera 55mpx Rose Gold, Silver or Black Gorilla Glass',
				price: '1.257,30',
				storeName: 'Electronics & More State Avenue'
			})
		}
	}

	/***************************************************************/
	/* Função para mover a lista de produtos
	/***************************************************************/
	cardsAlreadyShown = 0
	stopRollingToLeft = false
	stopRollingToRight = true
	remainingCards = 0
	cardsToBeShown = 0

	moveProducts(side: string) {
		const carouselList = document.getElementById('carousel-list')	//carousel-list é a div que se move
		const cardsPerPage = (window.innerWidth / 138)	//138 correponde ao tamanho de cada card (128px) + o margin-right (10px) aplicada a cada um deles
		const totalCards = (this.cardProducts.length)	//quantidade total de cards no carrossel
		const cardsPerClick = (600/138)	//600px é a quantidade de pixels que o carossel "anda" cada vez que pressiona um dos botões

		if (side == "left") {
			
			this.stopRollingToRight = false
			
			if(!this.stopRollingToLeft){
				this.remainingCards = totalCards - this.cardsAlreadyShown
				this.cardsToBeShown = this.remainingCards - cardsPerPage

				//se a quantidade de cards que ainda restam para ser mostrados for maior que a quantidade de cards novos que aparecem em cada clique do botão, então ele move os 600px padrão, caso contrário, move somente a quantidade de pixels referente à quantidade de cards que restam para serem mostrados
				if(this.cardsToBeShown > cardsPerClick) {
					this.movePx-=600
					carouselList!.style.left = this.movePx + "px"
					this.cardsAlreadyShown += cardsPerClick
				}else{
					const total = (this.cardsToBeShown*138)
					this.movePx-=total
					carouselList!.style.left = this.movePx + "px"				
					this.stopRollingToLeft = true
					this.cardsAlreadyShown += this.cardsToBeShown
				}	
			}
		} else if (side == "right") {
			this.stopRollingToLeft = false	
						
			if(!this.stopRollingToRight){
				this.remainingCards = cardsPerPage + this.cardsAlreadyShown
				this.cardsToBeShown = this.cardsAlreadyShown
				
				if (this.cardsToBeShown > cardsPerClick) {
					this.movePx+=600
					carouselList!.style.left = this.movePx + "px"
					this.cardsAlreadyShown -= cardsPerClick
				} else {			
					const total = this.cardsToBeShown*138
					this.movePx+=total
					carouselList!.style.left = this.movePx + "px"
					this.stopRollingToRight = true
					this.cardsAlreadyShown -= this.cardsToBeShown
				}
			}
			//se this.movePx < 0 quer dizer que existem produtos a serem mostrados do lado esquerdo, se for = 0 é porque não tem (não vai ser nunca > 0 pq no momento que que this.movePx for > 0 o programa entra no else e faz o seu valor ser = 0)
			// if (this.movePx < 0) {
			// 	this.movePx+=600
			// 	this.showButtons(this.movePx)
			// 	carouselList!.style.left = this.movePx + "px"
			// } else {
			// 	this.movePx = 0  //0 para travar o card-list senão ele vai ficar aumentando o valor de this.movePx e, quando clicar no botão de scroll-left, ele vai reposicionar a página para esse offset que estaria fora da lista (esse offset poderia ser infinito)
			// }
		}

		// console.log("///////////////////////////")
		// console.log("cardsAlreadyShown: "+this.cardsAlreadyShown)
		// console.log("cardsremainingCardss: "+this.remainingCards)
		// console.log("cardsToBeShown: "+this.cardsToBeShown)
		// console.log("cardsPerpage: "+cardsPerPage)
		// console.log("cardsPerClick: "+cardsPerClick)
		// console.log("totalCards: "+totalCards)
		// console.log("stopRollingToLeft: "+this.stopRollingToLeft)
		// console.log("stopRollingToRight: "+this.stopRollingToRight)
		// console.log("///////////////////////////")
	}

	
	// showButtons(movePx: number){
	// 	const carouselFrame = document.getElementById('carousel-frame')

	// 	if(movePx < 0){
	// 		this.showButtonLeft = true		
			
	// 		if((movePx * -1) < carouselFrame!.clientWidth){
	// 			this.showButtonRight = true
	// 		}else{
	// 			this.showButtonRight = false
	// 		}
			
	// 	}else{
	// 		this.showButtonLeft = false
	// 		this.showButtonRight = true
	// 	}	
	// }
	

}
