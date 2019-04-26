import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionService } from './shared/service/connexion/connexion.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeComponent } from './employe/employe.component';
import { EmployeService } from './shared/services/employe.service';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,

    ConnexionComponent,
    EmployeComponent

  ],
  imports: [
    BrowserModule,
    DateRangePickerModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [ConnexionService, EmployeService],
  bootstrap: [AppComponent],



})
export class AppModule { }
