import { Component, OnInit } from '@angular/core';
import { TokenPayload, AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	credentials: TokenPayload = {
		phone: '',
		name: '',
		password: ''
	};
	constructor(private auth: AuthenticationService, private router: Router) { }

	ngOnInit() {
	}
	register() {
		this.auth.register(this.credentials).subscribe(() => {
			this.router.navigateByUrl('/home');
		}, (err) => {
			console.error(err);
		});
	}
}
