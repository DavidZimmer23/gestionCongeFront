import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  URL = 'http://localhost:8080/restCongeService';

  constructor(private http: HttpClient) { }

  public getCongeByIdEmploye(id: number) {
    return this.http.get<any>(this.URL + '/getCongeByIdEmploye/' + id);
  }
}
