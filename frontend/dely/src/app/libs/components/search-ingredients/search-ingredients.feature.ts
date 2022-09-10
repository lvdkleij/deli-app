
import { AfterViewInit, Component, HostBinding, NgZone, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ScrollListenerService } from '../../services/scroll-listener/scroll-listener.service';

import { Modals } from '../modals/modal.constants';
import { ModalService } from '../modals/modal.service';
import { slideAnim } from './search-ingredients.animations';

@Component({
  selector: 'search-ingredients',
  templateUrl: './search-ingredients.feature.html',
  styleUrls: ['./search-ingredients.feature.scss'],
  animations: [slideAnim]
})
export class SearchIngredientsFeature implements OnInit, OnDestroy, AfterViewInit {
  @HostBinding('@slideAnim') get slideToggle() {
    console.log(this.showHide);
    return this.showHide;
  }

  scrollSubscription: Subscription;
  modals = Modals;

  showHide = false;

  deltaYSum = 0;

  prevScrollTop = 0;

  isUppScroll = true;

  constructor(
    readonly modalService: ModalService,
    readonly scrollListener: ScrollListenerService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {

  }

  ngAfterViewInit() {


    this.scrollSubscription = this.scrollListener.scrollEvent$.subscribe(scrollTop => {
      if (!scrollTop || (scrollTop < 0 || this.prevScrollTop < 0)) {
        return;
      }


        const deltaY = scrollTop - this.prevScrollTop;

        if (deltaY > 0 && !this.isUppScroll)  {
          this.deltaYSum = 0;
          this.isUppScroll = true;
        } else if (deltaY < 0 && this.isUppScroll) {
          this.deltaYSum = 0;
          this.isUppScroll = false;
        }

        this.deltaYSum += deltaY;

        if (this.deltaYSum > 30 && !this.showHide) {
          console.log('f')
          this.ngZone.run(() => {
            this.showHide = true;
          });
        } else if (this.deltaYSum < -30 && this.showHide) {
          console.log('fff')
          this.ngZone.run(() => {
            this.showHide = false;
          });
        }

        this.prevScrollTop = scrollTop;
    });

  }


  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }

  onPresentModal() {
    this.showHide = true;
    this.modalService.present(Modals.SEARCH);
  }

  onDismissModal() {
    this.showHide = false;
    this.modalService.dismiss(Modals.SEARCH);
  }


}
