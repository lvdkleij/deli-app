
import { AfterViewInit, Component, EventEmitter, HostBinding, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { ScalePageService } from '@services';
import { Modals } from '../modal.constants';
import { ModalService } from '../modal.service';
import { slideLeftAnim } from './create-shopping-list.animations';
import { Store } from '@ngrx/store';
import { addShoppingList, StoreState } from '@store';


@Component({
  selector: 'create-shopping-list-modal',
  templateUrl: 'create-shopping-list.modal.html',
  styleUrls: ['create-shopping-list.modal.scss'],
  animations: [slideLeftAnim]
})
export class CreateShoppingListModal implements OnInit {

  @HostBinding('@slideLeftAnim') get slideIn() { return this.value; };
  @HostBinding('style.height') height;

  BACKGROUNDS = [
    'rgba(255, 0, 0, 0.25)',
    'rgba(0, 255, 0, 0.25)',
    'rgba(0, 0, 255, 0.25)',
    'rgba(255, 255, 0, 0.25)',
    'rgba(0, 255, 255, 0.25)',
    'rgba(255, 255, 255, 0.25)',
    'rgba(127, 255, 0, 0.25)',
    'rgba(255, 0, 255, 0.25)',
  ];

  subscription: Subscription;
  value = null;
  listName = '';
  background = '';

  constructor(
    public modalService: ModalService,
    readonly scalePageService: ScalePageService,
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isPresent$(Modals.CREATE_SHOPPING_LIST)
      .pipe(
        tap(value => value ? this.height = `${document.getElementsByTagName('ion-router-outlet')[1].clientHeight}px` : null)
      )
      .subscribe((value) => this.value = value);
  }

  onClose() {
    this.modalService.dismiss(Modals.CREATE_SHOPPING_LIST);
    this.scalePageService.resetScale();
  }

  onDone() {
    this.modalService.dismiss(Modals.CREATE_SHOPPING_LIST);
    this.store.dispatch(addShoppingList({ list: { name: this.listName, background: this.background, items: [] }}));
    this.scalePageService.resetScale();
  }

  onSelectBackground(background: string) {
    this.background = background;
  }
}
