import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserProfileComponent } from "./user-profile.component";
import {SharedModule} from "../shared/shared.module";
import { UserProfileRouteModule } from "./user-profile.route";
import { FormsModule } from "@angular/forms"

@NgModule({
    imports: [
      FormsModule,
      SharedModule,
      UserProfileRouteModule,
      CommonModule
    ],
    declarations: [
      UserProfileComponent
    ],
    exports: [
      UserProfileComponent
    ]
  })
  
  export class UserProfileModule {
  }