import { NgModule } from "@angular/core";
import { ViewComponent } from "./view.component";
import { SafePipeModule } from "safe-pipe";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ViewComponent
  ],
  imports: [
    SafePipeModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: ViewComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class ViewModule {

}
