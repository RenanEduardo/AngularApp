import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Product } from './product';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  loggedUser: User;
  users: User[];
  loginAction = new EventEmitter();
  addToCartAction = new EventEmitter();
  removeFromCartAction = new EventEmitter();

  constructor(private http: HttpClient) {
    this.http.get<User[]>('/assets/mocks/users.json').subscribe(users => this.users = users);
  }

  logon(email, password) {
    this.users.forEach(user => {
      if (user.email === email && user.password === password) {
        this.loggedUser = user;
        this.loginAction.emit(this.loggedUser);
      }
    });
    return this.loggedUser;
  }
  logout() {
    this.loggedUser = null;
    this.loginAction.emit(this.loggedUser);
  }

  getUser() {
    return this.loggedUser;
  }

  removeFromUserCart(product: Product) {
    if (this.loggedUser) {
      const cart = this.loggedUser.cart;
      cart.splice(cart.indexOf(product), 1);
      this.removeFromCartAction.emit(this.loggedUser);
      return false;
    }
  }
  addToUserCart(product: Product) {
    if (this.loggedUser) {
      const cart = this.loggedUser.cart;
      if (!cart.includes(product)) {
        // cart[cart.indexOf(product)].quantityInCart += 1;
        cart.push(product);
        this.addToCartAction.emit(this.loggedUser);
        return true;
      }
    }
    return false;
  }
}
