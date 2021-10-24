import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth-service/auth.service';
import { User } from '../../shared/services/auth-service/user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	user: User = new User()
	eye: string = "bi-eye"

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	login() {
		this.authService.login(this.user);
	}

	/****************************************************/
	/* Função que mudo o ícone do olho da input password
	/****************************************************/
	changeEye(){
		const inputPassword = document.getElementById('password') as HTMLInputElement //porque não fazer: const inputPassword : HTMLInputElement = document...? Porque quando faz dessa forma, vai rtornar um erro dizendo: "Type 'HTMLInputElement' is missing the following prperties from...", isso porque o typecript não consegue detectar a atrbuição do documento.getelementById que vem depois, então ele entende que está sendo retornado um valor null para essa variável, por isso tem que declarar o tipo depois que o valor dela for atribuido

		if(this.eye == 'bi-eye'){
			this.eye = 'bi-eye-slash'
			inputPassword?.setAttribute('type', 'text')
		}else{
			this.eye = 'bi-eye'
			inputPassword?.setAttribute('type', 'password')
		}
	}
}
