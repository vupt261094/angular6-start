import { Injectable } from '@angular/core';
import { EMPLOYEES } from '../../constants/app-settings.constant'
import { Employee } from '../../models/Employee'

// Interface
import { IDashboardService } from "../../interfaces/dashboard/dashboard.interface";

@Injectable({
  providedIn: 'root'
})
export class DashboardService implements IDashboardService{

  constructor() { }
  getEmployee() :Employee[]{
    return EMPLOYEES;
  }
}
