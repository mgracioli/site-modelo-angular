import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { DropdownService } from './services/dropdown-service/dropdown.service';
import { GetCepService } from './services/cep-services/get-cep.service';
import { ProductDetailsResolver } from './guards/product-details.resolver';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,  //esse módulo é necessário para o dropdown.service
  ],
  providers: [
    GetCepService,
    DropdownService,
    ProductDetailsResolver
  ],
  exports: [
    
  ]
})
export class SharedModule { }
