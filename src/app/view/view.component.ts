import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { MovieService } from "../services/movie.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  id !: string;
  movie !: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })

    this.getViewMovie(this.id);
  }

  getViewMovie(id: string) {
    this.movieService.getViewMovie(id).subscribe(res => {
      this.movie = this.movieService.getModifyMovie(res);
      console.log(this.movie);
    }, error => {
      console.log('Error while fetching popular movies.', error);
    })
  }
}
