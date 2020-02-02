import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';


@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  loggedUser: User;
  cartTotal;
  constructor(private userService: UserService ) {

  }

  ngOnInit() {
    this.loggedUser = this.userService.getUser();
    if(this.loggedUser) {
      this.cartTotal = this.loggedUser.cart.reduce(this.cartTotalReducer, 0);
    }
  }

  onCartUpdate() {
    this.cartTotal = this.loggedUser.cart.reduce(this.cartTotalReducer, 0);
  }

  cartTotalReducer(accumulator, currentValue) {
    return accumulator + (currentValue.price * currentValue.quantityInCart);
  }



}
