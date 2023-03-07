import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstant } from './shared/constants/global-constants';
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
    private headerDisplayService: HeaderDisplayService
  ) {
  }

  ngOnInit(): void {
    this.headerDisplayService.isHidden.subscribe(value => this.isHidden = value);
  }
}
