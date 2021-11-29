import { Component, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  peoples : any;
  page: any;
  constructor(private httpService: ServiceSwapiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const page = Number(this.route.snapshot.paramMap.get('page'));
    this.httpService.getPeoples(page).subscribe(
      (response) => { this.peoples = response; console.log(this.peoples); this.ngOnInit();}
    );
  }

}
