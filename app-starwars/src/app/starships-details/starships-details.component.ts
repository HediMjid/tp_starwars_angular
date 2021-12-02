import { Component, Input, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-starships-details',
  templateUrl: './starships-details.component.html',
  styleUrls: ['./starships-details.component.css']
})
export class StarshipsDetailsComponent implements OnInit {
  @Input() data: any | undefined;
  results:any | undefined;
  id:any;
  starships:any | undefined;

  constructor(private httpService: ServiceSwapiService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };
   }

   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //console.log(this.router.url);
    if(this.data){
    this.httpService.getInfosByURL(this.data).subscribe(
      (response) => { 
        this.results = response;
        console.log(response);
      }
    );
    }else{
    this.httpService.getInfosById('starships',id).subscribe(
      (response) => { 
        this.results = response;
        this.starships = this.results;
        console.log(response);
      }
    );
    }
  }

}
