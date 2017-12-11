import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { ComponentService } from '../../../services/component.service.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-component-new',
  templateUrl: './component-new.component.html',
  styleUrls: ['./component-new.component.css']
})
export class ComponentNewComponent implements OnInit {

  @ViewChild('f') newComponentForm: NgForm;

  currentUser;
  component = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private componentService: ComponentService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(this.sharedService.user);
      this.currentUser = this.sharedService.user;
    });
  }

  createComponent() {
    this.component['name'] = this.newComponentForm.value.componentName;
    this.component['description'] = this.newComponentForm.value.componentDesc;
    this.componentService.createComponent(this.component)
      .subscribe((component) => {
        this.component = component;
        this.router.navigate(['/']);
      });
  }

}
