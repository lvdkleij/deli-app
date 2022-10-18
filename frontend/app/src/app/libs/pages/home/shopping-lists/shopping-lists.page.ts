import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { ScalePageService } from '@services';
import { selectActiveShoppingList, selectLists, addShoppingList, StoreState } from '@store';
import { ModalService, Modals } from '@components/modals';
import { ShoppingListCardData } from '@components/ui/cards/shopping-list/shopping-list-card.component';

@Component({
  selector: 'shopping-lists-page',
  templateUrl: './shopping-lists.page.html',
  styleUrls: ['./shopping-lists.page.scss'],
  providers: [
    ModalService
  ],
})
export class ShoppingListsPage implements OnInit {

  isPresent$: Observable<boolean>;
  shoppingListsData$: Observable<ShoppingListCardData[]>;
  activeShoppingList$: Observable<string>;

  constructor(
    private readonly store: Store<StoreState>,
    readonly modalService: ModalService,
    readonly scalePageService: ScalePageService
  ) { }

  ngOnInit() {
    this.shoppingListsData$ = this.store.select(selectLists);
    this.activeShoppingList$ = this.store.select(selectActiveShoppingList);
    console.log('shopping lists created');
  }

  ionViewDidEnter() {
    // this.touchMoveSubscription = this.touchMoveListener.listen$.subscribe(x => console.log('1', x));
  }

  ionViewWillLeave() {
    // this.touchMoveSubscription.unsubscribe();
  }

  onCreateList() {
    this.scalePageService.setScale();
    this.modalService.present(Modals.CREATE_SHOPPING_LIST);
  }

}
