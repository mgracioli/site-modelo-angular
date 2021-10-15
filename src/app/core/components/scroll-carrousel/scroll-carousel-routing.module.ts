import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*COMO ESSE COMPONENTE POSSUI LINKS PARA OUTRAS PÁGINAS, ELE 
PRECISA TER UM MÓDULO DE ROTEAMENTO PARA QUE ESSES LINKS FUNCIONEM,
*/

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollCarouselRoutingModule { }