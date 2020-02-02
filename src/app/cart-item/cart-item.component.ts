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
  constructor() { }

  ngOnInit() {
  }

  onNewQuantity(value) {
    this.product.quantityInCart = value;
    this.cartUpdated.emit();
  }

}
