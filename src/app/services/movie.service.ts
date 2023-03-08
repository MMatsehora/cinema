import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import {Movie, ResultsMovie, ViewMovie} from '../Model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  public url: string = 'https://api.themoviedb.org/3/';
  public language: string = 'en-US'
  constructor(private http: HttpClient) {}

  getPopularMovies() : Observable<Movie> {
    return this.http.get<Movie>(this.url + 'discover/movie?api_key=' + environment.api_key + '&language=' + this.language + '&sort_by=primary_release_date.asc&region=UA&primary_release_date.gte=2023-01-01')
  }

  getUpcomingMovies() : Observable<Movie> {
    return this.http.get<Movie>(this.url + 'discover/movie?api_key=' + environment.api_key + '&language=' + this.language + '&sort_by=primary_release_date.asc&region=UA&primary_release_date.gte=2023-03-10')
  }

  getViewMovie(id: string) : Observable<ViewMovie> {
    return this.http.get<ViewMovie>(this.url + 'movie/' + id + '?api_key=' + environment.api_key + '&language=' + this.language + '&append_to_response=videos')
  }

  getModifyMovies(movies : Movie) : Movie {
    if (movies.results) {
      movies.results.forEach((element: ResultsMovie) => {
        element.poster_path = 'https://image.tmdb.org/t/p/original' + element.poster_path + '?api_key=' + environment.api_key;
        element.backdrop_path = 'https://image.tmdb.org/t/p/original' + element.backdrop_path + '?api_key=' + environment.api_key;
      })
    }
    return movies;
  }

  getModifyMovie(movie : ViewMovie) {
    if (movie) {
      movie.poster_path = 'https://image.tmdb.org/t/p/original' + movie.poster_path + '?api_key=' + environment.api_key;
      movie.backdrop_path = 'https://image.tmdb.org/t/p/original' + movie.backdrop_path + '?api_key=' + environment.api_key;
      movie.videos.results.forEach((item: any) => {
        movie.video = item.key;
      })
    }
    return movie;
  }

  separateByComma(str: string) {
    return str.replace(/([a-z])([A-Z])/g, '$1, $2');
  }
}
