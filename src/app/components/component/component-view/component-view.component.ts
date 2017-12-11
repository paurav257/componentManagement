import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { ComponentService } from '../../../services/component.service.client';
import { ModuleService } from '../../../services/module.service.client';
import { SectionService } from '../../../services/section.service.client';
import { WidgetService } from '../../../services/widget.service.client';
import { DomSanitizer } from '@angular/platform-browser';
import { UserService } from '../../../services/user.service.client';

@Component({
  selector: 'app-component-view',
  templateUrl: './component-view.component.html',
  styleUrls: ['./component-view.component.css']
})
export class ComponentViewComponent implements OnInit {

  currentUser;
  componentId;
  moduleId;
  sectionId;
  sectionIndex = 0;
  moduleIndex = 0;
  component = {};
  modules = [{}];
  module = {};
  section = {};
  sections = [{}];
  widgets = [{}];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService,
              private componentService: ComponentService,
              private moduleService: ModuleService,
              private sectionService: SectionService,
              private widgetService: WidgetService,
              private domSanitizer: DomSanitizer,
              private userService: UserService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUser = this.sharedService.user;
      this.componentId = params['cid'];
      this.componentService.findComponentById(this.componentId)
        .subscribe((component) => {
          this.component = component;
        });
      this.moduleService.findModulesByComponentId(this.componentId)
        .subscribe((modules) => {
          this.modules = modules;
          if (this.modules && this.modules.length) {
            this.moduleId = modules[this.moduleIndex]['_id'];
            this.module = modules[this.moduleIndex];
            this.sectionService.findSectionsByModuleId(this.moduleId)
              .subscribe((sections) => {
                this.sections = sections;
                if (this.sections && this.sections.length) {
                  if (sections[this.sectionIndex]) {
                    this.sectionId = sections[this.sectionIndex]['_id'];
                    this.section = sections[this.sectionIndex];
                    this.widgetService.findWidgetsBySectionId(this.sectionId)
                      .subscribe((widgets) => {
                        this.widgets = widgets;
                      });
                  }
                }
              });
          }
        });
    });
  }

  selectModule(moduleIndex) {
    this.moduleIndex = moduleIndex;
    this.sectionIndex = 0;
    this.section = {};
    this.sections = [{}];
    this.widgets = [{}];
    this.module = this.modules[this.moduleIndex];
    this.sectionService.findSectionsByModuleId(this.module['_id'])
      .subscribe((sections) => {
        this.sections = sections;
        if (this.sections && this.sections.length) {
          if (sections[this.sectionIndex]) {
            this.sectionId = sections[this.sectionIndex]['_id'];
            this.section = sections[this.sectionIndex];
            this.widgetService.findWidgetsBySectionId(this.sectionId)
              .subscribe((widgets) => {
                this.widgets = widgets;
              });
          } else {
            this.sections = [{}];
          }
        }
      });
  }

  selectSection(sectionIndex) {
    this.sectionIndex = sectionIndex;
    this.section = this.sections[this.sectionIndex];
    this.widgets = [{}];
    this.widgetService.findWidgetsBySectionId(this.section['_id'])
      .subscribe((widgets) => {
        this.widgets = widgets;
      });
  }

  safeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

  updateWidgetPosition(event: Object) {
    this.widgetService.updateWidgetPosition(this.sectionId, event['startIndex'], event['endIndex'])
      .subscribe((data) => {
        if (data && data.success === true) {
          console.log('success');
        } else {
          console.log('error in updating position');
        }
      });
  }

  updateSectionPosition(event: Object) {
    this.sectionService.updateSectionPosition(this.moduleId, event['startIndex'], event['endIndex'])
      .subscribe((data) => {
        if (data && data.success === true) {
          console.log('success');
        } else {
          console.log('error in updating position');
        }
      });
  }

  updateModulePosition(event: Object) {
    this.moduleService.updateModulePosition(this.componentId, event['startIndex'], event['endIndex'])
      .subscribe((data) => {
        if (data && data.success === true) {
          console.log('success');
        } else {
          console.log('error in updating position');
        }
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
