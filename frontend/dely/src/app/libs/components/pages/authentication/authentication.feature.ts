

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { closeModal, hideLeftPart, opacityAnim, slideLeftAnim } from '@animations';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreState } from '@store';

@Component({
  selector: 'authentication-feature',
  templateUrl: './authentication.feature.html',
  styleUrls: ['./authentication.feature.scss'],
  animations: [slideLeftAnim, opacityAnim, hideLeftPart, closeModal]
})
export class AuthenticationFeature implements OnInit, AfterViewInit {

  currentForm = 'signIn';
  otherForm = 'signUp';

  forms = {
    signIn: {
      name: 'Sign In',
      form: null
    },
    signUp: {
      name: 'Sign Up',
      form: null
    }
  };

  constructor(
    private readonly router: Router,
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {

    // this.isAuthenticated = this.data.userId ? true : false;
  }

  ngAfterViewInit(): void {
  }

  onNext() {
  };

  onChangeForm() {
    const temp = this.currentForm;
    this.currentForm = this.otherForm;
    this.otherForm = temp;
  }

  get isSignInForm() { return this.currentForm === 'signIn'; };
}
