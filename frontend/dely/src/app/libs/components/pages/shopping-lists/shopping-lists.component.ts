import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { slideFromBottom } from '@animations';
import { ShoppingListCardData } from '@components/ui/cards/shopping-list/shopping-list-card.component';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { selectActiveShoppingList, StoreState } from '@store';


@Component({
  selector: 'shopping-lists-feature',
  templateUrl: 'shopping-lists.component.html',
  styleUrls: ['shopping-lists.component.scss'],
  animations: [slideFromBottom]
})
export class ShoppingListsComponent implements OnInit{

  presentingElement = null;
  activeShoppingList$;

  @Input() shoppingListsData: ShoppingListCardData[];

  constructor(
    private routerOutlet: IonRouterOutlet,
    private store: Store<StoreState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.presentingElement = this.routerOutlet.nativeEl;
    this.activeShoppingList$ = this.store.select(selectActiveShoppingList);
  }
}
