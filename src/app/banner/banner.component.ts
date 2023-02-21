import { Component, OnInit } from '@angular/core';
import Swiper, {SwiperOptions, Autoplay, Navigation} from "swiper";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    Swiper.use([Autoplay, Navigation]);
  }

  sliderInfo: Array<any> = [
    {
      src: '/assets/images/banner/film-avatar.jpg',
      alt: 'Image 1',
      title: 'Аватар: Шлях води',
      button: 'Детальніше'
    }, {
      src: '/assets/images/banner/film-vavilon.jpg',
      alt: 'Image 2',
      title: 'Вавилон',
      button: 'Детальніше'
    }, {
      src: '/assets/images/banner/film-maik.jpg',
      alt: 'Image 3',
      title: 'СУПЕР МАЙК: ОСТАННІЙ ТАНЕЦЬ',
      button: 'Детальніше'
    }
  ]
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
}
