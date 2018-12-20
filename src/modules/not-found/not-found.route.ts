import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found.component';

//#region Route configuration

const routes: Routes = [
    {
        path: '**',
        pathMatch: 'full',
        component: NotFoundComponent
    }
];


//#endregion

//#region Module configuration

@NgModule({
    imports: [
        RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotFoundRouteModule {
}

//#endregion
