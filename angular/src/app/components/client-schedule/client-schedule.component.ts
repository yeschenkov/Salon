import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
	selector: 'app-client-schedule',
	templateUrl: './client-schedule.component.html',
	styleUrls: ['./client-schedule.component.scss']
})
export class ClientScheduleComponent implements OnInit {

	public bookings: Observable<Booking[]>;
	constructor(private bookingService: BookingService, public dialog: MatDialog) {
		this.bookings = this.bookingService.getAll();
	}

	ngOnInit() {
	}

	openDialog(booking?: Booking) {
		const dialogRef = this.dialog.open(BookingDialogComponent, {
			width: '500px',
			data: {
				booking: booking ? Object.assign({}, booking) : {}
			}
		});

		dialogRef.afterClosed().subscribe(result => {

		});
	}
	deleteBooking(booking: Booking) {
		this.bookingService.delete(booking.Id).subscribe();
	}
}
