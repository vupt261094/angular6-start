import {NgModule, ModuleWithProviders} from '@angular/core';
import { IDashboardService } from "../interfaces/dashboard/dashboard.interface";
import { DashboardService } from '../services/dashboard/dashboard.service';
import { IUserProfileService } from '../interfaces/user-profile/user-profile.interface';
import { UserProfileService } from '../services/user-profile/user-profile.service'
import { AuthenticationService } from './authentication.service';

@NgModule({})

export class ServiceModule {

  //#region Methods

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServiceModule,
      providers: [
        {provide: 'IDashboardService', useClass: DashboardService},
        {provide: 'IUserProfileService', useClass: UserProfileService},
        {provide: 'IAuthenticationService', useClass: AuthenticationService},
      ]
    };
  }

  //#endregion
}


