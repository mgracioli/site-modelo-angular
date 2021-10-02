import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollTopButtonComponent } from './components/scroll-top-button/scroll-top-button.component';
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ScrollTopButtonComponent,
    WhatsappButtonComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ScrollTopButtonComponent,
    WhatsappButtonComponent
  ]
})
export class CoreModule { }
