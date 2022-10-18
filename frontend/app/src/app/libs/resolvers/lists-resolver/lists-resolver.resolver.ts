import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { mockItemListsData } from '../../pages/home/shopping-lists/shopping-list/mockData';
import { mockProductsData } from '../../pages/home/shopping-lists/shopping-list/mockDataSearch';
import { setProducts, setShoppingLists } from '../../store/app.actions';
import { StoreState } from '../../store/app.reducer';
import { selectLists } from '../../store/app.selectors';

@Injectable({ providedIn: 'root' })
export class ListsResolver implements Resolve<any> {


  constructor(
    private readonly store: Store<StoreState>,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.select(selectLists).pipe(first()).subscribe(lists => !lists.length ?
      this.store.dispatch(setShoppingLists({ lists: mockItemListsData})) : null);
    this.store.dispatch(setProducts({ products: mockProductsData }));
  }
}
