import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from "./templates/home-layout/home-layout.component";
import { HomeComponent } from "./home/home.component";
import { GeneralLayoutComponent } from "./templates/general-layout/general-layout.component";
import {AfishaComponent} from "./afisha/afisha.component";
import {AboutComponent} from "./about/about.component";
import {FutureComponent} from "./future/future.component";
import {ViewComponent} from "./view/view.component";

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomeComponent}
    ]
  },
  {
    path: '', component: GeneralLayoutComponent, children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: 'afisha', component: AfishaComponent},
      {path: 'about', component: AboutComponent},
      {path: 'future', component: FutureComponent},
      {path: 'view', component: ViewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
