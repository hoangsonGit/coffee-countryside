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
  username: string = "admin";
  password: string = "admin";

  loginForm = new FormGroup ({
    username: new FormControl(''),
    password: new FormControl('')
  });

  errorMessage: string = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    // Get data from Form
    const usernameValue = this.loginForm.controls["username"].value;
    const passwordValue = this.loginForm.controls["password"].value;

    // Check validation
    if (usernameValue === this.username && passwordValue === this.password) {
      this.router.navigate([RoutingConstant.STAFF_MANAGEMENT]);
    } else {
      this.errorMessage = "Invalid username or password.";
    }
  }
}
