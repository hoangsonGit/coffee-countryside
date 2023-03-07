import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './modules/login/login.module';
import { HeaderComponent } from './shared/header/header.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { StaffManagementComponent } from './modules/staff-management/staff-management.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StaffManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
