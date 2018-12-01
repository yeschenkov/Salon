import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { MasterService } from 'src/app/services/master.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { Service } from 'src/app/models/service';

@Component({
	selector: 'app-master-dialog',
	templateUrl: './master-dialog.component.html',
	styleUrls: ['./master-dialog.component.scss']
})
export class MasterDialogComponent implements OnInit {

	public users: Observable<Array<User>>;
	public master: Service;
	constructor(
		public dialogRef: MatDialogRef<MasterDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data,
		private masterService: MasterService,
		private userService: UserService
	) {
		this.users = this.userService.getAll();
	}

	ngOnInit() {
		this.master = this.data.service;
		if (this.master['User']) {
			delete this.master['User'];
		}
		this.master.Duration /= 60;
	}

	save() {
		this.master.Duration *= 60;
		if	(this.master.Id) {
			this.masterService.update(this.master, this.master.Id).subscribe();
		} else {
			this.masterService.create(this.master).subscribe();
		}
		this.dialogRef.close();
	}
	close() {
		this.dialogRef.close();
	}
}
