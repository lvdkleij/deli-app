
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { hideLeftPart, hideTopPart, opacityAnim, slideInFromBottom, slideLeftAnim } from '@animations';
import { Store } from '@ngrx/store';
import { selectProducts, StoreState } from '@store';
import { map, Observable, of, shareReplay, single, take, tap } from 'rxjs';
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

  data$: Observable<any>;
  productSubCategoriesData$: Observable<any>;
  products$: Observable<any[]>;

  subCategories_ = [];
  showSubCategory = {};

  allProducts = [];

  screensStack;
  screens = {
    categories: {
      name: 'categories',
      isActive: true,
      close: () => this.closeModal.emit(),
      closeButton: {
        icon: '',
        text: 'close'
      }
    },
    products: {
      name: 'products',
      isActive: false,
      close: () => {
        this.screens.products.isActive = false;
        this.screensStack.pop();
      },
      closeButton: {
        icon: '',
        text: 'close'
      }
    },
    searchResults: {
      name: 'searchResults',
      isActive: false,
      close: () => {
        this.screens.searchResults.isActive = false;
        this.screensStack.pop();
      },
      closeButton: {
        icon: '',
        text: 'close'
      }
    }
  };

  allProducts$;
  filteredProducts$;
  categoriesNameAndIcon$;
  subCategories: { [key: string]: Observable<any[]> } = {};

  constructor(
    public modalService: ModalService,
    private readonly store: Store<StoreState>,
  ) {}

  ngOnInit(): void {
    this.screensStack = [this.screens.categories];

    this.store.select(selectProducts).pipe(take(1)).subscribe(data => {
      const categoriesNameAndIcon = [];
      let allProducts = [];
      data.forEach(category => {
        categoriesNameAndIcon.push({ text: category.name, icon: category.icon });
        category.products.forEach(subCategory => {
          allProducts = allProducts.concat(subCategory.products);
        });
        this.subCategories[category.name] = of(category.products).pipe(
          tap(subCategories => {
            this.resetSubCategories();
            subCategories.forEach(subCategory => {
              this.subCategories_.push(subCategory.name);
              this.showSubCategory[subCategory.name] = true;
            });
          }),
          shareReplay()
        );
      });
      this.categoriesNameAndIcon$ = of(categoriesNameAndIcon);
      this.allProducts$ = of(allProducts);
      this.filteredProducts$ = this.allProducts$;
    });
  }

  onCategoryClick(categoryName: string) {
    this.screens.products.isActive = true;
    this.screensStack.push(this.screens.products);
    this.productSubCategoriesData$ = this.subCategories[categoryName];
    this.products$ = this.productSubCategoriesData$.pipe(
      map(subCategories => {
        console.log(subCategories);
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

  onShowSearchResults() {
    this.screens.searchResults.isActive = true;
    this.screensStack.push(this.screens.searchResults);
  }

  resetSubCategories() {
    this.subCategories_ = [];
    this.showSubCategory = {};
  }

  onSubCategoryClick(subCategory: string) {
    if (subCategory === 'all') {
      this.subCategories_.forEach(name => this.showSubCategory[name] = true);
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
    let canClose = true;
    this.screensStack.slice().reverse().forEach(screen => {
      if (canClose && screen.isActive) {
        screen.close();
        canClose = false;
      }
    });
  }

  onSearchChange(_text: string) {
    const text = _text.toLowerCase();
    this.filteredProducts$ = this.allProducts$.pipe(
      map((data: any[]) => {
        const filteredProducts = data.filter(x => x.name.toLowerCase().includes(text));
        return filteredProducts;
      })
    );
  }

  onStopSearch() {
    this.searchText = '';
  }

}
