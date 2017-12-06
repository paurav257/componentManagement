import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import {environment} from '../../environments/environment';

// injecting service into module
@Injectable()

export class ModuleService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createModule(module) {
    const url = this.baseUrl + '/api/module';
    return this.http.post(url, module)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findModulesByComponentId(componentid) {
    const url = this.baseUrl + '/api/component/' + componentid + '/module';
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findModuleById(moduleId) {
    const url = this.baseUrl + '/api/module/' + moduleId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateModule(moduleId, module) {
    const url = this.baseUrl + '/api/module/' + moduleId;
    return this.http.put(url, module)
      .map(
        (res: Response) => {
          const data = res.status;
          return data;
        }
      );
  }

  deleteModule(moduleId) {
    const url = this.baseUrl + '/api/module/' + moduleId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.status;
          return data;
        }
      );
  }

  updateModulePosition(componentId, initial, final) {
    const url = this.baseUrl + '/api/component/' + componentId + '/module?initial='
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
