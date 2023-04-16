import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { AlertMessageComponent } from 'src/app/shared/alert-message/alert-message.component';
import { BackToTopComponent } from 'src/app/shared/back-to-top/back-to-top.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AlertMessageComponent,
    BackToTopComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatButtonModule,
  ]
})
export class DashboardModule { }
