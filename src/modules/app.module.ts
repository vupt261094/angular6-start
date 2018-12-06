import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { AppRouteModule } from './app.route';
import { AppSettings } from '../constants/app-settings.constant';
import { ServiceModule } from "../services/service.module";
// import { UserProfileComponent } from './user-profile/user-profile.component'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    AppRouteModule,
    ServiceModule.forRoot(),
    HttpClientModule
  ],
  providers: [AppSettings],
  bootstrap: [AppComponent]
})
export class AppModule { }
