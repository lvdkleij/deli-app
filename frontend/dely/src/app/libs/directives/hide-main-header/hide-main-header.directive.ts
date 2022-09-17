import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';


@Directive({
  selector: '[hideMainHeader]'
})
export class HideMainHeaderDirective  {

  @Input('hideMainHeader') header: any;
  private mainToolbarHeight = 0;

  constructor(
    private readonly renderer: Renderer2,
    private readonly domCtrl: DomController
  ) {}

  @HostListener('ionScroll', ['$event']) onContentScroll($event) {
    if (this.mainToolbarHeight !== this.header.el.children[1].clientHeight) {
      this.domCtrl.read(() => {
        this.mainToolbarHeight = this.header.el.children[1].clientHeight;
      });
    }

    const scrollTop = $event.detail.scrollTop;
    let newPosition = - (scrollTop / 3);
    if (newPosition < -this.mainToolbarHeight) {
      newPosition = -this.mainToolbarHeight;
    }
    if (newPosition > 0) {
      newPosition = 0;
    }

    const relativePosition = (this.mainToolbarHeight + 2 * newPosition) / this.mainToolbarHeight;
    this.domCtrl.write(() => {
      // this.renderer.setStyle(this.header.el, 'top', `${newPosition}px`);
      // this.renderer.setStyle(this.header.el.children[1], 'color',
      // `rgba(0,0,0, ${relativePosition}`);
      this.renderer.setStyle(this.header.el.children[1],
        'box-shadow', `0 2px 4px -2px rgba(var(--ion-color-dark-rgb), ${0.4 * ( 1 - relativePosition)})`);
    });
  }

}
