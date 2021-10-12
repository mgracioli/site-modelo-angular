import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';
import { FileService } from 'server/src/services/file.service';
import { environment } from 'src/environments/environment';
import { cardProduct } from './models/card-product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  shoppingCartQuantity: string = '10'
  products!: cardProduct[]
  prodsPerCard: number = 4
  prodCategories: string[] = ['Gift Cards', 'Gift Cards', 'Top Deal', 'Audio Books', 'HouseWare', 'Relax Time']

  constructor(private fileService: FileService) { }

  ngOnInit(): void {

  }

  // /api/downloadMenuPDF não é uma rota do angular, é uma chamada para o backend que devolve, como resposta, o arquivo pdf para fazer o download
  downloadMenu(){
    this.fileService.download(environment.BASE_URL+'/downloadMenuPDF')
    .subscribe((res: any) => {
      this.fileService.handleFile(res, 'menu.pdf')
    });
  }

}
