import { Component, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent implements OnInit {

  starships : any;
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
  
    this.httpService.getInfosList('starships',page).subscribe(
      (response) => { 
        this.results = response;
        this.starships = this.results.results;
        this.totalPage = new Array(Math.ceil(this.results.count/10));
        //console.log(this.totalPage);
        //console.log(this.peoples);
        for(let i=0;i<this.starships.length;i++){
          let findId = this.results.results[i].url.split("/");
          findId = findId[5];
          this.starships[i].id =findId;
        }
        console.log(this.starships);
      }
    );
  }

}
