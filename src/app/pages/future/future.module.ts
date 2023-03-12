import {NgModule} from "@angular/core";
import { FutureComponent } from "./future.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    FutureComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: FutureComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class FutureModule {

}
