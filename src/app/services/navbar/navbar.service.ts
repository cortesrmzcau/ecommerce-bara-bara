import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private listeningStatusWindow = new BehaviorSubject<boolean | null>(null);
  lisStatusWindow$ = this.listeningStatusWindow.asObservable();

  constructor() { }

  addStatusWindow(status: boolean) {
    this.listeningStatusWindow.next(status);
  }
}
