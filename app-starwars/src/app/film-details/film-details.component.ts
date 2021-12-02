import { Component, Input, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  @Input() data: any | undefined;
  results:any | undefined;
  id:any;
  films:any | undefined;
  directory:any | undefined;
  constructor(private httpService: ServiceSwapiService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };
   }

   isShowDivVaisseaux = true;
    
   toggleDisplayDivVaisseaux() {  
     this.isShowDivVaisseaux = !this.isShowDivVaisseaux;  
   }  

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    //console.log(this.router.url);
    if(this.router.url.startsWith('/films/')){
      this.directory=true;
    }
    
    if(this.data){
    this.httpService.getInfosByURL(this.data).subscribe(
      (response) => { 
        this.results = response;
        console.log(response);
      }
    );
    }else{
    this.httpService.getInfosById('films',id).subscribe(
      (response) => { 
        this.results = response;
        this.films = this.results;
        console.log(response);
      }
    );
    }
  }

}
