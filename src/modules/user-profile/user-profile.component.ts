import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../models/user' 
import { IUserProfileService } from "../../interfaces/user-profile/user-profile.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public model = {}
  constructor(@Inject("IUserProfileService") private userProfileService: IUserProfileService, public router: Router,) { 
    
  }

  ngOnInit() {
    this.userProfileService.getProfile(1).subscribe(res => {
      this.model = res;
    });
  }

  updateProfile(model){
    this.userProfileService.updateProfile(model).subscribe(res => {
      console.log("Success");
    }, error => console.log("Error"));
  }
}
