import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from "@angular/router";
import { AuthorizeLayoutComponent } from '../modules/shared/authorize-layout/authorize-layout.component';
import { IsAuthorizedGuard } from '../guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    // component: AuthorizeLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard'
      },
      {
        path: 'login',
        loadChildren: 'src/modules/login/login.module#LoginModule'
      },
      {
        path: 'dashboard',
        loadChildren: 'src/modules/dashboard/dashboard.module#DashboardModule',
        canActivate: [IsAuthorizedGuard]
      },
      {
        path: 'user',
        loadChildren: 'src/modules/user-profile/user-profile.module#UserProfileModule',
        canActivate: [IsAuthorizedGuard]
      },
    ]
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})

export class AppRouteModule {
}