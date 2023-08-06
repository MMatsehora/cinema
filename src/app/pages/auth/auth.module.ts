import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthComponent } from "./auth.component";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: AuthComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class AuthModule { }
