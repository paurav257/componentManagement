import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../../../services/widget.service.client';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-widget-edit',
  templateUrl: './widget-edit.component.html',
  styleUrls: ['./widget-edit.component.css']
})
export class WidgetEditComponent implements OnInit {

  currentUser;
  componentId;
  moduleId;
  sectionId;
  widgetId;
  widget = {};

  constructor(private widgetService: WidgetService,
              private activatedRoutes: ActivatedRoute,
              private sharedService: SharedService) { }

  ngOnInit() {
    this.activatedRoutes.params.subscribe(params => {
      console.log(this.sharedService.user);
      this.componentId = params['cid'];
      this.moduleId = params['mid'];
      this.sectionId = params['sid'];
      this.widgetId = params['wid'];
      this.currentUser = this.sharedService.user;
        this.widgetService.findWidgetById(this.widgetId)
          .subscribe((widget) => {
            this.widget = widget;
          });
    });
  }

}
