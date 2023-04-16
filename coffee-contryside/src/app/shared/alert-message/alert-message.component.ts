import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.scss']
})
export class AlertMessageComponent implements OnInit {

  @Input() isShow: boolean = false;
  @Output() isCloseOutput = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.closeAlert();
    }, 3000);
  }

  closeAlert(): void {
    this.isCloseOutput.emit(true);
  }
}
