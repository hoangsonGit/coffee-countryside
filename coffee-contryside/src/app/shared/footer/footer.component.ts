import { Component, OnInit } from '@angular/core';
import { GlobalConstant } from '../constants/global-constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openEmail(): void {
    window.location.href = `mailto:${GlobalConstant.MAIL_RECEPIENT}?subject=${GlobalConstant.MAIL_SUBJECT}`;
  }
}
