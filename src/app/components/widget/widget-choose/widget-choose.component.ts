import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-widget-choose',
  templateUrl: './widget-choose.component.html',
  styleUrls: ['./widget-choose.component.css']
})
export class WidgetChooseComponent implements OnInit {

  currentUser;
  componentId;
  moduleId;
  sectionId;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private sharedService: SharedService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(this.sharedService.user);
      this.componentId = params['cid'];
      this.moduleId = params['mid'];
      this.sectionId = params['sid'];
      this.currentUser = this.sharedService.user;
    });
  }
}
