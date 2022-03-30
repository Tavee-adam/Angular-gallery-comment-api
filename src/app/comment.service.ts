import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommentService {
  _url: string = 'http://localhost:3000/api/';
  constructor(private _http: HttpClient) {}

  fetchData() {
    return this._http.get<any>(this._url);
  }
}

export class CommentList {
  constructor(
    public fullname: string,
    public email: string,
    public review: string
  ) {}
}
