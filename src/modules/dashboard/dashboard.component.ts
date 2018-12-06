import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { IDashboardService } from "../../interfaces/dashboard/dashboard.interface";
import { CardChartService } from "../../services/dashboard/card-chart/card-chart.service";
import { Employee } from '../../models/Employee'
import { Chart } from '../../models/Chart'
import { CardChartComponent } from "./card-chart/card-chart.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // providers: [DashboardService, CardChartService]
})
export class DashboardComponent implements OnInit {
  employees: Employee[];
  charts: Chart[];
  // @ViewChild(CardChartComponent)
  private cardChartComponent:CardChartComponent;
  constructor(@Inject('IDashboardService') private dashboardService: IDashboardService, private cardChartService: CardChartService) { 
    this.employees = dashboardService.getEmployee();
    this.charts = cardChartService.getChart();
  }

  ngOnInit() {

  }
}
