import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile.component';
import { AuthorizeLayoutComponent } from '../shared/authorize-layout/authorize-layout.component';
import { IsAuthorizedGuard } from '../../guards/auth.guard';

//#region Route configuration

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AuthorizeLayoutComponent,
    // canActivate: [IsAuthorizedGuard],
    children: [
      {
        path: '',
        component: UserProfileComponent,
        pathMatch: 'full'
      }
    ]
  }
];


//#endregion

//#region Module configuration

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRouteModule {
}

//#endregion
