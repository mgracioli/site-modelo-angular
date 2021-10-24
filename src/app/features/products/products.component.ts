import { Component, OnInit } from '@angular/core';
import { FileService } from 'server/src/services/file.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  prodCategories: string[] = ['GiftCards', 'Top Deal', 'Audio Books', 'HouseWare']
  prodsPerCard!: number[]

  constructor(
    private fileService: FileService
  ) { }

  ngOnInit(): void {
    //atualiza a quantidade de produtos em cada card. Cada vez que a página recarrega, cada card vai mostrar uma quantidade diferente de produtos (1 ou 4 produtos)
    this.prodsPerCardFunction()

    this.populaCards()  //implementar, não está funcionando
  }

  // /api/downloadMenuPDF não é uma rota do angular, é uma chamada para o backend que devolve, como resposta, o arquivo pdf para fazer o download
  downloadMenu(){
    this.fileService.download(environment.BASE_URL+'/downloadMenuPDF')
    .subscribe((res: any) => {
      this.fileService.handleFile(res, 'menu.pdf')
    });
  }

  //função para determinar, de forma aleatória, a quantidade de produtos em cada card (criei essa função para a página variar os cards cada vez que for carregada)
  prodsPerCardFunction(){
    this.prodsPerCard = []

    for(let i=0; i< this.prodCategories.length; i++){  
      var cardsQuantity = (((Math.floor(Math.random()*10)) % 2) == 0) ? 4 : 1
      this.prodsPerCard.push(cardsQuantity)
    } 
  }

  //classe que carrega as imagens e suas descrições nos cards
  //NÃO ESTÁ FUNCIONANDO
  populaCards(){
    const categoria: string = this.prodCategories[0]
    var imgs = document.getElementsByClassName(categoria)

    // console.log(categoria)
    // console.log(imgs)
    // console.log("imgs[0]: "+imgs[0])  //undefined porque?


    //imgs[0]?.setAttribute('src','./card-products/gift-cards/gc1')
    
    // Array.from(imgs).forEach((elem) => {
    //   console.log(elem)
    //   elem.setAttribute('src','./card-products/gift-cards/gc1')
    // })

    //const att = imgs[0].getAttribute('alt')
    //console.log("atrib: "+att)
    //imgs[0].alt

    //imgs[0]?.setAttribute('src','./card-products/gift-cards/gc1')
  }

}
