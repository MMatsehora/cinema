import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import {Movie, ResultsMovie} from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url: string = 'https://api.themoviedb.org/3/';
  language: string = 'uk-UA'
  constructor(private http: HttpClient) {}

  getPopularMovies() : Observable<Movie> {
    return this.http.get<Movie>(this.url + 'movie/popular?api_key=' + environment.api_key + '&language=' + this.language)
  }

  getUpcomingMovies() : Observable<Movie> {
    return this.http.get<Movie>(this.url + 'discover/movie?api_key=' + environment.api_key + '&language=' + this.language + '&primary_release_date.gte=2023-03-06&primary_release_date.lte=2023-12-31')
  }

  getModifyMovies(movies : Movie) : Movie {
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
