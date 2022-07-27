import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.mode';
import { TokenService } from 'src/app/services/token/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  collapsed : boolean | null = null;
  changeCol : boolean | null = null;
  filter: boolean | null = null;
  paddingTop: boolean | null = null;

  user: User | null = null;

  constructor(
    private _cd: ChangeDetectorRef,
    public breakpointObserver: BreakpointObserver,
    private _navbarService: NavbarService,
    private _sidebarService: SidebarService,
    private _tokenService: TokenService,
    private _authService: AuthService
  ) {
    this.paddingTop = false;
  }

  ngOnInit(): void {
    this.listeningCollapsed();
  }

  ngAfterViewInit(): void {
    this.listeningQuery();
    this.listeningSubNav();
  }

  userInfo() {
    const token = this._tokenService.getToken();
    if (token) {
      this._authService.getProfile().subscribe(res => console.log(res))
    }
  }

  listeningSubNav(): void {
    this._navbarService.lisStatusWindow$
      .subscribe(
        res => {
          this.paddingTop = res;
          this._cd.detectChanges();
        })
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

    this.breakpointObserver
      .observe(['(max-width: 1010px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.filter = true;
        } else {
          this.filter = false;
        }
      });
  }

}
