import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { environment } from '../../environments/environment';

// injecting service into module
@Injectable()

export class SectionService {

  constructor(private http: Http) {
  }

  baseUrl = environment.baseUrl;

  createSection(moduleId, section) {
    const url = this.baseUrl + '/api/module/' + moduleId + '/section';
    return this.http.post(url, section)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findSectionsByModuleId(moduleid) {
    const url = this.baseUrl + '/api/module/' + moduleid + '/section';
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findSectionById(sectionId) {
    const url = this.baseUrl + '/api/section/' + sectionId;
    return this.http.get(url)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  updateSection(sectionId, section) {
    const url = this.baseUrl + '/api/section/' + sectionId;
    return this.http.put(url, section)
      .map(
        (res: Response) => {
          const data = res.status;
          return data;
        }
      );
  }

  deleteSection(sectionId) {
    const url = this.baseUrl + '/api/section/' + sectionId;
    return this.http.delete(url)
      .map(
        (res: Response) => {
          const data = res.status;
          return data;
        }
      );
  }

  updateSectionPosition(moduleId, initial, final) {
    const url = this.baseUrl + '/api/module/' + moduleId + '/section?initial='
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
