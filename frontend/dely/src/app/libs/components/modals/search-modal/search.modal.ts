
import { AfterViewInit, Component, ElementRef, HostBinding, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomController } from '@ionic/angular';
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

  @HostBinding('@slideLeftAnim3') get slideIn() { return this.isPresent; };
  @ViewChild('searchInputElement', {read: ElementRef}) searchInputElement: ElementRef;

  showBottomShadow = false;
  category1;
  modals = Modals;
  isPresent$: Observable<Modal>;
  subscription: Subscription;

  products$;

  isPresent = false;

  constructor(
    public modalService: ModalService,
    private readonly store: Store<StoreState>,
    private readonly renderer: Renderer2,
    private readonly domCtrl: DomController
  ) {}

  ngOnInit(): void {
    this.subscription = this.modalService.isPresent$(Modals.SEARCH).subscribe((isPresent) => this.isPresent = isPresent);
    this.products$ = this.store.select(selectProducts);
  }

  onPresentModal(focusInput: boolean = false) {
    this.modalService.present(Modals.SEARCH);
    //https://stackoverflow.com/questions/72433442/displaying-keyboard-in-safari-ios-after-focus-on-input-after-page-loads-modal-s
    if (focusInput) {
      this.domCtrl.write(() => {
        this.renderer.setAttribute(this.searchInputElement.nativeElement, 'placeholder', 'Zoek een product...');
      });
      this.showBottomShadow = true;
      setTimeout(() => {
        this.searchInputElement.nativeElement.click();
        this.searchInputElement.nativeElement.focus();
      }, SLIDE_ANIMATION_TIME);
    }
  }


  onDismissModal() {
    this.modalService.dismiss(Modals.SEARCH);
    this.modalService.dismiss(Modals.WITHOUT_NAVIGATION);
    this.domCtrl.write(() => {
      this.renderer.setAttribute(this.searchInputElement.nativeElement, 'placeholder', 'Voeg iets toe aan je lijst...');
    });
    setTimeout(() => {
      this.showBottomShadow = false;
    }, SLIDE_ANIMATION_TIME);
  }

}
