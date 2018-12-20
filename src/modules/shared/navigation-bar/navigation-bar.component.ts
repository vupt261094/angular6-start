import { Component, OnInit, Inject } from '@angular/core';
import { AppSettings } from '../../../constants/app-settings.constant'
import { IAuthenticationService } from '../../../interfaces/authentication.interface';
import { Router } from '@angular/router';
// import { Router, ActivatedRoute} from '@angular/router';    
@Component({
  selector: 'navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  public title: string;
  // readonly states = AppSettings.
  constructor(private appSettings: AppSettings, @Inject("IAuthenticationService") private authenticationService: IAuthenticationService, private router: Router) {}
  

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
      case this.appSettings.states.product.list, this.appSettings.states.product.create, this.appSettings.states.product.edit:
          this.title = "Product";
          break;
    }
  }

  //log out - remove token from localStorage
  logOut(){
    this.authenticationService.clearIdentity();
    this.router.navigateByUrl("/login");
  }
}
