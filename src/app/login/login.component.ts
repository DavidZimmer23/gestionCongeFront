import { Component, OnInit } from '@angular/core';
import { ConnexionService } from '../shared/services/connexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string;
  mdp: string;
  JSONItem: any = { nom: 'nom par default' };
  connecte: any;
  sessionItem: any;

  constructor(private conServ: ConnexionService, private router: Router) { }

  ngOnInit() {
  }

  connexion(login, mdp): any {
    this.conServ.connexion(login, mdp)
      .subscribe((value: any) => {
        this.connecte = value;
        console.log(this.connecte);
      });
    if (null != this.connecte) {
      console.log('connecte != null');
      sessionStorage.setItem('employeConnecte', JSON.stringify(this.connecte));
      this.JSONItem = sessionStorage.getItem('employeConnecte');
      this.sessionItem = JSON.parse(sessionStorage.getItem('employeConnecte'));
      this.router.navigate(['']);

    } else {
      console.log('connecte == null');
    }
    return this.connecte;
  }
}
