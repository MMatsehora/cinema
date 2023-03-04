import { Component, OnInit } from '@angular/core';
import {MovieService} from "../services/movie.service";

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  movies: any;
  movie: any;
  randomNum!: number;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.movieService.getUpcomingMovies().subscribe(res => {
      this.movies = this.movieService.getModifyMovies(res);
      this.randomNum = this.generateNumber(this.movies.results.length);
      this.movie = this.movies.results[this.randomNum];
    }, error => {
      console.log('Error while fetching upcoming movies.', error);
    })
  }

  generateNumber(arrLenght: number) {
    return Math.floor(Math.random() * arrLenght);
  }
}
