import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {SideBarComponent} from './side-bar/side-bar.component';
import {RouterModule} from '@angular/router';
import { AuthorizeLayoutComponent } from './authorize-layout/authorize-layout.component';
import { FormsModule } from "@angular/forms";
import { TranslateTitlePipe } from "../../pipes/translate-title.pipes";



//#region Module declaration

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    NavigationBarComponent,
    SideBarComponent,
    AuthorizeLayoutComponent,
    TranslateTitlePipe
  ]
})
export class SharedModule {
}

//#endregion
