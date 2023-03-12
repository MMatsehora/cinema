import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { MovieService } from "../../shared/services/movie.service";
import { Cast } from "../../shared/Model/cast";
import { Genres } from "../../shared/Model/genres";
import {Countries} from "../../shared/Model/countries";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  title: string = 'Trailer';
  id !: string;
  movie !: any;
  movieUrl: string = '';
  genres: string = '';
  countries: string = '';
  actors: string = '';
  separatedGenres: string = '';
  separatedCountries: string = '';
  separatedActors: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];

      this.getViewMovie(this.id);
      this.getActorsMovie(this.id);
    })
  }

  getViewMovie(id: string) {
    this.movieUrl = '';
    this.genres = '';
    this.countries = '';

    this.movieService.getViewMovie(id).subscribe(res => {
      this.movie = this.movieService.getModifyMovie(res);
      this.movie.video ? this.movieUrl = 'https://www.youtube.com/embed/' + this.movie.video : false;

      this.movie.genres.forEach((item : Genres) => {
        this.genres += item.name;
      });

      this.movie.production_countries.forEach((item : Countries) => {
        this.countries += item.name;
      })

      this.separatedGenres = this.movieService.separateByComma(this.genres);
      this.separatedCountries = this.movieService.separateByComma(this.countries);
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }

  getActorsMovie(id: string) {
    this.actors = '';

    this.movieService.getActorsMovie(id).subscribe(res => {
      res.cast?.forEach((item : Cast, index: number) => {
        if (index < 10) {
          this.actors += item.name;
        }
      })

      this.separatedActors = this.movieService.separateByComma(this.actors);
    })
  }
}
