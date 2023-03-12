import { NgModule } from "@angular/core";
import { NotFoundComponent } from "./not-found.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '**', component: NotFoundComponent
      }
    ])
  ]
})

export class NotFoundModule {

}
