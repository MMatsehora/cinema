import {Component, Input, OnInit} from '@angular/core';
import Swiper, {SwiperOptions, Autoplay, Navigation} from "swiper";
import { MovieService } from "../services/movie.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
  movies !: any;

  constructor(
    private movieService : MovieService,
    private router: Router) { }

  ngOnInit(): void {
    Swiper.use([Autoplay, Navigation]);

    this.getPopularMovies();
  }

  config: SwiperOptions = {
    loop: true,
    speed: 1500,
    centeredSlides: true,
    allowTouchMove: false,
    slidesPerView: "auto",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: true,
    breakpoints: {
      920: {
        allowTouchMove: false
      },
      320: {
        allowTouchMove: true
      }
    }
  };

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe(res => {
      this.movies = this.movieService.getModifyMovies(res);
      console.log(this.movies);
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }

  goToViewPage(id: string) {
    this.router.navigate(['/view', id])
  }
}
