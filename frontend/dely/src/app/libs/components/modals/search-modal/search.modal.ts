
import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProducts, StoreState } from '@store';
import { Observable, Subscription } from 'rxjs';
import { Modals } from '../modal.constants';
import { Modal, ModalService } from '../modal.service';
import { slideLeftAnim, slideLeftAnim2, slideLeftAnim3, SLIDE_ANIMATION_TIME } from './search.animations';


@Component({
  selector: 'search-modal',
  templateUrl: 'search.modal.html',
  styleUrls: ['search.modal.scss'],
  animations: [slideLeftAnim, slideLeftAnim2, slideLeftAnim3]
})
export class SearchModal implements OnInit {

  @HostBinding('@slideLeftAnim3') get slideIn() { return this.value; };
  @ViewChild('searchInputElement', {read: ElementRef}) searchInputElement: ElementRef;

  category1;
  modals = Modals;
  isPresent$: Observable<Modal>;
  subscription: Subscription;

  products$;

  value = null;

  constructor(
    public modalService: ModalService,
    private readonly store: Store<StoreState>
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isPresent$(Modals.SEARCH).subscribe((value) => this.value = value);
    this.products$ = this.store.select(selectProducts);
  }

  onPresentModal() {
    this.modalService.present(Modals.SEARCH);
    setTimeout(() => {
      this.searchInputElement.nativeElement.focus();
    }, SLIDE_ANIMATION_TIME);
  }


  onDismissModal() {
    this.modalService.dismiss(Modals.SEARCH);

  }

}
