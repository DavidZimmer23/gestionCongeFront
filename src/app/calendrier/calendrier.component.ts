import {Component} from '@angular/core';

@Component ({
    selector: 'app-calendrier',
    templateUrl: './calendrier.component.html'
})

export class CalendrierComponent {
    public startDay = 1;
    public start: Date = new Date ();
    public end: Date = new Date ();
    public dateFormat = 'dd/MM/yy';
    constructor() {}

    disableDate(args): void {
        if (args.date.getDay() === 0 || args.date.getDay() === 6) {
       args.isDisabled = true;
   }
   }
}
