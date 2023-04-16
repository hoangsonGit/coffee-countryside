import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: number[] = [1,2,3,4,5,6,7,7,8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  isShow: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  buyOnClick() {
    this.isShow = true;
  }

  isCloseOutput() {
    this.isShow = false;
  }

  backToTop() {
    window.scrollTo(0, 0);
  }
}
