import { Directive, ElementRef, NgZone, OnDestroy, OnInit } from '@angular/core';
import { ScrollListenerService } from '@services';
import { Subscription } from 'rxjs';
import { NavigationTopWithSearchbarComponent } from './with-searchbar.component';


@Directive({
  selector: '[withSearchBar]',
})
export class WithSearchBarDirective implements OnInit, OnDestroy {

  scrollSubscription: Subscription;

  previousY = 0;

  cumDeltaY = 0;

  constructor(
    private readonly component: NavigationTopWithSearchbarComponent,
    private readonly scrollListener: ScrollListenerService,
    private readonly ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.component.toolbarHeight = 42;
    //
    this.scrollSubscription = this.scrollListener.scrollEvent$.subscribe(scrollTop => {

      if (scrollTop <= 0) {
        scrollTop = 0;
      }
      const deltaY = scrollTop - this.previousY;
      // if (-1 <= deltaY && deltaY <= 1) { deltaY = 0; };
      this.cumDeltaY += deltaY;
      if (this.cumDeltaY > 15) {
        this.ngZone.run(() => {
          this.component.hideToolbar = true;
        });
        this.cumDeltaY = 0;
      } else if (this.cumDeltaY < -15) {
        this.ngZone.run(() => {
          this.component.hideToolbar = false;
        });
        this.cumDeltaY = 0;
      }
      this.previousY = scrollTop;
    });
  }

  ngOnDestroy(): void {
      this.scrollSubscription.unsubscribe();
  }


}
