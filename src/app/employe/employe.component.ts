import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../shared/services/employe.service';
import { Observable } from 'rxjs';
import { ConnexionService } from '../shared/services/connexion.service';


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  employes: any[];
  empById: any = {nom: 'nom par default', prenom: 'prenom par default'};
  constructor(private empService: EmployeService) { }

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

  getEmployeById(id) {
    this.empService.getEmployeById(id)
      .subscribe((value: any) => {
        this.empById = value;
        console.log(this.empById);
      });
  }
}
