import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DateRangePickerModule } from '@syncfusion/ej2-angular-calendars';
import { AppComponent } from './app.component';
import { CalendrierComponent } from './calendrier/calendrier.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendrierComponent,
  ],
  imports: [
    BrowserModule,
    DateRangePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
