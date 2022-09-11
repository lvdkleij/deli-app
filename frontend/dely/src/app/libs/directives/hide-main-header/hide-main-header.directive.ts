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
    if (this.mainToolbarHeight !== this.header.el.firstElementChild.clientHeight) {
      this.domCtrl.read(() => {
        this.mainToolbarHeight = this.header.el.firstElementChild.clientHeight;
      });
    }

    const scrollTop = $event.detail.scrollTop;
    let newPosition = - (scrollTop / 3);
    if (newPosition < -this.mainToolbarHeight) {
      newPosition = -this.mainToolbarHeight;
    }

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header.el, 'top', `${newPosition}px`);
    });
  }

}
