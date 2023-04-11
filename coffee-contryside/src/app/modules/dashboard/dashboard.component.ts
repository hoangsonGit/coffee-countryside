import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  products: number[] = [1,2,3,4,5,6,7,7,8,9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  constructor() { }

  ngOnInit(): void {

  }

}
