import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AddProductComponent } from "./add-product.component";
import { SharedModule } from "../../shared/shared.module";
import { AddProductRouteModule } from "./add-product.route";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      AddProductRouteModule
    ],
    declarations: [
      AddProductComponent
    ],
    exports: [
      AddProductComponent
    ]
  })
  
  export class AddProductModule {
  }