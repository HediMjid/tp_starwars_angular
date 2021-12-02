import { Component, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films : any;
  page: any;
  totalPage : any;
  results : any;
  constructor(private httpService: ServiceSwapiService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };
   }

  ngOnInit(): void {
    const page = Number(this.route.snapshot.paramMap.get('page'));
  
    this.httpService.getInfosList('films',page).subscribe(
      (response) => { 
        this.results = response;
        this.films = this.results.results;
        this.totalPage = new Array(Math.ceil(this.results.count/10));

        for(let i=0;i<this.films.length;i++){
          let findId = this.results.results[i].url.split("/");
          findId = findId[5];
          this.films[i].id =findId;
        }
        console.log(this.films);
      }
    );
  }

}
