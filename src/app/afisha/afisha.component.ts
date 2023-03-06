import { Component, OnInit } from '@angular/core';
import { MovieService } from "../services/movie.service";

@Component({
  selector: 'app-afisha',
  templateUrl: './afisha.component.html',
  styleUrls: ['./afisha.component.scss']
})
export class AfishaComponent implements OnInit {
  movies !: any;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe(res => {
      this.movies = this.movieService.getModifyMovies(res);
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }
}
