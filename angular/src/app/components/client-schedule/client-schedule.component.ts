import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking';

@Component({
	selector: 'app-client-schedule',
	templateUrl: './client-schedule.component.html',
	styleUrls: ['./client-schedule.component.scss']
})
export class ClientScheduleComponent implements OnInit {

	public bookings: Observable<Booking[]>;
	constructor(private bookingService: BookingService) {
		this.bookings = this.bookingService.getAll();
	}

	ngOnInit() {
	}

}
