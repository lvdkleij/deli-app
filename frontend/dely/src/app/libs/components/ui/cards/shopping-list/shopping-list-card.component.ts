import { Component, Input } from '@angular/core';


@Component({
  selector: 'shopping-list-card',
  templateUrl: 'shopping-list-card.component.html',
  styleUrls: ['shopping-list-card.component.scss']
})
export class ShoppingListCardComponent {

  @Input() shoppingListCardData: ShoppingListCardData;

}

export interface ShoppingListCardData {
  background: string;
  name: string;
  sharedWidth: string[];
}
