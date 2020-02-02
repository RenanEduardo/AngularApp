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
    this.newQuantity.emit(this.quantityInCart - 1);
  }

  onAdd() {
    this.newQuantity.emit(this.quantityInCart + 1);
  }

}
