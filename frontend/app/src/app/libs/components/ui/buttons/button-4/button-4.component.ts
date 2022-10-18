import { Component, Input } from '@angular/core';


@Component({
  selector: 'ui-button--4',
  templateUrl: './button-4.component.html',
  styleUrls: ['./button-4.component.scss']
})
export class Button4Component {
  @Input() text: string;
}
