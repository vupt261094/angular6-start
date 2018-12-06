import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Chart } from 'src/models/Chart';

@Component({
  selector: 'dashboard-card-chart',
  templateUrl: './card-chart.component.html',
  styleUrls: ['./card-chart.component.scss']
})
export class CardChartComponent implements OnInit, OnChanges {
  @Input() chart: Chart;
  // @Input() name: string;
  // @Output() onClickTest = new EventEmitter<string>();
  constructor() { 
    
  }

  ngOnInit() {
  }
  ngOnChanges() {
  }

  getCardClass(status){
    return (status == 'good') ? "card-header-success" : ((status == 'average') ? "card-header-warning" : "card-header-danger");
  }

  // passToDashboard(newName:string){
  //   this.onClickTest.emit(newName);
  // }

}
