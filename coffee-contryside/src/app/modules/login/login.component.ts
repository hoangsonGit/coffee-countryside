import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoutingConstant } from 'src/app/shared/constants/routing-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Dummy data for login
  adminUsername: string = "admin";
  adminPassword: string = "admin";
  staffUsername: string = "staff";
  staffPassword: string = "staff";

  loginForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });

  errorMessage: string = "";

  alerts: Alert[] = Array.from(ALERTS);
  isShow: boolean = false;

  constructor(
    private router: Router
  ) { }

  close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}

  ngOnInit(): void {
  }

  login() {
    // Get data from Form
    const usernameValue = this.loginForm.controls["username"].value;
    const passwordValue = this.loginForm.controls["password"].value;

    // Check validation
    if (usernameValue === this.adminUsername && passwordValue === this.adminPassword) {
      this.router.navigate([RoutingConstant.ADMIN_MANAGEMENT]);
    } else if (usernameValue === this.staffUsername && passwordValue === this.staffPassword) {
      this.router.navigate([RoutingConstant.STAFF_MANAGEMENT]);
    } else {
      this.errorMessage = "Invalid username or password.";
    }
  }

  backToHome() {
    this.isShow = !this.isShow;
    // this.router.navigate([RoutingConstant.DASHBOARD]);
  }
}

interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	}];