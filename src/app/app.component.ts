import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers:[ AppService ],
})
export class AppComponent {
  
  constructor(private appService: AppService){}
  
  title = 'MyAngularPrj';
  
  ngOnInit(): void {
    this.appService.getMessage(msg => {
      this.title == msg;  
    })
  }
}
