import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { Observable, Subscription, tap } from 'rxjs';
import { Modals } from 'src/app/libs/components/modals/modal.constants';
import { ModalService } from 'src/app/libs/components/modals/modal.service';
import { MenuClickListenerService } from 'src/app/libs/components/navigation/top/services/menu/menu.service';
import { ScalePageService } from 'src/app/libs/services/scale-page/scale-page.service';
import { TouchMoveListener } from 'src/app/libs/services/touch-move-listener/touch-move-listener.service';
import { addShoppingList } from 'src/app/libs/store/app.actions';
import { StoreState } from 'src/app/libs/store/app.reducer';
import { selectLastListPath, selectLists } from 'src/app/libs/store/app.selectors';

@Component({
  selector: 'shopping-lists',
  templateUrl: './shopping-lists.page.html',
  styleUrls: ['./shopping-lists.page.scss'],
  providers: [
    MenuClickListenerService,
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
    private readonly touchMoveListener: TouchMoveListener,
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
