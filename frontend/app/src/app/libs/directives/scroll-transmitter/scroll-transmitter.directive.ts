import { Directive, ElementRef, OnInit } from '@angular/core';
import { ScrollListenerService } from '../../services/scroll-listener';


@Directive({
  selector: '[scrollTransmitter]',
})
export class ScrollTransmitterDirective implements OnInit {

  constructor(
    private readonly element: ElementRef,
    private readonly scrollListener: ScrollListenerService
  ) {}

  ngOnInit(): void {
    this.scrollListener.addListener(this.element);
  }


}
