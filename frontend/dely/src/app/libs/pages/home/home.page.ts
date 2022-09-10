import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
})
export class HomePage implements OnInit {

  constructor(
    private readonly renderer: Renderer2
  ) {}

  ngOnInit() {

    // const initialWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    // const initialHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


    // this.renderer.setStyle(document.body, 'height', `${initialHeight}px`);
    // this.renderer.setStyle(document.documentElement, 'height', `${initialHeight}px`);
    // console.log(document.documentElement);
  }

}
