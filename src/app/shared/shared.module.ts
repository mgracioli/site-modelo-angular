import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownService } from './services/dropdown-service/dropdown.service';
import { GetCepService } from './services/cep-services/get-cep.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollCarrouselComponent } from './components/scroll-carrousel/scroll-carrousel.component';
import { ScrollCarouselRoutingModule } from './components/scroll-carrousel/scroll-carousel-routing.module';


@NgModule({
  declarations: [
    ScrollCarrouselComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,  //esse módulo é necessário para o dropdown.service
    ScrollCarouselRoutingModule
  ],
  providers: [
    GetCepService,
    DropdownService
  ],
  exports: [
    ScrollCarrouselComponent
  ]
})
export class SharedModule { }
