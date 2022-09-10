import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { appReducer } from './libs/store/app.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      mode: 'md',
      animated: false,
      scrollAssist: false,
      scrollPadding: false,
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer)
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    }],
  bootstrap: [AppComponent],
})
export class AppModule {}
