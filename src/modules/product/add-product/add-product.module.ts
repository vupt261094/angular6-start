import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AddProductComponent } from "./add-product.component";
import { SharedModule } from "../../shared/shared.module";
import { AddProductRouteModule } from "./add-product.route";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ShowHideDirective } from "./show-hide.directive";

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      AddProductRouteModule,
      ReactiveFormsModule
    ],
    declarations: [
      AddProductComponent,
      ShowHideDirective
    ],
    exports: [
      AddProductComponent
    ]
  })
  
  export class AddProductModule {
  }