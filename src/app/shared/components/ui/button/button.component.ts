import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() elemClass: string = '';
  @Input() textBtn: string = '';
  @Input() disabled: boolean = false;
  @Input() type?: string = '';
  @Output() onClicked = new EventEmitter<void>();

  onButtonClick () {
    this.onClicked.emit();
  }
}
