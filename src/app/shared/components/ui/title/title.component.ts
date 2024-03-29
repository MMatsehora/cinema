import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {
  @Input() elemClass: string = '';
  @Input() level: string = '';
  @Input() text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
