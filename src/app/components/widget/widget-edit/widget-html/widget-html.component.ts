import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../../services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../../services/shared.service';

@Component({
  selector: 'app-widget-html',
  templateUrl: './widget-html.component.html',
  styleUrls: ['./widget-html.component.css']
})
export class WidgetHtmlComponent implements OnInit {

  currentUser;
  componentId;
  moduleId;
  sectionId;
  widgetId;
  widgetEdit: Boolean;
  widget = {};
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
      this.widget['text'] = '<p> Home Page</p>';
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
    this.widget['type'] = 'HTML';
    this.widgetService.createWidget(this.sectionId, this.widget)
      .subscribe((data) => {
        if (data) {
          this.widget = data;
          this.router.navigate(['/component', this.componentId]);
        }
      });
  }

  updateWidget() {
    this.widget['type'] = 'HTML';
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
