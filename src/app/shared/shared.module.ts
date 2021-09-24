import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownService } from './services/dropdown-service/dropdown.service';
import { GetCepService } from './services/cep-services/get-cep.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule  //esse módulo é necessário para o dropdown.service
  ],
  providers: [
    GetCepService,
    DropdownService
  ]
})
export class SharedModule { }
