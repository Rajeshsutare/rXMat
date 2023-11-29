import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable, map } from 'rxjs';
import { Icourse, IcourseRes } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseCourseUrl:string=`${environment.baseUrl}/courses`;

  constructor(private _http:HttpClient) { }

  getAllData():Observable<Array<Icourse>>{
    return this._http.get<IcourseRes>(this.baseCourseUrl)
      .pipe(
        map(res=> res['payload'])
      )
  }
}
