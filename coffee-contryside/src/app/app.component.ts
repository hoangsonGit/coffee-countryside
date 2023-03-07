import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { GlobalConstant } from './shared/constants/global-constants';
import { RoutingConstant } from './shared/constants/routing-constants';
import { HeaderDisplayService } from './shared/header/services/header-display.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = GlobalConstant.TITLE;
  isHidden: boolean = false;

  constructor(
    private router: Router,
    private headerDisplayService: HeaderDisplayService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url.replace('/','') === RoutingConstant.LOGIN) {
          headerDisplayService.setHeaderDisplay(true);
        } else {
          headerDisplayService.setHeaderDisplay(false);
        }
      }
    });
  }

  ngOnInit(): void {
    this.headerDisplayService.isHidden.subscribe(value => this.isHidden = value);
  }
}
