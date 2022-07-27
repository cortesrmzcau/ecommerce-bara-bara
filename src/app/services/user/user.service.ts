import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserDTO, User } from 'src/app/models/user.mode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private API = `${environment.API_URL}/api/users`;

  constructor(
    private http: HttpClient
  ) { }

  createUser(dto: CreateUserDTO) {
    return this.http.post<User>(this.API, dto);
  }
}
