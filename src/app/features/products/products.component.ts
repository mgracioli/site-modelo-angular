import { Component, OnInit } from '@angular/core';
import { FileService } from 'server/src/services/file.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  // /api/downloadMenuPDF não é uma rota do angular, é uma chamada para o backend que devolve, como rsposta, o arquivo pdf para fazer o download
  downloadMenu(){
    this.fileService.download(environment.BASE_URL+'/downloadMenuPDF')
    .subscribe((res: any) => {
      this.fileService.handleFile(res, 'menu.pdf')
    });
  }

}
