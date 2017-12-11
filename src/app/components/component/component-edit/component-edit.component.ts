import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { ComponentService } from '../../../services/component.service.client';

@Component({
  selector: 'app-component-edit',
  templateUrl: './component-edit.component.html',
  styleUrls: ['./component-edit.component.css']
})
export class ComponentEditComponent implements OnInit {

  currentUser;
  componentId;
  component = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private componentService: ComponentService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUser = this.sharedService.user;
      this.componentId = params['cid'];
      this.componentService.findComponentById(this.componentId)
        .subscribe((component) => {
          this.component = component;
        });
    });
  }

  updateComponent() {
    this.componentService.updateComponent(this.componentId, this.component)
      .subscribe((component) => {
        this.component = component;
        this.router.navigate(['/']);
      });
  }

  deleteComponent() {
    this.componentService.deleteComponent(this.componentId)
      .subscribe((data) => {
        if (data === 200) {
          this.router.navigate(['/']);
        }
      });
  }

}
