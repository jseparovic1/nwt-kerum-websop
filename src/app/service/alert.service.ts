import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  message = new Subject<string>();
  waitingTreshold = 1000;

  constructor() { }

  show(message: string) {
    this.message.next(message);
    setTimeout(() => {
      this.message.next('');
    }, this.waitingTreshold);
  }

  messages() {
    return this.message;
  }
}
