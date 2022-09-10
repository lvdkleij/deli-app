import { animate, state, style, transition, trigger } from '@angular/animations';


export const slideAnim = trigger('slideAnim', [
  state('true', style({
    transform: 'translateY(-100%)'
  })),
  transition('* => *', [
    animate('200ms'),
  ])
]);
