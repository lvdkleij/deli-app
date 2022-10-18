import { Component, Input } from '@angular/core';


@Component({
  selector: 'ui-button--2',
  templateUrl: './button-2.component.html',
  styleUrls: ['./button-2.component.scss']
})
export class Button2Component {
  @Input() text: string;
}
