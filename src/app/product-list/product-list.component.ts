import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../products.service';
import { UserService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  loggedUser: User;
  products;
  firstRow;
  secondRow;
  thirdRow;
  constructor(private productsService: ProductsService, private userService: UserService) {
    this.userService.loginAction.subscribe(res => {
      this.loggedUser = res;
    });

    this.userService.addToCartAction.subscribe(res => {
      this.loggedUser = res;
    });

    this.userService.removeFromCartAction.subscribe(res => {
      this.loggedUser = res;
    });
   }

  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.firstRow = this.products;
    this.secondRow = this.products;
    this.thirdRow = this.products;
  }
  onAddToCart(product) {
    console.log(product);
  }

}
