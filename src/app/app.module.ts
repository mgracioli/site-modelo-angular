import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './features/home/home.component';
import { MasterComponent } from './features/master/master.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MasterComponent,
  ],
  imports: [
    //Não é necessário importar nenhum módulo que for carregado por lazy loading, de fato, não faz sentido carregar aqui módulos do lazy loading pois, tudo o que é importado aqui no app.module é baixado automaticamente no momento em que a página inicial do site é carregada
    BrowserModule,
    AppRoutingModule,
    CoreModule,  //necessário para poder usar os seletores da navabr e do footer no app.component.html
    //FormsModule,  //o FormsModule é usado quando se trabalha com Template driven Forms (que são os formulários onde o template é manipulado no próprio template (aplicação de validações, por exemplo), geralmente usando a diretiva [(ngModel)] e as variáveis html do tipo <input #variavel>
    ReactiveFormsModule //o ReactiveFormsModule é usado quando se trabalha com Reactive/Model driven forms (que são os formulários no qual o template é manipulado por typescript) - nesse projeto eu estou usando esse tipo de formulário
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
