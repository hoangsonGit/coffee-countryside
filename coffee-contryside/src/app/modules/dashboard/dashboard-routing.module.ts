import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstant } from 'src/app/shared/constants/routing-constants';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: RoutingConstant.DASHBOARD,
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
