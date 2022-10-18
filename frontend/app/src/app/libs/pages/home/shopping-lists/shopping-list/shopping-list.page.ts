import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectList, StoreState, setActiveShoppingList} from '@store';
import { first } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { KeyboardListenerService, ScrollListenerService } from '@services';
import { ModalService } from '@components/modals';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
  providers: [
    ScrollListenerService,
    ModalService
  ]
})
export class ShoppingListPage implements AfterViewInit, OnDestroy, OnInit {

  data$: Observable<any>;
  scrollSubscription: Subscription;
  touchEvent$;

  viewWillLeave;
  viewDidEnter;

  constructor(
    private readonly store: Store<StoreState>,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly navCtrl: NavController,
    readonly keyboardListener: KeyboardListenerService,
  ) {
   }

  ngOnInit(): void {
    this.store.dispatch(setActiveShoppingList({ activeShoppingList: this.route.snapshot.params.id}));
    this.route.params.pipe(first()).subscribe(({id}) => this.data$ = this.store.select(selectList(id)));
    console.log('shopping list created');
  }

  ngAfterViewInit(): void {
    // setInterval(() => {
    //   console.log(this.navTop);
    // }, 1000)
    // window.addEventListener('scroll', (e) => {console.log(e); e.preventDefault();}, {passive: false});
  }

  ngOnDestroy(): void {
    console.log('shopping list destroyed');
  }

  onNavigateToLists() {

  }
}
