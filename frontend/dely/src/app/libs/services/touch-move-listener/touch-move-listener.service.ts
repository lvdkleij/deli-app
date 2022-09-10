

import { Injectable, NgZone, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class TouchMoveListener {
  private renderer: Renderer2;

  private readonly _touchMove$ = new BehaviorSubject<TouchEvent2>(null);
  readonly listen$: Observable<TouchEvent2> = this._touchMove$.asObservable().pipe(shareReplay());

  constructor(
    private readonly rendererFactory: RendererFactory2,
    private readonly ngZone: NgZone
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.ngZone.runOutsideAngular(() => {
      this.renderer.listen(window, 'touchstart', event => this._touchMove$.next({type: 'start', event}));

      // this.renderer.listen(window, 'pointermove', event => this._touchMove$.next({type: 'move', event}));
      this.renderer.listen(window, 'touchmove', event => this._touchMove$.next({type: 'move', event}));

      // this.renderer.listen(window, 'pointerup', event => this._touchMove$.next( {type: 'end', event}));
      this.renderer.listen(window, 'touchend', event => this._touchMove$.next({type: 'end', event}));
    });
  }

}

export interface TouchEvent2 {
  type: string;
  event: any;
}
