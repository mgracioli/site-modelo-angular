import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-scroll-top-button',
	templateUrl: './scroll-top-button.component.html',
	styleUrls: ['./scroll-top-button.component.scss']
})
export class ScrollTopButtonComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	//mostra o botão de scroll top só quando já tiver feito scroll na página
	showButton() {
		const btnn = document.querySelector<HTMLElement>('.btn-container')

		if (btnn) {  //esse if serve para não dar erro nas rotas que não têm o componente <app-scroll-top-button>, como eu estou trabalhando com uma SPA, e o botão de scrolltop funciona com o scroll de uma window, ele não sabe diferenciar em qual window tem que executar (não deveria executar só quando é renderizado?? não sei pq nao funciona assim), portanto, vai tentar executar em todas as windows (rotas) do aplicativo, por isso, esse if verifica se o botão está inserido no htm da rota atual, se sim, faz o que tem que fazer, se não, não faz nada	
			return{
				'showBtn' : (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
			}
		}
		return ''
	}

	scrollToTop(){
	  document.body.scrollTop = 0
	  document.documentElement.scrollTop = 0
	}

}
