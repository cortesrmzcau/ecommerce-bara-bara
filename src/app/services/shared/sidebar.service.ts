import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private listeningStatus = new BehaviorSubject<boolean | null>(null);
  lisStatus$ = this.listeningStatus.asObservable();

  constructor() { }

  addStatus(status: boolean) {
    this.listeningStatus.next(status);
  }
}
