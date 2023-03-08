import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() elemClass: string = '';
  @Input() textBtn: string = '';
  @Output() onClicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
