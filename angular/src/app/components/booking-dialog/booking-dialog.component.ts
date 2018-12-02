import { Component, OnInit, Inject } from '@angular/core';
import { Service } from 'src/app/models/service';
import { Observable } from 'rxjs';
import { MasterService } from 'src/app/services/master.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Booking } from 'src/app/models/booking';
import { BookingService } from 'src/app/services/booking.service';
import { UserDetails, AuthenticationService } from 'src/app/services/authentication.service';

@Component({
	selector: 'app-booking-dialog',
	templateUrl: './booking-dialog.component.html',
	styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit {

	public services: Service[];
	public booking: Booking;
	public initialTimeValue: Date;
	public userDetails: UserDetails;
	constructor(
		private masterService: MasterService,
		private bookingService: BookingService,
		public dialogRef: MatDialogRef<BookingDialogComponent>,
		public auth: AuthenticationService,
		@Inject(MAT_DIALOG_DATA) public data
	) {
		this.services = [];
		this.masterService.getAll().subscribe(s => this.services = s);
		const currentDate = new Date();
		this.userDetails = this.auth.getUserDetails();
		this.initialTimeValue = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 9, 0);
	}

	ngOnInit() {
		this.booking = this.data.booking;
	}

	save() {
		this.booking.DateTo = new Date(this.booking.DateFrom);
		const service = this.services.find(s => s.Id === this.booking.ServiceId);
		this.booking.DateTo.setTime(this.booking.DateFrom.getTime() + service.Duration * 60 * 1000);
		if (!this.userDetails.roleName) {
			this.booking.UserId = this.userDetails.id;
		}
		if	(this.booking.Id) {
			this.bookingService.update(this.booking, this.booking.Id).subscribe();
		} else {
			this.bookingService.create(this.booking).subscribe();
		}
		this.dialogRef.close();
	}
	close() {
		this.dialogRef.close();
	}
}
