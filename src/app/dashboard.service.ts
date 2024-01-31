import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
 
 
@Injectable({
  providedIn: 'root',
})
export class DashboardService {
 
 
  constructor(private _http: HttpClient) {}
  getData(): Observable<any> {
 
    return this._http.get(`https://mocki.io/v1/b8d69ada-908f-4d70-97a9-c7dba1b99126`);
  }
 
}