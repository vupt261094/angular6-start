import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { LoginRouteModule } from "./login.route";
import { FormsModule } from "@angular/forms"

@NgModule({
  imports: [
    FormsModule,
    LoginRouteModule,
    CommonModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {
}