

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';
import { closeModal, hideLeftPart, opacityAnim, slideLeftAnim } from './welcome.animations';

@Component({
  selector: 'welcome-feature',
  templateUrl: './welcome.feature.html',
  styleUrls: ['./welcome.feature.scss'],
  animations: [slideLeftAnim, opacityAnim, hideLeftPart, closeModal]
})
export class WelcomeFeature implements OnInit, AfterViewInit {

  @Input() data: UserProfileData;

  isAuthenticated;

  screens = [
    { showScreen: false, showNav: false},
    { showScreen: false, showNav: false},
  ];

  presentModal = true;

  constructor(
    private readonly navCtrl: NavController,
    private readonly animationCtrl: AnimationController
  ) {}

  ngOnInit(): void {

    // this.isAuthenticated = this.data.userId ? true : false;
  }

  ngAfterViewInit(): void {
  }

  onNext(screenId: number) {
    this.screens[screenId].showScreen = true;

  }
  onPrevious(screenId: number) {
    this.screens[screenId].showScreen = false;
  }

  onSlideLeftDone(screenId: number) {
    this.screens[screenId].showNav = true;
  }
}

interface UserProfileData {
  userId: boolean;
}
