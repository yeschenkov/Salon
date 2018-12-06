import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/models/service';
import { MatDialog } from '@angular/material';
import { MasterDialogComponent } from '../master-dialog/master-dialog.component';
import { MasterService } from 'src/app/services/master.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-masters',
	templateUrl: './masters.component.html',
	styleUrls: ['./masters.component.scss']
})
export class MastersComponent implements OnInit {

	public masters: Observable<Array<Service>>;
	constructor(public dialog: MatDialog, private masterService: MasterService) {
		this.resetMasters();
	}

	ngOnInit() {
	}

	openDialog(service?: Service) {
		const dialogRef = this.dialog.open(MasterDialogComponent, {
			width: '500px',
			data: {
				service: service ? Object.assign({}, service) : {}
			}
		});

		dialogRef.afterClosed().subscribe(result => {
			this.resetMasters();
		});
	}
	deleteMaster(master: Service) {
		this.masterService.delete(master.Id).subscribe();
	}

	public resetMasters() {
		this.masters = this.masterService.getAll();
	}
}
