import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ShoppingListPage } from './shopping-list.page';

describe('ShoppingListPage', () => {
  let component: ShoppingListPage;
  let fixture: ComponentFixture<ShoppingListPage>;
  let store: MockStore;
  const initialState = { app: { lists: []}};

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListPage ],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
