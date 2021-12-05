import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSwapiService {

  private url = 'https://swapi.dev/api/people/';
  private url_test = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  getInfosList(category:any, page: any){
    return this.http.get(this.url_test+category+'/'+'?page='+page);
  }

  // remplacer par getInfosList
  // getPeoples(page: any){
  //   return this.http.get(this.url+'?page='+page);
  // }

  getInfosById(category:any,id: any){
    return this.http.get(this.url_test+category+'/'+id);
  }

  getInfosByURL(url: any){
    return this.http.get(url);
  }

  getInfosSearch(category:any, keyword: any){
    return this.http.get(this.url_test+category+'/'+'?search='+keyword);
  }
}
