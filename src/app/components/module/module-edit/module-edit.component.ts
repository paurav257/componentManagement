import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { ModuleService } from '../../../services/module.service.client';

@Component({
  selector: 'app-module-edit',
  templateUrl: './module-edit.component.html',
  styleUrls: ['./module-edit.component.css']
})
export class ModuleEditComponent implements OnInit {

  currentUser;
  componentId;
  moduleId;
  module = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private moduleService: ModuleService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUser = this.sharedService.user;
      this.componentId = params['cid'];
      this.moduleId = params['mid'];
      this.moduleService.findModuleById(this.moduleId)
        .subscribe((module) => {
          this.module = module;
        });
    });
  }

  updateModule() {
    this.moduleService.updateModule(this.moduleId, this.module)
      .subscribe((module) => {
        this.module = module;
        this.router.navigate(['/component', this.componentId]);
      });
  }

  deleteModule() {
    this.moduleService.deleteModule(this.moduleId)
      .subscribe((data) => {
        if (data === 200) {
          this.router.navigate(['/component', this.componentId]);
        }
      });
  }
}
