import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts, StoreState } from '@store';
import { Observable } from 'rxjs';


@Component({
  selector: 'search-ingredient-list',
  templateUrl: './search-ingredient-list.feature.html',
  styleUrls: ['./search-ingredient-list.feature.scss']
})
export class SearchIngredientListFeature implements OnInit {

  @Output() product = new EventEmitter<string>();

  lala = {};

  products$: Observable<any[]>;

  constructor(
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.products$ = this.store.select(selectProducts);
  }

  onClick(i: number) {
    if (i in this.lala) {
      this.lala[i] = !this.lala[i];
    } else {
      this.lala[i] = true;
    }
  }

  onProductClick(data) {}
}
