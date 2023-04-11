import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FooterDisplayService {
  private isHidden$ = new BehaviorSubject<boolean>(false);
  isHidden = this.isHidden$.asObservable();

  constructor() {}

  setFooterDisplay(isHidden: boolean): void {
    this.isHidden$.next(isHidden);
  }
}
