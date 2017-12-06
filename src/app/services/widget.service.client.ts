import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// injecting service into module
@Injectable()

export class WidgetService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createWidget(sectionId, widget) {
    const url = this.baseUrl + '/api/section/' + sectionId + '/widget';
    return this.http.post(url, widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetsBySectionId(sectionId) {
    const url = this.baseUrl + '/api/section/' + sectionId + '/widget';
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findWidgetById(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateWidget(widgetId, widget) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.put(url, widget)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  deleteWidget(widgetId) {
    const url = this.baseUrl + '/api/widget/' + widgetId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.status;
          return data;
        }
      );
  }

  updateWidgetPosition(sectionId, initial, final) {
    const url = this.baseUrl + '/api/section/' + sectionId + '/widget?initial='
      + initial + '&final=' + final;
    return this.http.put(url, null)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

}
