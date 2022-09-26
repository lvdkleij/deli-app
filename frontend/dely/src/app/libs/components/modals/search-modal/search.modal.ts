
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { hideLeftPart, opacityAnim, slideLeftAnim } from '@animations';
import { Store } from '@ngrx/store';
import { selectProducts, StoreState } from '@store';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { ModalService } from '../modal.service';


@Component({
  selector: 'search-modal',
  templateUrl: 'search.modal.html',
  styleUrls: ['search.modal.scss'],
  animations: [hideLeftPart, slideLeftAnim, opacityAnim]
})
export class SearchModal implements OnInit {

  @Output() closeModal = new EventEmitter();

  searchText = '';

  showCategoryModal = false;

  productsData$: Observable<any>;
  categories$: Observable<any[]>;
  subCategories$: Observable<any>;
  products$: Observable<any[]>;

  showSubCategory = {

  }

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

  onCategoryClick(categoryName: string) {
    this.showCategoryModal = true;
    this.showSubCategory = {};
    this.subCategories$ = this.productsData$.pipe(
      map(data => data.filter(category => category.name === categoryName)[0]),
      tap(category => category.products.forEach(subCategory => {
        this.showSubCategory[subCategory] = true;
      }))
    );
  }

  onSubCategoryClick(subCategory: string) {
    this.showSubCategory[subCategory] = !this.showSubCategory[subCategory];
    this.onFilter();
  }

  onFilter() {
    this.products$ = this.subCategories$.pipe(
      tap(x => console.log(x)),
      map(subCategories => subCategories.products.filter(subCategory => this.showSubCategory[subCategory.name])),
    );
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
