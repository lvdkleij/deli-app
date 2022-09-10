import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavigationTopFeature } from './navigation-top.feature';

describe('NavigationTopFeature', () => {
  let component: NavigationTopFeature;
  let fixture: ComponentFixture<NavigationTopFeature>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTopFeature ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationTopFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
