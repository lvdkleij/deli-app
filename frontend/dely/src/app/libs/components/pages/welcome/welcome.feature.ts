

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';
import { closeModal, hideLeftPart, opacityAnim, slideLeftAnim } from '@animations';

@Component({
  selector: 'welcome-feature',
  templateUrl: './welcome.feature.html',
  styleUrls: ['./welcome.feature.scss'],
  animations: [slideLeftAnim, opacityAnim, hideLeftPart, closeModal]
})
export class WelcomeFeature implements OnInit, AfterViewInit {

  @Input() data: UserProfileData;

  screenCounter = 0;
  presentModal = true;

  onNext = () => {
    this.screenCounter = Math.min(this.slides.length, this.screenCounter + 1);
  };

  onPrevious = () => {
    this.screenCounter = Math.max(0, this.screenCounter + 1);
  };
  onGetStarted = () => {
    this.presentModal = false;
  };

  slides = [
    {
      buttonText: 'Next',
      onNext: this.onNext,
      onPrevious: this.onPrevious
    },
    {
      buttonText: 'Next',
      onNext: this.onNext,
      onPrevious: this.onPrevious
    },
    {
      buttonText: 'Get Started',
      onNext: this.onGetStarted,
      onPrevious: this.onPrevious
    },
  ]

  constructor(
    private readonly navCtrl: NavController,
    private readonly animationCtrl: AnimationController
  ) {}

  ngOnInit(): void {

    // this.isAuthenticated = this.data.userId ? true : false;
  }

  ngAfterViewInit(): void {
  }
}

interface UserProfileData {
  userId: boolean;
}
