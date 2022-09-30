import { Component, Input } from '@angular/core';


@Component({
  selector: 'ui-button--3',
  templateUrl: './button-3.component.html',
  styleUrls: ['./button-3.component.scss']
})
export class Button3Component {
  @Input() image: string;
  @Input() text: string;
}
