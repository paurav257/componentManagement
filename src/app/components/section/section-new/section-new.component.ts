import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionService } from '../../../services/section.service.client';
import { SharedService } from '../../../services/shared.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-section-new',
  templateUrl: './section-new.component.html',
  styleUrls: ['./section-new.component.css']
})
export class SectionNewComponent implements OnInit {

  @ViewChild('f') newSectionForm: NgForm;

  currentUser;
  componentId;
  moduleId;
  section = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private sectionService: SectionService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(this.sharedService.user);
      this.componentId = params['cid'];
      this.moduleId = params['mid'];
      this.currentUser = this.sharedService.user;
    });
  }

  createSection() {
    this.section['name'] = this.newSectionForm.value.sectionName;
    this.section['description'] = this.newSectionForm.value.sectionDesc;
    this.sectionService.createSection(this.moduleId, this.section)
      .subscribe((section) => {
        this.section = section;
        this.router.navigate(['/component', this.componentId]);
      });
  }


}
