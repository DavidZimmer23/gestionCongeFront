import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnexionComponent } from './connexion/connexion.component';
import { ConnexionService } from './shared/service/connexion/connexion.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
    ConnexionComponent,
  ],
  imports: [
    BrowserModule,
    DateRangePickerModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ConnexionService],
  bootstrap: [AppComponent],
})
export class AppModule { }
