import { Component, OnInit } from '@angular/core';
import {MovieService} from "../../shared/services/movie.service";
import {Router} from "@angular/router";
import Swiper, {Autoplay, Navigation, SwiperOptions} from "swiper";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies !: any;
  public textBtn: string = 'More detail'

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
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }

  goToViewPage(id: string) {
    this.router.navigate(['/view', id])
  }
}
