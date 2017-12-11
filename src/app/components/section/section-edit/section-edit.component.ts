import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { ModuleService } from '../../../services/module.service.client';
import { SectionService } from '../../../services/section.service.client';

@Component({
  selector: 'app-section-edit',
  templateUrl: './section-edit.component.html',
  styleUrls: ['./section-edit.component.css']
})
export class SectionEditComponent implements OnInit {

  currentUser;
  componentId;
  moduleId;
  sectionId;
  section = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private moduleService: ModuleService,
              private sectionService: SectionService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUser = this.sharedService.user;
      this.componentId = params['cid'];
      this.moduleId = params['mid'];
      this.sectionId = params['sid'];
      this.sectionService.findSectionById(this.sectionId)
        .subscribe((section) => {
          this.section = section;
        });
    });
  }

  updateSection() {
    this.sectionService.updateSection(this.sectionId, this.section)
      .subscribe((section) => {
        this.section = section;
        this.router.navigate(['/component', this.componentId]);
      });
  }

  deleteSection() {
    this.sectionService.deleteSection(this.sectionId)
      .subscribe((data) => {
        if (data === 200) {
          this.router.navigate(['/component', this.componentId]);
        }
      });
  }
}
