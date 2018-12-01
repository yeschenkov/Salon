import { Injectable } from '@angular/core';
import { BaseCrudService } from '../models/base-crud-service';
import { Role } from '../models/role';
import { AuthenticationService } from './authentication.service';

@Injectable({
	providedIn: 'root'
})
export class RoleService extends BaseCrudService<Role> {
	protected url = './api/roles';
	constructor(protected auth: AuthenticationService) {
		super(auth);
	}
}
