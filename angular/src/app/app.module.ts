import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
	MatToolbarModule,
	MatSidenavModule,
	MatListModule,
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatInputModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { MastersComponent } from './components/masters/masters.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		RegisterComponent,
		HomeComponent,
		ScheduleComponent,
		MastersComponent
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
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
