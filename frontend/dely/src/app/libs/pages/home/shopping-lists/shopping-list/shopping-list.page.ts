import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectList } from 'src/app/libs/store/app.selectors';
import { first } from 'rxjs/operators';
import { StoreState } from 'src/app/libs/store/app.reducer';
import { Observable, Subscription } from 'rxjs';
import { TouchMoveListener } from 'src/app/libs/services/touch-move-listener/touch-move-listener.service';
import { KeyboardListenerService } from 'src/app/libs/services/keyboard/keyboard-listener.service';
import { ScrollListenerService } from 'src/app/libs/services/scroll-listener/scroll-listener.service';
import { ModalService } from 'src/app/libs/components/modals/modal.service';
import { lastListPathAction } from 'src/app/libs/store/app.actions';
import { MenuClickListenerService } from 'src/app/libs/components/navigation/top/services/menu/menu.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.page.html',
  styleUrls: ['./shopping-list.page.scss'],
  providers: [
    ScrollListenerService,
    MenuClickListenerService,
    ModalService
  ]
})
export class ShoppingListPage implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('scrollContainer') scrollContainer: ElementRef;

  data: Observable<any>;
  touchMoveSubscription: Subscription;
  touchEvent$;

  viewWillLeave;
  viewDidEnter;

  constructor(
    private readonly scrollListener: ScrollListenerService,
    readonly menuClickListener: MenuClickListenerService,
    private readonly store: Store<StoreState>,
    private readonly route: ActivatedRoute,
    private readonly touchMoveListener: TouchMoveListener,
    readonly keyboardListener: KeyboardListenerService
  ) { }

  ngOnInit(): void {
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
    console.log(this.route);
    this.store.dispatch(lastListPathAction({ lastListPath: this.route.snapshot.params.id}));

    // this.touchMoveSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.scrollListener.addListener(this.scrollContainer);
    // window.addEventListener('scroll', (e) => {console.log(e); e.preventDefault();}, {passive: false});
  }

  ngOnDestroy(): void {
  }

  onNavigateToLists() {

  }
}
