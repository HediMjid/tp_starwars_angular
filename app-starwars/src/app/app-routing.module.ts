import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';

const routes: Routes = [
  // { path: 'people', redirectTo:'people/1', pathMatch: 'full'},
  { path: 'people/:page', component: PeopleListComponent},
  { path: '', component: AccueilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
