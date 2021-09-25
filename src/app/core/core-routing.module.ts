import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../features/home/home.component';
import { ProductsComponent } from '../features/products/products.component';

// PELA NAVBAR O CARREGAMENTO NAO ESTÁ SENDO FEITO POR LAZY LOADING??
const routes: Routes = [
  // {
  //   path: '', 
  //   component: HomeComponent
  // },
  // {
  //   path: 'products',
  //   component: ProductsComponent
  // }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
