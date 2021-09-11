import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core/core.module';

//ESSE MODULO SERVE PARA ALGUMA COISA? APARENTEMENTE NAO

@NgModule({
  declarations: [
    //HomeComponent
  ],
  imports: [
    CommonModule,
    //CoreModule
  ],
  exports: [
  ]
})
export class HomeModule { }
