import { animate, state, style, transition, trigger } from '@angular/animations';


export const showNavBarAnim = trigger('showNavBarAnim', [
  state('true', style({
    transform: 'translateY(0)'
  })),
  state('false', style({
    transform: 'translateY(-100%)'
  })),
  transition('* <=> *', [animate('200ms ease-in')])
]);
