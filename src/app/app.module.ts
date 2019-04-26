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

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    EmployeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CalendarModule,
    FormsModule,
    HttpClientModule,
    ButtonModule
  ],
  providers: [EmployeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
