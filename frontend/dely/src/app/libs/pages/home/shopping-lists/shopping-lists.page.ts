import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { ScalePageService } from '@services';
import { selectLastListPath, selectLists, addShoppingList, StoreState } from '@store';
import { ModalService, Modals } from '@components/modals';

@Component({
  selector: 'shopping-lists',
  templateUrl: './shopping-lists.page.html',
  styleUrls: ['./shopping-lists.page.scss'],
  providers: [
    ModalService
  ],
})
export class ShoppingListsPage implements OnInit {

  isPresent$: Observable<boolean>;
  data$: Observable<any[]>;
  lastListPath$: Observable<string>;

  addList = false;
  isDone = false;

  touchMoveSubscription: Subscription;

  viewWillLeave;
  viewDidEnter;

  constructor(
    private readonly router: Router,
    private readonly navCtrl: NavController,
    private readonly route: ActivatedRoute,
    private readonly store: Store<StoreState>,
    readonly modalService: ModalService,
    readonly scalePageService: ScalePageService
  ) { }

  ngOnInit() {
    this.data$ = this.store.select(selectLists);
    this.lastListPath$ = this.store.select(selectLastListPath);
  }

  ionViewDidEnter() {
    this.viewWillLeave = false;
    this.viewDidEnter = true;
    // this.touchMoveSubscription = this.touchMoveListener.listen$.subscribe(x => console.log('1', x));
  }

  ionViewWillLeave() {
    this.viewDidEnter = false;
    this.viewWillLeave = true;
    // this.touchMoveSubscription.unsubscribe();
  }
  onListClick(listName: string) {
    const relativeRoute = this.router.createUrlTree([listName], {
      relativeTo: this.route
    });

    this.navCtrl.navigateForward(relativeRoute);
  }

  onRefresh() {
    console.log('ff');
  }

  onCreateList() {
    this.scalePageService.setScale();
    this.modalService.present(Modals.CREATE_SHOPPING_LIST);
  }

  hideCreateList() {
  }

  onDone(value) {

    const newList = {
      name: value.listName,
      items: []
    };
    this.hideCreateList();
    this.store.dispatch(addShoppingList({ list: newList }));
    this.isDone = true;
  }
}
