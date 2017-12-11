import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  email: String;
  password: String;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {
  }

  login() {
    this.email = this.loginForm.value.email;
    this.password = this.loginForm.value.password;
    this.userService.login(this.email, this.password)
      .subscribe(
        (user: any) => {
          this.errorFlag = false;
          this.sharedService.user = user;
          this.router.navigate([`/`]);
        },
        (error: any) => {
          this.errorFlag = true;
          this.errorMsg = error;
        }
      );
  }

}
