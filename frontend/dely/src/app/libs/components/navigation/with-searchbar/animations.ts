import { animate, state, style, transition, trigger } from '@angular/animations';


export const hideToolbarAnim = trigger('hideToolbarAnim', [
  state('true', style({
    top: '-{{ toolbarHeight }}px'
  }), {params: { toolbarHeight: 0 }}),
  transition('* <=> *', [animate('200ms ease-in-out')])
]);
