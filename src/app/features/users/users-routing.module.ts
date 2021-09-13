import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';

const routes: Routes = [
  { path: '', 
    component: UsersComponent,
    
    children: [ //uma vez que, para acessar a rota pai (users), eu preciso estar logado (por conta da rota de guarda), para acessar qqer rota filha também será necessário está logado, isso se dá de forma automática pq eu estou declarando que essa rota é filha da rota pai, que precisa da autenticação para ser acessada
      // {
      //   path: 'shoppingKart',  //implementar o carrinho de compras da pessoa
      //   component: xxxComponent
      // }
    ]
  }

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
