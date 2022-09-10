import { animate, state, style, transition, trigger } from '@angular/animations';


export const slideLeftAnim = trigger('slideLeftAnim', [
  state('true', style({
    opacity: '1',
    visibility: 'visible'
  })),
  transition('* <=> *', [animate('200ms')])
]);
