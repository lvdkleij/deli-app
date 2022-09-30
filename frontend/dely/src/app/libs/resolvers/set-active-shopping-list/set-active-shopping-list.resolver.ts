import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { setActiveShoppingList } from '../../store/app.actions';
import { StoreState } from '../../store/app.reducer';

@Injectable({ providedIn: 'root' })
export class SetActiveShoppingListResolver implements Resolve<any> {

  constructor(
    private readonly store: Store<StoreState>,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.store.dispatch(setActiveShoppingList({ activeShoppingList: route.params.id }));
  }
}
