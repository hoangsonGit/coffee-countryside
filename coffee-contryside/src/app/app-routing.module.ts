import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstant } from './shared/constants/routing-constants';

const routes: Routes = [
  {
    path: '',
    // loadChildren: './modules/login/login.module#LoginModule',
    loadChildren: () => import('./modules/login/login.module').then(x => x.LoginModule),
    pathMatch: 'full'
  },
  {
    path: RoutingConstant.DASHBOARD,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(x => x.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
