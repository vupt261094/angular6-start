import { Component, OnInit, Inject } from '@angular/core';
import { User } from '../../models/user' 
import { IUserProfileService } from "../../interfaces/user-profile/user-profile.interface";
import { Router } from '@angular/router';
import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public model = {};
  constructor(@Inject("IUserProfileService") private userProfileService: IUserProfileService, public router: Router,) { 
    
  }

  ngOnInit() {
    this.userProfileService.getProfile(1).subscribe((res: User) => {
      this.model = res;
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        console.log('An error occurred:', err.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
      }
    });
  }

  updateProfile(model){
    this.userProfileService.updateProfile(model).subscribe(res => {
      console.log("Success");
    }, error => console.log("Error"));
  }
}
