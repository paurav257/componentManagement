import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { ModuleService } from '../../../services/module.service.client';

@Component({
  selector: 'app-module-new',
  templateUrl: './module-new.component.html',
  styleUrls: ['./module-new.component.css']
})
export class ModuleNewComponent implements OnInit {

  @ViewChild('f') newModuleForm: NgForm;

  currentUser;
  componentId;
  module = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private moduleService: ModuleService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(this.sharedService.user);
      this.componentId = params['cid'];
      this.currentUser = this.sharedService.user;
    });
  }

  createModule() {
    this.module['name'] = this.newModuleForm.value.moduleName;
    this.module['description'] = this.newModuleForm.value.moduleDesc;
    this.moduleService.createModule(this.componentId, this.module)
      .subscribe((module) => {
        this.module = module;
        this.router.navigate(['/component', this.componentId]);
      });
  }

}
