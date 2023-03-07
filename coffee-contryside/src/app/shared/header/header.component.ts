import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingConstant } from '../constants/routing-constants';
import { HeaderDisplayService } from './services/header-display.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private headerDisplayService: HeaderDisplayService
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.headerDisplayService.setHeaderDisplay(true);
    this.router.navigate([RoutingConstant.LOGIN]);
  }
}
