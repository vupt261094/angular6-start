import { BrowserModule  } from '@angular/platform-browser';
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { AppRouteModule } from './app.route';
import { AppSettings } from '../constants/app-settings.constant';
import { ServiceModule } from "../services/service.module";
import { GuardModule } from '../guards/guard.module';
import { AuthInterceptor } from '../interceptors/authentication-http-interceptor';
import { GlobalInterceptor } from '../interceptors/global-http-interceptor';
import { ConfigUrl } from '../constants/config-url.constant';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';
// import { UserProfileComponent } from './user-profile/user-profile.component'

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    AppRouteModule,
    ServiceModule.forRoot(),
    HttpClientModule,
    GuardModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    })
    
  ],
  providers: [
    AppSettings,
    ConfigUrl,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalInterceptor,
      multi: true
    },
    ToastrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
