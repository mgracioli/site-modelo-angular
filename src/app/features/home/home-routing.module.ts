import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*COMO A PÁGINA HOME POSSUI LINKS PARA OUTRAS PÁGINAS, ELA PRECISA
TER UM MÓDULO DE ROTEAMENTO PARA QUE ESSES LINKS FUNCIONEM,
NÃO PRECISA DECLARAR AS ROTAS POIS JÁ FORAM DECLARADAS NO 
APP-ROUTING.MODULE.TS */

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }