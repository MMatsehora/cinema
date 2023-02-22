import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SwiperModule } from "swiper/angular";
import { HomeLayoutComponent } from './templates/home-layout/home-layout.component';
import { HomeComponent } from './home/home.component';
import { GeneralLayoutComponent } from './templates/general-layout/general-layout.component';
import { AfishaComponent } from './afisha/afisha.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { AboutComponent } from './about/about.component';
import { FutureComponent } from './future/future.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    HomeLayoutComponent,
    HomeComponent,
    GeneralLayoutComponent,
    AfishaComponent,
    FooterComponent,
    AsideComponent,
    AboutComponent,
    FutureComponent,
    ViewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
