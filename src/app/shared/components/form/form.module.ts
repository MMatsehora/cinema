import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../../shared.module";

import {FormComponent} from "./form.component";

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  exports: [FormComponent]
})

export class FormModule {}
