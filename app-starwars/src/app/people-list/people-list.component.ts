import { Component, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peoples : any;
  page: any;
  totalPage : any;
  results : any;
  item : any;
  directory : any;
  constructor(private httpService: ServiceSwapiService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    };
    this.directory = this.router.url.split('/');
   }

   findItem(item: string) {
    //this.items.push(newItem);
    //console.log(item);
    //this.getInfoVille(ville);
    if( (item.length >= 3) || (item.length == 0)){
      this.httpService.getInfosSearch(this.directory[1],item).subscribe(
        (response) => { 
          this.results = response;
          this.peoples = this.results.results;
          this.totalPage = new Array(Math.ceil(this.results.count/10));
          //console.log(this.totalPage);
          //console.log(this.peoples);
          for(let i=0;i<this.peoples.length;i++){
            let findId = this.results.results[i].url.split("/");
            findId = findId[5];
            this.peoples[i].id =findId;
          }
          console.log(this.peoples);
        }
      );
    }
  }

  ngOnInit(): void {
    const page = Number(this.route.snapshot.paramMap.get('page'));
  
    this.httpService.getInfosList(this.directory[1],page).subscribe(
      (response) => { 
        this.results = response;
        this.peoples = this.results.results;
        this.totalPage = new Array(Math.ceil(this.results.count/10));
        //console.log(this.totalPage);
        //console.log(this.peoples);
        for(let i=0;i<this.peoples.length;i++){
          let findId = this.results.results[i].url.split("/");
          findId = findId[5];
          this.peoples[i].id =findId;
        }
        console.log(this.peoples);
      }
    );
  }

}
