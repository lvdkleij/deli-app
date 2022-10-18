
import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Modals } from '../modal.constants';
import { ModalService } from '../modal.service';
import { slideLeftAnim } from './item.animations';


@Component({
  selector: 'item-modal',
  templateUrl: 'item.modal.html',
  styleUrls: ['item.modal.scss'],
  animations: [slideLeftAnim]
})
export class ItemModal implements OnInit {

  @HostBinding('@slideLeftAnim') get slideIn() { return this.value; };


  modals = Modals;
  subscription: Subscription;
  value = null;


  constructor(
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isPresent$(Modals.ITEM).subscribe((value) => this.value = value);
  }

}
