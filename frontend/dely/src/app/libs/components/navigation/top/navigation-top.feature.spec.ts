import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NavigationTopFeature } from './navigation-top.feature';
import { MenuClickListenerService } from './services/menu/menu.service';

describe('NavigationTopFeature', () => {
  let component: NavigationTopFeature;
  let fixture: ComponentFixture<NavigationTopFeature>;
  const menuClickListenerServiceMock = {};



  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTopFeature ],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: MenuClickListenerService, useValue: menuClickListenerServiceMock}]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationTopFeature);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
