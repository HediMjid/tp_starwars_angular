import { Component, Input, OnInit } from '@angular/core';
import { ServiceSwapiService } from '../service-swapi.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {
  @Input() data: any | undefined;
  results:any | undefined;
  constructor(private httpService: ServiceSwapiService) { }

  ngOnInit(): void {
    this.httpService.getOneFilm(this.data).subscribe(
      (response) => { 
        this.results = response;
        console.log(response);
      }
    );
  }

}
