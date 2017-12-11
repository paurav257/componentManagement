import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../services/user.service.client';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registrationForm: NgForm;

  user = {};
  verifyPassword: String;
  errorFlag: Boolean;
  errorMsg: String;

  constructor(private userService: UserService,
              private router: Router,
              private sharedService: SharedService) {
  }

  ngOnInit() {

  }

  register() {
    this.user['email'] = this.registrationForm.value.email;
    this.user['password'] = this.registrationForm.value.password;
    this.verifyPassword = this.registrationForm.value.verifyPassword;
    if (this.user['password'] !== this.verifyPassword) {
      this.errorFlag = true;
      this.errorMsg = 'Passwords are not matching!';
    } else {
      this.userService.register(this.user)
        .subscribe((user: any) => {
          this.user = user;
          if (this.user) {
            this.sharedService.user = user;
            this.router.navigate(['/']);
          } else {
            this.errorFlag = true;
            this.errorMsg = 'Failed to create User!';
          }
        });
    }
  }

}
