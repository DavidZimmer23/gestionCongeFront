import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CalendrierService {

  URL = 'http://localhost:8088//rest';
private apiUrl = '/api/calendrier';
  constructor(private http: Http) { }

  createConge(Date, Date) : {}
}
