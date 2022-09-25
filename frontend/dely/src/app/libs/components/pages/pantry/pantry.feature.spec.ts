import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PantryFeature } from './pantry.feature';

describe('PantryFeature', () => {
  let component: PantryFeature;
  let fixture: ComponentFixture<PantryFeature>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PantryFeature ],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PantryFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
