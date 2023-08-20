import {NgModule} from "@angular/core";
import {EditDashboardComponent} from "./edit-dashboard.component";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../../shared/services/auth.guard";
import {FormModule} from "../../shared/components/form/form.module";

@NgModule({
  declarations: [EditDashboardComponent],
  imports: [
    SharedModule,
    FormModule,
    RouterModule.forChild([
      {
        path: '', component: EditDashboardComponent, canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})

export class EditDashboardModule { }
