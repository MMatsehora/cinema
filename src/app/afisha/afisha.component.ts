import { Component, OnInit } from '@angular/core';
import { MovieService } from "../services/movie.service";
import { environment } from "../../environments/environment";
import { Movie, ResultsMovie } from "../Model/movie";

@Component({
  selector: 'app-afisha',
  templateUrl: './afisha.component.html',
  styleUrls: ['./afisha.component.scss']
})
export class AfishaComponent implements OnInit {
  popularMovies !: any;

  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.getPopularMovies();
  }

  getPopularMovies() {
    this.movieService.getPopularMovies().subscribe(res => {
      this.popularMovies = this.modifyData(res);
      console.log(this.popularMovies);
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }

  modifyData(movies : Movie) : Movie {
    if (movies.results) {
      movies.results.forEach((element: ResultsMovie) => {
        element.poster_path = 'https://image.tmdb.org/t/p/original' + element.poster_path + '?api_key=' + environment.api_key;
        // if (!element.title) {
        //   element.title = element?.name;
        // }
      })
    }
    return movies;
  }
}
