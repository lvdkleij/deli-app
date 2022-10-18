import { animate, state, style, transition, trigger } from '@angular/animations';

export const rotateAnimation = trigger('rotateAnimation', [
  state('true', style({
    transform: 'rotate(90deg)'
  })),
  transition('* => *', [
    animate('200ms ease-out'),
  ])
]);
