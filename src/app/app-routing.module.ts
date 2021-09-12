import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full' /* path vazio é prefixo de qqer URL, por isso, quando for redirecionar paths vazios tem que usar o parâmetro full para ele entender que é a rota localhost:4200 que vai ter q ser redirecionada para a rota localhost:4200/home */
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule),
  },
  { 
    path: 'users', 
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) 
  },
  

  /* path: '**' é o caminho para rotas nao econtradas, quando o usuário digita uma rota que não existe ele é direcionado para essa página, que é a de erro 404 */
  // {
  //   path: '**',
  //   component: PaginaNaoEncontradaComponent
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
