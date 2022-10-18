

import { AfterViewInit, ChangeDetectorRef, Component, ElementRef,
  EventEmitter, Input, NgZone, Output, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { expandShrinkAnim, itemLockAnim } from './ingredient-item.animation';


@Component({
  selector: 'ingredient-item',
  templateUrl: './ingredient-item.component.html',
  styleUrls: ['./ingredient-item.component.scss'],
  animations: [itemLockAnim, expandShrinkAnim]
})
export class IngredientItemComponent implements AfterViewInit {

  @ViewChild('item') itemView: ElementRef;
  @ViewChild('delete') deleteView: ElementRef;

  @Output() destroy = new EventEmitter<boolean>();
  @Output() contentClick = new EventEmitter<boolean>();
  @Output() isSelected = new EventEmitter<boolean>();

  @Input() data: IngredientItem = {
    name: 'Broccoli',
    description: 'Neem de bio versie safasfsafaafsasfasfasfsafasfa',
    price: {
      value: 1.34,
      currency: '$'
    },
    quantity: {
      value: 100,
      type: 'gr'
    },
    amount: 1,
    selected: false
  };

  private _selectAmount = new BehaviorSubject<boolean>(false);
  selectAmount = this._selectAmount.asObservable();

  setAmountTimer = null;
  _isSelected = false;
  right = 0;

  setTransition = false;
  setTransitionDelete = false;
  prevX: number;
  startX: number;
  startY: number;
  diffY: number;
  diffX: number;

  setDiff = true;
  ticking = false;

  expandShrink;

  constructor(
    private readonly renderer: Renderer2,
    private readonly ngZone: NgZone,
    private readonly changeDetectionRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {

      this.renderer.listen(this.itemView.nativeElement, 'touchstart', (touchEvent) => {
        this.setTransition = false;
        const touch = touchEvent.targetTouches[0];

        this.prevX = touch.pageX;
        this.startX = touch.pageX;
        this.startY = touch.pageY;
        this.setDiff = true;

        this.changeDetectionRef.detectChanges();
      });

      this.renderer.listen(this.itemView.nativeElement, 'pointermove', this.moveEvent.bind(this));
      this.renderer.listen(this.itemView.nativeElement, 'touchmove', this.moveEvent.bind(this));

      this.renderer.listen(this.itemView.nativeElement, 'touchend', this.stopEvent.bind(this));
      this.renderer.listen(this.itemView.nativeElement, 'pointerup', this.stopEvent.bind(this));
    });
  }

  moveEvent(event: PointerEvent | TouchEvent) {
    let pageX: number;
    let pageY: number;

    if (event instanceof PointerEvent ) {
      pageX = event.pageX;
      pageY = event.pageY;
    } else {
      const touch = event.targetTouches[0];
      pageX = touch.pageX;
      pageY = touch.pageY;
    }

    if (this.setDiff) {
      this.setDiff = false;
      this.diffX = Math.abs(this.startX - pageX);
      this.diffY = Math.abs(this.startY - pageY);
    }

    if (event.cancelable && this.diffX > this.diffY) {
      event.preventDefault();

      if (!this.ticking) {
        requestAnimationFrame(() => {
          this.ticking = false;

          const deltaX = pageX - this.prevX;
          this.prevX = pageX;

          this.right = Math.max(this.right - deltaX, 0);
          this.itemView.nativeElement.style.right = this.right + 'px';
          if (this.right >= 150) {
            this.deleteView.nativeElement.style.right = this.right + 'px';
            this.deleteView.nativeElement.style.transform = 'translateX(100%)';
          } else if (this.right < 150) {
            this.deleteView.nativeElement.style.right = '0';
            this.deleteView.nativeElement.style.transform = 'translateX(0)';
          }
        });
      }
      this.ticking = false;
      return;
    };
    return true;
  }

  stopEvent(event) {
    this.setTransition = true;
    this.changeDetectionRef.detectChanges();

    if (this.right < 75) {
      this.onReset();
    } else if (this.right >= 75 && this.right < 150) {
      event.currentTarget.style.right = '75px';
      this.right = 75;
    } else {
      this.onDestroy();
    }

  }

  onIsSelected() {
    this._isSelected = !this._isSelected;
    this.isSelected.emit(this._isSelected);
  }

  onReset() {
    this.right = 0;
    this.itemView.nativeElement.style.right = '0';
  }

  onDestroy() {
    this.deleteView.nativeElement.style.right = 'calc(100% + 75px)';
    this.itemView.nativeElement.style.right = 'calc(100% + 75px)';
    setTimeout(() => {this.destroy.emit(true);}, 200);
  }

  setAmount() {
    this._selectAmount.next(true);
    this._setTimeout();
    this.onReset();
  }

  _setTimeout() {
    this.setAmountTimer = setTimeout(this.hideAmount.bind(this), 3000);
  }

  _clearTimeout() {
    if (this.setAmountTimer) {
      clearTimeout(this.setAmountTimer);
      this.setAmountTimer = null;
    }
  }

  hideAmount() {
    this._selectAmount.next(false);
    this._clearTimeout();
  }

  addOrSubtractOne(type: 'add' | 'subtract') {
    this._clearTimeout();
    if (type === 'add') {
      this.expandShrink = !this.expandShrink;
      this.data.amount = Math.min(99, this.data.amount + 1);
      this._setTimeout();
    } else {
      if (this.data.amount > 1) {
        this.expandShrink = !this.expandShrink;
        this.data.amount = Math.max(1, this.data.amount - 1);
        this._setTimeout();
      } else {
        this.hideAmount();
        this.right = 75;
        this.itemView.nativeElement.style.right = '75px';
      }
    }
  }
}

interface IngredientItem {
  name: string;
  description?: string;
  price?: {
    value: number;
    currency: string;
  };
  quantity?: {
    value: number;
    type: string;
  };
  amount: number;
  selected: boolean;
}
