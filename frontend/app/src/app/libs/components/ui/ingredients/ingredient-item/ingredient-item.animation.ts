import { animate, state, style, transition, trigger } from '@angular/animations';


export const itemLockAnim = trigger('itemLockAnim', [
  state('true', style({
    visibility: 'visible',
    opacity: '0.2'
  })),
  transition('* <=> *', [animate('200ms')])
]);

export const expandShrinkAnim = trigger('expandShrinkAnim', [
  transition('* <=> *', [animate('100ms', style({
    width: '2.5em',
    height: '1.75em',
  }))])
]);

