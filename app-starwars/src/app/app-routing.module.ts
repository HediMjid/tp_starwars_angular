import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmListComponent } from './film-list/film-list.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { StarshipsDetailsComponent } from './starships-details/starships-details.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';

const routes: Routes = [
  // { path: 'people', redirectTo:'people/page/1', pathMatch: 'full'},
  { path: 'people/page/:page', component: PeopleListComponent},
  { path: 'films/page/:page', component: FilmListComponent},
  { path: 'starships/page/:page', component: StarshipsListComponent},
  { path: 'people/details/:id', component: PeopleDetailsComponent},
  { path: 'films/details/:id', component: FilmDetailsComponent},
  { path: 'starships/details/:id', component: StarshipsDetailsComponent},
  { path: '', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
