import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { NewAccountComponent } from './new-account/new-account.component';


const routes: Routes = [
  {
    path: '', 
    component: LoginComponent,
  },
  {
    path: 'new-account', 
    component: NewAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
