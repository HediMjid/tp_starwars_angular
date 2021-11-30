import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  // { path: 'people', redirectTo:'people/page/1', pathMatch: 'full'},
  { path: 'people/page/:page', component: PeopleListComponent},
  { path: 'people/details/:id', component: PeopleDetailsComponent},
  { path: '', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
