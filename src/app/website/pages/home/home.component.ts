import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SidebarService } from 'src/app/services/shared/sidebar.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collapsed : boolean | null = null;
  changeCol : boolean | null = null;

  constructor(
    private _sidebarService: SidebarService,
    public breakpointObserver: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
    this.listeningCollapsed();
    this.listeningQuery();
  }

  listeningCollapsed(): void {
    this._sidebarService.lisStatus$
    .subscribe(
      res => {
        this.collapsed = res;
      }
    );
  }

  listeningQuery(): void {
    this.breakpointObserver
      .observe(['(max-width: 1280px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this._sidebarService.addStatus(true);
        } else {
          this._sidebarService.addStatus(false);
        }
      });

    this.breakpointObserver
      .observe(['(max-width: 1490px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.changeCol = true;
        } else {
          this.changeCol = false;
        }
      });
  }

}
