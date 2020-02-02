import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  loginForm;
  loggedUser;
  isLoggedIn;
  @Output() loginAction = new EventEmitter();
  @ViewChild('popOver') popover: NgbPopover;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: ''
    });
    this.isLoggedIn = false;
   }

  ngOnInit() {
  }

  openModal() {
    if (!this.popover.isOpen()) {
      this.popover.open();
    } else {
      this.popover.close();
    }
  }
  closeModal() {
    this.popover.close();
  }
  onSubmit(event, values) {
    event.preventDefault();
    this.loggedUser = this.userService.logon(values.email, values.password);
    if (this.loggedUser) {
      this.isLoggedIn = true;
    }
    this.closeModal();
  }
  logout() {
    this.loggedUser = null;
    this.isLoggedIn = false;
    this.userService.logout();
  }
}
