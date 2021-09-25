import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    CoreModule,  //O CoreModule está sendo importado porque eu uso o scroll-top-button aqui no meu template
    HomeRoutingModule
  ],
  exports: [
    HomeComponent //Exporta o HomeComponent para ser usado no roteamento do app.routing.module
  ]
})
export class HomeModule { }
