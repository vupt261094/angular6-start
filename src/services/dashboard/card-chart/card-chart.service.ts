import { Injectable } from '@angular/core';
import { Chart } from "../../../models/Chart";
import { CHARTS } from '../../../constants/app-settings.constant'

@Injectable({
  providedIn: 'root'
})
export class CardChartService {

  constructor() { 
    
  }
  getChart(): Chart[]{
    return CHARTS;
  }
}
