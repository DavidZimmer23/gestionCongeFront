import { Component, OnInit } from '@angular/core';
import { CongeService } from '../shared/services/conge.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.component.html',
  styleUrls: ['./notif.component.css']
})
export class NotifComponent implements OnInit {

  listeConges: any[];
  employeConnecte: {idEmploye: number} = JSON.parse(sessionStorage.getItem('employeConnecte'));

  constructor(private congeService: CongeService) { }

  ngOnInit() {
    this.getCongeByEmployeId(this.employeConnecte.idEmploye);
  }

  getCongeByEmployeId(id: number) {
    return this.congeService.getCongeByIdEmploye(id)
    .subscribe((value: any) => {
      this.listeConges = value;
      console.log(this.listeConges);
    });
  }
}
