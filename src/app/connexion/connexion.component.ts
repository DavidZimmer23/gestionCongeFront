import { ConnexionService } from './../shared/service/connexion/connexion.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  connexionForm: FormGroup = new FormGroup({});
  login: string;
  motDePasse: string;
  connect: any;


  constructor(private connexionService: ConnexionService, private conserv: ConnexionService) { }

  ngOnInit() {
    this.connexionForm = new FormGroup({
      login: new FormControl(null, Validators.required),
      motDePasse: new FormControl(null, Validators.required),
    });
  }
  onSubmit() {
    console.log(this.connexionForm.value);
}
connexion(): any {
  return this.conserv.connexion(this.connexionForm.value.login, this.connexionForm.value.motDePasse)
  .subscribe((value: any) => {
    this.connect = value;
    console.log(this.connect);
      });

}}
