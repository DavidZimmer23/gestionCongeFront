import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';

import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import { EmployeComponent } from './employe/employe.component';
import { EmployeService } from './shared/services/employe.service';

import { StorageServiceModule} from 'angular-webstorage-service';
import { LoginComponent } from './login/login.component';
import { EmployeDataComponent } from './employe/employe-data/employe-data.component';
import { HomeComponent } from './home/home.component';
import { NotifComponent } from './notif/notif.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    EmployeComponent,
    LoginComponent,
    EmployeDataComponent,
    HomeComponent,
    NotifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    StorageServiceModule
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
