import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../models/user';
import { BaseCrudService } from '../models/base-crud-service';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService extends BaseCrudService<User> {

	protected url = './api/users';
	constructor(protected auth: AuthenticationService) {
		super(auth);
	}

	getOnlyUsers(): Observable<User[]> {
		return <Observable<User[]>>this.auth.httpGet(this.url + 'only');
	}
}
