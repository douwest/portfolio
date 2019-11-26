import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from '../shared/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    ToolbarComponent,
    LoadingScreenComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
