import { Component, OnInit } from '@angular/core';
import Swiper, {SwiperOptions, Autoplay, Navigation} from "swiper";
import { MovieService } from "../services/movie.service";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {
  movies !: any;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    Swiper.use([Autoplay, Navigation]);

    this.getPopularMovies();
  }

  config: SwiperOptions = {
    loop: true,
    speed: 1500,
    centeredSlides: true,
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: true,
    spaceBetween: 0
  };

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe(res => {
      this.movies = this.movieService.getModifyMovies(res);
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }
}
