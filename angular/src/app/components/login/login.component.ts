import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
	public isOk: boolean;
	constructor(private auth: AuthenticationService, private router: Router) {
		this.isOk = true;
	}

	ngOnInit() {
	}

	login() {
		this.auth.login(this.credentials).pipe(
			map(() => {
				this.isOk = true;
				this.router.navigateByUrl('/home');
			}),
			catchError((err) => {
				this.isOk = false;
				return of(err);
			})
		).subscribe();
	}
}
