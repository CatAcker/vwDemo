import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VWLandingPageComponent } from './vwlanding-page/vwlanding-page.component';
import { LoginCompleteComponent } from './login-complete/login-complete.component';

@NgModule({
  declarations: [
    AppComponent,
    VWLandingPageComponent,
    LoginCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
