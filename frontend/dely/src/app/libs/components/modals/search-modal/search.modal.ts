
import { Component, HostBinding, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Modals } from '../modal.constants';
import { Modal, ModalService } from '../modal.service';
import { slideLeftAnim } from './search.animations';


@Component({
  selector: 'search-modal',
  templateUrl: 'search.modal.html',
  styleUrls: ['search.modal.scss'],
  animations: [slideLeftAnim]
})
export class SearchModal implements OnInit {

  @HostBinding('@slideLeftAnim') get slideIn() { return this.value; };

  modals = Modals;
  isPresent$: Observable<Modal>;
  subscription: Subscription;

  value = null;

  constructor(
    public modalService: ModalService
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isPresent$(Modals.SEARCH).subscribe((value) => this.value = value);
  }

}
