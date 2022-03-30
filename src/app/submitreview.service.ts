import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SubmitreviewService {
  _url: string = '/api/review';
  constructor(private _http: HttpClient) {}

  startReviewing(reviewDetail: any) {
    return this._http.post<any>(this._url, reviewDetail);
  }
}
