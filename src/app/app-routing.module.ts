import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from "./templates/home-layout/home-layout.component";
import { HomeComponent } from "./pages/home/home.component";
import { GeneralLayoutComponent } from "./templates/general-layout/general-layout.component";
import {AfishaComponent} from "./pages/afisha/afisha.component";
import {AboutComponent} from "./pages/about/about.component";
import {FutureComponent} from "./pages/future/future.component";
import {ViewComponent} from "./pages/view/view.component";
import {CinemaComponent} from "./pages/about/cinema/cinema.component";
import {ContactsComponent} from "./pages/about/contacts/contacts.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      {path: '', component: HomeComponent, pathMatch: "full"}
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
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
