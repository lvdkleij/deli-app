import { animate, state, style, transition, trigger } from '@angular/animations';


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
    transform: 'translateY(0)'
  })),
  transition('* <=> *', [animate('100ms linear')])
]);
