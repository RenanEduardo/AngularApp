import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../auth.service';
import { Product } from '../product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  addedToCart = false;
  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  addToCart() {
    this.product.quantityInCart = 1;
    this.addedToCart = this.userService.addToUserCart(this.product);
  }

  removeFromCart() {
    this.userService.removeFromUserCart(this.product);
    this.addedToCart = this.userService.removeFromUserCart(this.product);
  }
}
