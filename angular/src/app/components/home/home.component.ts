import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public menuItems = [];
	public role: string;
	public name: string;
	public title: string;

	constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		const userDetails = this.auth.getUserDetails();
		this.name = userDetails.name;
		switch (userDetails.roleName) {
			case null:
				this.menuItems = userMenu;
				this.role = 'Пользователь';
				break;
			case 'Admin':
				this.menuItems = adminMenu;
				this.role = 'Администратор';
				break;
			case 'Master':
				this.menuItems = masterMenu;
				this.role = 'Мастер';
				break;
		}

		this.title = this.getPageTitle();
		this.router.events.subscribe(() => {
			this.title = this.getPageTitle();
		});
	}

	public logout() {
		this.auth.logout();
		this.router.navigate(['/login']);
	}

	private getPageTitle() {
		if (this.menuItems.length) {
			const activeItem = this.menuItems.find(el => el['link'] === this.router.url);
			if (activeItem) {
				return activeItem['title'];
			}
		}
		return '';
	}

}

const adminMenu = [
	{
		link: '/schedule',
		icon: 'event',
		title: 'Календарь салона'
	},
	{
		link: '/masters',
		icon: 'account_circle',
		title: 'Управление мастерами'
	},
	{
		link: '/settings',
		icon: 'settings',
		title: 'Настройки'
	}
];
const userMenu = [
	{
		link: '/schedule',
		icon: 'event',
		title: 'Мои записи'
	},
	{
		link: '/settings',
		icon: 'settings',
		title: 'Настройки'
	}
];
const masterMenu = [
	{
		link: '/schedule',
		icon: 'event',
		title: 'Календарь клиентов'
	},
	{
		link: '/settings',
		icon: 'settings',
		title: 'Настройки'
	}
];
