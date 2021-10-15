import { Component, OnInit } from '@angular/core';
import { FileService } from 'server/src/services/file.service';
import { environment } from 'src/environments/environment';
import { cardProduct } from './models/card-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  prodCategories: string[] = ['Gift Cards', 'Top Deal', 'Gift Cards', 'Audio Books', 'HouseWare', 'Relaxing Time']
  prodsPerCard!: number[]

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    //atualiza a quantidade de produtos em cada card. Cada vez que a página recarrega, cada card vai mostrar uma quantidade diferente de produtos (1 ou 4 produtos)
    this.prodsPerCardFunction()
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

}
