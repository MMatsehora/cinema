import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { SafePipeModule } from 'safe-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SwiperModule } from "swiper/angular";
import { HomeLayoutComponent } from './templates/home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GeneralLayoutComponent } from './templates/general-layout/general-layout.component';
import { AfishaComponent } from './pages/afisha/afisha.component';
import { FooterComponent } from './components/footer/footer.component';
import { FutureComponent } from './pages/future/future.component';
import { ViewComponent } from './pages/view/view.component';
import { AsideComponent } from "./components/aside/aside.component";
import { MovieComponent } from './components/movie/movie.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from "./shared/shared.module";

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
    FutureComponent,
    ViewComponent,
    AsideComponent,
    MovieComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule,
    HttpClientModule,
    SafePipeModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
