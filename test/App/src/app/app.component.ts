import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';
  vals!:string;
  inputData:any
myeve: any;
  handleEvent(eventData: any) {
    // console.log( eventData);
    this.vals=eventData
  }
}
