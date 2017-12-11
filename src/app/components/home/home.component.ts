import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { UserService } from '../../services/user.service.client';
import { ComponentService } from '../../services/component.service.client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  currentUser;
  components = [{}];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private userService: UserService,
              private componentService: ComponentService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(this.sharedService.user);
      this.currentUser = this.sharedService.user;
      this.componentService.findAllComponent()
        .subscribe((data) => {
          if (data) {
            this.components = data;
            console.log(this.components);
          }
        });
    });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => {
          this.currentUser = undefined;
          this.sharedService.user = undefined;
          this.router.navigate(['/']);
        }
      );
  }


}
