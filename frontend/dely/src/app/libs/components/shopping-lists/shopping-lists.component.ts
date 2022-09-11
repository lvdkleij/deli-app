import { Component, Input } from '@angular/core';
import { ShoppingListCardData } from '@components/ui/cards/shopping-list/shopping-list-card.component';


@Component({
  selector: 'shopping-lists-component',
  templateUrl: 'shopping-lists.component.html',
  styleUrls: ['shopping-lists.component.scss']
})
export class ShoppingListsComponent {
  @Input() shoppingListsData: ShoppingListCardData[];
}
