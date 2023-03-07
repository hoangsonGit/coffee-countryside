import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderDisplayService {

  private isHidden$ = new BehaviorSubject<boolean>(false);
  isHidden = this.isHidden$.asObservable();

  constructor() { }

  setHeaderDisplay(isHidden: boolean): void {
    this.isHidden$.next(isHidden);
  }
}
