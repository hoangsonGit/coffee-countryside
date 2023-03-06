import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from './shared/constants/global-constants';
import { RoutingConstant } from './shared/constants/routing-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {

  }
  title = GlobalConstant.TITLE;

  isHidden: boolean = false;

  login() {
    this.isHidden = true;
    this.router.navigate([RoutingConstant.LOGIN]);
  }
}
