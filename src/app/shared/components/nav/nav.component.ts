import { AfterViewChecked, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { SidebarService } from 'src/app/services/sidebar/sidebar.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user.mode';
import { TokenService } from 'src/app/services/token/token.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewChecked {

  collapsed: boolean | null = false;
  filter: boolean | null = null;

  user: User | null = null;
  role: boolean | null = null;

  constructor(
    private _cd: ChangeDetectorRef,
    private _router: Router,
    public breakpointObserver: BreakpointObserver,
    private _sidebarService: SidebarService,
    private _navbarService: NavbarService,
    private _authService: AuthService,
    private _tokenService: TokenService,
  ) { }

  ngOnInit(): void {
    this.userInfo();
    this.listeningQuery();
  }

  ngAfterViewChecked() {
    this.listeningSubNav();
  }

  userInfo() {
    const token = this._tokenService.getToken();
    if (token) {
      this._authService.getProfile()
        .subscribe(res => {
          this.user = res;
        })
    }
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

  logOut(): void {
    this._authService.logOut();
    this.user = null;
    this._router.navigate(['/login']);
  }

  redirectShoppingCart() {
    this._router.navigate(['shopping-cart']);
  }

}
