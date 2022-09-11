import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ScalePageService {
  readonly SCALE = 0.9;
  readonly BLUR = '10';

  private _currentPageScale$ = new BehaviorSubject<ScalePageInterface>({ scale: 1.0, blur: 'blur(0)'});
  readonly currentPageScale$: Observable<ScalePageInterface> = this._currentPageScale$.asObservable();

  setScale() {
    this._currentPageScale$.next({ scale: this.SCALE, blur: `blur(${this.BLUR}px)`});
  }

  resetScale() {
    this._currentPageScale$.next({ scale: 1.0, blur: 'blur(0)'});
  }
}

export interface ScalePageInterface {
  scale: number;
  blur: string;
};
