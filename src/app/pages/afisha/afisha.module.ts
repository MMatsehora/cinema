import { NgModule } from "@angular/core";
import { AfishaComponent } from "./afisha.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AfishaComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: AfishaComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class AfishaModule {

}
