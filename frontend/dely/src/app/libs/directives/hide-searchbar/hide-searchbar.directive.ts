import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';


@Directive({
  selector: '[hideSearchbar]'
})
export class HideSearchbarDirective  {

  @Input('hideSearchbar') data: { searchbar: any, header: any};
  private mainToolbarHeight = 0;

  private previousY = 0;
  private positionY = 0;
  private hasHidden = false;

  constructor(
    private readonly renderer: Renderer2,
    private readonly domCtrl: DomController
  ) {}

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    if (this.mainToolbarHeight !== this.data.searchbar.nativeElement.clientHeight) {
      this.domCtrl.read(() => {
        this.mainToolbarHeight = this.data.searchbar.nativeElement.clientHeight;
      });
    }
    else {

      let scrollTop = $event.detail.scrollTop;
      if (scrollTop <= 0) {
        this.hasHidden = false;
        scrollTop = 0;
      }
      const deltaY = scrollTop - this.previousY;
      this.positionY -= deltaY;

      if (this.positionY <= -(this.mainToolbarHeight)) {
        this.positionY = -(this.mainToolbarHeight);
        this.hasHidden = true;
      }
      if (this.positionY > 0) {
        this.positionY = 0;
      }
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.data.searchbar.nativeElement, 'transform', `translateY(calc(100% + ${this.positionY}px))`);

        let limit = (scrollTop - 10) / 10;
        if (limit > 1) {
          limit = 1;
        }
        if (limit < 0) {
          limit = 0;
        }
        console.log(limit, this.hasHidden);
        this.renderer.setStyle(this.data.header.el.children[1],
          'box-shadow', `0 3px 5px -2px rgba(var(--ion-color-dark-rgb), ${0.3 * ( limit ) * (1 - +this.hasHidden)})`);

        if (this.hasHidden || scrollTop <= 0) {
          this.renderer.setStyle(this.data.searchbar.nativeElement,
            'box-shadow', `0 3px 5px -2px rgba(var(--ion-color-dark-rgb), ${0.3 * limit})`);
          }
      });

      this.previousY = scrollTop;

    }
  }

}
