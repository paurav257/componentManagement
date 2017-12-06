import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// injecting service into component
@Injectable()

export class ComponentService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createComponent(component) {
    const url = this.baseUrl + '/api/component';
    return this.http.post(url, component)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findComponentById(componentId) {
    const url = this.baseUrl + '/api/component/' + componentId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateComponent(componentId, component) {
    const url = this.baseUrl + '/api/component/' + componentId;
    return this.http.put(url, component)
      .map(
        (res: Response) => {
          const data = res.status;
          return data;
        }
      );
  }

  deleteComponent(componentId) {
    const url = this.baseUrl + '/api/component/' + componentId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.status;
          return data;
        }
      );
  }

  updateComponentPosition(componentId, initial, final) {
    const url = this.baseUrl + '/api/component/' + componentId + '/component?initial='
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
