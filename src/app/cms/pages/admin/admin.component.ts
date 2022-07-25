import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/shared/sidebar.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  collapsed : boolean | null = null;

  constructor(
    private _sidebarService: SidebarService
  ) {
    this.listeningCollapsed();
  }

  ngOnInit(): void {
  }

  listeningCollapsed(): void {
    this._sidebarService.lisStatus$
    .subscribe(
      res => {
        this.collapsed = res;
      }
    );
  }

}
