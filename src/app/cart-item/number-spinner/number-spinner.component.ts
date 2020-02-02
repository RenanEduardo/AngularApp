import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-number-spinner',
  templateUrl: './number-spinner.component.html',
  styleUrls: ['./number-spinner.component.css'],
})
export class NumberSpinnerComponent implements OnInit {

  @Input() quantityInCart;
  @Output() newQuantity = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubtract() {
    if (this.quantityInCart > 0) {
      this.newQuantity.emit(this.quantityInCart - 1);
    }
  }

  onAdd() {
    if (this.quantityInCart < 100) {
      this.newQuantity.emit(this.quantityInCart + 1);
    }
  }

}
