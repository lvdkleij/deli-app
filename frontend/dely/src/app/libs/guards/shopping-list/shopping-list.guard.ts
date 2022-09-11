import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { first, Observable } from 'rxjs';
import { selectList, StoreState } from '@store';

@Injectable()
export class ShoppingListGuard implements CanActivate {

  constructor(
    private readonly store: Store<StoreState>,
    private readonly router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    let list: any;

    this.store.select(selectList(route.params.id)).pipe(first()).subscribe(_list => list = _list);
    if (!list) {
      return this.router.parseUrl('/shopping-lists');
    }
    return true;
  }
}
