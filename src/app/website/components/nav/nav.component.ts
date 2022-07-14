import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from 'src/app/services/shared/sidebar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  statusMenu: boolean | null = false;
  collapsed: boolean | null = false;

  constructor(
    private _sidebarService: SidebarService
  ) { }

  ngOnInit(): void {
  }

  toggleHidden() {
    this.collapsed = !this.collapsed;
    this.statusMenu = !this.statusMenu;
    this._sidebarService.addStatus(this.statusMenu);
  }

}
