

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class MenuClickListenerService {


  private value = false;
  private _listener$ = new BehaviorSubject<boolean>(null);
  listen$: Observable<boolean> = this._listener$.asObservable();

  emitChange() {
    this.value = !this.value;
    this._listener$.next(this.value);
  }

}
