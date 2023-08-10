import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import {AuthGuard} from "../../shared/services/auth.guard";

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: DashboardComponent, canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})

export class DashboardModule {

}
