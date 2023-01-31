import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
interface Params {
  offset?: number;
  limit?: number|null;
  county?: string;
  from?: number;
}
@Injectable({
  providedIn: 'root'
})

export class DataService {
  BaseUrl = environment.baseUrl;
  constructor( private http: HttpClient) { }

  getAds(options: Params = {offset: 0, limit : null,  county :''}):Observable<any> {
    const {offset, limit , from, county} = options;
    const getOptions: { params : any | Params} = { params: {}}
    if(offset) getOptions.params.offset = offset;
    if(limit) getOptions.params.limit = limit;
    if(from) getOptions.params.from = from;
    if(county) getOptions.params.county = county;
    return this.http.get(this.BaseUrl + `/api/list`, getOptions)
    .pipe(
      retry(3),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
