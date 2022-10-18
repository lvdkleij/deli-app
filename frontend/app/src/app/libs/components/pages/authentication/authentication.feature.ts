

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { closeModal, hideLeftPart, opacityAnim, slideLeftAnim } from '@animations';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreState } from '@store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BUTTON_VIEW } from '@components/ui';

@Component({
  selector: 'authentication-feature',
  templateUrl: './authentication.feature.html',
  styleUrls: ['./authentication.feature.scss'],
  animations: [slideLeftAnim, opacityAnim, hideLeftPart, closeModal]
})
export class AuthenticationFeature implements OnInit, AfterViewInit {
  FORMS = FORMS;
  BUTTON_VIEW = BUTTON_VIEW;
  currentForm = FORMS.SIGN_IN;

  authenticationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl({ value: '', disabled: this.isSignInForm}, [Validators.required])
  });

  constructor(
    private readonly router: Router,
    private readonly store: Store<StoreState>,
    private readonly httpClient: HttpClient
  ) {}

  validateAccount = false;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
  }

  onSubmit() {
    if (!this.authenticationForm.valid) { return; }

    const requestBody = {
      email: this.formEmail.value,
      ...( !this.getFormName.disabled && { name: this.getFormName.value })
    };

    const requestPath = this.isSignInForm ? 'signIn' : 'signUp';
    let headers = new HttpHeaders();
    headers =  headers.set('Content-Type', 'application/json; charset=utf-8');
    this.httpClient.post('/api/user/' + requestPath, {
        email: this.formEmail.value,
        ...( !this.getFormName.disabled && { name: this.getFormName.value })
      },
      { headers }
    ).subscribe((x: any) => {
      console.log(x);
      if (x.type === 'ERROR') {
        console.log('ERROR');
      } else {
        this.validateAccount = true;
      }
    });
  };

  onChangeForm(formName: FORMS) {
    this.currentForm = formName;
    if (this.isSignInForm) {
      this.getFormName.disable();
    } else {
      this.getFormName.enable();
    }
  }

  get formEmail() {
    return this.authenticationForm.controls.email;
  }

  get getFormName() {
    return this.authenticationForm.controls.name;
  }

  get isSignInForm() { return this.currentForm === FORMS.SIGN_IN; };
}

enum FORMS {
  SIGN_IN='Login',
  SIGN_UP='Sign up'
};
