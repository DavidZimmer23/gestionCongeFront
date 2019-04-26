import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  public editMode: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public search: Subject<string> = new Subject<string>();
  public club: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  constructor() {

  }
}
