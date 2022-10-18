import { animate, state, style, transition, trigger } from '@angular/animations';

export const SLIDE_ANIMATION_TIME = 200;
export const slideLeftAnim = trigger('slideLeftAnim', [
  state('true', style({
    opacity: '1',
    visibility: 'visible'
  })),
  transition('* <=> *', [animate('200ms')])
]);

export const slideLeftAnim2 = trigger('slideLeftAnim2', [
  state('true', style({
    transform: 'translateX(0)'
  })),
  transition('* <=> *', [animate('300ms linear')])
]);

export const slideLeftAnim3 = trigger('slideLeftAnim3', [
  state('true', style({
    top: '0'
  })),
  transition('* <=> *', [animate(`${SLIDE_ANIMATION_TIME}ms ease-in-out`)])
]);
