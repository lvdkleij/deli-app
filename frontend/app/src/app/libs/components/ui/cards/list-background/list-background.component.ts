import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'list-background-card',
  templateUrl: 'list-background.component.html',
  styleUrls: ['list-background.component.scss']
})
export class ListBackgroundCardComponent {
  @Input() background: string;

  _isSelected: boolean;
  @Input() set isSelected(value: string) {
    this._isSelected = this.background === value;
  }
}
