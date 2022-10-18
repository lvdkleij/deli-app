
import { Component, HostBinding, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Modals } from '../modal.constants';
import { ModalService } from '../modal.service';
import { slideLeftAnim } from './without-navigation.animations';


@Component({
  selector: 'without-navigation-modal',
  templateUrl: 'without-navigation.modal.html',
  styleUrls: ['without-navigation.modal.scss'],
  animations: [slideLeftAnim]
})
export class WithoutNavigationModal implements OnInit {

  @HostBinding('@slideLeftAnim') get slideIn() { return this.value; };


  modals = Modals;
  subscription: Subscription;
  value = null;


  constructor(
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isPresent$(Modals.WITHOUT_NAVIGATION).subscribe((value) => this.value = value);
  }

}
