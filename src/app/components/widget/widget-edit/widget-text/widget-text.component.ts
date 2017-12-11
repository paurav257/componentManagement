import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../services/shared.service';

@Component({
  selector: 'app-widget-text',
  templateUrl: './widget-text.component.html',
  styleUrls: ['./widget-text.component.css']
})
export class WidgetTextComponent implements OnInit {

  currentUser;
  componentId;
  moduleId;
  sectionId;
  widgetId;
  widgetEdit: Boolean;
  widget = {'name': '', 'type': 'TEXT', 'text': '', 'rows': '', 'placeholder': '', 'formatted': ''};

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private router: Router,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      console.log(this.sharedService.user);
      this.componentId = params['cid'];
      this.moduleId = params['mid'];
      this.sectionId = params['sid'];
      this.widgetId = params['wid'];
      this.currentUser = this.sharedService.user;
      if (this.widgetId) {
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe((widget) => {
            this.widget = widget;
            this.widgetEdit = true;
          });
      }
    });
  }

  createWidget() {
    this.widgetService.createWidget(this.sectionId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/component', this.componentId]);
        }
      });
  }

  updateWidget() {
    this.widgetService.updateWidget(this.widgetId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/component', this.componentId]);
        }
      });
  }

  deleteWidget() {
    this.widgetService.deleteWidget(this.widgetId)
      .subscribe((data) => {
        if (data === 200) {
          this.router.navigate(['/component', this.componentId]);
        }
      });
  }
}
