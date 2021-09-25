import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// PELA NAVBAR O CARREGAMENTO NAO ESTÁ SENDO FEITO POR LAZY LOADING??
const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
