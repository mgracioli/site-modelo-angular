import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';

/* GUARDA DE ROTAS - VERIFICA SE O USUÁRIO ESTÁ LOGADO E, CONSEQUENTEMENTE, SE PODE, OU NÃO, ACESSAR UMA ROTA */

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanLoad { /* CanLoad: função de não permitir o carreegamento de determinada rota se o usuário nao tiver permissão para isso, o canLoad impede o navegador de carregar o (fazer o download do) codigo fonte das rotas que o usuário nao tem permissão para acessar, já o canActivate permite que ele faça o download do código dessas rotas na memória, isso é ruim porque alguém que entenda de programação pode acessar esses dados pelo F12 do navegador */

  constructor(
    private authService: AuthService, 
    private router: Router) { }

  canLoad(route: Route) : Observable<boolean> | boolean{
    return this.verifyAccess();
  }

  private verifyAccess(){
    if(this.authService.userIsAuthenticated()){
      return true;  //retornando true, o usuário poderá acessar a página
    }
    this.router.navigate(['/login']); //se o usuário não estiver autenticado, volta para a página de login
    return false;
  }

}
