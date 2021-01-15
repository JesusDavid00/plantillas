import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Username } from '../interfaces/username';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  baseUrl = environment.apiURL
  constructor(
              private http: HttpClient
  ) { }

 public Get(route: string): Observable<Username>{
   return this.http.get<Username>(this.baseUrl + route)
 }
 
}
