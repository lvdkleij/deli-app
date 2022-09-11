import { Injectable, NgZone, Renderer2, ElementRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ScrollListenerService {

  private readonly _scrollEvent$ = new BehaviorSubject<number>(null);
  private readonly _scrollRegionHeight$ = new BehaviorSubject<number>(null);

  readonly scrollEvent$: Observable<number> = this._scrollEvent$.asObservable();
  readonly scrollRegionHeight$: Observable<number> = this._scrollRegionHeight$.asObservable();

  constructor(
    private readonly ngZone: NgZone,
    private readonly renderer: Renderer2
  ) {}

  private listen(value: number) {
    this._scrollEvent$.next(value);
  }

  addListener(scrollElement: ElementRef) {
    if (scrollElement) {
      this.ngZone.runOutsideAngular(() => {
        this.renderer.listen(
          scrollElement.nativeElement,
          'scroll',
          event => this.listen(event.target.scrollTop));
      });
      const scrollRegionHeight = scrollElement.nativeElement.clientHeight;
      const childHeight: number = Array.from(scrollElement.nativeElement.childNodes).reduce((total: number, x: Element) => {
        const styles = window.getComputedStyle(x);
        return total + x.clientHeight + +styles.marginTop.match(/\d/g).join('') + +styles.marginBottom.match(/\d/g).join('');
      }, 0) as number;

      const styles = window.getComputedStyle(scrollElement.nativeElement);
      this._scrollRegionHeight$.next(childHeight - scrollRegionHeight + +styles.paddingTop.match(/\d/g).join(''));
    }
  }


}
