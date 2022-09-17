import { Component, Input, OnDestroy, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Modals, ModalService } from '@components/modals';
import { DomController } from '@ionic/angular';
import { ScrollListenerService } from '@services';
import { Subscription } from 'rxjs';
import { hideToolbarAnim } from './animations';

@Component({
  selector: 'navigation-top-with-searchbar-component',
  templateUrl: 'with-searchbar.component.html',
  styleUrls: ['with-searchbar.component.scss'],
  animations: [hideToolbarAnim]
})
export class NavigationTopWithSearchbarComponent implements OnInit, OnDestroy {
  @ViewChild('navBar') navBar;
  @Input() data: { title?: string } = {};

  _hideToolbar = false;
  get hideToolbar() {
    return this._hideToolbar;
  }
  @Input() set hideToolbar(value: boolean) { this._hideToolbar = value; }

  scrollSubscription: Subscription;
  modals = Modals;

  toolbarHeight = 0;

  constructor(
    readonly modalService: ModalService,
  ) {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  onPresentModal() {
    this.toolbarHeight = 42;
    this.hideToolbar= true;

    this.modalService.present(Modals.SEARCH);
  }


  onDismissModal() {
    this.hideToolbar= false;
    this.modalService.dismiss(Modals.SEARCH);

  }


}
