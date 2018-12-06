import { Component, OnInit } from '@angular/core';
import { CalendarView, CalendarEvent, CalendarEventAction } from 'angular-calendar';
import { BookingService } from 'src/app/services/booking.service';
import { Booking } from 'src/app/models/booking';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
	selector: 'app-admin-schedule',
	templateUrl: './admin-schedule.component.html',
	styleUrls: ['./admin-schedule.component.scss']
})
export class AdminScheduleComponent implements OnInit {
	view: CalendarView = CalendarView.Week;

	CalendarView = CalendarView;
	events: CalendarEvent[] = [];
	bookings: Booking[];
	public year: number;
	public month: number;
	modalData: {
		action: string;
		event: CalendarEvent;
	};
	viewDate: Date = new Date();
	constructor(private bookingService: BookingService, public dialog: MatDialog) {
		this.updateBookings();
	}

	private updateBookings() {
		this.bookingService.getAll().subscribe(bookings => {
			this.bookings = bookings;
			this.events = bookings.map(b => {
				return <CalendarEvent>{
					start: new Date(b.DateFrom),
					end: new Date(b.DateTo),
					title: b['Service'].Name
				};
			});
		});
	}

	ngOnInit() {
	}

	handleEvent(action: string, event: CalendarEvent): void {
		this.modalData = { event, action };
		/* this.modal.open(this.modalContent, { size: 'lg' }); */
	}

	openDialog(booking?: Booking) {
		const dialogRef = this.dialog.open(BookingDialogComponent, {
			width: '500px',
			data: {
				booking: booking ? Object.assign({}, booking) : {}
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			this.updateBookings();
		});
	}
	deleteBooking(booking: Booking) {
		this.bookingService.delete(booking.Id).subscribe();
	}

}
