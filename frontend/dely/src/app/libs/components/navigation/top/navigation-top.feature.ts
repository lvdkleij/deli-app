

import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { showNavBarAnim } from './animations';
import { MenuClickListenerService } from './services/menu/menu.service';
import { OptionsClickListenerService } from './services/options.service';

@Component({
  selector: 'navigation-top',
  templateUrl: './navigation-top.feature.html',
  styleUrls: ['./navigation-top.feature.scss'],
  animations: [showNavBarAnim]
})
export class NavigationTopFeature implements AfterViewInit, OnDestroy {

  // @HostBinding('@showNavBarAnim') get showNavBarToggle() {
  //   return this.showNavBar;
  // };

  @ViewChild('toolbar') toolbar: ElementRef;

  @Input() data: { title?: string } = {};

  touchMoveSubscription: Subscription;

  distanceY = 0;
  startY = 0;
  showNavBar = true;

  menuClickSubscription;

  oldPos = 0;
  shade = 0;
  pos = 0;
  hasHitTop = 1;

  ticking = false;
  menuClicked = false;

  scrollRegionHeight: number;
  subHeaderHeight: number;

  prevY = null;


  constructor(
    readonly menuClickListener: MenuClickListenerService,
    readonly optionsClickListener: OptionsClickListenerService,
    private readonly navCtrl: NavController,
    private renderer: Renderer2,
    private readonly elementRef: ElementRef,
    private readonly changeDetectionRef: ChangeDetectorRef
  ) { }


  ionViewWillLeave() {
  }

  ngAfterViewInit(): void {
    // this.scrollSubscription = this.scrollListener.scrollEvent$.subscribe(event => this.logScrolling(event));
    // this.menuClickSubscription = this.menuClickListener.listen$.subscribe(event => this.menuClicked = event);
    // this.scrollRegionHeightSubcription = this.scrollListener.scrollRegionHeight$.subscribe(event => this.scrollRegionHeight = event);
    // setTimeout(() => {
    //   this.subHeaderHeight = this.header.nativeElement.clientHeight;
    // }, 1);
  }

  // logScrolling(newPos) {
  //   try {
  //     if (this.oldPos > 0 && newPos >= 0) {
  //       const deltaY = newPos - this.oldPos;
  //       this.pos = this.minMax(this.pos + deltaY, 0, this.subHeaderHeight);
  //     }

  //     if (this.pos === this.subHeaderHeight) {
  //       this.hasHitTop = 0;
  //     }

  //     if (this.oldPos <= 0) {
  //       this.hasHitTop = 1;
  //     }

  //     this.shade = this.minMax(newPos/100, 0, 0.108);

  //     if (!this.ticking) {
  //       requestAnimationFrame(() => {
  //         this.ticking = false;
  //         this.renderer.setStyle(this.header.nativeElement, 'bottom', `${this.pos - this.subHeaderHeight}px`);
  //         this.renderer.setStyle(this.header.nativeElement, 'box-shadow', `0 2px 2px rgba(0 0 0 / ${this.shade * (1 - this.hasHitTop)})`);
  //         this.renderer.setStyle(this.toolbar.nativeElement, 'box-shadow', `0 2px 2px rgba(0 0 0 / ${this.shade * this.hasHitTop})`);
  //       });
  //     }

  //     this.oldPos = newPos;
  //     this.ticking = true;
  //   }
  //   catch {}
  // }

  minMax(value, min, max) {
    return Math.max(Math.min(value, max), min);
  }

  onShowMenu() {
    this.navCtrl.navigateBack('/shopping-lists');
  }

  onCloseMenu() {
    this.menuClickListener.emitChange();
  }

  ngOnDestroy() {
    // this.menuClickSubscription.unsubscribe();
  }

  onShowOptions() {
    this.optionsClickListener.emitChange();
  }
}
