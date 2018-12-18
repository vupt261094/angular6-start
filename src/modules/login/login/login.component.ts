import { Component, OnInit, Inject } from '@angular/core';
import { LoginModel } from '../../../models/login';
import { IAuthenticationService } from '../../../interfaces/authentication.interface';
import { AuthorizationToken } from '../../../models/authentication-token';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model = {};
  constructor(@Inject("IAuthenticationService") private authenticationService: IAuthenticationService, private route: Router) { }

  ngOnInit() {
  }

  login(model: LoginModel){
    this.authenticationService.login(model).subscribe((res: AuthorizationToken) => {
      this.authenticationService.setAuthorization(res);
      this.route.navigateByUrl("/dashboard");
    })
  }

}
