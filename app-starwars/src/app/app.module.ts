import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmListComponent } from './film-list/film-list.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { StarshipsDetailsComponent } from './starships-details/starships-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    AccueilComponent,
    PeopleDetailsComponent,
    FilmDetailsComponent,
    FilmListComponent,
    StarshipsListComponent,
    StarshipsDetailsComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
