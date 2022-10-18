import { Component, Input } from '@angular/core';
import { MEDIA_CARD_VIEW } from './media-card.config';

@Component({
  selector: 'ui-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent {
  MEDIA_CARD_VIEW = MEDIA_CARD_VIEW;
  @Input() data: any;
  @Input() view: any;
}
