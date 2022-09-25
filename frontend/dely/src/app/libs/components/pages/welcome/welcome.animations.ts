import { animate, state, style, transition, trigger } from '@angular/animations';


export const slideLeftAnim = trigger('slideLeftAnim', [
  transition(':enter', [
    style({ transform: 'translateX(100%)'}),
    animate('300ms ease-in', style({ transform: 'translateX(0)' }))]),
  transition(':leave', [
    animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
  ])
]);

export const opacityAnim = trigger('opacityAnim', [
  transition(':enter', [
    style({ opacity: '0'}),
    animate('600ms ease-in', style({ opacity: '1' }))]),
  transition(':leave', [
    animate('600ms ease-in', style({ opacity: '0' }))
  ])
]);

export const hideLeftPart = trigger('hideLeftPart', [
  state('true', style({
    transform: 'translateX(-20%)',
  })),
  transition('* <=> *', [animate('300ms ease-in')])
]);

export const closeModal = trigger('closeModal', [
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: '0', scale: '0' }))
  ])
]);
