import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './features/home/home.module';
import { MasterModule } from './features/master/master.module';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,  //preciso decarar o pageNotFoundComponent porque ele não é um módulo e está sendo usado no roteamento sem lazy loading aqui do app.routing.module
    //MasterComponent //MasterComponent não precisa ser declarado aqui porque ele é um módulo e eu estou importanto o MasterModule ali em baixo
  ],
  imports: [
    //Não é necessário importar nenhum módulo que for carregado por lazy loading aqui, de fato, não faz sentido carregar aqui módulos do lazy loading pois, tudo o que é importado aqui no app.module é baixado automaticamente no momento em que a página inicial do site é carregada
    BrowserModule,
    AppRoutingModule,
    //CoreModule,  //necessário para poder usar os seletores da navabr e do footer no master.component.html e o scroll-top-button.component na pagina home
    //FormsModule,  //o FormsModule é usado quando se trabalha com Template driven Forms (que são os formulários onde o template é manipulado no próprio template (aplicação de validações, por exemplo), geralmente usando a diretiva [(ngModel)] e as variáveis html do tipo <input #variavel>
    ReactiveFormsModule, //o ReactiveFormsModule é usado quando se trabalha com Reactive/Model driven forms (que são os formulários no qual o template é manipulado por typescript) - nesse projeto eu estou usando esse tipo de formulário
    MasterModule,
    HomeModule,  //HomeModule é importado aqui pois eu precisei fazer ele virar um módulo para poder usar o scroll-top-button lá no template dele
    HttpClientModule  //esse import é necessário para o funcionamento do servidor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
