import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ManageProductComponent } from "./manage-product.component";
import { SharedModule } from "../../shared/shared.module";
import { ManageProductRouteModule } from "./manage-product.route";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      ManageProductRouteModule
    ],
    declarations: [
      ManageProductComponent
    ],
    exports: [
      ManageProductComponent
    ]
  })
  
  export class ManageProductModule {
  }