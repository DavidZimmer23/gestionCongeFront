import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../shared/service/employe.service';
import { Observable } from 'rxjs';
import { ConnexionService } from '../shared/service/connexion/connexion.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes: any[];
  connecte: any;

  constructor(private empService: EmployeService, private conServ: ConnexionService) { }

  ngOnInit() {
    this.getAllEmployes();
  }

  getAllEmployes() {
    this.empService.getAllEmployes()
      .subscribe((value: any) => {
        this.employes = value;
        console.log(this.employes);
      });
  }

  connexion(): any {
    return this.conServ.connexion('Manu', 'Remy')
    .subscribe((value: any) => {
      this.connecte = value;
      console.log(this.connecte);
    });
  }
}
