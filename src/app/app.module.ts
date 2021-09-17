import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './features/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    //Não é necessário importar nenhum módulo que for carregado por lazy loading, de fato, não faz sentido carregar aqui módulos do lazy loading pois, tudo o que é importado aqui no app.module é baixado automaticamente no momento em que a página inicial do site é carregada
    BrowserModule,
    AppRoutingModule,
    CoreModule,  //necessário para poder usar os seletores da navabr e do footer no app.component.html
    FormsModule,
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
