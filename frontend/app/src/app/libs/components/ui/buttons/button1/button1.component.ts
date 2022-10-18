import { Component, Input } from '@angular/core';


@Component({
  selector: 'ui-button--1',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.scss']
})
export class Button1Component {


  @Input() text: string;
  @Input() active: boolean;

}
