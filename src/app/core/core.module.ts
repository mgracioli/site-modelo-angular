import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreRoutingModule } from './core-routing.module';
import { ScrollTopButtonComponent } from './components/scroll-top-button/scroll-top-button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    ScrollTopButtonComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ScrollTopButtonComponent,
    PageNotFoundComponent
  ]
})
export class CoreModule { }
