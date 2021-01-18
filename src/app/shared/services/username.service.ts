import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IElemento } from '../interfaces/ielemento';
import { ItemsElement } from '../interfaces/items-element';
import { Username } from '../interfaces/username';

@Injectable({
  providedIn: 'root'
})

export class UsernameService {
  baseUrl = environment.apiURL
  baseUrlElemt = 'api/elemntData';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

 public Get(route: string): Observable<Username>{
   return this.http.get<Username>(this.baseUrl + route)
 }

 public GetDostos(): Observable<ItemsElement[]>{
  return this.http.get<ItemsElement[]>(this.baseUrlElemt)
}

public Post(datos : ItemsElement): Observable<ItemsElement>{
 return this.http.post<ItemsElement>(this.baseUrlElemt , datos ,this.httpOptions)
 }
}
