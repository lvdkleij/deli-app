import { Component, Input } from '@angular/core';
import { ButtonListsPageData } from '../button.config';
import { hideButtonTextAnim } from './button1.animations';


@Component({
  selector: 'ui-button--lists-page',
  templateUrl: './button1.component.html',
  styleUrls: ['./button1.component.scss'],
  animations: [hideButtonTextAnim]
})
export class ButtonListsPageComponent {
  @Input() data: ButtonListsPageData;


  hideButtonText = true;
}
