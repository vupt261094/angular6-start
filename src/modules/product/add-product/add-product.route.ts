import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AddProductComponent} from './add-product.component';
import {AuthorizeLayoutComponent} from '../../shared/authorize-layout/authorize-layout.component';

//#region Route configuration

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AuthorizeLayoutComponent,
    children: [
      {
        path: '',
        component: AddProductComponent,
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
export class AddProductRouteModule {
}

//#endregion
