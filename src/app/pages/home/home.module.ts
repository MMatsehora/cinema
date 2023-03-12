import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { SwiperModule } from "swiper/angular";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    SwiperModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class HomeModule {

}
