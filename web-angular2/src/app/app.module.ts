import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { RouterModule } from '@angular/router';

import {  OAuthService } from 'angular-oauth2-oidc';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import {AppService} from './app.service';



@NgModule({
  declarations: [
    AppComponent,
    Comp1Component
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule
  ],
  providers: [OAuthService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
