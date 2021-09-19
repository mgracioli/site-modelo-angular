import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})

/*  SERVIÇO PARA AUTENTICAÇÃO DO USUÁRIO, VERIFICA SE O USUÁRIO ESTÁ LOGADO */
export class AuthService {

  private usuarioAutenticado: boolean = false;  //informa para a rota de guarda se o usuário já está autenticado para poder acessar as rotas
  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@email.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);

      this.router.navigate(['/users']); //direciona para a pagina users caso o usuário esteja logado
    }else{
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  /* método usado para a guarda de rotas */
  usuarioEstaAuteticado(){
    return this.usuarioAutenticado;
  }

}
