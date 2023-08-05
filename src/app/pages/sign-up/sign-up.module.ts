import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignUpComponent} from "./sign-up.component";

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '', component: SignUpComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class SignUpModule { }
