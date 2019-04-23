import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  constructor() { }

  rangeDates: Date[];
  invalidDates: Array<Date>;
  fr: any;

  ngOnInit() {
    this.fr = {
    firstDayOfWeek: 1,
    dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi ', 'jeudi', 'vendredi', 'samedi'],
    dayNamesShort: ['dim', 'lun', 'mar', 'mer', 'jeu', 'ven', 'sam'],
    dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    monthNames: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin',
     'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
    monthNamesShort: ['jan', 'fev', 'mar', 'avr', 'mai', 'juin', 'juil', 'aout', 'sep', 'oct', 'nov', 'dec'],
    dateFormat: 'dd.mm.yy',
};

    let today = new Date();
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate());
    this.invalidDates = [today, invalidDate];
  }

  handleClick() {

}

}
