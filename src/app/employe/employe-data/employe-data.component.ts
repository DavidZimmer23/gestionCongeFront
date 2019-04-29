import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe-data',
  templateUrl: './employe-data.component.html',
  styleUrls: ['./employe-data.component.css']
})
export class EmployeDataComponent implements OnInit {

  employe: any;

  constructor() { }

  ngOnInit() {
    this.employe = JSON.parse(sessionStorage.getItem('employeConnecte'));
  }
}
