import { Component, Input } from '@angular/core';
import { ButtonListsPageData, BUTTON_VIEW, FullWidthButtonData } from './button.config';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  BUTTON_VIEW = BUTTON_VIEW;

  private _data;
  get actualData() {
    return this._data;
  }
  @Input() set data(value:
    FullWidthButtonData |
    ButtonListsPageData
    ) {
      switch (value.view){
        case BUTTON_VIEW.LISTS_PAGE:
          this._data = value as ButtonListsPageData;
          break;
        case BUTTON_VIEW.FULL_WIDTH:
          this._data = value as FullWidthButtonData;
          break;
      }
    }



}
