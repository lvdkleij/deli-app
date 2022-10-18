import { Component, EventEmitter, Output } from '@angular/core';
import { slideFromBottom } from '@animations';
import { Store } from '@ngrx/store';
import { addShoppingList, StoreState } from '@store';
import { BUTTON_VIEW } from '@components/ui';


@Component({
  selector: 'add-list-feature',
  templateUrl: 'add-list.feature.html',
  styleUrls: ['add-list.feature.scss'],
  animations: [slideFromBottom]
})
export class AddListFeature {

  BUTTON_VIEW = BUTTON_VIEW;
  @Output() closeModal = new EventEmitter();

  constructor(
    private readonly store: Store<StoreState>
  ) {}

  BACKGROUNDS = [
    'rgba(255, 0, 0, 0.25)',
    'rgba(0, 255, 0, 0.25)',
    'rgba(0, 0, 255, 0.25)',
    'rgba(255, 255, 0, 0.25)',
    'rgba(0, 255, 255, 0.25)',
    'rgba(255, 255, 255, 0.25)',
    'rgba(127, 255, 0, 0.25)',
    'rgba(255, 0, 255, 0.25)',
    'rgba(255, 0, 255, 0.25)',
    'rgba(255, 0, 255, 0.25)',
    'rgba(255, 0, 255, 0.25)',
    'rgba(255, 0, 255, 0.25)',
    'rgba(255, 0, 255, 0.25)',
    'rgba(255, 0, 255, 0.25)',
  ];

  value = null;
  listName = '';
  background = '';

  onCreateList() {
    this.store.dispatch(addShoppingList({ list: { name: this.listName, background: this.background, items: [] }}));
    this.closeModal.emit();
  }
  onSelectBackground(background: string) {
    this.background = background;
  }
}
