import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { selectUserAuthenticationStatus, StoreState } from '@store';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(
    private readonly store: Store<StoreState>,
    private readonly router: Router
  ) {}

  canActivate(
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot
  ): Observable<boolean|UrlTree> {
    return this.store.select(selectUserAuthenticationStatus).pipe(
      map(({ user, hasSeenTour}) => user ? true :
        this.router.parseUrl(hasSeenTour ? '/authentication' : '/welcome-tour'))
    );
  }
}
