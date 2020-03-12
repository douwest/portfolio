import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from '../shared/material/material.module';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AnimationService} from 'src/shared/services/animation.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TimerComponent} from './countdown/timer.component';
import {CountdownModule} from 'ngx-countdown';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CountdownModule
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    TimerComponent
  ],
  providers: [AnimationService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {
}

