import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSwapiService {

  private url = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) { }

  getPeoples(page: any){
    return this.http.get(this.url+'?page='+page);
  }

  getOnePeople(id: any){
    return this.http.get(this.url+id);
  }

  getOneFilm(url: any){
    return this.http.get(url);
  }
}
