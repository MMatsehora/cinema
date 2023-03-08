import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { SafePipeModule } from 'safe-pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { SwiperModule } from "swiper/angular";
import { LightgalleryModule } from "lightgallery/angular";
import { HomeLayoutComponent } from './templates/home-layout/home-layout.component';
import { HomeComponent } from './pages/home/home.component';
import { GeneralLayoutComponent } from './templates/general-layout/general-layout.component';
import { AfishaComponent } from './pages/afisha/afisha.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsideComponent } from './components/aside/aside.component';
import { AboutComponent } from './pages/about/about.component';
import { FutureComponent } from './pages/future/future.component';
import { ViewComponent } from './pages/view/view.component';
import { MovieComponent } from './components/movie/movie.component';
import { ContactsComponent } from './pages/about/contacts/contacts.component';
import { CinemaComponent } from './pages/about/cinema/cinema.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

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
    ViewComponent,
    MovieComponent,
    ContactsComponent,
    CinemaComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, SwiperModule, HttpClientModule, SafePipeModule, LightgalleryModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
