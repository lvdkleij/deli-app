import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { ShoppingListsPage } from './shopping-lists.page';

describe('ShoppingListsPage', () => {
  let component: ShoppingListsPage;
  let fixture: ComponentFixture<ShoppingListsPage>;
  let store: MockStore;
  const initialState = { app: { lists: []}};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListsPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ],
      providers:[
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
