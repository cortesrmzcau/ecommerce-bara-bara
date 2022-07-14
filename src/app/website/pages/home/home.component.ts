import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/shared/sidebar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collapsed : boolean | null = null;

  constructor(
    private _sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
    this._sidebarService.lisStatus$
    .subscribe(
      res => {
        this.collapsed = res;
      }
    );
  }

}
