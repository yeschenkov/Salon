import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
	MatToolbarModule,
	MatSidenavModule,
	MatListModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatInputModule,
	MatDialogModule,
	MatSelectModule,
	MatFormFieldModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import locale from '@angular/common/locales/ru';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MastersComponent } from './components/masters/masters.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AdminScheduleComponent } from './components/admin-schedule/admin-schedule.component';
import { MasterScheduleComponent } from './components/master-schedule/master-schedule.component';
import { ClientScheduleComponent } from './components/client-schedule/client-schedule.component';
import { MasterDialogComponent } from './components/master-dialog/master-dialog.component';
import { BookingDialogComponent } from './components/booking-dialog/booking-dialog.component';

registerLocaleData(locale);
@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		ScheduleComponent,
		MastersComponent,
		SettingsComponent,
		AdminScheduleComponent,
		MasterScheduleComponent,
		ClientScheduleComponent,
		MasterDialogComponent,
		BookingDialogComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		HttpClientModule,
		MatDialogModule,
		MatSelectModule,
		MatInputModule,
		MatFormFieldModule,
		OwlDateTimeModule,
		OwlNativeDateTimeModule,
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'ru' },
	],
	bootstrap: [AppComponent],
	entryComponents: [
		MasterDialogComponent,
		AdminScheduleComponent,
		ClientScheduleComponent,
		BookingDialogComponent
	]
})
export class AppModule { }
