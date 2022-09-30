import { animate, state, style, transition, trigger } from '@angular/animations';

export const slideLeftAnim = trigger('slideLeftAnim', [
  transition(':enter', [
    style({ transform: 'translateX(100%)'}),
    animate('300ms ease-out', style({ transform: 'translateX(0)' }))]),
  transition(':leave', [
    animate('300ms ease-out', style({ transform: 'translateX(100%)' }))
  ])
]);

export const slideFromBottom = trigger('slideFromBottom', [
  transition(':enter', [
    style({ transform: 'translateY(-100%)'}),
    animate('300ms ease-out', style({ transform: 'translateY(0)' }))]),
  transition(':leave', [
    animate('300ms ease-out', style({ transform: 'translateY(-100%)' }))
  ])
]);


export const slideInFromBottom = trigger('slideInFromBottom', [
  transition(':enter', [
    style({ transform: 'translateY(100%)'}),
    animate('300ms ease-out', style({ transform: 'translateY(0)' }))]),
  transition(':leave', [
    animate('300ms ease-out', style({ transform: 'translateY(100%)' }))
  ])
]);

export const opacityAnim = trigger('opacityAnim', [
  transition(':enter', [
    style({ opacity: '0'}),
    animate('800ms ease-out', style({ opacity: '1' }))]),
  transition(':leave', [
    animate('0ms ease-out', style({ opacity: '0' }))
  ])
]);

export const hideLeftPart = trigger('hideLeftPart', [
  state('true', style({
    transform: 'translateX(-20%)',
  })),
  transition('* <=> *', [animate('300ms ease-out')])
]);

export const hideTopPart = trigger('hideTopPart', [
  state('true', style({
    transform: 'translateY(-20%)',
  })),
  transition('* <=> *', [animate('300ms ease-out')])
]);

export const closeModal = trigger('closeModal', [
  transition(':leave', [
    animate('300ms ease-out', style({ opacity: '0', scale: '0' }))
  ])
]);
