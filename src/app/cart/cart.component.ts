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
  }

  onCartUpdate() {
    console.log("Cart updated");
  }



}
