
import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Modals } from '../modal.constants';
import { ModalService } from '../modal.service';
import { slideLeftAnim } from './with-navigation.animations';


@Component({
  selector: 'with-navigation-modal',
  templateUrl: 'with-navigation.modal.html',
  styleUrls: ['with-navigation.modal.scss'],
  animations: [slideLeftAnim]
})
export class WithNavigationModal implements OnInit {

  @HostBinding('@slideLeftAnim') get slideIn() { return this.value; };


  modals = Modals;
  subscription: Subscription;
  value = null;


  constructor(
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isPresent$(Modals.WITH_NAVIGATION).subscribe((value) => this.value = value);
  }

}
