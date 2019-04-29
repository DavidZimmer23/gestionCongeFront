import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  URL = 'http://localhost:8080/restEmployeService';
  public emps: any[];
  empById: any;

  constructor(private http: HttpClient) { }

  public getAllEmployes(): any {
    return this.http.get<any[]>(this.URL + '/getAll')
    .pipe(map(value => this.emps = value));
  }

  public getEmployeById(id) {
    return this.http.get<any>(this.URL + '/findById/' + id);
  }

  public saveEmploye(employe) {
    this.empById = this.http.post(this.URL + '/save', employe);
    return this.empById;
  }

  public deleteEmploye(employe) {
    return this.http.delete(this.URL + '/delete', employe);
  }
}
