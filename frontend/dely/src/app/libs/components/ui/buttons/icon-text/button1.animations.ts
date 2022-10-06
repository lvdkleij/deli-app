import { trigger, state, style, transition, animate } from '@angular/animations';


export const hideButtonTextAnim = trigger('hideButtonTextAnim', [
  state('true', style({
    'max-width': '0',
  })),
  transition('* <=> *', [animate('5000ms')])
]);
