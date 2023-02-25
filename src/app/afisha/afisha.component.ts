import { Component, OnInit } from '@angular/core';
import { MovieService } from "../services/movie.service";

@Component({
  selector: 'app-afisha',
  templateUrl: './afisha.component.html',
  styleUrls: ['./afisha.component.scss']
})
export class AfishaComponent implements OnInit {
  movies !: any;
  isVisibleDate: boolean = false;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe(res => {
      this.movies = this.movieService.getModifyMovies(res);
      console.log(this.movies);
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }
}
