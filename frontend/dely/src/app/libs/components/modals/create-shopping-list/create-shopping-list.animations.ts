import { animate, state, style, transition, trigger } from '@angular/animations';


export const slideLeftAnim = trigger('slideLeftAnim', [
  state('true', style({
    transform: 'translateX(0)'
  })),
  transition('* <=> *', [animate('300ms linear')])
]);
