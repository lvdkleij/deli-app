import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'ui-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  private DOT_SIZE = 9;
  private GAP = 15;

  private _currentSlide = 0;
  get currentSlide() {
    return this._currentSlide;
  }
  @Input() set currentSlide(value: number) {
    this._currentSlide = Math.min(value, this.totalSlides - 1);
    this.resetArray();
    this.slideActive[this.currentSlide] = true;
  };
  @Input() totalSlides = 1;

  slideActive: boolean[] = [];
  ngOnInit(): void {
    this.slideActive = [];

    for (let i = 0; i < this.totalSlides; i++) {
      this.slideActive.push((i === this.currentSlide) ? true : false);
    }
  }


  resetArray() {
    this.slideActive = this.slideActive.map(x => false);
  }
}
