import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  @Output() cartUpdated = new EventEmitter();
  itemTotal;
  constructor() { }

  ngOnInit() {
    this.itemTotal = this.product.price;
  }

  onNewQuantity(value) {
    this.product.quantityInCart = value;
    this.itemTotal = this.product.price * this.product.quantityInCart;
    this.cartUpdated.emit();
  }

}
