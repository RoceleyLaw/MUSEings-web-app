import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  baseUrl: string;
  headers: Headers;

  constructor(private http: Http) {
    this.baseUrl = 'https://obscure-oasis-37920.herokuapp.com';
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
   }

  fetchStories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`, {headers: this.headers})
                    .map(response => response.json());
                  }

  fetchItem(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`)
                  .map(response => response.json());
                }

  deleteItemById(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/users/${id}`)
                  .map(response => response.json());
                }

}
