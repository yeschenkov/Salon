import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Service } from '../models/service';
import { BaseCrudService } from '../models/base-crud-service';

@Injectable({
	providedIn: 'root'
})
export class MasterService extends BaseCrudService<Service> {

	protected url = './api/services';
	constructor(protected auth: AuthenticationService) {
		super(auth);
	}
}
