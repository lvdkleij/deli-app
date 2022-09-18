import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Modals } from './modal.constants';

@Injectable()
export class ModalService {

  private readonly _isPresent$ = new BehaviorSubject<Modal>({ type: Modals._INIT});
  readonly isPresent$ = (modal: Modals) => this._isPresent$.asObservable().pipe(
    filter(({ type }) => type === modal),
    map(({value}) => value)
  );

  present(type: Modals) {
    this._isPresent$.next({ type, value: true });
  }

  dismiss(type: Modals) {
    this._isPresent$.next({ type, value: false });
  }
}

export interface Modal {
  type: Modals;
  value?: boolean;
};
