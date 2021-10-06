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
		const inputPassword = document.getElementById('password')

		if(this.eye == 'bi-eye'){
			this.eye = 'bi-eye-slash'
			inputPassword?.setAttribute('type', 'text')
		}else{
			this.eye = 'bi-eye'
			inputPassword?.setAttribute('type', 'password')
		}
	}
}
