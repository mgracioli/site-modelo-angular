import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { HomeComponent } from './features/home/home.component';
import { MasterComponent } from './features/master/master.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full' /* path vazio é prefixo de qqer URL, por isso, quando for redirecionar paths vazios tem que usar o parâmetro full para ele entender que é a rota localhost:4200 que vai ter q ser redirecionada para a rota localhost:4200/home */
  },
  {
    path: 'home',
    component: MasterComponent, //o MasterComponent contém a navbar e o footer, portanto, as rotas filhas serão carregadas dentro desse componente e vão ter a navbar e o footer; as rotas que não forem filhas não carregarão a navbar e o footer
    children:[
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        loadChildren: () => import('./features/products/products.module').then(m => m.ProductsModule),
      },
    ]
  },
  { 
    path: 'users', 
    loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule),
    canLoad: [AuthGuardService] /* o canLoad é aplicado a todas as rotas onde é aplicado o lazy load, porque assim, se o usuário não tiver permissao de acesso a essa rota, o navegador não vai fazer o download do código fonte dessas rotas na memória, essa é a diferneça entre o canLoad e o canActivate, que nao permite acesso a rota, porém permite o download do codigo fonte da rota na memória do navegador. Lambrando que o lazy load está relacionado ao carregamento das rotas filhas, que só são carregadas quando o usuário acessa a rota pai delas */
  },
  {
    path: 'login',
    loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule),
  },
  {
    /* path: '**' é o caminho para rotas nao econtradas, quando o usuário digita uma rota que não existe ele é direcionado para essa página, que é a de erro 404 */
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
