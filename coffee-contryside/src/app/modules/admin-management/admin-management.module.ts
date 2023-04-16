import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminManagementRoutingModule } from './admin-management-routing.module';
import { LeftNavbarComponent } from './components/left-navbar/left-navbar.component';
import { ContentComponent } from './components/content/content.component';


@NgModule({
  declarations: [
    LeftNavbarComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    AdminManagementRoutingModule
  ]
})
export class AdminManagementModule { }
