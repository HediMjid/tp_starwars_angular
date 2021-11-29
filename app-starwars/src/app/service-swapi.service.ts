import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSwapiService {

  private url = 'https://swapi.dev/api/people/?page=';

  constructor(private http: HttpClient) { }

  getPeoples(page: any){
    return this.http.get(this.url+page);
  }
}
