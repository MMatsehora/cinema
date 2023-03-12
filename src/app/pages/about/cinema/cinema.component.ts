import { Component, OnInit } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from "lightgallery/lg-events";

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.scss']
})
export class CinemaComponent implements OnInit {
  title: string = 'About a cinema';

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
  ];

  aboutContent: {text: string}[] = [
    {
      text: "A modern 6-screen multiplex that combines the best of what the film industry has to offer today."
    },
    {
      text: "Our cinema boasts the highest quality cinematic experience thanks to state-of-the-art equipment capable of showing movies in 2D and the popular 3D format, complete with special stereoscopic glasses."
    },
    {
      text: "Our cinema halls offer a high level of comfort and meet the highest standards of design. Unique high-brightness screens provide the best image quality. Comfortable, orthopedic chairs are equipped with holders for popcorn and drinks, and in the Alpha hall, armrests can be raised, which is especially convenient for couples. The large distance between rows in our halls is a significant advantage."
    },
    {
      text: "The original design of the lobby, soft sofas, and special lighting system provide a unique sense of comfort. Additionally, the cinema features alcohol and popcorn bars with a menu to satisfy any taste."
    }
  ]
}
