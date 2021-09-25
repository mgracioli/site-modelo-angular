import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core.module';
import { MasterComponent } from './master.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    RouterModule  //importa RouterModule para poder usar o <router-outlet> no template
  ],
  exports: [
    MasterComponent
  ]
})
export class MasterModule { }
