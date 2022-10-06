

import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { AnimationController, NavController } from '@ionic/angular';
import { closeModal, hideLeftPart, opacityAnim, slideLeftAnim } from '@animations';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setHasSeenTour, StoreState } from '@store';
import { BUTTON_VIEW } from '@components/ui';

@Component({
  selector: 'welcome-tour-feature',
  templateUrl: './welcome.feature.html',
  styleUrls: ['./welcome.feature.scss'],
  animations: [slideLeftAnim, opacityAnim, hideLeftPart, closeModal]
})
export class WelcomeTourFeature implements OnInit, AfterViewInit {
  BUTTON_VIEW = BUTTON_VIEW;

  presentModal = true;

  orderedTourStops = [
    {
      title: 'Your digital shopping list',
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ut vitae obcaecati laborum dolorum
      delectus provident, eius sed ea aliquid laudantium vero, nobis in, quasi dolores quibusdam placeat quam.`,
      onNext: () => this.currentTourStop++,
      onNextBtn: 'Next'
    },
    {
      title: 'Personalize your experience',
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ut vitae obcaecati laborum dolorum
      delectus provident, eius sed ea aliquid laudantium vero, nobis in, quasi dolores quibusdam placeat quam.`,
      onNext: () => this.currentTourStop++,
      onNextBtn: 'Next'
    },
    {
      title: 'Shop together',
      text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio eos ut vitae obcaecati laborum dolorum
      delectus provident, eius sed ea aliquid laudantium vero, nobis in, quasi dolores quibusdam placeat quam.`,
      onNext: () => {
        this.store.dispatch(setHasSeenTour({ hasSeenTour: true }));
        this.router.navigate(['/app/shopping-lists']);
      },
      onNextBtn: 'Get Started'
    }
  ];

  currentTourStop = 0;
  totalTourStops = this.orderedTourStops.length;
  setupProfilePage = false;

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
    this.currentTourStop++;
  };
}
