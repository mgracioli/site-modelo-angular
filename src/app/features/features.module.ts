import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FeaturesRoutingModule } from './features-routing.module';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CoreModule
  ]
})
export class FeaturesModule { }
