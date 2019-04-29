import { EmployeComponent } from './employe/employe.component';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeConnecte: any = sessionStorage.getItem('employeConnecte');
  title = 'gestionConge';

}
