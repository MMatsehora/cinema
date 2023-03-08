import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from "lightgallery/lg-events";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  settings = {
    counter: false,
    plugins: [lgZoom]
  };

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
  };

  galleryImages: {src: string, thumb: string}[] = [
    {
      src: "/assets/images/about/gallery1.jpg",
      thumb: "/assets/images/about/gallery-thumb1.jpg"
    },
    {
      src: "/assets/images/about/gallery2.jpg",
      thumb: "/assets/images/about/gallery-thumb2.jpg"
    },
    {
      src: "/assets/images/about/gallery3.jpg",
      thumb: "/assets/images/about/gallery-thumb3.jpg"
    },
    {
      src: "/assets/images/about/gallery4.jpg",
      thumb: "/assets/images/about/gallery-thumb4.jpg"
    },
    {
      src: "/assets/images/about/gallery5.jpg",
      thumb: "/assets/images/about/gallery-thumb5.jpg"
    },
    {
      src: "/assets/images/about/gallery6.jpg",
      thumb: "/assets/images/about/gallery-thumb6.jpg"
    },
    {
      src: "/assets/images/about/gallery7.jpg",
      thumb: "/assets/images/about/gallery-thumb7.jpg"
    },
    {
      src: "/assets/images/about/gallery8.jpg",
      thumb: "/assets/images/about/gallery-thumb8.jpg"
    }
  ]
}
