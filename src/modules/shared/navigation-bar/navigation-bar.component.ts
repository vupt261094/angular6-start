import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../../constants/app-settings.constant'
// import { Router, ActivatedRoute} from '@angular/router';    
@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public title: string;
  // readonly states = AppSettings.
  constructor(private appSettings: AppSettings) {}
  

  ngOnInit() {
    let currentPath = window.location.pathname;
    let currentState = currentPath.substring(1, currentPath.length);
    this.translateState(currentState);
  }
  translateState(currentState){
    let title = "";
    switch(currentState){
      case this.appSettings.states.dashboard: 
          this.title = "Dashboard";
          break;
      case this.appSettings.states.user:
          this.title = "User Profile";
          break;
    }
  }

}
