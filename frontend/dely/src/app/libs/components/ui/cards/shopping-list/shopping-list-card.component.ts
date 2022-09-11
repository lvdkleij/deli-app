import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'shopping-list-card',
  templateUrl: 'shopping-list-card.component.html',
  styleUrls: ['shopping-list-card.component.scss']
})
export class ShoppingListCardComponent {

  @Input() shoppingListCardData: ShoppingListCardData;

  constructor(
    private readonly navCtrl: NavController,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  onShoppingListCardClick() {
    const relativeRoute = this.router.createUrlTree([this.shoppingListCardData.name], {
      relativeTo: this.route
    });

    this.navCtrl.navigateForward(relativeRoute);
  }
}

export interface ShoppingListCardData {
  background: string;
  name: string;
  sharedWidth: string[];
}
