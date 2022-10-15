

import { AfterViewInit, Component, OnInit } from '@angular/core';
import { closeModal, hideLeftPart, opacityAnim, slideLeftAnim } from '@animations';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StoreState } from '@store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'authentication-feature',
  templateUrl: './authentication.feature.html',
  styleUrls: ['./authentication.feature.scss'],
  animations: [slideLeftAnim, opacityAnim, hideLeftPart, closeModal]
})
export class AuthenticationFeature implements OnInit, AfterViewInit {
  FORMS = FORMS;
  currentForm = FORMS.SIGN_IN;

  authenticationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl({ value: '', disabled: this.isSignInForm}, [Validators.required, Validators.email]),
    name: new FormControl({ value: '', disabled: this.isSignInForm}, [Validators.required])
  });

  constructor(
    private readonly router: Router,
    private readonly store: Store<StoreState>,
    private readonly httpClient: HttpClient
  ) {}

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
    ).subscribe(x => console.log(x));
    this.httpClient.get('/api/user').subscribe(x => console.log(x));
  };

  onChangeForm(formName: FORMS) {
    this.currentForm = formName;
    if (this.isSignInForm) {
      this.getFormConfirmEmail.disable();
      this.getFormName.disable();
    } else {
      this.getFormConfirmEmail.enable();
      this.getFormName.enable();
    }
  }

  get formEmail() {
    return this.authenticationForm.controls.email;
  }

  get getFormConfirmEmail() {
    return this.authenticationForm.controls.confirmEmail;
  }

  get getFormName() {
    return this.authenticationForm.controls.name;
  }

  get isSignInForm() { return this.currentForm === FORMS.SIGN_IN; };
}

enum FORMS {
  SIGN_IN='Sign in',
  SIGN_UP='Sign up'
};
