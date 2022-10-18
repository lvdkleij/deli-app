import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class KeyboardListenerService {


  private _keyboardHeight$ = new BehaviorSubject<number>(0);
  keyboardHeight$ = this._keyboardHeight$.asObservable().pipe(shareReplay());

  constructor(
    private readonly platform: Platform
  ) {

    this.platform.keyboardDidShow.subscribe((e) => {
      const { keyboardHeight } = e;
      this._keyboardHeight$.next(keyboardHeight);
    });

    this.platform.keyboardDidHide.subscribe(() => {
      this._keyboardHeight$.next(0);
    });
  }
}
