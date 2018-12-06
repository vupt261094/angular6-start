import { Pipe, PipeTransform } from '@angular/core';
import { AppSettings } from '../constants/app-settings.constant'
@Pipe({name: 'translateTitle'})
export class TranslateTitlePipe implements PipeTransform {
  transform(value: string): string {
    let title = "";
    // let MY_APPSETTING = AppSettings;
    switch(value){
        case AppSettings.prototype.states.dashboard: 
            title = "Dashboard";
            break;
        case AppSettings.prototype.states.user:
            title = "User Profile";
            break;
    }
    return title
  }
}