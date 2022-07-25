import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewChecked {

  collapsed: boolean | null = false;
  filter: boolean | null = null;

  constructor(
    private _cd: ChangeDetectorRef,
    private _router: Router,
    private _sidebarService: SidebarService,
    private _navbarService: NavbarService,
    public breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
    this.listeningQuery();
  }

  ngAfterViewChecked() {
    this.listeningSubNav();
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
          this._sidebarService.addStatus(true);
        } else {
          this.collapsed = false;
          this._sidebarService.addStatus(false);
        }
      });
  }

  listeningSubNav(): void {
    this.breakpointObserver
      .observe(['(max-width: 1030px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches && this._router.url === "/home") {
          this.filter = true;
          this._navbarService.addStatusWindow(true);
          this._cd.detectChanges();
        } else {
          this.filter = false;
          this._navbarService.addStatusWindow(false);
          this._cd.detectChanges();
        }
      });
  }

}
