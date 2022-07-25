import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string) {
    localStorage.setItem('item', token);
  }

  getToken() {
    const token = localStorage.getItem('item');
    return token;
  }

  removeToken() {
    localStorage.removeItem('token');
  }
}
