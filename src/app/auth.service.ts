import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: User;
  users: User[];

  constructor(private http: HttpClient) {
    this.http.get<User[]>('/assets/mocks/users.json').subscribe(users => this.users = users);
  }

  logon(email, password) {
    this.users.forEach(user => {
      if (user.email === email && user.password === password) {
        this.loggedUser = user;
      }
    });
    return this.loggedUser;
  }
}
