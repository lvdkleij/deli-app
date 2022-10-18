

import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'user-profile-feature',
  templateUrl: './user-profile.feature.html',
  styleUrls: ['./user-profile.feature.scss'],
})
export class UserProfileFeature implements OnInit {

  @Input() data: UserProfileData;

  isAuthenticated;

  constructor(
    private readonly navCtrl: NavController,
  ) {}

  ngOnInit(): void {

    // this.isAuthenticated = this.data.userId ? true : false;
  }

}

interface UserProfileData {
  userId: boolean;
}
