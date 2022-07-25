import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  collapsed : boolean | null = null;

  constructor(
    private _sidebarService: SidebarService
  ) {
  }

  ngOnInit(): void {
    this.listeningCollapsed();
  }

  ngAfterViewInit(): void {

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
