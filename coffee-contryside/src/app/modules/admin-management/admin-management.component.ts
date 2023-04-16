import { Component, OnInit } from '@angular/core';
import { TAB_LIST } from './models/admin-enum';

@Component({
  selector: 'app-admin-management',
  templateUrl: './admin-management.component.html',
  styleUrls: ['./admin-management.component.scss']
})
export class AdminManagementComponent implements OnInit {

  TAB_LIST = TAB_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
