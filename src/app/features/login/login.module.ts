import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewAccountComponent } from './new-account/new-account.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    NewAccountComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule, //esse modulo é necessario por conta do new-account.ts, lá eu uso uma injeção de dependência desse módulo, por isso precisa importar aqui
  ]
})
export class LoginModule { }
