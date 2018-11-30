import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	public credentials = {
		phone: '',
		password: ''
	};
	constructor(private auth: AuthenticationService, private router: Router) { }

	ngOnInit() {
	}

	login() {
		this.auth.login(this.credentials).subscribe(() => {
			this.router.navigateByUrl('/home');
		}, (err) => {
			console.error(err);
		});
	}
}
