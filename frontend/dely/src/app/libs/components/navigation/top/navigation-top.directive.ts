import { Directive, ElementRef, OnInit } from '@angular/core';


@Directive({
  selector: '[toolBar]',
})
export class ToolBarDirective implements OnInit{

  constructor(
    private readonly element: ElementRef,
  ) {}

  ngOnInit(): void {
    // this.component.toolbarHeight = 56;
    // this.component.hideToolbar = true;
    console.log(this.element);
  }


}
