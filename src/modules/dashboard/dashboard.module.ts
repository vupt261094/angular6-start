import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { DashboardRouteModule } from "./dashboard.route";
import { CardChartComponent } from './card-chart/card-chart.component';
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      FormsModule,
      DashboardRouteModule
    ],
    declarations: [
      DashboardComponent,
      CardChartComponent
    ],
    exports: [
      DashboardComponent
    ]
  })
  
  export class DashboardModule {
  }