import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDetailsResolver } from 'src/app/shared/guards/product-details.resolver';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '', 
    component: ProductsComponent
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
    resolve: {productDetail: ProductDetailsResolver}    /* O resolver faz o pré-carregamento dos dados do produto selecionado com base no id da rota atual, ou seja, carrega os dados antes do template ser renderizado na tela, isso é interesante em situações onde, por exemplo, os dados são obtidos de um banco de dados uma vez q a consulta é um pouco lento */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }