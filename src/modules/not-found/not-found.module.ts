import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundComponent } from "./not-found.component";
import { NotFoundRouteModule } from "./not-found.route";
import { FormsModule } from "@angular/forms"

@NgModule({
  imports: [
    FormsModule,
    NotFoundRouteModule,
    CommonModule
  ],
  declarations: [
    NotFoundComponent
  ],
  exports: [
    NotFoundComponent
  ]
})

export class NotFoundModule {
}