import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  @Input() movie!: any;
  @Input() isVisibleDate: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
