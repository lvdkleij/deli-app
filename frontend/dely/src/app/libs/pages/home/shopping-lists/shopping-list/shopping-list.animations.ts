/* eslint-disable @typescript-eslint/naming-convention */
import { animate, state, style, transition, trigger } from '@angular/animations';

export const menuAnimation = trigger('menuAnimation', [
  state('true', style({
    transform: 'translateX(0)'
  })),
  state('false', style({
    transform: 'translateX(calc(-100% - 10px))'
  })),
  transition('* => *', [
    animate('300ms ease-out'),
  ])
]);
