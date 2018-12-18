import { Employee } from "src/models/Employee";
import { Chart } from "src/models/Chart";
import { User } from "src/models/user";

export class AppSettings {
    public states = {
        dashboard: 'dashboard',
        user: 'user'
    }
    /*
    * Key in local storage to store authentication token.
    * */
    public identityStorage: string = 'iAuthorizationToken';
}
export const EMPLOYEES: Employee[] = [
    { id: 1, name: 'Vu', salary: 1000, country: "VN" },
    { id: 2, name: 'Thuan', salary: 1200, country: "VN" },
    { id: 3, name: 'Meo', salary: 1500, country: "VN" },
    { id: 4, name: 'Nghia', salary: 800, country: "VN" },
];
export const CHARTS: Chart[] = [
    { id: 1, title: 'Daily Sales', description: 'increase in today sales.', percentage: 55, time: 'updated 4 minutes ago', status: 'good' },
    { id: 2, title: 'Email Subscriptions', description: 'Last Campaign Performance', percentage: 0, time: 'updated 5 minutes ago', status: 'average' },
    { id: 3, title: 'Completed Tasks', description: 'Last Campaign Performance', percentage: 0, time: 'updated 6 minutes ago', status: 'bad' },
];
// export const UserProfile: User = {
//         userId: 1,
//         company: "FPT Software",
//         name: "vupt261094",
//         email: "vupt261094@gmail.com",
//         firstName: "Vu",
//         lastName: "Pham",
//         address: "Cau Giay",
//         city: "Ha Noi",
//         country: "Viet Nam",
//         postalCode: 10000
// };