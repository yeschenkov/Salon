import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MastersComponent } from './components/masters/masters.component';

const routes: Routes = [
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'register',
		component: RegisterComponent
	},
	{
		path: '',
		component: HomeComponent,
		canActivate: [AuthGuardService],
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'schedule'
			},
			{
				path: 'schedule',
				component: ScheduleComponent
			},
			{
				path: 'masters',
				component: MastersComponent
			}
		]
	},
	{
		path: '**',
		redirectTo: '',
	}
];


@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
