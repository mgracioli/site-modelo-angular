import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule  //necessário para poder usar os seletores da navabr e do footer no app.component.html
    //ProductsModule //não é necessário importar o ProductsModule pois ele será importado por lazy loading lá no app-routing.module, se importar ele aqui, o lazy loading não serve para nada. Com o lazy loading, o meu módulo products se torna independente do resto da aplicação
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
