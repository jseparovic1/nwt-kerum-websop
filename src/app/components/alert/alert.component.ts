import { Component, OnInit, HostBinding } from '@angular/core';
import { AlertService } from 'src/app/service/alert.service';

@Component({
  selector: 'app-alert',
  template: `
    <div id="alert" [hidden]="!this.message">
      <div
          class="fixed pin-t pin-r w-64 h-10 mt-10 px-10 py-6 bg-white shadow-md flex items-center bg-green z-50">
        <p class="text-white">{{ this.message }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  message: string;

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.messages()
      .subscribe((message: string) => this.message = message );
  }
}
