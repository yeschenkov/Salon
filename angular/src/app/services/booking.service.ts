import { Injectable } from '@angular/core';
import { BaseCrudService } from '../models/base-crud-service';
import { Booking } from '../models/booking';
import { AuthenticationService } from './authentication.service';

@Injectable({
	providedIn: 'root'
})
export class BookingService extends BaseCrudService<Booking> {
	protected url = './api/bookings';
	constructor(protected auth: AuthenticationService) {
		super(auth);
	}
}
