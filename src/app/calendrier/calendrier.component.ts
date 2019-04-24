import {Component} from '@angular/core';

@Component ({
    selector: 'app-calendrier',
    templateUrl: './calendrier.component.html'
})

export class CalendrierComponent {
    public start: Date = new Date ();
    public end: Date = new Date ();
    constructor() {}
}
