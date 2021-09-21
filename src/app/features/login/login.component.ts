import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/auth-service/auth.service';
import { User } from '../../shared/services/auth-service/user';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
	user: User = new User();

	constructor(private authService: AuthService) { }

	ngOnInit() {
	}

	login() {
		this.authService.login(this.user);
	}
}
