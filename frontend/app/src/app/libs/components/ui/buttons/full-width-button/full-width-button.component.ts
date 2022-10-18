import { Component, Input } from '@angular/core';
import { FullWidthButtonData } from '../button.config';

@Component({
  selector: 'ui-button--full-width',
  templateUrl: './full-width-button.component.html',
  styleUrls: ['./full-width-button.component.scss']
})
export class FullWidthButtonComponent {
  @Input() data: FullWidthButtonData;
}
