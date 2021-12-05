import { Component, Input, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  @Input() data: any | undefined;
  id:any;
  people:any | undefined;
  results:any;
  directory:any | undefined;

  constructor(private httpService: ServiceSwapiService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };
   }

   isShowDivFilms = true;  
    
   toggleDisplayDivFilms() {  
     this.isShowDivFilms = !this.isShowDivFilms;  
   }  

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    if(this.router.url.startsWith('/people/')){
      this.directory=true;
    }

    if(this.data){
      this.httpService.getInfosByURL(this.data).subscribe(
        (response) => { 
          this.people = response;
          let findId = this.people.url.split("/");
          findId = findId[5];
          this.people.id =findId;
          console.log(response);
        }
      );
    }else{
      this.httpService.getInfosById('people',id).subscribe(
        (response) => { 
          this.results = response;
          this.people = this.results;
          this.people.id = id;
          console.log(response);
        }
      );
    }



  }

}
