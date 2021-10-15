import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopButtonComponent } from './components/scroll-top-button/scroll-top-button.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';
import { ScrollCarrouselComponent } from './components/scroll-carrousel/scroll-carrousel.component';
import { SearchNavigateBarComponent } from './components/search-navigate-bar/search-navigate-bar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ScrollTopButtonComponent,
    WhatsappButtonComponent,
    ScrollCarrouselComponent,
    SearchNavigateBarComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ScrollTopButtonComponent,
    WhatsappButtonComponent,
    ScrollCarrouselComponent,
    SearchNavigateBarComponent
  ]
})
export class CoreModule { }
