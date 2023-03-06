import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from "./templates/home-layout/home-layout.component";
import { HomeComponent } from "./home/home.component";
import { GeneralLayoutComponent } from "./templates/general-layout/general-layout.component";
import {AfishaComponent} from "./afisha/afisha.component";
import {AboutComponent} from "./about/about.component";
import {FutureComponent} from "./future/future.component";
import {ViewComponent} from "./view/view.component";
import {CinemaComponent} from "./cinema/cinema.component";
import {ContactsComponent} from "./contacts/contacts.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      {path: '', component: HomeComponent}
    ]
  },
  {
    path: '', component: GeneralLayoutComponent, children: [
      {path: 'afisha', component: AfishaComponent},
      {path: 'about', component: AboutComponent, children: [
          {path: 'cinema', component: CinemaComponent},
          {path: 'contacts', component: ContactsComponent}
        ]},
      {path: 'future', component: FutureComponent},
      {path: 'view/:id', component: ViewComponent}
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
