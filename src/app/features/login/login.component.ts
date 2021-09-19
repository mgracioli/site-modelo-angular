import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth-service/auth.service';
import { Usuario } from '../../shared/services/auth-service/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin(){
    this.authService.fazerLogin(this.usuario);
  }


}
