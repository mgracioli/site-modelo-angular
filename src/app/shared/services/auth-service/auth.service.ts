import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

/*  SERVIÇO PARA AUTENTICAÇÃO DO USUÁRIO, VERIFICA SE O USUÁRIO ESTÁ LOGADO */
export class AuthService {

  private authenticatedUser: boolean = false;  //informa para a rota de guarda se o usuário já está autenticado para poder acessar as rotas
  //showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  login(user: User){
    if(user.name === 'usuario@email.com' && user.password === '123456'){
      this.authenticatedUser = true;
      //this.showMenuEmitter.emit(true);
      this.router.navigate(['/users']); //redireciona para a pagina users caso o usuário esteja logado
    }else{
      this.authenticatedUser = false;
      //this.showMenuEmitter.emit(false);
    }
  }

  /* método usado para a guarda de rotas */
  userIsAuthenticated(){
    return this.authenticatedUser;
  }

}
