import { Component, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {
  id:any;
  people:any | undefined;
  results:any;

  constructor(private httpService: ServiceSwapiService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };
   }

   isShowDivIf = true;  
    
   toggleDisplayDivIf() {  
     this.isShowDivIf = !this.isShowDivIf;  
   }  

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
  
    this.httpService.getOnePeople(id).subscribe(
      (response) => { 
        this.results = response;
        this.people = this.results;
        console.log(response);
      }
    );
  }

}
