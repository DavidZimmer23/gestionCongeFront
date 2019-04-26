import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  URL = 'http://localhost:8080/rest';
  public emps: any[];

  constructor(private http: HttpClient) { }

  public getAllEmployes(): any {
    return this.http.get<any[]>(this.URL + '/employes')
    .pipe(map(value => this.emps = value));
  }
}
