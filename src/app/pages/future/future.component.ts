import { Component, OnInit } from '@angular/core';
import { MovieService } from "../../shared/services/movie.service";

@Component({
  selector: 'app-future',
  templateUrl: './future.component.html',
  styleUrls: ['./future.component.scss']
})
export class FutureComponent implements OnInit {
  movies!: any;
  isVisibleDate: boolean = true;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getUpcomingMovies();
  }

  getUpcomingMovies() {
    this.movieService.getUpcomingMovies().subscribe(res => {
      this.movies = this.movieService.getModifyMovies(res);
    }, error => {
      console.log('Error while fetching upcoming movies.', error);
    })
  }
}
