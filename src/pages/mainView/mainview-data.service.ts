/**
 * Created by Jorge on 5/29/2017.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import { Observable } from 'rxjs/Observable';

@Injectable()

export class MainViewDataService {
  constructor(
  private http: Http
  ) { }


  //Public functions
  getBars(): Observable<any> {
    return this.http
      .get('assets/data/bars.json')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json().data);
     return res.json().data;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
