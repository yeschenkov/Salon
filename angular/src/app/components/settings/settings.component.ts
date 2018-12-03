import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from 'src/app/services/authentication.service';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

	public userDetails: UserDetails;
	constructor(private auth: AuthenticationService) {
		this.userDetails = this.auth.getUserDetails();
	}

	ngOnInit() {
	}

}
