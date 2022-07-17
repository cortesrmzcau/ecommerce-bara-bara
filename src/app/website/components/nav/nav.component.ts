import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/shared/sidebar.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  collapsed: boolean | null = false;

  constructor(
    private _sidebarService: SidebarService,
    public breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.listeningQuery();
  }

  toggleHidden() {
    this.collapsed = !this.collapsed;
    this._sidebarService.addStatus(this.collapsed);
  }

  listeningQuery(): void {
    this.breakpointObserver
      .observe(['(max-width: 1280px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.collapsed = true;
        }
      });
  }

}
