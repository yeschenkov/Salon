import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ClientScheduleComponent } from '../client-schedule/client-schedule.component';
import { AdminScheduleComponent } from '../admin-schedule/admin-schedule.component';
import { BookingService } from 'src/app/services/booking.service';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

	componentRef: any;
	private userRoleName: string;
	constructor(
		private resolver: ComponentFactoryResolver,
		private container: ViewContainerRef,
		private auth: AuthenticationService
	) {
		this.userRoleName = this.auth.getUserDetails().roleName;
	}

	ngOnInit() {
		let factory;
		if (!this.userRoleName) {
			factory = this.resolver.resolveComponentFactory(ClientScheduleComponent);
		} else {
			factory = this.resolver.resolveComponentFactory(AdminScheduleComponent);
		}

		this.componentRef = this.container.createComponent(factory);
	}

}
