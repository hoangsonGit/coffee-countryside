import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingConstant } from './shared/constants/routing-constants';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutingConstant.DASHBOARD,
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./modules/login/login.module').then((x) => x.LoginModule),
  },
  {
    path: RoutingConstant.STAFF_MANAGEMENT,
    loadChildren: () =>
      import('./modules/staff-management/staff-management.module').then(
        (x) => x.StaffManagementModule
      ),
  },
  {
    path: RoutingConstant.ADMIN_MANAGEMENT,
    loadChildren: () =>
      import('./modules/admin-management/admin-management.module').then(
        (x) => x.AdminManagementModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
