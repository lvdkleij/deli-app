import { Component, Input } from '@angular/core';
import { MediaCardListData } from '../media-card.config';

@Component({
  selector: 'ui-media-card--list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListCardComponent {
  @Input() data: MediaCardListData;
}
