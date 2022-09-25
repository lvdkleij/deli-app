
import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { hideLeftPart, slideLeftAnim } from '@components/pages/welcome/welcome.animations';
import { DomController } from '@ionic/angular';
import { Store } from '@ngrx/store';
import { selectProducts, StoreState } from '@store';
import { map, Observable, shareReplay, Subscription } from 'rxjs';
import { Modals } from '../modal.constants';
import { Modal, ModalService } from '../modal.service';


@Component({
  selector: 'search-modal',
  templateUrl: 'search.modal.html',
  styleUrls: ['search.modal.scss'],
  animations: [hideLeftPart, slideLeftAnim]
})
export class SearchModal implements OnInit {

  @Output() closeModal = new EventEmitter();

  products$;

  searchText = '';

  showCategoryModal = false;

  productsData$: Observable<any>;
  categories$: Observable<any[]>;

  constructor(
    public modalService: ModalService,
    private readonly store: Store<StoreState>,
  ) {}

  ngOnInit(): void {
    this.productsData$ = this.store.select(selectProducts).pipe(shareReplay());
    this.categories$ = this.productsData$.pipe(
      map(data => data.map(category => ({ text: category.name, icon: category.icon })))
    );
  }

  onCategoryClick(category: string) {
    this.showCategoryModal = true;
  }

  onClose() {
    if (this.showCategoryModal) {
      this.showCategoryModal = false;
    } else {
      this.closeModal.emit();
    }
  }

  onStopSearch() {
    this.searchText = '';
  }


}
