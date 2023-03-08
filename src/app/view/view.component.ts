import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { MovieService } from "../services/movie.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id !: string;
  movie !: any;
  movieUrl !: any;
  genres: string = '';
  countries: string = '';
  separatedGenres: string = '';
  separatedCountries: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];

      this.getViewMovie(this.id);
    })
  }

  getViewMovie(id: string) {
    this.movieService.getViewMovie(id).subscribe(res => {
      this.movie = this.movieService.getModifyMovie(res);
      this.movie.video ? this.movieUrl = 'https://www.youtube.com/embed/' + this.movie.video : false;

      this.movie.genres.forEach((item : {name : string}) => {
        this.genres += item.name;
      });

      this.movie.production_countries.forEach((item : {name : string}) => {
        this.countries += item.name;
      })

      this.separatedGenres = this.movieService.separateByComma(this.genres);
      this.separatedCountries = this.movieService.separateByComma(this.countries);

      console.log(this.movie);
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }
}
