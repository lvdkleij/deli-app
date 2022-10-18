import { animate, style, transition, trigger } from '@angular/animations';

export const shrinkAnim = trigger('shrinkAnim', [
  transition(':leave', [
    animate('500ms',
      style({ height: '0'}))
  ]),
  transition(':enter', [
    style({ height: '0'}),
    animate('500ms',
      style({ height: '1'}))
  ])
]);

export const fadeAnim = trigger('fadeAnim', [
  transition(':leave', [
    animate('300ms',
      style({ opacity: '0', height: '0'}))
  ]),
  transition(':enter', [
    style({ opacity: '0'}),
    animate('300ms',
      style({ opacity: '1'}))
  ])
]);

