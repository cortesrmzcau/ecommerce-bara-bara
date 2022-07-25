import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

import { switchMap, tap } from 'rxjs/operators';

import { TokenService } from '../token/token.service';
import { Auth } from 'src/app/models/auth.mode';
import { User } from 'src/app/models/user.mode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = `^${environment.API_URL}/api/auth`;
  private user = new BehaviorSubject<User | null >(null);
  user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private _tokenService: TokenService
  ) { }

  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.API}/login`, {email, password})
      .pipe(
        tap(res => this._tokenService.saveToken(res.access_token))
      )
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
      .pipe(
        switchMap(() => this.getProfile())
      )
  }

  getProfile() {
    return this.http.get<User>(`${this.API}/profile`)
      .pipe(
        tap(user => this.user.next(user))
      )
  }

  logOut() {
    this._tokenService.removeToken();
  }
}
