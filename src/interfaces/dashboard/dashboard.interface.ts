import { Employee } from "../../models/Employee";

export interface IDashboardService {
    getEmployee(): Employee[]
}