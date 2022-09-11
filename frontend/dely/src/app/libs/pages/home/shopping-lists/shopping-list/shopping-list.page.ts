import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectList, StoreState, setActiveShoppingList} from '@store';
import { first } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { KeyboardListenerService } from '@services';
import { ModalService } from '@components/modals';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
  providers: [
    ModalService
  ]
})
export class ShoppingListPage implements AfterViewInit, OnDestroy, OnInit {

  toolbar;

  data: Observable<any>;
  touchMoveSubscription: Subscription;
  touchEvent$;

  viewWillLeave;
  viewDidEnter;

  constructor(
    private readonly store: Store<StoreState>,
    private readonly route: ActivatedRoute,
    readonly keyboardListener: KeyboardListenerService
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setActiveShoppingList({ activeShoppingList: this.route.snapshot.params.id}));
    this.route.params.pipe(first()).subscribe(({id}) => this.data = this.store.select(selectList(id)));
  }

  ionViewWillEnter() {
    this.viewWillLeave = false;
    this.viewDidEnter = true;
    // this.touchMoveSubscription = this.touchMoveListener.listen$.subscribe(x => console.log('1', x));
  }

  ionViewWillLeave() {
    this.viewDidEnter = false;
    this.viewWillLeave = true;
    // this.touchMoveSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    // setInterval(() => {
    //   console.log(this.navTop);
    // }, 1000)
    // window.addEventListener('scroll', (e) => {console.log(e); e.preventDefault();}, {passive: false});
  }

  ngOnDestroy(): void {
  }

  onNavigateToLists() {

  }
}
