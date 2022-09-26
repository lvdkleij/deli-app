
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { hideLeftPart, hideTopPart, opacityAnim, slideInFromBottom, slideLeftAnim } from '@animations';
import { Store } from '@ngrx/store';
import { selectProducts, StoreState } from '@store';
import { map, Observable, shareReplay, tap } from 'rxjs';
import { ModalService } from '../modal.service';


@Component({
  selector: 'search-modal',
  templateUrl: 'search.modal.html',
  styleUrls: ['search.modal.scss'],
  animations: [hideLeftPart, slideLeftAnim, opacityAnim, slideInFromBottom, hideTopPart]
})
export class SearchModal implements OnInit {

  @Output() closeModal = new EventEmitter();

  searchText = '';

  showCategoryModal = false;

  productCategoriesData$: Observable<any>;
  productSubCategoriesData$: Observable<any>;
  categoriesNameAndIcon$: Observable<any[]>;
  products$: Observable<any[]>;

  showSearchResults = false;

  subCategories = [];
  showSubCategory = {};

  constructor(
    public modalService: ModalService,
    private readonly store: Store<StoreState>,
  ) {}

  ngOnInit(): void {
    this.productCategoriesData$ = this.store.select(selectProducts).pipe(shareReplay());
    this.categoriesNameAndIcon$ = this.productCategoriesData$.pipe(
      map(data => data.map(category => ({ text: category.name, icon: category.icon })))
    );
  }

  onCategoryClick(categoryName: string) {
    this.showCategoryModal = true;

    this.resetSubCategories();
    this.productSubCategoriesData$ = this.productCategoriesData$.pipe(
      map(data => data.filter(category => category.name === categoryName)[0].products),
      tap(subCategories => subCategories.forEach(subCategory => {
        this.subCategories.push(subCategory.name);
        this.showSubCategory[subCategory.name] = true;
      })),
      shareReplay()
    );

    this.products$ = this.productSubCategoriesData$.pipe(
      map(subCategories => {
        let productsToShow = [];
        subCategories.forEach(subCategory => {
          if (this.showSubCategory[subCategory.name]) {
            productsToShow = productsToShow.concat(subCategory.products);
          }
        });
        productsToShow.sort((a, b) => (a.name > b.name) ? 1 : -1);
        return productsToShow;
      }),
    );
  }

  resetSubCategories() {
    this.subCategories = [];
    this.showSubCategory = {};
  }

  onSubCategoryClick(subCategory: string) {
    if (subCategory === 'all') {
      this.subCategories.forEach(name => this.showSubCategory[name] = true);
    } else {
      this.showSubCategory[subCategory] = !this.showSubCategory[subCategory];
    }
    this.onFilter();
  }

  onFilter() {
    this.products$ = this.productSubCategoriesData$.pipe(
      map(subCategories => {
        let productsToShow = [];
        subCategories.forEach(subCategory => {
          if (this.showSubCategory[subCategory.name]) {
            productsToShow = productsToShow.concat(subCategory.products);
          }
        });
        productsToShow.sort((a, b) => (a.name > b.name) ? 1 : -1);
        return productsToShow;
      })
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
