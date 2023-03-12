import { NgModule } from "@angular/core";
import { AboutComponent } from "./about.component";
import { ContactsComponent } from "./contacts/contacts.component";
import { CinemaComponent } from "./cinema/cinema.component";
import { LightgalleryModule } from "lightgallery/angular";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
 declarations: [
   AboutComponent,
   ContactsComponent,
   CinemaComponent
 ],
  imports: [
    LightgalleryModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AboutComponent, children: [
          {path: 'cinema', component: CinemaComponent},
          {path: 'contacts', component: ContactsComponent}
        ]
      }
    ])
  ],
  exports: [RouterModule]
})

export class AboutModule {

}
