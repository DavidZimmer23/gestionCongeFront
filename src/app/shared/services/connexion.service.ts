import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  URL = 'http://localhost:8080/restlogin';

  constructor(private http: HttpClient) { }

  public connexion(login, motDePasse) {
    return this.http.get<any>(this.URL + '/connexion/' + login + '/' + motDePasse);
  }
}
