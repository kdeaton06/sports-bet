import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav-bar/nav/nav.component';
import { TickerComponent } from './components//nav-bar/ticker/ticker.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
